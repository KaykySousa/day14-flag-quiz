"use client"

import { Country } from "@/types/api"
import { useRouter } from "next/navigation"
import { createContext, ReactNode, useEffect, useState } from "react"

interface QuizContextValue {
	flagIndex: number
	randomCountry: Country | null
	countries: Country[]
	corrects: number
	checkAnswer: (countryName: string) => void
	resetQuiz: () => void
}

interface QuizProviderProps {
	children: ReactNode
	countries: Country[]
}

export const QuizContext = createContext({} as QuizContextValue)

export default function QuizProvider({
	children,
	countries,
}: QuizProviderProps) {
	const [flagIndex, setFlagIndex] = useState(0)
	const [randomCountry, setRandomCountry] = useState<Country | null>(null)
	const [corrects, setCorrects] = useState(0)

	const router = useRouter()

	useEffect(() => {
		setRandomCountry(getRandomCountry())
	}, [])

	function getRandomCountry() {
		const randomCountry =
			countries[Math.floor(Math.random() * countries.length)]

		return randomCountry
	}

	function nextFlag() {
		setFlagIndex(flagIndex + 1)
		setRandomCountry(getRandomCountry())
	}

	function checkAnswer(countryName: string) {
		if (countryName === randomCountry?.name) setCorrects(corrects + 1)

		if (flagIndex >= 9) {
			router.push("/results")
			return
		}

		nextFlag()
	}

	function resetQuiz() {
		setFlagIndex(0)
		setRandomCountry(getRandomCountry())
		setCorrects(0)
	}

	return (
		<QuizContext.Provider
			value={{
				flagIndex,
				randomCountry,
				countries,
				corrects,
				checkAnswer,
				resetQuiz,
			}}
		>
			{children}
		</QuizContext.Provider>
	)
}
