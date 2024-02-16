export function InputText(props) {
    const { unit , label , className , value , onChange } = props;
    return (
        <>
            <div className={`input-text ${className}`}>
                <label className="text-s text-dark-gray mb1 block">{label}</label>
                <input 
                type="text" 
                placeholder="0" 
                className="heading-m" 
                value={value} 
                onChange={ (e) => onChange(e.target.value)} />
                <span className="unit heading-m">{unit}</span>
            </div>
        </>
    )
}