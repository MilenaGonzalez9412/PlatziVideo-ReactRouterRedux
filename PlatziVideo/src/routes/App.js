import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import NotFound from "../containers/NotFound";
import Layout from "../components/Layout";

const App = () => (
  //Se encapsulan todos los componentes que se necesitan para poder trabajar con rutas
  //Con switch se garantiza que solo se muestre, en la ruta específica, el componente espeficicado.
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
