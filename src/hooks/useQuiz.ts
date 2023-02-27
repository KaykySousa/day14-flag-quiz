import { QuizContext } from "@/contexts/QuizProvider"
import { useContext } from "react"

export function useQuiz() {
	const {
		randomCountry,
		flagIndex,
		countries,
		checkAnswer,
		corrects,
		resetQuiz,
	} = useContext(QuizContext)

	return {
		randomCountry,
		flagIndex,
		countries,
		checkAnswer,
		corrects,
		resetQuiz,
	}
}
