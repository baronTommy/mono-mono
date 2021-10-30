import { example } from "./example";

describe("example", () => {
  test("動作確認", () => {
    expect(example()).toBeDefined();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(example("")).toBeDefined();
  });
});
