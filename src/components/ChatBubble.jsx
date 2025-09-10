// function ChatBubble({ content, name, position }) {
//   return (
//     <div className="w-fit">
//       {/* Bubble */}
//       <div className="relative border-2 border-[#b9ff66] bg-transparent text-white rounded-3xl max-w-xl p-8 mb-10">
//         {content}

//         {/* Tail */}
//         <div
//           className="absolute -bottom-4 left-10 w-0 h-0
//                      border-l-[15px] border-r-[15px] border-t-[15px]
//                      border-l-transparent border-r-transparent border-t-[#b9ff66]"
//         ></div>
//       </div>

//       {/* Name + Position */}
//       <div className="flex flex-col pt-3 pl-20">
//         <span className="text-[#b9ff66]">{name}</span>
//         <span className="text-white">{position}</span>
//       </div>
//     </div>
//   );
// }

// export default ChatBubble;


function ChatBubble({ content, name, position }) {
  return (
    <div className="w-fit">
      {/* Bubble */}
      <div className="relative border-2 border-[#b9ff66] bg-transparent text-white rounded-3xl max-w-xl p-8 mb-10">
        {content}

        {/* Tail (outlined) */}
        <div className="absolute -bottom-4 left-10">
          {/* Outer green triangle (border) */}
          <div
            className="w-0 h-0
                       border-l-[18px] border-r-[18px] border-t-[18px]
                       border-l-green-50
                       border-r-transparent border-transparent"
          ></div>
          {/* Inner transparent triangle (fills the inside) */}
          <div
            className="absolute left-0 top-0 w-0 h-0
                       translate-x-[3px] -translate-y-[2px]
                       border-l-[15px] border-r-[15px] border-t-[15px]
                       border-l-transparent border-r-transparent border-t-transparent"
          ></div>
        </div>
      </div>

      {/* Name + Position */}
      <div className="flex flex-col pt-3 pl-20">
        <span className="text-[#b9ff66]">{name}</span>
        <span className="text-white">{position}</span>
      </div>
    </div>
  );
}

export default ChatBubble;
