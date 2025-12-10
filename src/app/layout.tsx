import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Wellness Retreat Kenya 2026 | Federica Milanta',
  description: '8 notti di fitness, safari allo Tsavo Est, oceano e benessere in Kenya. Dal 26 febbraio al 7 marzo 2026 a Watamu. Functional training, avventura e rigenerazione.',
  keywords: 'wellness retreat, kenya, watamu, fitness, safari, allenamento funzionale, federica milanta, viaggio benessere, tsavo est',
  authors: [{ name: 'Federica Milanta' }],
  openGraph: {
    title: 'Wellness Retreat Kenya 2026 | Federica Milanta',
    description: '8 notti di fitness, safari, oceano e benessere in Kenya. Un\'esperienza che ti trasforma.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'Federica Milanta Retreat',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wellness Retreat Kenya 2026',
    description: '8 notti di fitness, safari, oceano e benessere in Kenya.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#FF6B35" />
      </head>
      <body className="min-h-screen">
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1785922038793011');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1785922038793011&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                     bg-sunset-500 text-white px-4 py-2 rounded-lg z-50"
        >
          Salta al contenuto principale
        </a>
        
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  )
}


