import * as Yup from "yup";

export const signUpSchema = Yup.object({
    firstName:Yup.string().required("firstName is required"),
    lastName:Yup.string().required("lastName is required"),
    email:Yup.string().email().required("email is required"),
    password:Yup.string().required("password is required")
})