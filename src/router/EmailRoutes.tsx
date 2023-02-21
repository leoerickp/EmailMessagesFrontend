import React from "react";
import { Layout, theme } from "antd";
import { FooterBar } from "../layouts/FooterBar";
import { HeaderBar } from "../layouts/HeaderBar";
import { SideBar } from "../layouts/SideBar";
import { Route, Routes } from "react-router-dom";
import { Inbox } from "../pages/Inbox";
import { Outbox } from "../pages/Outbox";
import { Recycle } from "../pages/Recycle";
import { Error404 } from "../pages/Error404";
import { TableEmailProvider } from "../contexts/tableEmails/TableEmailProvider";
import { useHandleSocketConnection } from "../hooks/useHandleSocketConnection";
import { MessageDetail } from "../pages/MessageDetail";
import { Profile } from "../pages/Profile";

const { Content } = Layout;

export const EmailRoutes = () => {
  const { isSocketConnected } = useHandleSocketConnection();
  return (
    <Layout style={{ height: "100vh" }}>
      <TableEmailProvider isSocketConnected={isSocketConnected}>
        <SideBar />
        <Layout>
          <HeaderBar />
          <Content style={{ margin: "10px 10px" }}>
            <Routes>
              <Route path="/" element={<Inbox />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/inbox/:id" element={<MessageDetail />} />
              <Route path="/outbox" element={<Outbox />} />
              <Route path="/outbox/:id" element={<MessageDetail />} />
              <Route path="/recycle" element={<Recycle />} />
              <Route path="/recycle/:id" element={<MessageDetail />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/*" element={<Error404 />} />
            </Routes>
          </Content>
          <FooterBar />
        </Layout>
      </TableEmailProvider>
    </Layout>
  );
};
