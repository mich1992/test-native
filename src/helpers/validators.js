
import * as yup from "yup";
import { object } from 'yup';


const formSchema = object({
    email: yup.string()
        .email()
        .min(10, "Min length 10 characters require")
        .required("Email is required"),
    password: yup.string()
        .required("Password is required")
        .min(6, "Password length should be at least 4 characters")
        .max(12, "Password cannot exceed more than 12 characters"),
    repeatPassword: yup.string()
        .required("Confirm Password is required")
        .min(6, "Password length should be at least 4 characters")
        .max(12, "Password cannot exceed more than 12 characters")
        .oneOf([yup.ref("password")], "Passwords do not match")
})

export default formSchema;
