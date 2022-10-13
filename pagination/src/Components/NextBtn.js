import { useState } from "react";
import PageIncrementBtn from "./PageIncrementBtn";

const NextBtn = ({ pages, currentPage, setCurrentPage, pageNumber, maxPageNumber, setMaxPageNumber, minPageNumber, setMinPageNumber }) => {

  const handleNext = () => {
    setCurrentPage(Number(currentPage + 1));
    if (currentPage + 1 > maxPageNumber) {
      setMaxPageNumber(maxPageNumber + pageNumber);
      setMinPageNumber(minPageNumber + pageNumber);
    }
  };

  return (
    <li className='page-item'>
      <PageIncrementBtn
        pages={pages}
        maxPageNumber={maxPageNumber}
        handleNext={handleNext}
      />
      <button
        className="page-link"
        onClick={handleNext}
        disabled={currentPage === pages[pages.length - 1] ? true : false}
      >Next &raquo;</button>
    </li>
  );
}

export default NextBtn;