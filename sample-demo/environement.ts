export const environment = {
    production: false,
    serverUrl: '/api',
    keycloak: {
      // Url of the Identity Provider
      issuer: 'http://localhost:8080',
      // Realm
      realm: 'sampleApplication',
      clientId: 'sample-demo',
    },
  };