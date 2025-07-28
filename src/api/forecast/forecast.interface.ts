import { z } from 'zod';

import { locationSchema } from './types/z.location';
import { forecastSchema } from './types/z.forecast';
import { currentWeatherSchema } from './types/z.current';

export const forecastResponseSchema = z.object({
  current: currentWeatherSchema,
  forecast: forecastSchema,
  location: locationSchema,
});
