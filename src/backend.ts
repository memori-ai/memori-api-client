import memori from './backend/memori';
import user from './backend/user';
import integration from './backend/integration';
import asset from './backend/asset';
import invitation from './backend/invitation';

const backendAPI = (apiUrl: string) => ({
  asset: asset(apiUrl),
  memori: memori(apiUrl),
  user: user(apiUrl),
  integration: integration(apiUrl),
  invitation: invitation(apiUrl),
  ...asset(apiUrl),
  ...memori(apiUrl),
  ...user(apiUrl),
  ...integration(apiUrl),
  ...invitation(apiUrl),
});

export default backendAPI;
