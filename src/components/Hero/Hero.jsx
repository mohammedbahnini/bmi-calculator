
import { Calculator } from "../Calculator/Calculator";

export function Hero() {

   
    return (
        <>

            <section className="hero">
                <div className="container">

                    <div className="flex jc-space-between col-gap8 pt11 tablet-flex-col ">

                        <div className="hero__text pt22 tablet-align-center tablet-pt0 tablet-mb10 mobile-mb12  ">

                            <div className="mb9 text-gunmetal tablet-mb6">
                                <h1 className="heading-xl ">
                                    Body Mass
                                </h1>
                                <h1 className="heading-xl ">
                                    Index Calculator
                                </h1>
                            </div>
                            <p className="text text-dark-gray max-w116 tablet-max-w100pr">
                                Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
                            </p>

                        </div>

                        <Calculator />

                    </div>


                </div>
            </section>
        </>
    )
}