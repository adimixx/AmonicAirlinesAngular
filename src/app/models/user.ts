import { office } from "./office";
import { role } from "./role";

export interface user {
  id: number;
  role_id: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  office_id: number;
  birthdate: Date;
  active: boolean;
  office: office;
  role: role;
  age: number;
}
