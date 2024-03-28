import { Radio } from 'antd';
import { useTagsStore } from '../../tagsStore/tagsStore';
import { TSortOrder } from '../../types';

const SortingOrderPicker = () => {
  const { setSortingOrder, sortingOrder } = useTagsStore();
  const onSortingOrderChange = (value: TSortOrder) => {
    setSortingOrder(value);
  };
  return (
    <>
      <Radio.Group onChange={(e) => onSortingOrderChange(e.target.value)} value={sortingOrder}>
        <Radio value={'asc'} className="text-white">
          ASC
        </Radio>
        <Radio value={'desc'} className="text-white">
          DESC
        </Radio>
      </Radio.Group>
    </>
  );
};
export default SortingOrderPicker;
