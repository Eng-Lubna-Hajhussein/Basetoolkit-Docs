import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  dateCalendarSections,
  dateCalendarContent,
} from "./../../constants/DateCalendar";

function RouteDateCalendar() {
  return (
    <DocPage
      content={dateCalendarContent}
      sections={dateCalendarSections}
      title="Date Calendar"
      description="The Date Calendar allows users to choose a date directly from the calendar interface, without using an input field, popper, or modal."
    />
  );
}

export default RouteDateCalendar;
