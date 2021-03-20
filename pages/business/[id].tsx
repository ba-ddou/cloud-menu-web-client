import { useRouter } from 'next/router'
import client from '../../apollo-server-client'
import { gql } from "apollo-boost";
import { Business } from 'cloud-menu-shared-libs'

export interface BusinessPageProps {
    business: Business
}

const BusinessPage: React.SFC<BusinessPageProps> = ({ business }) => {

    return (
        <div>
            <h1>{business.name}</h1>
        </div>
    );
}

export default BusinessPage;


export async function getServerSideProps(context) {

    const { data } = await client.query({
        query: gql`
        query($id: String!) {
		business(id: $id) {
			name
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