const expect = require("chai").expect;
const onlineStore = require("./onlineStore");

describe("Tests for onlineStore", function () {
  describe("isProductAvailable", function () {
    it("should return 'Great! Camera is available for purchase.' when stock is greater than 0", function () {
      const result = onlineStore.isProductAvailable("Camera", 3);
      expect(result).to.equal("Great! Camera is available for purchase.");
    });

    it("should return 'Sorry, Laptop is currently out of stock.' when stock is less than or equal to 0", function () {
      const result = onlineStore.isProductAvailable("Laptop", 0);
      expect(result).to.equal("Sorry, Laptop is currently out of stock.");
    });

    it("should throw an error 'Invalid input.' when product is not a string", function () {
      expect(() => onlineStore.isProductAvailable(111, 2)).to.throw(
        "Invalid input."
      );
    });

    it("should throw an error 'Invalid input.' when stockQuantity is not a number", function () {
      expect(() => onlineStore.isProductAvailable("Headphones", "10")).to.throw(
        "Invalid input."
      );
    });
  });

  describe("canAffordProduct", function () {
    it("should return 'Product purchased. Your remaining balance is $500.' when account balance is greater than product price", function () {
      const result = onlineStore.canAffordProduct(300, 800);
      expect(result).to.equal(
        "Product purchased. Your remaining balance is $500."
      );
    });

    it("should return 'You don't have sufficient funds to buy this product.' when account balance is less than product price", function () {
      const result = onlineStore.canAffordProduct(1000, 300);
      expect(result).to.equal(
        "You don't have sufficient funds to buy this product."
      );
    });

    it("should throw an error 'Invalid input.' when productPrice is not a number", function () {
      expect(() => onlineStore.canAffordProduct("900", 300)).to.throw(
        "Invalid input."
      );
    });

    it("should throw an error 'Invalid input.' when accountBalance is not a number", function () {
      expect(() => onlineStore.canAffordProduct(400, "600")).to.throw(
        "Invalid input."
      );
    });
  });

  describe("getRecommendedProducts", function () {
    const productList = [
      { name: "Camera", category: "Photography" },
      { name: "Laptop", category: "Electronics" },
      { name: "Headphones", category: "Electronics" },
    ];

    it("should return 'Recommended products in the Electronics category: Laptop, Headphones' when products are found", function () {
      const result = onlineStore.getRecommendedProducts(
        productList,
        "Electronics"
      );
      expect(result).to.equal(
        "Recommended products in the Electronics category: Laptop, Headphones"
      );
    });

    it("should return 'Sorry, we currently have no recommended products in the Furniture category.' when no products are found", function () {
      const result = onlineStore.getRecommendedProducts(
        productList,
        "Furniture"
      );
      expect(result).to.equal(
        "Sorry, we currently have no recommended products in the Furniture category."
      );
    });

    it("should throw an error 'Invalid input.' when productList is not an array", function () {
      expect(() =>
        onlineStore.getRecommendedProducts("invalid", "Electronics")
      ).to.throw("Invalid input.");
    });

    it("should throw an error 'Invalid input.' when category is not a string", function () {
      expect(() =>
        onlineStore.getRecommendedProducts(productList, 123)
      ).to.throw("Invalid input.");
    });
  });
});
