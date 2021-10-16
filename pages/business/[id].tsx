import { useRouter } from "next/router";
import { Business, decryptMetaData } from "@cloudmenu/cloud-menu-shared-libs";
import { gql } from "apollo-boost";
import { BusinessCard } from "@components/molecules";
import { Menu } from "@components/organisms";
import { absoluteURLApolloClient } from "@root/apollo/client";
import React, { useEffect } from "react";

export interface BusinessPageProps {
	business: Business;
}

const BusinessPage: React.SFC<BusinessPageProps> = ({ business }) => {
	let { name, description, banner } = business;
	const router = useRouter();
	const { query } = router;
	useEffect(() => {
		// remove the metaa queery param from the url
		if (query.meta) {
			router.replace({
				pathname: router.pathname,
				query: {
					...query,
					meta: undefined,
				},
			});
		}
	}, []);
	return (
		<div>
			<BusinessCard
				data={{
					name,
					description,
					banner,
				}}
				onMoreInfo={() => {}}
			/>
			<Menu menu={business.menu} />
		</div>
	);
};

export default BusinessPage;

export async function getServerSideProps(context) {
	const { meta } = context.query;
	const metaData = decryptMetaData(meta, "secret");
	console.log(
		"🚀 ~ file: [id].tsx ~ line 33 ~ getServerSideProps ~ metaData",
		metaData
	);
	const source =
		metaData?.businessId && metaData?.incrementScanCount ? "QR" : "";
	const id = context.params.id;
	const { data } = await absoluteURLApolloClient.query({
		query: gql`
			query ($id: String!, $source: String!) {
				business(id: $id, source: $source) {
					_id
					name
					_type
					description
					banner {
						uri
					}
					email
					phone
					city
					address
					menu {
						id
						name
						items {
							name
							description
							thumbnail {
								uri
							}
							price
						}
					}
				}
			}
		`,
		variables: { id, source },
		fetchPolicy: metaData?.businessId ? "network-only" : "cache-first",
	});

	return {
		props: {
			business: data.business,
		},
	};
}
