export class Product {
    productId:number;
    productName:string;
    productDescription?:string;
    adminId:number;
    active: boolean;
    price:number;
    amount:number=0;
    cartId:number;
    cartItemId:number;
    isActive:Boolean; // this is to determine CartItem is active or not
    
    totalPrice:number;
    discount:number;
    tax:number;
    paidAmount:number;
    balanceAmount:number;
    productCategoryId: number;
    createdBy:string;
    createdDate:string;
    updatedDate:string;
    updatedBy:string;

    spinner: boolean;

    constructor(productName?, categoryId?, product_desc?, adminId?, price?, userName?,amount?) {
        this.productName = productName;
        this.productCategoryId = categoryId;
        this.active = true;
        this.productDescription = product_desc;
        this.adminId = adminId;
        this.price = price;
        this.createdBy = userName;
        this.updatedBy = userName;
        this.amount=amount;
                    }

}

