import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search/Search";
import { Drawer, Icon } from "antd";
import "./Header.css";

class Header extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const guestLinks = (
      <div className="header__right">
        <Link
          to={{
            pathname: "/make_order",
            state: {
              fromSelectedCompany: false
            }
          }}
          className="link button-links__link--order"
        >
          Make order
        </Link>

        <Link to={"/signin"} className="link button-links__link--sign-in">
          Sign in
        </Link>
      </div>
    );
    const authLinks = (
      <div className="header__right auth">
        <Icon
          type="menu-fold"
          style={{ color: "#82b541", fontSize: "26px" }}
          onClick={this.showDrawer}
        />
        <Drawer
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>
            <Link
              to={{
                pathname: "/make_order",
                state: {
                  fromSelectedCompany: false
                }
              }}
              className="link button-links__link"
            >
              Make order
            </Link>
          </p>

          <p>
            <Link to={"/user/profile"} className="link button-links__link">
              My profile
            </Link>
          </p>

          <p>
            <Link
              to={"/"}
              onClick={this.onLogout}
              className="link button-links__link"
            >
              Sign out
            </Link>
          </p>
        </Drawer>
      </div>
    );
    return (
      <header className="header">
        <div className="header__content">
          <div className="header__left">
            <Link to="/" className="link header__heading">
              CleaningServices
            </Link>
            <div className="search">
              <Search />
            </div>
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </header>
    );
  }
}

export default Header;
