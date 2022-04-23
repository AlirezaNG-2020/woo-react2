import Head from 'next/head';
import Header from './Header';
// import '../styles/Style.css';

const Layout = ( props ) => {
    return(
        <div>
            <Head>
                <title>Woocommerce React Theme</title>
                <link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css" />
            </Head>
            <Header />

            { props.children }
        </div>
    );
}

export default Layout;