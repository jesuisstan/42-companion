export default {
  expo: {
    name: '42-companion',
    slug: '42-companion',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: '42-companion',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#00babc'
    },
    android: {
      package: 'com.krivtsoff.companion42',
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#00babc'
      },
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png'
    },
    plugins: ['expo-router'],
    experiments: {
      typedRoutes: true
    },
    extra: {
      router: {
        origin: false
      },
      eas: {
        "projectId": "7c7f4dce-7121-40d4-b98a-fa7862973758"
      }
    },
    owner: 'jesuisstan'
  }
};
