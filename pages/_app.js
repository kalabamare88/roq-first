import "styles/globals.css";
import { RoqProvider, ChatProvider } from "@roq/nextjs";
import { clientConfig } from "config";
import "@roq/nextjs/index.css";

export default function App({ Component, pageProps }) {
    /*
      The ROQ provider sets the context for inner ROQ components to consume variables such as the session
    */
    return (
        <RoqProvider
            config={{
                host: clientConfig.roq.platformUrl,
                auth: {
                    useRoqAuth: true,
                },
            }}
        >
            <ChatProvider>
                <Component {...pageProps} />
            </ChatProvider>
        </RoqProvider>
    );
}
