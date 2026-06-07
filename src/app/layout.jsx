import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { GoogleAnalytics } from '@next/third-parties/google'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    default:
      'Youness Bennaj – Développeur web basé à Tokyo, conseils pour talents tech au Japon.',
  },
  description:
    'Je suis Youness, développeur web basé à Tokyo. Je partage mon retour d’expérience et des conseils concrets pour les talents tech qui souhaitent s’installer et travailler au Japon.',
  alternates: {
    canonical: 'https://younessbennaj.com',
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full antialiased" suppressHydrationWarning>
      <body className="dark:bg-black flex h-full bg-zinc-50">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-59WCY77VF3" />
    </html>
  )
}
