# 🎯 Daraz.pk Automation with Playwright (JavaScript)

This project uses [Playwright](https://playwright.dev/) with JavaScript to automate product search and filtering on [Daraz.pk](https://www.daraz.pk/), following the **Page Object Model (POM)** design pattern for maintainability and scalability.

---

## 📌 Features Automated

1. Launch Daraz homepage.
2. Search for a specific item (e.g., “electronics”).
3. Apply brand filter from checkbox.
4. Filter results by price range (500 - 5000).
5. Count number of search results.
6. Open a product from results.
7. Verify if the product has **free shipping**.

---

## 🗂️ Project Structure

```
daraz-playwright/
├── pages/
│   └── DarazPage.js         # Page Object for Daraz UI interactions
├── tests/
│   └── daraz.spec.js        # Test cases based on the requirements
├── playwright.config.js     # Playwright configuration
├── package.json
└── README.md
```

---

## 🚀 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/daraz-playwright.git
   cd daraz-playwright
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install Playwright browsers:**

   ```bash
   npx playwright install
   ```

---

## ▶️ Run Tests

Execute all tests with:

```bash
npx playwright test
```

To run a specific test:

```bash
npx playwright test tests/daraz.spec.js
```

---

## ✅ Test Case Summary

| Test Case | Description | Expected Result |
|-----------|-------------|-----------------|
| Search and Filter Test | Searches "electronics", applies brand + price filters, counts results | Pass if count > 0 |
| Free Shipping Test | Clicks a product and checks for "Free Shipping" label | Pass if label is found |

---

## 🛠 Tech Stack

- **Playwright** (Node.js version)
- **JavaScript (ES6)**
- **Page Object Model (POM)** architecture

---

## 📄 License

This project is for educational/demonstration purposes and does not have a specific license.

---

## ✍️ Author

- [Your Name]
- [Your Email or GitHub]
