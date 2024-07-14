import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({className, ...props}: ButtonProps) {
  return (
    <button
      className={`h-10 flex items-center justify-center px-5 gap-2.5 bg-woovi-blue text-white rounded-lg text-lg font-semibold ${className}`}
      {...props} 
    />
  )
}