import { useContext } from "react";
import {
  publicApiType,
  VisibilityContext,
} from "react-horizontal-scrolling-menu";
import ArrowIcon from "../../assets/arrow.svg?react";

const LeftArrow = () => {
  const visibility = useContext<publicApiType>(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible("first", true);
  return (
    <ArrowIcon
      onClick={() => !isFirstItemVisible && visibility.scrollPrev()}
      className={`rotate-180 ${
        isFirstItemVisible ? "opacity-15 cursor-not-allowed" : "opacity-100"
      }`}
      data-testid="left-arrow-icon"
    ></ArrowIcon>
  );
};

export default LeftArrow;
