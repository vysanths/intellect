import { slots } from "../dataset/slots";

export interface GroupedSlot {
    displayDate: string;
    slots: { displayTime: string; displayTimeEnd: string }[];
  }
  
export  type Slot = (typeof slots)[0];