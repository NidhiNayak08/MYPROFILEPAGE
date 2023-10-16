import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';

const FormContainer = styled.div`
  max-width: 400px;
  min-height: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Name = styled.div`
  border: 2px solid black;
`;

const SubmitButton = styled.button`
  background-color: #cc99ff;
  color: white;
  padding: 10px 20px;
  margin-top: 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a64dff;
  }
`;


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    // Use navigate to redirect to the Result page with query parameters
    navigate(`/result?name=${name}&email=${email}`);
  };
  return (
    <FormContainer>
    <form>
  <div>
    <h1>Contact Us</h1>
    
    <label htmlFor="name">Name : </label>
    <Name>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
     </Name>
     </div>
    <br></br>
    <div>
      <label htmlFor="email">Email : </label>
      <Name>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </Name>
    </div>
    <div>
      <SubmitButton  type="button" onClick={handleSubmit}>
        Submit
      </SubmitButton>
    
  </div>
  </form>
  </FormContainer>
  );
}


export default Contact;

