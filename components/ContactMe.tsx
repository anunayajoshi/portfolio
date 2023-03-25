import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // (window.location.href = `mailto:anunayajoshi@gmail.com?subject=${data.subject}&body=${data.message} - ${data.name} - ${data.email}`
    console.log(data);
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-12 2xl:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-8 mt-24">
        <h4 className="text-3xl md:text-4xl font-semibold text-center">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't contact me after work hours. <br />
          <span className="text-2xl">
            {" "}
            but lucky for you, I work <br />{" "}
          </span>
          <span className="decoration-[#F7AB0A]/50 underline">24/7</span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl"> 90184504</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl"> Dont stalk me</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl"> anunayajoshi@gmail.com</p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* <div className="md:flex md:space-x-2 space-y-2 "> */}
          <input
            {...register("name")}
            className="contactInput"
            type="text"
            placeholder="Name"
          ></input>
          <input
            {...register("email")}
            className="contactInput"
            type="email"
            placeholder="Email"
          ></input>
          {/* </div> */}

          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          ></input>

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
          <button
            className="bg-[#F7AB0A]
            py-5
            px-10
            rounded-md
            text-black
            font-bold
            text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
