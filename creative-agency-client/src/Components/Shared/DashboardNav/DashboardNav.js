import React from 'react';
import { Col, Image, Nav, Row, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignOutAlt, faList, faComment, faPlus, faLockOpen, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import OrderForm from '../../UserDashBoard/OrderForm/OrderForm';
import ServiceConsumed from '../../UserDashBoard/ServiceConsumed/ServiceConsumed';
import GiveReview from '../../UserDashBoard/GiveReview/GiveReview';
import AdminServiceList from '../../AdminDashboard/AdminServiceList/AdminServiceList';
import AddService from '../../AdminDashboard/AddService/AddService';
import MakeAdmin from '../../AdminDashboard/MakeAdmin/MakeAdmin';

const DashboardNav = () => {

    const admin = 0;

    return (
        <section>
            <Tab.Container defaultActiveKey={admin ? "adminservicelist" : "order"}>
                <Row>
                    <Col sm={3} style={{padding: '0px'}}>
                        <Nav variant="tabs" className="justify-content-around flex-column bg-warning min-vh-100">
                            <div>
                                <Nav.Item className="py-5">
                                    <Nav.Link className="text-center"><Image  width={180} src="/images/logos/applogo.png" alt="Group"/></Nav.Link>
                                </Nav.Item>
                                {
                                    admin ?
                                    <>
                                    <Nav.Item>
                                        <Nav.Link className="text-decoration-none text-dark font-weight-bold" eventKey="adminservicelist"><FontAwesomeIcon icon={faLockOpen} /><span className="mx-2">Service List</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-decoration-none text-dark font-weight-bold" eventKey="addservice"><FontAwesomeIcon icon={faPlus} /><span className="mx-2">Add Service</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-decoration-none text-dark font-weight-bold" eventKey="makeadmin"><FontAwesomeIcon icon={faUserPlus} /><span className="mx-2">Make Admin</span></Nav.Link>
                                    </Nav.Item> 
                                    </> :
                                    <>
                                    <Nav.Item>
                                        <Nav.Link className="text-decoration-none text-dark font-weight-bold" eventKey="order"><FontAwesomeIcon icon={faShoppingCart} /><span className="mx-2">Order</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-decoration-none text-dark font-weight-bold" eventKey="servicelist"><FontAwesomeIcon icon={faList} /><span className="mx-2">Service List</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-decoration-none text-dark font-weight-bold" eventKey="reviews"><FontAwesomeIcon icon={faComment} /><span className="mx-2">Review</span></Nav.Link>
                                    </Nav.Item>
                                    </>
                                }
                                
                            </div>
                            <div>
                                <Nav.Item>
                                    <Nav.Link as={Link} className="text-decoration-none text-dark font-weight-bold"><FontAwesomeIcon icon={faSignOutAlt} /><span className="mx-2">Logout</span></Nav.Link>
                                </Nav.Item>
                            </div>
                        </Nav>
                    </Col>
                    <Col style={{backgroundColor: '#E5E5E5', padding: '0px', overflow: 'hidden'}} sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="order">
                                <OrderForm></OrderForm>
                            </Tab.Pane>
                            <Tab.Pane eventKey="servicelist">
                                <ServiceConsumed></ServiceConsumed>
                            </Tab.Pane>
                            <Tab.Pane eventKey="reviews">
                                <GiveReview></GiveReview>
                            </Tab.Pane>
                            <Tab.Pane eventKey="adminservicelist">
                                <AdminServiceList></AdminServiceList>
                            </Tab.Pane>
                            <Tab.Pane eventKey="addservice">
                                <AddService></AddService>
                            </Tab.Pane>
                            <Tab.Pane eventKey="makeadmin">
                                <MakeAdmin></MakeAdmin>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
        </section>
    );
};

export default DashboardNav;