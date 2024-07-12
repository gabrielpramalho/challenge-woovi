import * as Accordion from '@radix-ui/react-accordion';
import chevronUp from '@/assets/chevron-up.svg'
export function HowItWorks() {
  return (
<Accordion.Root className="w-full border-y border-woovi-gray-100 py-[18px]" type="single"  collapsible>
    <Accordion.Item className="group" value="item-1">
      <Accordion.Trigger className='text-woovi-text font-extrabold flex justify-between items-center w-full'>
        Como funciona?
        <img src={chevronUp} alt="Seta para cima" className='group-data-[state=open]:rotate-180 transition-transform' />
      </Accordion.Trigger>
      <Accordion.Content className='text-woovi-text py-2 text-sm transition-all overflow-hidden'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Distinctio officia commodi natus nulla placeat, corrupti unde laudantium?
        Delectus iusto dolor, quisquam placeat deleniti blanditiis distinctio ex 
        perspiciatis, rem labore consequuntur.
      </Accordion.Content>
    </Accordion.Item>

  </Accordion.Root>
  )
}