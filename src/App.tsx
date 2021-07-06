import React from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsconfig from './aws-exports';
import './App.css';
import { ListZellerCustomers } from './graphql/queries'
import { GetCustomerQuery, ICustomer } from './types'
import { filterResult } from './action/Functions'
import { Container, Radio } from "./components";

function App() {

  Amplify.configure(awsconfig);

  const [ customers, setCustomers ] = React.useState<ICustomer[]>();
  const [ name, setName ] = React.useState('Admin');
  const [ filterCustomer, setFilterCustomer ] = React.useState<ICustomer[]>();

  const userRole = [
    'Admin',
    'Manager'
  ]

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

      fetchCustomers()
      setFilterCustomer(filterResult(name, customers))
  }, [customers, name])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setName(value)
  };

  return (
    <Container>
      <form>
        <h2>User Types</h2>
          {userRole.map((r: string) => (
            <Radio name={r} checked={name} handleChange={handleChange} />
          ))}
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
    </Container>
  );
}

export default App;
