import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #2f3c4b;
  min-height: 110vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;

  padding: 20px 0px;
`;

export const Form = styled.div`
  background: #fff;
  padding: 0px 3rem 3rem 3rem;
  border-radius: 10px;
  margin: 20px 0px;
  max-width: 800px;
  width: 380px;
`;

export const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  `;

export const Input = styled.input`
  padding: 10px;
  border: 0;
  height: 40px;
  border: 1px solid #ccc;
  margin: 0px 10px 10px 0px;
  border-radius: 4px;
  width: 300px;
  background-color: -internal-light-dark-color(white, black);
  color: -internal-light-dark-color(black, white);
`;

export const SignUpContent = styled.div``;

export const SignUpButton = styled.button`
  margin-right: 7px;
`;

export const SignUpGroup = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 20px;
`;

export const SocialSignUp = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
