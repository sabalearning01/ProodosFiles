

export const CreateProfileAction = (data, sessionToken) => {
  return Apikit.put("/createaccount", data);
};

export const GetFolderAction = (data) => {
  return Apikit.get("/all-folders", data);
};

export const Create = (data) => {
  return Apikit.post ("/create-f", data);
};

export const Starred = (data) => {
  return Apikit.post ("/starred-f", data);
};




  

