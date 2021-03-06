import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductScreen from './screens/ProductScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import { signout } from './actions/userActions';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistroyScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';

function App() {

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin; 

    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    };

  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="row">
                <div>
                    <Link className="brand" to="/">SwooshTrade</Link>
                </div>
                <div>
            <Route render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
                <div>
                    <Link to="/cart">Cart
                    {cartItems.length > 0 && (
                        <span className='badge'>
                            {cartItems.length}
                        </span> 
                    )}
                        </Link>
                    {
                        userInfo ? (
                            <div className='dropdown'>
                            <Link to="#">{userInfo.name} <i className='fa fa-caret-down'>
                                </i>
                                </Link>
                                <ul className='dropdown-content'>
                                    <li>
                                        <Link to="/orderhistory">Order History</Link>
                                    </li>
                                    <li>
                                        <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                                    </li>
                                </ul>
                            </div>
                        ) : ( 
                        <Link to="/signin">Sign In</Link>
                        )
                    }
                   {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
                </div>
            </header>
            <main>
                <Route path="/cart/:id?" component={CartScreen}></Route>
                <Route path="/product/:id" component={ProductScreen}></Route>
                <Route path="/signin" component={SigninScreen}></Route>
                <Route path="/register" component={RegisterScreen}></Route>
                <Route path="/shipping" component={ShippingAddressScreen}></Route>
                <Route path="/payment" component={PaymentMethodScreen}></Route>
                <Route path="/placeOrder" component={PlaceOrderScreen}></Route>
                <Route path="/order/:id" component={OrderScreen}></Route>
                <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
                <AdminRoute path="/productlist" component={ProductListScreen}></AdminRoute>
                <AdminRoute path="/orderlist" component={OrderListScreen}></AdminRoute>
                <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
                <Route path="/search/name/:name?" component={SearchScreen} exact></Route>
                <Route path="/" component={HomeScreen} exact></Route>
            </main>
            <footer className="row center">All rights reserved
            </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
