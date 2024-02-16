import mainImage from '../../assets/images/image-man-eating.webp';
import smallImage from '../../assets/images/tablet/image-man-eating.png';
import imageLine from '../../assets/images/pattern-curved-line-left.svg';

export function Intro(){
    return (
        <section className="intro pt44 tablet-pt24">
        <div className="container relative ">
  
          <div className="grid col-gap8 tablet-col-gap4 mobile-row-gap12 ">
  
            <div className=" col6 intro__img tablet-col5 tablet-ml-39 tablet-w109 mobile-col12 mobile-w-auto mobile-mx-6 ">
              <picture>
                <source media="(max-width:992px)" srcSet={smallImage} />
                <img src={mainImage} alt="" />
              </picture>
            </div>
  
            <div className="col1"></div>
  
            <div className="col5 intro__text shrink-1 as-end pb10 tablet-col6 mobile-col12 mobile-pb0 ">
              <h2 className="heading-l mb9 text-gunmetal">
                What your BMI result means
              </h2>
              <p className="text text-dark-gray">
                A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
              </p>
            </div>
  
         </div>
  
         
         <div className="img w21 absolute right16 top-13 tablet-hide ">
          <img src={imageLine} alt="" />
        </div>
        
  
  
        </div>
      </section>
    )
}