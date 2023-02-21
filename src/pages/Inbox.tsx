import { TrayMessages } from "../components/TrayMessages";
import { ValidTray } from "../enums/valid-tray.enum";

export const Inbox = () => {
  return <TrayMessages tray={ValidTray.inbox} />;
};
