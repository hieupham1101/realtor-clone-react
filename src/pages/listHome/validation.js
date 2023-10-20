import * as yup from "yup";

export const validation = yup.object().shape({
  name: yup.string().required("Please enter name department"),
  image: yup.mixed().required("Please install image"),
  bedrooms: yup
    .number()
    .typeError("Bedrooms must be a number")
    .nullable()
    .moreThan(0, "Bedrooms cannot be negative")
    .transform((_, val) => (val !== "" ? Number(val) : null)),
  bathrooms: yup
    .number()
    .typeError("Bathrooms must be a number")
    .nullable()
    .moreThan(0, "Bathrooms cannot be negative")
    .transform((_, val) => (val !== "" ? Number(val) : null)),
  address: yup.string().required("Vui lòng nhập địa chỉ"),
  description: yup.string().required("Vui lòng nhập mô tả"),
  regularPrice: yup
    .number()
    .typeError("Regular price must be a number")
    .nullable()
    .moreThan(0, "Regular price cannot be negative")
    .transform((_, val) => (val !== "" ? Number(val) : null)),
  discountedPrice: yup
    .number()
    .test(
      "Please select a different price",
      "Discounted price cannot bigger or equal regular price",
      function (discountedPrice) {
        const regularPrice = this.parent.regularPrice;
        return discountedPrice < regularPrice;
      }
    )
    .typeError("Discounted price must be a number")
    .nullable()
    .moreThan(0, "Regular price cannot be negative")
    .transform((_, val) => (val !== "" ? Number(val) : null)),
});
