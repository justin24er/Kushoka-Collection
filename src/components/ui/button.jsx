import '../../styles/button.css'

function Button({
    type,
    className,
    children,
    onClick,
    style
}) {
    return <button type={type}
                style={style}
                className={className}
                onClick={onClick}>
                    {children}
                </button>
}
export default Button