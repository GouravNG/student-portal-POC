import {
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  LibraryBig,
  ScrollText,
} from 'lucide-react'

export const SideBarElements = [
  {
    name: 'Survey',
    link: '/survey',
    icon: () => <ScrollText color='black' />,
  },
  {
    name: 'Notifications',
    link: '/notifications',
    icon: () => <Bell color='black' />,
  },
  {
    name: 'Assignments',
    link: '/assignments',
    icon: () => <LibraryBig color='black' />,
  },
  {
    name: 'Academic Records',
    link: '/academic-records',
    icon: () => <GraduationCap color='black' />,
  },
  {
    name: 'Calender',
    link: '/calender',
    icon: () => <CalendarDays color='black' />,
  },
  {
    name: 'Placement Cell',
    link: '/placement-cell',
    icon: () => <BriefcaseBusiness color='black' />,
  },
]

export const UniName = 'VCET'
