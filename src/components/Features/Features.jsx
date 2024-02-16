import icon1 from '../../assets/images/icon-eating.svg';
import icon2 from '../../assets/images/icon-exercise.svg';
import icon3 from '../../assets/images/icon-sleep.svg';
import { FeatureItem } from './FeatureItem';

export function Features() {
    const features = [
        {
            title: 'Healthy eating',
            textContent: 'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
            icon: icon1
        }
        ,
        {
            title: 'Regular exercise',
            textContent: 'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
            icon: icon2
        },
        {
            title: 'Adequate sleep',
            textContent: 'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
            icon: icon3
        }

    ]
    return (
        <section className="features pt18 pb24 mt24 tablet-pt15 tablet-pb15 mobile-py14 mobile-mt18 overflow-hidden  ">
            <div className="container">

                <div className="grid col-gap8 tablet-row-gap10 mobile-col-gap0 ">
          
                    {
                        features.map(item => {
                            return (<FeatureItem title={item.title} textContent={item.textContent} icon={item.icon} key={item.title} />)
                        })
                    }

                </div>
                
            </div>
        </section>
    )
}