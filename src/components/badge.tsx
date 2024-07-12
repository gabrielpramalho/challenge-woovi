import { ComponentProps } from "react"

type BadgeProps = ComponentProps<'span'>

export function Badge({ className, children, ...props }: BadgeProps) {
  return(
    <span {...props} className={`bg-woovi-gray-100 px-5 rounded-full font-extrabold text-lg ${className}`}>
      {children}
    </span>
  )
}