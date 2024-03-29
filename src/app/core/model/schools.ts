import { Employees } from './employees';
import { Courses } from './courses';
import { Departments } from './departments';
import { EmployeeRoles } from './employee-roles';
import { EmployeeTitles } from './employee-titles';
import { Machines } from './machines';
import { SchoolYearLevels } from './school-year-levels';
import { Sections } from './sections';
import { Students } from './students';
import { Users } from './users';

export class Schools {
  schoolId: string;
  schoolCode: string;
  orgSchoolCode: string;
  schoolName: string;
  schoolAddress: string;
  schoolContactNumber: string;
  schoolEmail: string;
  studentsAllowableTimeLate: string;
  studentsTimeLate: string;
  restrictGuardianTime: boolean;
  employeesTimeBeforeSwipeIsAllowed: string;
  employeesAllowableTimeLate: string;
  employeesTimeLate: string;
  timeBeforeSwipeIsAllowed: string;
  smsNotificationForStaffEntry: string;
  smsNotificationForStudentBreakTime: string;
  dateRegistered: Date;
  dateUpdated: Date;
  active: boolean;
  courses: Courses[];
  departments: Departments[];
  employeeRoles: EmployeeRoles[];
  employeeTitles: EmployeeTitles[];
  employees: Employees[];
  machines: Machines[];
  schoolYearLevels: SchoolYearLevels[];
  sections: Sections[];
  registeredByUser: Users;
  updatedByUser: Users;
  students: Students[];
}
