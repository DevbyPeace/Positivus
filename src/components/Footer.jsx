import linkedinwhite from "../assets/linkedinwhite.svg";
import facebookwhite from "../assets/facebookwhite.svg";
import twitterwhite from "../assets/twitterwhite.svg";

const list = [
  {
    item: "About us",
    link: "#",
  },
  {
    item: "Services",
    link: "#",
  },
  {
    item: "Use Cases",
    link: "#",
  },
  {
    item: "Pricing",
    link: "#",
  },
  {
    item: "Blog",
    link: "#",
  },
];

const socials = [
  {
    src: linkedinwhite,
  },
  {
    src: facebookwhite,
  },
  {
    src: twitterwhite,
  },
];
function Footer() {
  return (
    <div className="flex flex-col bg-[#191a23] p-10 rounded-t-4xl">
      {/* Top section (desktop shows socials here) */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-white gap-6 text-center lg:text-left">
        <h1 className="text-2xl font-bold">Positivus</h1>

        <ul className="flex flex-col lg:flex-row gap-3 tracking-tighter">
          {list.map((item, idx) => (
            <a key={idx} href={item.link}>
              {item.item}
            </a>
          ))}
        </ul>

        {/* Socials - visible only on lg+ (keeps desktop unchanged) */}
        <div className="hidden lg:flex gap-3">
          {socials.map((platform, idx) => (
            <a key={idx} href={platform.link ?? "#"}>
              <img src={platform.src} alt={platform.name ?? "social"} />
            </a>
          ))}
        </div>
      </div>

      {/* Contact + Email */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-13 gap-8 text-center lg:text-left">
        {/* Contact info */}
        <div className="flex flex-col text-white gap-2 w-full lg:w-auto items-center lg:items-start">
          <h1 className="text-black w-fit p-1 rounded-md font-bold tracking-tight bg-[#b9ff66]">
            Contact Us :
          </h1>
          <p>Email: info@positivus.com</p>
          <p className="tracking-wide">Phone: 555-567-8901</p>
          <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
        </div>

        {/* Email subscription */}
        <div className="p-5 bg-[#292a32] rounded-2xl w-full lg:w-[50%]">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              className="border-white border-2 rounded-md p-3 text-white flex-1 bg-transparent"
              type="text"
              placeholder="Email"
            />
            <button className="bg-[#b9ff66] rounded-md px-4 py-2 font-semibold">
              Subscribe to news
            </button>
          </div>
        </div>
      </div>

      {/* Socials - visible only on mobile, placed after the contact/address block */}
      <div className="flex justify-center gap-3 mt-6 lg:hidden">
        {socials.map((platform, idx) => (
          <a key={idx} href={platform.link ?? "#"}>
            <img src={platform.src} alt={platform.name ?? "social"} />
          </a>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-t-2 border-gray-700 my-6" />

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-white gap-3 text-center lg:text-left">
        <p>&copy; 2023 Positivus. All Rights Reserved.</p>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
}

// function Footer() {
//   return (
//     <div className="flex flex-col bg-[#191a23] p-10 rounded-t-4xl">
//       <div className="flex-col lg:flex justify-between text-white">
//         <h1>Positivus</h1>

//         <ul className="flex gap-3 tracking-tighter">
//           {list.map((item) => (
//             <a href={item.link}>{item.item}</a>
//           ))}
//         </ul>
//         <div className="flex gap-3">
//           {socials.map((platform) => (
//             <a>
//               <img src={platform.src} alt="socialicon" />
//             </a>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-between items-center mt-13">
//         <div className="flex flex-col text-white gap-2">
//           <h1 className="text-black w-fit p-1 rounded-md font-bold tracking-tight bg-[#b9ff66]">
//             Contact Us :
//           </h1>

//           <p>Email: info@positivus.com</p>
//           <p className="tracking-wide">Phone: 555-567-8901</p>
//           <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
//         </div>

//         <div className="p-5 bg-[#292a32] rounded-2xl w-[50%]">
//           <div className="flex">
//             <input className="border-white border-2 rounded-md p-3 text-white flex-2" type="text" placeholder="Email" />
//             <button className="bg-[#b9ff66] rounded-md">Subscribe to news</button>
//           </div>
//         </div>
//       </div>
//       <hr class="border-t-2 border-black-300 my-6" />
//       <div className="text-white">
//         <p>&copy; 2023 Positivus. All Rights Reserved.</p>
//         <a>Privacy Policy</a>
//       </div>
//     </div>
//   );
// }

export default Footer;
