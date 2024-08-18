/// <reference types="vite-plugin-svgr/client" />

import { createContext, FC, useEffect, useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useIntersectionObserver } from "usehooks-ts";
import "react-horizontal-scrolling-menu/dist/styles.css";

import DayCard from "./DayCard";
import { slots } from "../../dataset/slots";
import { GroupedSlot } from "../../interfaces/slots.interface";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import { groupSlotsByDate } from "../../utils/groupSlotsByDate";

type Props = {
  onClick: (slot: GroupedSlot) => void;
  selectedSlot: GroupedSlot | null;
};

// context for handling visiblity of arrows bsaed on the intersection observer
const OnScreenContext = createContext(true);

const DayPicker: FC<Props> = ({ onClick, selectedSlot }) => {
  const [groupedSlots, setGroupedSlots] = useState<GroupedSlot[]>([]);
  const { isIntersecting: isVisible, ref } = useIntersectionObserver({
    threshold: 0.9,
  }); // interscetion observer to disable the arrows when scrollbar is reaced near arrows

  useEffect(() => {
    // in real world application slots will be comming from an api so manipulated inside use effect
    // this can be done in tanstak query in real world apis
    setGroupedSlots(groupSlotsByDate(slots));
  }, []);

  return (
    <div ref={ref} className="flex flex-col w-full">
      <OnScreenContext.Provider value={isVisible}>
        {/* scroll menu for handling the horizontal scrolling */}
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {groupedSlots.map((slot, index) => (
            <DayCard
              key={index}
              slot={slot}
              onClick={(slot) => onClick(slot)}
              selectedDate={selectedSlot?.displayDate || ""}
            />
          ))}
        </ScrollMenu>
      </OnScreenContext.Provider>
    </div>
  );
};

export default DayPicker;
