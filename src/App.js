import GetData from "./component/getData";
import Show from "./component/show";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <GetData />
        </Route>
        <Route path="/list" exact>
          <Show />
        </Route>
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
