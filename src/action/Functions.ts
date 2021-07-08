import { ICustomer } from "../types";

// Filtering function to find out user is Admin or Manager
export const filterResult = (name: string, customers?: ICustomer[]) => {
  const result = customers?.filter((x) => x.role === name);
  return result;
};
