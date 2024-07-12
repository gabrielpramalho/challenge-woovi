import check from '@/assets/check.svg'

interface ParcelItemProps {
  label: string
  value: string
  isCurrent?: boolean
  isCompleted?: boolean
  isChild?: boolean
}

export function ParcelItem({ label, value, isChild = true, isCompleted = false, isCurrent = false }: ParcelItemProps) {
  return (
    <li className='flex justify-between relative'>
      {isChild && (
        <span className={`h-6 w-0.5 absolute -top-[85%] left-1 ${isCompleted ? 'bg-woovi-green' : 'bg-woovi-gray-100'}`} />
      )}
      <div className='flex gap-2 items-center'>
        {isCompleted ? (
          <span className={`rounded-full size-3 ring-2 p-0.5 ring-woovi-green bg-woovi-green flex justify-center items-center`}>
            <img src={check} alt="Check" />
          </span>
        ) : (
          <span className={`block rounded-full size-3 ring-2 ${isCurrent ? 'ring-woovi-green' : 'ring-woovi-gray-100'}`} />
        )}
        <span>{label}</span>
      </div>
      <span className='text-woovi-text font-extrabold'>{value}</span>
    </li>
  )
}