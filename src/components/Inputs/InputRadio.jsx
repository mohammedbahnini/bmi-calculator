export function InputRadio(props) {
    const { text , value  , onChange, checked , id , className } = props;
    return (
        <>
            <div className={`input-radio ${className}`}>
                <input type="radio" {...props} />
                <label htmlFor={id}>{text}</label>
            </div>
        </>
    )
}