"use client"

import { useQuiz } from "@/hooks/useQuiz"
import { SelectProps } from "@/types/components"
import Select from "./design/Select"

export default function FlagsSelect(props: SelectProps) {
	const { countries } = useQuiz()

	const countriesName = countries.map((country) => country.name).sort()

	return (
		<Select {...props}>
			<option value="" disabled>
				Select a country
			</option>
			{countriesName.map((name, index) => (
				<option key={index} value={name}>
					{name}
				</option>
			))}
		</Select>
	)
}
