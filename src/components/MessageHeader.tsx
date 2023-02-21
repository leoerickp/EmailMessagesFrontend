import { Space, Tag } from "antd";

export const MessageHeader = ({ record }: any) => {
  return (
    <Space direction="vertical">
      <Space>
        <Tag>from:</Tag>
        <div>{record?.from}</div>
      </Space>
      <Space>
        <Tag>to:</Tag>
        <div>{record?.to?.map((value: string) => value + ", ")}</div>
      </Space>
      <Space>
        <Tag>CC:</Tag>
        <div>{record?.cc?.map((value: string) => value + ", ")}</div>
      </Space>
      <Space>
        <Tag>Subject:</Tag>
        <b>{record?.subject}</b>
      </Space>
    </Space>
  );
};
