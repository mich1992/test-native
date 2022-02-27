
import * as yup from "yup";
import { object } from 'yup';


const formSchema = object({
    email: yup.string()
        .required("Email is required")
        .email('Must be an Email'),
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
