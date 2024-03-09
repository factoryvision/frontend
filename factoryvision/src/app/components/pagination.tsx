import Link from "next/link";

interface PaginationProps {
  total: number;
  limit: number;
  page: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  limit,
  page,
  setPage,
}) => {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <nav className="flex justify-center gap-4 m-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="pagination-button"
        >
          &lt;
        </button>
        {Array.from({ length: numPages }, (_, i) => i + 1).map((pageNumber) => (
          <Link href={`/${pageNumber}`} key={pageNumber}>
            <a
              className={`pagination-button ${
                page === pageNumber
                  ? "font-bold bg-blue-600 text-white"
                  : "bg-gray-400 text-black"
              }`}
              aria-current={page === pageNumber ? "page" : undefined}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber}
            </a>
          </Link>
        ))}
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
          className="pagination-button"
        >
          &gt;
        </button>
      </nav>
    </>
  );
};

export default Pagination;
