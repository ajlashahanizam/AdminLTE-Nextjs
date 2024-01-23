/* Next.js application entry point. _app.js serves as the top-level component
for rendering pages in Next.js application. */

// Fragment from the React library, used as a container to group multiple elements without introducing an additional DOM element.
import { Fragment } from 'react'; 
// Head component from Next.js, used to modify the <head> of the document, allowing to include meta tags, links, and other elements.
import Head from 'next/head';
import '@/styles/globals.css';

// The App component is a functional component that takes Component and pageProps as props. 
// Component refers to the current page component being rendered, and 
// pageProps contains the initial props that were preloaded for the page
export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"/>
        <link rel="stylesheet" href="static/plugins/fontawesome-free/css/all.min.css"/>
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>
        <link rel="stylesheet" href="static/dist/css/adminlte.min.css"/>

        <script src="static/plugins/chart.js/Chart.min.js"></script>
        <script src="static/dist/js/pages/dashboard3.js"></script>
        <script src="static/plugins/jquery/jquery.min.js"></script>
        
        <script src="https://apis.google.com/js/platform.js" async defer></script>

        
       
      </Head>

      {/* The actual page component (Component) is rendered with its initial props (pageProps). */}
      <Component {...pageProps} />
    </Fragment>
  );
}
