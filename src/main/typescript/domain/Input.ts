import { readFileSync } from "fs"

/**
 * @description
 *	Input support functions.
 */
export default class Input {
	private constructor() {
		throw new Error("Shall not instantiate this class.")
	}

	/**
	 * @description
	 *	Returns standard input as a UTF-8 encoded string, trimmed and without
	 *	\n or \r characters at the end.
	 */
	public static stdin(): string {
		return readFileSync(0, { encoding: "utf-8", flag: "r" })
			.toString()
			.trim()
			.replace(/(\n|\r)$/gi, "")
	}
}
