# Catalyst Essentials

This Catalyst project supports the lab work for BigCommerce Catalyst Essentials.

## Prerequisites

* Node.js 20 or later

## Getting Started

Copy the _starter_ branch.

```
pnpm create next-app@latest -e \
  https://github.com/bigcommerce-edu/lab-catalyst-faqs/tree/starter \
  /path/to/working/directory
```

### Product FAQs

Custom query/component to load "FAQs" on product detail page.

Requires metafields on a product matching the following details:

* `namespace`: "FAQ"
* `permission`: "read_and_sf_access"
* `value`: JSON string matching the following schema:

```
{
  "question": "Question string",
  "answer": "Answer string"
}
```

## Labs

### Lab 1

[Completed lab state](https://github.com/bigcommerce-edu/lab-catalyst-faqs/tree/lab-basic-faqs-complete)

* [Step 1 diff](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/starter...lab-basic-faqs-01)
* [Step 2 diff](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-basic-faqs-01...lab-basic-faqs-02)
* [Step 3 diff](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-basic-faqs-02...lab-basic-faqs-03)

[Full lab diff](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/starter...lab-basic-faqs-complete)

### Lab 2

Fresh setup:

```
pnpm create next-app@latest -e \
  https://github.com/bigcommerce-edu/lab-catalyst-faqs/tree/lab-faq-enhancements-start /path/to/working/directory
```

[Completed lab state](https://github.com/bigcommerce-edu/lab-catalyst-faqs/tree/lab-faq-enhancements-complete)

* [Step 2 diff](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-faq-enhancements-start...lab-faq-enhancements-02)
* [Step 3.1 diff](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-faq-enhancements-02...lab-faq-enhancements-03-01)
* [Step 3.2 diff](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-faq-enhancements-03-01...lab-faq-enhancements-03-02)
* [Step 4.1 diff](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-faq-enhancements-03-02...lab-faq-enhancements-04-01)
* [Step 4.2 diff](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-faq-enhancements-04-01...lab-faq-enhancements-04-02)
* [Step 4.3 diff](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-faq-enhancements-04-02...lab-faq-enhancements-04-03)

[Full lab diff](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-faq-enhancements-start...lab-faq-enhancements-complete)
