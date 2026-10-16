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
    accept,
    autoComplete
}) {
    return (
        <input
            ref={ref}
            type={type}
            accept={accept}
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