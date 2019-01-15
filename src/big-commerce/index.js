import { AppProvider, Page, Card, Button } from '@shopify/polaris'
import ReactDOM from 'react-dom'
import React from 'react'

let rootElement = document.createElement('div')
rootElement.setAttribute('id', 'app')
document.body.appendChild(rootElement)

ReactDOM.render(
  <AppProvider>
    <Page title="Big Commerce page">
      <Card sectioned>
        <Button onClick={() => alert('Button clicked!')}>Example button</Button>
      </Card>
    </Page>
  </AppProvider>,
  rootElement
)
