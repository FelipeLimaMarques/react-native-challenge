import axios from 'axios'

export async function getUser (setData, input) {
    const github = axios.create({baseURL: 'https://api.github.com/'})

    await github.get(`users/${input}`)
    .then(res => {
        console.log(res)
      !res
        ? console.log('Erro')
        : setData(res.data)
    })
    .catch(e => {
      console.error(e)
    })
}

export async function getUserFollowers (setData, input) {
  const github = axios.create({baseURL: 'https://api.github.com/'})

  await github.get(`users/${input}/followers`)
  .then(res => {
      console.log(res)
    !res
      ? console.log('Erro')
      : setData(res.data)
  })
  .catch(e => {
    console.error(e)
  })
}

export async function getUserFollowing (setData, input) {
  const github = axios.create({baseURL: 'https://api.github.com/'})

  await github.get(`users/${input}/following`)
  .then(res => {
      console.log(res)
    !res
      ? console.log('Erro')
      : setData(res.data)
  })
  .catch(e => {
    console.error(e)
  })
}

export async function getUserRepos (setData, input) {
  const github = axios.create({baseURL: 'https://api.github.com/'})

  await github.get(`users/${input}/repos`)
  .then(res => {
      console.log(res)
    !res
      ? console.log('Erro')
      : setData(res.data)
  })
  .catch(e => {
    console.error(e)
  })
}