import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Chatter from "./Chatter";

const testimonialsList = [
  {
    content:
      "This platform has completely changed the way I work. The interface is simple, intuitive, and really helped my team stay productive.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    content:
      "I was impressed by how quickly we were able to integrate this into our workflow. It's efficient and the support team is fantastic.",
    name: "Emily Johnson",
    position: "Product Manager at Innovatech",
  },
  {
    content:
      "A game-changer for our business! We’ve seen massive improvements in collaboration and efficiency since adopting this tool.",
    name: "Michael Chen",
    position: "CEO at Brightwave Solutions",
  },
  {
    content:
      "What I love most is how customizable everything is. It feels like the platform adapts to us, not the other way around.",
    name: "Sophia Martinez",
    position: "Creative Director at StudioNova",
  },
  {
    content:
      "The level of detail and thought that has gone into the design is incredible. Our clients have noticed the difference too!",
    name: "David Thompson",
    position: "Head of Operations at Greenline Group",
  },
];

function Testimonials() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center p-4 pl-0 items-center gap-5 lg:gap-9 lg:w-[70%] lg:justify-between lg:min-w-[1000px] lg:flex-row lg:pl-0">
        <h1 className="bg-[#B9FF66] font-bold text-2xl rounded-md p-2 px-4 text-nowrap">
          Testimonials
        </h1>
        <p className="w-full text-center lg:text-start ">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className="mt-5 rounded-2xl pt-30 pb-35 relative bg-[#191a23]">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          className="bg-[#191A23] rounded-2xl"
        >
          {testimonialsList.map((person, index) => (
            <SwiperSlide
              key={index}
              className="!w-[70%] md:!w-[50%] lg:!w-[40%]"
            >
              <Chatter
                content={person.content}
                name={person.name}
                position={person.position}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* custom nav + pagination */}
        <div className=" w-[50%] absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-10">
          <button className="swiper-button-prev scale-70 text-[#b9ff66]"></button>
          <div className="swiper-pagination !static !w-auto m-auto"></div>
          <button className="swiper-button-next scale-70"></button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
