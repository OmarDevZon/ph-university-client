import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/feature/auth/auth.api";

export const Login = () => {
  const [login, { data, isError, isLoading }] = useLoginMutation();


  const { register, handleSubmit } = useForm(
    {
      defaultValues: {
        id : 'A-0001',
        password : 'admin123'
      }
    }
  );
  const onSubmit = (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    console.log(userInfo);
    login(userInfo);
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
