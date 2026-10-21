jest.mock('../apiFetcher', () => ({
  apiFetcher: jest.fn().mockResolvedValue({}),
}));

import { apiFetcher } from '../apiFetcher';
import dialog from './dialog';

const apiUrl = 'https://engine.memori.ai/memori/v2';
const sessionId = '768b9654-e781-4c3c-81fa-ae1529d1bfbe';
const proposalID = 'f1bbc58e-1d60-46c4-ae7f-dfc82926b012';

describe('engine/dialog proposals api', () => {
  const api = dialog(apiUrl);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('postProposalConfirmedEvent applies a proposal', async () => {
    await api.postProposalConfirmedEvent({
      sessionId,
      proposalID,
      apply: true,
    });

    expect(apiFetcher).toHaveBeenCalledWith(
      `/ProposalConfirmedEvent/${sessionId}`,
      {
        apiUrl,
        method: 'POST',
        body: { proposalID, apply: true, parameters: undefined },
      }
    );
  });

  it('postProposalConfirmedEvent sends the fields of a connector', async () => {
    await api.postProposalConfirmedEvent({
      sessionId,
      proposalID,
      apply: true,
      parameters: { WIKIPEDIA_LANG: 'it' },
    });

    expect(apiFetcher).toHaveBeenCalledWith(
      `/ProposalConfirmedEvent/${sessionId}`,
      {
        apiUrl,
        method: 'POST',
        body: { proposalID, apply: true, parameters: { WIKIPEDIA_LANG: 'it' } },
      }
    );
  });

  it('postProposalConfirmedEvent discards a proposal', async () => {
    await api.postProposalConfirmedEvent({
      sessionId,
      proposalID,
      apply: false,
    });

    expect(apiFetcher).toHaveBeenCalledWith(
      `/ProposalConfirmedEvent/${sessionId}`,
      {
        apiUrl,
        method: 'POST',
        body: { proposalID, apply: false, parameters: undefined },
      }
    );
  });
});
