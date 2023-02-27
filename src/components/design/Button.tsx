import { ButtonProps } from "@/types/components"

export default function Button({ className, ...props }: ButtonProps) {
	return (
		<button
			className={`h-12 bg-blue-700 rounded text-white font-semibold px-3 hover:bg-blue-800 ${className}`}
			{...props}
		/>
	)
}
