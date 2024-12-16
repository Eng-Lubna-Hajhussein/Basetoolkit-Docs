import { Routes, Route, BrowserRouter } from "react-router-dom";
import appRouting from "./AppHelper/routing/appRouting";
import RouteLandingPage from "./components/RouteLandingPage";
import RouteDialog from "./components/shared/Website/UIComponents/Docs/Dialog/RouteDialog";
import RouteButtonGroup from "./components/shared/Website/UIComponents/Docs/ButtonGroup/RouteButtonGroup";
import RouteButton from "./components/shared/Website/UIComponents/Docs/Button/RouteButton";
import RouteAutocomplete from "./components/shared/Website/UIComponents/Docs/Autocomplete/RouteAutocomplete";
import RouteCheckbox from "./components/shared/Website/UIComponents/Docs/Checkbox/RouteCheckbox";
import RouteFloatingActionButton from "./components/shared/Website/UIComponents/Docs/FloatingActionButton/RouteFloatingActionButton";
import RouteRadioGroup from "./components/shared/Website/UIComponents/Docs/RadioGroup/RouteRadioGroup";
import RouteRating from "./components/shared/Website/UIComponents/Docs/Rating/RouteRating";
import RouteSelect from "./components/shared/Website/UIComponents/Docs/Select/RouteSelect";
import RouteSlider from "./components/shared/Website/UIComponents/Docs/Slider/RouteSlider";
import RouteSwitch from "./components/shared/Website/UIComponents/Docs/Switch/RouteSwitch";
import RouteTransferList from "./components/shared/Website/UIComponents/Docs/TransferList/RouteTransferList";
import RouteToggleButton from "./components/shared/Website/UIComponents/Docs/ToggleButton/RouteToggleButton";
import RouteMenu from "./components/shared/Website/UIComponents/Docs/Menu/RouteMenu";
import RouteAvatar from "./components/shared/Website/UIComponents/Docs/Avatar/RouteAvatar";
import RouteBadge from "./components/shared/Website/UIComponents/Docs/Badge/RouteBadge";
import RouteChip from "./components/shared/Website/UIComponents/Docs/Chip/RouteChip";
import RouteDivider from "./components/shared/Website/UIComponents/Docs/Divider/RouteDivider";
import RouteIcons from "./components/shared/Website/UIComponents/Docs/Icons/RouteIcons";
import RouteList from "./components/shared/Website/UIComponents/Docs/List/RouteList";
import RouteTable from "./components/shared/Website/UIComponents/Docs/Table/RouteTable";
import RouteTooltip from "./components/shared/Website/UIComponents/Docs/Tooltip/RouteTooltip";
import RouteTypography from "./components/shared/Website/UIComponents/Docs/Typography/RouteTypography";
import RouteAlert from "./components/shared/Website/UIComponents/Docs/Alert/RouteAlert";
import RouteBackdrop from "./components/shared/Website/UIComponents/Docs/Backdrop/RouteBackdrop";
import RouteProgress from "./components/shared/Website/UIComponents/Docs/Progress/RouteProgress";
import RouteSkeleton from "./components/shared/Website/UIComponents/Docs/Skeleton/RouteSkeleton";
import RouteSnackbar from "./components/shared/Website/UIComponents/Docs/Snackbar/RouteSnackbar";
import RouteAccordion from "./components/shared/Website/UIComponents/Docs/Accordion/RouteAccordion";
import RouteAppBar from "./components/shared/Website/UIComponents/Docs/AppBar/RouteAppBar";
import RouteCard from "./components/shared/Website/UIComponents/Docs/Card/RouteCard";
import RoutePaper from "./components/shared/Website/UIComponents/Docs/Paper/RoutePaper";
import RouteBottomNavigation from "./components/shared/Website/UIComponents/Docs/BottomNavigation/RouteBottomNavigation";
import RouteBreadcrumbs from "./components/shared/Website/UIComponents/Docs/Breadcrumbs/RouteBreadcrumbs";
import RouteDrawer from "./components/shared/Website/UIComponents/Docs/Drawer/RouteDrawer";
import RouteLink from "./components/shared/Website/UIComponents/Docs/Link/RouteLink";
import RoutePagination from "./components/shared/Website/UIComponents/Docs/Pagination/RoutePagination";
import RouteTabs from "./components/shared/Website/UIComponents/Docs/Tabs/RouteTabs";
import RouteBox from "./components/shared/Website/UIComponents/Docs/Box/RouteBox";
import RouteContainer from "./components/shared/Website/UIComponents/Docs/Container/RouteContainer";
import RouteGrid from "./components/shared/Website/UIComponents/Docs/Grid/RouteGrid";
import RouteStack from "./components/shared/Website/UIComponents/Docs/Stack/RouteStack";
import RouteImageList from "./components/shared/Website/UIComponents/Docs/ImageList/RouteImageList";
import RouteFormApiGetStarted from "./components/shared/Website/Toolkits/Docs/FormApi/GetStarted/RouteGetStarted";
import RouteFormApiRegisterFields from "./components/shared/Website/Toolkits/Docs/FormApi/RegisterFields/RouteRegisterFields";
import RouteFormApiApplyValidation from "./components/shared/Website/Toolkits/Docs/FormApi/ApplyValidation/RouteApplyValidation";
import RouteFormIntegration from "./components/shared/Website/Toolkits/Docs/FormApi/FormIntegration/RouteFormIntegration";
import RouteUILibraries from "./components/shared/Website/Toolkits/Docs/FormApi/UILibraries/RouteUILibraries";
import RouteGlobalStates from "./components/shared/Website/Toolkits/Docs/FormApi/GlobalStates/RouteGlobalStates";
import RouteControlledInputs from "./components/shared/Website/Toolkits/Docs/FormApi/ControlledInputs/RouteControlledInputs";
import RouteHandleErrors from "./components/shared/Website/Toolkits/Docs/FormApi/HandleErrors/RouteHandleErrors";
import RouteColorisMain from "./components/shared/Website/Toolkits/Docs/coloris/Main/RouteMain";
import RouteColor from "./components/shared/Website/Toolkits/Docs/coloris/Color/RouteColor";
import RouteScale from "./components/shared/Website/Toolkits/Docs/coloris/Scale/RouteScale";
import RouteFormate from "./components/shared/Website/Toolkits/Docs/datewise/Formate/RouteFormate";
import RouteTime from "./components/shared/Website/Toolkits/Docs/datewise/Time/RouteTime";
import RouteCalendar from "./components/shared/Website/Toolkits/Docs/datewise/Calendar/RouteCalendar";
import RouteUseCssClassUsage from "./components/shared/Website/CssInJS/Docs/useCssClass/Usage/RouteUsage";
import RouteCssInjectionUsage from "./components/shared/Website/CssInJS/Docs/cssInjection/Usage/RouteUsage";
import RouteKeyframesUsage from "./components/shared/Website/CssInJS/Docs/keyframes/Usage/RouteUsage";
import RouteSxUsage from "./components/shared/Website/CssInJS/Docs/sx/Usage/RouteUsage";
import RouteRtlUsage from "./components/shared/Website/CssInJS/Docs/rtl/Usage/RouteUsage";
import RouteBarChart from "./components/shared/Website/UIComponents/Docs/BarChart/RouteBarChart";
import RouteLineChart from "./components/shared/Website/UIComponents/Docs/LineChart/RouteLineChart";
import RoutePieChart from "./components/shared/Website/UIComponents/Docs/PieChart/RoutePieChart";
import RouteGauge from "./components/shared/Website/UIComponents/Docs/Gauge/RouteGauge";
import RouteSparklineChart from "./components/shared/Website/UIComponents/Docs/SparklineChart/RouteSparklineChart";
import RouteTextField from "./components/shared/Website/UIComponents/Docs/TextField/RouteTextField";
import RouteDatePicker from "./components/shared/Website/UIComponents/Docs/DatePicker/RouteDatePicker";
import RouteDateCalendar from "./components/shared/Website/UIComponents/Docs/DateCalendar/RouteDateCalendar";
import RouteDateField from "./components/shared/Website/UIComponents/Docs/DateField/RouteDateField";
import RouteColorInput from "./components/shared/Website/UIComponents/Docs/ColorInput/RouteColorInput";
import RouteTimePicker from "./components/shared/Website/UIComponents/Docs/TimePicker/RouteTimePicker";
import RouteTimeField from "./components/shared/Website/UIComponents/Docs/TimeField/RouteTimeField";
import RouteProSelect from "./components/shared/Website/UIComponents/Docs/ProSelect/RouteProSelect";
import RouteModal from "./components/shared/Website/UIComponents/Docs/Modal/RouteModal";
import RoutePopper from "./components/shared/Website/UIComponents/Docs/Popper/RoutePopper";
import RouteClickAwayListener from "./components/shared/Website/UIComponents/Docs/ClickAwayListener/RouteClickAwayListener";
import RouteTextareaAutosize from "./components/shared/Website/UIComponents/Docs/TextareaAutosize/RouteTextareaAutosize";
import RouteTransitions from "./components/shared/Website/UIComponents/Docs/Transitions/RouteTransitions";
import RouteStepper from "./components/shared/Website/UIComponents/Docs/Stepper/RouteStepper";
import RouteCarousel from "./components/shared/Website/UIComponents/Docs/Carousel/RouteCarousel";
import RouteMasonry from "./components/shared/Website/UIComponents/Docs/Masonry/RouteMasonry";
import RouteTimeline from "./components/shared/Website/UIComponents/Docs/Timeline/RouteTimeline";
import RouteClassnamesUsage from "./components/shared/Website/Toolkits/Docs/classnames/Usage/RouteUsage";
import RouteIdbuilderUsage from "./components/shared/Website/Toolkits/Docs/idbuilder/Usage/RouteUsage";
import RouteMediaqueryUsage from "./components/shared/Website/Toolkits/Docs/mediaquery/Usage/RouteUsage";
import RouteScrollTriggerUsage from "./components/shared/Website/Toolkits/Docs/scrollTrigger/Usage/RouteUsage";
import RouteMultiStepForm from "./components/shared/Website/Templates/Docs/multiStepForm/RouteMultiStepForm";
import RouteAdminDashboard from "./components/shared/Website/Templates/Docs/adminDahboard/RouteAdminDashboard";
import Route1inchClone from "./components/shared/Website/Templates/Docs/1inchClone/Route1inchClone";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={appRouting.Public_LandingPage.url}
          element={<RouteLandingPage />}
        />
        <Route
          path={appRouting.Autocomplete.url}
          element={<RouteAutocomplete />}
        />
        <Route path={appRouting.Button.url} element={<RouteButton />} />
        <Route
          path={appRouting.ButtonGroup.url}
          element={<RouteButtonGroup />}
        />
        <Route path={appRouting.Checkbox.url} element={<RouteCheckbox />} />
        <Route
          path={appRouting.FloatingActionButton.url}
          element={<RouteFloatingActionButton />}
        />
        <Route path={appRouting.RadioGroup.url} element={<RouteRadioGroup />} />
        <Route path={appRouting.Rating.url} element={<RouteRating />} />
        <Route path={appRouting.Select.url} element={<RouteSelect />} />
        <Route path={appRouting.Slider.url} element={<RouteSlider />} />
        <Route path={appRouting.Switch.url} element={<RouteSwitch />} />
        <Route
          path={appRouting.TransferList.url}
          element={<RouteTransferList />}
        />
        <Route
          path={appRouting.ToggleButton.url}
          element={<RouteToggleButton />}
        />
        <Route path={appRouting.Menu.url} element={<RouteMenu />} />
        <Route path={appRouting.Avatar.url} element={<RouteAvatar />} />
        <Route path={appRouting.Badge.url} element={<RouteBadge />} />
        <Route path={appRouting.Chip.url} element={<RouteChip />} />
        <Route path={appRouting.Divider.url} element={<RouteDivider />} />
        <Route path={appRouting.Icons.url} element={<RouteIcons />} />
        <Route path={appRouting.List.url} element={<RouteList />} />
        <Route path={appRouting.Table.url} element={<RouteTable />} />
        <Route path={appRouting.Tooltip.url} element={<RouteTooltip />} />
        <Route path={appRouting.Typography.url} element={<RouteTypography />} />
        <Route path={appRouting.Alert.url} element={<RouteAlert />} />
        <Route path={appRouting.Backdrop.url} element={<RouteBackdrop />} />
        <Route path={appRouting.Dialog.url} element={<RouteDialog />} />
        <Route path={appRouting.Progress.url} element={<RouteProgress />} />
        <Route path={appRouting.Skeleton.url} element={<RouteSkeleton />} />
        <Route path={appRouting.Snackbar.url} element={<RouteSnackbar />} />
        <Route path={appRouting.Accordion.url} element={<RouteAccordion />} />
        <Route path={appRouting.AppBar.url} element={<RouteAppBar />} />
        <Route path={appRouting.Card.url} element={<RouteCard />} />
        <Route path={appRouting.Paper.url} element={<RoutePaper />} />
        <Route
          path={appRouting.BottomNavigation.url}
          element={<RouteBottomNavigation />}
        />
        <Route
          path={appRouting.Breadcrumbs.url}
          element={<RouteBreadcrumbs />}
        />
        <Route path={appRouting.Drawer.url} element={<RouteDrawer />} />
        <Route path={appRouting.Link.url} element={<RouteLink />} />
        <Route path={appRouting.Pagination.url} element={<RoutePagination />} />
        <Route path={appRouting.Tabs.url} element={<RouteTabs />} />
        <Route path={appRouting.Box.url} element={<RouteBox />} />
        <Route path={appRouting.Container.url} element={<RouteContainer />} />
        <Route path={appRouting.Grid.url} element={<RouteGrid />} />
        <Route path={appRouting.Stack.url} element={<RouteStack />} />
        <Route path={appRouting.ImageList.url} element={<RouteImageList />} />
        <Route
          path={appRouting.FormApi_Get_Started.url}
          element={<RouteFormApiGetStarted />}
        />
        <Route
          path={appRouting.FormApi_Register_Fields.url}
          element={<RouteFormApiRegisterFields />}
        />
        <Route
          path={appRouting.FormApi_Apply_Validation.url}
          element={<RouteFormApiApplyValidation />}
        />
        <Route
          path={appRouting.FormApi_Form_Integration.url}
          element={<RouteFormIntegration />}
        />
        <Route
          path={appRouting.FormApi_UI_Libraries.url}
          element={<RouteUILibraries />}
        />
        <Route
          path={appRouting.FormApi_Controlled_Inputs.url}
          element={<RouteControlledInputs />}
        />
        <Route
          path={appRouting.FormApi_Global_States.url}
          element={<RouteGlobalStates />}
        />
        <Route
          path={appRouting.FormApi_Handle_Errors.url}
          element={<RouteHandleErrors />}
        />
        <Route
          path={appRouting.Coloris_Main.url}
          element={<RouteColorisMain />}
        />
        <Route path={appRouting.Coloris_Color.url} element={<RouteColor />} />
        <Route path={appRouting.Coloris_Scale.url} element={<RouteScale />} />
        <Route
          path={appRouting.Datewise_Formate.url}
          element={<RouteFormate />}
        />
        <Route path={appRouting.Datewise_Time.url} element={<RouteTime />} />
        <Route
          path={appRouting.Datewise_Calendar.url}
          element={<RouteCalendar />}
        />
        <Route
          path={appRouting.UseCssClass_Usage.url}
          element={<RouteUseCssClassUsage />}
        />
        <Route
          path={appRouting.CssInjection_Usage.url}
          element={<RouteCssInjectionUsage />}
        />
        <Route
          path={appRouting.Keyframes_Usage.url}
          element={<RouteKeyframesUsage />}
        />
        <Route path={appRouting.Sx_Usage.url} element={<RouteSxUsage />} />
        <Route path={appRouting.Rtl_Usage.url} element={<RouteRtlUsage />} />
        <Route path={appRouting.BarChart.url} element={<RouteBarChart />} />
        <Route path={appRouting.LineChart.url} element={<RouteLineChart />} />
        <Route path={appRouting.PieChart.url} element={<RoutePieChart />} />
        <Route path={appRouting.Gauge.url} element={<RouteGauge />} />
        <Route
          path={appRouting.SparklineChart.url}
          element={<RouteSparklineChart />}
        />
        <Route path={appRouting.TextField.url} element={<RouteTextField />} />
        <Route path={appRouting.DatePicker.url} element={<RouteDatePicker />} />
        <Route
          path={appRouting.DateCalendar.url}
          element={<RouteDateCalendar />}
        />
        <Route path={appRouting.DateField.url} element={<RouteDateField />} />
        <Route path={appRouting.ColorInput.url} element={<RouteColorInput />} />
        <Route path={appRouting.TimePicker.url} element={<RouteTimePicker />} />
        <Route path={appRouting.TimeField.url} element={<RouteTimeField />} />
        <Route path={appRouting.ProSelect.url} element={<RouteProSelect />} />
        <Route path={appRouting.Modal.url} element={<RouteModal />} />
        <Route path={appRouting.Popper.url} element={<RoutePopper />} />
        <Route
          path={appRouting.ClickAwayListener.url}
          element={<RouteClickAwayListener />}
        />
        <Route
          path={appRouting.TextareaAutosize.url}
          element={<RouteTextareaAutosize />}
        />
        <Route
          path={appRouting.Transitions.url}
          element={<RouteTransitions />}
        />
        <Route path={appRouting.Stepper.url} element={<RouteStepper />} />
        <Route path={appRouting.Carousel.url} element={<RouteCarousel />} />
        <Route path={appRouting.Masonry.url} element={<RouteMasonry />} />
        <Route path={appRouting.Timeline.url} element={<RouteTimeline />} />
        <Route
          path={appRouting.Classnames_Usage.url}
          element={<RouteClassnamesUsage />}
        />
        <Route
          path={appRouting.Idbuilder_Usage.url}
          element={<RouteIdbuilderUsage />}
        />
        <Route
          path={appRouting.MediaQuery_Usage.url}
          element={<RouteMediaqueryUsage />}
        />
        <Route
          path={appRouting.UseScrollTrigger_Usage.url}
          element={<RouteScrollTriggerUsage />}
        />
        <Route
          path={appRouting.Templates_Multi_Step_Form.url}
          element={<RouteMultiStepForm />}
        />
        <Route
          path={appRouting.Templates_Admin_Dashboard.url}
          element={<RouteAdminDashboard />}
        />
        <Route
          path={appRouting.Templates_1inch_Clone.url}
          element={<Route1inchClone />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
