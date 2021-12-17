import React, {useState} from 'react'
import './CartItem.css'
import CancelIcon from '@mui/icons-material/Cancel';
import { deleteProductFromCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { addPrice } from '../redux/PriceTotalSlice';


const CartItem = ({id , img , price ,productName , onDelete }) => {
    // const [value , setValue] = useState(1)
  

    const dispatch = useDispatch();
    const [value , setValue] = useState(1)

   
      const subTotal = value * parseInt(price)

          dispatch(addPrice({
            total : subTotal
        }))

      const onChange = (e) => {
        setValue(e.target.value)

    }


    const deleteFromCart = () => {
        dispatch(deleteProductFromCart({id : id}))
    }


    return (
        < >
        <tr data-aos="flip-up" className='cart__row'>
        <td>
            <div className='cart__info'>
                <img src={img}/>

                <p>{productName}</p>
            </ div>
        </td>

        <td>
            ${price}
        </td>

        <td>
        <input type="number" min='1' onChange={onChange} value={value}  />
        </td>

        <td>
            ${subTotal}
        </td>

     <td>
         <CancelIcon onClick={() => onDelete(id)} />
     </td>

    </tr>

    </>


     
    )
}

export default CartItem
