import { TrayMessages } from "../components/TrayMessages";
import { ValidTray } from "../enums/valid-tray.enum";

export const Outbox = () => {
  return <TrayMessages tray={ValidTray.outbox} />;
};
