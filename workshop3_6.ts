type Category ="Electronics"|"Clothing"|"Food";
interface Product{
    readonly id: number;
    name:string;
    category: Category;
    price: number;
}
let products:Product[]=[
    {id:1,name:"Labtop",category:"Electronics",price:20000},
    {id:2,name:"T-shirt",category:"Clothing",price:299},
    {id:3,name:"Apple",category:"Food",price:20}
]
function filterCat(category:Category):Product[]{
    let catList =[];
    for(let i=0; i<products.length;i++){
        if(products[i].category===category)
            catList.push(products[i]);
    }
    return catList;
}
console.log(filterCat("Clothing"));