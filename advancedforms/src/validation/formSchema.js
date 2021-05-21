import * as yup from "yup";
import { string } from "yup/lib/locale";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("A name is required")
    .min(2, "Your name must be 2 characters long"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  termsOfService: yup.boolean(),
});

export default formSchema;
