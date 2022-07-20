import styles from "./components/GlobalStyles/GlobalStyles.scss";
import Navbar from "./layouts/Navbar/Navbar";
import Sidebar from "./layouts/Sidebar/Sidebar";
import Main from "./layouts/Main/Main";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);
// import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className={cx("homepage")}>
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
