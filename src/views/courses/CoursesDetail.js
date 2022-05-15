import React from 'react';
import { Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import Plyr from 'plyr-react';
import Rating from 'react-rating';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const PurePlyr = React.memo(() => {
  const videoSrc = {
    type: 'video',
    sources: [
      { 
        // Google drive option
        // src: 'https://gdurl.com/SZAp' 
        // Test option
        src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
      }],
    poster: '/img/product/large/product-2.webp',
  };

  return <Plyr source={videoSrc} options={{}} />;
});

const CoursesDetail = () => {
  const title = 'Bread Making Techniques';
  const description = 'Elearning Portal Course Detail Page';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'courses/explore', text: 'Courses' },
  ];

  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-sm-0 me-auto">
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row className="g-5">
        <Col xxl="8" className="mb-5">
          <Card className="mb-5">
            <div className="card-img-top sh-50 cover">
              <PurePlyr />
            </div>
            <Card.Body>
              <h4 className="mb-3">Carrot Cake Gingerbread</h4>
              <div>
                <p>
                  Toffee croissant icing toffee. Sweet roll chupa chups marshmallow muffin liquorice chupa chups soufflé bonbon. Liquorice gummi bears cake
                  donut chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly. Danish brownie chocolate bar
                  lollipop cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake. Cake jujubes soufflé.
                </p>
                <p>
                  Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow
                  muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly
                  <u>pudding lollipop caramels</u>
                  marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups
                  lollipop jelly wafer soufflé.
                </p>
                <h6 className="mb-3 mt-5 text-alternate">Sesame Snaps Lollipop Macaroon</h6>
                <p>
                  Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut. Sesame snaps lollipop macaroon. Oat cake chocolate cake marzipan pudding
                  danish gummies. Dragée liquorice jelly beans jelly jelly sesame snaps brownie. Cheesecake chocolate cake sweet roll cupcake dragée croissant
                  muffin. Lemon drops cupcake croissant liquorice donut cookie cake. Gingerbread biscuit bear claw marzipan tiramisu topping. Jelly-o croissant
                  chocolate bar gummi bears dessert lemon drops gingerbread croissant. Donut candy jelly.
                </p>
                <ul className="list-unstyled">
                  <li>Croissant</li>
                  <li>Sesame snaps</li>
                  <li>Ice cream</li>
                  <li>Candy canes</li>
                  <li>Lemon drops</li>
                </ul>
                <h6 className="mb-3 mt-5 text-alternate">Muffin Sweet Roll Apple Pie</h6>
                <p>
                  Carrot cake gummi bears wafer sesame snaps soufflé cheesecake cheesecake cake. Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame
                  snaps chocolate. Lollipop sweet roll gingerbread halvah sesame snaps powder. Wafer halvah chocolate soufflé icing. Cotton candy danish
                  lollipop jelly-o candy caramels.
                </p>
              </div>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <Row className="align-items-center">
                <Col xs="6">
                  <div className="d-flex align-items-center">
                    <div className="sw-5 d-inline-block position-relative me-3">
                      <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                    <div className="d-inline-block">
                      <Button variant="link" className="lh-1 d-inline-block p-0">
                        Olli Hawkins
                      </Button>
                      <div className="text-muted text-small">Development Lead</div>
                    </div>
                  </div>
                </Col>
                <Col xs="6">
                  <Row className="g-0 justify-content-end">
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="eye" width="15" height="15" className="cs-icon icon text-primary me-1" />
                      <span className="align-middle">221</span>
                    </Col>
                    <Col xs="auto">
                      <CsLineIcons icon="message" width="15" height="15" className="cs-icon icon text-primary me-1" />
                      <span className="align-middle">17</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          {/* Preview End */}

          {/* Reviews Start */}
          <h2 className="small-title">Reviews</h2>
          <Card>
            <Card.Body>
              <Row className="mb-5">
                <Col xs="12" sm="auto" className="mb-3 mb-sm-0">
                  <div className="w-100 sw-sm-19 sw-md-23 border sh-16 rounded-md d-flex flex-column align-items-center justify-content-center">
                    <div className="cta-1 text-alternate mb-2">4.8</div>
                    <div>
                      <Rating
                        className="align-middle"
                        initialRating={5}
                        readonly
                        emptySymbol={<i className="cs-star text-primary" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                      <span className="text-muted"> (22)</span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <Row className="align-items-center">
                    <Col>
                      <ProgressBar className="progress-md" now={80} />
                    </Col>
                    <Col xs="auto" className="sw-20 text-end">
                      <span className="me-3 text-muted text-small">%80</span>
                      <Rating
                        className="align-middle"
                        initialRating={5}
                        readonly
                        emptySymbol={<i className="cs-star text-muted" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <ProgressBar className="progress-md" now={10} />
                    </Col>
                    <Col xs="auto" className="sw-20 text-end">
                      <span className="me-3 text-muted text-small">%10</span>
                      <Rating
                        className="align-middle"
                        initialRating={4}
                        readonly
                        emptySymbol={<i className="cs-star text-muted" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <ProgressBar className="progress-md" now={5} />
                    </Col>
                    <Col xs="auto" className="sw-20 text-end">
                      <span className="me-3 text-muted text-small">%5</span>
                      <Rating
                        className="align-middle"
                        initialRating={3}
                        readonly
                        emptySymbol={<i className="cs-star text-muted" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <ProgressBar className="progress-md" now={0} />
                    </Col>
                    <Col xs="auto" className="sw-20 text-end">
                      <span className="me-3 text-muted text-small">%0</span>
                      <Rating
                        className="align-middle"
                        initialRating={2}
                        readonly
                        emptySymbol={<i className="cs-star text-muted" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <ProgressBar className="progress-md" now={5} />
                    </Col>
                    <Col xs="auto" className="sw-20 text-end">
                      <span className="me-3 text-muted text-small">%5</span>
                      <Rating
                        className="align-middle"
                        initialRating={1}
                        readonly
                        emptySymbol={<i className="cs-star text-muted" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="mb-n3 border-last-none">
                <Row className="g-0 w-100 border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-2.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <div>Cherish Kerr</div>
                    <div className="text-muted text-small mb-2">2 days ago</div>
                    <Rating
                      className="align-middle"
                      initialRating={5}
                      readonly
                      emptySymbol={<i className="cs-star text-primary" />}
                      fullSymbol={<i className="cs-star-full text-primary" />}
                    />
                    <div className="text-medium text-alternate lh-1-25">Macaroon!</div>
                  </Col>
                </Row>
                <Row className="g-0 w-100 border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <div>Olli Hawkins</div>
                    <div className="text-muted text-small mb-2">3 days ago</div>
                    <Rating
                      className="align-middle"
                      initialRating={5}
                      readonly
                      emptySymbol={<i className="cs-star text-primary" />}
                      fullSymbol={<i className="cs-star-full text-primary" />}
                    />
                    <div className="text-medium text-alternate lh-1-25">Cupcake cake fruitcake. Powder chocolate bar soufflé gummi bears topping donut.</div>
                  </Col>
                </Row>
                <Row className="g-0 w-100 border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-3.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <div>Kirby Peters</div>
                    <div className="text-muted text-small mb-2">4 days ago</div>
                    <Rating
                      className="align-middle"
                      initialRating={5}
                      readonly
                      emptySymbol={<i className="cs-star text-primary" />}
                      fullSymbol={<i className="cs-star-full text-primary" />}
                    />
                    <div className="text-medium text-alternate lh-1-25">Nice, very tasty.</div>
                  </Col>
                </Row>
                <Row className="g-0 w-100 border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-4.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <div>Zayn Hartley</div>
                    <div className="text-muted text-small mb-2">1 week ago</div>
                    <Rating
                      className="align-middle"
                      initialRating={5}
                      readonly
                      emptySymbol={<i className="cs-star text-primary" />}
                      fullSymbol={<i className="cs-star-full text-primary" />}
                    />
                    <div className="text-medium text-alternate lh-1-25">
                      Chupa chups topping pastry halvah. Jelly cake jelly sesame snaps jelly beans jelly beans. Biscuit powder brownie powder sesame snaps
                      jelly-o dragée cake. Pie tiramisu cake jelly lemon drops. Macaroon sugar plum apple pie carrot cake jelly beans chocolate.
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
          {/* Reviews End */}
        </Col>
        <Col xxl="4">
          {/* At a Glance Start  */}
          <h2 className="small-title">At a Glance</h2>
          <Card className="mb-5">
            <Card.Body>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Duration</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">14 Hours</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="presentation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Content</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">8 Chapters</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="diploma" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Level</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">Beginner</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="calendar" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Release</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">05.11.2021</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="star" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Rating</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">4.8 (843)</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Completed By</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">1.522</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* At a Glance End  */}

        </Col>
      </Row>
    </>
  );
};

export default CoursesDetail;
