import emailjs from "@emailjs/browser";
import { SubmitHandler, useForm } from "react-hook-form";
import { MessageForm } from "../types";
import Error from "../components/Error";
import { useAppStore } from "../stores/useAppStore";
import Notification from "../components/Notification";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MessageForm>();
  const showNotification = useAppStore((state) => state.showNotification);

  const onSubmit: SubmitHandler<MessageForm> = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_API_EMAIL_SERVICE,
        import.meta.env.VITE_API_EMAIL_TEMPLATE,
        data,
        import.meta.env.VITE_API_EMAIL_KEY
      );
      showNotification({ text: "Email sent successfully", error: false });
    } catch {
      showNotification({ text: "Error sending email", error: true });
    } finally {
      reset();
    }
  };

  return (
    <>
      <div className="container mt-10 sm:mx-auto">
        <h2 className="mb-10 text-3xl font-black text-center text-white uppercase">
          Contact Form
        </h2>

        <form
          className="px-5 py-10 mx-6 mb-10 bg-opacity-75 rounded-lg shadow-lg sm:mx-60 bg-slate-900"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="gap-6 mb-5 sm:grid sm:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="text-lg font-bold text-white uppercase"
              >
                Full Name
              </label>

              <input
                type="text"
                id="fullName"
                {...register("fullName", { required: "Full Name is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Full Name"
              />
              {errors.fullName && <Error>{errors.fullName?.message}</Error>}
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-lg font-bold text-white uppercase"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Email"
              />
              {errors.email && <Error>{errors.email?.message}</Error>}
            </div>
          </div>

          <div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-lg font-bold text-white uppercase"
              >
                Message
              </label>

              <textarea
                id="message"
                maxLength={120}
                minLength={1}
                rows={5}
                className="h-full p-2 font-bold border border-gray-300 rounded-lg text-md"
                {...register("message", {
                  required: "Message is required",
                  maxLength: {
                    value: 120,
                    message: "Message cannot exceed 120 characters",
                  },
                })}
              ></textarea>
              {errors.message && <Error>{errors.message?.message}</Error>}
            </div>
          </div>
          <button className="w-full p-2 mt-6 text-white bg-red-800 rounded-lg shadow-lg opacity-75 hover:bg-red-700 text-md">
            Send
          </button>
        </form>
        <Notification />
      </div>
    </>
  );
}
