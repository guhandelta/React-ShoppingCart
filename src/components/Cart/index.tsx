import CartContent from '../CartContent'
// Styles
import { Wrapper } from './Cart.styles'
// Types
import { CartItemType } from '../../App'

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

    return(
        <Wrapper>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? <p>Empty Cart</p> : null}
            {cartItems.map(item => (
                <CartContent 
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
        </Wrapper>
    )
}

export default Cart;