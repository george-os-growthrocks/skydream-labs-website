import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  company: z.string().max(160).optional().default(""),
  message: z.string().min(4).max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) => schema.parse(data))
  .handler(async ({ data }) => {
    // v1: log to server console. Wire to Resend / DB later.
    console.log("[SkydreamLabs contact]", {
      at: new Date().toISOString(),
      ...data,
    });
    return { ok: true as const };
  });
