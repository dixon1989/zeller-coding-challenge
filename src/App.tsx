import React from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsconfig from './aws-exports';
import logo from './logo.svg';
import './App.css';
import { ListZellerCustomers } from './graphql/queries'
import { GetCustomerQuery } from './types'


function App() {

  Amplify.configure(awsconfig);

  const [ customers, setCustomers ] = React.useState();

  React.useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const customersData = await API.graphql(graphqlOperation(ListZellerCustomers)) as {
          data: GetCustomerQuery
        }
        const customers = customersData.data.listZellerCustomers.items
        console.log("customers", customers)
      } catch (err) {
        console.log('error fetching actors') }
      }

      fetchCustomers()
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
