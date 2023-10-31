import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import axios from "axios";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const [product, setProduct] = useState([]);
  const { id: productId } = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md="5">
          <Image src={product?.coverImage} alt={product?.title} fluid />
        </Col>
        <Col md="4">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product?.title}</h3>
              <h4>{product?.artist && product.artist}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product?.productRating} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Rodzaj:</Col>
                <Col>
                  {product?.genre && product?.genre.map((g) => <p>{g}</p>)}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Wytwórnia:</Col>
                <Col>{product?.label}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Cena:</Col>
                <Col>{product?.price}zł</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md="3">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Cena:</Col>
                  <Col>
                    <strong>{product?.price}zł</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {product?.countInStock > 0 ? (
                  <strong style={{ color: "#47ba0d" }}>W Magazynie</strong>
                ) : (
                  <strong style={{ color: "#ba270d" }}>Brak w magazynie</strong>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product?.countInStock === 0}
                >
                  Dodaj do koszyka
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row className="my-5 w-50">
        <audio controls src={product?.previewMusic} />
      </Row>
    </>
  );
};

export default ProductScreen;
