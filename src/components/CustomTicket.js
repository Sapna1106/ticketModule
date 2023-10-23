import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './customTicket.css'

function CustomTicket() {
    const [formData, setFormData] = useState({
        fieldName: '',
        datatype: 'text',
        description: '',
    });

    const datatypes = ['text', 'number', 'date', 'boolean', 'email', 'phone']; // List of predefined datatypes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="custom-ticket-container">
            <h1 className="custom-ticket-header">Custom Ticket Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="custom-form-group">
                    <Form.Label className="custom-form-label">Field Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="fieldName"
                        value={formData.fieldName}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="custom-form-group">
                    <Form.Label className="custom-form-label">Datatype</Form.Label>
                    <Form.Control
                        as="select"
                        name="datatype"
                        value={formData.datatype}
                        onChange={handleChange}
                        className="custom-select"
                        required
                    >
                        {datatypes.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="custom-form-group">
                    <Form.Label className="custom-form-label">Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={3}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="custom-submit-button">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default CustomTicket;
