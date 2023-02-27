"use client"

import Button from "@/components/design/Button"
import DeveloperInfo from "@/components/DeveloperInfo"
import FlagsSelect from "@/components/FlagsSelect"
import { useQuiz } from "@/hooks/useQuiz"
import { FormEvent, useState } from "react"

export default function Home() {
	const { randomCountry, checkAnswer } = useQuiz()

	const [answer, setAnswer] = useState("")

	function handleSubmit(e: FormEvent) {
		e.preventDefault()

		checkAnswer(answer)
		setAnswer("")
	}

	return (
		<div className="min-h-screen w-full bg-neutral-900 flex justify-center items-center p-6">
			<div className="flex flex-col items-center max-w-lg w-full">
				<h1 className="text-3xl text-white font-semibold mb-6">
					Guess the Flag
				</h1>
				<img
					src={randomCountry?.flag.src}
					alt={randomCountry?.flag.alt}
					className="w-full h-auto rounded"
				/>
				<form onSubmit={handleSubmit} className="mt-6 w-full flex">
					<FlagsSelect
						className="mr-2"
						value={answer}
						onChange={(e) => {
							setAnswer(e.target.value)
						}}
					/>
					<Button type="submit">
						<img
							src="/send-icon.svg"
							alt="Send"
							className="h-6 w-6"
						/>
					</Button>
				</form>
				<DeveloperInfo />
			</div>
		</div>
	)
}
