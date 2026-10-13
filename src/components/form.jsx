import '../styles/form.css'

function Form({
    children,
    className,
    style,
    onSubmit
}) {
    return (
        <form 
        style={style}
        onSubmit={onSubmit}
        className={className}>
           {children} 
        </form>
    )
}
export default Form;