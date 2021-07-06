import React from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsconfig from './aws-exports';
import logo from './logo.svg';
import './App.css';
import { ListZellerCustomers } from './graphql/queries'
import { GetCustomerQuery, ICustomer } from './types'


function App() {

  Amplify.configure(awsconfig);

  const [ customers, setCustomers ] = React.useState<ICustomer[]>();
  const [ name, setName ] = React.useState('Admin');
  const [ filterCustomer, setFilterCustomer ] = React.useState<ICustomer[]>();

  React.useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const customersData = await API.graphql(graphqlOperation(ListZellerCustomers)) as {
          data: GetCustomerQuery
        }
        const customers = customersData.data.listZellerCustomers.items
        setCustomers(customers)
      } catch (err) {
        console.log('error fetching customers') }
      }
      const filterResult = (name: string) => {
          const result = customers?.filter(x => x.role === name);
          setFilterCustomer(result)
        }
      
      fetchCustomers()
      filterResult(name)
}, [customers, name])

const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  const { value } = e.target;
  setName(value)
};

  return (
    <div className="App">
      <form>
        <h2>User Types</h2>
              <label>
                <input
                  type="radio"
                  value="Admin"
                  checked={name === "Admin"}
                  onChange={handleChange}
                  />
                    <span>Admin</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Manager"
                  checked={name === "Manager"}
                  onChange={handleChange}
                  />
                    <span>Manager</span>
              </label>
        </form>
        <h2>{name} Users</h2>
        <div>
          {
            filterCustomer?.map(k => (
              <div key={k.id}>
                <p>{k.email}</p>
                <p>{k.name}</p>
                <p>{k.role}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default App;
