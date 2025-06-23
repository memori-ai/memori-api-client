import memori from './backend/memori';
import user from './backend/user';
import userPwl from './backend/userPwl';
import integration from './backend/integration';
import asset from './backend/asset';
import invitation from './backend/invitation';
import consumptionLogs from './backend/consumptionLogs';
import notifications from './backend/notifications';
import importExport from './backend/importExport';
import process from './backend/process';
import analysis from './backend/analysis';
import completionConfig from './backend/completionConfig';
import badge from './backend/badge';
import tenant from './backend/tenant';

const backendAPI = (apiUrl: string) => ({
  asset: asset(apiUrl),
  memori: memori(apiUrl),
  user: user(apiUrl),
  userPwl: userPwl(apiUrl),
  integration: integration(apiUrl),
  invitation: invitation(apiUrl),
  consumptionLogs: consumptionLogs(apiUrl),
  notifications: notifications(apiUrl),
  importExport: importExport(apiUrl),
  process: process(apiUrl),
  analysis: analysis(apiUrl),
  completionConfig: completionConfig(apiUrl),
  badge: badge(apiUrl),
  tenant: tenant(apiUrl),
  ...asset(apiUrl),
  ...memori(apiUrl),
  ...user(apiUrl),
  ...userPwl(apiUrl),
  ...integration(apiUrl),
  ...invitation(apiUrl),
  ...consumptionLogs(apiUrl),
  ...notifications(apiUrl),
  ...importExport(apiUrl),
  ...process(apiUrl),
  ...analysis(apiUrl),
  ...completionConfig(apiUrl),
  ...badge(apiUrl),
  ...tenant(apiUrl),
});

export default backendAPI;
