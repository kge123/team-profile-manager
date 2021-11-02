const Employee = require("../lib/Employee");

describe("Employee", () => {
  // Test for all use cases when initializing a new Child object
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const e = new Employee("Sarah", 3, "test@test.com");

      // Verify that the new object has the correct properties
      expect(e.name).toEqual("Sarah");
      expect(e.id).toEqual(3);
      expect(e.email).toEqual("test@test.com");
      expect(e.getName()).toEqual("Sarah");
      expect(e.getId()).toEqual(3);
      expect(e.getEmail()).toEqual("test@test.com")
      expect(e.getRole()).toEqual("Employee")
    });
    
  });
});
