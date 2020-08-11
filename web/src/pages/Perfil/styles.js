import styled from 'styled-components';

export const Header = styled.div`
  width: 80em;
  padding: 60px;
`;

export const Button = styled.button`
  margin-left: 15px;
  text-align: center;
  width: 240px;
  height: 40px;
  border-radius: 4px;
  font-family: 30;
  border: 0;
  border: 1px solid #ccc;
  background-color: #328dff;
  color: #fff;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

export const PicturePreview = styled.img`
  display: block;
  background: #ccc;
  height: 120px;
  width: 120px;
  border-radius: 6%;
  border: 5px rgba 0, 0, 0, 1 #328dff;
  box-shadow: 0px 1px 16px 0px rgba(48, 50, 50, 0.91);
`;

export const FaCloudUploadAlt = styled.img`
  padding: 40em;
`;

export const Body = styled.div`
  padding: 50px;
  padding-top: 10px;
  font-family: Montserrat;
`;
