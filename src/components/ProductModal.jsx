import { Modal, Button } from "react-bootstrap";

function ProductModal({ product, onClose, onAdd }) {

  if (!product) return null;

  return (

    <Modal show={true} onHide={onClose} centered>

      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <img
          src={product.image}
          alt={product.title}
          className="img-fluid mb-3"
        />

        <p style={{ color: '#333' }}>{product.description}</p>

        <h4>Precio: ${product.price}</h4>

      </Modal.Body>

      <Modal.Footer>

        <Button variant="danger" onClick={onClose}>
          Cerrar
        </Button>

        <Button
          variant="primary"
          onClick={() => {
            onAdd(product, 1);
            onClose();
          }}
        >
          Agregar al carrito
        </Button>

      </Modal.Footer>

    </Modal>
  );
}

export default ProductModal;