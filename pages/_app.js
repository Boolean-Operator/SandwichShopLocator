import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* <footer>
        <p>© 2021 Mark T. Graybill</p>
      </footer> */}
    </>
  );
}
