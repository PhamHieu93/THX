import React from 'react';
// import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import "./layout.scss";

// // ChatWidget component
// const ChatWidget = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div>
//       {/* Chat Icon */}
//       <div
//         className="chat-icon"
//         onClick={() => setOpen((prev) => !prev)}
//         aria-label="Open chat"
//       >
//         <svg width="28" height="28" viewBox="0 0 24 24" fill="#2196f3">
//           <path d="M2 21l1.65-4.77A8.94 8.94 0 0 1 2 9a9 9 0 1 1 9 9c-1.61 0-3.13-.38-4.47-1.08L2 21z"/>
//         </svg>
//       </div>
//       {/* Chat Box */}
//       {open && (
//         <div className="chatbox">
//           <div>
//             TẠP HÓA XANH
//           </div>
//           <div>
//             <div className="chat-message">
//               Xin chào tôi giúp gì được cho bạn!
//             </div>
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Nhập..."
//             />
//             <button>&gt;</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

const Layout = ({ children }) => {
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
          <h1 className="header__logo">TẠP HÓA XANH</h1>
          <div className="header__search">
            <input type="text" placeholder="Tìm kiếm sản phẩm..." />
            <button>🔍</button>
          </div>
          <nav className="header__nav">
            <Link to="/giohang">Giỏ hàng</Link>
            <Link to="/login">Tài khoản</Link> 
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

      {/* Footer */}
      <footer className="footer">
        <div className="footer__columns">
          <div className="footer__column">
            <h4>Tạp Hóa Xanh</h4>
            <p>Siêu thị mini, mang đến sự tiện lợi cho mọi gia đình</p>
            <div className="social-icons">
              <a href="#" className="social-icon facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon youtube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="social-icon tiktok">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="social-icon instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon threads">
                <i className="fab fa-threads"></i>
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
      <ChatWidget />
    </div>
  );
};

export default Layout;