// src/components/TogglePanel/TogglePanel.jsx
import './TogglePanel.scss';

const TogglePanel = ({ onToggle }) => {
    return (
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h2>Chào bạn</h2>
                    <p>Đăng ký thông tin để sử dụng mọi tiện ích</p>
                    <p>Đăng nhập nếu đã có tài khoản</p>
                    <button
                        className="hidden"
                        onClick={() => onToggle(false)}
                    >
                        Đăng nhập
                    </button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h2>Chào mừng trở lại</h2>
                    <p>Vui lòng điền thông tin vào các ô bên cạnh</p>
                    <p>Đăng ký nếu chưa có tài khoản</p>
                    <button
                        className="hidden"
                        onClick={() => onToggle(true)}
                    >
                        Đăng ký
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TogglePanel;