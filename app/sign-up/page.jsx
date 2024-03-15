"use client";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  // this for form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  // this to show & hide passowrd button
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <main className="flex flex-row justify-between w-full relative min-h-[120vh]: max-md:flex-col max-md:min-h-[110vh] max-lg:backdrop:blur">
        <img
          className="w-[50%] h-[706px] -translate-x-[100px] max-md:h-auto max-md:w-full max-md:translate-x-0"
          src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?t=st=1706449343~exp=1706449943~hmac=4f246fdbff45b363dfa1c57848c35e82430692d5ed589a375f48f574b39e973a"
        />
        <section className="flex w-[50%] flex-col absolute top-[20%] right-[0px] max-md:mt-0 max-md:w-full max-md:top-[40%]">
          <div>
            <h3 className="text-black text-4xl text-left font-medium font-['Inter'] leading-[30px] tracking-wider max-md:text-2xl">
              Create an account
            </h3>
            <p className="text-black text-left mt-[24px] text-base font-normal font-['Poppins'] leading-normal">
              Enter your details below
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className={`border-[0] outline-none text-base border-b-2 pb-1 pl-1 w-full mt-[48px] placeholder:opacity-40 placeholder:font-['Poppins'] text-black border-gray-400 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}

              <input
                type="text"
                placeholder="Email or phone number"
                {...register("email", { required: "Email is required" })}
                className={`border-[0] outline-none text-base border-b-2 pb-1 pl-1 w-full mt-[40px] placeholder:opacity-40 placeholder:font-['Poppins'] text-black border-gray-400 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
              <div className="w-full flex flex-row">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password should be at least 8 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
                      message:
                        "Password should contain at least one letter, one number, and one special character",
                    },
                  })}
                  className={`border-[0] outline-none text-base border-b-2 pb-1 pl-1 w-full mt-[40px] placeholder:opacity-40 placeholder:font-['Poppins'] text-black border-gray-400 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                />
                <button
                  type="button"
                  className="text-2xl mt-auto ml-4"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
              <button
                type="submit"
                className="w-full h-12 px-2 py-4 bg-red-500 rounded justify-center items-center gap-2.5 mt-5 text-neutral-50 text-base font-medium font-['Poppins'] leading-normal"
              >
                Create account
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Register;
