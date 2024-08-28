import './CustomButton.css';

const CustomButton = ({ children, onClick, disabled }) => {
    return (
        <button
            className="custom-button"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default CustomButton;
