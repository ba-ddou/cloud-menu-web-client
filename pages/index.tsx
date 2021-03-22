import Head from 'next/head';
import { Logo, HomeTagline, InstructionsBox } from '@components/atoms'
import { ScanBar } from '@components/molecules'
export interface HomeProps {

}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <Head>
        <title>Cloud Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo />
      <HomeTagline />
      <InstructionsBox  text="Press the button below to start scanning the QR Code." />
      <ScanBar scanPath="/scan" />
    </div>
  );
}

export default Home;