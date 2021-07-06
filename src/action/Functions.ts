
import { ICustomer } from '../types'

export const filterResult = (name: string, customers?: ICustomer[]) => {
    const result = customers?.filter(x => x.role === name);
    return result
  }