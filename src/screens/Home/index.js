import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

// Axios
import { getUser } from '../../axios'

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
  LogOutButton,
  LogOutIcon,
  AvatarContainer,
  ProfileAvatar,
} from './styles'

export default function Home ({ navigation, route }) {
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
    const { username } = route.params
    getUser(setData, username)
    return () => mounted = false;
  }, [])

  return (
    <Container>
      <StatusBar style="light" />
      <Header
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

function UserBio (props) {
  return (
    <BioContainer>
      <TitleContainer>
        <Pill />
        <Title>BIO</Title>
      </TitleContainer>
      {
        !props.data.bio
          ? <Text></Text>
          : <Text>{props.data.bio}</Text>
      }
    </BioContainer>
  )
}

function FollowRepo (props) {
  return (
    <FollowRepoContainer>
      <NumberGroup>
        {
          !props.data.followers
            ? <Number>0</Number>
            : <Number>{props.data.followers}</Number>
        }
        <Text>Seguidores</Text>
      </NumberGroup>
      <NumberGroup>
        {
          !props.data.following
            ? <Number>0</Number>
            : <Number>{props.data.following}</Number>
        }
        <Text>Seguindo</Text>
      </NumberGroup>
      <NumberGroup>
        {
          !props.data.public_repos
            ? <Number>0</Number>
            : <Number>{props.data.public_repos}</Number>
        }
        <Text>Repos</Text>
      </NumberGroup>
    </FollowRepoContainer>
  )
}

function UserInfo (props) {
  return (
    <UserInfoContainer>
      <TitleContainer>
        <Pill />
        {
          !props.data.name
            ? <Title></Title>
            : <Title>{props.data.name}</Title>
        }
      </TitleContainer>
        {
          !props.data.email
            ? <Text></Text>
            : <Text>{props.data.email}</Text>
        }
        {
          !props.data.location
            ? <Text></Text>
            : <Text>{props.data.location}</Text>
        }
    </UserInfoContainer>
  )
}

function Header (props) {
  return (
    <HeaderContainer>
        {
          !props.data.login
            ? <UserTag>#</UserTag>
            : <UserTag>#{props.data.login}</UserTag>
        }
      <LogOutButton onPress={props.buttonAction}>
        <Text>Sair</Text>
        <LogOutIcon source={require('../../../assets/logout.png')} />
      </LogOutButton>
    </HeaderContainer>
  )
}

function ExtendedHeader (props) {
  return (
    <ExtendedHeaderContainer>
      <AvatarContainer>
        {
          !props.data.avatar_url
            ? <ProfileAvatar source={require('../../../assets/github.png')} />
            : <ProfileAvatar source={{ uri: props.data.avatar_url }} />
        }
        
      </AvatarContainer>
    </ExtendedHeaderContainer>
  )
}