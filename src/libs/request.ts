import axios from "axios";
import type { IUser } from "@/types/IUser";

export class Request {
  private baseUrl = import.meta.env.VITE_APP_BASE_URL;
  constructor(){}
  public getResponse(url: string = ''): Promise<IUser[] | IUser> {
    return axios.get(
      this.baseUrl+url,
      {
        headers: {
          'x-api-key': import.meta.env.VITE_APP_API_KEY
        }
      }
    ).then((response) => {
      return response.data;
    }).catch((error) => console.log(error));
  }
}