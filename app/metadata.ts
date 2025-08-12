export const metadata = {
  title: {
    template: '%s | upOS',
    default: 'upOS - Evolua sua Operação 🚀',
  },
  description: 'O Sistema Operacional para Assistências Técnicas. Uma plataforma inteligente e intuitiva construída por técnicos, para técnicos. Gerencie ordens de serviço, preços, agendamentos, estoque e vendas com zero atrito e total visibilidade.',
  metadataBase: new URL('https://upos.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://upos.com.br',
    siteName: 'upOS',
    title: 'upOS - Evolua sua Operação 🚀',
    description: 'O Sistema Operacional para Assistências Técnicas. Uma plataforma inteligente e intuitiva construída por técnicos, para técnicos. Gerencie ordens de serviço, preços, agendamentos, estoque e vendas com zero atrito.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'upOS - O Sistema Operacional para Assistências Técnicas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'upOS - Evolua sua Operação 🚀',
    description: 'O Sistema Operacional para Assistências Técnicas. Uma plataforma inteligente e intuitiva construída por técnicos, para técnicos. Gerencie ordens de serviço, preços, agendamentos, estoque e vendas.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
};
