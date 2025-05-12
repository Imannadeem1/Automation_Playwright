// tests/daraz.spec.js
const { test, expect } = require('@playwright/test');
const { DarazPage } = require('../pages/DarazPage');

test.describe('Daraz Product Search', () => {
  let darazPage;

  test.beforeEach(async ({ page }) => {
    darazPage = new DarazPage(page);
    await darazPage.goto();
  });

  test('Search and apply filters, verify product count', async ({ page }) => {
    await darazPage.searchForItem('electronics');
    await darazPage.applyBrandFilter();
    await darazPage.applyPriceFilter(500, 5000);

    const count = await darazPage.getProductCount();
    console.log(`Products found: ${count}`);
    expect(count).toBeGreaterThan(0);
  });

  test('Check if free shipping is available', async ({ page }) => {
    await darazPage.searchForItem('electronics');
    await darazPage.applyBrandFilter();
    await darazPage.applyPriceFilter(500, 5000);
    await darazPage.clickOnFirstProduct();

    const freeShipping = await darazPage.isFreeShippingAvailable();
    expect(freeShipping).toBeTruthy(); // test will fail if no free shipping
  });
});
