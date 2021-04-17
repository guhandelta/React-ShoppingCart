import { Button } from '@material-ui/core'
// Types
import { CartItemType } from '../../App'
// Styles
import { Wrapper } from './CartContent.styles'

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const CartContent: React.FC<Props> = () => <div>Cart Item</div>;

export default CartContent