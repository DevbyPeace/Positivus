import contactvector from "../assets/contactvectorlg.svg";

function FormComponent() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center p-4 pl-0 items-center gap-5 lg:gap-9 lg:w-[70%] lg:justify-between lg:min-w-[1000px] lg:flex-row lg:pl-0">
        <h1 className="bg-[#B9FF66] font-bold text-2xl rounded-md p-2 px-4 text-nowrap">
          Contact Us
        </h1>
        <p className="w-full text-center lg:text-start ">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      <div className="bg-[#f3f3f3] rounded-3xl flex justify-center lg:justify-between relative border p-10 items-center">
        <form className="flex flex-col gap-6 p-6 bg-[#f3f3f3] text-black rounded-2xl w-full max-w-lg">
          {/* Radio group */}
          <fieldset className="flex gap-6">
            <legend className="sr-only">Contact Type</legend>

            <label
              htmlFor="say-hi"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                id="say-hi"
                name="contactType"
                value="hi"
                className="accent-[#b9ff66] w-5 h-5"
              />
              <span>Say Hi</span>
            </label>

            <label
              htmlFor="quote"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                id="quote"
                name="contactType"
                value="quote"
                className="accent-[#b9ff66] w-5 h-5"
              />
              <span>Get a Quote</span>
            </label>
          </fieldset>

          {/* Name */}
          <label htmlFor="name" className="flex flex-col gap-1">
            <span className="text-sm font-semibold">Name</span>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="p-3 rounded-xl bg-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#b9ff66]"
            />
          </label>

          {/* Email */}
          <label htmlFor="email" className="flex flex-col gap-1">
            <span className="text-sm font-semibold">Email</span>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="p-3 rounded-xl bg-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#b9ff66]"
            />
          </label>

          {/* Message */}
          <label htmlFor="message" className="flex flex-col gap-1">
            <span className="text-sm font-semibold">Message</span>
            <textarea
              id="message"
              placeholder="Write your message..."
              rows={5}
              className="p-3 rounded-xl bg-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#b9ff66]"
            />
          </label>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#191A23] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#a3e55c] transition"
          >
            Send Message
          </button>
        </form>

        <img
          className="hidden lg:block absolute -right-77 top-0 h-full object-contain object-right overflow-hidden"
          src={contactvector}
          alt="Contact vector"
        />
      </div>
    </div>
  );
}

export default FormComponent;
