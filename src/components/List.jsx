import React, { Fragment } from "react";

const List = ({ handleAction, movieTitle, movieLists }) => {
  return (
    <Fragment>
      <h1 className="category-title">{movieTitle}</h1>
      <ul className="movie-list-container">
        {movieLists.map((item) => (
          <li key={item.id} className="movie-list-container__item">
            <h2 className="movie-list-container__title">{item.title}</h2>
            <img
              src={item.img}
              alt={item.title}
              className="movie-list-container__thumbnail"
            />
            <button onClick={() => handleAction(item)}>
              {movieTitle === "Recommendation List(s)" ? "Add" : "Remove"}
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default List;
