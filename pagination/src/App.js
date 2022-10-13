import { useState, useEffect } from 'react';
import './App.css';
import NextBtn from './Components/NextBtn';
import Pagination from './Components/Pagination';
import PrevBtn from './Components/PrevBtn';
import UserItem from './Components/UserItem';

const range = (start, end) => {
  return [...Array(end).keys()].map(el => el + start);
}

const App = () => {
  const [data, setData] = useState([]);
  const [itemsPerpage, setItemsPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [pageNumber, setPageNumber] = useState(3);
  const [maxPageNumber, setMaxPageNumber] = useState(5);
  const [minPageNumber, setMinPageNumber] = useState(0);

  const pagesCount = Math.ceil(data.length / itemsPerpage);
  const pages = range(1, pagesCount);

  const indexOfLastItem = currentPage * itemsPerpage;
  const indexOfFirstItem = indexOfLastItem - itemsPerpage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleLoadMore = () => {
    setItemsPerPage(itemsPerpage + 1);
  }

  return (
    <div className='container'>
      <div className='btn'>
        <PrevBtn
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageNumber={pageNumber}
          maxPageNumber={maxPageNumber}
          setMaxPageNumber={setMaxPageNumber}
          minPageNumber={minPageNumber}
          setMinPageNumber={setMinPageNumber}
        />
        <Pagination
          pages={pages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          maxPageNumber={maxPageNumber}
          minPageNumber={minPageNumber}
        />
        <NextBtn
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageNumber={pageNumber}
          maxPageNumber={maxPageNumber}
          setMaxPageNumber={setMaxPageNumber}
          minPageNumber={minPageNumber}
          setMinPageNumber={setMinPageNumber}
        />
      </div>
      <div className='btn'>
        <button onClick={handleLoadMore} className='page-link'>
          Load More
        </button>
      </div>
      <h1 className='flex'>USERS</h1>
      <UserItem
        data={currentItems}
      />
    </div>
  );
};

export default App;
