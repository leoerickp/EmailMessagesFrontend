import { Watermark } from "antd";

export const Profile = () => {
  return (
    <Watermark content={["Leo Erick Pereyra Rodriguez", "leoerickp.cf"]}>
      <h1>This page is developing now!!</h1>
      <h1>See you soon!!!</h1>
      <div style={{ height: 500 }} />
    </Watermark>
  );
};
