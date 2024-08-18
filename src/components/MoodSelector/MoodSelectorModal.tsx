import { FC, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import MoodPicker from "./MoodPicker";

const MoodSelectorModal: FC = () => {
  const [mood, setMood] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="bg-[#96a5be] p-2 rounded-lg text-white mt-6 md:mt-12"
        onClick={() => setIsOpen(true)}
      >
        Select your mood
      </button>
       {/* Modal popup to be opened on button click */}
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        center
        classNames={{ modal: "md:w-[800px] w-[360px] md:m-4 m-2" }}
      >
        <div className="p-6 flex flex-col justify-center">
          <h1 className="font-bold text-base md:text-xl flex justify-center w-full mb-6 md:mb-12">
            Wellbeing Check-in
          </h1>
          <h2 className="flex justify-center w-full mb-4 text-sm">
            Hello! How are you feeling today?
          </h2>
          <MoodPicker mood={mood} onClick={(mood) => setMood(mood)} />
          <button
            className="w-full bg-[#96a5be] p-2 rounded-lg text-white mt-6 md:mt-12 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed"
            disabled={!mood}
            onClick={() => {
                console.log('false is called')
                setIsOpen(false)
            }}
          >
            Continue
          </button>
        </div>
      </Modal>
    </>
  );
};

export default MoodSelectorModal;
