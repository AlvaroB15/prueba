import { describe, expect, test } from "@jest/globals";
import { createToken } from "../../src/utils/createToken";

describe("createToken file createToken", () => {
    test("createToken functionshould return not null", async () => {
        expect(createToken()).not.toBeNull();
    });

    test("should return string of 16 characters", async () => {
        expect(createToken()).toHaveLength(16);
    });
});