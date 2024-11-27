export const CreateProfileAction = (data, sessionToken) => {
    return Apikit.put("/createaccount", data, 
       
        );
};
export const AddclientAction = (data) => {
  return Apikit.post("/addclient", data, 
    
  );
};
export const EditProfileAction = (data, token) => {
    return Apikit.put("/editprofile", data, 
    )
}

export const MyProfileAction = ( token) => {
    return Apikit.get("/myprofile", 
     
    );
}