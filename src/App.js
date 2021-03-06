import { SignInPage } from "./pages/SignInPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./components/header";

function PrivateRoute({ children, ...rest }) {
  let auth = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={({ location }) => (auth ? children : <Redirect to="/" />)}
    />
  );
}

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <PrivateRoute exact path="/profile">
          <ProfilePage />
        </PrivateRoute>

        <Route exact path="/">
          <SignInPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
