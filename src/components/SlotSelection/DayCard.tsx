import { FC } from "react";
import dayjs from "dayjs";
import { GroupedSlot } from "../../interfaces/slots.interface";

type Props = {
  slot: GroupedSlot;
  onClick: (slot: GroupedSlot) => void;
  selectedDate: string;
};

// component for showing day and date inside the horizontal scroll

const DayCard: FC<Props> = ({ slot, onClick, selectedDate }) => {
  return (
    <div
      className={`rounded-lg h-24 border border-solid border-gray-300 shadow-md p-8 flex flex-col gap-1 items-center justify-center mx-2 cursor-pointer ${
        selectedDate === slot.displayDate ? "bg-[#eaeff3]" : "bg-white"
      }`}
      onClick={() => onClick(slot)}
    >
      <p className="text-black">{dayjs(slot?.displayDate).format("DD")}</p>
      <p className="text-black">{dayjs(slot?.displayDate).format("ddd")}</p>
    </div>
  );
};

export default DayCard;
