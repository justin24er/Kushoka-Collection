import '../../styles/input.css'

function Input({
    ref,
    type,
    placeholder,
    value,
    className,
    id,
    onChange,
    maxLength,
    autoComplete
}) {
    return (
        <input
            ref={ref}
            type={type}
            value={value}
            placeholder={placeholder}
            className={className}
            id={id}
            onChange={onChange}
            maxLength={maxLength}
            autoComplete={autoComplete} />
    )
}
export default Input;