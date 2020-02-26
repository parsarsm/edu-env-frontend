import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    CustomInput,
    Form,
    FormGroup,
    Label,
} from '../../../components/';

import {HeaderMain} from "../../template/components/HeaderMain";
import {HeaderDemo} from "../../template/components/HeaderDemo";
import {Button, Input, Table} from "../../../components";

const CourseList = () => (
    <React.Fragment>
        <Container>
            <HeaderMain
                title="لیست دروس ارائه شده در ترم جاری"
                className="mb-5 mt-4"
            />

            <Row>
                <Col lg={12}>-
                    <HeaderDemo
                        no={1}
                        title="جستجو"
                        subTitle={(
                            <React.Fragment>
                                جستجوی پیشرفته بین دروس ترم جاری
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                جستجو
                            </CardTitle>
                            <Form>
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="country-selector-1" sm={4}>
                                        مقطع درس
                                    </Label>
                                    <Col sm={8}>
                                        <CustomInput
                                            type="select"
                                            name="customSelect"
                                            id="country-selector-1"
                                        >
                                            <option value="">مقطع مورد نظر را انتخاب کنید ...</option>
                                            <option>کارشناسی</option>
                                            <option>کارشناسی ارشد</option>
                                            <option>دکترا</option>
                                            <option>مشترک</option>
                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="country-selector-1" sm={4}>
                                        ترتیب
                                    </Label>
                                    <Col sm={8}>
                                        <CustomInput
                                            type="select"
                                            name="customSelect"
                                            id="country-selector-1"
                                        >
                                            <option>شماره درس</option>
                                            <option>تاریخ امتحان</option>
                                            <option>برنامه هفتگی</option>
                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="input" sm={4}>
                                        نام استاد
                                    </Label>
                                    <Col sm={8}>
                                        <Input
                                            type=""
                                            name=""
                                            id="input"
                                            placeholder=""
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={8}>
                                        <CustomInput
                                            type="checkbox"
                                            id="iConfirm2"
                                            label="فقط دروس دارای ظرفیت"
                                            className="mb-3"
                                        />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <HeaderDemo
                        no={2}
                        title="لیست دروس"
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                لیست دروس ترم جاری در مقاطع مختلف
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                لیست دروس ارایه شده توسط دانشکده مهندسی عمران مقطع کارشناسی در نیمسال دوم 99-1398
                            </CardTitle>
                        </CardBody>

                        <Table className="mb-0" striped responsive>
                            <thead>
                            <tr>
                                <th className="bt-0">شماره درس</th>
                                <th className="bt-0">گروه</th>
                                <th className="bt-0">واحد</th>
                                <th className="bt-0">نام درس</th>
                                <th className="bt-0">پیشنیاز</th>
                                <th className="bt-0">همنیاز</th>
                                <th className="bt-0">ظرفیت</th>
                                <th className="bt-0">تعداد ثبت نامی</th>
                                <th className="bt-0">نام استاد</th>
                                <th className="bt-0">تاریخ امتحان</th>
                                <th className="bt-0">برنامه هفتگی</th>
                                <th className="bt-0">ملاحظات</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr key={1}>
                                <td className="align-middle text-center">
                                    20005
                                </td>

                                <td className="align-middle text-center">
                                    <span className="text-inverse">
                                     1
                                    </span>
                                </td>
                                <td className="align-middle text-center">
                                    <span className="text-inverse">
                                     3
                                    </span>
                                </td>

                                <td className="align-middle text-center">
                                    <span className="text-inverse">
                                     آمار و احتمال مهندسی
                                    </span>
                                </td>


                                <td className="align-middle text-center">
                                    22025
                                </td>

                                <td className="align-middle text-center">  </td>


                                <td className="align-middle text-center">
                                    40
                                </td>

                                <td className="align-middle text-center text-success">
                                    36
                                </td>

                                <td className="align-middle text-center">
                                    <span className="text-inverse">
                                     هاتف عبدوس
                                    </span>
                                </td>

                                <td className="align-middle text-center">
                                    <span className="text-inverse">
                                     1399/03/27   09:00
                                    </span>
                                </td>

                                <td className="align-middle text-center">
                                    <span className="text-inverse">
                                     شنبه و دوشنبه 15:0 تا 16:30
                                    </span>
                                </td>

                                <td className="align-middle text-right">
                                    عنوان درس: قابلیت اعتماد، ریسک و تاب آوری
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

export default CourseList;