import { NotificationTypes } from "server/enums";
import { roqClient } from "server/roq";

export class UserService {
  static async welcomeUser(userId) {
    roqClient.asSuperAdmin().notify({
      notification: {
        key: NotificationTypes.welcome,
        recipients: { userIds: [userId] },
      },
    });
  }
}
