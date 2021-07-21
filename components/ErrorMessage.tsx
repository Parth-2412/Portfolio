interface Props {
	message: string;
}

function ErrorMessage({ message }: Props) {
	return <p className="text-xs mb-6 mt-1 ml-1 text-red-600">{message}</p>;
}

export default ErrorMessage;
