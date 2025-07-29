import { ForecastDayType } from '@/api/forecast/types/z.forecast';

const weekdayOptions = { weekday: 'long' } as const;
const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
} as const;

interface ForecastDayProps {
    forecastDay: ForecastDayType;
}

export const ForecastDay = ({ forecastDay }: ForecastDayProps) => {
    const { astro, date, day } = forecastDay;

    const adaptedDate = new Date(date);
    const weekDayString = adaptedDate.toLocaleString('en-US', weekdayOptions);
    const dateString = adaptedDate.toLocaleString('en-US', dateOptions);

    return (
        <div className="flex flex-col shadow-lg p-8 flex-center">
            <div>
                <span className="text-sm mt-4">{weekDayString}</span>
            </div>
            <div>
                <span className="font-bold text-lg mt-4">{dateString}</span>
            </div>
            <div className="mt-4">
                <span>{astro.sunrise}</span>
            </div>
            <div className="mt-4">
                <span>{astro.sunset}</span>
            </div>
            <div>
                <img src={day.condition.icon} alt="icon" />
            </div>
        </div>
    );
};
