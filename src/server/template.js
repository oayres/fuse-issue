import React, { Component } from 'react'

class Html extends Component {
  render () {
    return (
      <html lang='en-gb'>
        <head>
          <title>Test</title>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='description' content='Test desc' />
          <meta name='keywords' content='Test keywords' />
          <meta name='mobile-web-app-capable' content='yes' />
          <link href='/assets/styles.css' rel='stylesheet' />
          <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        </head>
        <body>
          <div id='root'>{this.props.children}</div>
          <script src='/assets/bundle.js' />
        </body>
      </html>
    )
  }
}

export default Html
