import categorias from "./data/data.json"

export const getCategories = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve(categorias.categorias)
        },1000)
    })
}