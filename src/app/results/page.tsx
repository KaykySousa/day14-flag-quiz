"use client"

import Button from "@/components/design/Button"
import { useQuiz } from "@/hooks/useQuiz"
import { useRouter } from "next/navigation"

export default function ResultsPage() {
	const { corrects, resetQuiz } = useQuiz()

	const router = useRouter()

	function playAgain() {
		resetQuiz()
		router.push("/")
	}

	return (
		<div className="min-h-screen w-full bg-neutral-900 flex justify-center items-center p-6">
			<div className="flex flex-col items-center justify-center max-w-[16rem] w-full">
				<div className="w-full aspect-square border-2 border-white rounded-full bg-neutral-800 flex justify-center items-center mb-6">
					<p className="tabular-nums text-6xl text-white text-bold">
						{corrects}/10
					</p>
				</div>
				<Button onClick={playAgain} className="!w-full">
					Jogar Novamente
				</Button>
			</div>
		</div>
	)
}
