import { test, expect } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://example.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Example Domain/);

  // create a locator
  const moreInfo = page.locator('text=More information');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(moreInfo).toHaveAttribute('href', 'https://www.iana.org/domains/example');

  // Click the link.
  await moreInfo.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*iana/);
});
