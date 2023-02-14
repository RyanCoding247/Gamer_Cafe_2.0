import { useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Row, Col } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateRoomForm } from "../utils/validateRoomForm";

const RoomForm = ({ setModalOpen, mySelection, modalOpen }) => {

    const handleSubmit = () => {
        setModalOpen(false);
        // no current back-end to send to, will update when back-end or API is created
    }

    const handleClose = () => {
        setModalOpen(false);
    }

    const room = useSelector((state) => {
        return state.rooms.roomsArray
    })

    return (
        <Modal isOpen={modalOpen} className='d-flex'>
            <ModalHeader toggle={() => setModalOpen(false)}>
                Reserve a Room
            </ModalHeader>
            <ModalBody>
                <Formik
                    onSubmit={handleSubmit}
                    initialValues={{ roomName: `${room[mySelection].name}`, firstName: '', lastName: '', size: '', date: '', startTime: '', endTime: '', contactType: '', phone: '', email: '' }}
                    validate={validateRoomForm}  >
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="roomName">
                                        Your Room
                                    </Label>
                                    <Field
                                        name='roomName'
                                        className='form-control'
                                        disabled={room[mySelection].name}
                                    />
                                    <ErrorMessage name="roomName">
                                        {(msg) => <p className="text-danger">{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm='6'>
                                <FormGroup>
                                    <Label htmlFor="firstName" >
                                        First Name
                                    </Label>
                                    <Field
                                        name='firstName'
                                        id='firstName'
                                        placeholder='First Name'
                                        className='form-control'
                                    />
                                    <ErrorMessage name="firstName">
                                        {(msg) => <p className="text-danger">{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="lastName" >
                                        Last Name
                                    </Label>
                                    <Field
                                        name='lastName'
                                        id='lastName'
                                        placeholder='Last Name'
                                        className='form-control'
                                    />
                                    <ErrorMessage name="lastName">
                                        {(msg) => <p className="text-danger">{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label htmlFor="size">
                                Group Size
                            </Label>
                            <Field
                                name='size'
                                id='size'
                                placeholder={`Max Size: ${room[mySelection].maxSize} people`}
                                className='form-control'
                            />
                            <ErrorMessage name="size">
                                {(msg) => <p className="text-danger">{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        <Row>
                            <Col sm='4'>
                                <FormGroup>
                                    <Label htmlFor="date">
                                        Date
                                    </Label>
                                    <Field
                                        type='date'
                                        name='date'
                                        id='date'
                                        className='form-control'
                                    />
                                    <ErrorMessage name="date">
                                        {(msg) => <p className="text-danger">{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                            </Col>
                            <Col sm='4'>
                                <FormGroup>
                                    <Label htmlFor="startTime">
                                        Start Time
                                    </Label>
                                    <Field
                                        name='startTime'
                                        id='startTime'
                                        as='select'
                                        className='form-control'
                                    >
                                        <option>Select...</option>
                                        <option>10 AM</option>
                                        <option>11 AM</option>
                                        <option>12 PM</option>
                                        <option>1 PM</option>
                                        <option>2 PM</option>
                                        <option>3 PM</option>
                                        <option>4 PM</option>
                                        <option>5 PM</option>
                                        <option>6 PM</option>
                                        <option>7 PM</option>
                                        <option>8 PM</option>
                                        <option>9 PM</option>
                                        <option>10 PM</option>
                                    </Field>
                                    <ErrorMessage name="startTime">
                                        {(msg) => <p className="text-danger">{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                            </Col>
                            <Col sm='4'>
                                <FormGroup>
                                    <Label htmlFor="endTime">
                                        End Time
                                    </Label>
                                    <Field
                                        name='endTime'
                                        id='endTime'
                                        as='select'
                                        className='form-control'
                                    >
                                        <option>Select...</option>
                                        <option>11 AM</option>
                                        <option>12 PM</option>
                                        <option>1 PM</option>
                                        <option>2 PM</option>
                                        <option>3 PM</option>
                                        <option>4 PM</option>
                                        <option>5 PM</option>
                                        <option>6 PM</option>
                                        <option>7 PM</option>
                                        <option>8 PM</option>
                                        <option>9 PM</option>
                                        <option>10 PM</option>
                                        <option>11 PM</option>
                                        <option>12 AM</option>
                                    </Field>
                                    <ErrorMessage name="endTime">
                                        {(msg) => <p className="text-danger">{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Row>
                                <Col>
                                    Preferred Contact Method:
                                </Col>
                                <Col xs='12' className="mt-2">
                                    <Label>
                                        Phone
                                        <Field
                                            type='radio'
                                            name='contactType'
                                            value='phone'
                                            className='mx-2'
                                        />
                                    </Label>
                                </Col>
                                <Col>
                                    <Label>
                                        Email
                                        <Field
                                            type='radio'
                                            name='contactType'
                                            value='email'
                                            className='mx-3'
                                        />
                                    </Label>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="phone">
                                        Phone Number
                                    </Label>
                                    <Field
                                        name='phone'
                                        id='phone'
                                        placeholder='xxx-xxx-xxxx'
                                        className='form-control'
                                    />
                                    <ErrorMessage name="phone">
                                        {(msg) => <p className="text-danger">{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="email">
                                    Email
                                    </Label>
                                    <Field
                                        name='email'
                                        id='email'
                                        placeholder='Enter Email Here'
                                        className='form-control'
                                    />
                                    <ErrorMessage name="email">
                                        {(msg) => <p className="text-danger">{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm='8' xs='6'>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>
                            <Col>
                                <Button onClick={handleClose} color="danger">
                                    Close
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Formik>
            </ModalBody>
        </Modal>
    )
}

export default RoomForm;