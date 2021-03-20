import Head from 'next/head';
export interface ScannerProps {

}

const Scanner: React.FunctionComponent<ScannerProps> = () => {
    return (
        <div>
            <Head>
                <title>QR Scanner ~ Cloud Menu</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
}

export default Scanner;