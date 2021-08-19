import { useRouter } from 'next/router'
import { Business } from '@cloudmenu/cloud-menu-shared-libs'
import { gql } from "apollo-boost";
import { BusinessCard } from '@components/molecules'
import { Menu } from '@components/organisms'
import { absoluteURLApolloClient } from '@root/apollo/client'
export interface BusinessPageProps {
    business: Business
}

const BusinessPage: React.SFC<BusinessPageProps> = ({ business }) => {
    let { name, description, banner } = business;
    return (
        <div>
            <BusinessCard
                data={{
                    name, description, banner
                }}
                onMoreInfo={() => { }}
            />
            <Menu menu={business.menu} />
        </div>
    );
}

export default BusinessPage;


export async function getServerSideProps(context) {

    const { data } = await absoluteURLApolloClient.query({
        query: gql`
        query($id: String!) {
		business(id: $id) {
			_id
            name
            _type
            description
            banner{
                uri
            }
            email
            phone
            city
            address
            menu {
                id
                name
                items{
                    name
                    description
                    thumbnail{
                        uri
                    }
                    price
                }
            }
		}
		
	}
    `,
        variables: { id: context.params.id }
    });

    return {
        props: {
            business: data.business,
        },
    };
}