import React from 'react';
// import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import "./footer_sidebar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faYoutube,
    faFacebookF,
    faTiktok,
    faInstagram,
    faThreads,
} from '@fortawesome/free-brands-svg-icons';
import 'react-toastify/dist/ReactToastify.css';



const FooterSidebar = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__columns">
          <div className="footer__column">
            <h4>Tạp Hóa Xanh</h4>
            <p>Siêu thị mini, mang đến sự tiện lợi cho mọi gia đình</p>
            <div className="social-icons">
              <a href="#" className="social-icon facebook">
                <FontAwesomeIcon icon={faFacebookF} color="blue"/>
              </a>
              <a href="#" className="social-icon youtube">
                <FontAwesomeIcon icon={faYoutube} color="red" />
              </a>
              <a href="#" className="social-icon tiktok">
                <FontAwesomeIcon icon={faTiktok} color="black"/>
              </a>
              <a href="#" className="social-icon instagram">
                <FontAwesomeIcon icon={faInstagram} color="black"/>
              </a>
              <a href="#" className="social-icon threads">
                <FontAwesomeIcon icon={faThreads} color="black"/>
              </a>
            </div>
          </div>
          <div className="footer__column">
            <h4>Thông tin</h4>
            <ul>
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Điều khoản sử dụng</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Tin tức</a></li>
              <li><a href="#">Liên hệ</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Hỗ trợ khách hàng</h4>
            <ul>
              <li><a href="#">Trung tâm trợ giúp</a></li>
              <li><a href="#">Chính sách giao hàng</a></li>
              <li><a href="#">Chính sách đổi trả</a></li>
              <li><a href="#">Hướng dẫn mua hàng</a></li>
              <li><a href="#">Phương thức thanh toán</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Liên hệ</h4>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>1900 1234</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>info@taphoaxanh.vn</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">© 2025 Tạp Hóa Xanh. Tất cả quyền được bảo lưu.</div>
      </footer>
      {/* <ChatWidget /> */}
      </>
  );
};

export default FooterSidebar;