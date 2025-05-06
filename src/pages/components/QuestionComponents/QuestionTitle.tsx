import { useMemo } from "react";

interface QuestionTitleProps {
  text: string;
  level: number;
  isCenter?: boolean;
}

const QuestionTitle: React.FC<QuestionTitleProps> = ({
  text,
  level,
  isCenter,
}) => {
  const titleClassName = useMemo(() => {
    let fontStyle: string = "";
    switch (level) {
      case 1:
        fontStyle = "text-2xl";
        break;
      case 2:
        fontStyle = "text-xl";
        break;
      case 3:
        fontStyle = "text-lg";
        break;
      case 4:
        fontStyle = "text-base";
        break;
      case 5:
        fontStyle = "text-sm";
        break;
      default:
        fontStyle = "text-base";
    }
    return `${fontStyle} font-bold pb-[16px] ${
      isCenter ? "text-center" : "text-left"
    }`;
  }, [isCenter, level]);
  return <div className={titleClassName}>{text}</div>;
};

export default QuestionTitle;
