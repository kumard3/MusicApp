import React from "react";
const Pagination = ({ musicPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / musicPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {pageNumbers.map((number) => (
        <li key={number}>
          <a onClick={(e) => paginate(number)} href="!#">
            {number}
          </a>
        </li>
      ))}
    </div>
  );
};
export default Pagination;
