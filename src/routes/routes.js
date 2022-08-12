import routesConfig from "~/configs/routes";
import AddProduct from "../pages/AddProduct/AddProduct";
import Home from "../pages/Home/Home";
import ProductList from "../pages/CustomerList/CustomerList";
import CustomerList from "../pages/CustomerList/CustomerList";
import Carts from "../pages/Orders/Orders";

//Public routes
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.product_list, component: ProductList },
  { path: routesConfig.add_product, component: AddProduct },
  { path: routesConfig.customer_list, component: CustomerList },
  { path: routesConfig.cart, component: Carts },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
