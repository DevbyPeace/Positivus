function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-full items-center gap-10 md:gap-0 mt-2 md:mt-15">
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
        <h1 className="font-bold text-4xl md:text-6xl md:font-extrabold order-1 md:order-1">
          Navigating the digital landscape for success
        </h1>

        <div className="order-2 md:order-none md:hidden">
          <img
            src="https://res.cloudinary.com/de2im9ted/image/upload/v1757331556/Illustration_viyvje.svg"
            alt="heroImage"
            className="w-full h-auto"
          />
        </div>

        <p className="text-lg order-3 md:order-2">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>

        <a
          className="border p-3 rounded-md bg-[#191A23] text-white w-fit order-4 md:order-3"
          href="#"
        >
          Book a consultation
        </a>
      </div>

      <div className="w-full md:w-1/2 hidden md:block">
        <img
          src="https://res.cloudinary.com/de2im9ted/image/upload/v1757331556/Illustration_viyvje.svg"
          alt="heroImage"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
