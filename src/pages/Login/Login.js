import {
  Input,
  NavigationBar,
  Select,
  SubmitButton,
  LoginForm,
  Icon,
  Toast,
} from "components";
import { useFormWithYup } from "hooks";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { LoginPage, LoginFormStyle } from "./style";
import LoginUserAPI from "../../Axios APIs/User APIs/Userapis";
const Login = (props) => {
  const history = useHistory();

  const requestLoginAPI = async (email, password) => {
    await LoginUserAPI(email, password)
      .then((value) => {
        if (value) {
          Toast("Successfully Logged In", "success");
          localStorage.setItem("userDetails", value.user);
          localStorage.setItem("token", value.token);
          history.push("/invoice-management");
        }
      })
      .catch((err) => {
        Toast(err.message, "success");
        console.log(err);
      });
  };

  return (
    <>
      <LoginPage className="d-flex bd-highlight">
        <div className="p-2 flex-fill bd-highlight"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 p-0">
              <div className="jumbotron min-vh-100 text-center m-0 d-flex flex-column justify-content-center"></div>
            </div>
            <div className="col-6 p-0">
              <div className="jumbotron min-vh-100 p-4 m-0 d-flex flex-column justify-content-center">
                <LoginFormStyle>
                  <div className="m-5 text-center">
                    <Link to="/">
                      <Icon name="logo" width={125} height={20} />
                    </Link>
                  </div>
                  <LoginForm handleLogin={requestLoginAPI} />
                </LoginFormStyle>
              </div>
            </div>
          </div>
        </div>
      </LoginPage>
    </>
  );
};

export default Login;
