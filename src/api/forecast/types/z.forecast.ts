import { z } from 'zod';

import { astroSchema, daySchema, hourSchema } from './z.general';

export const forecastDaySchema = z.object({
  astro: astroSchema,
  date: z.string(),
  dateEpoch: z.number(),
  day: daySchema,
  hour: z.array(hourSchema),
});

export type ForecastDayType = z.infer<typeof forecastDaySchema>;

export const forecastSchema = z.object({
  forecastday: z.array(forecastDaySchema),
});
