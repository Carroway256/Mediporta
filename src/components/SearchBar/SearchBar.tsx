import usePagination from '../../hooks/usePagination';
import { useTagsStore } from '../../tagsStore/tagsStore';
import ElementsPerSidePicker from '../ElementsPerSidePicker/ElementsPerSidePicker';
import SortingFieldPicker from '../SortingFieldPicker/SortingFieldPicker';
import SortingOrderPicker from '../SortingOrderPicker/SortingOrderPicker';

const SearchBar = () => {
  const { elementsPerPage, data, page, changePage } = useTagsStore();
  const pages = usePagination(page, changePage, elementsPerPage, data);
  return (
    <div
      data-testid="searchBar"
      className="sticky top-0 flex    w-full items-center justify-center bg-slate-600 p-6 text-white"
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <ElementsPerSidePicker />
        </div>
        <div className="flex items-center justify-center">
          <SortingFieldPicker />
        </div>
        <div className=" flex justify-center">
          <SortingOrderPicker />
        </div>{' '}
        {pages}
      </div>
    </div>
  );
};
export default SearchBar;
