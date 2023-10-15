import React from "react";
import Person from "./Person";

const List = ({ people, clearList }) => {
  return (
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
      <button type="button" className="btn btn-block" onClick={clearList}>
        clear list
      </button>
    </section>
  );
};

export default List;
