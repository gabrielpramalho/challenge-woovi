import qrcode from '@/assets/qrcode.png'
import { Button } from '@/components/button'
import { HowItWorks } from '@/components/how-it-works'
import { Identify } from '@/components/identify'
import { ParcelItem } from '@/components/parcel-item'

import copy from '@/assets/copy.svg'
import { useState } from 'react'

export function Entrance () {
  const [isCopied, setIsCopied] = useState(false)

  const qrcodeText = "000201 010211 26360014BR.GOV.BCB.PIX01112345678900 52040000 5303986 540410.00 5802BR 5912Fulano de Tal 6007Cidade 62070516Pagamento de Teste 6304"

  function copyToClipBoard() {
    navigator.clipboard.writeText(qrcodeText)
    setIsCopied(true)
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-5 px-[18px]">
        <div className="text-center mt-1">
          <strong className="text-woovi-text text-2xl font-extrabold ">
            João, pague a entrada de <br /> R$ 15.300,00 pelo Pix
          </strong>
        </div>

        <div className='flex flex-col gap-7 items-center'>
          <div className='border-2 rounded-[10px] border-woovi-green p-2.5'>
            <img src={qrcode} alt="QR Code" />
          </div>
          <Button onClick={copyToClipBoard}>
             Clique para copiar QR CODE
             <img src={copy} alt="Copy to clipboard" />
          </Button>
          {isCopied && (
            <span className='font-semibold text-sm bg-woovi-green text-white rounded-lg px-5 py-1'>
              Código copiado com sucesso!
            </span>
          )}
          
        </div>

        <div className='flex flex-col items-center justify-center'>
          <span className='text-woovi-gray font-semibold'>Prazo de pagamento:</span>
          <span className='text-woovi-text font-extrabold'>15/12/2021 - 08:17</span>
        </div>

        <ul className='flex flex-col w-full gap-4'>
          <ParcelItem 
            label='1ª entrada no Pix'
            value='R$ 15.300,00'
            isChild={false}
            isCurrent
          />
          <ParcelItem 
            label='2ª entrada no Pix'
            value='R$ 15.300,00'
          />
        </ul>

        <div className='flex justify-between items-center border-y border-woovi-gray-100 py-7 w-full'>
          <span className='text-sm text-woovi-text font-semibold'>CET: 0,5%</span>
          <span className='text-lg text-woovi-text font-semibold'>Total: R$ 30.600,00</span>
        </div>

        <HowItWorks />

        <Identify id='2c1b951f356c4680b13ba1c9fc889c47' />
      </div>
    </div>
  )
}