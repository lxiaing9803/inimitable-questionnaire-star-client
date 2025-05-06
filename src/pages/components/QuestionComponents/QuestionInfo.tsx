interface QuestionInfoProps {
  title: string;
  desc?: boolean;
}

const QuestionInfo: React.FC<QuestionInfoProps> = ({ title, desc }) => {
  return (
    <div className="pb-[16px] text-center">
      <div className="text-2xl font-bold">{title}</div>
      <p>{desc}</p>
    </div>
  );
};

export default QuestionInfo;
