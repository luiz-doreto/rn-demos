import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

const TabsLayout = () => (
  <NativeTabs>
    <NativeTabs.Trigger name="index">
      <Icon sf="star.fill" drawable="ic_menu_compass" />
      <Label>Glass Basic</Label>
    </NativeTabs.Trigger>
    <NativeTabs.Trigger name="advanced">
      <Icon sf="wand.and.stars" drawable="ic_menu_manage" />
      <Label>Glass Advanced</Label>
    </NativeTabs.Trigger>
  </NativeTabs>
);

export default TabsLayout;
