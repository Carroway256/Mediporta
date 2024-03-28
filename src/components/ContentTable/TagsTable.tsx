import { useTagsStore } from "../../tagsStore/tagsStore";

const TagsTable = () => {
  const { data } = useTagsStore();

  return (
    <div className="">
      <table className="w-full border-black border-2 " data-testid="itemsTable">
        <thead>
          <tr className="border-b-2 border-black">
            <th>name</th>
            <th>count</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.items.map(({ name, count }, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{count}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};
export default TagsTable;
