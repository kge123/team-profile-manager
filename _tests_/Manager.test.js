const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and officeNumber", () => {
      const e = new Manager("Mark", 6, "Mark@test.com", 101);
      expect(e.name).toEqual("Mark");
      expect(e.id).toEqual(6);
      expect(e.email).toEqual("Mark@test.com");
      expect(e.officeNumber).toEqual(101);
      expect(e.getofficeNumber()).toEqual(101);
      expect(e.getRole()).toEqual("Manager");
    });
  });
});
