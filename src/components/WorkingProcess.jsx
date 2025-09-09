import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function WorkingProcess() {
  return (
    <div className="mt-18">
      <div className="w-full flex flex-col justify-center p-4 pl-0 items-center gap-5 lg:gap-9 lg:w-[70%] lg:justify-between lg:min-w-[1000px] lg:flex-row lg:pl-0">
        <h1 className="bg-[#B9FF66] font-bold text-2xl rounded-md p-2 text-nowrap">
          Our Working Process
        </h1>
        <p className="w-full text-center lg:text-start ">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <Accordion className="lg:mt-9" type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="p-8 rounded-3xl mb-6 transition-colors 
                   data-[state=open]:bg-[#b9ff66] 
                   data-[state=closed]:bg-[#f3f3f3]"
        >
          <AccordionTrigger className="font-bold text-2xl hover:no-underline">
            01 Consultation
          </AccordionTrigger>
          <AccordionContent className="border-t mt-4 pt-4">
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="p-8 rounded-3xl mb-6 transition-colors 
                   data-[state=open]:bg-[#b9ff66] 
                   data-[state=closed]:bg-[#f3f3f3]"
        >
          <AccordionTrigger className="font-bold text-2xl hover:no-underline">
            02 Research and Strategy Development
          </AccordionTrigger>
          <AccordionContent className="border-t mt-4 pt-4">
            We’ll research your market, audience, and competition to create a
            winning strategy tailored to your goals.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="p-8 rounded-3xl mb-6 transition-colors 
                   data-[state=open]:bg-[#b9ff66] 
                   data-[state=closed]:bg-[#f3f3f3]"
        >
          <AccordionTrigger className="font-bold text-2xl hover:no-underline">
            03 Implementation
          </AccordionTrigger>
          <AccordionContent className="border-t mt-4 pt-4">
            Our team executes the strategy using the most effective tools and
            channels to maximize results.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="p-8 rounded-3xl mb-6 transition-colors 
                   data-[state=open]:bg-[#b9ff66] 
                   data-[state=closed]:bg-[#f3f3f3]"
        >
          <AccordionTrigger className="font-bold text-2xl hover:no-underline">
            04 Monitoring and Optimization
          </AccordionTrigger>
          <AccordionContent className="border-t mt-4 pt-4">
            We continuously track performance and optimize campaigns to ensure
            long-term success.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className="p-8 rounded-3xl mb-6 transition-colors 
                   data-[state=open]:bg-[#b9ff66] 
                   data-[state=closed]:bg-[#f3f3f3]"
        >
          <AccordionTrigger className="font-bold text-2xl hover:no-underline">
            05 Reporting and Communication
          </AccordionTrigger>
          <AccordionContent className="border-t mt-4 pt-4">
            We provide transparent reports with key insights and performance
            metrics. Regular communication ensures you’re always informed and
            aligned with the project’s progress.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-6"
          className="p-8 rounded-3xl mb-6 transition-colors 
                   data-[state=open]:bg-[#b9ff66] 
                   data-[state=closed]:bg-[#f3f3f3]"
        >
          <AccordionTrigger className="font-bold text-2xl hover:no-underline">
            06 Continual Improvement
          </AccordionTrigger>
          <AccordionContent className="border-t mt-4 pt-4">
            We review past results, learn from the data, and refine strategies
            to drive continuous growth and long-term success.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default WorkingProcess;
