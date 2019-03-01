import React, { Suspense } from "react";
// Components
import Loading from '../components/Loading'
import Error404 from "../components/Erro404";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../../components/Login";
import About from "../../components/About";
import Home from "../../components/Home";
// ! Protected
// import Projects from "../../components/private/Projects";
// Routes
import { Switch, Route } from "react-router-dom";
// Helper y Auxiliares
// import { logout } from "../../helpers/Auth";
// Redux
import { Provider } from "react-redux";
import store from "../redux/configureStore";
// * styles
import { ThemeProvider } from "react-jss";
import theme from "../theme/v1";

const AppRouter = () => {
  const App = React.lazy(() => import("../../components/App"));

  return (
    <Provider store={store({ authed: false })}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading/>}>
          <App>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/about" component={About} exact />
              <Route component={Error404} />
            </Switch>
            <Footer />
          </App>
        </Suspense>
      </ThemeProvider>
    </Provider>
  );
};
export default AppRouter;
