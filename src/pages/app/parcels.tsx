import * as RadioGroup from '@radix-ui/react-radio-group';
import check from '@/assets/check.svg'
import { Badge } from '@/components/badge';
import { Notice } from '@/components/notice';
import { Link } from 'react-router-dom';

export function Parcels() {

  const pixParcels = [
    {
      id: 'pix-p-2',
      parcelNumber: '2',
      value: 15300,
      totalAmount: 30600,
      bestOffer: false,
    },
    {
      id: 'pix-p-3',
      parcelNumber: '3',
      value: 10196.66,
      totalAmount: 30620,
      bestOffer: false,
    },
    {
      id: 'pix-p-4',
      parcelNumber: '4',
      value: 7725,
      totalAmount: 30900,
      bestOffer: true,
    },
    {
      id: 'pix-p-5',
      parcelNumber: '5',
      value: 6300,
      totalAmount: 31500,
      bestOffer: false,
    },
    {
      id: 'pix-p-6',
      parcelNumber: '6',
      value: 5283.33,
      totalAmount: 31699.98,
      bestOffer: false,
    },
    {
      id: 'pix-p-7',
      parcelNumber: '7',
      value: 4542.85,
      totalAmount: 31800,
      bestOffer: false,
    },
  ]

  return (
    <div>
      <div className="text-center mt-1">
        <strong className="text-woovi-text text-2xl font-extrabold">João, como você quer pagar?</strong>
      </div>

      <div className="px-4 mt-8">
        <RadioGroup.Root className='flex flex-col rounded-lg gap-8' defaultValue='pix'>

          <div className='flex flex-col relative'>
            <Badge className='absolute -top-3 left-5 z-10'>
                Pix
            </Badge>
            
            <RadioGroup.Item value='pix' id='pix' className='group flex flex-col border border-woovi-gray-100 rounded-[10px] justify-between items-start py-7 px-5 relative data-[state=checked]:border-woovi-green'>
              <div className='flex justify-between items-start w-full'>
                <div className='flex flex-col items-start'>
                  <span className='text-2xl font-semibold text-woovi-text'> 
                    <b className='font-extrabold'>1x </b>
                    R$ 30.500,00
                  </span>
                  <span className='text-woovi-green font-semibold'>Ganhe <b className='font-extrabold'>3%</b> de Cashback</span>
                </div>
                <div className='transition-all size-6 ring-1 flex justify-center items-center ring-neutral-400 rounded-full group-data-[state=checked]:bg-woovi-green group-data-[state=checked]:ring-woovi-green'>
                  <img src={check} className='hidden mx-2 group-data-[state=checked]:block' alt="Item check" />
                </div>
              </div>
              <Notice>
                🤑 R$ 300,00 de volta no seu Pix na hora
              </Notice>
            </RadioGroup.Item>
          </div>

          <div className='flex flex-col relative'>
            <Badge className='absolute -top-3 left-5 z-10'>
              Pix Parcelado
            </Badge>
            {pixParcels.map((item, i) => {
              return (
                <RadioGroup.Item 
                  key={item.id}
                  value={item.id} 
                  id={item.id} 
                  className={`group flex flex-col border border-woovi-gray-100 justify-between items-start py-7 px-5 relative data-[state=checked]:border-woovi-green ${i === 0 && 'rounded-t-[10px]'}  ${i === pixParcels.length-1 && 'rounded-b-[10px]'}`}
                >
                <div className='flex justify-between items-start w-full'>
                  <div className='flex flex-col items-start'>
                    <span className='text-2xl font-semibold text-woovi-text'> 
                      <b className='font-extrabold'>{item.parcelNumber}x </b>
                      {item.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                    </span>
                    <span className='text-woovi-gray-200 font-semibold'>
                      Total: {item.totalAmount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                    </span>
                  </div>
                  <div className='transition-all size-6 ring-1 flex justify-center items-center ring-neutral-400 rounded-full group-data-[state=checked]:bg-woovi-green group-data-[state=checked]:ring-woovi-green'>
                    <img src={check} className='hidden mx-2 group-data-[state=checked]:block' alt="Item check" />
                  </div>
                </div>
                {item.bestOffer && (
                    <Notice>
                      -3% de juros: Melhor opção de parcelamento
                    </Notice>
                  )}
              </RadioGroup.Item>
              )
            })}
       
          </div>
        </RadioGroup.Root>
      </div>
      
      <div className='px-4 pt-6'>
        <Link to='/entrance' className='bg-woovi-blue rounded-md w-full block py-2 text-center text-white'>
          Confirmar pagamento
        </Link>
      </div>
    </div>
  )
}