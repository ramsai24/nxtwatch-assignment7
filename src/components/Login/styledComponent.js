import styled from 'styled-components'

export const Div = styled.div`
  background-color: ${props => (props.bgColor ? '#212121' : '#f4f4f4')};
  color: ${props => (props.color ? '#ffffff' : '#0f0f0f')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  background-color: ${props => (props.bgColor ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  box-shadow: ${props =>
    props.bgColor
      ? `10px 10px 3px 20px #000000`
      : `10px 10px 80px 20px #ffffff`};
  border: 1px solid green;
  padding: 20px;
`

export const LogoImg = styled.img`
  //   height: 100px;
  width: 60%;
  margin-bottom: 60px;
`
export const Label = styled.label`
  align-self: flex-start;
  font-weight: 500;
  color: ${props => (props.color ? null : '#7e858e')};
  font-size: 16px;
  margin: 5px;
  margin-top: 0px;
  width: 200px;
  flex-shrink: 0;
  border: 1px solid yellow;
`
export const Input = styled.input`
  width: 90%;
  align-self: flex-start;
  margin: 5px;
  padding-left: 10px;
  border: 1px solid #cccccc;
  padding: 5px;
  color: #7e858e;
  font-weight: 500;
`

export const ShowPasswordContainer = styled.div`
  padding: 0px;
  display: flex;
  //   background-color: transparent;
  //   flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  padding-top: 5px;
  //   border:2px solid pink;
`
