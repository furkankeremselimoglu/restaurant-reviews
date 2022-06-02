import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";
import ReviewList from "./components/ReviewList";
import { uuid } from "uuidv4";

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
                <Link to="/addgame">Add Game</Link> |{" "}
                <Link to="/addpublisher">Add Publisher</Link> |{" "}
                <Link to="/contact">Contact</Link> |{" "}
                <Link to="/about">About Us</Link> |{" "}
            </nav>
            <Outlet />
        </div>
    );
}

export default App;