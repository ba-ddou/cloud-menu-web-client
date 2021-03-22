import { BusinessHeader, BusinessBanner, BusinessInfoIcon } from '../atoms'
import { Business } from 'cloud-menu-shared-libs'

export interface BusinessCardProps {
    data: Pick<Business, 'banner' | 'name' | 'description'>
    onMoreInfo: () => void
}

export const BusinessCard: React.FunctionComponent<BusinessCardProps> = ({ data: { banner, name, description }, onMoreInfo }) => {
    return (
        <div>
            <BusinessHeader name={name} description={description} />
            <BusinessBanner uri={banner.uri} />
            <BusinessInfoIcon onClick={onMoreInfo} />
        </div>
    );
}