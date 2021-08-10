import { SignInPage } from "./pages/SignInPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SignInPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
