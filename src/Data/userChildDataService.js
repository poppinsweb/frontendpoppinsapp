import axios from "axios";

// Create child
export const createUserChildData = async ({ name, birthdate, gender, socialClass, schoolName, schoolType, degree }) => {
  try {
    return await axios.post("shy-tree-3437.fly.dev/api/infante"), {
      name,
      birthdate,
      gender,
      socialClass,
      schoolName,
      schoolType,
      degree,
    }
  } catch (error) {
    console.error(error);
  }
  return undefined;
}
