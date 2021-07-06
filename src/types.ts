export type GetCustomerQuery = {
    listZellerCustomers:{
        items: ICustomer[]
    }
  }

  type ICustomer = {
    email: string
    id: string
    name: string
    role: string
  }