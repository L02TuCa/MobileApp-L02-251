import { useState } from "react";
import svgPaths from "../imports/svg-svkvdgwod6";
import {
  Search,
  Dashboard,
  Task,
  Folder,
  Calendar,
  UserMultiple,
  Analytics,
  DocumentAdd,
  Settings,
  User,
  ChevronDown,
  ChevronRight,
  OverflowMenuHorizontal,
  CheckmarkOutline,
  Time,
  InProgress,
  Pending,
  Archive,
  Flag,
  AddLarge,
  Filter,
  Renew,
  View,
  Report,
  Share,
  CloudUpload,
  Notification,
  Security,
  Integration,
  StarFilled,
  Group,
  Calendar as CalendarIcon,
  Home,
  ChartBar,
  FolderOpen,
  ChevronLeft,
  ChevronUp,
} from "@carbon/icons-react";

// Softer spring animation curve
const softSpringEasing = "cubic-bezier(0.25, 1.1, 0.4, 1)";

function InterfacesLogo1() {
  return (
    <div
      className="aspect-[24/24] basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Interfaces Logo"
    >
      <div
        className="absolute aspect-[24/16] left-0 right-0 top-1/2 translate-y-[-50%]"
        data-name="Union"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 24 16"
        >
          <g id="Union">
            <path
              d={svgPaths.p36880f80}
              fill="var(--fill-0, #FAFAFA)"
              style={{
                fill: "color(display-p3 0.9804 0.9804 0.9804)",
                fillOpacity: "1",
              }}
            />
            <path
              d={svgPaths.p355df480}
              fill="var(--fill-0, #FAFAFA)"
              style={{
                fill: "color(display-p3 0.9804 0.9804 0.9804)",
                fillOpacity: "1",
              }}
            />
            <path
              d={svgPaths.pfa0d600}
              fill="var(--fill-0, #FAFAFA)"
              style={{
                fill: "color(display-p3 0.9804 0.9804 0.9804)",
                fillOpacity: "1",
              }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div
      className="bg-[#000000] relative rounded-[999px] shrink-0 size-8"
      data-name="Avatar"
    >
      <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative size-8">
        <User size={16} className="text-neutral-50" />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-neutral-800 border-solid inset-0 pointer-events-none rounded-[999px]"
      />
    </div>
  );
}

function SearchContainer({
  isCollapsed = false,
}: {
  isCollapsed?: boolean;
}) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div
      className={`relative shrink-0 transition-all duration-500 ${
        isCollapsed ? "w-full flex justify-center" : "w-full"
      }`}
      style={{ transitionTimingFunction: softSpringEasing }}
      data-name="Search Container"
    >
      <div
        className={`bg-[#000000] h-10 relative rounded-lg flex items-center transition-all duration-500 ${
          isCollapsed
            ? "w-10 min-w-10 justify-center"
            : "w-full"
        }`}
        style={{ transitionTimingFunction: softSpringEasing }}
      >
        <div
          className={`flex items-center justify-center shrink-0 transition-all duration-500 ${
            isCollapsed ? "p-1" : "px-1"
          }`}
          style={{ transitionTimingFunction: softSpringEasing }}
        >
          <div className="size-8 flex items-center justify-center">
            <Search size={16} className="text-neutral-50" />
          </div>
        </div>
        <div
          className={`flex-1 min-h-px min-w-px relative transition-opacity duration-500 overflow-hidden ${
            isCollapsed ? "opacity-0 w-0" : "opacity-100"
          }`}
          style={{ transitionTimingFunction: softSpringEasing }}
        >
          <div className="flex flex-col justify-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center pl-0 pr-2 py-1 relative w-full">
              <input
                type="text"
                placeholder="Search tasks, projects..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full bg-transparent border-none outline-none font-['Lexend:Regular',_sans-serif] font-normal text-[14px] text-neutral-50 placeholder:text-neutral-400 leading-[20px]"
                tabIndex={isCollapsed ? -1 : 0}
              />
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-neutral-800 border-solid inset-0 pointer-events-none rounded-lg"
        />
      </div>
    </div>
  );
}

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  children?: MenuItem[];
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface SidebarContent {
  title: string;
  sections: MenuSection[];
}

function MenuItem({
  item,
  isExpanded,
  onToggle,
  onItemClick,
  isCollapsed,
}: {
  item: MenuItem;
  isExpanded?: boolean;
  onToggle?: () => void;
  onItemClick?: () => void;
  isCollapsed?: boolean;
}) {
  const handleClick = () => {
    if (item.hasDropdown && onToggle) {
      onToggle();
    } else if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div
      className={`relative shrink-0 transition-all duration-500 ${
        isCollapsed ? "w-full flex justify-center" : "w-full"
      }`}
      style={{ transitionTimingFunction: softSpringEasing }}
    >
      <div
        className={`select-none rounded-lg cursor-pointer transition-all duration-500 flex items-center relative my-0.5 ${
          item.isActive
            ? "bg-neutral-900"
            : "hover:bg-neutral-900"
        } ${
          isCollapsed
            ? "w-10 min-w-10 h-10 justify-center p-4"
            : "w-full h-10 px-4 py-2"
        }`}
        style={{ transitionTimingFunction: softSpringEasing }}
        onClick={handleClick}
        title={isCollapsed ? item.label : undefined}
      >
        <div className="flex items-center justify-center shrink-0">
          {item.icon}
        </div>
        <div
          className={`flex-1 min-h-px min-w-px relative transition-opacity duration-500 overflow-hidden ${
            isCollapsed ? "opacity-0 w-0" : "opacity-100 ml-3"
          }`}
          style={{ transitionTimingFunction: softSpringEasing }}
        >
          <div className="flex flex-col justify-center relative size-full">
            <div className="font-['Lexend:Regular',_sans-serif] font-normal text-[14px] text-neutral-50 leading-[20px] truncate">
              {item.label}
            </div>
          </div>
        </div>
        {item.hasDropdown && (
          <div
            className={`flex items-center justify-center shrink-0 transition-opacity duration-500 ${
              isCollapsed ? "opacity-0 w-0" : "opacity-100 ml-2"
            }`}
            style={{
              transitionTimingFunction: softSpringEasing,
            }}
          >
            <ChevronDown
              size={16}
              className={`text-neutral-50 transition-transform duration-500`}
              style={{
                transitionTimingFunction: softSpringEasing,
                transform: isExpanded
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function SubMenuItem({
  item,
  onItemClick,
}: {
  item: MenuItem;
  onItemClick?: () => void;
}) {
  return (
    <div className="select-none w-full pl-9 pr-1 py-[1px]">
      <div
        className="h-10 w-full rounded-lg cursor-pointer transition-colors hover:bg-neutral-900 flex items-center px-3 py-1"
        onClick={onItemClick}
      >
        <div className="flex-1 min-w-0">
          <div className="font-['Lexend:Regular',_sans-serif] font-normal text-[14px] text-neutral-300 leading-[18px] truncate">
            {item.label}
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuSection({
  section,
  expandedItems,
  onToggleExpanded,
  isCollapsed,
}: {
  section: MenuSection;
  expandedItems: Set<string>;
  onToggleExpanded: (itemKey: string) => void;
  isCollapsed?: boolean;
}) {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-stretch p-0 relative shrink-0 w-full">
      <div
        className={`relative shrink-0 w-full transition-all duration-500 overflow-hidden ${
          isCollapsed ? "h-0 opacity-0" : "h-10 opacity-100"
        }`}
        style={{ transitionTimingFunction: softSpringEasing }}
      >
        <div className="flex flex-col justify-center relative size-full">
          <div className="box-border content-stretch flex flex-col h-10 items-start justify-center p-[16px] relative w-full">
            <div className="font-['Lexend:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-left text-neutral-400 text-nowrap">
              <p className="block leading-[20px] whitespace-pre">
                {section.title}
              </p>
            </div>
          </div>
        </div>
      </div>
      {section.items.map((item, index) => {
        const itemKey = `${section.title}-${index}`;
        const isExpanded = expandedItems.has(itemKey);
        return (
          <div
            key={itemKey}
            className="w-full flex flex-col content-stretch"
          >
            <MenuItem
              item={item}
              isExpanded={isExpanded}
              onToggle={() => onToggleExpanded(itemKey)}
              onItemClick={() =>
                console.log(`Clicked ${item.label}`)
              }
              isCollapsed={isCollapsed}
            />
            {isExpanded && item.children && !isCollapsed && (
              <div className="flex flex-col gap-1 mb-2">
                {item.children.map((child, childIndex) => (
                  <SubMenuItem
                    key={`${itemKey}-${childIndex}`}
                    item={child}
                    onItemClick={() =>
                      console.log(`Clicked ${child.label}`)
                    }
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function getSidebarContent(
  activeSection: string,
): SidebarContent {
  const contentMap: Record<string, SidebarContent> = {
    dashboard: {
      title: "Dashboard",
      sections: [
        {
          title: "Dashboard Types",
          items: [
            {
              icon: (
                <View size={16} className="text-neutral-50" />
              ),
              label: "Overview",
              isActive: true,
            },
            {
              icon: (
                <Dashboard
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Executive Summary",
              hasDropdown: true,
              children: [
                { label: "Revenue Overview" },
                { label: "Key Performance Indicators" },
                { label: "Strategic Goals Progress" },
                { label: "Department Highlights" },
              ],
            },
            {
              icon: (
                <ChartBar
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Operations Dashboard",
              hasDropdown: true,
              children: [
                { label: "Project Timeline" },
                { label: "Resource Allocation" },
                { label: "Team Performance" },
                { label: "Capacity Planning" },
              ],
            },
            {
              icon: (
                <Analytics
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Financial Dashboard",
              hasDropdown: true,
              children: [
                { label: "Budget vs Actual" },
                { label: "Cash Flow Analysis" },
                { label: "Expense Breakdown" },
                { label: "Profit & Loss Summary" },
              ],
            },
          ],
        },
        {
          title: "Report Summaries",
          items: [
            {
              icon: (
                <Report size={16} className="text-neutral-50" />
              ),
              label: "Weekly Reports",
              hasDropdown: true,
              children: [
                { label: "Team Productivity" },
                { label: "Project Completion" },
                { label: "Budget Utilization" },
                { label: "Client Satisfaction" },
              ],
            },
            {
              icon: (
                <StarFilled
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Monthly Insights",
              hasDropdown: true,
              children: [
                { label: "Revenue Growth" },
                { label: "New Clients" },
                { label: "Team Expansion" },
                { label: "Cost Reduction" },
              ],
            },
            {
              icon: (
                <View size={16} className="text-neutral-50" />
              ),
              label: "Quarterly Analysis",
              hasDropdown: true,
              children: [
                { label: "Market Position" },
                { label: "ROI" },
                { label: "Customer Retention" },
                { label: "Innovation Index" },
              ],
            },
          ],
        },
        {
          title: "Business Intelligence",
          items: [
            {
              icon: (
                <ChartBar
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Performance Metrics",
              hasDropdown: true,
              children: [
                { label: "Sales Conversion" },
                { label: "Lead Response Time" },
                { label: "Customer Lifetime Value" },
                { label: "Churn Rate" },
              ],
            },
            {
              icon: (
                <Analytics
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Predictive Analytics",
              hasDropdown: true,
              children: [
                { label: "Q4 Revenue Forecast" },
                { label: "Resource Demand" },
                { label: "Market Trends" },
                { label: "Risk Assessment" },
              ],
            },
          ],
        },
      ],
    },
    tasks: {
      title: "Tasks",
      sections: [
        {
          title: "Quick Actions",
          items: [
            {
              icon: (
                <AddLarge
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "New task",
            },
            {
              icon: (
                <Filter size={16} className="text-neutral-50" />
              ),
              label: "Filter tasks",
            },
          ],
        },
        {
          title: "My Tasks",
          items: [
            {
              icon: (
                <Time size={16} className="text-neutral-50" />
              ),
              label: "Due today",
              hasDropdown: true,
              children: [
                { label: "Review design mockups" },
                { label: "Update documentation" },
                { label: "Test new feature" },
              ],
            },
            {
              icon: (
                <InProgress
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "In progress",
              hasDropdown: true,
              children: [
                { label: "Implement user auth" },
                { label: "Database migration" },
              ],
            },
            {
              icon: (
                <CheckmarkOutline
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Completed",
              hasDropdown: true,
              children: [
                { label: "Fixed login bug" },
                { label: "Updated dependencies" },
                { label: "Code review completed" },
              ],
            },
          ],
        },
        {
          title: "Other",
          items: [
            {
              icon: (
                <Flag size={16} className="text-neutral-50" />
              ),
              label: "Priority tasks",
              hasDropdown: true,
              children: [
                { label: "Security update" },
                { label: "Client presentation" },
              ],
            },
            {
              icon: (
                <Archive
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Archived",
            },
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      sections: [
        {
          title: "Quick Actions",
          items: [
            {
              icon: (
                <AddLarge
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "New project",
            },
            {
              icon: (
                <Filter size={16} className="text-neutral-50" />
              ),
              label: "Filter projects",
            },
          ],
        },
        {
          title: "Active Projects",
          items: [
            {
              icon: (
                <FolderOpen
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Web Application",
              hasDropdown: true,
              children: [
                { label: "Frontend development" },
                { label: "API integration" },
                { label: "Testing & QA" },
              ],
            },
            {
              icon: (
                <FolderOpen
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Mobile App",
              hasDropdown: true,
              children: [
                { label: "UI/UX design" },
                { label: "Native development" },
              ],
            },
          ],
        },
        {
          title: "Other",
          items: [
            {
              icon: (
                <CheckmarkOutline
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Completed",
            },
            {
              icon: (
                <Archive
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Archived",
            },
          ],
        },
      ],
    },
    calendar: {
      title: "Calendar",
      sections: [
        {
          title: "Views",
          items: [
            {
              icon: (
                <View size={16} className="text-neutral-50" />
              ),
              label: "Month view",
            },
            {
              icon: (
                <CalendarIcon
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Week view",
            },
            {
              icon: (
                <Time size={16} className="text-neutral-50" />
              ),
              label: "Day view",
            },
          ],
        },
        {
          title: "Events",
          items: [
            {
              icon: (
                <Time size={16} className="text-neutral-50" />
              ),
              label: "Today's events",
              hasDropdown: true,
              children: [
                { label: "Team standup (9:00 AM)" },
                { label: "Client call (2:00 PM)" },
                { label: "Project review (4:00 PM)" },
              ],
            },
            {
              icon: (
                <CalendarIcon
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Upcoming events",
            },
          ],
        },
        {
          title: "Quick Actions",
          items: [
            {
              icon: (
                <AddLarge
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "New event",
            },
            {
              icon: (
                <Share size={16} className="text-neutral-50" />
              ),
              label: "Share calendar",
            },
          ],
        },
      ],
    },
    teams: {
      title: "Teams",
      sections: [
        {
          title: "My Teams",
          items: [
            {
              icon: (
                <Group size={16} className="text-neutral-50" />
              ),
              label: "Development Team",
              hasDropdown: true,
              children: [
                { label: "John Doe (Lead)" },
                { label: "Jane Smith" },
                { label: "Mike Johnson" },
              ],
            },
            {
              icon: (
                <Group size={16} className="text-neutral-50" />
              ),
              label: "Design Team",
              hasDropdown: true,
              children: [
                { label: "Sarah Wilson" },
                { label: "Tom Brown" },
              ],
            },
          ],
        },
        {
          title: "Quick Actions",
          items: [
            {
              icon: (
                <AddLarge
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Invite member",
            },
            {
              icon: (
                <UserMultiple
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Manage teams",
            },
          ],
        },
      ],
    },
    analytics: {
      title: "Analytics",
      sections: [
        {
          title: "Reports",
          items: [
            {
              icon: (
                <Report size={16} className="text-neutral-50" />
              ),
              label: "Performance report",
            },
            {
              icon: (
                <ChartBar
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Task completion",
            },
            {
              icon: (
                <Analytics
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Team productivity",
            },
          ],
        },
        {
          title: "Insights",
          items: [
            {
              icon: (
                <StarFilled
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Key metrics",
              hasDropdown: true,
              children: [
                { label: "Task completion metrics" },
                { label: "Time tracking analysis" },
                { label: "Team efficiency report" },
                { label: "Performance benchmarks" },
              ],
            },
          ],
        },
      ],
    },
    files: {
      title: "Files",
      sections: [
        {
          title: "Quick Actions",
          items: [
            {
              icon: (
                <CloudUpload
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Upload file",
            },
            {
              icon: (
                <AddLarge
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "New folder",
            },
          ],
        },
        {
          title: "Recent Files",
          items: [
            {
              icon: (
                <DocumentAdd
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Recent documents",
              hasDropdown: true,
              children: [
                { label: "Project proposal.pdf" },
                { label: "Meeting notes.docx" },
                { label: "Design specs.figma" },
              ],
            },
            {
              icon: (
                <Share size={16} className="text-neutral-50" />
              ),
              label: "Shared with me",
            },
          ],
        },
        {
          title: "Organization",
          items: [
            {
              icon: (
                <Folder size={16} className="text-neutral-50" />
              ),
              label: "All folders",
            },
            {
              icon: (
                <Archive
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Archived files",
            },
          ],
        },
      ],
    },
    settings: {
      title: "Settings",
      sections: [
        {
          title: "Account",
          items: [
            {
              icon: (
                <User size={16} className="text-neutral-50" />
              ),
              label: "Profile settings",
            },
            {
              icon: (
                <Security
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Security",
            },
            {
              icon: (
                <Notification
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Notifications",
            },
          ],
        },
        {
          title: "Workspace",
          items: [
            {
              icon: (
                <Settings
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Preferences",
              hasDropdown: true,
              children: [
                { label: "Theme settings" },
                { label: "Time zone" },
                { label: "Default notifications" },
              ],
            },
            {
              icon: (
                <Integration
                  size={16}
                  className="text-neutral-50"
                />
              ),
              label: "Integrations",
            },
          ],
        },
      ],
    },
  };

  return contentMap[activeSection] || contentMap.tasks;
}

function IconNavButton({
  children,
  isActive = false,
  onClick,
}: {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={`box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-lg shrink-0 size-10 min-w-10 cursor-pointer transition-colors duration-500
        ${
          isActive
            ? "bg-neutral-800 text-neutral-50"
            : "hover:bg-neutral-900 text-neutral-400 hover:text-neutral-300"
        }`}
      style={{ transitionTimingFunction: softSpringEasing }}
      data-name="Icon Nav Button"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function IconNavigation({
  activeSection,
  onSectionChange,
}: {
  activeSection: string;
  onSectionChange: (section: string) => void;
}) {
  const navItems = [
    {
      id: "dashboard",
      icon: <Dashboard size={16} />,
      label: "Dashboard",
    },
    { id: "tasks", icon: <Task size={16} />, label: "Tasks" },
    {
      id: "projects",
      icon: <Folder size={16} />,
      label: "Projects",
    },
    {
      id: "calendar",
      icon: <Calendar size={16} />,
      label: "Calendar",
    },
    {
      id: "teams",
      icon: <UserMultiple size={16} />,
      label: "Teams",
    },
    {
      id: "analytics",
      icon: <Analytics size={16} />,
      label: "Analytics",
    },
    {
      id: "files",
      icon: <DocumentAdd size={16} />,
      label: "Files",
    },
  ];

  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-col gap-2 h-[800px] items-center justify-start overflow-clip p-4 relative rounded-l-2xl shrink-0 w-16 border-r border-neutral-800"
      data-name="Icon Navigation"
    >
      {/* Logo */}
      <div className="mb-2 size-10 flex items-center justify-center">
        <div className="size-7">
          <InterfacesLogo1 />
        </div>
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col gap-2 w-full items-center">
        {navItems.map((item) => (
          <IconNavButton
            key={item.id}
            isActive={activeSection === item.id}
            onClick={() => onSectionChange(item.id)}
          >
            {item.icon}
          </IconNavButton>
        ))}
      </div>

      {/* Bottom section */}
      <div className="flex-1" />
      <div className="flex flex-col gap-2 w-full items-center">
        <IconNavButton
          isActive={activeSection === "settings"}
          onClick={() => onSectionChange("settings")}
        >
          <Settings size={16} />
        </IconNavButton>
        <div className="size-8">
          <Avatar />
        </div>
      </div>
    </div>
  );
}

function SectionTitle({
  title,
  onToggleCollapse,
  isCollapsed,
}: {
  title: string;
  onToggleCollapse: () => void;
  isCollapsed: boolean;
}) {
  if (isCollapsed) {
    return (
      <div
        className="relative shrink-0 w-full flex justify-center transition-all duration-500"
        style={{ transitionTimingFunction: softSpringEasing }}
        data-name="Section Title Collapsed"
      >
        <button
          onClick={onToggleCollapse}
          className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-lg shrink-0 cursor-pointer transition-all duration-500 hover:bg-neutral-900 text-neutral-400 hover:text-neutral-300 size-10 min-w-10"
          style={{ transitionTimingFunction: softSpringEasing }}
        >
          <ChevronLeft
            size={16}
            className="transition-transform duration-500"
            style={{
              transitionTimingFunction: softSpringEasing,
              transform: "rotate(180deg)",
            }}
          />
        </button>
      </div>
    );
  }

  return (
    <div
      className="relative shrink-0 w-full overflow-hidden transition-all duration-500"
      style={{ transitionTimingFunction: softSpringEasing }}
      data-name="Section Title"
    >
      <div className="flex flex-row items-center justify-between relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-center justify-start relative h-10 overflow-hidden transition-opacity opacity-100 duration-500"
          style={{ transitionTimingFunction: softSpringEasing }}
        >
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center px-2 py-1 relative shrink-0">
            <div className="font-['Lexend:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[18px] text-left text-neutral-50 text-nowrap">
              <p className="block leading-[27px] whitespace-pre">
                {title}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pr-1">
          <button
            onClick={onToggleCollapse}
            className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-lg shrink-0 cursor-pointer transition-all duration-500 hover:bg-neutral-900 text-neutral-400 hover:text-neutral-300 size-10 min-w-10"
            style={{
              transitionTimingFunction: softSpringEasing,
            }}
          >
            <ChevronLeft
              size={16}
              className="transition-transform duration-500"
              style={{
                transitionTimingFunction: softSpringEasing,
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailSidebar({
  activeSection,
}: {
  activeSection: string;
}) {
  const [expandedItems, setExpandedItems] = useState<
    Set<string>
  >(new Set());
  const [isCollapsed, setIsCollapsed] = useState(false);
  const content = getSidebarContent(activeSection);

  const toggleExpanded = (itemKey: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemKey)) {
      newExpanded.delete(itemKey);
    } else {
      newExpanded.add(itemKey);
    }
    setExpandedItems(newExpanded);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-[#000000] box-border content-stretch flex flex-col gap-4 h-[800px] items-start justify-start overflow-visible p-4 relative rounded-r-2xl shrink-0 transition-all duration-500 ${
        isCollapsed
          ? "w-16 min-w-16 !px-0 justify-center"
          : "w-80"
      }`}
      style={{ transitionTimingFunction: softSpringEasing }}
      data-name="Detail Sidebar"
    >
      <SectionTitle
        title={content.title}
        onToggleCollapse={toggleCollapse}
        isCollapsed={isCollapsed}
      />
      <SearchContainer isCollapsed={isCollapsed} />

      <div
        className={`basis-0 box-border content-stretch flex flex-col grow min-h-px min-w-10 p-0 relative shrink-0 w-full overflow-y-auto transition-all duration-500 ${
          isCollapsed
            ? "gap-2 items-center justify-start"
            : "gap-4 items-start justify-start"
        }`}
        style={{ transitionTimingFunction: softSpringEasing }}
      >
        {content.sections.map((section, index) => (
          <MenuSection
            key={`${activeSection}-${index}`}
            section={section}
            expandedItems={expandedItems}
            onToggleExpanded={toggleExpanded}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>
    </div>
  );
}

function TwoLevelSidebar() {
  const [activeSection, setActiveSection] =
    useState("dashboard");

  return (
    <div
      className="flex flex-row"
      data-name="Two Level Sidebar"
    >
      <IconNavigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <DetailSidebar activeSection={activeSection} />
    </div>
  );
}

export function Frame760() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative size-full min-h-screen">
      <TwoLevelSidebar />
    </div>
  );
}