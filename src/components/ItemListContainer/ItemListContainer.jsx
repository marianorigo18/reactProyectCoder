import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCategories, filterCategoriesFirstLevel} from "../../asyncMocks"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        const asynFunction = categoryId ? filterCategoriesFirstLevel : getCategories

        asynFunction(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(err =>{
            console.log(err)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    },[categoryId])

    if(isLoading){
        return <h1>cargando...</h1>
    }
    return(
        <div>
            <h1>Hello world from ItemListContainer</h1>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    {products.map((product, index)=>{
                        return (
                            <div key={index}>
                            <h2>{product.title}</h2>
                            <img src={product.img} alt={product.title} width={100}></img>
                            <button>ver detalle</button>
                        </div>
                        )  
                    })}
                </div>
        </div>
    )
}
export default ItemListContainer