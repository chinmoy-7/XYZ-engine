import * as Yup from "yup"

export const formSchema=Yup.object({
    project_name:Yup.string().required("Empty Field").min(2),
    project_desc:Yup.string().required("Empty Field"),
    client:Yup.string().required("Empty Field"),
    contractor:Yup.string().required("Empty Field"),
})

export const step2Schema=Yup.object({
    max_x:Yup.number("Must be a number").positive("Must be a number"),
    min_x:Yup.number("Must be a number").positive("Must be a number"),
    max_y:Yup.number("Must be a number").positive("Must be a number"),
    min_y:Yup.number("Must be a number").positive("Must be a number"),
})