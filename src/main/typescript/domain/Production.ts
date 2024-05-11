import Recognizer from "./Recognizer"

/**
 * @description
 *	A production is a function that returns true if recognizes the input at
 *	the moment; false otherwise.
 */
export type Production = (_: Recognizer) => boolean
