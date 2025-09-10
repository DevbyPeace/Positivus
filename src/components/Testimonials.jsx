import { Swiper, SwiperSlide } from "swiper/react";
import ChatBubble from "./ChatBubble";
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

// function Testimonials() {
//   return (
//     <div className="mt-20 border-black border-8">
//       <Swiper
//         spaceBetween={30} // gap between slides
//         slidesPerView={"auto"} // slides size themselves
//         centeredSlides={true} // active slide is centered
//         loop={true}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//         pagination
//         className="bg-[#191A23]"
//       >
//         {testimonialsList.map((person, index) => {
//           return (
//             <SwiperSlide>
//               <Chatter
//                 key={index}
//                 content={person.content}
//                 name={person.name}
//                 position={person.position}
//               />
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// }

// export default Testimonials;

function Testimonials() {
  return (
    <div className="border-black border-2">
      <div className="w-full flex flex-col justify-center p-4 pl-0 items-center gap-5 lg:gap-9 lg:w-[70%] lg:justify-between lg:min-w-[1000px] lg:flex-row lg:pl-0">
        <h1 className="bg-[#B9FF66] font-bold text-2xl rounded-md p-2 px-4 text-nowrap">
          Testimonials
        </h1>
        <p className="w-full text-center lg:text-start ">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      <div className="mt-20 border-black border-8 pt-30 bg-[#191A23]">
        <Swiper
          spaceBetween={50} // gap between slides
          slidesPerView={"auto"} // slides size themselves
          centeredSlides={true} // active slide is centered
          loop={true} // optional: infinite loop
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="bg-[#191A23]"
        >
          {testimonialsList.map((person, index) => (
            <SwiperSlide
              key={index}
              className="!w-[70%] md:!w-[50%] lg:!w-[40%]" // control width
            >
              <Chatter
                content={person.content}
                name={person.name}
                position={person.position}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
