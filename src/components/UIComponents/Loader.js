import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import AutorenewIcon from '@material-ui/icons/Autorenew';

const LoaderIcon = () => (
    <Segment>
      <Dimmer active>
        <Loader />
      </Dimmer>
  
      <AutorenewIcon fontSize="large"/>
    </Segment>
  )
  

export default LoaderIcon
