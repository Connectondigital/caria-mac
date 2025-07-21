import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, ListGroup, ListGroupItem, Pagination, PaginationItem, PaginationLink, Row, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';

import SimpleBar from 'simplebar-react';

// Import Images

import product2 from "../../assets/images/products/img-2.png";
import product8 from "../../assets/images/products/img-8.png";
import product10 from "../../assets/images/products/img-10.png";

import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";

import { widgetsActivities, widgetsTasks } from "../../common/data/index";

import { OtherWidgetsCharts } from './WidgetsCharts';

const UpcomingActivity = () => {
    const chartDataOptions = [
        {
            id: 1,
            title: "Application",
            persantage: "16.24",
            series: [{
                name: "Results",
                data: [0, 68, 35, 90, 99],
            }],
            dataColors: '["--vz-success" , "--vz-transparent"]'
        },
        {
            id: 2,
            title: "Interviewed",
            persantage: "34.24",
            series: [{
                name: "Results",
                data: [0, 98, 85, 90, 67],
            }],
            dataColors: '["--vz-danger" , "--vz-transparent"]'
        },
        {
            id: 3,
            title: "Hired",
            persantage: "6.67",
            series: [{
                name: "Results",
                data: [0, 65, 103, 75, 120],
            }],
            dataColors: '["--vz-success" , "--vz-transparent"]'
        },
    ]

    return (
        <React.Fragment>
            <Row>
                {(chartDataOptions || []).map((item, key) => (
                    <Col xl={4} md={6} key={key}>
                        <Card className="card-height-100">
                            <div className="d-flex">
                                <div className="flex-grow-1 p-3">
                                    <h5 className="mb-3">{item.title}</h5>
                                    <p className="mb-0 text-muted"><span className="badge bg-light text-success mb-0"> <i className="ri-arrow-up-line align-middle"></i> {item.persantage} % </span> vs. previous month</p>
                                </div>
                                <div>
                                    {/* <div className="apex-charts" data-colors='["--vz-success" , "--vz-transparent"]' dir="ltr" id="results_sparkline_charts"></div> */}
                                    <OtherWidgetsCharts dataColors={item.dataColors} seriesData={item.series} />
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    );
};

export default UpcomingActivity;
