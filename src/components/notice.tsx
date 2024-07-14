import { ComponentProps } from "react"

type NoticeProps = ComponentProps<'span'>

export function Notice({children, className, ...props}: NoticeProps) {
  return(
    <div className="flex items-center w-full relative">
      <span {...props} className={`bg-woovi-blue text-white text-sm flex-1 text-left px-2.5 py-1.5 rounded-md mt-1 ${className}`}>
        {children}
      </span>
      <span className="absolute top-0 bottom-0 -right-1 border-solid z-50 border-r-white border-r-[22px] border-y-transparent border-y-[22px] border-l-0 rounded-md" />
    </div>
  )
}