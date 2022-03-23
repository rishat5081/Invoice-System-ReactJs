import {
  Input,
  NavigationBar,
  Select,
  SubmitButton,
  LoginForm,
  Icon,
} from "components";
import { useFormWithYup } from "hooks";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Fragment } from "react";
import { Controller } from "react-hook-form";

const Login = (props) => {
  return (
    <>
      <div className="d-flex bd-highlight ">
        <div className="p-2 flex-fill bd-highlight bg-secondary"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 p-0 bg-secondary">
              <div className="jumbotron min-vh-100 text-center m-0 d-flex flex-column justify-content-center">
                <h1 className="display-5 m-4">Invoice System</h1>
              </div>
            </div>
            <div className="col-6 p-0 border border">
              <div className="jumbotron min-vh-100 p-4 m-0 d-flex flex-column justify-content-center">
                <div className="m-5 text-center">
                  <Link to="/">
                    <Icon name="logo" width={125} height={20} />
                  </Link>
                </div>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
