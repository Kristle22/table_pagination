import PaginationItem from "./PaginationItem";

const Pagination = ({ pages, currentPage, onPageChange, maxPageNumber, minPageNumber }) => {

  return (
    <ul className="pagination">
      {pages.map(page => (
        <PaginationItem
          key={page}
          page={page}
          currentPage={currentPage}
          onPageChange={onPageChange}
          maxPageNumber={maxPageNumber}
          minPageNumber={minPageNumber}
        />
      ))}
    </ul>
  )
}
export default Pagination;