import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardHeader } from "reactstrap";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const about = this.props.history.map(history => {
            return (
                <Card>
                    <CardImg top src={history.image} alt={history.name} />
                    <CardBody>
                        <CardTitle>{history.name}</CardTitle>
                        <CardText>{history.description}</CardText>
                    </CardBody>
                </Card>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {about}
                </div>
                <div className="col-sm-14">
                    <Card>
                        <CardHeader className="bg-info text-white"><h3>Metro Extended Contact Information</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Metro Information Metrobus and rail schedules,fares, parking, Bike and Ride program, and more Monday-Friday: 8 am - 6:30 pm </dt>
                                <dd className="col-6">202-637-7000</dd>
                                <dt className="col-6">SmarTrip® and SmartBenefits Participants 7 am - 8 pm, Monday - Friday Except Thanksgiving, Christmas, and New Year's Day</dt>
                                <dd className="col-6">888-762-7874</dd>
                                <dt className="col-6">SmartBenefits® Employers 7 am - 8 pm, Monday - Friday Except Thanksgiving, Christmas, and New Year's Day</dt>
                                <dd className="col-6">202-962-1326</dd>
                                <dt className="col-6">Customer Relations Suggestions, commendations, comments Weekdays: 8:30 am - 5:00 pm</dt>
                                <dd className="col-6">202-637-1328</dd>
                                <dt className="col-6"> Administrative Offices Administrative offices and general info, not including schedules and fares Weekdays: 8:00 am - 4:30 pm</dt>
                                <dd className="col-6">202-962-1234</dd>
                                <dt className="col-6">Transit Police</dt>
                                <dd className="col-6">202-962-2121</dd>
                                <dt className="col-6">Bike Locker Information</dt>
                                <dd className="col-6">202-962-1116</dd>
                                <dt className="col-6">Group/Convention Sales</dt>
                                <dd className="col-6">202-962-5700</dd>
                                <dt className="col-6">ID Cards for Riders with Disabilities</dt>
                                <dd className="col-6">202-962-2700</dd>
                                <dt className="col-6">Inspector General Hotline Report waste and fraud</dt>
                                <dd className="col-6">888-234-2374</dd>
                                <dt className="col-6">SmarTrip® Cards for Senior Citizens</dt>
                                <dd className="col-6">888-762-7874</dd>
                                <dt className="col-6">Lost and Found</dt>
                                <dd className="col-6">202-962-7874</dd>
                                <dt className="col-6">Marketing and Advertising</dt>
                                <dd className="col-6">202-962-1122</dd>
                                <dt className="col-6">Media Relations</dt>
                                <dd className="col-6">202-962-1051</dd>
                                <dt className="col-6">MetroAccess</dt>
                                <dd className="col-6">301-562-5360</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

export default About;