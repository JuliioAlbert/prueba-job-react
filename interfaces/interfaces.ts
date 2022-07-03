export interface Route {
  path: string;
  component?: React.ComponentType<any>;
  exact?: boolean;
  name: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface IResponse<T> {
  success: boolean;
  data: T;
}

export interface Data {
  employees: Employee[];
}

export interface Employee {
  id?: number;
  name: string;
  last_name: string;
  birthday: number;
}
