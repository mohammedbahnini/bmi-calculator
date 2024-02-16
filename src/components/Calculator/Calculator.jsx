import { useEffect, useState } from "react";
import { InputRadio } from '../Inputs/InputRadio';
import { InputText } from '../Inputs/InputText';
import { BmiResult } from "../Calculator/BmiResult";

export function Calculator() {

    const [type, setType] = useState('imperial');
    const [bmi, setBmi] = useState(null);
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);

    const [heightImperial, setHeightImperial] = useState(null)
    const [decimalHeightImperial, setDecimalHeightImperial] = useState(null)
    const [weightImperial, setWeightImperial] = useState(null)
    const [decimalWeightImperial, setDecimalWeightImperial] = useState(null)

    useEffect(() => {

        if (type === 'metric') {
            if (height && weight) {
                const calculatedBmi = (weight / (Math.pow(height / 100, 2))).toFixed(1)
                setBmi(calculatedBmi)
            }
            else
                setBmi(null)

        }
        else if (type === 'imperial'){

            const verifiedDecimalHeight= decimalHeightImperial ? decimalHeightImperial : 0;
            const verifiedHeight = (heightImperial ? heightImperial : 0) *12;
            const finalHeight = verifiedHeight * 1 + verifiedDecimalHeight * 1;

            const verifiedDecimalWeight = decimalWeightImperial ? decimalWeightImperial : 0;
            const verifiedWeight = (weightImperial ? weightImperial : 0) * 14;
            const finalWeight = verifiedDecimalWeight*1 + verifiedWeight*1;

            if( finalHeight && finalWeight){
                setBmi( (finalWeight / finalHeight /finalHeight * 703).toFixed(1)  );
            }
            else 
                setBmi(null);
            
        }
            
       
    }, [height, weight , heightImperial , decimalHeightImperial , weightImperial , decimalWeightImperial])

    const handleChange = (e) => {
        setType(e.target.value)
    }





    return (
        <div className="hero__calculator p8 w141 shrink-0 radius4 bg-white tablet-w100pr">

            <h3 className="heading-m mb9">Enter your details belows</h3>

            <div className="flex mb8 col-gap6 ">


                <InputRadio
                    className='grow-1 ml3'
                    text='Meter'
                    id='metric'
                    value='metric'
                    checked={type === 'metric'}
                    onChange={handleChange}
                />

                <InputRadio
                    className='grow-1 ml3'
                    text='Imperial'
                    id='imperial'
                    value='imperial'
                    checked={type === 'imperial'}
                    onChange={handleChange}
                />
            </div>

            {
                type === 'metric' &&
                (
                    <div className="flex col-gap6 mb8 mobile-flex-col mobile-row-gap4  mobile-mb6">

                        <InputText label='Height' unit='cm' value={height} onChange={setHeight} />
                        <InputText label='Weight' unit='kg' value={weight} onChange={setWeight} />
                    </div>
                )
            }

            {
                type === 'imperial' &&
                (
                    <div className="flex flex-col row-gap6 mb8">
                        <div className="flex ai-end col-gap6 mobile-col-gap4">
                            <InputText label='Height' unit='ft' className='' value={heightImperial} onChange={setHeightImperial} />
                            <InputText label='' unit='in' value={decimalHeightImperial} onChange={setDecimalHeightImperial} />
                        </div>
                        <div className="flex ai-end col-gap6 mobile-col-gap4">
                            <InputText label='Weight' unit='st' value={weightImperial} onChange={setWeightImperial} />
                            <InputText label='' unit='lbs' value={decimalWeightImperial} onChange={setDecimalWeightImperial} />
                        </div>
                    </div>
                )
            }



            <BmiResult bmi={bmi} type={type} />

        </div>

    )
}