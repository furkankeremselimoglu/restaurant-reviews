import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Restaurants from "./containers/Restaurants";
import About from "./containers/About"
import RestaurantForm from "./components/RestaurantForm";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="restaurants" element={<Restaurants />} />
                <Route path="about" element={<About />} />
                <Route path="addRestaurant" element={<RestaurantForm />} />
                <Route path="*" element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
                />
            </Route>
        </Routes>
    </BrowserRouter>
);