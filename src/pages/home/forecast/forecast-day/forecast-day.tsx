import { ForecastDayType } from '@/api/forecast/types/z.forecast';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

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
    <div className="flex flex-col shadow-lg p-8">
      <div className="flex justify-center">
        <span className="text-sm mt-4">{weekDayString}</span>
      </div>
      <div className="flex justify-center">
        <span className="font-bold text-lg mt-4">{dateString}</span>
      </div>
      <div className="flex justify-center">
        <div>
          <img src={day.condition.icon} alt="icon" />
        </div>
      </div>
      <div className="flex justify-center">
        <span>{day.condition.text}</span>
      </div>
      <div className="flex justify-center mt-8">
        <span className="text-2xl">
          {day.mintempC} - {day.maxtempC}&#176;C
        </span>
      </div>
      <div className="flex gap-2 mt-8 justify-center">
        <div className="flex flex-wrap content-center">
          <SunIcon />
        </div>
        <span>
          {astro.sunrise}-{astro.sunset}
        </span>
      </div>
      <div className="flex gap-2 mt-4 justify-center">
        <div className="flex flex-wrap content-center">
          <MoonIcon />
        </div>
        <span>
          {astro.moonrise}-{astro.moonset}
        </span>
      </div>
    </div>
  );
};
