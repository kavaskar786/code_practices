import { FormEvent, useRef, useState } from "react";

// type ContactDetail = {
//   id: number;
//   email: string;
//   description: string;
// };

// interface is the good choice for type script
interface ContactDetail {
  id: number;
  email: string;
  description: string;
}
const ContactForm = () => {
  const [contactDetails, setContactDetails] = useState<ContactDetail[]>([]);
  const email = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const id = useRef<number>(-1);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    id.current = id.current + 1;
    e.preventDefault();
    setContactDetails((prev) => [
      ...prev,
      {
        id: id.current,
        email: email.current!.value,
        description: description.current!.value,
      },
    ]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" ref={email} />
        </div>
        <div className="">
          <label htmlFor="descripation">Description</label>
          <input type="text" name="descripation" ref={description} />
        </div>
        <button type="submit">submit</button>
      </form>
      <div className="">
        {contactDetails.map(({ id, email, description }, index) => (
          <p key={index}>{`${id} ${email} ${description}`}</p>
        ))}
      </div>
    </div>
  );
};
export default ContactForm;
