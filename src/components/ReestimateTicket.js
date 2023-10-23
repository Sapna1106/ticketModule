import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './reestimateTicket.css'

function ReestimateTicket() {
    const [formData, setFormData] = useState({
        newDate: '',
        reason: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="reestimate-ticket-container">
            <h1 className="reestimate-ticket-header">Re-estimate Ticket Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="reestimate-form-group">
                    <Form.Label className="reestimate-form-label">New Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="newDate"
                        value={formData.newDate}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="reestimate-form-group">
                    <Form.Label className="reestimate-form-label">Reason</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        rows={3}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="reestimate-submit-button">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ReestimateTicket;
