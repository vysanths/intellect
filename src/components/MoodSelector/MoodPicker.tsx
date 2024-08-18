import { FC } from "react";
import MoodCard from "./MoodCard";
import moods from "../../dataset/moods";

type props = {
  onClick: (mood: string) => void;
  mood: string;
};

const MoodPicker: FC<props> = ({ onClick, mood }) => {
  return (
    <div className="flex gap-2 overflow-auto w-full justify-normal md:justify-center">
      {moods.map(({ icon, text }) => (
        <MoodCard
          key={text}
          onClick={() => onClick(text)}
          className={`${mood === text ? "bg-[#eaeff3]" : "bg-white"}`}
          testId={`${text}-id`}
        >
          <div className="md:h-14 h-8 md:w-14 w-8">{icon}</div>
          <p>{text}</p>
        </MoodCard>
      ))}
    </div>
  );
};

export default MoodPicker;
