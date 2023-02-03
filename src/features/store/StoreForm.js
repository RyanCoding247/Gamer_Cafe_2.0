import { useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Row, Col } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateStoreForm } from "../utils/validateStoreForm";

const StoreForm = ({ setModalOpen, modalOpen, mySelection }) => {

    const handleSubmit = () => {
        setModalOpen(false);
        // no current back-end to send to, update when back-end or API is created
    }

    const handleClose = () => {
        setModalOpen(false);
    }

    const store = useSelector((state) => {
        return state.store.storeArray
    })

    const priceValue = store[mySelection].price;

    return (
        <>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Your Selection
                </ModalHeader>
                <ModalBody>
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={{ shirtSize: '', quantity: 0, color: '', price: `${priceValue}`, name: '', address: '', address2: '', city: '', cardState: '', zip: '', payType: '', cardName: '', cardNumber: '', expiration: '', cvv: '' }}
                        validate={validateStoreForm}  >
                        <Form>
                            <h1>{store[mySelection].name}</h1>
                            <img src={store[mySelection].image} className='img-fluid' alt={`${store[0].name}`} />
                            <Row>
                                <Col sm='6'>
                                    <FormGroup>
                                        <Label htmlFor="shirtSize" >
                                            Shirt Size
                                        </Label>
                                        <Field
                                            name='shirtSize'
                                            id='shirtSize'
                                            as='select'
                                            className='form-control'
                                        >
                                            <option>Select...</option>
                                            <option>XS</option>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                            <option>XXL</option>
                                        </Field>
                                        <ErrorMessage name="shirtSize">
                                            {(msg) => <p className="text-danger">{msg}</p>}
                                        </ErrorMessage>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label htmlFor="quantity">
                                            Number of Shirts
                                        </Label>
                                        <Field
                                            name='quantity'
                                            id='quantity'
                                            placeholder='How Many?'
                                            className='form-control'
                                        />
                                        <ErrorMessage name="quantity">
                                            {(msg) => <p className="text-danger">{msg}</p>}
                                        </ErrorMessage>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm='6'>
                                    <FormGroup>
                                        <Label htmlFor="color" >
                                            Shirt Color
                                        </Label>
                                        <Field
                                            name='color'
                                            id='color'
                                            as='select'
                                            className='form-control'
                                        >
                                            <option>Select...</option>
                                            <option>Red</option>
                                            <option>Blue</option>
                                            <option>Black</option>
                                            <option>Green</option>
                                            <option>Navy</option>
                                            <option>Gray</option>
                                        </Field>
                                        <ErrorMessage name="color">
                                            {(msg) => <p className="text-danger">{msg}</p>}
                                        </ErrorMessage>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label htmlFor="price">
                                            Price
                                        </Label>
                                        <Field
                                            name='price'
                                            placeholder='How Many?'
                                            className='form-control'
                                            disabled={store[mySelection].price}
                                        />
                                        <ErrorMessage name="price">
                                            {(msg) => <p className="text-danger">{msg}</p>}
                                        </ErrorMessage>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label htmlFor="name">
                                    Your Name
                                </Label>
                                <Field
                                    name='name'
                                    id='name'
                                    placeholder='Your Full Name'
                                    className='form-control'
                                />
                                <ErrorMessage name="name">
                                    {(msg) => <p className="text-danger">{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="address">
                                    Address
                                </Label>
                                <Field
                                    name='address'
                                    id='address'
                                    placeholder='Address'
                                    className='form-control'
                                />
                                <ErrorMessage name="address">
                                    {(msg) => <p className="text-danger">{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name">
                                    Address 2 (optional)
                                </Label>
                                <Field
                                    name='address2'
                                    id='address2'
                                    placeholder='Address'
                                    className='form-control'
                                />
                                <ErrorMessage name="address2">
                                    {(msg) => <p className="text-danger">{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <Row>
                                <Col sm='5'>
                                    <FormGroup>
                                        <Label htmlFor="city">
                                            City
                                        </Label>
                                        <Field
                                            name='city'
                                            id='city'
                                            placeholder='City'
                                            className='form-control'
                                        />
                                        <ErrorMessage name="city">
                                            {(msg) => <p className="text-danger">{msg}</p>}
                                        </ErrorMessage>
                                    </FormGroup>
                                </Col>
                                <Col sm='3'>
                                    <FormGroup>
                                        <Label htmlFor="cardState">
                                            State
                                        </Label>
                                        <Field
                                            name='cardState'
                                            id='cardState'
                                            placeholder='XX'
                                            className='form-control'
                                        />
                                        <ErrorMessage name="cardState">
                                            {(msg) => <p className="text-danger">{msg}</p>}
                                        </ErrorMessage>
                                    </FormGroup>
                                </Col>
                                <Col sm='4'>
                                    <FormGroup>
                                        <Label htmlFor="zip">
                                            Zip Code
                                        </Label>
                                        <Field
                                            name='zip'
                                            id='zip'
                                            placeholder='XXXXX'
                                            className='form-control'
                                        />
                                        <ErrorMessage name="zip">
                                            {(msg) => <p className="text-danger">{msg}</p>}
                                        </ErrorMessage>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <hr />
                            <h3>Payment Details</h3>
                            <FormGroup>
                                <Col>
                                    <Label>
                                        Credit Card
                                        <Field
                                            type='radio'
                                            name='payType'
                                            value='credit'
                                            className='mx-2'
                                        />
                                    </Label>
                                </Col>
                                <Col>
                                    <Label>
                                        Debit Card
                                        <Field
                                            type='radio'
                                            name='payType'
                                            value='debit'
                                            className='mx-3'
                                        />
                                    </Label>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="cardName">
                                    Name of Cardholder
                                </Label>
                                <Field
                                    id='cardName'
                                    name='cardName'
                                    placeholder='Full Name'
                                    className='form-control'
                                />
                                <ErrorMessage name="cardName">
                                    {(msg) => <p className="text-danger">{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="cardNumber">
                                    Card Number
                                </Label>
                                <Field
                                    name='cardNumber'
                                    id='cardNumber'
                                    placeholder='xxxx-xxxx-xxxx-xxxx'
                                    className='form-control'
                                />
                                <ErrorMessage name="cardNumber">
                                    {(msg) => <p className="text-danger">{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label htmlFor="expiration">
                                            Expiration Date
                                        </Label>
                                        <Field
                                            id='expiration'
                                            name='expiration'
                                            placeholder='xx/xx/xx'
                                            className='form-control'
                                        />
                                        <ErrorMessage name="expiration">
                                            {(msg) => <p className="text-danger">{msg}</p>}
                                        </ErrorMessage>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label htmlFor="cvv">
                                            CVV
                                        </Label>
                                        <Field
                                            id='cvv'
                                            name='cvv'
                                            placeholder='xxx'
                                            className='form-control'
                                        />
                                        <ErrorMessage name="cvv">
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
        </>
    )
};

export default StoreForm;