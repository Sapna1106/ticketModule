import React, { useState } from 'react';
import './customTicket.css';
import { useNavigate } from 'react-router-dom';

function CustomTicket() {
    const [formData, setFormData] = useState({
        fieldName: '',
        datatype: 'text',
        description: '',
    });

    const navigate = useNavigate();

    const datatypes = ['text', 'number', 'date', 'boolean', 'email', 'phone']; // List of predefined datatypes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCustomTicket = () => {
        // Dispatch action or perform any necessary actions with formData
        setFormData({
            fieldName: '',
            datatype: 'text',
            description: '',
        });
        navigate(`/my-tasks`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCustomTicket();
    };

    return (
        <div className="custom-ticket-container">
            <h1 className="custom-ticket-header">Custom Ticket Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="custom-form-label" htmlFor="fieldName">
                        Field Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fieldName"
                        name="fieldName"
                        value={formData.fieldName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="custom-form-label" htmlFor="datatype">
                        Datatype
                    </label>
                    <select
                        name="datatype"
                        className="form-control"
                        id="datatype"
                        value={formData.datatype}
                        onChange={handleChange}
                        required
                    >
                        {datatypes.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="custom-form-label" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        name="description"
                        className="form-control"
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={3}
                        required
                    />
                </div>
                <div className="button-container">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => navigate(`/my-tasks`)}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CustomTicket;
