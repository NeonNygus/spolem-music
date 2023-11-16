import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/Home/ProductCard";

const HomeScreen: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts: () => Promise<void> = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Row>
        {products.map((item: ProductType, index: number) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductCard key={index} product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
