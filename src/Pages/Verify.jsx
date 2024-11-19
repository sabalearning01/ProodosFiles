import React, { useState } from 'react';
import * as Yup from 'yup';
import personal from "../../src/assets/personal.png"

const Verify = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [errors, setErrors] = useState({});

  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Enter a valid email address')
      .required('Email is required'),
  });

  const handleSubmit = async () => {
    try {
      // Validate form data against schema
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      // Proceed with form submission (e.g., send reset link)
      console.log('Reset link sent to:', formData.email);
    } catch (validationError) {
      // Collect and display errors
      const newErrors = {};
      validationError.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <div className="lg:bg-gradient-to-b from-custom-light-blue via-custom-deep-blue to-custom-purple flex items-center justify-center">
      <div className="w-[90%] lg:w-[1027px] lg:bg-white rounded-lg p-6 lg:pl-[45px] lg:pr-[45px] lg:pt-[74px] lg:pb-[200px] lg:mt-[149px] lg:mb-[149px]">
        <p className="text-center text-[20px] pb-[18px] font-normal lg:hidden pt-[60px]">ProodosFiles</p>
        <h6 className="text-center text-[24px] pb-[148px] font-semibold lg:text-[32px] lg:font-extrabold">Forget Password</h6>
        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="lg:w-1/2">
            <p className="text-[14px] font-normal pb-[21px] lg:text-[16px]">Email</p>
            <input
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-md border border-[#D0D5DD80] h-[44px] pl-4 text-[#24242480] mb-6"
            />
            {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email}</p>}
            <button
              onClick={handleSubmit}
              className="text-[16px] mb-[425px] lg:mb-[20px] font-bold w-full h-[44px] text-white bg-gradient-to-r from-custom-light-blue to-custom-purple rounded-md"
            >
              Verify account
            </button>
          </div>
          <div>
            <img src={personal} alt="" className="hidden lg:block max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
