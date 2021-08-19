import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_URL } from '@root/config'


export const apolloClient = new ApolloClient({
    cache: new InMemoryCache()
});

export const absoluteURLApolloClient = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache()
});
