import { useState } from "react";
import PageDecrementBtn from "./PageDecrementBtn";

const PrevBtn = ({ pages, currentPage, setCurrentPage, pageNumber, maxPageNumber, setMaxPageNumber, minPageNumber, setMinPageNumber }) => {

  const handlePrev = () => {
    setCurrentPage(Number(currentPage - 1));
    if (currentPage - 1 <= minPageNumber)
    // if ((currentPage - 1) % pageNumber === 0) 
    {
      setMinPageNumber(minPageNumber - pageNumber);
      setMaxPageNumber(maxPageNumber - pageNumber);
    }
  };

  return (
    <li className='page-item'>
      <button
        className="page-link"
        onClick={handlePrev}
        disabled={currentPage === pages[0] ? true : false}
      >&laquo; Prev</button>
      <PageDecrementBtn
        minPageNumber={minPageNumber}
        handlePrev={handlePrev}
      />
    </li>
  );
}

export default PrevBtn;