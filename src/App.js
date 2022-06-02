import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
    return (
        <div>
            <h1>Restaurant Reviews</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/restaurants">Restaurants</Link> |{" "}
                <Link to="/about">About Us</Link> |{" "}
                <Link to="/addRestaurant">Add Restaurant</Link>
            </nav>
            <Outlet />
        </div>
    );
}