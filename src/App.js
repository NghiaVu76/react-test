import styles from "./components/GlobalStyles/GlobalStyles.scss";
import Navbar from "./layouts/components/Navbar/Navbar";
import Sidebar from "./layouts/components/Sidebar/Sidebar";
import Main from "./layouts/Main/Main";

import classNames from "classnames/bind";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import ProductList from "./pages/CustomerList/CustomerList";
import Orders from "./pages/Orders/Orders";
import Login from "./pages/Auth/Login";
import { useEffect, useState } from "react";
import { AuthContext } from "./context";

const cx = classNames.bind(styles);
// import "rsuite/dist/styles/rsuite-default.css";

function App() {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("token");
    setAuth(isAuth);

    // return setAuth(!isAuth);
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ isAuth }}>
        {isAuth ? (
          <DefaultLayout>
            {/* <ProductList /> */}
            <Orders />
          </DefaultLayout>
        ) : (
          <Login />
        )}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
