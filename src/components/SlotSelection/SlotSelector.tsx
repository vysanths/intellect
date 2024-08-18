import { FC, useState } from "react";
import DayPicker from "./DayPicker";
import { GroupedSlot } from "../../interfaces/slots.interface";
import AvailbleTimeSlots from "./AvailableSlots";

const SlotSelector: FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<GroupedSlot | null>(null);
  const [selectedTime, setSeletedTime] = useState<string | null>(null);
  return (
    <div className="flex flex-col bg-[#f7f4ed] p-4">
      <h2 className="font-bold mb-4">Pick a date</h2>
      <DayPicker
        onClick={(slot) => {
            setSelectedSlot(slot)
            setSeletedTime(null)
        }}
        selectedSlot={selectedSlot}
      />
      <AvailbleTimeSlots
        selectedSlot={selectedSlot}
        onCick={(selectedTime) => setSeletedTime(selectedTime)}
        selectedTime={selectedTime}
      />
      {selectedTime ? (
        <p className="mt-4">
          You have selected the slot {selectedSlot?.displayDate} :{" "}
          {selectedTime}{" "}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SlotSelector;
