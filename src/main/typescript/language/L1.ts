import { Production } from "../domain/Production"
import Recognizer from "../domain/Recognizer"

const S: Production = _ => {
	return _.rule("S -> ( S ) S", _ => _.scan("(") && S(_) && _.scan(")") && S(_)) || _.rule("S -> λ", _ => _.scan("λ"))
}

const L1 = (input: string) => new Recognizer(S).accepts(input)

export default L1
