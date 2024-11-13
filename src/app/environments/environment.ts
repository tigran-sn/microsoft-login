const CLIENT_ID = '6fd3d66a-d215-4a99-b4d1-b89077d8100c';
const TENANT_ID = 'b3883144-a06c-4fc9-86d2-5fbb05f1414b';

export const environment = {
  production: false, msalConfig: {
    auth: {
      clientId: CLIENT_ID,
      authority: `https://login.microsoftonline.com/${TENANT_ID}`,
    },
  },
  apiConfig: {
    // scopes: [],
    // scopes: ["https://management.azure.com/user_impersonation"],
      scopes: ['user.read'],
    uri: 'https://graph.microsoft.com/v1.0/me',
  },
}
