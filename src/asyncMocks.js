import categorias from "./data/data.json"


export const getCategories = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve(categorias.categorias)
        },1000)
    })
}
export const filterCategoriesFirstLevel = (param) =>{
    const filtrado = categorias.categorias.filter(cat=> cat.title === param)
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(filtrado[0].categorias)
        },500)
    })
}