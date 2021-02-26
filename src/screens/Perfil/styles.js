import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;  
  background-color: #292929;
  align-items: center;
  justify-content: center;
`

export const ExtendedHeaderContainer = styled.View`
  width: 100%;
  height: 58px;
  align-items: center;
  justify-content: space-between;
  background-color: #1F1F1F;
`

export const HeaderContainer = styled.View`
  width: 100%;
  height: 68px;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: #1F1F1F;
`
export const UserTag = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #FFF;
`

export const LogInButton = styled.TouchableOpacity`
  width: 50px;
  height: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
export const LogInIcon = styled.Image`
  width: 19px;
  height: 19px;
  margin-left: 10px;
`

export const AvatarContainer = styled.View`
  width: 115px;
  height: 115px;
  border-radius: 100px;
`

export const ProfileAvatar = styled.Image`
  width: 115px;
  height: 115px;
  border-radius: 100px;
  border-width: 3px;
  border-color: #FFF;
`

export const UserInfoContainer = styled.View`
  flex: 2;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
`

export const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
`

export const Title = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 32px;
`

export const BioContainer = styled.View`
  flex: 3;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
`

export const Text = styled.Text`
  color: #FFF;
`

export const Number = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 40px;
`

export const FollowRepoContainer = styled.View`
  width: 100%;
  height: 97px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: #5252525D;
`

export const NumberGroup = styled.View`
  align-items: center;
  justify-content: center;
`

export const Pill = styled.View`
  position: absolute;
  width: 20px;
  height: 42px;
  border-radius: 100px;
  left: -30px;
  background-color: #FFCE00;
`

export const ArrowIcon = styled.Image`
  width: 30px;
  height: 30px;
`

export const BackButton = styled.TouchableHighlight`
  width: 30px;
  height: 30px;
`