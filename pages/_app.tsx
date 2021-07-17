import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import "../public/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
