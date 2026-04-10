const { test, expect } = require('@playwright/test');
const ApiClient = require('./apiClient');
const { API_BASE_URL, DEFAULT_HEADERS, TIMEOUT } = require('./apiConfig');

/**
 * Simple API automation framework example with reqres.in public API.
 * Use `npx playwright test tests/api` to run API tests.
 */

test.describe('API automation framework - reqres.in', () => {
  let apiClient;

  test.beforeEach(async ({ request }) => {
    apiClient = new ApiClient(request, API_BASE_URL, DEFAULT_HEADERS);
  });

  test('GET list users returns 200 and data array', async () => {
    const response = await apiClient.get('/users?page=2', { timeout: TIMEOUT });
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('page', 2);
    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data.length).toBeGreaterThan(0);
  });

  test('POST create user returns 201 and id', async () => {
    const payload = { name: 'test-user', job: 'automation' };
    const response = await apiClient.post('/users', payload, { timeout: TIMEOUT });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toMatchObject({ name: 'test-user', job: 'automation' });
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('createdAt');
  });

  test('PUT update user returns 200 and updated job', async () => {
    const payload = { name: 'test-user', job: 'updated-automation' };
    const response = await apiClient.put('/users/2', payload, { timeout: TIMEOUT });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toMatchObject({ name: 'test-user', job: 'updated-automation' });
    expect(body).toHaveProperty('updatedAt');
  });

  test('DELETE user returns 204', async () => {
    const response = await apiClient.delete('/users/2', { timeout: TIMEOUT });
    expect(response.status()).toBe(204);
  });
});
