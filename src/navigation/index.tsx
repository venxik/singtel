/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import {
  MainScreen,
  QuestionFailedScreen,
  QuestionScreen,
  QuestionSuccessScreen,
  LeaderboardScreen,
} from '../screens';
import { RootStackParamList } from './types';
import LinkingConfiguration from './LinkingConfiguration';

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
      <Stack.Screen
        name="QuestionSuccessScreen"
        component={QuestionSuccessScreen}
        initialParams={{ points: 0 }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuestionFailedScreen"
        component={QuestionFailedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LeaderboardScreen"
        component={LeaderboardScreen}
        options={{ title: 'Leaderboards' }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
export * from './types';
