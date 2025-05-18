import React, { useState } from 'react';
import "./Giohang.scss";

const Giohang = () => {
  // Format price with commas
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };
  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Thịt đùi heo",
      price: 32700,
      originalPrice: 38000,
      unit: "100g",
      quantity: 2,
      image: "/images/thitduiheo.jpg",
      selected: true,
      discount: true,
      saleText: "SALE"
    },
    {
      id: 2,
      name: "Bắp cải tím",
      price: 10000,
      originalPrice: 12000,
      unit: "500g",
      quantity: 1,
      image: "/images/caitim.jpg",
      selected: true,
      discount: true,
      saleText: "SALE"
    },
    {
      id: 3,
      name: "Táo Rockit nhập khẩu New Zealand (ống 4 trái)",
      price: 140000,
      originalPrice: 159000,
      unit: "ống",
      quantity: 2,
      image: "/images/rockit.jpg",
      selected: true,
      discount: true,
      saleText: "SALE"
    }
  ]);
  
  const [previousOrders, setPreviousOrders] = useState([
    {
      id: 1,
      name: "Beefsteak bò Úc",
      price: 109000,
      quantity: 2,
      image: "/images/beefsteakbouc.jpg"
    },
    {
      id: 2,
      name: "Nấm kim châm Hàn Quốc 150g",
      price: 14500,
      quantity: 2,
      image: "/images/namkimchamhanquoc.jpg"
    },
    {
      id: 3,
      name: "Dầu đậu nành nguyên chất Simply can 2 lít",
      price: 119000,
      quantity: 1,
      image: "/images/daunanhsimply.jpg"
    }
  ]);

  const [sortOption, setSortOption] = useState('default');
  
  // Calculate totals
  const calculateSubtotal = () => {
    return cartItems
      .filter(item => item.selected)
      .reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const subtotal = calculateSubtotal();
  const shippingFee = 0; // Free shipping
  const total = subtotal + shippingFee;
  
  // Calculate previous orders total
  const previousOrdersTotal = previousOrders.reduce(
    (total, item) => total + (item.price * item.quantity), 0
  );
  
  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      setCartItems(cartItems.map(item => 
        item.id === id ? {...item, quantity: newQuantity} : item
      ));
    }
  };
  
  // Handle item selection
  const handleSelectItem = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, selected: !item.selected} : item
    ));
  };

  return (
    <div className="cart-page">
      {/* Header */}
      <header className="cart-header">
        <h1 className="cart-title">GIỎ HÀNG</h1>
        <div className="location">
          <i className="location-icon"></i>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Tìm kiếm sản phẩm..." className="search-input" />
          <button className="search-button">
            <i className="search-icon"></i>
          </button>
        </div>
      </header>

      <div className="cart-container">
  <div className="cart-main">
    {/* Cart tabs */}
    <table className="cart-table-header">
        <thead>
        <tr>
            <th className="san-pham-cell">Sản phẩm</th>
            <th className="don-gia-cell">Đơn giá</th>
            <th className="so-luong-cell">Số lượng</th>
            <th className="thanh-tien-cell">Thành tiền</th>
        </tr>
        </thead>
    </table>

          {/* Sort options */}
          <div className="sort-options">
            <span>Lọc theo</span>
            <div className="sort-dropdown">
              <select 
                value={sortOption} 
                onChange={(e) => setSortOption(e.target.value)}
                className="sort-select"
              >
                <option value="priceLow">Giá thấp</option>
                <option value="priceHigh">Giá cao</option>
              </select>
            </div>
          </div>

          {/* Current year */}
          <div className="year-label">Năm 2025</div>

          {/* Cart items */}
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="item-checkbox">
                  <input 
                    type="checkbox" 
                    checked={item.selected}
                    onChange={() => handleSelectItem(item.id)}
                  />
                </div>
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price-info">
                    <div className="item-price">
                      {formatPrice(item.price)} / {item.unit}
                    </div>
                    {item.discount && (
                      <div className="item-original-price">
                        {formatPrice(item.originalPrice)}
                      </div>
                    )}
                    {item.saleText && <div className="sale-tag">{item.saleText}</div>}
                  </div>
                </div>
                <div className="item-quantity">
                  <button 
                    className="quantity-btn minus"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <input 
                    type="text" 
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                    className="quantity-input"
                  />
                  <button 
                    className="quantity-btn plus"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="item-total">
                  {formatPrice(item.price * item.quantity)}đ
                </div>
              </div>
            ))}
          </div>

          {/* Previous orders section */}
          <div className="previous-orders">
            <div className="previous-orders-header">
              <h2>ĐƠN CŨ</h2>
              <i className="clock-icon"></i>
            </div>
            
            <div className="sort-options">
              <span>Lọc theo</span>
              <div className="sort-dropdown">
                <select className="sort-select">
                  <option>Mới nhất</option>
                  <option>Cũ nhất</option>
                </select>
              </div>
            </div>
            
            {/* Current year for previous orders */}
            <div className="year-label">Năm 2025</div>
            
            {/* Previous orders items */}
            <div className="previous-orders-container">
              {previousOrders.map(item => (
                <div className="previous-order-item" key={item.id}>
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <div className="item-name">{item.name}</div>
                    <div className="item-quantity">x{item.quantity}</div>
                  </div>
                  <div className="item-price">{formatPrice(item.price)}đ</div>
                </div>
              ))}
              
              <div className="previous-orders-total">
                <div className="total-label">Thành tiền:</div>
                <div className="total-amount">{formatPrice(previousOrdersTotal)}đ</div>
              </div>
              
              <button className="buy-again-button">Mua lại</button>
            </div>
          </div>
        </div>

        {/* Payment summary */}
        <div className="payment-summary">
          <h2 className="payment-title">THANH TOÁN</h2>
          
          <div className="summary-items">
            {cartItems.filter(item => item.selected).map(item => (
              <div className="summary-item" key={item.id}>
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">{formatPrice(item.price)}đ</div>
                </div>
                <div className="item-quantity">x{item.quantity}</div>
                <div className="item-total">{formatPrice(item.price * item.quantity)}đ</div>
              </div>
            ))}
          </div>
          
          <div className="summary-totals">
            <div className="summary-row">
              <span>Tổng tiền hàng</span>
              <span>{formatPrice(subtotal)}đ</span>
            </div>
            <div className="summary-row">
              <span>Phí giao hàng</span>
              <span>{formatPrice(shippingFee)}đ</span>
            </div>
            <div className="summary-row">
              <span>Tổng thanh toán</span>
              <span className="total-amount">{formatPrice(total)}đ</span>
            </div>
            <div className="summary-row bonus-points">
              <span>Đã tích lũy điểm thưởng</span>
            </div>
          </div>
          
          <button className="checkout-button">ĐẶT HÀNG</button>
        </div>
      </div>

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

export default Giohang;