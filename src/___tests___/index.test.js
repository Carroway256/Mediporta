import { render, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar/SearchBar";
test("should render searchBar", () => {
  render(<SearchBar />);
  const searchBar = screen.queryByTestId("searchBar");
  expect(searchBar).toBeInTheDoc;
});
