import avatar3 from "@/public/images/avatar/avatar-3.jpg";

export interface User {
  id: string | number;
  email: string;
  password: string;
  name?: string;
  image?: string;
  [key: string]: any;
}

export const user: User[] = [
  {
    id: 1,
    email: "admin@example.com",
    password: "admin123",
    name: "Admin User",
    image: avatar3.src || "/images/avatar/avatar-3.jpg",
  },
];

