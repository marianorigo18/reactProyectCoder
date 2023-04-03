import { useState, useEffect } from "react"
import { getCategories } from "../../asyncMocks"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCategories()
        .then(response => {
            setProducts(response)
        })
        .catch(err =>{
            console.log(err)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    },[])

    if(isLoading){
        return <h1>cargando...</h1>
    }
    return(
        <div>
            <h1>Hello world from ItemListContainer</h1>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {products.map((prod) => {
                    return(
                        prod.categorias.map((prod2, index)=>{
                            return(
                                <div key={index} style={{border: "1px solid black"}}>
                                    <h1>{prod2.title}</h1>
                                    <img src={prod2.img} alt={prod2.title} width={100}></img>
                                </div>
                            )
                        })
                    )
                })}
            </div>
        </div>
    )
}
export default ItemListContainer