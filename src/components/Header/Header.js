import React from 'react'

const Header = props => <div>{props.title}</div>

Header.fetchDataForProps = () => {
  return {
    title: fakeFetch()
  }
}

const fakeFetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Header')
    }, 500)
  })
}

export default Header
