import './App.css';
import { useQuery } from '@tanstack/react-query';
import SearchBar from './components/SearchBar/SearchBar';
import { getTags } from './API';
import { useTagsStore } from './tagsStore/tagsStore';
import TagsTable from './components/ContentTable/TagsTable';
import { useEffect } from 'react';

import { Spin } from 'antd';

const TagsBrowser = () => {
  const { setData, elementsPerPage, sortingField, sortingOrder, page } = useTagsStore();

  const { data, isPending, error } = useQuery({
    queryKey: ['tags', elementsPerPage, sortingField, sortingOrder, page],
    queryFn: async () => getTags(elementsPerPage, sortingField, sortingOrder, page),
  });

  useEffect(() => {
    data && setData(data);
  }, [data]);

  return (
    <div className="flex h-full w-full items-center justify-center ">
      <div className="h-full max-w-[30rem]">
        <SearchBar />

        {isPending ? (
          <div className="flex h-full w-full items-center justify-center">
            <Spin />
          </div>
        ) : error ? (
          error.message
        ) : (
          <TagsTable />
        )}
      </div>
    </div>
  );
};

export default TagsBrowser;
