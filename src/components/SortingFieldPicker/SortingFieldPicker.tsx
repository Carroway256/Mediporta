import { Select } from "antd";
import { useTagsStore } from "../../tagsStore/tagsStore";
import { TSortingField } from "../../types";

const SortingFieldPicker = () => {
  const { setSortingField } = useTagsStore();
  const onSearch = (value: string) => {
    setSortingField(value as TSortingField);
  };
  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <div className="mr-2">sorting field : </div>
      <Select
        showSearch
        placeholder="Select a field"
        optionFilterProp="children"
        onChange={onSearch}
        defaultValue={"popular"}
        filterOption={filterOption}
        options={[
          {
            value: "popular",
            label: "popular",
          },
          {
            value: "activity",
            label: "activity",
          },
          {
            value: "name",
            label: "name",
          },
        ]}
      />
    </>
  );
};
export default SortingFieldPicker;
