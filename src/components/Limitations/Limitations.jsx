import { LimitationItem } from "./LimitationItem";
import { LimitationsDescription } from "./LimitationsDescription";
import iconGender from '../../assets/images/icon-gender.svg';
import iconAge from '../../assets/images/icon-age.svg';
import iconMuscle from '../../assets/images/icon-muscle.svg';
import iconPregnancy from '../../assets/images/icon-pregnancy.svg';
import iconRace from '../../assets/images/icon-race.svg';
import imageLine  from '../../assets/images/pattern-curved-line-right.svg';




export function Limitations() {
    return (
        <section className="limitations pt30 pb30 tablet-pt24 mobile-pt18 mobile-pb24   ">

            <div className="container relative">

                <div className="grid col-gap8 mobile-col-gap0 ">


                    <LimitationsDescription />

                    <div className="col1 tablet-hide"></div>



                    <LimitationItem
                    className='col4 bg-white radius4 p8 tablet-col6 mb7 mobile-col12 mobile-mb4'
                    title='Gender'
                    textContent="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
                    icon={iconGender}
                    />

                    <div className="col1 tablet-hide"></div>



                    <div className="col4 tablet-hide"></div>


                     <LimitationItem
                    className='col4 bg-white radius4 p8 tablet-col6 mb5 mobile-col12 mobile-mb4'
                    title='Age'
                    textContent="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
                    icon={iconAge}
                    />


                    <LimitationItem
                    className='col4 bg-white radius4 p8 tablet-col6 mb5 mobile-col12 mobile-mb4'
                    title='Muscle'
                    textContent="BMI may misclassNameify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
                    icon={iconMuscle}
                    />





                    <div className="col2 tablet-hide"></div>


                    <LimitationItem
                    className='col4 bg-white radius4 p8 tablet-col6 tablet-mb6 mobile-col12 mobile-mb4'
                    title='Pregnancy'
                    textContent="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
                    icon={iconPregnancy}
                    />


                    <div className="col3 hide tablet-block"></div>


                    <LimitationItem
                    className='col4 bg-white radius4 p8 tablet-col6 tablet-mx-4 mobile-col12 mobile-mb4 mobile-mx0'
                    title="Race"
                    textContent="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
                    icon={iconRace}
                    />




                </div>


                <div className="img w24 absolute left51 top63 tablet-hide ">
                    <img src={imageLine} alt="" />
                </div>


            </div>



        </section>
    )
}