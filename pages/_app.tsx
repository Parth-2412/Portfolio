import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../public/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className="flex justify-center px-12">
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
