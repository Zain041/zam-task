
import API from "./auth-header";

const createType = (name, description, image) => {
  return API.post(("management/information/type"),{name, description, image});
};
const getAllTypes = () => {
  return API.get("management/information/type");
};
const updateType = ({name, description, image, id}) => {
  console.log(id)
  return API.put("management/information/type", {name, description, image,id});
};
const deleteType = ({ids}) => {
  console.log(ids)
  return API.delete("management/information/type", {data: {ids}});
};



const typeService = {
  createType,
  getAllTypes,
  updateType,
  deleteType
};

export default typeService