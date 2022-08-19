import { customer } from "../models/customer";

export class CustomerService{
    customers:customer[];

    constructor(){
        this.customers = [
            new  customer(101,"Tim",21,"./assets/images/Pizza1.jpg"),
            new  customer(102,"Jim",25,"./assets/images/Pizza2.jpg")
        ]
    }
    getCustomers(){
        return this.customers;
    }
    addCustomer(customer:customer)
    {
        this.customers.push(customer);
        console.log(this.customers);
    }
}