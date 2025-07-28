import { z } from 'zod';

export const conditionSchema = z.object({
  text: z.string(),
  icon: z.string(),
  code: z.number(),
});

export type ConditionType = z.infer<typeof conditionSchema>;

export const astroSchema = z.object({
  sunrise: z.string(),
  sunset: z.string(),
  moonrise: z.string(),
  moonset: z.string(),
  moonPhase: z.string(),
  moonIllumination: z.number(),
  isMoonUp: z.number(),
  isSunUp: z.number(),
});

export type AstroType = z.infer<typeof astroSchema>;

export const daySchema = z.object({
  maxtempC: z.number(),
  maxtempF: z.number(),
  mintempC: z.number(),
  mintempF: z.number(),
  avgtempC: z.number(),
  avgtempF: z.number(),
  maxwindMph: z.number(),
  maxwindKph: z.number(),
  totalprecipMm: z.number(),
  totalprecipIn: z.number(),
  totalsnowCm: z.number(),
  avgvisKm: z.number(),
  avgvisMiles: z.number(),
  avghumidity: z.number(),
  dailyWillItRain: z.number(),
  dailyChanceOfRain: z.number(),
  dailyWillItSnow: z.number(),
  dailyChanceOfSnow: z.number(),
  condition: conditionSchema,
  uv: z.number(),
});

export type DayType = z.infer<typeof daySchema>;

export const hourSchema = z.object({
  timeEpoch: z.number(),
  time: z.string(),
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
  windchillC: z.number(),
  windchillF: z.number(),
  heatindexC: z.number(),
  heatindexF: z.number(),
  dewpointC: z.number(),
  dewpointF: z.number(),
  willItRain: z.number(),
  chanceOfRain: z.number(),
  willItSnow: z.number(),
  chanceOfSnow: z.number(),
  visKm: z.number(),
  visMiles: z.number(),
  gustMph: z.number(),
  gustKph: z.number(),
  uv: z.number(),
});

export type HourType = z.infer<typeof hourSchema>;
