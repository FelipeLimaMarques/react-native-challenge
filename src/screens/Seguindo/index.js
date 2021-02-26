import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView } from 'react-native';

// Styled Components
import {
  Container,
  HeaderContainer,
  HeaderTitleContainer,
  HeaderTitle,
  FollowerContainer,
  FollowerButton,
  FollowerGroup,
  AvatarContainer,
  ProfileAvatar,
  FollowerTag,
  Pill,
  Line,
  ArrowIcon,
  BackButton,
} from './styles'

export default function Seguindo({ navigation }) {
  return (
    <Container>
      <StatusBar style="light" />
      <Header buttonAction={() => navigation.goBack()} />
      <ScrollView style={{ width: '100%' }}>
        <Following buttonAction={() => navigation.navigate('Perfil')}/>
        <Line />
        <Following buttonAction={() => navigation.navigate('Perfil')}/>
        <Line />
        <Following buttonAction={() => navigation.navigate('Perfil')}/>
        <Line />
      </ScrollView>
    </Container>
  );
}

function Header (props) {
  return (
    <HeaderContainer>
      <BackButton onPress={props.buttonAction}>
        <ArrowIcon source={require('../../../assets/left-arrow.png')} />
      </BackButton>
      <HeaderTitleContainer>
        <HeaderTitle>10 Seguindo</HeaderTitle>
      </HeaderTitleContainer>
    </HeaderContainer>
  )
}

function Following (props) {
  return (
    <FollowerButton onPress={props.buttonAction}>
      <FollowerContainer>
        <FollowerGroup>
          <Pill />
          <AvatarContainer>
            <ProfileAvatar source={require('../../../assets/profile_pic.jpg')} />
          </AvatarContainer>
          <FollowerTag>#aniltonveiga</FollowerTag>
        </FollowerGroup>
        <ArrowIcon source={require('../../../assets/right-arrow.png')}/>
      </FollowerContainer>
    </FollowerButton>
  )
}