import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      Dashboard protected
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
