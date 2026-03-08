import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type youtubeUserFormType = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
};

export const YouTubeForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<youtubeUserFormType>({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
    },
  });
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
            validate: {
              notAdmin: (fieldValue) =>
                fieldValue !== "admin@gmail.com" ||
                "Enter a different email address",
              notBlackListed: (fieldValue) =>
                !fieldValue.endsWith("baddomain.com") ||
                "This domain is not supported",
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

        <label htmlFor="twitter">Twitter:</label>
        <input
          type="text"
          id="twitter"
          {...register("social.twitter", {
            required: "Twitter handle is required",
          })}
        />

        <label htmlFor="facebook">Facebook:</label>
        <input
          type="text"
          id="facebook"
          {...register("social.facebook", {
            required: "Facebook handle is required",
          })}
        />

        <label htmlFor="phone1">Phone 1:</label>
        <input
          type="text"
          id="phone1"
          {...register("phoneNumbers.0", {
            required: "Phone number is required",
          })}
        />

        <label htmlFor="phone2">Phone 2:</label>
        <input
          type="text"
          id="phone2"
          {...register("phoneNumbers.1", {
            required: "Phone number is required",
          })}
        />

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
};
