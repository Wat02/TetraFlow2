import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

function Acor({ title, description }: { title: string; description: string }) {
  return (
    <Accordion type="single" collapsible className="pb-[1.5rem]">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h3 className="text-[1.25rem] leading-[1.4em] font-semibold">
            {" "}
            {title}
          </h3>
        </AccordionTrigger>
        <AccordionContent className="pt-[2rem] pb-[2rem] w-[90%]">
          <p className="text-[1rem] leading-[1.6em] tracking-[.03em] ">
            {" "}
            {description}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Acor;
