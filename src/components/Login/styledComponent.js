import styled from 'styled-components'

export const Div = styled.div`
  background-color: ${props => (props.bgColor ? '#212121' : '#f4f4f4')};
  color: ${props => (props.color ? '#ffffff' : '#0f0f0f')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  @media screen and (max-width: 576px) {
    width: 500px;
    font-size: 14px;
  }
`

export const Form = styled.form`
  background-color: ${props => (props.bgColor ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 600px;

  box-shadow: ${props =>
    props.bgColor
      ? `10px 10px 3px 20px #000000`
      : `10px 10px 80px 20px #ffffff`};
  //   border: 1px solid green;
  padding: 20px;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`

export const LogoImg = styled.img`
  //   height: 100px;
  width: 60%;
  margin-bottom: 60px;
  align-self: center;
`
export const Label = styled.label`
  align-self: flex-start;
  font-weight: 500;
  color: ${props => props.colors && '#7e858e'};
  font-size: 16px;
  margin: 5px;
  margin-top: 0px;
  //   width: 200px;
  flex-shrink: 0;
  padding-top: 10px;
  padding-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
  //   border: 1px solid yellow;
`
export const Input = styled.input`
  width: 88%;
  align-self: flex-start;
  margin: 5px;
  padding-left: 10px;
  border: 1px solid #cccccc;
  padding: 5px;
  color: #7e858e;
  font-weight: 500;
  padding: 10px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 600;
`

export const ShowPasswordContainer = styled.div`
  padding: 0px;
  display: flex;
  //   background-color: transparent;
  //   flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 18px;
  //   border:2px solid pink;
`

export const SubmitBtn = styled.button`
  align-self: stretch;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 3px;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: bolder;
  font-size: 18px;
  width: 90%;
`

export const Para = styled.p``

export const ErrorPara = styled(Para)`
  color: #ff0b37;
  font-weight: 500;
  font-size: 14px;
`
