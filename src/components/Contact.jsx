import contact from "../assets/contact.svg";

function Contact() {
  return (
    <div className="flex justify-between items-center bg-[#F3F3F3]  lg:px-20 mt-23  rounded-3xl p-5 lg:py-15">
      <div className="p-3 w-[100%] flex flex-col gap-4 lg:w-full">
        <h1 className="text-center lg:text-start font-bold text-3xl tracking-tight">
          Let's make things happen
        </h1>
        <p className="text-center lg:text-start tracking-tight">
          Contact us today, to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <a
          className="bg-[#191A23] text-center sm:m-auto lg:m-0 lg:w-fit text-white p-5 py-3 rounded-xl tracking-tight"
          href="#"
        >
          Get your free proposal
        </a>
      </div>
      <div className="hidden lg:flex w-full items-center justify-center r-0 ">
        <img className="absolute" src={contact} alt="design" />
      </div>
    </div>
  );
}

export default Contact;
