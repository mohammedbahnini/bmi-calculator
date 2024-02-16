export function BmiResult(props) {
    const { bmi , type } = props;

    return (
        <>
            <div className="hero__result text-white p8">
                {
                    bmi &&
                    (
                        <>
                            <div className="flex col-gap6 mobile-flex-col mobile-row-gap6">
                                <div className="flex1">
                                    <p className="text mb2">Your BMI is...</p>
                                    <h1 className="heading-xl">{bmi}</h1>
                                </div>
                                <p className="text-s flex1">
                                    Your BMI suggests you’re a healthy weight. Your ideal weight is between 
                                    { (type === 'metric') && <span className="fw700"> 63.3kgs - 85.2kgs.</span> }
                                    { (type === 'imperial') && <span className="fw700"> 9st 6lbs - 12st 10lbs.</span> }
                                </p>
                            </div>
                        </>
                    )
                }
                {
                    !bmi &&
                    (
                        <>
                            <h3 className="heading-m mb4">
                                Welcome!
                            </h3>
                            <p className="text-s ">
                                Enter your height and weight and you’ll see your BMI result here
                            </p>
                        </>

                    )
                }
            </div>

        </>
    )
}