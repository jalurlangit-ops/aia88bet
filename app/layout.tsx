'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const nameDomain = "https://www.teachingismadhard.com";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "https://www.teachingismadhard.com",
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "7143729"
    },
	"review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
	"author": {
            "@type": "Person",
            "name": "Aia88bet : Slot Member Baru di Kasih Menang Dan Situs Slot 100 New Member",
            "reviewBody": "Aia88bet : Slot Member Baru di Kasih Menang Dan Situs Slot 100 New Member, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!"
          }
        },
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "IDR"
    }
  }
  `,
    };
  }

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <meta charSet="utf-8" />
        <title>Aia88bet : Slot Member Baru di Kasih Menang Dan Situs Slot 100 New Member</title>
        <meta name="description" content="Aia88bet menawarkan peluang luar biasa bagi para pemain baru dengan program slot yang menarik. Sebagai situs slot terpercaya, Aia88bet memberikan bonus besar untuk member baru dengan menjanjikan kemenangan yang menguntungkan. Para pemain yang baru bergabung akan merasakan sensasi bermain dengan peluang menang yang lebih tinggi" />
        <meta name="keywords" content="Aia88bet, Slot Member Baru di Kasih Menang, Situs Slot 100 New Member, Situs Resmi Pragmatic Slot, Website Resmi Pragmatic Slot, Deposit Via E Wallet, Situs Judi Online, Deposit Pulsa" />
        <meta name="google-site-verification" content="n-b7PAUDg_WxicjZQaOef7EnRR2RKnmnNI_UYeckQ6w" />
        <meta name="application-name" content="aia88bet" />
        <link rel="author" href={nameDomain} />
        <link rel="canonical" href={nameDomain} />
        <meta name="author" content="aia88bet" />
        <meta name="publisher" content="aia88bet" />
        <meta name="copyright" content="aia88bet" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="category" content="slot" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="id-ID" />
        <meta name="rating" content="general" />
        <meta name="geo.country" content="ID" />
        <meta name="page-locale" content="id,en" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="distribution" content="global" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="Aia88bet : Slot Member Baru di Kasih Menang Dan Situs Slot 100 New Member" />
        <meta property="og:description" content="Aia88bet : Slot Member Baru di Kasih Menang Dan Situs Slot 100 New Member, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta property="og:url" content={nameDomain} />
        <meta property="og:site_name" content="aia88bet" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={nameDomain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="aia88bet" />
        <meta name="twitter:title" content="Aia88bet : Slot Member Baru di Kasih Menang Dan Situs Slot 100 New Member" />
        <meta name="twitter:description" content="Aia88bet : Slot Member Baru di Kasih Menang Dan Situs Slot 100 New Member, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta name="twitter:image" content={nameDomain} />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="next-size-adjust" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
