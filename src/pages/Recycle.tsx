import { ValidTray } from "../enums/valid-tray.enum";
import { TrayMessages } from "../components/TrayMessages";

export const Recycle = () => {
  return <TrayMessages tray={ValidTray.recycle} />;
};
