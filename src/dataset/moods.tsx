import BadIcon from "../assets/bad.svg?react";
import TerribleIcon from "../assets/terrible.svg?react";
import AlrightIdon from "../assets/alright.svg?react";
import PrettyGoodIcon from "../assets/pretty-good.svg?react";
import FantasticIcon from "../assets/fantastic.svg?react";

const moods = [
  {
    icon: <TerribleIcon className="fill-[#faaa55]" />,
    text: "Terrible",
  },
  {
    icon: <BadIcon className="fill-[#e65a5a]" />,
    text: "Bad",
  },
  {
    icon: <AlrightIdon className="fill-[#9baafa]" />,
    text: "Alright",
  },
  {
    icon: <PrettyGoodIcon className="fill-[#73cdeb]" />,
    text: "Pretty Good",
  },
  {
    icon: <FantasticIcon className="fill-[#87a09b]" />,
    text: "Fantastic",
  },
];

export default moods;