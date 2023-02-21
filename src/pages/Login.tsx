import { Card } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FormLogin } from "../components/FormLogin";
import { removeAuth } from "../store/slices/auth/authSlice";

export const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeAuth());
  }, []);
  return (
    <Card title="Login" bordered={false} style={{ width: 350 }}>
      <FormLogin />
    </Card>
  );
};
