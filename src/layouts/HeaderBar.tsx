import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import { useSelector } from "react-redux";
import { useTableEmailContext } from "../contexts/tableEmails/TableEmailContext";

export const HeaderBar = () => {
  const { userData } = useSelector((state: any) => state.auth);
  const { isSocketConnected } = useTableEmailContext();
  return (
    <Header style={{ color: isSocketConnected ? "white" : "grey" }}>
      <Space style={{ display: "flex", justifyContent: "end" }}>
        <Badge dot={isSocketConnected}>
          <Avatar shape="square" size="large" icon={<UserOutlined />} />
        </Badge>
        {isSocketConnected ? (
          <p style={{ padding: 0, margin: 0 }}>
            Logged as:{" "}
            <span style={{ color: "#f7d259" }}>{userData.user.email}</span>
          </p>
        ) : (
          "Disconnected"
        )}
      </Space>
    </Header>
  );
};
