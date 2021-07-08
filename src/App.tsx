import React from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
import "./App.css";
import { ListZellerCustomers } from "./graphql/queries";
import { GetCustomerQuery, ICustomer } from "./types";
import { filterResult } from "./action/Functions";
import { Container, Radio, User, useWindowSize } from "./components";

function App() {
  // Config to run GraphQL Data
  Amplify.configure(awsconfig);

  const [customers, setCustomers] = React.useState<ICustomer[]>();
  const [name, setName] = React.useState("Admin");
  const [filterCustomer, setFilterCustomer] = React.useState<ICustomer[]>();
  let [winWidth] = useWindowSize();

  // This is to determine if the Radio Button is selected.
  const userRole = ["Admin", "Manager"];

  // Mount Data and Callback Function
  React.useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const customersData = (await API.graphql(
          graphqlOperation(ListZellerCustomers)
        )) as {
          data: GetCustomerQuery;
        };
        const customers = customersData.data.listZellerCustomers.items;
        setCustomers(customers);
      } catch (err) {
        console.log("error fetching customers");
      }
    };

    fetchCustomers();
    setFilterCustomer(filterResult(name, customers));
  }, [customers, name]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setName(value);
  };

  return (
    <Container width={winWidth}>
      <form>
        <h2>User Types</h2>
        {userRole.map((user: string) => (
          <Radio name={user} checked={name} handleChange={handleChange} />
        ))}
      </form>
      <hr />
      <h2>{name} Users</h2>
      <div>
        {filterCustomer?.map((customer) => (
          <User id={customer.id} name={customer.name} role={customer.role} />
        ))}
      </div>
      <hr />
    </Container>
  );
}

export default App;
