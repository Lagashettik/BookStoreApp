import React from 'react';
import { Text } from 'react-native';
import SignIn from './src/components/authentication/signIn';
import Registration from './src/components/authentication/registration';
import ApplicationStack from './src/navigation/applicationStack';
const App = () => {

  return (
    // <Text>Welcome to Bookstore</Text>
    // <SignIn />
    // <Registration />
    <ApplicationStack />
  );
};

export default App;