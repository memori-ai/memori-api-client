jest.mock('../apiFetcher', () => ({
  apiFetcher: jest.fn().mockResolvedValue({}),
}));

import memori from '../index';
import { apiFetcher } from '../apiFetcher';
import governanceRules from './governanceRules';
import { GovernanceRuleSpecs } from '../types';

const apiUrl = 'https://backend.memori.ai/api/v2';
const client = memori('https://backend.memori.ai');
const authToken = '768b9654-e781-4c3c-81fa-ae1529d1bfbe';
const ruleId = 'be2e4a44-890b-483b-a26a-f6e122f36e2b';

const mockSpecs: GovernanceRuleSpecs = {
  title: 'New rule',
  text: 'New rule text',
  categoryID: 'cat-1',
  status: 'Draft',
  scopeType: 'All',
};

describe('backend/governanceRules api', () => {
  const api = governanceRules(apiUrl);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('listGovernanceRules calls the correct endpoint', async () => {
    await api.listGovernanceRules(authToken);

    expect(apiFetcher).toHaveBeenCalledWith(`/GovernanceRules/${authToken}`, {
      apiUrl,
    });
  });

  it('getGovernanceRule calls the correct endpoint', async () => {
    await api.getGovernanceRule(authToken, ruleId);

    expect(apiFetcher).toHaveBeenCalledWith(
      `/GovernanceRule/${authToken}/${ruleId}`,
      {
        apiUrl,
      }
    );
  });

  it('createGovernanceRule calls the correct endpoint', async () => {
    await api.createGovernanceRule(authToken, mockSpecs);

    expect(apiFetcher).toHaveBeenCalledWith(`/GovernanceRule/${authToken}`, {
      apiUrl,
      method: 'POST',
      body: mockSpecs,
    });
  });

  it('updateGovernanceRule calls the correct endpoint', async () => {
    await api.updateGovernanceRule(authToken, ruleId, mockSpecs);

    expect(apiFetcher).toHaveBeenCalledWith(
      `/GovernanceRule/${authToken}/${ruleId}`,
      {
        apiUrl,
        method: 'PATCH',
        body: mockSpecs,
      }
    );
  });

  it('deleteGovernanceRule calls the correct endpoint', async () => {
    await api.deleteGovernanceRule(authToken, ruleId);

    expect(apiFetcher).toHaveBeenCalledWith(
      `/GovernanceRule/${authToken}/${ruleId}`,
      {
        apiUrl,
        method: 'DELETE',
      }
    );
  });

  it('listGovernanceRuleCategories calls the correct endpoint', async () => {
    await api.listGovernanceRuleCategories(authToken);

    expect(apiFetcher).toHaveBeenCalledWith(
      `/GovernanceRuleCategories/${authToken}`,
      {
        apiUrl,
      }
    );
  });
});

describe('backend/governanceRules registration', () => {
  it('works on governanceRules apis', async () => {
    expect(
      await client.backend.governanceRules.listGovernanceRules(authToken)
    ).not.toBeNull();
  });

  it('works on governanceRules apis with shorthand version', async () => {
    expect(await client.backend.listGovernanceRules(authToken)).not.toBeNull();
  });

  it('exposes helper methods on governanceRules namespace', () => {
    expect(client.backend.governanceRules.unwrapGovernanceRules).toBeInstanceOf(
      Function
    );
    expect(client.backend.governanceRules.getCategoryName).toBeInstanceOf(
      Function
    );
  });

  it('exposes helper methods with shorthand version', () => {
    expect(client.backend.unwrapGovernanceRules).toBeInstanceOf(Function);
    expect(client.backend.getCategoryName).toBeInstanceOf(Function);
  });
});
