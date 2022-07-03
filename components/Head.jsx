import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="title"
        content="Mirerse - community for designers and developers"
      />
      <meta
        name="description"
        content="Discover creative websites and developers across the globe. "
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://localhost:3000/" />
      <meta
        property="og:title"
        content="Mirerse - community for designers and developers"
      />
      <meta
        property="og:description"
        content="Discover creative websites and developers across the globe. "
      />
      <meta property="og:image" content="https://imgur.com/KqMIGSZ.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://localhost:3000/" />
      <meta
        property="twitter:title"
        content="Mirerse - community for designers and developers"
      />
      <meta
        property="twitter:description"
        content="Discover creative websites and developers across the globe. "
      />
      <meta property="twitter:image" content="https://imgur.com/KqMIGSZ.png" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Mirerse',
};
