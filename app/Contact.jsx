import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="section-padding ">
      <div className="flex gap-[10px] py-[100px] ">
        <p className="text-black text-opacity-50">Home /</p>
        <p className="text-black">Contact</p>
      </div>
      <div className="w-full flex flex-col lg:flex-row ">
        <div className="w-full lg:w-[340px] px-[20px] flex-col flex justify-between sm:flex-row-reverse lg:flex-col gap-4  ">
          <div className=" flex items-start gap-7 flex-col  ">
            <div className="flex items-center gap-5">
              <div className="Flex h-[40px] w-[40px] bg-[#DB4444] rounded-full">
                <FiPhone color="white" size={25} />
              </div>
              <p className=" text-[1rem] font-medium "> Call to Us</p>
            </div>
            <p className=" text-[1rem]">
              We are available 24/7, 7 days a week.
            </p>
            <p className=" text-[1rem]">Phone: +8801611112222</p>
          </div>
          <div className="h-[1px] sm:hidden w-[300px] bg-[#7D8184] lg:block my-5  " />
          <div className=" flex items-start gap-7 flex-col ">
            <div className="flex items-center gap-5">
              <div className="Flex h-[40px] w-[40px] bg-[#DB4444] rounded-full">
                <MdOutlineMailOutline color="white" size={25} />
              </div>
              <p className=" text-[1rem] font-medium "> Write to Us</p>
            </div>
            <p className=" text-[1rem]">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className=" text-[1rem]">Emails: customer@exclusive.com</p>
            <p className=" text-[1rem]">Emails: support@exclusive.com</p>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
