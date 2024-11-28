import Apikit from "./Apikit";

export const SignupAction = (data) => {
    return Apikit.post ("/api/sign-up/", data);
};

export const LoginAction = (data) =>{
    return Apikit.post("/login", data);
};

export const LoginOutAction = (data) =>{
    return Apikit.post("/logout", data);
};




export const ResetAction = (data, token)=>{
    return Apikit.post("/reset-password", data,{
     headers:{
        authorization: `Bearer ${token}`,
     },
    });
};

export const PasswordAction =(data,token)=> {
    return Apikit.put("change-password", data,{
        headers:{
            authorization:`Bearer ${token}`,
        },
    });
};

export const ForgotAction = (data)=>{
    return Apikit.post("/forgot-password", data);
};