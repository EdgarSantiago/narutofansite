import Link from "next/link";

const CustomPagination = ({
  pageCount,
  currentPage,
  basePath,
  maxPageLinks = 5,
  breakLabel = "...",
}: any) => {
  const pageLinks = [];

  const middlePage = Math.floor(maxPageLinks / 2);
  let startPage = Math.max(1, currentPage - middlePage);
  let endPage = Math.min(pageCount, startPage + maxPageLinks - 1);

  // Adjust startPage and endPage to ensure the specified number of links
  // are always shown, except when at the start or end of the pagination.
  if (startPage === 1) {
    endPage = Math.min(endPage + middlePage, pageCount);
  } else if (endPage === pageCount) {
    startPage = Math.max(
      startPage - (maxPageLinks - (pageCount - endPage) - 1),
      1
    );
  }

  if (startPage > 1) {
    pageLinks.push(
      <Link key={1} href={`${basePath}?page=${1}`}>
        1
      </Link>
    );
    if (startPage > 2) {
      pageLinks.push(<span key="break-start">{breakLabel}</span>);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageLinks.push(
      <Link key={i} href={`${basePath}?page=${i}`}>
        {i}
      </Link>
    );
  }

  if (endPage < pageCount) {
    if (endPage < pageCount - 1) {
      pageLinks.push(<span key="break-end">{breakLabel}</span>);
    }
    pageLinks.push(
      <Link key={pageCount} href={`${basePath}?page=${pageCount}`}>
        {pageCount}
      </Link>
    );
  }

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <Link href={`${basePath}?page=${currentPage - 1}`}>Previous</Link>
      )}
      {pageLinks}
      {currentPage < pageCount && (
        <Link href={`${basePath}?page=${currentPage + 1}`}>Next</Link>
      )}
    </div>
  );
};

export default CustomPagination;
