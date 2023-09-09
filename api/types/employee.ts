export type Employee = {
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  role: EmployeeRole;
};

export type EmployeeRole =
  | "CEO"
  | "Manager"
  | "Developer"
  | "Designer"
  | "Intern";
