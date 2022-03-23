import { Switch, Route } from "react-router-dom";

import { routes } from "routes";
import { Drawer, Modal } from "components";

const App = () => {
  return (
    <>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
      <Drawer />
      <Modal />
    </>
  );
};

export default App;
