import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatar from "../utils/gravatar";
import { logoutRequest } from "../actions";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import { object } from "prop-types";

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      {/* Se evidencia un parpadeo en la página
    <a href="/"><img className="header__img" src={logo} alt="Platzi Video" /></a> */}
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="User Icon" />
          )}

          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">{user.name}</a>
            </li>
          ) : null}
          {hasUser ? (
            <li>
              <a href="#Logout" onClick={handleLogout}>
                Cerrar sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
