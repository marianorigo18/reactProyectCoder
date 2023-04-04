import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const {productId, productIdTwo, productIdThree} = useParams()
    
    if(productIdThree){
        console.log(productIdThree)
    }else if(productIdTwo){
        console.log(productIdTwo)
    }else{
        console.log(productId)
    }
    return(
        <div>
            <h1>Detail</h1>
        </div>
    )
}

export default ItemDetailContainer