interface QuestionTextareaProps {
  /** 组件id */
  fe_id: string;
  props: {
    /** 组件标题 */
    title: string;
    /** 组件描述 */
    placeholder: string;
  };
}

const QuestionTextarea: React.FC<QuestionTextareaProps> = ({
  fe_id,
  props,
}) => {
  const { title = "", placeholder = "" } = props || {};
  return (
    <div>
      <p className="mb-[10px]">{title}</p>
      <div className="mb-[16px] px-[5px]">
        <textarea
          rows={5}
          name={fe_id}
          placeholder={placeholder}
          className="w-full border border-[#d8d8d8] rounded-[3px] px-[12px] py-[6px]"
        />
      </div>
    </div>
  );
};

export default QuestionTextarea;
