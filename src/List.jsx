import React from "react";
import Person from "./Person";

const List = ({ people }) => {
  return (
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};

export default List;
