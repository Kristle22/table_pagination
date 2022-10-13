
const PageDecrementBtn = ({ minPageNumber, handlePrev }) => {

  if (minPageNumber >= 1)

    return (
      <button
        className='page-link'
        onClick={handlePrev}
      >&hellip;</button>
    );
}

export default PageDecrementBtn;