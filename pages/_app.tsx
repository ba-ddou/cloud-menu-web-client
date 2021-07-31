import '@sass/index.sass';
import { ApolloProvider } from "@apollo/react-hooks";
import { apolloClient } from '@cloudmenu/cloud-menu-shared-libs'


function MyApp({ Component, pageProps }) {
  return (
    //@ts-ignore
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );

}

export default MyApp;
