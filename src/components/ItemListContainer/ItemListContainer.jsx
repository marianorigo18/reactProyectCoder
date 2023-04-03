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
                    {products.map((product)=>{
                        return (
                            product.categorias.map((product2, index)=>{
                                return(
                                    <div key={index}>
                                        <h2>{product2.title}</h2>
                                        <img src={product2.img} alt={product2.title} width={100}></img>
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