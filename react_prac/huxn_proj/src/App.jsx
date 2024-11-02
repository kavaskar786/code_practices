import { createContext, useContext, useState } from "react";
import Nav from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebars/Sidebar";
import products from "./db/data";
import "./Style.css";
import Card from "./components/Card";
// import TaskProvider from "./context/TaskContext";
// import ThemeProvider from "./context/ThemeContext";
// import Background from "./pages/Background";
// import Calculator from "./pages/Calculator";
// import Counter from "./pages/Counter";
// import HiddenSearchBar from "./pages/HiddenSearchBar";
// import Meals from "./pages/Meals";
// import Todo from "./pages/Todo";

const handleChangeContext = createContext();

const App = () => {
  const [selectedCategory, setSelectCategory] = useState(null);

  //---------------input Filter-------------------
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e);
    // console.log(e);
  };
  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //---------------Radio filter-------------------
  const handleChange = (e) => {
    setSelectCategory(e.target.value);
  };

  //---------------Buttons Filter-------------------
  const handleClick = (e) => setSelectCategory(e.target.value);

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;
    // console.log(query);
    //filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }
    // console.log(typeof selected);

    //selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }, index) => (
        <Card
          key={index}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  };
  // console.log(filteredData(products, selectedCategory, query));
  const result = filteredData(products, selectedCategory, query);

  return (
    <div className="font-sans	">
      {/* <Counter />
      <TaskProvider>
        <Todo />
      </TaskProvider>
      <Meals />
      <TaskProvider>
        <Calculator />
      </TaskProvider>
      <ThemeProvider>
        <Background />
      </ThemeProvider>
      <HiddenSearchBar /> */}
      <handleChangeContext.Provider value={{ handleChange }}>
        <Sidebar />
      </handleChangeContext.Provider>
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
};
export default App;

export const useChange = () => useContext(handleChangeContext);
