import { loadForecast } from '@/api/forecast/forecast';
import { QueryEnum } from '@/enums/query.enum';
import { useQuery } from '@tanstack/react-query';
import { ForecastDay } from './forecast-day/forecast-day';
import { isExist } from '@/utils/is-data.util';

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
                <div className="columns-3 shadow-lg p-8 container mx-auto px-4">
                    {data?.forecast.forecastday.map((forecastDay, index) => (
                        <ForecastDay key={index} forecastDay={forecastDay} />
                    ))}
                </div>
            )}
        </>
    );
};
