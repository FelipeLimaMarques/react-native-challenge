import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView } from 'react-native';

// Styled Components
import {
  Container,
  HeaderContainer,
  HeaderTitleContainer,
  HeaderTitle,
  BackArrowIcon,
  TitleContainer,
  Title,
  Text,
  Pill,
  BackButton,
  RepoContainer,
  RepoStatus,
  RepoStar,
  RepoLock,
  RepoStatusGroup,
  Line,
} from './styles'

export default function Repositorios({ navigation }) {
  return (
    <Container>
      <StatusBar style="light" />
      <Header buttonAction={() => navigation.goBack()} />
      <ScrollView style={{ width: '100%' }}>
        <Repo />
        <Line />
        <Repo />
        <Line />
        <Repo />
        <Line />
      </ScrollView>
      
    </Container>
  );
}

function Header (props) {
  return (
    <HeaderContainer>
      <BackButton onPress={props.buttonAction}>
        <BackArrowIcon source={require('../../../assets/left-arrow.png')} />
      </BackButton>
      <HeaderTitleContainer>
        <HeaderTitle>10 Repositórios</HeaderTitle>
      </HeaderTitleContainer>
    </HeaderContainer>
  )
}

function Repo () {
  return (
    <RepoContainer>
      <TitleContainer>
        <Pill />
        <Title>brasiliapp-react-native</Title>
      </TitleContainer>
      <Text>Repository for centralization of the BrasiliApp mobile project</Text>
      <RepoStatus>
        <RepoStatusGroup>
          <RepoStar source={require('../../../assets/star.png')} />
          <Text>32</Text>
        </RepoStatusGroup>
        <RepoStatusGroup>
          <RepoLock source={require('../../../assets/unlock.png')} />
          <RepoLock source={require('../../../assets/lock.png')} />
        </RepoStatusGroup>
      </RepoStatus>
    </RepoContainer>
  )
}