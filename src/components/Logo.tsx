import { Avatar } from "antd";
import fotoLeo from "../assets/img/Leo_FondoTransp.png";

export const Logo = () => {
  return (
    <div className="logo">
      <div>
        <Avatar src={fotoLeo} size="large" />
      </div>
      <div>
        <a href="https://leoerickp.cf/">Leo Erick Pereyra Rodriguez</a>
      </div>
    </div>
  );
};
