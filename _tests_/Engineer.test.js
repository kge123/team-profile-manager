const Engineer = require("../lib/Engineer");

describe("Employee", () => {
  describe("Initiliazation", () => {
    it("should create an object with a name, id, email, and github", () => {
      const e = new Engineer("Jamal", 11, "Jamal@test.com", "JamalsGitHub");
      expect(e.name).toEqual("Jamal");
      expect(e.id).toEqual(11);
      expect(e.email).toEqual("Jamal@test.com");
      expect(e.getGithub()).toEqual("JamalsGitHub");
      expect(e.getRole()).toEqual("Engineer");
    });
  });
});
