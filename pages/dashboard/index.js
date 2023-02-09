import React from 'react'
import {withAuth} from "../../components/auth/with-auth";
import styles from "pages/dashboard/dashboard.module.css";
import {UserInvitePane, UserInviteButton, UserInvitesTable} from "@roq/ui-react";
import {NotificationModal} from '@roq/ui-react';
import Link from "next/link";
import AppLayout from "../../components/layout/app/app.layout";


function DashboardPage() {
    return (
        <AppLayout>
            <div className={styles.container}>
                Welcome to Roq
            </div>
        </AppLayout>
    );
}

export default withAuth({
    redirectIfAuthenticated: false,
    redirectTo: "/login",
})(DashboardPage);