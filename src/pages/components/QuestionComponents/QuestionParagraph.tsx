interface QuestionParagraphProps {
  text: string;
  isCenter?: boolean;
}

const QuestionParagraph: React.FC<QuestionParagraphProps> = ({
  text,
  isCenter,
}) => {
  const textList = text.split("\n");
  return (
    <p className={`pb-[16px] ${isCenter ? "text-center" : "text-left"}`}>
      {textList.map((t, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {t}
        </span>
      ))}
    </p>
  );
};

export default QuestionParagraph;
