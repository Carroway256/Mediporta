import { create } from "zustand";
import { TResponse, TSortOrder, TSortingField } from "../types";

interface TagsStore {
  page: number;
  changePage: (page: number) => void;
  data: TResponse | undefined;
  setData: (data: TResponse) => void;
  elementsPerPage: number;
  sortingField: TSortingField | undefined;
  setSortingField: (sortingField: TSortingField) => void;
  sortingOrder: TSortOrder;
  setSortingOrder: (sortingOrder: TSortOrder) => void;
  setElementsPerPage: (elementsPerPage: number) => void;
}

export const useTagsStore = create<TagsStore>()((set) => ({
  sortingField: undefined,
  sortingOrder: "desc",
  setSortingOrder: (sortingOrder: TSortOrder) => set({ sortingOrder }),
  setSortingField: (sortingField: TSortingField) => set({ sortingField }),
  page: 1,
  changePage: (page) => set(() => ({ page })),
  elementsPerPage: 30,
  setElementsPerPage: (elementsPerPage) => set(() => ({ elementsPerPage })),
  data: undefined,
  setData: (data) => set(() => ({ data })),
}));
