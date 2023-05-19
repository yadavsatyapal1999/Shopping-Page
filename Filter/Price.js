

export default function Price({ price, Setprice }) {

    return <div id="price">
        <h4>Price</h4>
        <input type="checkbox" id="100" onChange={e => {
            if
                (e.target.checked) {
                Setprice(100)
            } else {
                Setprice(null)
            }
        }} />
        <label htmlFor="100">less than 100</label>
        <br />
        <input type="checkbox" id="200" onChange={e => {
            if
                (e.target.checked) {
                Setprice(200)
            } else {
                Setprice(null)
            }
        }} />
        <label htmlFor="200">100-200</label>
        <br />
        <input type="checkbox" id="300" onChange={e => {
            if
                (e.target.checked) {
                Setprice(300)
            } else {
                Setprice(null)
            }
        }} />
        <label htmlFor="300">200-300</label>
        <br />
        <input type="checkbox" id="400" onChange={e => {
            if
                (e.target.checked) {
                Setprice(400)
            } else {
                Setprice(null)
            }
        }} />
        <label htmlFor="400">300-400</label>
    </div>
}