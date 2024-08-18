import { GroupedSlot, Slot } from "../interfaces/slots.interface";

// function to group slots with display date
export function groupSlotsByDate(slots: Slot[]): GroupedSlot[] {
    return slots.reduce((acc: GroupedSlot[], slot: Slot) => {
      const { displayDate, displayTime, displayTimeEnd } = slot;

      // Find if the displayDate already exists in the accumulator
      const existingDate = acc.find(
        (item) => item.displayDate === displayDate
      );

      if (existingDate) {
        // If it exists, push the displayTime and displayTimeEnd into the slots array
        existingDate.slots.push({ displayTime, displayTimeEnd });
      } else {
        // If it does not exist, create a new entry
        acc.push({
          displayDate,
          slots: [{ displayTime, displayTimeEnd }],
        });
      }

      return acc;
    }, []);
  }