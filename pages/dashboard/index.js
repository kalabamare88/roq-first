import { withAuth } from "../../components/auth/with-auth";
import styles from "pages/dashboard/dashboard.module.css";
import {UserInvitePane, UserInviteButton, UserInvitesTable} from "@roq/ui-react";
import { NotificationModal } from '@roq/ui-react';
import Link from "next/link";
import AppLayout from "../../components/layout/app/app.layout";


function DashboardPage() {
  return (
      <AppLayout>

      <div className={styles.container}>
              {/*<UserInvitePane
              lable={"how"}
              onInviteError={function noRefCheck(){}}
              onInviteSuccess={function noRefCheck(){}}
          />
          <UserInviteButton/>
*/}
              <Link href={"/invites"}>Invites</Link>

              <UserInvitesTable/>

          </div>
      </AppLayout>
          );
}

export default withAuth({
  redirectIfAuthenticated: false,
  redirectTo: "/login",
})(DashboardPage);
