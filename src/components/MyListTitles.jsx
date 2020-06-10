import React, { Fragment } from "react";

const MyListTitles = ({ myLists }) => {
  return (
    <Fragment>
      <h2 className="category-title">My list's title</h2>
      <ul className="my-list-title-container">
        {myLists.map((item) => (
          <li key={item.id} className="my-list-title-container__item">
            {item.title}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default MyListTitles;
