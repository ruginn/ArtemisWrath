import { ClerkProvider } from "@clerk/nextjs";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default DashboardLayout;
