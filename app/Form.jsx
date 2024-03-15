"use client";
import { useRef, useState } from "react";
const Form = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };
  const [loading, setLoading] = useState(false);
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="px-[20px]  flex flex-col mt-10 lg:mt-0"
    >
      <div className="w-full">
        <div className="flex  gap-5 flex-col sm:flex-row">
          <input
            className="bg-[#F5F5F5] w-full px-4 py-[20px] "
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          <input
            className="bg-[#F5F5F5]  w-full px-4 py-[20px]"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          <input
            className="bg-[#F5F5F5]  w-full px-4 py-[20px]"
            type="text"
            name="Phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your Phone"
          />
        </div>
        <textarea
          className="bg-[#F5F5F5] w-full px-4 py-[20px] mt-10"
          rows={8}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
        />
      </div>
      <button
        type="submit"
        className=" px-[30px] sm:px-[50px] md:px-[70px] py-[15px] md:py-[20px] rounded-md self-end mt-10 bg-[#DB4444]"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default Form;
