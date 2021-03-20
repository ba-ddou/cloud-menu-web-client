import '../styles/globals.css';
import { ApolloProvider } from "@apollo/react-hooks";
import client from '../apollo-client';


function MyApp({ Component, pageProps }) {
  return (
    //@ts-ignore
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );

}

export default MyApp;
