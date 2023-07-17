import memori from './backend/memori';
import user from './backend/user';
import integration from './backend/integration';
import asset from './backend/asset';
import invitation from './backend/invitation';
import consumptionLogs from './backend/consumptionLogs';
import notifications from './backend/notifications';
import importExport from './backend/importExport';

const backendAPI = (apiUrl: string) => ({
  asset: asset(apiUrl),
  memori: memori(apiUrl),
  user: user(apiUrl),
  integration: integration(apiUrl),
  invitation: invitation(apiUrl),
  consumptionLogs: consumptionLogs(apiUrl),
  notifications: notifications(apiUrl),
  importExport: importExport(apiUrl),
  ...asset(apiUrl),
  ...memori(apiUrl),
  ...user(apiUrl),
  ...integration(apiUrl),
  ...invitation(apiUrl),
  ...consumptionLogs(apiUrl),
  ...notifications(apiUrl),
  ...importExport(apiUrl),
});

export default backendAPI;
