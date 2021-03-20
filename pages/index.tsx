import Head from 'next/head';
import { ScanBar } from '../components/molecules'
export interface HomeProps {

}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <Head>
        <title>Cloud Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScanBar scanPath="/scanner" />
    </div>
  );
}

export default Home;