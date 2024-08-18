import { useContext } from "react";
import { publicApiType, VisibilityContext } from "react-horizontal-scrolling-menu";
import ArrowIcon from "../../assets/arrow.svg?react";

const RightArrow = () => {
  const visibility = useContext<publicApiType>(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible("last", false);
  return (
    <ArrowIcon
      onClick={() => !isLastItemVisible && visibility.scrollNext()}
      className={`${
        isLastItemVisible ? "opacity-15 cursor-not-allowed" : "opacity-100"
      }`}
      data-testid="right-arrow-icon"
    ></ArrowIcon>
  );
};

export default RightArrow;
