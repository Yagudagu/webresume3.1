import * as React from "react";
//import { Switch, Route, Redirect } from "react-router-dom";

// Components
import { Home } from "./Components/Home";
import { GlobalStyle } from "./Components/GlobalStyle";
import { Art } from "./Components/Art";

function App() {
  return (
    <>
      <div>Fuck a duck</div>
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/art" component={Art} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
      <GlobalStyle /> */}
    </>
  );
}

export default App;
