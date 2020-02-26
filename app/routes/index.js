import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

// ----------- Pages Imports ---------------
import Analytics from './template/Dashboards/Analytics';
import ProjectsDashboard from './template/Dashboards/Projects';
import System from './template/Dashboards/System';
import Monitor from './template/Dashboards/Monitor';
import Financial from './template/Dashboards/Financial';
import Stock from './template/Dashboards/Stock';
import Reports from './template/Dashboards/Reports';

import Widgets from './template/Widgets';

import Cards from './template/Cards/Cards';
import CardsHeaders from './template/Cards/CardsHeaders';

import NavbarOnly from './template/Layouts/NavbarOnly';
import SidebarDefault from './template/Layouts/SidebarDefault';
import SidebarA from './template/Layouts/SidebarA';
import DragAndDropLayout from './template/Layouts/DragAndDropLayout';
import SidebarWithNavbar from './template/Layouts/SidebarWithNavbar';

import Accordions from './template/Interface/Accordions';
import Alerts from './template/Interface/Alerts';
import Avatars from './template/Interface/Avatars';
import BadgesLabels from './template/Interface/BadgesLabels';
import Breadcrumbs from './template/Interface/Breadcrumbs';
import Buttons from './template/Interface/Buttons';
import Colors from './template/Interface/Colors';
import Dropdowns from './template/Interface/Dropdowns';
import Images from './template/Interface/Images';
import ListGroups from './template/Interface/ListGroups';
import MediaObjects from './template/Interface/MediaObjects';
import Modals from './template/Interface/Modals';
import Navbars from './template/Interface/Navbars';
import Paginations from './template/Interface/Paginations';
import ProgressBars from './template/Interface/ProgressBars';
import TabsPills from './template/Interface/TabsPills';
import TooltipPopovers from './template/Interface/TooltipsPopovers';
import Typography from './template/Interface/Typography';
import Notifications from './template/Interface/Notifications';
import CropImage from './template/Interface/CropImage';
import DragAndDropElements from './template/Interface/DragAndDropElements';
import Calendar from './template/Interface/Calendar';
import ReCharts from './template/Graphs/ReCharts';

import Forms from './template/Forms/Forms';
import FormsLayouts from './template/Forms/FormsLayouts';
import InputGroups from './template/Forms/InputGroups';
import Wizard from './template/Forms/Wizard';
import TextMask from './template/Forms/TextMask';
import Typeahead from './template/Forms/Typeahead';
import Toggles from './template/Forms/Toggles';
import Editor from './template/Forms/Editor';
import DatePicker from './template/Forms/DatePicker';
import Dropzone from './template/Forms/Dropzone';
import Sliders from './template/Forms/Sliders';

import Tables from './template/Tables/Tables';
import ExtendedTable from './template/Tables/ExtendedTable';
import AgGrid from './template/Tables/AgGrid';

import AccountEdit from './template/Apps/AccountEdit';
import BillingEdit from './template/Apps/BillingEdit';
import Chat from './template/Apps/Chat';
import Clients from './template/Apps/Clients';
import EmailDetails from './template/Apps/EmailDetails';
import Files from './template/Apps/Files';
import GalleryGrid from './template/Apps/GalleryGrid';
import GalleryTable from './template/Apps/GalleryTable';
import ImagesResults from './template/Apps/ImagesResults';
import Inbox from './template/Apps/Inbox';
import NewEmail from './template/Apps/NewEmail';
import ProfileDetails from './template/Apps/ProfileDetails';
import ProfileEdit from './template/Apps/ProfileEdit';
import Projects from './template/Apps/Projects';
import SearchResults from './template/Apps/SearchResults';
import SessionsEdit from './template/Apps/SessionsEdit';
import SettingsEdit from './template/Apps/SettingsEdit';
import Tasks from './template/Apps/Tasks';
import TasksDetails from './template/Apps/TasksDetails';
import TasksKanban from './template/Apps/TasksKanban';
import Users from './template/Apps/Users';
import UsersResults from './template/Apps/UsersResults';
import VideosResults from './template/Apps/VideosResults';

import ComingSoon from './template/Pages/ComingSoon';
import Confirmation from './template/Pages/Confirmation';
import Danger from './template/Pages/Danger';
import Error404 from './template/Pages/Error404';
import ForgotPassword from './template/Pages/ForgotPassword';
import LockScreen from './template/Pages/LockScreen';
import Login from './template/Pages/Login';
import Register from './template/Pages/Register';
import Success from './template/Pages/Success';
import Timeline from './template/Pages/Timeline';

import Icons from './template/Icons';

// ----------- Layout Imports ---------------
import {DefaultNavbar} from './../layout/components/DefaultNavbar';
import {DefaultSidebar} from './../layout/components/DefaultSidebar';

import {SidebarANavbar} from './../layout/components/SidebarANavbar';
import {SidebarASidebar} from './../layout/components/SidebarASidebar';
import Info from "./registration/info";
import CourseList from "./registration/CourseList/CourseList";

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Switch>
            <Route path="/registration/info" exact component={Info}/>
            <Route path="/registration/courseList" exact component={CourseList}/>


            <Redirect from="/" to="/dashboards/projects" exact/>

            <Route path="/dashboards/analytics" exact component={Analytics}/>
            <Route path="/dashboards/projects" exact component={ProjectsDashboard}/>
            <Route path="/dashboards/system" exact component={System}/>
            <Route path="/dashboards/monitor" exact component={Monitor}/>
            <Route path="/dashboards/financial" exact component={Financial}/>
            <Route path="/dashboards/stock" exact component={Stock}/>
            <Route path="/dashboards/reports" exact component={Reports}/>

            <Route path='/widgets' exact component={Widgets}/>

            { /*    Cards Routes     */}
            <Route path='/cards/cards' exact component={Cards}/>
            <Route path='/cards/cardsheaders' exact component={CardsHeaders}/>

            { /*    Layouts     */}
            <Route path='/layouts/navbar' component={NavbarOnly}/>
            <Route path='/layouts/sidebar' component={SidebarDefault}/>
            <Route path='/layouts/sidebar-a' component={SidebarA}/>
            <Route path="/layouts/sidebar-with-navbar" component={SidebarWithNavbar}/>
            <Route path='/layouts/dnd-layout' component={DragAndDropLayout}/>

            { /*    Interface Routes   */}
            <Route component={Accordions} path="/interface/accordions"/>
            <Route component={Alerts} path="/interface/alerts"/>
            <Route component={Avatars} path="/interface/avatars"/>
            <Route component={BadgesLabels} path="/interface/badges-and-labels"/>
            <Route component={Breadcrumbs} path="/interface/breadcrumbs"/>
            <Route component={Buttons} path="/interface/buttons"/>
            <Route component={Colors} path="/interface/colors"/>
            <Route component={Dropdowns} path="/interface/dropdowns"/>
            <Route component={Images} path="/interface/images"/>
            <Route component={ListGroups} path="/interface/list-groups"/>
            <Route component={MediaObjects} path="/interface/media-objects"/>
            <Route component={Modals} path="/interface/modals"/>
            <Route component={Navbars} path="/interface/navbars"/>
            <Route component={Paginations} path="/interface/paginations"/>
            <Route component={ProgressBars} path="/interface/progress-bars"/>
            <Route component={TabsPills} path="/interface/tabs-pills"/>
            <Route component={TooltipPopovers} path="/interface/tooltips-and-popovers"/>
            <Route component={Typography} path="/interface/typography"/>
            <Route component={Notifications} path="/interface/notifications"/>
            <Route component={CropImage} path="/interface/crop-image"/>
            <Route component={DragAndDropElements} path="/interface/drag-and-drop-elements"/>
            <Route component={Calendar} path="/interface/calendar"/>

            { /*    Forms Routes    */}
            <Route component={Forms} path="/forms/forms"/>
            <Route component={FormsLayouts} path="/forms/forms-layouts"/>
            <Route component={InputGroups} path="/forms/input-groups"/>
            <Route component={Wizard} path="/forms/wizard"/>
            <Route component={TextMask} path="/forms/text-mask"/>
            <Route component={Typeahead} path="/forms/typeahead"/>
            <Route component={Toggles} path="/forms/toggles"/>
            <Route component={Editor} path="/forms/editor"/>
            <Route component={DatePicker} path="/forms/date-picker"/>
            <Route component={Dropzone} path="/forms/dropzone"/>
            <Route component={Sliders} path="/forms/sliders"/>

            { /*    Graphs Routes   */}
            <Route component={ReCharts} path="/graphs/re-charts"/>

            { /*    Tables Routes   */}
            <Route component={Tables} path="/tables/tables"/>
            <Route component={ExtendedTable} path="/tables/extended-table"/>
            <Route component={AgGrid} path="/tables/ag-grid"/>

            { /*    Apps Routes     */}
            <Route component={AccountEdit} path="/apps/account-edit"/>
            <Route component={BillingEdit} path="/apps/billing-edit"/>
            <Route component={Chat} path="/apps/chat"/>
            <Route component={Clients} path="/apps/clients"/>
            <Route component={EmailDetails} path="/apps/email-details"/>
            <Route component={Files} path="/apps/files/:type"/>
            <Route component={GalleryGrid} path="/apps/gallery-grid"/>
            <Route component={GalleryTable} path="/apps/gallery-table"/>
            <Route component={ImagesResults} path="/apps/images-results"/>
            <Route component={Inbox} path="/apps/inbox"/>
            <Route component={NewEmail} path="/apps/new-email"/>
            <Route component={ProfileDetails} path="/apps/profile-details"/>
            <Route component={ProfileEdit} path="/apps/profile-edit"/>
            <Route component={Projects} path="/apps/projects/:type"/>
            <Route component={SearchResults} path="/apps/search-results"/>
            <Route component={SessionsEdit} path="/apps/sessions-edit"/>
            <Route component={SettingsEdit} path="/apps/settings-edit"/>
            <Route component={Tasks} path="/apps/tasks/:type"/>
            <Route component={TasksDetails} path="/apps/task-details"/>
            <Route component={TasksKanban} path="/apps/tasks-kanban"/>
            <Route component={Users} path="/apps/users/:type"/>
            <Route component={UsersResults} path="/apps/users-results"/>
            <Route component={VideosResults} path="/apps/videos-results"/>

            { /*    Pages Routes    */}
            <Route component={ComingSoon} path="/pages/coming-soon"/>
            <Route component={Confirmation} path="/pages/confirmation"/>
            <Route component={Danger} path="/pages/danger"/>
            <Route component={Error404} path="/pages/error-404"/>
            <Route component={ForgotPassword} path="/pages/forgot-password"/>
            <Route component={LockScreen} path="/pages/lock-screen"/>
            <Route component={Login} path="/pages/login"/>
            <Route component={Register} path="/pages/register"/>
            <Route component={Success} path="/pages/success"/>
            <Route component={Timeline} path="/pages/timeline"/>

            <Route path='/icons' exact component={Icons}/>

            { /*    404    */}
            <Redirect to="/pages/error-404"/>
        </Switch>
    );
};

//------ Custom Layout Parts --------
export const RoutedNavbars = () => (
    <Switch>
        { /* Other Navbars: */}
        <Route
            component={SidebarANavbar}
            path="/layouts/sidebar-a"
        />
        <Route
            component={NavbarOnly.Navbar}
            path="/layouts/navbar"
        />
        <Route
            component={SidebarWithNavbar.Navbar}
            path="/layouts/sidebar-with-navbar"
        />
        { /* Default Navbar: */}
        <Route
            component={DefaultNavbar}
        />
    </Switch>
);

export const RoutedSidebars = () => (
    <Switch>
        { /* Other Sidebars: */}
        <Route
            component={SidebarASidebar}
            path="/layouts/sidebar-a"
        />
        <Route
            component={SidebarWithNavbar.Sidebar}
            path="/layouts/sidebar-with-navbar"
        />
        { /* Default Sidebar: */}
        <Route
            component={DefaultSidebar}
        />
    </Switch>
);
