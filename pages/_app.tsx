import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../public/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className="flex justify-center px-12">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<div className="max-w-7xl flex-grow">
				<Header />
				<div className="mt-32">
					<Component {...pageProps} />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default MyApp;
