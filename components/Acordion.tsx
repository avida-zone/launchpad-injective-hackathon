import clsx from "clsx";
import React, { useState } from "react";
import ArrowDownSline from "./Icons/ArrowDownSlineIcon";

interface AccItem {
  id?: string;
  icon?: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

interface IProps {
  items: AccItem[];
}

const Accordion: React.FC<IProps> = ({ items }) => {
  const [visible, setVisible] = useState<{
    id?: string;
    icon?: React.ReactNode;
    title: string;
    content: React.ReactNode;
  } | null>(items[0]);

  const handleClick = (item: AccItem) => {
    visible?.title.includes(item.title) ? setVisible(null) : setVisible(item);
  };

  if (!items.length) return <></>;

  return (
    <div className={clsx("flex flex-col p-4 rounded-md bg-white overflow-y-scroll scrollbar-none")}>
      {items.map(({ content, id, icon, title }, i) => {
        return (
          <div key={`accordion-${title.replace(" ", "")}-${i}`}>
            <div
              className={clsx(
                "flex items-center justify-between cursor-pointer transition-all  ",
                visible?.title.includes(title) && "text-java-green-600",
                i === items.length - 1 ? "border-b-0 pt-2" : "border-b border-gray-300 py-2"
              )}
              onClick={() => handleClick({ content, id, icon, title })}
            >
              <div className="flex gap-2 items-center text-lg">
                {icon ? icon : ""}
                {title}
              </div>
              <div>
                <ArrowDownSline className={clsx("h-6 w-6 transition-all", visible?.title.includes(title) ? "rotate-180" : "")} />
              </div>
            </div>
            <div
              className={clsx(
                "h-0 transition-all overflow-hidden text-xs flex flex-col gap-2",
                visible?.title.includes(title) ? (i === items.length - 1 ? "!h-fit pt-2" : "!h-fit py-2 border-b border-gray-300") : ""
              )}
            >
              {content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
