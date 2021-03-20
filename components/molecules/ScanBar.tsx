import styles from './scanBar.module.sass'
import { ScanButton } from '../atoms'
import Link from 'next/link'
import { forwardRef } from 'react'


export interface ScanBarProps {
    scanPath: string
}

export const ScanBar: React.SFC<ScanBarProps> = ({
    scanPath
}) => {
    return (
        <div className={styles.scanBar}>
            <Link href={scanPath}>
                <a>
                    <ScanButton />
                </a>
            </Link>

        </div>
    );
}

