import Head from 'next/head';
export interface HomeProps {

}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <Head>
        <title>Cloud Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

export default Home;