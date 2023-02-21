import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { URL_BASE } from "../config/config";
import { getTokenFromLocalStorage } from '../helpers/get-token';


const uri = `${URL_BASE}/graphql/`;
const httpLink = new HttpLink({ uri });

const authLink = new ApolloLink((operation, forward) => {
    const token = getTokenFromLocalStorage();
    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : ''
        }
    });
    return forward(operation);
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});
