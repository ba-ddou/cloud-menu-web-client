
export interface ScannerSVGProps {
    color: string
}

export const ScannerSVG: React.FunctionComponent<ScannerSVGProps> = ({ color }) => {
    return (
        <svg width="174" height="158" viewBox="0 0 174 158" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M165.3 105.333V149.284C165.298 151.595 164.387 153.81 162.767 155.444C161.147 157.079 158.951 157.998 156.661 158H17.3391C15.0486 157.998 12.8525 157.079 11.2329 155.444C9.61323 153.81 8.7023 151.595 8.7 149.284V105.333H165.3ZM0 70.2222H174V87.7778H0V70.2222ZM165.3 52.6667H8.7V8.71633C8.7 3.90611 12.5715 0 17.3391 0H156.661C161.428 0 165.3 3.90611 165.3 8.71633V52.6667Z" fill={color || ""} />
        </svg>
    );
}

export default ScannerSVG;