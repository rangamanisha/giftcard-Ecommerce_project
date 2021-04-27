import Pagination from 'react-bootstrap/Pagination';

const Pages = ({ totalRecords, setCurrentPage, currentPage, perPage }) => {
  const pageNumber = [];
  for (let i = 0; i <= Math.ceil(totalRecords / perPage) - 1; i++) {
    pageNumber.push(i + 1);
  }
  return (
    <nav>
      <ul className="Pagination">
        <li className={currentPage === 0 ? 'page-item disabled' : 'page-item'}>
          <button className="page-link" onClick={() => setCurrentPage(currentPage - perPage)}>
            <i className="bi bi-caret-left-fill"></i>
          </button>
        </li>
        {pageNumber.map((number) => {
          return (
            <li className="page-item">
              <button className="page-link" onClick={() => setCurrentPage((number - 1) * perPage)}>
                {number}
              </button>
            </li>
          );
        })}
        <li className={currentPage >= totalRecords - perPage ? 'page-item disabled' : 'page-item'}>
          <button className="page-link" onClick={() => setCurrentPage(currentPage + perPage)}>
            <i className="bi bi-caret-right-fill"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Pages;
