import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  testId: string;
};

// Each mood card in the selector
const MoodCard: FC<Props> = ({ children, onClick, className, testId }) => {
  return (
    <div
      className={`flex flex-col gap-2 border border-solid shadow-md items-center justify-start p-4 rounded-2xl max-w-max cursor-pointer ${className}`}
      data-testid={testId}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default MoodCard;
