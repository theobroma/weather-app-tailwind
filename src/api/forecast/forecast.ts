import { connectionClient } from '@/api/connection';

import { forecastResponseSchema } from './forecast.interface';

// TODO: dynamic
const lat = 51.5341714;
const lon = 33.3767724;
const days = 3;

export const loadForecast = async () => {
    const { data } = await connectionClient.get(
        `/forecast.json?q=${lat},${lon}&days=${days}`
    );

    return forecastResponseSchema.parse(data);
};
