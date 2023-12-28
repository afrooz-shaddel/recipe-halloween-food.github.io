function SearchItem(product , search){
    if(!search){
        return product
    }
let product2=product.filter(item=>item.title.toLowerCase().includes(search))
return product2
}

function CategoriesItem1(data , categoryItem){
    if(!categoryItem ||categoryItem==="all"){
        return data
    }
    
    let data1=data.filter(item=>item.type.toLowerCase()===categoryItem)
    return data1
}


export {
    SearchItem  , CategoriesItem1
}