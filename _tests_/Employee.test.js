const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const e = new Employee("Sarah", 3, "Sarah@test.com");
      expect(e.name).toEqual("Sarah");
      expect(e.id).toEqual(3);
      expect(e.email).toEqual("Sarah@test.com");
      expect(e.getName()).toEqual("Sarah");
      expect(e.getId()).toEqual(3);
      expect(e.getEmail()).toEqual("Sarah@test.com")
      expect(e.getRole()).toEqual("Employee")
    });
    
  });
});
