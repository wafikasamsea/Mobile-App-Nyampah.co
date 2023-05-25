/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import { LogBox } from 'react-native';

AppRegistry.registerComponent('main', () => App);
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications