import axios from "axios";

interface ServiceResponse{
  success: boolean;
  message: string;
}

export const sendEmail = async (subject: string, name:string, email:string, phone:string, message:string):Promise<ServiceResponse>=>{
  try{

    const htmlContent = `
      <h2>Me comunico desde la web:</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Mensaje:</strong><br/>${message}</p>
    `;

    
    const data = {
      subject: subject,
      html: htmlContent
    }

    const response = await axios.post("https://estudiocontableback.onrender.com/contact", data, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    return ({success:true, message:response.data.message});
  } catch(error:unknown){
      if (axios.isAxiosError(error)){
        return({success:false, message: error.response?.data?.message || error.message})
      }else{
        return({success:false, message:"Ocurrio un error inesperado"})
      }

  }
}

export const sendEmailNews = async (subject: string, email:string):Promise<ServiceResponse>=>{
  try{
    const data = {
      subject: subject,
      email: email
    }

    const response = await axios.post("https://estudiocontableback.onrender.com/contact/news", data, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    return ({success:true, message:response.data.message});
  } catch(error:unknown){
      if (axios.isAxiosError(error)){
        return({success:false, message: error.response?.data?.message || error.message})
      }else{
        return({success:false, message:"Ocurrio un error inesperado"})
      }

  }
}