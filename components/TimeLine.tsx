import React from "react";

interface Props {
  list: { title: string; text: string }[];
}

const TimeLine: React.FC<Props> = ({ list }) => {
  return (
    <div className="flex-1 flex w-full items-start py-4 flex-col">
      <span className="hidden md:flex md:w-full md:h-1 bg-java-green-600 rounded-lg " />
      <div className="flex md:items-start flex-col md:flex-row justify-between w-full">
        {list.map(({ title, text }, i) => {
          return (
            <div className="group flex gap-2 group transition-all p-2 h-full" key={`timeline-${i}`}>
              <span className="h-8 group-hover:h-12 w-1 block bg-java-green-600 rounded-lg transition-all" />
              <div className="relative">
                <span
                  className="h-1 w-1 translate-y-[-12px] translate-x-[-10px] rounded-full block transition-all absolute top-0 left-0
                  group-hover:bg-kashmir-blue-500 group-hover:h-4 group-hover:w-4 group-hover:translate-y-[-30px] group-hover:translate-x-[-18px]"
                />
                <p className="font-bold">{title}</p>
                <p className="max-w-[10rem] text-xs text-gray-600">{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLine;
