import axios from "axios";
import { TResponse, TSortOrder, TSortingField } from "./types";

export async function getTags(
  elementsPerPage?: number,
  sortingField?: TSortingField,
  sortOrder?: TSortOrder,
  page?: number,
): Promise<TResponse | undefined> {
  var response;
  try {
    const { data } = await axios.get<TResponse>(
      `https://api.stackexchange.com/2.3/tags?${page ? `page=${page}` : ""}&${elementsPerPage ? `pagesize=${elementsPerPage}` : ""}&${sortOrder ? `order=${sortOrder}` : ""}&${sortingField ? `sort=${sortingField}` : ""}&site=stackoverflow`,
    );

    response = data;
  } catch (error) {
    console.error(error);
  }
  return response;
}
