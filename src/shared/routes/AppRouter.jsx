import React from "react";
import App from "../../components/App";
// Components
import Error404 from "../components/Erro404";
import Header from "../components/Header";
import Login from "../../components/Login";
import About from "../../components/About";
import Home from "../../components/Home";
// ! Protected
import Projects from "../../components/private/Projects";
// Routes
import { Switch, Route } from "react-router-dom";
// Helper
import { logout } from "../../helpers/Auth";
// * styles
import { Layout, Row, Col } from "antd";
import { ThemeProvider } from 'react-jss'
import theme from '../theme/v1'

const AppRouter = () => {
  return (
    <App>
      <ThemeProvider theme={theme}>
      <Row>
        <Col span={4}>
          <Header />
        </Col>
        <Col span={20}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route component={Error404} />
          </Switch>
        </Col>
      </Row>
      </ThemeProvider>
    </App>
  );
};

export default AppRouter;
