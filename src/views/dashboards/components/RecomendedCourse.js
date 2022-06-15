import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { React } from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

const RecomendedCourse = (props) => {
    const {title, description, imgLink, rating, toCourse} = props;

    return (
        <Card className="sh-50 sh-md-40 h-xl-100-card hover-img-scale-up">
            {/* <img src={imgLink} className="card-img h-100 scale position-absolute" alt="card image" /> */}
            <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
            <div>
                <div className="cta-1 mb-3 text-black w-75 w-sm-50">{title}</div>
                <div className="w-50 text-black mb-3">
                {description}
                </div>
                <Rating
                    className="mb-2"
                    initialRating={rating}
                    readonly
                    emptySymbol={<i className="cs-star text-primary" />}
                    fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div>$ 0</div>
            </div>
            <div>
                <NavLink to= {toCourse} className="btn btn-icon btn-icon-start btn-outline-primary mt-3 stretched-link">
                <CsLineIcons icon="chevron-right" /> <span>Ver curso</span>
                </NavLink>
            </div>
            </div>
        </Card>
    );
};

export default RecomendedCourse;