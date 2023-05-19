


export default function Content({ data }) {


  return <span id="content">{data.map((item) => {
    return < div className="content">
      <img  id="img" src={item.image} alt={item.name} />
      <p>{item.name} </p>
      <p>{item.categorey} </p>
      <p id="star">*****</p>
      <p ><span id="actualprice">{item.price}</span> <del id="delprice">{item.prevprice} </del> <span id="discount">{item.discount}</span> </p>

    </div>
  })}
  </span>
}