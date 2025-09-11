function Chatter({ content, name, position }) {
  return (
    <div className="w-fit max-w-2xl">
      {/* Bubble */}
      <div className="relative bg-[#191A23] border-2 border-[#b9ff66] text-white rounded-3xl p-6 py-18">
        <p className="text-lg leading-relaxed">{content}</p>

        {/* Bubble Tail */}
        <div
          className="absolute -bottom-4 left-12 w-0 h-0 
                        border-l-[20px] border-r-[20px] border-t-[20px]
                        border-l-transparent border-r-transparent border-t-[#191A23]"
        ></div>
        <div
          className="absolute -bottom-5 left-12 w-0 h-0 
                        border-l-[22px] border-r-[22px] border-t-[22px]
                        border-l-transparent border-r-transparent border-t-[#b9ff66] -z-10"
        ></div>
      </div>

      {/* Name + Position */}
      <div className="flex flex-col pt-13 pl-6">
        <span className="text-[#b9ff66] font-semibold">{name}</span>
        <span className="text-white text-sm">{position}</span>
      </div>
    </div>
  );
}


export default Chatter