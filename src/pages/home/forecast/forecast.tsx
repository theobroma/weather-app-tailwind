import { loadForecast } from '@/api/forecast/forecast';
import { useQuery } from '@tanstack/react-query';

import { QueryEnum } from '@/enums/query.enum';
import { isExist } from '@/utils/is-data.util';

import { ForecastDay } from './forecast-day/forecast-day';

export const Forecast = () => {
  const { data, error, isError } = useQuery({
    queryKey: [QueryEnum.LoadForecast],
    queryFn: () => loadForecast(),
  });
  console.log('🚀 ~ Forecast ~ data:', data);

  if (isError) {
    console.log('🚀 ~ Forecast ~ error:', error);
  }

  return (
    <>
      {isExist(data) && (
        <div className="columns-1 md:columns-3 shadow-lg p-8 container mx-auto px-4 mt-8 bg-gray-100">
          {data?.forecast.forecastday.map((forecastDay, index) => (
            <ForecastDay key={index} forecastDay={forecastDay} />
          ))}
        </div>
      )}
    </>
  );
};
