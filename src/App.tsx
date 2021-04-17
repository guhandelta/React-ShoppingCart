import { useState } from 'react'
import { useQuery } from 'react-query'
// Components
import { CartItem, Cart } from './components'
// Material Components
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core'
// Icons
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
// Styles
import { Wrapper, StyledButton } from './App.styles'
// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image : string;
  price: number;
  title : string;
  amount: number;
};


const getProducts = async (): Promise<CartItemType[]> => await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {

  // omponent State
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]); // [] -> initial val, it is of the type CartItemType[]

  // Fetch the product info using ReactQuery
  const { data, isLoading, error } = useQuery<CartItemType[]>(
      'products', // Query key => String, can be named to whatever 
      getProducts // Fetching function 
    );

    const getTotalItems = (items: CartItemType[]) => items.reduce((acc: number, item) => acc+item.amount, 0)

    const handleAddToCart = (clickedItem: CartItemType) => {
      setCartItems(prev => {
        // Check if item already exists in the cart
        const itemAlreadyExists = prev.find(item => item.id === clickedItem.id); // Returns true or false
        if(itemAlreadyExists){
          return prev.map(item => 
            item.id === clickedItem.id ?
              { item, amount: item.amount + 1 } // Return an object with amount + 1, if the iteam id matches
            : // else
              item // Return the item as it is
          );
        }
        // Item is added to the cart for the first time
        return [...prev, { ...clickedItem, amount: 1 }];
      })
    };

    const handleRemoveFromCart = () => null;

    if(isLoading) return <LinearProgress />
    if(isLoading) return <div className="">Something Went Wrong!!</div>
    

  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return <Wrapper>
    <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
      <Cart 
        cartItems={cartItems} 
        addToCart={handleAddToCart}
        removeFromCart={handleRemoveFromCart}
      />
    </Drawer>
    <StyledButton onClick={() => setCartOpen(true)}> 
      <Badge badgeContent={getTotalItems(cartItems)} color='error'>
        <AddShoppingCartIcon />
      </Badge>
    </StyledButton>
    <Grid container spacing={3}>
      {data?.map(item => (
        <Grid item key={item.id} xs={12} sm={4}>
          <CartItem item={item} handleAddToCart={handleAddToCart} />
        </Grid>
      ))}
    </Grid>
  </Wrapper>
}


export default App;
