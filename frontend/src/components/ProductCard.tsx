import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

type ProductType = {
  product: {
    _id: string;
    title: string;
    artist: string;
    format: string;
    genre: string[];
    year: number;
    country: string;
    description: string;
    tracklist: {
      trackName: string;
      trackLength: number;
      trackArtist?: string;
    }[];
    label: string;
    catalogueNum: string;
    coverImage: string;
    previewMusic: string;
    productRating: number;
    countInStock: number;
    price: number;
    productReviews?: {
      user: string;
      reviewRating: number;
      reviewComment: string;
    }[];
  };
};

const ProductCard = ({ product }: ProductType) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.coverImage} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title
            as="div"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <strong>{product.title}</strong>
          </Card.Title>
        </Link>
        <Link to={`/product/${product._id}`}>
          <Card.Title
            as="div"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <h6>{product.artist}</h6>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating value={product.productRating} />
        </Card.Text>
        <Card.Text as="h3">{product.price}zł</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
