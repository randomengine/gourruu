import axios from 'axios';

export const baseURL = 'http://111.93.169.90/team4/GoWasteOS/api/';
export const dynamicImageURL = 'http://111.93.169.90/team4/GoWasteOS';

export const endPoints = {

  logIn: 'users/token.json',
  socialLogin: 'users/socialLogin.json',
  signUp: 'users/register.json',
  profileDetails: 'jobs/userprofiledetails.json',
  changePassword: 'users/changepassword.json',
  updateProfile: 'users/updateuserprofile.json',
};

export const POST = async (endPoint, params, header) => {
  try {
    var response = await axios({
      method: 'post',
      url: baseURL + endPoint,
      data: params,
      headers: header && header,
    });
    //var returnObj = JSON.parse(JSON.stringify(response.data));
    // console.log('response in api ==>', response);

    return response.data;
    // return response;
  } catch (e) {
    var returnObj = {
      msg: e,
      ack: -1,
    };
    // console.log('catch ==> ', returnObj);
    return returnObj;
  }
};

export const GET = async (endPoint, header) => {
  try {
    var response = await axios({
      method: 'get',
      url: baseURL + endPoint,
      headers: header && header,
    });
    // console.log('response in api ==>', response);
    return response.data;
  } catch (e) {
    var returnObj = {
      msg: e,
      ack: -1,
    };
    // console.log('catch ==> ', returnObj);
    return returnObj;
  }
};
