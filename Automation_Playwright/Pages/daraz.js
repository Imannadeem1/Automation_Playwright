// pages/DarazPage.js
exports.DarazPage = class DarazPage {
  constructor(page) {
    this.page = page;
    this.searchBox = 'input[name="q"]';
    this.brandCheckbox = 'label[for*="Brand-"]'; // more general
    this.minPrice = 'input[placeholder="Min"]';
    this.maxPrice = 'input[placeholder="Max"]';
    this.applyButton = 'button:has-text("Apply")';
    this.productItems = 'div[data-qa-locator="product-item"]';
    this.freeShippingTag = 'span:has-text("Free Shipping")';
  }

  async goto() {
    await this.page.goto('https://www.daraz.pk/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async searchForItem(item) {
    await this.page.fill(this.searchBox, item);
    await this.page.press(this.searchBox, 'Enter');
    await this.page.waitForLoadState('networkidle');
  }

  async applyBrandFilter() {
    await this.page.waitForSelector(this.brandCheckbox);
    const brand = await this.page.$(this.brandCheckbox);
    if (brand) {
      await brand.click();
      await this.page.waitForLoadState('networkidle');
    }
  }

  async applyPriceFilter(min, max) {
    await this.page.fill(this.minPrice, min.toString());
    await this.page.fill(this.maxPrice, max.toString());
    await this.page.click(this.applyButton);
    await this.page.waitForLoadState('networkidle');
  }

  async getProductCount() {
    await this.page.waitForSelector(this.productItems);
    const products = await this.page.$$(this.productItems);
    return products.length;
  }

  async clickOnFirstProduct() {
    await this.page.waitForSelector(this.productItems);
    const products = await this.page.$$(this.productItems);
    if (products.length > 0) {
      await products[0].click();
      await this.page.waitForLoadState('load');
    }
  }

  async isFreeShippingAvailable() {
    return await this.page.isVisible(this.freeShippingTag);
  }
};
