import { FC } from "react";
import SlotSelector from "./components/SlotSelection/SlotSelector";
import MoodSelectorModal from "./components/MoodSelector/MoodSelectorModal";

const App: FC = () => {
  return (
    <div className="p-14">
      <SlotSelector />
      <MoodSelectorModal />
    </div>
  );
};

export default App;
