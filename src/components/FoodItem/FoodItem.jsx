import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => {
   
    const {cartitem,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} className='food-item-image' alt="" />
        {
            !cartitem[id]?
            <div className='add'>
            <img src={assets.add_icon_white} alt="" className='add-img' onClick={()=>addToCart(id)} />
            </div>
            :
            <div className='food-item-counter'>
                <img src={assets.remove_icon_red} alt="" onClick={()=>removeFromCart(id)}/>
                <p>{cartitem[id]}</p>
                <img src={assets.add_icon_green} alt="" onClick={()=>addToCart(id)}/>
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">
            {description}
        </p>
        <p className="food-item-price">Rs: {price}</p>
      </div>
    </div>
  )
}

export default FoodItem
