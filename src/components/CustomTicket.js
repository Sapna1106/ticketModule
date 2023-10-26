import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCustomField, updateFieldValue } from '../slice/customTaskSlice';
import './customTicket.css';

const CustomTicket = () => {
  const fields = useSelector((state) => state.customFields.fields);
  const formData = useSelector((state) => state.customFields.formData);
  const dataTypes = useSelector((state) => state.dataTypes);
  const dispatch = useDispatch();

  const [newFieldName, setNewFieldName] = useState('');
  const [newOption, setNewOption] = useState('');
  const [selectedFieldType, setSelectedFieldType] = useState('text');
  const [options, setOptions] = useState([]); 

  const handleAddField = () => {
    if (newFieldName.trim() !== '') {
      dispatch(addCustomField({ dataType: selectedFieldType, fieldName: newFieldName }));
      setNewFieldName('');
      setOptions([]);
    }
  };

  const handleAddOption = () => {
    if (newOption.trim() !== '') {
      handleFieldChange(newFieldName, [...(formData[newFieldName] || []), { label: newOption, selected: false }]);
      setNewOption('');
      setOptions([...options, { label: newOption, selected: false }]); 
    }
  };

  const handleOptionSelect = (fieldName, index) => {
    if (formData[fieldName]) {
      const updatedOptions = formData[fieldName].map((option, optionIndex) => {
        if (optionIndex === index) {
          option.selected = !option.selected;
        }
        return option;
      });
  
      handleFieldChange(fieldName, updatedOptions);
    }
  };

  const handleFieldChange = (fieldName, value) => {
    dispatch(updateFieldValue({ fieldName, value }));
  };

  const renderFormFields = () => {
    return fields.map((field, index) => {
      const { dataType, fieldName } = field;
      let inputField;

      if (dataType === 'text') {
        inputField = (
          <input
            type="text"
            placeholder={`Enter ${fieldName}`}
            value={formData[fieldName] || ''}
            onChange={(e) => handleFieldChange(fieldName, e.target.value)}
          />
        );
      } else if (dataType === 'date') {
        inputField = (
          <input
            type="date"
            value={formData[fieldName] || ''}
            onChange={(e) => handleFieldChange(fieldName, e.target.value)}
          />
        );
      } else if (dataType === 'number') {
        inputField = (
          <input
            type="number"
            placeholder={`Enter ${fieldName}`}
            value={formData[fieldName] || ''}
            onChange={(e) => handleFieldChange(fieldName, e.target.value)}
          />
        );
      } else if (dataType === 'boolean') {
        inputField = (
          <input
            type="checkbox"
            checked={formData[fieldName] || false}
            onChange={(e) => handleFieldChange(fieldName, e.target.checked)}
          />
        );
      } else if (dataType === 'single-select' || dataType === 'multi-select') {
        inputField = (
          <div>
            {formData[fieldName] && formData[fieldName].map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="radio"
                  name={`${fieldName}-${optionIndex}`}
                  checked={option.selected}
                  onChange={() => handleOptionSelect(fieldName, optionIndex)}
                />
                {option.label}
              </div>
            ))}
            <input
              type="text"
              placeholder="Add Option"
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
            />
            <button onClick={handleAddOption}>Add Option</button>
            <div>
                <strong>Options:</strong>
                <ul>
                    {options.map((option, optionIndex) => (
                    <label key={optionIndex}>
                        <input
                        type="checkbox"
                        checked={option.selected}
                        onChange={() => handleOptionSelect(fieldName, optionIndex)}
                        />
                        {option.label}
                    </label>
                    ))}
                </ul>
            </div>
          </div>
        );
      } else {
        inputField = <div>Unsupported data type: {dataType}</div>;
      }

      return (
        <div key={index}>
          <label>{fieldName}</label>
          {inputField}
        </div>
      );
    });
  };

  return (
    <div className="custom-ticket-container">
      <h2 className="custom-ticket-header">Custom Ticket</h2>
      <div>
        <input
          type="text"
          placeholder="Field Name"
          value={newFieldName}
          onChange={(e) => setNewFieldName(e.target.value)}
        />
        <select
          className="custom-select"
          value={selectedFieldType}
          onChange={(e) => setSelectedFieldType(e.target.value)}
        >
          {dataTypes.map((dataType) => (
            <option key={dataType} value={dataType}>
              {dataType}
            </option>
          ))}
        </select>
        <button className="custom-submit-button" onClick={handleAddField}>Add Field</button>
      </div>
      {renderFormFields()}
    </div>
  );
};

export default CustomTicket;
