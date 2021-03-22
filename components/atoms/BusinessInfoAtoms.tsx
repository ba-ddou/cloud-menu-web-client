

export interface BusinessHeaderProps {
    name: string
    description: string
}

export const BusinessHeader: React.SFC<BusinessHeaderProps> = ({
    name,
    description
}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    );
}


export interface BusinessBannerProps {
    uri: string
}

export const BusinessBanner: React.SFC<BusinessBannerProps> = ({ uri }) => {
    return (
        <img src={uri} />
    );
}


export interface BusinessInfoIconProps {
    onClick: () => void
}

export const BusinessInfoIcon: React.SFC<BusinessInfoIconProps> = () => {
    return ( 
        <div>
            
        </div>
     );
}

