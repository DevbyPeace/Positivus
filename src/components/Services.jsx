import { ArrowUpRight } from "lucide-react";

//Card Images
import card1 from "../assets/cards/card1.svg";
import card2 from "../assets/cards/card2.svg";
import card3 from "../assets/cards/card3.svg";
import card4 from "../assets/cards/card4.svg";
import card5 from "../assets/cards/card5.svg";
import card6 from "../assets/cards/card6.svg";

function Services() {
  return (
    <section className="lg:mt-20">
      <div className="w-full flex flex-col justify-center p-4 pl-0 items-center gap-5 lg:gap-9 lg:w-[70%] lg:justify-between lg:min-w-[1000px] lg:flex-row lg:pl-0">
        <h1 className="bg-[#B9FF66] font-bold text-2xl rounded-md p-2">
          Services
        </h1>
        <p className="text-center lg:text-start w-full ">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="mt-4 grid gap-8 lg:grid-cols-2 md:mt-20">
        {/* Card 1 */}
        <div className="rounded-2xl flex justify-between items-center p-6 md:p-12 lg:p-18 bg-[#F3F3F3] shadow-[0px_7px_4px_0px_rgba(0,0,0,0.75)]">
          <div className="flex flex-col justify-between gap-6 sm:gap-12 md:gap-20 flex-1 min-w-0">
            <div className="flex flex-col">
              <h1 className="bg-[#B9FF66] rounded-xl p-1 font-bold w-fit text-lg sm:text-xl md:text-3xl">
                Search engine
              </h1>
              <h1 className="bg-[#B9FF66] rounded-xl p-1 font-bold w-fit text-lg sm:text-xl md:text-3xl">
                optimization
              </h1>
            </div>
            <ArrowUpRight className="text-white bg-black rounded-full transform scale-[1.6] md:scale-[2] hover:rotate-405 hover:text-[#B9FF66] transition-all duration-500" />
          </div>
          <img
            className="w-24 sm:w-32 md:w-40 lg:w-48 flex-shrink-0"
            src={card1}
            alt=""
          />
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl flex justify-between items-center p-6 md:p-12 lg:p-18 bg-[#B9FF66] shadow-[0px_7px_4px_0px_rgba(0,0,0,0.75)]">
          <div className="flex flex-col justify-between gap-6 sm:gap-12 md:gap-20 flex-1 min-w-0">
            <div className="flex flex-col">
              <h1 className="font-bold bg-white p-1 rounded-xl w-fit text-lg sm:text-xl md:text-3xl">
                Pay-per-click
              </h1>
              <h1 className="font-bold bg-white p-1 rounded-xl w-fit text-lg sm:text-xl md:text-3xl">
                advertising
              </h1>
            </div>
            <ArrowUpRight className="text-white bg-black rounded-full transform scale-[1.6] md:scale-[2] hover:rotate-405 hover:text-white transition-all duration-500" />
          </div>
          <img
            className="w-24 sm:w-32 md:w-40 lg:w-48 flex-shrink-0"
            src={card2}
            alt=""
          />
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl flex justify-between items-center p-6 md:p-12 lg:p-18 bg-[#191A23] shadow-[0px_7px_4px_0px_rgba(0,0,0,0.75)]">
          <div className="flex flex-col justify-between gap-6 sm:gap-12 md:gap-20 flex-1 min-w-0">
            <div className="flex flex-col">
              <h1 className="text-black bg-white p-1 rounded-xl font-bold w-fit text-lg sm:text-xl md:text-3xl">
                Social Media
              </h1>
              <h1 className="text-black bg-white p-1 rounded-xl font-bold w-fit text-lg sm:text-xl md:text-3xl">
                Marketing
              </h1>
            </div>
            <ArrowUpRight className="text-black bg-white rounded-full transform scale-[1.6] md:scale-[2] hover:rotate-405 transition-all duration-500" />
          </div>
          <img
            className="w-24 sm:w-32 md:w-40 lg:w-48 flex-shrink-0"
            src={card3}
            alt=""
          />
        </div>

        {/* Card 4 */}
        <div className="rounded-2xl flex justify-between items-center p-6 md:p-12 lg:p-18 bg-[#F3F3F3] shadow-[0px_7px_4px_0px_rgba(0,0,0,0.75)]">
          <div className="flex flex-col justify-between gap-6 sm:gap-12 md:gap-20 flex-1 min-w-0">
            <div className="flex flex-col">
              <h1 className="bg-[#B9FF66] rounded-xl p-1 font-bold w-fit text-lg sm:text-xl md:text-3xl">
                Email
              </h1>
              <h1 className="bg-[#B9FF66] rounded-xl p-1 font-bold w-fit text-lg sm:text-xl md:text-3xl">
                Marketing
              </h1>
            </div>
            <ArrowUpRight className="text-white bg-black rounded-full transform scale-[1.6] md:scale-[2] hover:rotate-405 hover:text-[#B9FF66] transition-all duration-500" />
          </div>
          <img
            className="w-24 sm:w-32 md:w-40 lg:w-48 flex-shrink-0"
            src={card4}
            alt=""
          />
        </div>

        {/* Card 5 */}
        <div className="rounded-2xl flex justify-between items-center p-6 md:p-12 lg:p-18 bg-[#B9FF66] shadow-[0px_7px_4px_0px_rgba(0,0,0,0.75)]">
          <div className="flex flex-col justify-between gap-6 sm:gap-12 md:gap-20 flex-1 min-w-0">
            <div className="flex flex-col">
              <h1 className="bg-white rounded-xl p-1 font-bold w-fit text-lg sm:text-xl md:text-3xl">
                Content
              </h1>
              <h1 className="bg-white rounded-xl p-1 font-bold w-fit text-lg sm:text-xl md:text-3xl">
                Creation
              </h1>
            </div>
            <ArrowUpRight className="text-white bg-black rounded-full transform scale-[1.6] md:scale-[2] hover:rotate-405 hover:text-[#b9ff66] transition-all duration-500" />
          </div>
          <img
            className="w-24 sm:w-32 md:w-40 lg:w-48 flex-shrink-0"
            src={card5}
            alt=""
          />
        </div>

        {/* Card 6 */}
        <div
          className="rounded-2xl flex justify-between items-center p-6 md:p-12 lg:p-18 bg-[#191A23] shadow-[0px_7px_4px_0px_rgba(0,0,0,0.75)]  transform transition-transform duration-300 
                hover:-translate-y-2 hover:shadow-lg"
        >
          <div className="flex flex-col justify-between gap-6 sm:gap-12 md:gap-20 flex-1 min-w-0">
            <div className="flex flex-col">
              <h1 className="bg-[#B9FF66] rounded-xl p-1 font-bold w-fit text-lg sm:text-xl md:text-3xl">
                Analytics and
              </h1>
              <h1 className="bg-[#B9FF66] rounded-xl p-1 font-bold w-fit text-lg sm:text-xl md:text-3xl">
                Tracking
              </h1>
            </div>
            <ArrowUpRight className="text-black bg-white rounded-full transform scale-[1.6] md:scale-[2] hover:rotate-405 hover:text-[#B9FF66] transition-all duration-500" />
          </div>
          <img
            className="w-24 sm:w-32 md:w-40 lg:w-48 flex-shrink-0"
            src={card6}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
