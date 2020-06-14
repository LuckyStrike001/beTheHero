const generateUniqueId = require("../../src/utils/generateUniqueId");

describe("Generate an unique Id", () => {
  it("should generate an unique id", () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  });
});
