import { test, expect } from '@playwright/test';

test.only('Поиск ролевых селекторов', async ({ page }) => {

  await page.goto('file:///Users/macbook/playwright-lesson-1/burger-order.html');
  await page.getByRole('textbox', { name: 'Имя клиента' }).fill('3006');
  await page.getByRole('combobox', { name: 'Тип бургера' }).selectOption('cheeseburger');
  await page.getByRole('radio',{name:'Средний'}).click();
  await page.getByRole('checkbox', {name:'Горчица'}).click();
//   todo локатор невидимый
//   await page.getByRole('label').locator('.switch-label').click();
  await page.getByRole('button', {name:'+' }).click();
  await page.getByRole('radio', {name:'Картой онлайн'}).click();
  await page.getByRole('button', {name:'Заказать бургер'}).click();
  await expect(page.getByRole('heading', {name:'✅ Заказ принят!'})).toBeVisible();
  await expect(page.locator('#popupMessage')).toContainText('Спасибо за заказ, 3006!');

});

test('Поиск селекторов по классу', async ({ page }) => {

  await page.goto('file:///Users/macbook/playwright-lesson-1/burger-order.html');
  await page.locator('.order-form').locator('.form-group').locator('input').first().fill('3006');
  await page.locator('.order-form').locator('select').first().selectOption('cheeseburger');
  await page.locator('.radio-group').filter({hasText: 'Средний'}).click();
  await page.locator('.checkbox-group').filter({hasText: 'Горчица'}).click();
  await page.locator('.switch-input').click();
  await page.locator('.counter-btn counter-increase').click();
  await page.locator('.radio-group').filter({hasText: 'Картой онлайн'}).click();
  await page.locator('.btn-primary').first().click();
  await expect(page.getByRole('heading', {name:'✅ Заказ принят!'})).toBeVisible();

});

test('Поиск селекторов по id', async ({ page }) => {

  await page.goto('file:///Users/macbook/playwright-lesson-1/burger-order.html');
  await page.locator('#customerName').locator('.form-group').locator('input').first().fill('3006');
  await page.locator('#burgerType').selectOption('cheeseburger');
  await page.locator('#').filter({hasText: 'Средний'}).click();
  await page.locator('.checkbox-group').filter({hasText: 'Горчица'}).click();
  await page.locator('.switch-input').click();
  await page.locator('.counter-btn counter-increase').click();
  await page.locator('.radio-group').filter({hasText: 'Картой онлайн'}).click();
  await page.locator('.btn-primary').first().click();
  await expect(page.getByRole('heading', {name:'✅ Заказ принят!'})).toBeVisible();

});

test('Поиск селекторов по атрибуту', async ({ page }) => {

  await page.goto('file:///Users/macbook/playwright-lesson-1/burger-order.html');
  await page.locator('[name:"customerName"]').fill('3006');
//   await page.locator('#burgerType').selectOption('cheeseburger');
//   await page.locator('#').filter({hasText: 'Средний'}).click();
//   await page.locator('.checkbox-group').filter({hasText: 'Горчица'}).click();
//   await page.locator('.switch-input').click();
//   await page.locator('.counter-btn counter-increase').click();
//   await page.locator('.radio-group').filter({hasText: 'Картой онлайн'}).click();
//   await page.locator('.btn-primary').first().click();
//   await expect(page.getByRole('heading', {name:'✅ Заказ принят!'})).toBeVisible();

});