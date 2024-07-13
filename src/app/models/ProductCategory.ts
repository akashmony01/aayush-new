
import {Product} from "./Product";

export class ProductCategory {
    productCategoryId:number;
    productCategoryName:string;
    adminId:number;
    createdBy:string;
    createdDate:string;
    updatedDate:string;
    updatedBy:string;
    active:boolean;
    products: Product[];
    expanded: boolean;
    isEdited: boolean;
    spinner: boolean;
    prodSpinner: boolean;

    constructor(categoryName, userId, username) {
        this.productCategoryName = categoryName;
        this.adminId = userId;
        this.createdBy = username;
        this.updatedBy = username;
        this.active = true;
        this.spinner = false;
        this.prodSpinner = false;
    }
}

