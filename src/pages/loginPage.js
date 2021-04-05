
import React,{Component} from "react";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import "../style/loginPage.css";


export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    // let loggedIn = false;
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    //Defined State
    this.state = {
      username: "",
      password: "",
      loggedIn,
    };
    // data binding
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  //Calling events
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  }

  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;
    //login logic
    if (username === "admin" && password === "admin") {
      this.setState({
        loggedIn: true,
      });
      // console.log('success');
    }
  }

  render() {
    //redirect on the dashboard after login
    if (this.state.loggedIn) {
      return <Redirect to="/admin-panel/dashboard/" />;
    }

    return (
      <div className="main">
        <div className="panel">
          <div className="panel__form-wrapper">
            <ul className="panel__headers">
              <span href="#login-form" className=" panel__link" role="button">
                Login
              </span>
            </ul>
            <div className="panel__forms">
              {/*================================= Login Form ============================== */}
              <form
                className="form panel__login-form"
                onSubmit={this.submitForm}
              >
                <div className="form__row">
                  <input
                    type="text"
                    id="username"
                    className="form__input"
                    name="username"
                    valu={this.state.username}
                    onChange={this.onChange}
                    required
                  />
                  <span className="form__bar" />
                  <label htmlFor="email" className="form__label">
                    Username
                  </label>
                  <span className="form__error" />
                </div>
                <div className="form__row">
                  <input
                    type="password"
                    id="password"
                    className="form__input"
                    name="password"
                    valu={this.state.password}
                    onChange={this.onChange}
                    required
                  />
                  <span className="form__bar" />
                  <label htmlFor="password" className="form__label">
                    Password
                  </label>
                  <span className="form__error" />
                </div>
                <div className="form__row">
                  <Button
                    type="submit"
                    className="form__submit"
                    defaultValue="Get Started!"
                    variant="contained"
                    color="secondary"
                  >
                    Start
                  </Button>
                  <span
                    href="#password-form"
                    className="form__retrieve-pass"
                    role="button"
                  >
                    Forgot Password?
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}