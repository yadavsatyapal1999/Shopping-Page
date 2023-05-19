import React from "react"
import Search from "./Search"

export default function Header({ search, Setsearch }) {
    return <div id="head">

        <img src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/flipkart-64.png" alt="unable to load logo" id="logo-img" />

        <Search search={search} Setsearch={Setsearch} />



        <span id="cat">Categories</span>
        <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/78/bell-64.png" alt="notidication" id="notification" />
        <img src="https://freepngimg.com/download/tom_cruise/28840-3-tom-cruise-picture.png" alt="user" id="user" />
    </div>
}