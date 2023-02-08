import {  SessionStrategy } from "next-auth";
import { v4 as uuid } from "uuid";



let serverConfig;

if (typeof window === "undefined") {
  serverConfig = Object.freeze({
    nextAuth: {
      secret:process.env.NEXTAUTH_SECRET,
      session: {
        strategy: "jwt" ,
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 1 * 24 * 60 * 60,
        generateSessionToken: uuid,
      },
      jwt: {
        secret:process.env.NEXTAUTH_ENCRYPTION_KEY,
      },
    },
    roq: {
      environmentId:process.env.ROQ_ENV_ID,
      apiKey: process.env.ROQ_API_KEY,
      platformUrl:process.env.ROQ_PLATFORM_URL,
      jwtSecret: process.env.JWT_SECRET,
    },
  });
}
export { serverConfig };
