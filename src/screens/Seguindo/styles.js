import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;  
  background-color: #292929;
  align-items: center;
  justify-content: center;
`

export const AvatarContainer = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 100px;
`

export const ProfileAvatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  border-width: 3px;
  border-color: #FFF;
`

export const HeaderContainer = styled.View`
  width: 100%;
  height: 68px;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #1F1F1F;
`

export const BackButton = styled.TouchableHighlight`
  width: 30px;
  height: 30px;
`

export const ArrowIcon = styled.Image`
  width: 30px;
  height: 30px;
`

export const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
`

export const HeaderTitleContainer = styled.View`
  width: 85%;
  height: auto;
  align-items: center;
  justify-content: center;
  margin-right: auto;
`

export const HeaderTitle = styled.Text`
  font-size: 16px;
  color: #FFF;
  font-weight: bold;
`

export const FollowerTag = styled.Text`
  color: #FFF;
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;
`

export const FollowerButton = styled.TouchableHighlight`
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;
`

export const FollowerContainer = styled.View`
  width: 100%;
  height: 150px;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const FollowerGroup = styled.View`
  width: 70%;
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Line = styled.View`
  width: 100%;
  height: 0px;
  border: 0.2px solid #707070;
`

export const Pill = styled.View`
  width: 20px;
  height: 42px;
  border-radius: 100px;
  left: -12px;
  background-color: #FFCE00;
`