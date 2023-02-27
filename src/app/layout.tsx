import QuizProvider from "@/contexts/QuizProvider"
import axios from "axios"
import "./globals.css"

export const metadata = {
	title: "Day 14 - Flag Quiz",
	description: "Flag Quiz - Developed by Kayky de Sousa",
}

export const revalidate = 0

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const countries = await axios.get("https://restcountries.com/v3.1/all")

	const filteredCountries = countries.data.map((country: any) => {
		return {
			name: country.name.common,
			flag: {
				src: country.flags.svg,
				alt: country.flags.alt,
			},
		}
	})

	return (
		<html lang="en">
			<body>
				<QuizProvider countries={filteredCountries}>
					{children}
				</QuizProvider>
			</body>
		</html>
	)
}
