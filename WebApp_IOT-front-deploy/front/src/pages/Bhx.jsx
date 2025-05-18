
import React from 'react';
import "./Bhx.scss";

const THX_page = () => {
  return (
    <div className="app">
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
            <a href="#">Giỏ hàng</a>
            <a href="#">Tài khoản</a>
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

      {/* Hero Carousel */}
      <section className="hero">
        <div className="hero__slides">
          {/* Slides go here */}
        </div>
        <div className="hero__controls">
          {/* Dots */}
        </div>
      </section>

{/* Flash Sale Section */}
<section className="section section--flash-sale">
  <h2 className="section__title">FLASH SALE</h2>
  <div className="products">
    {[
      {
        name: 'Táo gala nhập khẩu túi lớn 4 trái',
        image: 'rockit.jpg',
        price: '44.000đ',
        originalPrice: '50.000đ',
        discount: '-12%'
      },
      {
        name: 'Cá nục làm sạch',
        image: 'canuclamsach.jpg',
        price: '22.500đ',
        originalPrice: '28.000đ',
        discount: '-20%'
      },
      {
        name: 'Rau muống nước 400g',
        image: 'veggie.jpg',
        price: '5.000đ',
        originalPrice: '10.000đ',
        discount: '-50%'
      },
      {
        name: 'Chân giò heo C.P',
        image: 'pork.jpg',
        price: '31.500đ',
        originalPrice: '37.000đ',
        discount: '-15%'
      },
      {
        name: 'Chuối già giống Nam Mỹ',
        image: 'banana.jpg',
        price: '42.000đ',
        originalPrice: '60.000đ',
        discount: '-30%'
      }
    ].map((product, i) => (
      <div className="product" key={i}>
        <div className="product__badge">{product.discount}</div>
        <div className="product__image" style={{backgroundImage: `url(${product.image})`}} />
        <div className="product__info">
          <div className="product__name">{product.name}</div>
          <div className="product__price">
            <span className="current-price">{product.price}</span>
            <span className="original-price">{product.originalPrice}</span>
          </div>
        </div>
        <button className="product__buy">MUA</button>
      </div>
    ))}
  </div>
</section>

{/* Best Sellers */}
<section className="section section--bestsellers">
  <h2 className="section__title">SẢN PHẨM BÁN CHẠY</h2>
  <div className="products">
    {[
      {
        name: 'Thùng 24 lon bia Blanc 1664 330ml',
        image: 'beer.jpg',
        price: '441.000đ',
      },
      {
        name: 'Thùng 30 gói mì Hảo Hảo 75g',
        image: 'noodles.jpg',
        price: '118.000đ',
      },
      {
        name: 'Chả giò rế thịt Vissan 500g',
        image: 'springrolls.jpg',
        price: '63.000đ',
      },
      {
        name: 'Dầu đậu nành Simply 2 lít',
        image: 'oil.jpg',
        price: '120.000đ',
      },
      {
        name: 'Thùng 12 hộp sữa tươi 100% không đường',
        image: 'milk.jpg',
        price: '380.000đ',
      }
    ].map((product, i) => (
      <div className="product" key={i}>
        <div className="product__image" style={{backgroundImage: `url(${product.image})`}} />
        <div className="product__info">
          <div className="product__name">{product.name}</div>
          <div className="product__price">
            <span className="current-price">{product.price}</span>
          </div>
        </div>
        <button className="product__buy">MUA</button>
      </div>
    ))}
  </div>
</section>

        {/* Promotions */}
        <section className="section section--promos">
        <div className="promo">
            <div className="promo__content">
            <h3>Ưu đãi thành viên</h3>
            <p>Đăng ký thành viên ngay hôm nay để nhận nhiều ưu đãi hấp dẫn</p>
            <button>Đăng ký ngay</button>
            </div>
            <div className="promo__image"></div>
        </div>
        <div className="promo">
            <div className="promo__content">
            <h3>Giao hàng miễn phí</h3>
            <p>Miễn phí giao hàng cho đơn hàng từ 300.000đ trong phạm vi 5km</p>
            <button>Mua sắm ngay</button>
            </div>
            <div className="promo__image"></div>
        </div>
        </section>

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
    </div>
  );
}

export default THX_page;