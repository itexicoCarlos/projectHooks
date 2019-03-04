import React, { Suspense } from "react";
// Components
import Loading from '../components/Loading'
import Error404 from "../components/Error404/";
import Footer from "../components/Footer";
import Header from "../components/Header";
// ! Protected
// import Projects from "../../components/private/Projects";
// Routes
import { Switch, Route } from "react-router-dom";
// Helper y Auxiliares
import { logout } from "../../helpers/Auth";
// Redux
import { Provider } from "react-redux";
import store from "../redux/configureStore";
// * styles
import { ThemeProvider } from "react-jss";
import theme from "../theme/v1";

const AppRouter = () => {
  const App = React.lazy(() => import("../../components/App"));
  const Home = React.lazy(() => import("../../components/Home"))
  const About = React.lazy(() => import("../../components/About"))
  const Login = React.lazy(() => import("../../components/Login"))
  return (
    <Provider store={store({ authed: false })}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading/>}>
          <App>
            <Header />
            <Switch>
              <Route path="/" render={() => <Home/>} exact />
              <Route path="/login" render={() => <Login/>} exact />
              <Route path="/about" render={() => <About/>} exact />
              <Route render={() => <Error404/>} />
            </Switch>
            <Footer />
          </App>
        </Suspense>
      </ThemeProvider>
    </Provider>
  );
};
export default AppRouter;
