import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SubHeader = ({ current }) => {
    return (
        <Row >
            <Col className='d-flex justify-content-center'>
                <Breadcrumb>
                    <BreadcrumbItem >
                        <Link to='/' style={{color: 'black'}}>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active style={{color: 'white'}}>{current}</BreadcrumbItem>
                </Breadcrumb>
            </Col>
        </Row>
    )
};

export default SubHeader;