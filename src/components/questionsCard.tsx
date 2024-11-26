import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function QuestionsCard() {
  return (
    <div className="bg-secondary text-slate-100 rounded-md p-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold">
            Onde estamos localizados?
          </AccordionTrigger>
          <AccordionContent className="text-zinc-900 font-bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Robion has been the industry's standard dummy <br />
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
