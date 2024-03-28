import { TResponse } from '../types';
function usePagination(
  page: number,
  setPage: (page: number) => void,
  elementsPerPage: number,
  responseData: TResponse | undefined,
) {
  const { quota_max } = responseData || {};
  const totalPages = quota_max && Math.ceil(quota_max / elementsPerPage);

  const pages = (
    <div className="flex flex-wrap items-center justify-center gap-2 p-2">
      {totalPages && NavigationButton(false, page, setPage, totalPages)}
      {totalPages && totalPages > 1 ? (
        <>
          {Array.from(Array(totalPages), (_i, e) => {
            return (
              <div
                key={e}
                className={`${
                  e + 1 === page || (page === undefined && e === 0) ? 'bg-white text-slate-800' : ''
                } cursor-pointer rounded-full p-2 px-4`}
                onClick={() => setPage(e + 1)}
              >
                {e + 1}{' '}
              </div>
            );
          })}
        </>
      ) : null}
      {totalPages && NavigationButton(true, page, setPage, totalPages)}
    </div>
  );
  return pages;
}
export default usePagination;

function NavigationButton(
  isPointingForward: boolean,
  page: undefined | null | number,
  setPage: (page: number) => void,
  totalPages: number,
): JSX.Element | null {
  const isLastPage = totalPages === page;
  const isFirstPage = page === 1 || page === undefined;
  const buttonContent = (
    <div
      className="cursor-pointer"
      onClick={() => {
        page === undefined || page === null
          ? setPage(2)
          : setPage(isPointingForward ? 1 + page : page - 1);
      }}
    >
      {isPointingForward ? 'next' : 'prev'}
    </div>
  );
  return isPointingForward
    ? isLastPage
      ? null
      : buttonContent
    : isFirstPage
      ? null
      : buttonContent;
}
