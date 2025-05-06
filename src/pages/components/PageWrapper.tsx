import Head from "next/head";
import Script from "next/script";

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
  css?: string;
  js?: string;
  desc?: string;
}

export default function PageWrapper({
  title,
  children,
  css,
  js,
  desc,
}: PageWrapperProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc || title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{css}</style>
      </Head>
      <main className="max-w-[500px] my-0 mx-auto">{children}</main>
      <Script id="page-js">{js}</Script>
    </>
  );
}
