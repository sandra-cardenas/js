import { useEffect } from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useGetProducts } from '../hooks/useProducts'

export const Home = () => {
    useEffect(()=>{
        document.title='Bienvenido a mi tienda'

    })
    const{productsData }  = useGetProducts(30)
  return (
    <ItemListContainer productsData={productsData} />
  )
}
 