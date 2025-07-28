import { z } from 'zod';

import { conditionSchema } from './z.general';

export const currentWeatherSchema = z.object({
  lastUpdatedEpoch: z.number(),
  lastUpdated: z.string(),
  tempC: z.number(),
  tempF: z.number(),
  isDay: z.number(),
  condition: conditionSchema,
  windMph: z.number(),
  windKph: z.number(),
  windDegree: z.number(),
  windDir: z.string(),
  pressureMb: z.number(),
  pressureIn: z.number(),
  precipMm: z.number(),
  precipIn: z.number(),
  humidity: z.number(),
  cloud: z.number(),
  feelslikeC: z.number(),
  feelslikeF: z.number(),
  visKm: z.number(),
  visMiles: z.number(),
  uv: z.number(),
  gustMph: z.number(),
  gustKph: z.number(),
});

export type CurrentWeatherType = z.infer<typeof currentWeatherSchema>;
