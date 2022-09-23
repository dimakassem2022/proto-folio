// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import { Row, Col ,Container} from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col size={12}>
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>lorem</p>
                            <Carousel responsive={responsive}
                            autoPlay={ true }
                            autoPlaySpeed={1000 * 2}
                             infinite={true} 
                             className="owl-carousel owl-theme skill-slider">
                                <div className="item ">
                                    <Row>
                                        <Col xs={6} md={6} xl={6} className='skill-title'>NODE JS</Col>
                                        <Col xs={6} md={6} xl={6}>
                                            <div className="g-purple" style={{ width: '75%' }}>75%</div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} md={6} xl={6} className='skill-title'>REACT</Col>
                                        <Col xs={6} md={6} xl={6} >
                                            <div className="g-purple" style={{ width: '70%' }}>70%</div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} md={6} xl={6} className='skill-title'>NEXTJS</Col>
                                        <Col xs={6} md={6} xl={6} >
                                            <div className="g-purple" style={{ width: '70%' }}>70%</div> 
                                              </Col>
                                    </Row>

                                </div>
                                <div className="item ">
                                    <Row>
                                        <Col xs={6} md={6} xl={6} className='skill-title'>HTML</Col>
                                        <Col xs={6} md={6} xl={6} >
                                            <div className="g-purple" style={{ width: '95%' }}>95%</div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} md={6} xl={6} className='skill-title'>CSS</Col>
                                        <Col xs={6} md={6} xl={6}   >
                                           <div className="g-purple" style={{width:'100%'}}>100%</div>   
                                            </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} md={6} xl={6} className='skill-title'>JAVASCRIPT</Col>
                                        <Col xs={6} md={6} xl={6}  >
                                            <div className="g-purple" style={{ width: '95%' }}>95%</div>  
                                             </Col>
                                    </Row>
                                </div>
                                <div className="item ">
                                    <Row>
                                        <Col xs={6} md={6} xl={6} className='skill-title'>MYSQL</Col>
                                        <Col xs={6} md={6} xl={6}  >
                                            <div className="g-purple" style={{ width: '90%' }}>90%</div>  
                                             </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} md={6} xl={6} className='skill-title'>KNEX</Col>
                                        <Col xs={6} md={6} xl={6}  >
                                        <div className="g-purple" style={{ width: '80%' }}>80%</div>  
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} md={6} xl={6} className='skill-title' >OBJECTION JS</Col>
                                        <Col xs={6} md={6} xl={6}  >
                                        <div className="g-purple" style={{ width: '60%' }}>60%</div>  
                                        </Col>
                                    </Row>
                                </div>
                                <div className="item ">
                                    <Row>
                                        <Col xs={6} md={6} xl={6} className='skill-title'>EXPRESS</Col>
                                        <Col xs={6} md={6} xl={6}  >
                                            <div className="g-purple" style={{ width: '80%' }}>80%</div>  
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} md={6} xl={6} className='skill-title'>GraphQl</Col>
                                        <Col xs={6} md={6} xl={6}  >
                                            <div className="g-purple" style={{ width: '40%' }}>40%</div>  
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} md={6} xl={6} className='skill-title'>JQUERY</Col>
                                        <Col xs={6} md={6} xl={6}  >
                                            <div className="g-purple" style={{ width: '90%' }}>90%</div>  
                                        </Col>
                                    </Row>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>
    )
}