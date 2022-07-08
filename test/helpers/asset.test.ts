import asset from '../../src/helpers/asset';

const apiUrl = 'https://backend.memori.ai/api/v2';
const { getResourceUrl } = asset(apiUrl);

describe('Asset URL helper', () => {
  const sessionId = 'a196b513-d745-4121-8913-8f457b999add';
  const mediumId = 'f469e3e9-1a45-47df-abf3-eeaa01707510';

  it('Get default avatar URL with no url', async () => {
    expect(
      getResourceUrl({
        type: 'avatar',
        baseURL: 'https://twin.memori.ai',
      })
    ).toBe('https://twin.memori.ai/images/memoriAvatar.png');
  });
  it('Get default cover URL with no url', async () => {
    expect(
      getResourceUrl({
        type: 'cover',
        baseURL: 'https://twin.memori.ai',
      })
    ).toBe('https://twin.memori.ai/images/memoriCover.png');
  });

  it('Get correct URL for media', async () => {
    expect(
      getResourceUrl({
        resourceURI:
          'https://api.lorem.space/image/game?w=150&h=220&hash=8B7BCDC2',
      })
    ).toBe('https://api.lorem.space/image/game?w=150&h=220&hash=8B7BCDC2');
  });

  it('Get correct URL for old memoriai/memory media', async () => {
    expect(
      getResourceUrl({
        resourceURI:
          'https://backend.memori.ai/api/v1/memoriai/memory/2d434f42-3e95-46ad-9bd5-a10b65977407/media/cloud/studio.memori.ai/2f7b56d1-06a2-4908-9dd3-ef30359b5d05.jpeg',
        sessionID: sessionId,
      })
    ).toBe(
      `https://backend.memori.ai/api/v1/memoriai/memory/2d434f42-3e95-46ad-9bd5-a10b65977407/media/cloud/studio.memori.ai/2f7b56d1-06a2-4908-9dd3-ef30359b5d05.jpeg?memori-ai-session-id=${sessionId}`
    );
  });

  it('Get correct URL for old cloud://tenantID media', async () => {
    expect(
      getResourceUrl({
        resourceURI: `cloud://twin.memori.ai/${mediumId}.png`,
        sessionID: sessionId,
      })
    ).toBe(
      `${apiUrl.replace('v2', 'v1')}/CloudAsset/twin.memori.ai/${mediumId}.png`
    );
  });

  it('Get correct URL for old cloud://tenantID media', async () => {
    expect(
      getResourceUrl({
        // cloud://twin.memori.ai/5fc7cd8b-7c8f-4d92-83ad-f48d04b6aafe.jpeg
        resourceURI: `cloud://twin.memori.ai/5fc7cd8b-7c8f-4d92-83ad-f48d04b6aafe.jpeg
`,
        sessionID: sessionId,
      })
    ).toBe(
      `${apiUrl.replace(
        'v2',
        'v1'
      )}/CloudAsset/twin.memori.ai/5fc7cd8b-7c8f-4d92-83ad-f48d04b6aafe.jpeg
`
    );
  });

  it('Get correct URL for old cloud://tenantID media', async () => {
    expect(
      getResourceUrl({
        resourceURI:
          'cloud://twin.memori.ai/6c30043c-9de1-4d13-87e4-c53adb3f9885.jpg',
        sessionID: sessionId,
      })
    ).toBe(
      `${apiUrl.replace(
        'v2',
        'v1'
      )}/CloudAsset/twin.memori.ai/6c30043c-9de1-4d13-87e4-c53adb3f9885.jpg`
    );
  });

  it('Get correct URL for old cloud://tenantID media with old non-existent tenant', async () => {
    expect(
      getResourceUrl({
        // cloud://twin.memori.ai/5fc7cd8b-7c8f-4d92-83ad-f48d04b6aafe.jpeg
        resourceURI: `cloud://twin.memori.ai/5fc7cd8b-7c8f-4d92-83ad-f48d04b6aafe.jpeg
`,
        sessionID: sessionId,
      })
    ).toBe(
      `${apiUrl.replace(
        'v2',
        'v1'
      )}/CloudAsset/twin.memori.ai/5fc7cd8b-7c8f-4d92-83ad-f48d04b6aafe.jpeg
`
    );
  });

  it('Get correct URL for old guid://tenant media', async () => {
    expect(
      getResourceUrl({
        resourceURI: `guid://${mediumId}`,
        sessionID: sessionId,
      })
    ).toBe(`${apiUrl.replace('v2', 'v1')}/GuidAsset/${mediumId}`);
  });
});
