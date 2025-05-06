import { useEffect, useMemo, useState } from "react";

interface QuestionCheckboxProps {
  fe_id: string;
  props: {
    title: string;
    isVertical: boolean;
    list: Array<{
      value: string;
      text: string;
      checked: boolean;
    }>;
  };
}

const QuestionCheckbox: React.FC<QuestionCheckboxProps> = ({
  fe_id,
  props,
}) => {
  const { title = "", isVertical = false, list = [] } = props || {};

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const currentClass = useMemo(() => {
    return isVertical ? "mb-[10px] px-[5px]" : "inline-block mr-[10px] px[5px]";
  }, [isVertical]);

  const toggleChecked = (val: string) => {
    if (selectedValues.includes(val)) {
      setSelectedValues((prev) => prev.filter((item) => item !== val));
    } else {
      setSelectedValues(selectedValues.concat(val));
    }
  };

  useEffect(() => {
    list.forEach((item) => {
      const { value, checked = false } = item || {};
      if (checked) {
        setSelectedValues((prev) => prev.concat(value));
      }
    });
  }, [list]);

  return (
    <div className="pb-[16px]">
      <p className="mb-[10px]">{title}</p>
      <input type="hidden" name={fe_id} value={selectedValues.toString()} />
      <ul>
        {list.map((item) => {
          const { value, text = "", checked = false } = item || {};
          return (
            <li key={value} className={currentClass}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedValues.includes(value)}
                  onChange={() => toggleChecked(value)}
                />
                {text}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default QuestionCheckbox;
