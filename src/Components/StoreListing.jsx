// Put together the parent elements that were missing from the code snippet.
import { Container, Row, Col, Image } from 'react-bootstrap';

// Changed Kroger to Ralphs. Also changed the browsing location to Los Angeles.
const StoreListings = () => {
  return (
    <Container>
      <h2>Browse stores in Los Angeles</h2>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://www.instacart.com/image-server/60x60/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
          <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
          <p>Delivery * Pickup</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/279/59eb00b1-2e19-4912-bf2e-0c7a1f71f8b1.png" roundedCircle />
          <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
          <p>Delivery * Pickup</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/38/bef2eb95-7375-4547-ab37-21502de090e0.png" roundedCircle />
          <h5 style={{ fontWeight: "bold" }}>Raplhs</h5>
          <p>Pickup</p>
        </Col>
      </Row>
    </Container>
  );
};

export default StoreListings;
