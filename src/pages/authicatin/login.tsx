/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/feature/auth/auth.api";
import { useAppDispatch } from "../../redux/feature/hooks";
import { setUser } from "../../redux/feature/auth/auth.slice";
import { verifyToken } from "../../utils/verify.token";

export const Login = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const onSubmit = async (inputData: any) => {
    const userInfo = {
      id: inputData.id,
      password: inputData.password,
    };

    const result = await login(userInfo).unwrap();
    const token = result.data.accessToken;
    const user = verifyToken(token);
    dispatch(setUser({ user, token: result.data.accessToken }));
  };

  
  return (
    <section id="login-page">
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">Enter your id here</label>
          <input type="text" id="id" {...register("id")} />
        </div>
        <div>
          <label htmlFor="password">Enter your password here</label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <Button htmlType="submit"> Login</Button>
      </form>
    </section>
  );
};
