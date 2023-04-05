import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {
    const [urlParam, setUrlParam] = useState()
    const {productId, productIdTwo, productIdThree} = useParams()

    useEffect(()=>{
        if(productId){
            console.log(productId)
            setUrlParam(productId)
            return
        }
    },[productId])

    useEffect(()=>{
        if(productIdTwo){
            console.log(productIdTwo)
            setUrlParam(productIdTwo)
            return
        }
    },[productIdTwo])

    useEffect(()=>{
        if(productIdThree){
            console.log(productIdThree);
            setUrlParam(productIdThree)
            return
        }
    },[productIdThree])




    

    return(
        <div>
            <h1>{urlParam}</h1>
        </div>
    )
}

export default ItemDetailContainer