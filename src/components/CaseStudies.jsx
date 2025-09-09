import { ArrowUpRight } from "lucide-react";

function CaseStudies() {
  return (
    <div className="mt-15 lg:mt-20">
      <div className="w-full flex flex-col justify-center p-4 pl-0 items-center gap-5 lg:gap-9 lg:w-[70%] lg:justify-between lg:min-w-[1000px] lg:flex-row lg:pl-0">
        <h1 className="bg-[#B9FF66] font-bold text-2xl rounded-md p-2 text-nowrap">
          Case Studies
        </h1>
        <p className="w-full text-center lg:text-start">
          Explore Real-life Examples of Our Proven Digital Marketing Success
          through Our Case Studies.
        </p>
      </div>

      <div className="w-full mt-8 lg:bg-[#191A23] lg:rounded-2xl">
        {/* Wrapper */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory lg:overflow-visible lg:flex-row">
          {/* Each card */}

          <div className="min-w-[80%] sm:min-w-[60%] lg:min-w-0 lg:flex-1 bg-[#191A23] rounded-2xl text-white p-6 snap-center  lg:border-r lg:bg-transparent lg:rounded-none ">
            <h2 className="font-bold">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </h2>
            <a href="#" className="flex text-[#b9ff66]">
              Learn more <ArrowUpRight />
            </a>
          </div>

          <div className="min-w-[80%] sm:min-w-[60%] lg:min-w-0 lg:flex-1 bg-[#191A23] rounded-2xl text-white p-6 snap-center lg:border-r lg:bg-transparent lg:rounded-none ">
            <h2 className="font-bold">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </h2>
            <a href="#" className="flex text-[#b9ff66]">
              Learn more <ArrowUpRight />
            </a>
          </div>

          <div className="min-w-[80%] sm:min-w-[60%] lg:min-w-0 lg:flex-1 bg-[#191A23] rounded-2xl text-white  p-6 snap-center lg:border-r lg:bg-transparent lg:rounded-none ">
            <h2 className="font-bold">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </h2>
            <a href="#" className="flex text-[#b9ff66]">
              Learn more <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
