import useEdit from "./hooks";

const Edit = () => {
  return <div>1245</div>;
};

const EditLayout = (props) => {
  return <Edit {...useEdit(props)} />;
};

export default EditLayout;
