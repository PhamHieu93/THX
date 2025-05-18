import React, { useState } from 'react';
import "./Product.scss";

const THX_page = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');
  
  // Sample product data to match the image
  const productDetail = {
    name: "Chân giò heo C.P",
    price: 31500,
    unit: "kg",
    discount: true,
    originalPrice: 37000,
    image: "/images/chan_gio_heo.jpg", // Use absolute path and consistent folder    description: "Thịt heo tươi ngon, đảm bảo vệ sinh an toàn thực phẩm",
    origin: "Việt Nam",
    storage: "Tủ lạnh ở nhiệt độ 0-4 độ C",
    shelfLife: "3 ngày kể từ ngày sản xuất"
  };
  
  // Sample related products
  const relatedProducts = [
    { id: 1, name: "Bánh canh giò heo", image: "/images/banhcanhgioheo.jpeg", price: 45000 },
    { id: 2, name: "Giò heo chiên giòn", image: "/images/gioheochiengion.jpg", price: 65000 },
    { id: 3, name: "Canh giò heo đu đủ", image: "/images/gioheodudu.jpg", price: 55000 },
    { id: 4, name: "Chân giò kho tàu", image: "/images/changiokhotau.jpg", price: 60000 },
    { id: 5, name: "Giò heo nấu măng", image: "/images/gioheonaumang.jpg", price: 70000 },  ];

  // Sample recommended products to match image
  const recommendedProducts = [
    { id: 1, name: "Cà rốt", price: 35000, originalPrice: 39000, image: "/images/carot.jpg" },
    { id: 2, name: "Khoai tây", price: 25000, originalPrice: 28000, image: "/images/khoaitay.jpg" },
    { id: 3, name: "Cà rốt (Hàn)", price: 20000, originalPrice: 22000, image: "/images/cucaitrang.jpg" },
  ];

  // Additional products shown at bottom of image
  const moreProducts = [
    { id: 1, name: "Chân giò heo nhập khẩu Đức", price: 31500, originalPrice: 37000, unit: "1kg", image: "/images/chan_gio_heo.jpg" },
    { id: 2, name: "Củ cải trắng", price: 6250, originalPrice: 7500, unit: "500g", image: "/images/cucaitrang.jpg" },
    { id: 3, name: "Thịt heo xay C.P", price: 34500, originalPrice: 38000, unit: "300g", image: "/images/thitxay.jpg" },
    { id: 4, name: "Hành tây", price: 39000, originalPrice: 42000, unit: "2kg", image: "/images/hanhtay.jpg" },
  ];

  // Format price with commas
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  return (
    <div className="app">
      {/* Header */}

      {/* Main content */}
      <main className="main">
        {/* Product Detail */}
            <section className="product-detail">
            <div className="product-detail__container">
                {/* Left column with image and specs */}
                <div className="product-detail__left-column">
                {/* Product image */}
                    <div className="product-detail__image-container">
                        <img src={productDetail.image} alt={productDetail.name} className="product-detail__image" />
                    </div>
                
                {/* Product specs - BELOW the image */}
                    <section className="product-specs">
                        <div className="product-specs__container">
                        <div className="product-specs__item">
                            <h4 className="product-specs__title">Nơi sản xuất</h4>
                            <p>{productDetail.origin}</p>
                        </div>
                        <div className="product-specs__item">
                            <h4 className="product-specs__title">Hạn sử dụng</h4>
                            <p>{productDetail.shelfLife}</p>
                        </div>
                        <div className="product-specs__item">
                            <h4 className="product-specs__title">Bảo quản</h4>
                            <p>{productDetail.storage}</p>
                        </div>
                        </div>
                    </section>
                </div>
            
            {/* Product info */}
            <div className="product-detail__info">
              <h1 className="product-detail__title">{productDetail.name}</h1>
              <div className="product-detail__price-container">
                <span className="product-detail__price">{formatPrice(productDetail.price)}đ</span>
                <span className="product-detail__unit">/{productDetail.unit}</span>
                {productDetail.discount && (
                  <span className="product-detail__original-price">{formatPrice(productDetail.originalPrice)}đ</span>
                )}
              </div>
              
              {/* Flash sale button */}
              <button className="flash-sale-button">FLASH SALE</button>
              
              {/* Buy button */}
              <button className="buy-button">MUA</button>

              {/* Delivery options */}
              <div className="delivery-options">
                <div className="delivery-options__buttons">

                </div>
              </div>

              {/* Product benefits */}
              <div className="product-benefits">
                <h3 className="product-benefits__title">Ưu đãi đặc biệt khi mua kèm</h3>
                
                {/* Recommended products */}
                <div className="recommended-products">
                  {recommendedProducts.map(product => (
                    <div className="recommended-product" key={product.id}>
                      <div className="recommended-product__image-container">
                        <img src={product.image} alt={product.name} className="recommended-product__image" />
                      </div>
                      <div className="recommended-product__info">
                        <p className="recommended-product__name">{product.name}</p>
                        <p className="recommended-product__price">{formatPrice(product.price)}đ</p>
                        {product.originalPrice && (
                          <span className="recommended-product__original-price">{formatPrice(product.originalPrice)}đ</span>
                        )}
                      </div>
                      <button className="recommended-product__buy">MUA</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat notification */}
              <div className="chat-notification">
                <p>Nếu tồn kho có thay đổi Tạp Hóa Xanh sẽ liên hệ trước khi giao hàng</p>
              </div>

                    {/* Product specifications */}

            </div>
          </div>
        </section>

        {/* Related recipes section */}
        <section className="related-recipes">
          <h2 className="section-title">Món ăn gợi ý</h2>
          <div className="related-recipes__container">
            {relatedProducts.map(product => (
              <div className="recipe-card" key={product.id}>
                
                <div className="recipe-card__image-container">
                
                  <img src={product.image} alt={product.name} className="recipe-card__image" />
                </div>
                <h3 className="recipe-card__title">{product.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* More products section */}
        <section className="more-products">
          <div className="products-grid">
            {moreProducts.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-card__image-container">
                  <img src={product.image} alt={product.name} className="product-card__image" />
                </div>
                <div className="product-card__info">
                  <h3 className="product-card__title">{product.name}</h3>
                  <div className="product-card__price-container">
                    <span className="product-card__price">{formatPrice(product.price)}đ</span>
                    <span className="product-card__unit">/{product.unit}</span>
                    {product.originalPrice && (
                      <span className="product-card__original-price">{formatPrice(product.originalPrice)}đ</span>
                    )}
                  </div>
                  <button className="product-card__buy-button">MUA</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__columns">
          <div className="footer__column">
            <h4>Tạp Hóa Xanh</h4>
            <p>Sứ mệnh mang đến sự tươi ngon cho mọi gia đình</p>
            <div className="social-icons">
              {/* Social icons */}
            </div>
          </div>
          <div className="footer__column">
            <h4>Thông tin</h4>
            <ul>
              <li>Giới thiệu</li>
              <li>Chính sách sử dụng</li>
              <li>Chính sách bảo mật</li>
              <li>Tin tức</li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Hỗ trợ khách hàng</h4>
            <ul>
              <li>Hướng dẫn</li>
              <li>Chính sách đổi trả</li>
              <li>Chính sách thanh toán</li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Liên hệ</h4>
            <p>123 Đường ABC, Quận XYZ, TP. HCM</p>
            <p>1900 1234</p>
            <p>support@taphoaxanh.com</p>
          </div>
        </div>
        <div className="footer__bottom">© 2025 Tạp Hóa Xanh. Tất cả quyền được bảo lưu.</div>
      </footer>
    </div>
  );
}

export default THX_page;