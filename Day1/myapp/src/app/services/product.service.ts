import { Product } from "../models/product";

export class ProductService{
    products:Product[];
    constructor(){
        this.products=[
            new  Product(101,"Cheeze Pizza",200,5,"./assets/images/Pizza1.jpg"),
            new  Product(102,"Veg Extravenzza",450,3,"./assets/images/Pizza2.jpg")
        ]
    }
    getProducts():Product[]{
        return this.products;
    }
    getProductById(id:number)
    {
        for (let index = 0; index < this.products.length; index++) {
           if(this.products[index].id==id)
            {
                return this.products[index];
            }
        }
        return undefined;
    }
    editProduct(newProduct:Product){
        var product = this.getProductById(newProduct.id??0)
        if(product != undefined){
            product.name = newProduct.name;
            product.quantity = newProduct.quantity;
            product.price = newProduct.price;
            product.pic = newProduct.pic;
        }
    }
}