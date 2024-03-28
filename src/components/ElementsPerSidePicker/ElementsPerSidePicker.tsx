import { InputNumber } from 'antd';
import { useTagsStore } from '../../tagsStore/tagsStore';

const ElementsPerSidePicker = () => {
  const { setElementsPerPage, elementsPerPage } = useTagsStore();
  const onChange = (value: number | null) => {
    value === null ? null : setElementsPerPage(value);
  };
  return (
    <>
      <span className="mr-2">number of elements per site : </span>
      <InputNumber
        min={12}
        max={30}
        defaultValue={30}
        onChange={onChange}
        value={elementsPerPage}
      />
    </>
  );
};
export default ElementsPerSidePicker;
