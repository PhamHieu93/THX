
import React from 'react';
import { Link } from 'react-router-dom'; 
import Layout from './layout';
import "./Bhx.scss";

const THX_page = () => {
  return ( 
    <Layout> 
    <div className="app"> 

      {/* Hero Carousel */}
<section className="hero">
  <div className="hero__slides">
    <img
      src="/images/quangcaone.jpg"
      alt="Hero"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "16px" // Adjust to match your green rectangle's radius
      }}
    />
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
        image: '/images/rockit.jpg',
        price: '44.000đ',
        originalPrice: '50.000đ',
        discount: '-12%'
      },
      {
        name: 'Cá nục làm sạch',
        image: '/images/canuclamsach.jpg',
        price: '22.500đ',
        originalPrice: '28.000đ',
        discount: '-20%'
      },
      {
        name: 'Rau muống nước 400g',
        image: '/images/raumuongnuoc.jpg', 
        price: '5.000đ',
        originalPrice: '10.000đ',
        discount: '-50%'
      },
      {
        name: 'Chân giò heo C.P',
        image: '/images/changioheo.jpg',
        price: '31.500đ',
        originalPrice: '37.000đ',
        discount: '-15%'
      },
      {
        name: 'Chuối già giống Nam Mỹ',
        image: '/images/chuoi.jpg',
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
        {product.name === 'Chân giò heo C.P' ? (
          <Link to="/Product" className="product__buy">MUA</Link>
        ) : (
          <button className="product__buy">MUA</button>
        )}
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
        image: '/images/thungbiablanc.jpg',
        price: '441.000đ',
      },
      {
        name: 'Thùng 30 gói mì Hảo Hảo 75g',
        image: '/images/mihaohao.jpg',
        price: '118.000đ',
      },
      {
        name: 'Chả giò rế thịt Vissan 500g',
        image: '/images/chagiore.jpg',
        price: '63.000đ',
      },
      {
        name: 'Dầu đậu nành Simply 2l',
        image: '/images/daunanhsimply.jpg',
        price: '120.000đ',
      },
      {
        name: 'Thùng 12 hộp sữa tươi 100% không đường',
        image: '/images/thungsuavinamilk.jpg',
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
            
            <div className="diamond-star-container">
              <div className="diamond">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <polygon
                    points="40,15 47,33 66,33 51,45 57,63 40,53 23,63 29,45 14,33 33,33"
                    fill="#ffeb3b"
                    stroke="#ffeb3b"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
        </div>

        <div className="promo">
            <div className="promo__content">
            <h3>Giao hàng miễn phí</h3>
            <p>Miễn phí giao hàng cho đơn hàng từ 300.000đ trong phạm vi 5km</p>
            <button>Mua sắm ngay</button>
            </div>
            <div className="truck-star-container">
      <div className="truck">
        <svg width="80" height="66" viewBox="0 0 80 66">
  <g stroke="#ffe600" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
    {/* Truck body */}
    <rect x="8" y="18" width="40" height="28" rx="2" />
    {/* Cabin */}
    <polyline points="48,30 72,30 72,46 48,46" />
    {/* Wheels */}
    <circle cx="20" cy="50" r="6" fill="#ffe600" />
    <circle cx="60" cy="50" r="6" fill="#ffe600" />
    {/* Speed lines */}
    <line x1="12" y1="26" x2="32" y2="26" />
    <line x1="12" y1="32" x2="28" y2="32" />
    <line x1="12" y1="38" x2="24" y2="38" />
          </g>
        </svg>
      </div>
    </div>
  </div>
        </section>

      <div className="feedback-bar">
  <input
    className="feedback-bar__input"
    type="text"
    placeholder="Phản hồi với chúng tôi"
  />
</div>
 
    </div>
    </Layout>
  );
}

export default THX_page;