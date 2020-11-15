import axios from "axios";
import config from "../../config";
import lsService from "../localStorageService";

const buildReq = ({
  uri = "",
  method = "",
  bodyReq = null,
  auth = false,
  params = {},
}) => {
  const baseUrl = config.API_URL;
  const opts: any = {
    url: baseUrl + uri,
    method,
    headers: {
      "Content-Type": "application/json",
    },
    params,
  };
  if (auth) {
    const token = lsService.get("token");
    const accessToken = token !== null ? token : "";
    opts.headers.Authorization = `Bearer ${accessToken}`;
  }
  if (bodyReq !== null) {
    opts.data = JSON.stringify(bodyReq);
  }
  return axios(opts);
};

export { buildReq };
