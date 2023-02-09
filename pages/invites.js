import AppLayout from "../components/layout/app/app.layout";
import { withAuth } from "../components/auth/with-auth";
import { UserInvitesTable } from "@roq/nextjs";

function InvitesPage() {
  return (
    <AppLayout>
      <UserInvitesTable style={{ background: "#FFF" }} />
    </AppLayout>
  );
}

export default withAuth({
  redirectIfAuthenticated: false,
  redirectTo: './login',
})(InvitesPage);




