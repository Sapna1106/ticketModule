import React, { useState } from 'react';
import { Input, Select, Button, Divider, Tag, Row, Col, Layout } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
const { Content } = Layout;

const CustomFieldForm = () => {
  const [fieldName, setFieldName] = useState('');
  const [fieldType, setFieldType] = useState('number');
  const [fieldOptions, setFieldOptions] = useState([]);
  const [newOption, setNewOption] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const dataTypes = useSelector((state) => state.dataTypes);
  const [displayNewField, setDisplayNewField] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate= useNavigate();

  const handleAddOption = () => {
    if (newOption) {

      setFieldOptions([...fieldOptions, newOption]);
      setNewOption('');
    }
  };

  const handleAddCustomField = () => {
    if (fieldName && fieldType) {
      if (fieldType === 'single-select' && fieldOptions.length > 0 ) {
        setSelectedOption(fieldOptions[0]); 
      }
      setDisplayNewField(true);
      setButtonClicked(true);
      
    }
  };

  const handleCancel = () => {
    navigate('/my-tasks');
  }

  let fieldTypeInput = null;

  switch (fieldType) {
    case 'number':
      fieldTypeInput = <Input type="number" placeholder="Enter a number" />;
      break;
    case 'text':
      fieldTypeInput = <Input placeholder="Enter text" />;
      break;
    case 'single-select':
      fieldTypeInput = (
        <div>
          <label>
            Options:
            {fieldOptions.map((option, index) => (
              <Tag
                key={index}
                color={option === selectedOption ? 'blue' : 'default'}
                onClick={() => setSelectedOption(option)}
              >
              {option}
              </Tag>
            ))}
            <Button onClick={handleAddOption} >
              Add Option
            </Button>
            <Input
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
              placeholder="Enter a new option"
            />
          </label>
        </div>
      );
      break;
    case 'date':
      fieldTypeInput = <Input type="date" placeholder="Select a date" />;
      break;
      // case 'multi-select': 
      // fieldTypeInput = (
      //   <div>
      //     <label>
      //       Options:
      //       {fieldOptions.map((option, index) => (
      //         <Tag
      //           key={index}
      //           color={selectedOptions.includes(option) ? 'blue' : 'default'}
      //           onClick={() => toggleSelectOption(option)}
      //         >
      //           {option}
      //         </Tag>
      //       ))}
      //     </label>
      //     <Button onClick={handleAddOption}>
      //       Add Option
      //     </Button>
      //     <Input
      //       value={newOption}
      //       onChange={(e) => setNewOption(e.target.value)}
      //       placeholder="Enter a new option"
      //     />
      //     {selectedOptions.length > 0 && (
      //       <div>
      //         <label>
      //           Selected Fields:
      //           {selectedOptions.map((selected, index) => (
      //             <Input
      //               key={index}
      //               value={selected}
      //               placeholder="Enter text"
      //               onChange={(e) => updateSelectedOption(e.target.value, index)}
      //             />
      //           ))}
      //         </label>
      //       </div>
      //     )}
      //   </div>
      // );
      break;

    default:
      fieldTypeInput = null;
  }

  return (
    <Layout style={{ height: '100vh', backgroundColor: 'white' }}>
      <Content style={{ marginTop: '50px',padding: '20px',alignItems: 'center' }}>
        <div>
          <div>
            <label>
              <h2>Custom Field</h2>
            </label>
          </div>

          <div>
            <label>
              Field Name:
              <Input value={fieldName} onChange={(e) => setFieldName(e.target.value)} />
            </label>
          </div>

          <div>
            <label>
              Field Type:
              <Select value={fieldType} onChange={setFieldType}>
                {dataTypes.map((dataType, index) => (
                  <Option key={index} value={dataType}>
                    {dataType}
                  </Option>
                ))}
              </Select>
              <Button onClick={handleAddCustomField}  disabled={!fieldName || !fieldType}>Add</Button>
            </label>
          </div>

          {displayNewField && (
            <div>
              <label>
                {fieldName}
                {fieldTypeInput}
              </label>
            </div>
          )}

          <Divider />
          <Button onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="primary" onClick={handleAddCustomField}>
            Add Custom Field
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default CustomFieldForm;
