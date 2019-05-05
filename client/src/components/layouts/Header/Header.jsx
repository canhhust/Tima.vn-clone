/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Header.scss';
import Logo from '../../../image/core-img/logo.png';
import Placeholder from '../../../image/core-img/placeholder.png';
import Message from '../../../image/core-img/message.png';
import Call2 from '../../../image/core-img/call2.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Header extends Component {
  render() {
    return (
      <header className="header-area">
        <div className="top-header-area">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 d-flex justify-content-between">
                <div className="logo">
                  <a href="index.html" />
                </div>

                <div className="top-contact-info d-flex align-items-center">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="25 th Street Avenue, Los Angeles, CA"
                  >
                    <img src={Placeholder} alt="" />{' '}
                    <span>17th, Trần Đại Nghĩa, Hà Nội</span>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="office@yourfirm.com"
                  >
                    <img src={Message} alt="" />{' '}
                    <span>vudat1710@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="credit-main-menu" id="sticker">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              <nav
                className="classy-navbar justify-content-between"
                id="creditNav"
              >
                <div className="classy-navbar-toggler">
                  <span className="navbarToggler">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>

                <div className="classy-menu">
                  <div className="classycloseIcon">
                    <div className="cross-wrap">
                      <span className="top" />
                      <span className="bottom" />
                    </div>
                  </div>

                  <div className="classynav">
                    <ul>
                      <li>
                        <a href="index.html">TRANG CHỦ</a>
                      </li>
                      <li>
                        <a href="about.html">VỀ CHÚNG TÔI</a>
                      </li>
                      <li>
                        <a href="services.html">DỊCH VỤ</a>
                      </li>
                      <li>
                        <a href="post.html">TIN TỨC</a>
                      </li>
                      <li>
                        <a href="contact.html">LIÊN HỆ</a>
                      </li>
                      <li>
                        <a href="">ĐĂNG NHẬP</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="contact">
                  <a href="#">
                    <img src={Call2} alt="" /> +84 241 264 798
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
