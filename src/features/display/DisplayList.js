import { Col, Row } from 'reactstrap'
//import DisplayCard from './DisplayCard'
import AnimatedDisplayCard from './AnimatedDisplayCard'
import { selectFeaturedCampsite } from '../campsites/campsitesSlice'
import { selectFeaturedPromotion } from '../promotions/promotionsSlice'
import { selectFeaturedPartner } from '../partners/partnersSlice'

const DisplayList = () => {
    const items = [
        selectFeaturedPartner(),
        selectFeaturedCampsite(),
        selectFeaturedPromotion()
    ];
    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    //if there is no featured campsite, it is simply skipped from rendering, instead of causing an error in your app. 
                    item && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                );

            })}
        </Row>
    );
};

export default DisplayList