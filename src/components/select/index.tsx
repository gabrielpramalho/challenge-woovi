import * as SelectPrimitive from '@radix-ui/react-select'
import { ReactNode } from 'react'
import check from '@/assets/chevron-up.svg'

export interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className="border-2 flex items-center justify-between flex-1 text-left border-woovi-gray-100 rounded-lg h-[65px] text-woovi-text text-lg font-semibold p-5 outline-none max-h-[65px]">
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-woovi-text"
        />
        <SelectPrimitive.Icon>
          <img src={check} alt="Check" className='rotate-180' />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          sideOffset={8}
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}