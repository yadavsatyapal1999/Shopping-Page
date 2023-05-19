


export default function Brand({ brand, Setbrand }) {



    return <div id="brand">
        <h4>Brand</h4>
        <input type="checkbox" id="A" onChange={(e) => {
            if (e.target.checked) {
                Setbrand("A")
            } else {
                Setbrand("")
            }

        }} />
        <label htmlFor="A">A</label>
        <br />
        <input type="checkbox" id="B" onChange={(e) => {
            if (e.target.checked) {
                Setbrand("B")
            } else {
                Setbrand("")
            }

        }} />
        <label htmlFor="B">B</label>
        <br />
        <input type="checkbox" id="C" onChange={(e) => {
            if (e.target.checked) {
                Setbrand("C")
            } else {
                Setbrand("")
            }

        }} />
        <label htmlFor="C">C</label>
        <br />
        <input type="checkbox" id="D" onChange={(e) => {
            if (e.target.checked) {
                Setbrand("D")
            } else {
                Setbrand("")
            }

        }} />
        <label htmlFor="D">D</label>
    </div>
}