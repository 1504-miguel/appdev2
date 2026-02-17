import { registerRootComponent } from 'expo';

// import Flexs from './components/Flex';
// import FlexDirectionBasics from './components/FlexDirection';
// import LayoutDirection from './components/LayoutDirection';
// import JustifyContentBasics from './components/JustifyContent';
import AlignSelfLayout from './components/AlignSelfLayout';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(AlignSelfLayout);
