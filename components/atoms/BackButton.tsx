import styles from './BackButton.module.sass'

export interface BackButtonProps {
    onClick: () => void
}

export const BackButton: React.SFC<BackButtonProps> = ({ onClick }) => {
    return ( 
        <button></button>
     );
}
