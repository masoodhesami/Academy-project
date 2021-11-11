import React from "react";
import { useFormik } from "formik";
import RegisterButton from "../RegisterButton/RegisterButton";
import { ToastContainer } from "react-toastify";
import RegisterUser from "../../../core/services/api/Register.api";

const initialValues = {
  fullName: "",
  password: "",
  email: "",
  phoneNumber: "",
  birthDate: "",
  nationalId: "",
};

const onSubmit = async (values) => {
  const userRegister = {
    fullName: values.fullName,
    password: values.password,
    email: values.email,
    phoneNumber: values.phoneNumber,
    birthDate: values.birthDate,
    nationalId: values.nationalId,
  };
  await RegisterUser(userRegister);
};

const validate = (values) => {
  let errors = {};

  if (!values.fullName) {
    errors.fullName = "نام کاربری خود را وارد کنید";
  }

  if (!values.password) {
    errors.password = "رمز عبور خود را وارد کنید";
  }

  if (!values.email) {
    errors.email = "ایمیل خود را وارد کنید";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "شماره تماس خود را وارد کنید";
  }

  if (!values.birthDate) {
    errors.birthDate = "تاریخ تولد خود را وارد کنید";
  }

  if (!values.nationalId) {
    errors.nationalId = "کد ملی خود را وارد کنید";
  }

  return errors;
};

const RegisterForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <ToastContainer position="top-center" />
      <form onSubmit={formik.handleSubmit} className="mt-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="نام کاربری"
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
          <div className="text-danger mt-1">
            {formik.touched.fullName && formik.errors.fullName ? (
              <div>{formik.errors.fullName}</div>
            ) : null}
          </div>
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="ایمیل"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
          <div className="text-danger mt-1">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="رمز عبور"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          <div className="text-danger mt-1">
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="شماره تماس"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
          />
          <div className="text-danger mt-1">
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div>{formik.errors.phoneNumber}</div>
            ) : null}
          </div>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="تاریخ تولد"
            id="birthDate"
            name="birthDate"
            onChange={formik.handleChange}
            value={formik.values.birthDate}
            onBlur={formik.handleBlur}
          />
          <div className="text-danger mt-1">
            {formik.touched.birthDate && formik.errors.birthDate ? (
              <div>{formik.errors.birthDate}</div>
            ) : null}
          </div>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="کد ملی"
            id="nationalId"
            name="nationalId"
            onChange={formik.handleChange}
            value={formik.values.nationalId}
            onBlur={formik.handleBlur}
          />
          <div className="text-danger mt-1">
            {formik.touched.nationalId && formik.errors.nationalId ? (
              <div>{formik.errors.nationalId}</div>
            ) : null}
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <RegisterButton />
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
