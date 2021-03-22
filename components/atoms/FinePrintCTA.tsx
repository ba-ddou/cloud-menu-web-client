
export interface FinePrintCTAProps {
    text: string
    onClick: () => void
}

export const FinePrintCTA: React.SFC<FinePrintCTAProps> = ({ text, onClick }) => {
    return (
        <div onClick={onClick}>
            {text}
        </div>
    );
}

export default FinePrintCTA;