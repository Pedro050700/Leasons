import React from 'react';
import { NavLink } from 'react-router-dom';

import { Perfil, Logo, Info, Title, Pagraph } from './styles';

import history from '~/services/history';

function Navbar() {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('@licoes-aprendidas'));
    setUser({ ...auth.user });
  }, []);

  const logout = event => {
    event.preventDefault();

    localStorage.removeItem('@licoes-aprendidas');
    history.push('/');
  };

  return (
    <div className="fixed-nav">
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-light"
        id="mainNav"
      >
        <a
          className="navbar-brand jq-dropdown-open"
          href="/#"
          data-jq-dropdown="#jq-dropdown-1"
        >
          <img
            className="pr-3 float-left"
            srcSet="assets/img/logo-icon@2x.png 2x"
            src="../assets/img/logo2.png"
            alt="logo"
            height="42px"
          />
          <div className="gestao">
            <p>Gestão do Conhecimento Ds Tecnologia</p>
          </div>
        </a>

        <div
          id="jq-dropdown-1"
          className="jq-dropdown"
          styles="left: 16px; top: 56.2333px; display: block;"
        >
          <div className="b-mega-menu" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <a
          href="/#"
          className="nav-link right_side_toggle responsive-right-side-toggle"
        >
          <i className="icon-options-vertical" />
        </a>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav left-side-nav" id="accordion">
            <Perfil>
              <Logo>
                <img
                  className="rounded-circle"
                  src="../assets/img/avatar/avatar1.jpg"
                  alt="avatar"
                />
              </Logo>
              <Info>
                <Title>{user.nome}</Title>
                <Pagraph>{user.cargo}</Pagraph>
               
              </Info>
            </Perfil>
            <div style={{ 'padding-left': '15px', 'font-weight':'bolder' }}>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Dashboard">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Licoes">
                  Lições
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Categorias">
                  Categorias
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Templates">
                  Templates
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Perfil">
                  Perfil
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  onClick={event => {
                    logout(event);
                  }}
                  className="nav-link"
                >
                  Sair
                </a>
              </li>
            </div>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title=""
              data-original-title="Layouts"
            >
              <ul
                className="sidenav-second-level collapse"
                id="layouts"
                data-parent="#accordion"
              >
                <li>
                  <a href="layout-top-nav.html">Top Nav </a>
                </li>
                <li>
                  <a href="layout-dark-nav.html">Dark Left Nav</a>
                </li>
                <li>
                  <a href="blank-page.html">Light Left Nav</a>
                </li>
                <li>
                  <a href="layout-default-collapsed.html">
                    Nav Collapsed Light
                  </a>
                </li>
                <li>
                  <a href="layout-dark-nav-collapsed.html">
                    Nav Collapsed Dark
                  </a>
                </li>
                <li>
                  <a href="layout-floating-leftside-dark.html">
                    Floating Nav Dark
                  </a>
                </li>
                <li>
                  <a href="layout-floating-leftside-dark-collapsed.html">
                    Floating Collapsed Dark
                  </a>
                </li>
                <li>
                  <a href="layout-floating-leftside-light.html">
                    Floating Nav Light
                  </a>
                </li>
                <li>
                  <a href="layout-floating-leftside-light-collapsed.html">
                    Floating Collapsed Light
                  </a>
                </li>
              </ul>
            </li>

            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title=""
              data-original-title="Menu Levels"
            >
              <ul
                className="sidenav-second-level collapse"
                id="multi_menu"
                data-parent="#accordion"
              >
                <li>
                  <a href="/#">Second Level Item</a>
                </li>
                <li>
                  <a href="/#">Second Level Item</a>
                </li>
                <li>
                  <a href="/#">Second Level Item</a>
                </li>
                <li>
                  <a
                    className="nav-link nav-link-collapse collapsed"
                    data-toggle="collapse"
                    data-target="#multi_menu_2"
                    href="#/"
                  >
                    Third Level
                  </a>
                  <ul
                    className="sidenav-third-level collapse"
                    id="multi_menu_2"
                  >
                    <li>
                      <a href="/#">Third Level Item</a>
                    </li>
                    <li>
                      <a href="/#">Third Level Item</a>
                    </li>
                    <li>
                      <a href="/#">Third Level Item</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="navbar-nav sidenav-toggler">
            <li className="nav-item">
              <a
                className="nav-link text-center"
                id="left-nav-toggler"
                href="#/"
              >
                <i className="fa fa-angle-left" />
              </a>
            </li>
          </ul>

          <ul className="navbar-nav header-links">
            <li className="nav-item dropdown">
              <div className="dropdown-menu" aria-labelledby="actionNav">
                <a className="dropdown-item" href="/#">
                  Bootstrap 4 Stable
                </a>
                <a className="dropdown-item" href="/#">
                  DashLab Modern Admin
                </a>
                <a className="dropdown-item" href="/#">
                  Awesome Widgets Collection
                </a>
                <a className="dropdown-item" href="/#">
                  Developer Friendly Code
                </a>
                <a className="dropdown-item" href="/#">
                  SASS and GULP Task
                </a>
                <a className="dropdown-item" href="/#">
                  Fully Responsive
                </a>
                <a className="dropdown-item" href="/#">
                  Latest Version Plugins
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown-menu" aria-labelledby="reportNav">
                <a className="dropdown-item" href="/#">
                  Daily Reports
                </a>
                <a className="dropdown-item" href="/#">
                  Weekly Reports
                </a>
                <a className="dropdown-item" href="/#">
                  Monthly Reports
                </a>
                <a className="dropdown-item" href="/#">
                  Yearly Reports
                </a>
                <a className="dropdown-item" href="/#">
                  HR Reports
                </a>
                <a className="dropdown-item" href="/#">
                  Product Reports
                </a>
                <a className="dropdown-item" href="/#">
                  Order Reports
                </a>
                <a className="dropdown-item" href="/#">
                  Revenue Reports
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown-menu" aria-labelledby="orderNav">
                <a className="dropdown-item" href="/#">
                  HR Management
                </a>
                <a className="dropdown-item" href="/#">
                  Product Management
                </a>
                <a className="dropdown-item" href="/#">
                  Role Management
                </a>
                <a className="dropdown-item" href="/#">
                  Sales Management
                </a>
                <a className="dropdown-item" href="/#">
                  Employee Management
                </a>
              </div>
            </li>
          </ul>

          <ul className="navbar-nav header-links ml-auto hide-arrow">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle mr-lg-3"
                id="messagesDropdown"
                href="/#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="d-lg-none">
                  Messages
                  <span className="badge badge-pill badge-primary">9 New</span>
                </span>
                <div className="notification-alarm" />
              </a>

              <div
                className="dropdown-menu dropdown-menu-right header-right-dropdown-width pb-0"
                aria-labelledby="messagesDropdown"
              >
                <h6 className="dropdown-header weight500">Messages</h6>
                <div className="dropdown-divider mb-0" />
                <a className="dropdown-item border-bottom msg-unread" href="/#">
                  <div className="float-left notificaton-thumb">
                    <img
                      className="rounded-circle"
                      src="assets/img/avatar/avatar4.jpg"
                      alt=""
                    />
                  </div>
                  <span className="weight500">Andrew Flinton</span>
                  <span className="small float-right text-muted">08:30 AM</span>

                  <div className="dropdown-message">
                    I hope that you will be there in time. See you then
                  </div>
                </a>

                <a className="dropdown-item border-bottom msg-unread" href="/#">
                  <div className="float-left notificaton-thumb">
                    <img
                      className="rounded-circle"
                      src="assets/img/avatar/avatar2.jpg"
                      alt=""
                    />
                  </div>
                  <span className="weight500">John Doe</span>
                  <span className="small float-right text-muted">10:28 AM</span>

                  <div className="dropdown-message">
                    Hello this is an example message. Just want to show how it
                    looks
                  </div>
                </a>

                <a className="dropdown-item border-bottom" href="/#">
                  <div className="float-left notificaton-thumb">
                    <img
                      className="rounded-circle"
                      src="assets/img/avatar/avatar3.jpg"
                      alt=""
                    />
                  </div>
                  <span className="weight500">Dash Don</span>
                  <span className="small float-right text-muted">07:12 PM</span>

                  <div className="dropdown-message">
                    Hi, This is Dash Don form usa. I'm looking for someone who
                    really good at design and frontend like mosaddek
                  </div>
                </a>

                <a className="dropdown-item border-bottom" href="/#">
                  <div className="float-left notificaton-thumb">
                    <img
                      className="rounded-circle"
                      src="assets/img/avatar/avatar1.jpg"
                      alt=""
                    />
                  </div>
                  <span className="weight500">dkmosa</span>
                  <span className="small float-right text-muted">12:10 PM</span>

                  <div className="dropdown-message">
                    We build a beautiful dashboard admin panel for professional
                  </div>
                </a>
                <a className="dropdown-item small" href="/#">
                  View all messages
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle mr-lg-3"
                id="alertsDropdown"
                href="/#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="vl_bell" />
                <span className="d-lg-none">
                  Notification
                  <span className="badge badge-pill badge-warning">5 New</span>
                </span>
                <div className="notification-alarm" />
              </a>

              <div
                className="dropdown-menu dropdown-menu-right header-right-dropdown-width pb-0"
                aria-labelledby="alertsDropdown"
              >
                <h6 className="dropdown-header weight500">Notification</h6>

                <div className="dropdown-divider mb-0" />
                <a className="dropdown-item border-bottom" href="/#">
                  <span className="text-primary">
                    <span className="weight500">
                      <i className="vl_bell weight600 pr-2" />
                      Weekly Update
                    </span>
                  </span>
                  <span className="small float-right text-muted">03:14 AM</span>

                  <div className="dropdown-message f12">
                    This week project update report generated. All team members
                    are requested to check the updates
                  </div>
                </a>

                <a className="dropdown-item border-bottom" href="/#">
                  <span className="text-danger">
                    <span className="weight500">
                      <i className="vl_Download-circle weight600 pr-2" />
                      Server Error
                    </span>
                  </span>
                  <span className="small float-right text-muted">10:34 AM</span>

                  <div className="dropdown-message f12">
                    Unexpectedly server response stop. Responsible members are
                    requested to fix it soon
                  </div>
                </a>

                <a className="dropdown-item border-bottom" href="/#">
                  <span className="text-success">
                    <span className="weight500">
                      <i className="vl_screen weight600 pr-2" />
                      Monthly Meeting
                    </span>
                  </span>
                  <span className="small float-right text-muted">12:30 AM</span>

                  <div className="dropdown-message f12">
                    Our monthly meeting will be held on tomorrow sharp 12:30.
                    All members are requested to attend this meeting.
                  </div>
                </a>

                <a className="dropdown-item small" href="/#">
                  View all notification
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle mr-lg-3"
                id="userNav"
                href="/#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="user-thumb" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="userNav"
              >
                <a className="dropdown-item" href="/#">
                  My Profile
                </a>
                <a className="dropdown-item" href="/#">
                  Account Settings
                </a>
                <a className="dropdown-item" href="/#">
                  Inbox <span className="badge badge-primary">3</span>
                </a>
                <a className="dropdown-item" href="/#">
                  Message <span className="badge badge-success">5</span>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/signin">
                  Sign Out
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link right_side_toggle">
                <i className="icon-options-vertical"> </i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
