import z from "zod";
import { widgetSettingsSchema } from "./schema";

export type FormSchema = z.infer<typeof widgetSettingsSchema>;
