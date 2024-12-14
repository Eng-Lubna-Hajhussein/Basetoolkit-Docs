import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  calendarSections,
  calendarContent,
} from "./../../../constants/datewise/Calendar";

function RouteCalendar() {
  return (
    <DocPage
      content={calendarContent}
      sections={calendarSections}
      title="Calendar"
      description={`The add() and subtract() methods in Datewise adjust a date by adding or subtracting time units like years, months, or days. The calendar() method then provides a friendly, relative date format, such as "Today," "Yesterday," or "Next Tuesday." Together, these methods allow you to easily adjust a date and display it in an intuitive, human-readable format.`}
    />
  );
}

export default RouteCalendar;
