import { Fragment } from 'react';
import Head from 'next/head';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"/>
        <link rel="stylesheet" href="static/plugins/fontawesome-free/css/all.min.css"/>
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>
        <link rel="stylesheet" href="static/dist/css/adminlte.min.css"/>

        <script src="static/plugins/chart.js/Chart.min.js"></script>
        <script src="static/dist/js/demo.js"></script>
        <script src="static/dist/js/pages/dashboard3.js"></script>

        <script src="static/dist/js/demo.js"></script>

        <script src="static/plugins/jquery/jquery.min.js"></script>
        
       
      </Head>

      <Component {...pageProps} />
    </Fragment>
  );
}
