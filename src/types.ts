export type GetCustomerQuery = {
    listZellerCustomers:{
        items: ICustomer[]
    }
  }

export type ICustomer = {
    email: string
    id: string
    name: string
    role: string
  }