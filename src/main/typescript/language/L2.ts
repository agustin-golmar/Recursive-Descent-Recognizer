import { Production } from "../domain/Production.js"
import Recognizer from "../domain/Recognizer.js"

const S: Production = _ => {
	// prettier-ignore
	return _.rule("S -> b S", _ => _.scan("b") && S(_))
		|| _.rule("S -> c A B", _ => _.scan("c") && A(_) && B(_))
}

const A: Production = _ => {
	// prettier-ignore
	return _.rule("A -> b A", _ => _.scan("b") && A(_))
		|| _.rule("A -> a", _ => _.scan("a"))
}

const B: Production = _ => {
	// prettier-ignore
	return _.rule("B -> a B c", _ => _.scan("a") && B(_) && _.scan("c"))
		|| _.rule("B -> b", _ => _.scan("b"))
}

const L2 = (input: string) => new Recognizer(S).accepts(input)

export default L2
