import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'


export default function Cart() {
    let newprod = useSelector((state) => state.cartProduct.prod);
    useEffect(()=>{
        console.log(newprod)
    },[]);
  return (
    newprod === undefined ? ( <div>...Loading</div>) :(
    <div className="ui grid container">
      {newprod.map((product) =>{
          const { id, title, image, price, category, description } = product;
          console.log(id)
          return (
            <div className="ui placeholder segment" key = {id}>
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  </div>
                  </div>
                </div>
            </div>
          )
      })}
    </div>
    )
  )
}
