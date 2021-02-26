import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;  
  background-color: #292929;
  align-items: center;
  justify-content: center;
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

export const BackArrowIcon = styled.Image`
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

export const Title = styled.Text`
  color: #FFF;
  top: 8px;
  font-weight: bold;
  font-size: 20px;
`

export const RepoContainer = styled.View`
  width: 100%;
  height: 200px;
  padding-top: 50px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
`

export const Line = styled.View`
  width: 100%;
  height: 0px;
  border: 0.2px solid #707070;
`

export const RepoStatus = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const RepoStatusGroup = styled.View`
  width: auto;
  flex-direction: row;
  justify-content: space-between;
`

export const RepoStar = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`

export const RepoLock = styled.Image`
  width: 20px;
  height: 20px;
`

export const Text = styled.Text`
  color: #FFF;
`

export const Pill = styled.View`
  position: absolute;
  width: 20px;
  height: 42px;
  border-radius: 100px;
  left: -30px;
  background-color: #FFCE00;
`