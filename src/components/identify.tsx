interface IdentifyProps {
  id: string
}

export function Identify({ id }: IdentifyProps) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <span className='text-woovi-gray text-sm font-semibold'>Identificador:</span>
      <span className='text-woovi-text text-sm font-extrabold'>{id}</span>
  </div>
  )
}