import { expect, test } from "@jest/globals";
import { type inferProcedureInput } from "@trpc/server";
import { createInnerTRPCContext } from "../trpc";
import { appRouter, type AppRouter } from "../root";

test("test", async () => {
  const caller = appRouter.createCaller(
    createInnerTRPCContext({
      session: null,
    })
  );
  type Input = inferProcedureInput<AppRouter["example"]["hello"]>;

  const input: Input = {
    text: "test",
  };

  const result = await caller.example.hello(input);

  expect(result).toEqual({
    greeting: "Hello test",
  });
});
