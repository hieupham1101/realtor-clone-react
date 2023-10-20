import useListHome from "./hook";
import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Radio } from "antd";
import { getFilePreview } from "../../helper/file";
import "../../index.css";
import ErrorMessage from "../../helper/ErrorMessage";

const ListHome = ({
  getRootProps,
  getInputProps,
  onFormLayoutChange,
  componentSize,
  TextArea,
  formik,
}) => {
  return (
    <div className="w-full flex justify-center bg-[#2E0249]">
      <Form
        layout="vertical"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        onSubmitCapture={formik.handleSubmit}
        size={componentSize}
        style={{
          marginTop: "30px",
          backgroundColor: " #EEEEEE",
          padding: "20px",
        }}
        className="rounded-lg"
      >
        <Form.Item
          label="Sell or Rent"
          className="text-gray-900 text-xl not-italic font-medium
"
        >
          <Radio.Group
            buttonStyle="solid"
            className="space-x-8 flex"
            value={formik?.values?.type}
            onChange={formik.handleChange}
            name="type"
          >
            <Radio.Button
              value="rent"
              name="type"
              className="w-[180px] rounded-lg hover:!text-white hover:!bg-[#A91079]"
            >
              Rent
            </Radio.Button>
            <Radio.Button
              value="sell"
              name="type"
              className="w-[180px] rounded-lg hover:!text-white hover:!bg-[#A91079]"
            >
              <span>Sell</span>
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Name"
          className="text-gray-900 text-xl not-italic font-medium"
        >
          <Input
            size="medium"
            prefix={<UserOutlined />}
            value={formik?.values?.name}
            onChange={formik.handleChange}
            name="name"
          />
          <ErrorMessage name="name" formik={formik} />
        </Form.Item>
        <Form.Item>
          <Form.Item
            label="Beds"
            className="text-gray-900 text-xl not-italic font-medium "
            style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          >
            <div className="flex flex-col	">
              <InputNumber
                name="bedrooms"
                onChange={(value) => formik.setFieldValue("bedrooms", value)}
                value={formik?.values?.bedrooms}
              />
              <div>
                <ErrorMessage name="bedrooms" formik={formik} />
              </div>
            </div>
          </Form.Item>
          <Form.Item
            label="Baths"
            className="text-gray-900 text-xl not-italic font-medium"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <div className="flex flex-col	">
              <InputNumber
                name="bathrooms"
                value={formik?.values?.bathrooms}
                onChange={(value) => formik.setFieldValue("bathrooms", value)}
              />
              <div>
                <ErrorMessage name="bathrooms" formik={formik} />
              </div>
            </div>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Parking spot"
          className="text-gray-900 text-xl not-italic font-medium"
        >
          <Radio.Group
            buttonStyle="solid"
            className="space-x-8 flex"
            name="parking"
            value={formik?.values?.parking}
            onChange={formik.handleChange}
          >
            <Radio.Button
              onChange={formik.handleChange}
              value={true}
              name="parking"
              className="w-[180px] rounded-lg hover:!text-white hover:!bg-[#A91079]"
            >
              Yes
            </Radio.Button>
            <Radio.Button
              value={false}
              name="parking"
              onChange={formik.handleChange}
              className="w-[180px] rounded-lg hover:!text-white hover:!bg-[#A91079]"
            >
              No
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Furnished"
          className="text-gray-900 text-xl not-italic font-medium"
        >
          <Radio.Group
            defaultValue="a"
            buttonStyle="solid"
            className="space-x-8 flex"
            value={formik?.values?.furnished}
            name="furnished"
            onChange={formik.handleChange}
          >
            <Radio.Button
              value={true}
              name="furnished"
              className="w-[180px] rounded-lg hover:!text-white hover:!bg-[#A91079]"
            >
              Yes
            </Radio.Button>
            <Radio.Button
              value={false}
              className="w-[180px] rounded-lg hover:!text-white hover:!bg-[#A91079]"
              name="furnished"
            >
              No
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Address"
          className="text-gray-900 text-xl not-italic font-medium"
        >
          <TextArea
            rows={3}
            value={formik?.values?.address}
            name="address"
            onChange={formik.handleChange}
          />
          <ErrorMessage name="address" formik={formik} />
        </Form.Item>

        <Form.Item
          label="Description"
          className="text-gray-900 text-xl not-italic font-medium"
        >
          <TextArea
            rows={3}
            value={formik?.values?.description}
            name="description"
            onChange={formik.handleChange}
          />
          <ErrorMessage name="description" formik={formik} />
        </Form.Item>
        <Form.Item
          label="Offers"
          className="text-gray-900 text-xl not-italic font-medium"
        >
          <Radio.Group
            name="offer"
            value={formik?.values?.offer}
            buttonStyle="solid"
            className="space-x-8 flex"
          >
            <Radio.Button
              value={true}
              onChange={formik.handleChange}
              className="w-[180px] rounded-lg"
              name="offer"
            >
              Yes
            </Radio.Button>
            <Radio.Button
              value={false}
              onChange={formik.handleChange}
              className="w-[180px] rounded-lg"
              name="offer"
            >
              No
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Regular Price"
          className="text-gray-900 text-xl not-italic font-medium"
        >
          <div className="flex flex-col">
            <InputNumber
              value={formik?.values?.regularPrice}
              onChange={(value) => formik.setFieldValue("regularPrice", value)}
              name="regularPrice"
            />
            <ErrorMessage name="regularPrice" formik={formik} />
          </div>
        </Form.Item>
        {formik?.values?.offer && (
          <Form.Item
            label="Discounted Price"
            className="text-gray-900 text-xl not-italic font-medium"
          >
            <div className="flex flex-col"></div>
            <InputNumber
              value={formik?.values?.discountedPrice}
              onChange={(value) =>
                formik.setFieldValue("discountedPrice", value)
              }
              name="discountedPrice"
            />
            <ErrorMessage name="discountedPrice" formik={formik} />
          </Form.Item>
        )}
        <Form.Item
          label="Choose file"
          className="mb-[50px] text-gray-900 text-xl not-italic font-medium"
        >
          <div
            {...getRootProps({
              className:
                " min-h-[100px] max-w-100px] bg-[#fafafa] border-dashed border-[#eeeeee] border-[1px] flex flex-col items-center justify-center rounded-sm mt-1",
            })}
          >
            <input {...getInputProps()} />
            {formik?.values?.image ? (
              <img
                src={getFilePreview(formik?.values?.image) || ""}
                width={100}
                height={100}
                className="rounded-sm"
                alt="house_image"
              />
            ) : (
              <>
                <img
                  src="src\assets\image\paper-upload.svg"
                  alt="Picture of the author"
                />
                <p> Kéo thả hình ảnh hoặc chọn file để tải lên</p>
              </>
            )}
          </div>
          <ErrorMessage name="image" formik={formik} />
        </Form.Item>
        <Button
          htmlType="submit"
          loading={formik.isSubmitting}
          className="w-full bg-[#A91079] text-white hover:!text-white"
        >
          Create Submit
        </Button>
      </Form>
    </div>
  );
};

const ListHomeLayout = (props) => {
  return <ListHome {...useListHome(props)} />;
};

export default ListHomeLayout;
