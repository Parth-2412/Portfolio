export function formatArray(arr: string[]) {
	if (arr.length === 1) {
		return arr.join("");
	}
	return arr.slice(0, -1).join(", ") + ` and ${arr.slice(-1)[0]}`;
}
