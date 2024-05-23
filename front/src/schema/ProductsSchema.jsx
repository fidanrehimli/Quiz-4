import * as yup from "yup"

export const ProductsSchema = yup.object().shape({
    img:yup.string().required("Please image"),
    title:yup.string().required("Please title"),
    price:yup.number().required("Please price")

})