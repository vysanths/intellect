import { FC } from "react";
import { GroupedSlot } from "../../interfaces/slots.interface";

type Props = {
  onClick: (selectedTime: string) => void;
  selectedTime: string | null
  selectedSlot: GroupedSlot | null;
};

// component for showing all the available time for a selected day

const AvailbleTimeSlots: FC<Props> = ({ selectedSlot, onClick, selectedTime }) => {
  return (
    <div className="flex flex-col mt-7">
      <h2 className="font-bold">Availble time slots</h2>
      <p className="text-gray-500 mb-4">Each session lasts for 30 minutes</p>
      <div className="flex flex-wrap gap-2">
        {selectedSlot?.slots?.length ? (
          selectedSlot?.slots.map(({ displayTime }, index) => (
            <div
              key={index}
              className={`p-3 border border-solid border-gray-300 shadow max-w-max rounded-lg cursor-pointer ${
                selectedTime === displayTime ? "bg-[#eaeff3]" : "bg-white"
              }`}
              onClick={() => onClick(displayTime)}
            >
              {displayTime}
            </div>
          ))
        ) : (
          <p className="text-gray-500">Please select a date with slots</p>
        )}
      </div>
    </div>
  );
};

export default AvailbleTimeSlots;
