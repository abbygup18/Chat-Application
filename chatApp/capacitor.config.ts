import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'chatApp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
