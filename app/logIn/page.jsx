"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LogIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <main className="flex flex-row justify-between w-full relative max-md:flex-col max-md:min-h-[87vh] max-lg:backdrop:blur">
        <img
          className="w-[50%] h-[706px] max-md:h-auto max-md:w-full"
          src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?t=st=1706449343~exp=1706449943~hmac=4f246fdbff45b363dfa1c57848c35e82430692d5ed589a375f48f574b39e973a"
        />
        <section className="flex flex-col absolute top-[30%] right-[0px] max-md:mt-5 max-md:top-[40%]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h3 className="text-black text-4xl text-left font-medium font-['Inter'] leading-[30px] tracking-wider max-md:text-2xl">
                Log in to <span className="text-orange-400">ZillaCode</span>
              </h3>
              <p className="text-black text-left mt-[24px] text-base font-normal font-['Poppins'] leading-normal">
                Enter your details below
              </p>
            </div>
            <div>
              <Controller
                control={control}
                rules={{ required: "Email or phone number is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Email or phone number"
                    className={`border-[0] outline-none text-base border-b-2 pb-1 pl-1 w-full mt-[48px] placeholder:opacity-40 placeholder:font-['Poppins'] text-black border-gray-400 ${
                      errors?.email ? "border-red-500" : ""
                    }`}
                  />
                )}
                name="email"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <Controller
                control={control}
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <div className="flex flex-row">
                    <input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className={`border-[0] outline-none text-base border-b-2 pb-1 pl-1 w-full mt-[40px] placeholder:opacity-40 placeholder:font-['Poppins'] text-black border-gray-400 ${
                        errors?.password ? "border-red-500" : ""
                      }`}
                    />
                    <button
                      type="button"
                      className="text-2xl mt-auto ml-4"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                )}
                name="password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="flex w-full justify-between">
              <button
                type="submit"
                className="w-[133px] h-12 px-2 py-4 bg-red-500 rounded justify-center items-center gap-2.5 mt-5 text-neutral-50 text-base font-medium font-['Poppins'] leading-normal"
              >
                Log In
              </button>
              <a className="text-red-500 text-base font-normal font-['Poppins'] leading-normal mt-8">
                Forget Password?
              </a>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default LogIn;
