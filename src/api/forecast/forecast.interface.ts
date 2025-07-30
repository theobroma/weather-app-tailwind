import { z } from 'zod';

import { currentWeatherSchema } from './types/z.current';
import { forecastSchema } from './types/z.forecast';
import { locationSchema } from './types/z.location';

export const forecastResponseSchema = z.object({
  current: currentWeatherSchema,
  forecast: forecastSchema,
  location: locationSchema,
});
