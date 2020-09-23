import React from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';
import MenuApp from './Menu/Menu';

const HeaderApp = () => (
    <div>
      <Header as='h2' icon textAlign='center'>
        <Icon name='talk' circular />
        <Header.Content>Welcome to Matisse Personnal Voice Assistant - WONG </Header.Content>
        <MenuApp />
      </Header>
    </div>
)
  
  export default HeaderApp;