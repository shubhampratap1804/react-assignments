import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const DetailedProject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const project = location.state?.project;

  const handleClose = () => {
    navigate('/project'); // Navigate back to the projects page
  };

  // Handle the case when project data is missing
  if (!project) {
    return (
      <div>
        <h2>No Project Data</h2>
        <Button variant="primary" onClick={() => navigate('/')}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <Modal show={true} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{project.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailedProject;
