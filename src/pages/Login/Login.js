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
import { Fragment, useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { LoginPage, LoginFormStyle } from "./style";
import { LoginUserAPI } from "../../Axios APIs/User APIs/Userapis";
import axios from "axios";

//functional component
const Login = (props) => {
  //states
  const [ipAddress, setIpAddress] = useState(null);
  const history = useHistory();
  const requestLoginAPI = async (email, password) => {
    await LoginUserAPI(email, password, ipAddress)
      .then((value) => {
        if (value) {
          Toast("Successfully Logged In", "success");
          // console.log(value.user);
          localStorage.setItem("userDetails", JSON.stringify(value.user));
          localStorage.setItem("token", value.token);
          localStorage.setItem("user", "user");

          document.cookie = "user";

          history.push("/invoice-management");
        }
      })
      .catch((err) => {
        Toast(err.title, "error");
        console.log(err);
      });
  };

  //getting the IP address of the user
  useEffect(async () => {
    const res = await axios.get("https://geolocation-db.com/json/");

    setIpAddress(res.data.IPv4);
  }, []);
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
                  <div className="text-center">
                    <Link to="/">
                      <Icon name="logo" width={150} height={150} />
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
