import Marquee from "react-fast-marquee";
import img1 from "../assets/logo1.svg";
import img2 from "../assets/logo2.svg";
import img3 from "../assets/logo3.svg";
import img4 from "../assets/logo4.svg";
import img5 from "../assets/logo5.svg";
import img6 from "../assets/logo6.svg";

function Sponsors() {
  return (
    <Marquee className="my-14 lg:my-6" gradient={false} speed={70} autoFill>
      <img
        className="w-32 sm:w-40 md:w-60 h-auto px-[30px] sm:px-[40px] md:px-[55px] border-r"
        src={img1}
        alt="sponsors"
      />
      <img
        className="w-32 sm:w-40 md:w-60 h-auto px-[30px] sm:px-[40px] md:px-[55px] border-r"
        src={img2}
        alt="sponsors"
      />
      <img
        className="w-32 sm:w-40 md:w-60 h-auto px-[30px] sm:px-[40px] md:px-[55px] border-r"
        src={img3}
        alt="sponsors"
      />
      <img
        className="w-32 sm:w-40 md:w-60 h-auto px-[30px] sm:px-[40px] md:px-[55px] border-r"
        src={img4}
        alt="sponsors"
      />
      <img
        className="w-32 sm:w-40 md:w-60 h-auto px-[30px] sm:px-[40px] md:px-[55px] border-r"
        src={img5}
        alt="sponsors"
      />
      <img
        className="w-32 sm:w-40 md:w-60 h-auto px-[30px] sm:px-[40px] md:px-[55px] border-r"
        src={img6}
        alt="sponsors"
      />
    </Marquee>
  );
}

export default Sponsors;
