import Layout from "../components/Layout";
// import fetch from "isomorphic-unfetch";
// import clientConfig from "../client-config";
import Product from "../components/Product";
import client from "../components/ApolloClient";
import gql from "graphql-tag";

const PRODUCTS_QUERY = gql`query{
    products(first: 10) {
        nodes {
          id
          averageRating
          slug
          description
          image {
            uri
            title
            srcSet
            sourceUrl
          }
          name
        }
      }
}`;


const Index = (props) => {
    console.log( props );

    const {products} = props;

    return(
        <Layout>
            <div>
                { products.length ? (products.map( product => <Product key={ product.id } product={ product } /> )) : '' }
            </div>
        </Layout>
        
    )
};

Index.getInitialProps = async () => {
    // const res = await fetch( `${clientConfig.siteUrl}/getProducts` );
    // const productsData = await res.json();

    // return {
    //     products: productsData
    // }
    const result = await client.query( { query: PRODUCTS_QUERY } );

    return {
        products: result.data.products.nodes
    }
};

export default Index;

// query MyQuery {
//     products(first: 10) {
//       nodes {
//         id
//         productId
//         averageRating
//         slug
//         description
//         image {
//             uri
//             title
//             srcSet
//             sourceUrl
//         }
//         name
//         price
//       }
//     }
//   }
  