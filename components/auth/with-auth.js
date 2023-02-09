import { useRouter } from "next/router";
import { useSession } from "@roq/nextjs";

import React, { useEffect, useMemo } from "react";
import AppLoader from "../loader";


export function withAuth({
  redirect = true,
  redirectTo,
  redirectIfAuthenticated = false,
}) {
  return (WrappedComponent) => {
    const WithAuth = (props) => {
      const router = useRouter();
      const { session, status } = useSession();
      const isLoading = status === "loading";
      console.log(session,'second', status, 'both');
      const shouldRedirect = useMemo(
        // we need both access token and user to consider current session as authenticated
        () =>
          (!isLoading || session === undefined) &&
          Boolean(redirectIfAuthenticated) === Boolean(session?.id),
        [isLoading, session]
      );
      useEffect(() => {
        // redirect only after first session load
        if (redirect && shouldRedirect && redirectTo) {
          void router.replace(redirectTo);
        }
      }, [shouldRedirect]);

      // only show loader when initializing session (first time)
      if (isLoading || shouldRedirect) {
        return <AppLoader />;
      }

      return <WrappedComponent {...(props)} />;
    };
    return WithAuth;
  };
}
