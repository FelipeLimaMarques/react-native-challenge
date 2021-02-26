import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

// Styled Components
import {
  Container,
  FollowRepoContainer,
  NumberGroup,
  TitleContainer,
  Title,
  UserInfoContainer,
  Text,
  Number,
  Pill,
  BioContainer,
  ExtendedHeaderContainer,
  HeaderContainer,
  UserTag,
  LogIntButton,
  LogInIcon,
  AvatarContainer,
  ProfileAvatar,
  ArrowIcon,
  BackButton,
} from './styles'

export default function Perfil({ navigation }) {
  const [data, setData] = useState({
    login: '',
    name: '',
    email: '',
    location: '',
    company: '',
    bio: '',
    avatar_url: '',
    followers_url: '',
    following_url: '',
    organizations_url: '',
    starred_url: '',
    public_repos: '',
    public_gists: '',
    followers: '',
    following: ''
  })

  useEffect(() => {
    let mounted = true;
    return () => mounted = false;
  }, [])

  return (
    <Container>
      <StatusBar style="light" />
      <Header
        navigation={() => navigation.goBack()}
        buttonAction={() => navigation.navigate('Login')}
        data={data}
      />
      <ScrollView style={{ width: '100%' }}>
        <ExtendedHeader
          data={data}
        />
        <UserInfo
          data={data}
        />
        <FollowRepo
          data={data}
        />
        <UserBio
          data={data}
        />
      </ScrollView>
    </Container>
  );
}

function UserBio(props) {
  return (
    <BioContainer>
      <TitleContainer>
        <Pill />
        <Title>BIO</Title>
      </TitleContainer>
      <Text>{props.data.bio}</Text>
    </BioContainer>
  )
}

function FollowRepo(props) {
  return (
    <FollowRepoContainer>
      <NumberGroup>
        <Number>{props.data.followers}</Number>
        <Text>Seguidores</Text>
      </NumberGroup>
      <NumberGroup>
        <Number>{props.data.following}</Number>
        <Text>Seguindo</Text>
      </NumberGroup>
      <NumberGroup>
        <Number>{props.data.public_repos}</Number>
        <Text>Repos</Text>
      </NumberGroup>
    </FollowRepoContainer>
  )
}

function UserInfo(props) {
  return (
    <UserInfoContainer>
      <TitleContainer>
        <Pill />
        <Title>{props.data.name}</Title>
      </TitleContainer>
      <Text>{props.data.email}</Text>
      <Text>{props.data.location}</Text>
    </UserInfoContainer>
  )
}

function Header(props) {
  return (
    <HeaderContainer>
      <BackButton onPress={props.navigation}>
        <ArrowIcon source={require('../../../assets/left-arrow.png')} />
      </BackButton>
      <UserTag>#{props.data.blog}</UserTag>
      <LogInButton onPress={props.buttonAction}>
        <Text>Salvar</Text>
        <LogInIcon source={require('../../../assets/login.png')} />
      </LogInButton>
    </HeaderContainer>
  )
}

function ExtendedHeader() {
  return (
    <ExtendedHeaderContainer>
      <AvatarContainer>
        <ProfileAvatar source={props.data.avatar_url} />
      </AvatarContainer>
    </ExtendedHeaderContainer>
  )
}