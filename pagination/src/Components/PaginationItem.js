import classNames from 'classnames';

const PaginationItem = ({ page, currentPage, onPageChange, maxPageNumber, minPageNumber }) => {
  const liClasses = classNames({
    'page-item': true,
    active: page === currentPage
  })
  if (page < maxPageNumber + 1 && page > minPageNumber)
    return (
      <li
        className={liClasses}
        onClick={() => onPageChange(page)}
      >
        <span className='page-link'
        >{page}</span>
      </li>);
}

export default PaginationItem;
