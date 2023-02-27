import { SelectProps } from "@/types/components"

export default function Select({ className, ...props }: SelectProps) {
	return (
		<select
			className={`h-12 w-full bg-neutral-800 text-white rounded ${className}`}
			{...props}
		/>
	)
}
