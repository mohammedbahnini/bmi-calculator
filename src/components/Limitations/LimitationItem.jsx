export function LimitationItem(props) {
    const { title , textContent , icon , className } = props;

    return (
        <div className={`${className} limitation`} >
            <div className="limitation__header flex ai-center mb4" >
                <span className="limitation__icon mr4">
                    <img src={icon} alt="Gender" />
                </span>
                <h4 className="limitation__heading heading-s text-gunmetal">
                    {title}
                </h4>
            </div>
            <p className="text limitation__text text-dark-gray">
                {textContent}
            </p>
        </div>
    )
}