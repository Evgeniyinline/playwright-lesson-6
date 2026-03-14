import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.locator('body').click();
  await page.goto('https://todomvc.com/examples/vue/dist/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Купить продукты в магазине');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await expect(page.getByRole('main')).toContainText('Купить продукты в магазине');
  await expect(page.getByRole('textbox', { name: 'What needs to be done?' })).toBeEmpty();
});