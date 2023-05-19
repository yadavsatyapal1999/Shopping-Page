

export default function Categorary({ categorey, Setcategorey }) {

    return <div id="categorey">
        <h4>Categories</h4>
        <input type="checkbox" id="decoration" onChange={e => {
            if (e.target.checked) {
                Setcategorey("Decoration")
            } else {
                Setcategorey("")
            }
        }} />
        <label htmlFor="decoration">Decoration</label>
        <br />
        <input type="checkbox" id="acess" onChange={e => {
            if (e.target.checked) {
                Setcategorey("Acessories")
            } else {
                Setcategorey("")
            }
        }} />
        <label htmlFor="acess">Acessories</label>
        <br />
        <input type="checkbox" id="applience" onChange={e => {
            if (e.target.checked) {
                Setcategorey("Home Appliance")
            } else {
                Setcategorey("")
            }
        }} />
        <label htmlFor="applience">Home Appliance</label>
        <br />
        <input type="checkbox" id="clothes" onChange={e => {
            if (e.target.checked) {
                Setcategorey("Clothes")
            } else {
                Setcategorey("")
            }
        }} />
        <label htmlFor="clothes">Clothes</label>
    </div>
}