


export default function Sort({ Setsort }) {

    return <div id="sortby">
        <select onChange={e => {
            Setsort(e.target.value)
        }}>

            <option
                value={""}
            >
                Sort By Price
            </option>
            <option
                value={"high"}
            >High To Low
            </option>
            <option
                value={"low"}
            >
                Low To High
            </option>
        </select>

    </div>
}