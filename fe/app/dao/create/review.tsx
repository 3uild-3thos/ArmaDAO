import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Review() {
  return (
    <div className="flex flex-col items-center gap-5">
      <p className="text-xl font-medium">You are about to list your project!</p>
      <p className="text-gray-500 font-medium text-sm">
        Make sure that all of the information below are correct and you agree to
        our Listing Terms and Conditions.
      </p>

      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>SubDao Info</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            provident, id vero tempora neque impedit voluptatibus dolores omnis
            nam ipsa non officia iure quia assumenda deserunt sapiente
            temporibus laudantium deleniti.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Team Details</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            provident, id vero tempora neque impedit voluptatibus dolores omnis
            nam ipsa non officia iure quia assumenda deserunt sapiente
            temporibus laudantium deleniti.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>SubDao Config</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            provident, id vero tempora neque impedit voluptatibus dolores omnis
            nam ipsa non officia iure quia assumenda deserunt sapiente
            temporibus laudantium deleniti.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Review;
