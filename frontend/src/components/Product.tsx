import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

type ProductType = {
  product: {
    _id: string;
    name: string;
    image: string;
    description: string;
    label: string;
    genre: string;
    price: number;
    countInStock: number;
  };
};

const Product = ({ product }: ProductType) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="h3">{product.price}zł</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
