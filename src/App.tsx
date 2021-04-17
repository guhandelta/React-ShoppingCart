import { useState } from 'react'
import { useQuery } from 'react-query'
// Components
import { CartItem } from './components'
// Material Components
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core'
// Icons
import { AddShoppingCart } from '@material-ui/icons'
// Styles
import { Wrapper } from './App.styles'
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
  const { data, isLoading, error } = useQuery<CartItemType[]>(
      'products', // Query key => String, can be named to whatever 
      getProducts // Fetching function 
    );

    const getTotalItems = () => null;

    const handleAddToCart = (clickedItem: CartItemType) => null;

    const handleRemoveFromCart = () => null;

    if(isLoading) return <LinearProgress />
    if(isLoading) return <div className="">Something Went Wrong!!</div>

  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return <Wrapper>
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
