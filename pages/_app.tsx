import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import "../public/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<div className="mt-16 pt-2">
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;