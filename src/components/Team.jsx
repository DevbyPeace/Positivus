import linkedin from "../assets/linkedin.svg";
import { TeamApi } from "./TeamApi";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

function Team() {
  return (
    <section className="mt-18">
      <div className="w-full flex flex-col justify-center p-4 pl-0 items-center gap-5 lg:gap-9 lg:w-[70%] lg:justify-between lg:min-w-[1000px] lg:flex-row lg:pl-0">
        <h1 className="bg-[#B9FF66] font-bold text-2xl rounded-md p-2 px-4 text-nowrap">
          Team
        </h1>
        <p className="w-full text-center lg:text-start ">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 pb-5 mt-4">
        {TeamApi.map((member) => {
          return (
            <div
              className="flex-col border-2 border-black rounded-3xl p-5 
                shadow-[0px_7px_4px_0px_rgba(0,0,0,0.75)]
                transform transition-transform duration-300 
                hover:-translate-y-2 hover:shadow-lg"
            >
              {/* image and name */}
              <div className="flex gap-4 items-end border-b-2 border-b-black pb-4 relative">
                <img src={member.imageSource} alt="John" />
                <div className="">
                  <h1 className="font-bold align-text-bottom text-2xl tracking-tight">
                    {member.name}
                  </h1>
                  <h1 className="">{member.position}</h1>
                </div>
                <img
                  className="absolute right-0 top-0"
                  src={linkedin}
                  alt="linkedinLogo"
                />
              </div>
              <div className="py-5">{member.bio}</div>
            </div>
          );
        })}
      </div>

      {/*///////////////////////////////////////////////// */}
     
    </section>
  );
}

export default Team;
