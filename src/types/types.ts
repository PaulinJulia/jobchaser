import { ReactNode } from "react";

export interface Job {
  hits: [];
  id: string;
  jobs: string;
  headline: string;
  source_links: { url: string }[];
  workplace_addresses: { municipality: string }[];
  brief: string;
  occupation_field: { label: string };
  employer: { name: string };
  favorite?: boolean;
}

export interface ListInfo {
  jobs: Job[];
}

export interface CardItemProps {
  ad: Job;
  onToggleButton: (id: string) => void;
}

export interface SearchProps {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
}

export interface User {
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface SignInFormData {
  email: string;
  password: string;
}
export interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}
