import React from 'react';
// import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import "./header_sidebar.scss";


const HeaderSidebar = ({ children }) => {
  return (
    <div className="page-layout">
      {/* Header */}
      <header className="header">
        <div className="header__top">
          <div className="left-group">
            <span>Tải ứng dụng</span>
            <span>Liên hệ: 1900 1234</span>
          </div>
        </div>
        <div className="header__main">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold', fontSize: '24px' }}>
              TẠP HÓA XANH
            </Link>          
            <div className="header__search">
            <input type="text" placeholder="Tìm kiếm sản phẩm..." />
            <button>🔍</button>
          </div>
          <nav className="header__nav">
            <Link to="/giohang" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>Giỏ hàng
            </Link>
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}> Tài khoản</Link> 
          </nav>
        </div>
        <ul className="header__menu"> 
          {[
            {
              name: 'Thực phẩm tươi sống',
              submenu: ['Thịt cá trứng, hải sản', 'Thực phẩm đông mát']
            },
            {
              name: 'Rau củ & trái cây',
              submenu: ['Rau, củ, nấm, trái cây']
            },
            {
              name: 'Thực phẩm khô & tiện lợi',
              submenu: ['Gạo, bột, đồ khô', 'Mì, miến, cháo, phở', 'Bánh kẹo các loại']
            },
            {
              name: 'Gia vị & đồ khô',
              submenu: ['Dầu ăn, nước chấm, gia vị']
            },
            {
              name: 'Sản phẩm từ sữa',
              submenu: ['Sữa các loại', 'Kem, sữa chua']
            },
            {
              name: 'Đồ uống',
              submenu: ['Bia, nước giải khát']
            },
            {
              name: 'Khác',
              submenu: ['Sản phẩm cho mẹ & bé', 'Chăm sóc cá nhân', 'Vệ sinh nhà cửa', 'Đồ dùng gia đình']
            }
          ].map(category => (
            <li key={category.name} className="menu-item">
              <a href="#">{category.name}</a>
              <ul className="dropdown-menu">
                {category.submenu.map(subItem => (
                  <li key={subItem}>
                    <a href="#">{subItem}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </header>

      {/* Main content */}
      <main>
        {children}
      </main>

    </div>
  );
};

export default HeaderSidebar;