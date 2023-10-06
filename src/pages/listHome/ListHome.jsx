import useListHome from "./hook";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Radio } from "antd";
import { useDropzone } from "react-dropzone";

const ListHome = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const { TextArea } = Input;
  const { getRootProps, getInputProps } = useDropzone();

  const [formData, setFormData] = useState({
    type: "rent",
    name: "abcxyz",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: true,
    regularPrice: 0,
    discountedPrice: 0,
    image: "",
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
    image,
  } = formData;

  const onChange = () => {
    setFormData({ ...formData, offer: !offer });
  };

  const onSubmit = () => {};

  return (
    <div className="w-full flex justify-center">
      <Form
        layout="vertical"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 700,
          marginTop: "30px",
        }}
      >
        <Form.Item label="Sell or Rent">
          <Radio.Group
            defaultValue="a"
            buttonStyle="solid"
            className="space-x-8 flex"
            value={type}
            onChange={onChange}
          >
            <Radio.Button value="rent" className="w-[180px] rounded-lg">
              Rent
            </Radio.Button>
            <Radio.Button value="sell" className="w-[180px] rounded-lg">
              <span className="!border-r-none ">Sell</span>
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Name">
          <Input
            size="medium"
            prefix={<UserOutlined />}
            value={name}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item
            label="Beds"
            rules={[{ required: true }]}
            style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          >
            <InputNumber value={bedrooms} onChange={onChange} />
          </Form.Item>
          <Form.Item
            label="Baths"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <InputNumber value={bathrooms} onChange={onChange} />
          </Form.Item>
          <Form.Item label="Parking spot">
            <Radio.Group
              defaultValue="a"
              buttonStyle="solid"
              className="space-x-8 flex"
              value={parking}
              onChange={onChange}
            >
              <Radio.Button value={true} className="w-[180px] rounded-lg">
                Yes
              </Radio.Button>
              <Radio.Button value={false} className="w-[180px] rounded-lg">
                No
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Furnished">
            <Radio.Group
              defaultValue="a"
              buttonStyle="solid"
              className="space-x-8 flex"
              value={furnished}
              onChange={onChange}
            >
              <Radio.Button value={true} className="w-[180px] rounded-lg">
                Yes
              </Radio.Button>
              <Radio.Button value={false} className="w-[180px] rounded-lg">
                No
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Address">
            <TextArea rows={3} value={address} onChange={onChange} />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea rows={3} value={description} onChange={onChange} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Offers">
          <Radio.Group
            value={offer}
            buttonStyle="solid"
            className="space-x-8 flex"
            onChange={onChange}
          >
            <Radio.Button value={true} className="w-[180px] rounded-lg">
              Yes
            </Radio.Button>
            <Radio.Button value={false} className="w-[180px] rounded-lg">
              No
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Regular Price">
          <InputNumber value={regularPrice} onChange={onChange} />
        </Form.Item>
        {offer && (
          <Form.Item label="Discounted Price">
            <InputNumber value={discountedPrice} onChange={onChange} />
          </Form.Item>
        )}
        <Form.Item label="Choose file">
          <div className="border-solid border-2 border-[#e0e0e0] bg-white h-12 content-center cursor-pointer">
            <div {...getRootProps()}>
              <input {...getInputProps()} value={image} onChange={onChange} />
              <p> Select file</p>
            </div>
          </div>
        </Form.Item>
        <Form.Item>
          <Button
            className="w-full bg-[#1677ff] text-white hover:text-white"
            onSubmit={onSubmit}
          >
            Create Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const ListHomeLayout = (props) => {
  return <ListHome {...useListHome(props)} />;
};

export default ListHomeLayout;
