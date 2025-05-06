import { useMemo } from "react";

interface QuestionRadioProps {
  /** 组件id */
  fe_id: string;
  props: {
    /** 组件标题 */
    title: string;
    options: Array<{ value: string; label: string }>;
    value: string;
    isVertical: boolean;
  };
}

const QuestionRadio: React.FC<QuestionRadioProps> = ({ fe_id, props }) => {
  const {
    title = "",
    options = [],
    value = "",
    isVertical = false,
  } = props || {};

  const currentClass = useMemo(() => {
    return isVertical ? "mb-[10px] px-[5px]" : "inline-block mr-[10px] px[5px]";
  }, [isVertical]);

  return (
    <div className="pb-[16px]">
      <p className="mb-[10px]">{title}</p>
      <ul>
        {options.map((opt) => {
          const { value: val, label } = opt;
          return (
            <li key={val} className={currentClass}>
              <label>
                <input
                  type="radio"
                  name={fe_id}
                  value={val}
                  defaultChecked={val === value}
                />
                {label}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionRadio;
