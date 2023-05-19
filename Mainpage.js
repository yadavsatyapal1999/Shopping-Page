import React from "react";
import Filter from "./Filter/Filter";
import Header from "./Header/Header";
import Sort from "./Sort By/Sort";
import { useState } from "react";
import "./filter.css";
import { useEffect } from "react";
import Content from "./Content/Content";

const json = require('./data.json')

export default function MainPage() {
    const [data, Setdata] = useState(json.user)
    const [brand, Setbrand] = useState("");
    const [price, Setprice] = useState(null);
    const [categorey, Setcategorey] = useState("")
    const [search, Setsearch] = useState("")
    const [sort, Setsort] = useState("")
    console.log(brand)

    useEffect(() => {

        let arr = data
        if (search !== "") {
            arr = arr.filter(item => item.name === search)
        } else {
            if (brand !== "") {
                arr = data
                console.log(arr)
                arr = arr.filter(item => item.brand === brand)
                console.log(arr)
            } else {
                arr = data;
            }

            if (categorey !== "") {
                arr = arr.filter(item => item.categorey === categorey)

            }
            if (price !== null) {
                if (price === 100) {
                    arr = arr.filter(item => item.price <= price)
                } else if (price === 200) {
                    arr = arr.filter(item => item.price <= 200 && item.price > 100)
                } else if (price === 300) {
                    arr = arr.filter(item => item.price <= 300 && item.price > 200)
                } else if (price === 400) {
                    arr = arr.filter(item => item.price <= 400 && item.price > 300)
                }
            }
        }
        if (sort !== "") {
            if (sort === "high") {
                const numDescending = [...arr].sort((a, b) => b.price - a.price);
                arr = numDescending
            }
            else {
                const numAscending = [...arr].sort((a, b) => a.price - b.price);
                arr = numAscending;
            }

        }
        Setdata(arr)
    }, [brand, price, categorey, search, sort])



    return <div>
        <Header search={search} Setsearch={Setsearch} />
        <div id="cont">
            <aside><Filter
                brand={brand} Setbrand={Setbrand}
                price={price} Setprice={Setprice}
                categorey={categorey} Setcategorey={Setcategorey}
            />
            </aside>
            <section>
                <Sort Setsort={Setsort} />
                <Content data={data} />
            </section>
        </div>

    </div>
}