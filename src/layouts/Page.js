import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {HomePage} from '../pages/HomePage';
import {AdminPage} from '../pages/AdminPage';
import {ProductListPage} from '../pages/ProductListPage';
import {ProductsPage} from '../pages/ProductsPage';
import {ContactPage} from '../pages/ContactPage';
import {LoginPage} from '../pages/LoginPage';
import {ErrorPage} from '../pages/ErrorPage';

export const Page = () => {
  return ( 
    <>    
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" component={ProductListPage} />
        <Route path="/product/:id" component={ProductsPage} />
        <Route path="/contacts" component={ContactPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={ErrorPage} />
        
      </Switch>
    </>

   );
}
 
// export default Page;