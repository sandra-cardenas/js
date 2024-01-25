import { useEffect } from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useGetProducts } from '../hooks/useProducts'

export const Home = () => {
    useEffect(()=>{
        document.title='Bienvenido a mi tienda'

    })
    const{productsData }  = useGetProducts('products');
   

  return  <ItemListContainer productsData={productsData} />
  
}
 