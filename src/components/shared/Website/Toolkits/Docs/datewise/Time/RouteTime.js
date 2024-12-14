import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  timeSections,
  timeContent,
} from "./../../../constants/datewise/Time";

function RouteTime() {
  return (
    <DocPage
      content={timeContent}
      sections={timeSections}
      title="Time"
      description={`
The Datewise class offers versatile methods for date manipulation and formatting. With methods like fromNow(), it calculates the relative time difference between a given date and the current date, outputting phrases such as "13 years ago" or "in 38 minutes." startOf() and endOf() allow you to adjust the date to the beginning or end of a specific unit (e.g., day or hour), ideal for date calculations that require precision within time intervals. Each of these methods, including fromNow(), provides a user-friendly approach for dynamically tracking time and enhancing the readability of dates and intervals in applications.`}
    />
  );
}

export default RouteTime;
