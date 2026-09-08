jest.mock('../apiFetcher', () => ({
  apiFetcher: jest.fn().mockResolvedValue({}),
}));

import { apiFetcher } from '../apiFetcher';
import process from './process';
import governanceExport from './governanceExport';

const apiUrl = 'https://backend.memori.ai/api/v2';
const authToken = '768b9654-e781-4c3c-81fa-ae1529d1bfbe';
const processID = 'be2e4a44-890b-483b-a26a-f6e122f36e2b';

describe('backend/process api', () => {
  const api = process(apiUrl);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('getTenantProcesses calls TenantProcesses with type', async () => {
    await api.getTenantProcesses(authToken, 'GovernanceExport');

    expect(apiFetcher).toHaveBeenCalledWith(
      `/TenantProcesses/${authToken}/GovernanceExport`,
      {
        apiUrl,
        method: 'GET',
      }
    );
  });

  it('getTenantProcesses omits type when not provided', async () => {
    await api.getTenantProcesses(authToken);

    expect(apiFetcher).toHaveBeenCalledWith(`/TenantProcesses/${authToken}`, {
      apiUrl,
      method: 'GET',
    });
  });

  it('getProcessStatus calls ProcessStatus', async () => {
    await api.getProcessStatus(authToken, processID);

    expect(apiFetcher).toHaveBeenCalledWith(
      `/ProcessStatus/${authToken}/${processID}`,
      {
        apiUrl,
        method: 'GET',
      }
    );
  });

  it('stopProcess calls StopProcess', async () => {
    await api.stopProcess(authToken, processID);

    expect(apiFetcher).toHaveBeenCalledWith(
      `/StopProcess/${authToken}/${processID}`,
      {
        apiUrl,
        method: 'POST',
      }
    );
  });
});

describe('backend/governanceExport api', () => {
  const api = governanceExport(apiUrl);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('startGovernanceExport posts to GovernanceExport without a body', async () => {
    await api.startGovernanceExport(authToken);

    expect(apiFetcher).toHaveBeenCalledWith(`/GovernanceExport/${authToken}`, {
      apiUrl,
      method: 'POST',
    });
  });
});
