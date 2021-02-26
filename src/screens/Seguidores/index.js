import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { View } from 'react-native'

// Axios
import { getUserFollowers } from '../../axios'

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

export default function Seguidores({ navigation, route }) {
  const [list, setList] = useState([])

  useEffect(() => {
    let mounted = true;
    const { username } = route.params
    getUserFollowers(setList, username)
    console.log(list)
    return () => mounted = false;
  }, [])

  return (
    <Container>
      <StatusBar style="light" />
      <Header
        buttonAction={() => navigation.goBack()}
        data={list}
      />
      <ScrollView style={{ width: '100%' }}>
        {
          !list
          ? <Text>Sem seguidores</Text>
          : mapList(list)
        }
      </ScrollView>
    </Container>
  );
}

function mapList (list) {
  return list.map((data, index) => {
    return <View key={index}>
        <Follower
          buttonAction={() => navigation.navigate('Perfil', { username: data.login })}
          data={data}
        />
        <Line />
    </View>
  })
}

function Header (props) {
  return (
    <HeaderContainer>
      <BackButton onPress={props.buttonAction}>
        <ArrowIcon source={require('../../../assets/left-arrow.png')} />
      </BackButton>
      <HeaderTitleContainer>
        {
          !props.list.length
            ? <HeaderTitle>0 Seguidores</HeaderTitle>
            : <HeaderTitle>{props.list.length} Seguidores</HeaderTitle>
        }
      </HeaderTitleContainer>
    </HeaderContainer>
  )
}

function Follower (props) {
  return (
    <FollowerButton onPress={props.buttonAction}>
      <FollowerContainer>
        <FollowerGroup>
          <Pill />
          <AvatarContainer>
            {
              !props.list.avatar_url
              ? <ProfileAvatar source={require('../../../assets/github.png')} />
              : <ProfileAvatar source={{ uri: props.list.avatar_url }} />
            }
          </AvatarContainer>
          {
            !props.list.login
            ? <FollowerTag>#</FollowerTag>
            : <FollowerTag>#{props.list.login}</FollowerTag>
          }
        </FollowerGroup>
        <ArrowIcon source={require('../../../assets/right-arrow.png')}/>
      </FollowerContainer>
    </FollowerButton>
  )
}