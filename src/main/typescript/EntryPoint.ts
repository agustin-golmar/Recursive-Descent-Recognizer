import Input from "./domain/Input.js"
import L1 from "./language/L1.js"

const mainAsync = async (): Promise<void> => {
	try {
		const input = Input.stdin()
		console.info(`¿Input "${input}" belongs to L(G)?`, L1(input))
	} catch (error) {
		console.error(error)
	}
}

// Run.
mainAsync()
