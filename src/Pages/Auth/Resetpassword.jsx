import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import mark from '../../assets/mark.png'

const ResetPassword = () => {
  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("https://proodoosfiles.onrender.com/api/verify/", {
        email: values.email,
      });

      if (response.status === 200) {
        toast.success("Reset link sent successfully!");
      } else {
        toast.error("Failed to send the reset link. Please try again.");
      }
    } catch (error) {
      console.error("Error sending reset link:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="lg:bg-gradient-to-b from-custom-light-blue via-custom-deep-blue to-custom-purple flex items-center justify-center">
      {/* Toastify container */}
      <ToastContainer />

      <div className="w-[90%] lg:w-[1027px] lg:bg-white rounded-lg p-6 lg:pl-[45px] lg:pr-[45px] lg:pt-[74px] lg:pb-[200px] lg:mt-[149px] lg:mb-[149px]">
        <p className="text-center text-[20px] pb-[18px] font-normal lg:hidden pt-[60px]">
          ProodosFiles
        </p>
        <h6 className="text-center text-[24px] pb-[148px] font-semibold lg:text-[32px] lg:font-extrabold">
          Forget Password
        </h6>

        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="lg:flex lg:justify-between lg:items-center">
              <div className="lg:w-1/2">
                <p className="text-[14px] font-normal pb-[21px] lg:text-[16px]">
                  Email
                </p>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-md border border-[#D0D5DD80] h-[44px] pl-4 text-[#24242480] mb-6"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mb-4"
                />
                <button
                  type="submit"
                  className="text-[16px] mb-[425px] lg:mb-[20px] font-bold w-full h-[44px] text-white bg-gradient-to-r from-custom-light-blue to-custom-purple rounded-md"
                >
                  Send reset link
                </button>
              </div>
              <div>
                <img
                  src={mark}
                  alt="markicon"
                  className="hidden lg:block max-w-full h-auto"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
