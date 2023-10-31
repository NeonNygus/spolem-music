import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Hottest Products</h1>
      <Row>
        {products.map((item, index) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductCard key={index} product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
