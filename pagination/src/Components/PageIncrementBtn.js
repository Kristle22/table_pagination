
const PageIncrementBtn = ({ pages, maxPageNumber, handleNext }) => {

  if (pages.length > maxPageNumber)

    return (
      <button
        className='page-link'
        onClick={handleNext}
      >&hellip;</button>
    );
}

export default PageIncrementBtn;