import "./Pagination.css";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import Card from "../Card/Card";

const Pagination = () => {
  const { pokemons } = useSelector((state) => state.pokemon);

  const [currentPage, setCurrentPage] = useState(1);//home
  const itemsPerPage = 12;//home

  const pageNumberLimit = 5;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];//home
  for (let i = 1; i < Math.ceil(pokemons.length / itemsPerPage); i++) {
    pages.push(i); //home
  }

  const indexOfLastPage = currentPage * itemsPerPage;//home
  const indexOfFirsttPage = indexOfLastPage - itemsPerPage;//home

  const currentItem = pokemons.slice(indexOfFirsttPage, indexOfLastPage); //esto es lo que hay que renderizar //home

  const handlerPage = (event) => {
    setCurrentPage(Number(event.target.id));
    console.log("id", event.target.id);
  };
  const handlerPrev = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handlerNext = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  return (
    <>
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlerPrev}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pages.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li
                key={number}
                id={number}
                onClick={handlerPage}
                className={currentPage == number ? "active" : null}
              >
                {number}
              </li>
            );
          } else {
            return null;
          }
        })}
        <li>
          <button
            onClick={handlerNext}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
    </>
  ); //home
};

export default Pagination;
