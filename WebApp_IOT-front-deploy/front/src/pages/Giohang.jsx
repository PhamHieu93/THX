import React, { useState } from 'react';
import "./Giohang.scss";
import HeaderSidebar from './header_sidebar.jsx';
import FooterSidebar from './footer_sidebar.jsx';
import ChatBox from './chatbox.jsx'; // Import the ChatBox component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';

const Giohang = () => {
  // Format price with commas
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
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
  // Modal state for ĐẶT HÀNG
  const [showModal, setShowModal] = useState(false);
  const [deliveryType, setDeliveryType] = useState('delivery'); // 'pickup' or 'delivery'

  // --- Add these states and handlers for popups ---
  const [showMap, setShowMap] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState('');

  const handleShowMap = () => setShowMap(true);
  const handleCloseMap = () => setShowMap(false);

  const handleShowCalendar = () => setShowCalendar(true);
  const handleCloseCalendar = () => setShowCalendar(false);

  const handleDateTimeChange = (e) => setSelectedDateTime(e.target.value);
  // ------------------------------------------------
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
    <HeaderSidebar>
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
            <button>🔍</button>
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
    <span>Tổng tiền hàng:</span>
    <span>{formatPrice(subtotal)}đ</span>
  </div>
  <div className="summary-row">
    <span>Tổng tiền phí vận chuyển</span>
    <span>{formatPrice(shippingFee)}đ</span>
  </div>
  <div className="summary-row">
    <span>Tổng cộng Voucher giảm giá</span>
    <span className="voucher-amount">0đ</span>
  </div>
  <hr style={{ border: "0", borderTop: "1px solid #fff", margin: "8px 0" }} />
  <div className="summary-row">
    <span>Tổng thanh toán</span>
    <span className="total-amount">{formatPrice(total)}đ</span>
  </div>
  <div className="summary-row">
    <span>Đã bao gồm thuế</span>
    <span classname="vat"></span>
  </div>
</div>
          
          <button
            className="checkout-button"
            onClick={() => setShowModal(true)}
          >
            ĐẶT HÀNG
          </button> 
         </div>
      </div>
      {/* Modal for ĐẶT HÀNG */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <button
                className={`modal-tab ${deliveryType === 'pickup' ? 'active' : ''}`}
                onClick={() => setDeliveryType('pickup')}
              >
                <span role="img" aria-label="pickup" style={{ fontSize: 28, marginRight: 8 }}>🛒</span>
                Pickup
              </button>
              <button
                className={`modal-tab ${deliveryType === 'delivery' ? 'active' : ''}`}
                onClick={() => setDeliveryType('delivery')}
              >
                <span role="img" aria-label="delivery" style={{ fontSize: 28, marginRight: 8 }}>📦</span>
                Delivery
              </button>
            </div>
            <div className="modal-content">
              {deliveryType === 'delivery' ? (
                <div className="delivery-content">
                  <button className="modal-btn" onClick={handleShowMap}>Thêm địa chỉ</button>
                  <button className="modal-btn" onClick={handleShowMap}>Dùng địa chỉ hiện tại</button>
                </div>
              ) : (
                <div className="pickup-content">
                  <button className="modal-btn" onClick={handleShowMap}>Cửa hàng gần nhất</button>
                  <button className="modal-btn" onClick={handleShowCalendar}>Thời gian lấy</button>
                </div>
              )}
            </div>
            <button className="modal-close" onClick={() => setShowModal(false)}>Đóng</button>
          </div>
        </div>
      )}

      {/* Google Map Popup */}
      {showMap && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="popup-header">
              <span>Chọn vị trí trên bản đồ</span>
              <button className="popup-close" onClick={handleCloseMap}>×</button>
            </div>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.502222222222!2d106.70000000000002!3d10.77688888888889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzM2LjgiTiAxMDbCsDQyJzAwLjAiRQ!5e0!3m2!1svi!2s!4v1680000000000!5m2!1svi!2s"
              width="400"
              height="300"
              style={{ border: 0, borderRadius: 8, width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}

      {/* Calendar Popup */}
      {showCalendar && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="popup-header">
              <span>Chọn ngày và giờ lấy hàng</span>
              <button className="popup-close" onClick={handleCloseCalendar}>×</button>
            </div>
            <input
              type="datetime-local"
              value={selectedDateTime}
              onChange={handleDateTimeChange}
              className="calendar-input"
              style={{ margin: "24px 0", fontSize: 18, padding: 8, borderRadius: 8, border: "1px solid #ccc" }}
            />
            <button
              className="modal-btn"
              onClick={handleCloseCalendar}
              style={{ marginTop: 8 }}
            >
              Xác nhận
            </button>
          </div>
        </div>
      )}

      <div className="chat-button" onClick={toggleChat}>
                <FontAwesomeIcon icon={faComment} />
            </div>
              
              {isChatOpen && <ChatBox onClose={() => setIsChatOpen(false)} />}
          
      {/* Footer */}
      <FooterSidebar />
    </div>
    </HeaderSidebar>
  );
}

export default Giohang;