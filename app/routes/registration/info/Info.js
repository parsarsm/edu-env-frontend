import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
} from '../../../components/';

import {HeaderMain} from "../../template/components/HeaderMain";
import {HeaderDemo} from "../../template/components/HeaderDemo";
import {Table} from "../../../components";


const Info = () => (
    <React.Fragment>
        <Container>
            <HeaderMain
                title="اطلاعیه و راهنمای ثبت‌نام و ترمیم"
            />

            <Row>
                <Col lg={12}>
                    <HeaderDemo
                        no={1}
                        title="اعلان ها"
                        subTitle="اطلاعیه های دانشجویی"
                    />
                </Col>
            </Row>
            <Row>

                <Col lg={6}>
                    <Card type="side-border" color="primary" className="mb-3">
                        <CardBody>
                            <a href="">وب سایت معاونت آموزشی و تحصیلات تکمیلی</a>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card type="side-border" color="primary" className="mb-3">
                        <CardBody>
                            <a href="">فرمها ؛ آئین نامه ها و مقررات آموزشی (جدید)</a>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card type="side-border" color="info" className="mb-3">
                        <CardBody>
                            <a href="">راهنمای ثبت نام نیمسال جاری</a>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <HeaderDemo
                        no={2}
                        title="وضعیت"
                        subTitle="وضعیت دانشجو در انتخاب واحد"
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                وضعیت آموزشی
                            </CardTitle>
                        </CardBody>

                        <Table className="mb-0" striped responsive>
                            <thead>
                            <tr>
                                <th className="bt-0">#</th>
                                <th className="bt-0">وضعیت تحصیلی</th>
                                <th className="bt-0">وضعیت</th>
                                <th className="bt-0">توضیحات</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr key={1}>
                                <td className="align-middle">
                                    1.
                                </td>
                                <td className="align-middle">
                        <span className="text-inverse">
                            استاد راهنما
                        </span>
                                </td>


                                <td className="align-middle text-right text-success">
                                    تعیین شده
                                </td>


                                <td className="align-middle">
                                    استاد راهنمای شما خانم/آقای جعفر حبیبی است.
                                </td>

                            </tr>
                            <tr key={2}>
                                <td className="align-middle">
                                    2.
                                </td>
                                <td className="align-middle">
                        <span className="text-inverse">
                      مجوز ثبت نام توسط استاد راهنما
                        </span>
                                </td>


                                <td className="align-middle text-right text-success">
                                    صادر شده
                                </td>


                                <td className="align-middle">
                                    مجوز ثبت نام شما در نیمسال 13982 توسط استاد راهنما صادر شده است.
                                </td>

                            </tr>
                            <tr key={3}>
                                <td className="align-middle">
                                    3.
                                </td>
                                <td className="align-middle">
                        <span className="text-inverse">
ساعت ثبت نام
                        </span>
                                </td>


                                <td className="align-middle text-right text-warning">
                                    تعیین نشده
                                </td>


                                <td className="align-middle">
                                    زمان ثبت نام برای شما تعیین نشده است.به آموزش دانشکده مراجعه کنید.
                                </td>

                            </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>


        </Container>
    </React.Fragment>
);

export default Info;
