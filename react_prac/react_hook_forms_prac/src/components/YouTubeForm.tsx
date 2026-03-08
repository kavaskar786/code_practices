import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type youtubeUserFormType = {
  username: string;
  email: string;
  channel: string;
};

export const YouTubeForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<youtubeUserFormType>();
  const handleYoutubeUserFormSubmit = (data: youtubeUserFormType) => {
    console.log("submitted", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleYoutubeUserFormSubmit)} noValidate>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: "Username is required" })}
        />
        <p>{errors.username?.message}</p>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
            validate: (fieldValue) => {
              return (
                fieldValue.endsWith("@gmail.com") ||
                "Only gmail.com emails are allowed"
              );
            },
          })}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="channel">Channel:</label>
        <input
          type="text"
          id="channel"
          {...register("channel", { required: "Channel is required" })}
        />
        <p>{errors.channel?.message}</p>
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
};
