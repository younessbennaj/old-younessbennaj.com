import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import hero from '@/images/hero.png'

import Balancer from 'react-wrap-balancer'

import {
  SwatchIcon,
  PencilIcon,
  BookOpenIcon,
  UserGroupIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { LinkedInIcon, XIcon } from '@/components/SocialIcons'

import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { Icon } from '@radix-ui/react-select'

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function Photos() {
  // let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'dark:bg-zinc-800 relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl',
              // rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.createdAt} decorate>
        {formatDate(article.createdAt)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

// function SocialLink({ icon: Icon, ...props }) {
//   return (
//     <Link className="group -m-1 p-1" {...props}>
//       <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
//     </Link>
//   )
// }

function SocialLink({ className, href, children, icon: Icon, ...delegated }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        {...delegated}
        href={href}
        className="hover: dark:hover: dark:text-zinc-200 group flex text-sm font-medium text-zinc-800 transition"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-500" />
        <span className="ml-2 transition group-hover:text-sky-500">
          {children}
        </span>
      </Link>
    </li>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)
  // const { theme } = useTheme()

  return (
    <>
      <div className="sm:px-8">
        <div className="mx-auto mt-16 w-full max-w-7xl lg:px-8">
          <div className="relative overflow-hidden rounded-lg px-4 py-16 sm:px-8 lg:px-12">
            {/* // Grid 2 columns */}
            <div className="block md:hidden">
              {/* <Image src={hero} alt="Youness Bennaj" /> */}
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-12">
              <div className="pt-8">
                <h1 className="dark:text-zinc-100 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                  Développeur web basé au Japon
                </h1>
                <p className="dark:text-zinc-400 mt-6 text-base text-zinc-600">
                  Je suis Youness, développeur web basé à Tokyo. Après avoir
                  concrétisé mon propre projet professionnel au Japon, j’ai
                  décidé de partager mon retour d’expérience et des conseils
                  pratiques pour vous aider à votre tour à lancer votre carrière
                  et réussir votre installation.
                </p>
                <div className="mt-6 flex gap-6">
                  <SocialLink
                    href="https://www.linkedin.com/in/youness-bennaj/"
                    aria-label="Follow on LinkedIn"
                    icon={LinkedInIcon}
                    target="_blank"
                  >
                    Rejoignez-moi sur LinkedIn
                  </SocialLink>
                  {/* <SocialLink
                    href="mailto:youness.bennaj@gmail.com"
                    icon={MailIcon}
                    target="_blank"
                  >
                    youness.bennaj@gmail.com
                  </SocialLink> */}
                </div>
              </div>
              <div className="hidden md:block">
                {/* <Image src={hero} alt="Youness Bennaj" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Photos /> */}

      <div className="sm:px-8">
        <div className="mx-auto mt-16 w-full max-w-7xl lg:px-8">
          <div className="relative overflow-hidden rounded-lg px-4 py-16 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-16 md:flex-row">
              <h2 className="dark:text-zinc-100 text-balance text-center text-4xl font-semibold tracking-tight text-zinc-800 md:text-left">
                Des ressources concrètes pour s'installer et travailler au Japon
              </h2>
              <div>
                {/* // grid 2 * 2 */}
                <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 md:gap-y-8 lg:grid-cols-2">
                  <div className="flex flex-col items-center rounded-lg bg-white text-center md:items-start md:text-left">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-md bg-sky-600 p-2 shadow-lg shadow-slate-600/30">
                      <PencilIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="dark:text-zinc-100 text-lg font-semibold text-zinc-800">
                      Articles et contenus approfondis
                    </h3>
                    <p className="dark:text-zinc-400 mt-2 text-zinc-600">
                      Des décryptages complets sur les salaires, visas,
                      conditions de travail, modes de vie, etc.
                    </p>
                  </div>
                  <div className="flex flex-col items-center rounded-lg bg-white text-center md:items-start md:text-left">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-md bg-sky-600 p-2 shadow-lg shadow-slate-600/30">
                      <UserGroupIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="dark:text-zinc-100 text-lg font-semibold text-zinc-800">
                      Des insights du terrain
                    </h3>
                    <p className="dark:text-zinc-400 mt-2 text-zinc-600">
                      Des analyses et observations tirées de mon expérience
                      quotidienne dans la tech japonaise, pour vous donner une
                      vision juste et actuelle du marché.
                    </p>
                  </div>
                  <div className="flex flex-col items-center rounded-lg bg-white text-center md:items-start md:text-left">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-md bg-sky-600 p-2 shadow-lg shadow-slate-600/30">
                      <SwatchIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="dark:text-zinc-100 text-lg font-semibold text-zinc-800">
                      Curation de ressources clés
                    </h3>
                    <p className="dark:text-zinc-400 mt-2 text-zinc-600">
                      Des outils, documents, et recommandations pratiques
                      sélectionnés pour vous.
                    </p>
                  </div>
                  <div className="flex flex-col items-center rounded-lg bg-white text-center md:items-start md:text-left">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-md bg-sky-600 p-2 shadow-lg shadow-slate-600/30">
                      <BookOpenIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="dark:text-zinc-100 text-lg font-semibold text-zinc-800">
                      Guides pratiques pour s’installer au Japon
                    </h3>
                    <p className="dark:text-zinc-400 mt-2 text-zinc-600">
                      Des checklists, tutoriels et conseils concrets pour gérer
                      l’installation, la vie quotidienne et l’administratif.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container className="mb-[150px] mt-24 md:mt-28" foo="bar">
        <h2 className="dark:text-zinc-100 text-center text-sm font-bold uppercase tracking-tight text-zinc-800">
          Blog
        </h2>
        <h3 className="dark:text-zinc-100 mb-12 mt-2 text-center text-3xl font-bold tracking-tight text-zinc-800">
          <Balancer>Mes derniers articles</Balancer>
        </h3>
        <div className="mb-[64px] flex flex-col gap-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/articles"
            className="dark:text-zinc-100 dark:hover:text-sky-400 flex items-center justify-center gap-1 font-normal text-zinc-900 hover:text-sky-600"
          >
            Voir tous les articles{' '}
            <ChevronRightIcon className="mt-0.5 inline-block size-4" />
          </Link>
        </div>
      </Container>
    </>
  )
}
