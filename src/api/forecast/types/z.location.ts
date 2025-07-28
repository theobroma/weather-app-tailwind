import { z } from 'zod';

export const locationSchema = z.object({
  name: z.string(),
  region: z.string(),
  country: z.string(),
  lat: z.number(),
  lon: z.number(),
  tzId: z.string(),
  localtimeEpoch: z.number(),
  localtime: z.string(),
});

export type LocationType = z.infer<typeof locationSchema>;
