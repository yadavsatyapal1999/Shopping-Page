
import Brand from "./Brand";
import Categorary from "./Categorey";
import Price from "./Price";

export default function Filter({ brand, Setbrand, price, Setprice, categorey, Setcategorey, resetfilter, Setresetfilter }) {

    return <aside id="filter">
        <Brand brand={brand} Setbrand={Setbrand} />
        <Categorary categorey={categorey} Setcategorey={Setcategorey} />
        <Price price={price} Setprice={Setprice} />

    </aside>
}