import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function WorkingProcess() {
  const steps = [
    {
      title: "01 Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "02 Research and Strategy Development",
      content:
        "We’ll research your market, audience, and competition to create a winning strategy tailored to your goals.",
    },
    {
      title: "03 Implementation",
      content:
        "Our team executes the strategy using the most effective tools and channels to maximize results.",
    },
    {
      title: "04 Monitoring and Optimization",
      content:
        "We continuously track performance and optimize campaigns to ensure long-term success.",
    },
    {
      title: "05 Reporting and Communication",
      content:
        "We provide transparent reports with key insights and performance metrics. Regular communication ensures you’re always informed and aligned with the project’s progress.",
    },
    {
      title: "06 Continual Improvement",
      content:
        "We review past results, learn from the data, and refine strategies to drive continuous growth and long-term success.",
    },
  ];

  return (
    <div className="mt-18">
      {/* Header */}
      <div className="w-full flex flex-col justify-center p-4 pl-0 items-center gap-5 lg:gap-9 lg:w-[70%] lg:justify-between lg:min-w-[1000px] lg:flex-row lg:pl-0">
        <h1 className="bg-[#B9FF66] font-bold text-xl sm:text-2xl rounded-md p-2 text-nowrap">
          Our Working Process
        </h1>
        <p className="w-full text-center lg:text-start">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {/* Accordion */}
      <Accordion className="lg:mt-9" type="single" collapsible>
        {steps.map((step, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="px-8 pt-2 rounded-3xl mb-6 transition-colors 
                       data-[state=open]:bg-[#b9ff66] 
                       data-[state=closed]:bg-[#f3f3f3]
                        shadow-[0px_7px_4px_0px_rgba(0,0,0,0.75)]
        transform  duration-300 
        hover:-translate-y-2 hover:shadow-lg"
          >
            <AccordionTrigger className="font-bold text-lg sm:text-xl lg:text-2xl hover:no-underline">
              {step.title}
            </AccordionTrigger>
            <AccordionContent className="border-t mt-4 pt-4 text-sm sm:text-base">
              {step.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default WorkingProcess;
