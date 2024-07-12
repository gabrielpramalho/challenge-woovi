import { HowItWorks } from "@/components/how-it-works";
import { Identify } from "@/components/identify";
import { Input } from "@/components/input";
import { ParcelItem } from "@/components/parcel-item";

export function OtherParcel() {
  return (
    <div>
      <div className="flex flex-col items-center gap-5 px-[18px]">
        <div className="text-center mt-1">
          <strong className="text-woovi-text text-2xl font-extrabold ">
          João, pague o restante em 1x no cartão
          </strong>
        </div>

        <form action="" className="flex flex-col w-full gap-7">
          <div className="relative flex flex-1">
            <label 
              className="absolute bg-white -top-2.5 left-5 text-sm font-semibold text-woovi-text px-0.5"
              htmlFor="name"
            >
              Nome completo
            </label>
            <Input id="name" name="name"  />
          </div>
          <div className="relative flex flex-1">
            <label 
              className="absolute bg-white -top-2.5 left-5 text-sm font-semibold text-woovi-text px-0.5"
              htmlFor="name"
            >
              CPF
            </label>
            <Input id="cpf" name="cpf"  />
          </div>
          <div className="relative flex flex-1">
            <label 
              className="absolute bg-white -top-2.5 left-5 text-sm font-semibold text-woovi-text px-0.5"
              htmlFor="name"
            >
              Número do cartão
            </label>
            <Input id="credit-card" name="credit-card"  />
          </div>

          <div className="flex gap-5">
            <div className="relative flex flex-1">
              <label 
                className="absolute bg-white -top-2.5 left-5 text-sm font-semibold text-woovi-text px-0.5"
                htmlFor="name"
              >
                Vencimento
              </label>
              <Input id="credit-card" name="credit-card"  />
            </div>
            <div className="relative flex flex-1">
              <label 
                className="absolute bg-white -top-2.5 left-5 text-sm font-semibold text-woovi-text px-0.5"
                htmlFor="name"
              >
                CVV
              </label>
              <Input id="credit-card" name="credit-card"  />
            </div>
          </div>

          <div className="relative flex flex-1">
            <label 
              className="absolute bg-white -top-2.5 left-5 text-sm font-semibold text-woovi-text px-0.5"
              htmlFor="name"
            >
              Parcelas
            </label>
            <Input id="credit-card" name="credit-card"  />
          </div>

          <button>Pagar</button>
          
        </form>

        <div className='flex flex-col items-center justify-center'>
          <span className='text-woovi-gray font-semibold'>Prazo de pagamento:</span>
          <span className='text-woovi-text font-extrabold'>15/12/2021 - 08:17</span>
        </div>

        <ul className='flex flex-col w-full gap-4'>
          <ParcelItem 
            label='1ª entrada no Pix'
            value='R$ 15.300,00'
            isChild={false}
            isCompleted
          />
          <ParcelItem 
            label='2ª entrada no Pix'
            value='R$ 15.300,00'
            isCurrent
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