import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const Sundar = () => (

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Washington' + '.png'}
        />
        <Card.Header>Washington Sundar</Card.Header>
        <Card.Meta>Allrounder Points: 8.5 </Card.Meta>
        <Card.Description>
          <strong>Royal Challengers Bangalore</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='red'>
            Remove
          </Button>
        </div>
      </Card.Content>
    </Card>



)

export default Sundar