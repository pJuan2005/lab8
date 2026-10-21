import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent gọi AppRegistry.registerComponent('main', () => App);
// Đảm bảo hoạt động trơn tru trên cả Expo Go lẫn Native build
registerRootComponent(App);
