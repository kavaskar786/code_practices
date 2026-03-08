import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export const YouTubeForm = () => {
  const { register, control } = useForm();

  return (
    <>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" {...register("username")} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="channel">Channel:</label>
        <input type="text" id="channel" {...register("channel")} />
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
};
