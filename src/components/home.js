import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { getCategories } from "./service/serviceCategory";
import { getRecipes } from "./service/serviceRecipe"



export default function Home() {
    const dispatch = useDispatch()
    dispatch(getRecipes())
    dispatch(getCategories())
    return (
        <div className="home">
            <h2 style={{ color: "white", position: "relative", fontSize: "100px", fontStyle: "italic" }}>  Welcome!</h2>

        </div>)
}