import React from "react";
import { Navigate } from "react-router-dom";


import DashboardCrm from "../pages/DashboardCrm";
import DashboardEcommerce from "../pages/DashboardEcommerce";

import MonthGrid from "../pages/Calendar/MonthGrid";
import Calendar from "../pages/Calendar/Maincalender";

import MailInbox from "../pages/EmailInbox";
import BasicAction from "../pages/Email/EmailTemplates/BasicAction";
import EcommerceAction from "../pages/Email/EmailTemplates/EcommerceAction";

import ProjectList from "../pages/Projects/ProjectList";
import ProjectOverview from "../pages/Projects/ProjectOverview";
import CreateProject from "../pages/Projects/CreateProject";

import TaskDetails from "../pages/Tasks/TaskDetails";
import TaskList from "../pages/Tasks/TaskList";
import Kanbanboard from "../pages/Tasks/KanbanBoard";
import CrmCompanies from "../pages/Crm/CrmCompanies";
import CrmContacts from "../pages/Crm/CrmContacts";
import CrmDeals from "../pages/Crm/CrmDeals/index";
import CrmLeads from "../pages/Crm/CrmLeads/index";

import InvoiceList from "../pages/Invoices/InvoiceList";
import InvoiceCreate from "../pages/Invoices/InvoiceCreate";
import InvoiceDetails from "../pages/Invoices/InvoiceDetails";

import Basic404 from '../pages/AuthenticationInner/Errors/Basic404';
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

import UserProfile from "../pages/Authentication/user-profile";
import APIKey from "../pages/APIKey/index";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const authProtectedRoutes = [
     { path: "/dashboard", component: <DashboardCrm /> },

     { path: "/apps-calendar", component: <Calendar /> },
     { path: "/apps-calendar-month-grid", component: <MonthGrid /> },

     //EMail
     { path: "/apps-mailbox", component: <MailInbox /> },
     { path: "/apps-email-basic", component: <BasicAction /> },
     { path: "/apps-email-ecommerce", component: <EcommerceAction /> },

     //Projects
     { path: "/apps-projects-list", component: <ProjectList /> },
     { path: "/apps-projects-overview", component: <ProjectOverview /> },
     { path: "/apps-projects-create", component: <CreateProject /> },

     //Task
     { path: "/apps-tasks-list-view", component: <TaskList /> },
     { path: "/apps-tasks-details", component: <TaskDetails /> },
     { path: "/apps-tasks-kanban", component: <Kanbanboard /> },

     //Crm
     { path: "/apps-crm-contacts", component: <CrmContacts /> },
     { path: "/apps-crm-companies", component: <CrmCompanies /> },
     { path: "/apps-crm-deals", component: <CrmDeals /> },
     { path: "/apps-crm-leads", component: <CrmLeads /> },

     //Invoices
     { path: "/apps-invoices-list", component: <InvoiceList /> },
     { path: "/apps-invoices-details", component: <InvoiceDetails /> },
     { path: "/apps-invoices-create", component: <InvoiceCreate /> },
     { path: "/apps-api-key", component: <APIKey /> },
     { path: "/profile", component: <UserProfile /> },
];

const publicRoutes = [
     { path: "/logout", component: <Logout /> },
     { path: "/login", component: <Login /> },
     { path: "/register", component: <Register /> },


     { path: "/auth-404-basic", component: <Basic404 /> },


     { path: "/", component: <Home /> },
     { path: "/contact", component: <Contact /> },

];

export { authProtectedRoutes, publicRoutes };
