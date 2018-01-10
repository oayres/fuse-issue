import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'
import { useStaticRendering } from 'mobx-react'
import cohere from './middleware/cohere'
import staticResources from './middleware/staticResources'
import routes from '../routes'

useStaticRendering(true)

const app = express()
const renderer = cohere({ routes })

app.use(staticResources(app, express))
app.use(helmet())
app.use(compression())
app.use(bodyParser.json({ limit: '2mb' }))
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }))

app.get('/*', renderer)

export default app
