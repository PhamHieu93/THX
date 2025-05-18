// src/components/TogglePanel/TogglePanel.jsx
import './TogglePanel.scss';

const TogglePanel = ({ onToggle }) => {
    return (
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h2>Chào mừng trở lại</h2>
                    <p>Vui lòng điền thông tin tài khoản vào các ô bên cạnh</p>
                    <button
                        className="hidden"
                        onClick={() => onToggle(false)}
                    >
                        Đăng nhập
                    </button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h2>Hello there</h2>
                    <p>Register with your personal details to use all of site features</p>
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