const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email and school", () => {
      const e = new Intern("Jocelyn", 16, "Jocelyn@test.com", "MIT");
      expect(e.name).toEqual("Jocelyn");
      expect(e.id).toEqual(16);
      expect(e.email).toEqual("Jocelyn@test.com");
      expect(e.school).toEqual("MIT");
      expect(e.getSchool()).toEqual("MIT");
      expect(e.getRole()).toEqual("Intern");
    });
  });
});
