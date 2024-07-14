import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./button";
import { Select } from "./select";
import { SelectItem } from "./select/select-item";

const personFormSchema = z.object({
  name: z.string().min(1, { message: 'Por favor, insira seu nome completo' }),
  cpf: z.string().length(14, { message: 'CPF inválido' }),
  creditCard: z.string().length(16, { message: 'Por favor, insira o número do cartao de crédito'}),
  valid: z.string().length(5, { message: 'Data de validade inválido' }),
  cvv: z.string().length(3, { message: 'CVV inválido' }),
})

type PersonFormSchema = z.infer<typeof personFormSchema>

export function PersonForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<PersonFormSchema>({
    resolver: zodResolver(personFormSchema),
  })

  function onSubmit(data: PersonFormSchema) {
    console.log(data)
  }
  
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-7">
      <div className="relative flex flex-1 flex-col">
        <label 
          className="absolute bg-white -top-2.5 left-5 text-sm font-semibold text-woovi-text px-0.5"
          htmlFor="name"
        >
          Nome completo
        </label>
        <input 
          id="name"
          {...register('name')}
          className="border-2 flex-1 border-woovi-gray-100 rounded-lg h-[65px] text-woovi-text text-lg font-semibold p-5 outline-none max-h-[65px]" 
        />
        {errors.name && (
          <span className="pt-1 px-4 text-sm text-red-500 font-semibold">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="relative flex flex-1 flex-col">
        <label 
          className="absolute bg-white -top-2.5 left-5 text-sm font-semibold text-woovi-text px-0.5"
          htmlFor="name"
        >
          CPF
        </label>
        <input 
          id="cpf" {...register('cpf')}
          className="border-2 flex-1 border-woovi-gray-100 rounded-lg h-[65px] text-woovi-text text-lg font-semibold p-5 outline-none max-h-[65px]" 
        />
        {errors.cpf && (
          <span className="pt-1 px-4 text-sm text-red-500 font-semibold">
            {errors.cpf.message}
          </span>
        )}
      </div>
      <div className="relative flex flex-1 flex-col">
        <label 
          className="absolute bg-white -top-2.5 left-5 text-sm font-semibold text-woovi-text px-0.5"
          htmlFor="name"
        >
          Número do cartão
        </label>
        <input 
          id="creditCard" 
          {...register('creditCard')}
          className="border-2 flex-1 border-woovi-gray-100 rounded-lg h-[65px] text-woovi-text text-lg font-semibold p-5 outline-none max-h-[65px]" 
        />
        {errors.creditCard && (
          <span className="pt-1 px-4 text-sm text-red-500 font-semibold">
            {errors.creditCard.message}
          </span>
        )}
      </div>

      <div className="flex gap-5">
        <div className="relative flex flex-1 flex-col">
          <label 
            className="absolute bg-white -top-2.5 left-5 text-sm font-semibold text-woovi-text px-0.5"
            htmlFor="name"
          >
            Vencimento
          </label>
          <input 
            id="valid" 
            {...register('valid')}
            className="border-2 flex-1 border-woovi-gray-100 rounded-lg h-[65px] text-woovi-text text-lg font-semibold p-5 outline-none max-h-[65px]" 
          />
          {errors.valid && (
            <span className="pt-1 px-4 text-sm text-red-500 font-semibold">
              {errors.valid.message}
            </span>
          )}
        </div>
        <div className="relative flex flex-1 flex-col">
          <label 
            className="absolute bg-white -top-2.5 left-5 text-sm font-semibold text-woovi-text px-0.5"
            htmlFor="name"
          >
            CVV
          </label>
          <input 
            id="cvv" 
            {...register('cvv')}
            className="border-2 flex-1 border-woovi-gray-100 rounded-lg h-[65px] text-woovi-text text-lg font-semibold p-5 outline-none max-h-[65px]" 
          />
          {errors.cvv && (
            <span className="pt-1 px-4 text-sm text-red-500 font-semibold">
              {errors.cvv.message}
            </span>
          )}
        </div>
      </div>

      <div className="relative flex flex-1 flex-col">
        <label 
          className="absolute bg-white -top-2.5 left-5 text-sm font-semibold text-woovi-text px-0.5"
          htmlFor="name"
        >
          Parcelas
        </label>
        <Select placeholder="Selecione uma parcela" defaultValue="1">
          <SelectItem value="1" text="1x de R$ 15.300,00"/> 
          <SelectItem value="2" text="2x de R$ 7.650,00"/> 
        </Select>
      </div>

      <Button type="submit">
        Pagar
      </Button>
    </form>
  )
}