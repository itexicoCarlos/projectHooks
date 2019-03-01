import React, {useState, useEffect} from "react";
import App from "../../components/App";
// Components
import Error404 from "../components/Erro404";
import Footer from '../components/Footer'
import Header from "../components/Header";
import Login from "../../components/Login";
import About from "../../components/About";
import Home from "../../components/Home";
// ! Protected
import Projects from "../../components/private/Projects";
// Routes
import { Switch, Route } from "react-router-dom";
// Helper y Auxiliares
import { logout } from "../../helpers/Auth";
// Redux
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import store from '../redux/configureStore'
// * styles
import { ThemeProvider} from "react-jss";
import theme from "../theme/v1";

const AppRouter = () => {
  const [loading, setLoading] = useState(true)

  return loading  === false
    ? (
      <Provider store={store({authed: false})}>
        <ThemeProvider theme={theme}>
          <App>
            <main>
              <h1>Loading..</h1>
            </main>
          </App>
        </ThemeProvider>
      </Provider>
      )
    : (
      <Provider store={store({authed: false})}>
        <ThemeProvider theme={theme}>
          <App>
            <Header/>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/about" component={About} exact />
                <Route component={Error404} />
              </Switch>
              <Footer/>
          </App>
        </ThemeProvider>
      </Provider>
    )
}
export default AppRouter
