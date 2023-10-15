import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearList = () => {
    setPeople([]);
  };

  return (
    <main>
      <List people={people} clearList={clearList} />
    </main>
  );
};
export default App;
