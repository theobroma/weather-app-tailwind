import { loadForecast } from '@/api/forecast/forecast';
import { QueryEnum } from '@/enums/query.enum';
import { useQuery } from '@tanstack/react-query';

export const Forecast = () => {
    const { data, error, isError } = useQuery({
        queryKey: [QueryEnum.LoadForecast],
        queryFn: () => loadForecast(),
    });
    console.log('🚀 ~ Forecast ~ data:', data);

    if (isError) {
        console.log('🚀 ~ Forecast ~ error:', error);
    }

    return <>forecast</>;
};
