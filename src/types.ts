export type TResponse = {
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
  items: TItem[];
};
export type TItem = {
  count: number;
  name: string;
};
export type TSortingField = "popular" | "activity" | "name";
export type TSortOrder = "desc" | "asc";
