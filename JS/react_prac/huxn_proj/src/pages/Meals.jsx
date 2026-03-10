import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import logo from "../images/Meals_logo.png";
import Footer from "../components/Footer";
const Meals = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken")
      .then((res) => {
        // console.log(res.data.meals);
        setItems(res.data.meals);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="min-h-screen ">
      <Navbar
        title="Master chef"
        logo={logo}
        option={["Home", "Meals", "About", "Contact"]}
        bgColor="bg-gradient-to-r from-sky-500 to-indigo-500"
      />
      <div className="h-4/6 bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center flex-col ">
        {/* <h1 className="text-white text-3xl font-semibold	mt-10">
          Meals App using the API
        </h1> */}
        <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  p-6 gap-6">
          {items.map(({ strMeal, strMealThumb, idMeal }, index) => (
            <section
              key={index}
              className="card bg-white shadow-lg rounded-xl overflow-hidden transform-gpu hover:scale-110 hover:bg-cyan-300 transition duration-700 "
            >
              <img
                src={strMealThumb}
                alt="strMeal"
                className="w-full h-40 object-cover"
              />
              <section className="p-4 text-center">
                <p className="font-semibold">{strMeal}</p>
                <p className="text-gray-500 text-sm"># {idMeal}</p>
              </section>
            </section>
          ))}
        </div>
      </div>
      <Footer
        text="@Master chef"
        bgColor="bg-gradient-to-r from-sky-500 to-indigo-500"
      />
    </div>
  );
};
export default Meals;
