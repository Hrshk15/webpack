import { other, val2c } from "./shared";

it("should have the correct value", () => {
	expect(other).toBe("other");
	expect(val2c).toBe(42);
});