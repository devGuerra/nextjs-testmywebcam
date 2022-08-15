import React from "react";
import Head from "next/head";

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: any[];
  keywords?: string[];
  title: string;
}

const SEO: React.FC<SEOProps> = ({ description, keywords, title }) => (
  <>
    <Head>
      <title>{title} | Testar Webcam</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords?.join(", ")} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content="" />
      <meta property="og:url" content="" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="@dev_guerra" />
      <meta name="twitter:image" content="" />
      <meta property="og:image" content="" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" type="image/png" href="/icons/icon-72x72.png" />
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/icons/icon-72x72.png"
      />
    </Head>
  </>
);

SEO.defaultProps = {
  description:
    "Uma ferramenta simples para testar sua câmera, microfone e alto-falantes está funcionando diretamente no seu navegador. É uma ferramenta gratuita e você pode usá-la gratuitamente.",
  keywords: [
    "web cam",
    "webcam teste",
    "my webcam teste",
    "zoom webcam teste",
    "logitech webcam teste",
    "webcam teste online",
    "google webcam teste",
    "mic and webcam teste",
    "webcam teste windows 10",
    "google meet webcam teste",
    "webcam teste app",
    "webcam teste audio",
    "webcam teste app windows 7",
    "webcam teste android",
    "webcam teste application",
    "webcam teste iphone",
    "how to do a webcam teste",
    "webcam teste browser",
    "webcam teste chrome",
    "webcam teste cc",
    "webcam teste recording",
    "webcam teste record",
    "free webcam teste",
    "cam teste",
    "camera teste",
    "online camera",
  ],
};

export default SEO;
