export function FeatureItem(props){
    const { title , textContent , icon } = props;

    return (
        <div className="features__item col4 tablet-col12">
        <div className="tablet-flex tablet-col-gap10 tablet-ai-center mobile-flex-col mobile-ai-start ">
          <div className="icon w16 rouded mb11 w16 shrink-0 tablet-m0 mobile-mb8 ">
            <img src={icon} alt="" />
          </div>
          <div>
            <h3 className="heading-m mb7 text-gunmetal">{title}</h3>
            <p className="text text-dark-gray">{textContent}</p>
          </div>
        </div>
       
        
      </div>

    )
}