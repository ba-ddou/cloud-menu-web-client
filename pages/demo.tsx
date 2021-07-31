import React, { useState } from 'react';
import Head from 'next/head';
import { useBusiness } from '@cloudmenu/cloud-menu-shared-libs';
import dynamic from 'next/dynamic'

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false })

export default function Demo() {
    let [id, setId] = useState('V7UA2M64');
    let { loading, data, error } = useBusiness(id);
    let handleScan = (data: string | null) => {
        // data && console.log("🚀 ~ file: App.js ~ line 11 ~ handleScan ~ data", data);
        data && setId(data);
    };
    return (
        <div >
            <Head>
                <title>Cloud Menu</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div >
                {loading && <h3>loading...</h3>}
                {data && data.business && data.business.name && <h1>{data.business.name}</h1>}
                {/* {data && <h1>{JSON.stringify(data)}</h1>} */}
                {error && <p>{JSON.stringify(error)}</p>}
                <QrReader
                    delay={100}
                    style={{
                        height: 240,
                        width: 320,
                    }}
                    onError={console.log}
                    onScan={handleScan}
                />
            </div>

        </div>
    );
}
