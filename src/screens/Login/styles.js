import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #292929;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`

export const LoginContainer = styled.View`
  width: 100%;
  height: 130px;
  align-items: center;
  justify-content: space-around;
`

export const Text = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 24px;
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #FFCE00;
`

export const Input = styled.TextInput.attrs(props => ({
  type: "text",
}))`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 24px;
  color: #535353;
  background-color: #FFF;
  border: 2px solid #E5E5E5;
`
export const LogoContainer = styled.View`
  width: 98px;
  height: 98px;
  margin-bottom: 50px;
`

export const Logo = styled.Image`
  width: 98px;
  height: 98px;
`

export const Arrow = styled.Image`
  width: 25px;
  height: 25px;
  margin-left: 10px;
`