import linkedin from '../assets/linkedin.svg'
// Team Images
import team1 from "../assets/team1.svg";
import team2 from "../assets/team2.svg";
import team3 from "../assets/team3.svg";
import team4 from "../assets/team4.svg";
import team5 from "../assets/team5.svg";
import team6 from "../assets/team6.svg";

function Team() {
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

        {/* Team 1 wtffff  */}
        <div className="flex-col border-2 border-black rounded-3xl p-5 shadow-[0px_7px_4px_0px_rgba(0,0,0,0.75)]">

          {/* image and name */}
          <div className="flex gap-4 items-end border-b-2 border-b-black pb-4 relative">
            <img src={team1} alt="John" />
            <div className="">
              <h1 className="font-bold align-text-bottom text-2xl tracking-tight">
                John Smith
              </h1>
              <h1 className="">CEO and Founder</h1>
            </div>
            <img className ='absolute right-0 top-0'src={linkedin} alt="linkedinLogo" />
          </div>
          <div className="py-5">
            10+ years of experience in digital marketing. Expertise in SEO, PPC,
            and content strategy
          </div>

        </div>

        {/* Team 1 wtffff  */}
        <div className="flex-col border-2 border-black rounded-3xl p-5 shadow-[0px_7px_4px_0px_rgba(0,0,0,0.75)]">
          {/* image and name */}
          <div className="flex gap-4 items-end border-b-2 border-b-black pb-4">
            <img src={team1} alt="John" />
            <div className="">
              <h1 className="font-bold align-text-bottom text-2xl tracking-tight">
                John Smith
              </h1>
              <h1 className="">CEO and Founder</h1>
            </div>
            <div></div>
          </div>
          <div className="py-5">
            10+ years of experience in digital marketing. Expertise in SEO, PPC,
            and content strategy
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
