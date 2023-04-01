import { useState, useEffect } from "react"
import { getCategories } from "../../asyncMocks"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getCategories()
        .then(response => {
            setProducts(response)
        })
    })
    console.log(products);
    return(
        <h1>Hello world from ItemListContainer</h1>
    )
}
export default ItemListContainer