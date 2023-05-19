
import React from "react";
import { useState } from "react";

export default function Search({ search, Setsearch }) {

    const [type, Settype] = useState("")

    return <>
        <input type="text" placeholder="Type to search" id="search" onChange={(e) => {
            Settype(e.target.value)
        }} >

        </input>
        <button id="btn" type="button" onClick={() => {
            Setsearch(type)
        }}>
            Search
        </button>

    </>
}