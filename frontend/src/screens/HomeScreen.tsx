import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <>
      <h1>Hottest Products</h1>
      <Row>
        {products.map((item, index) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product key={index} product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
