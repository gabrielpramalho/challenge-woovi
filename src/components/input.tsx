import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {}

export function Input(props: InputProps) {
  return (
    <input 
      className="border-2 flex-1 border-woovi-gray-100 rounded-lg h-[65px] text-woovi-text text-lg font-semibold p-5 outline-none"
      {...props}  
    />
  )
}