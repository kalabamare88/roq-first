import "styles/globals.css";
import { RoqProvider } from "@roq/ui-react";
import { clientConfig } from "config";
import { SessionContext, SessionProvider } from "next-auth/react";
import "@roq/ui-react/dist/index.css";



export default function App({ Component, pageProps }) {
  return (
      <SessionProvider>
        <SessionContext.Consumer>
          {({ data }) => (
              <RoqProvider
                  config={{
                    host: clientConfig.roq.platformUrl,
                    token: data?.user?.roqAccessToken,
                    socket: true,
                  }}
              >
                  <Component {...pageProps} />
              </RoqProvider>
          )}
        </SessionContext.Consumer>
      </SessionProvider>
  );
}
