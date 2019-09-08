import { ContactGender, ContactPayload, ContactType } from "wechaty-puppet";
import { PadplusContactPayload, GrpcContact } from "../schemas";

export const convertToRawContact = (input: GrpcContact): PadplusContactPayload => {
  const result: PadplusContactPayload = {
    alias            : 'string',
    contactType      : 1,
    labelLists       : 'string',
    bigHeadUrl       : 'string',                     // "http://wx.qlogo.cn/mmhead/ver_1/xfCMmibHH74xGLoyeDFJadrZXX3eOEznPefiaCa3iczxZGMwPtDuSbRQKx3Xdm18un303mf0NFia3USY2nO2VEYILw/0",
    city             : 'string',                     // 'Haidian'
    country          : 'string',                     // "CN"
    nickName         : 'string',                     // "梦君君", Contact: 用户昵称， Room: 群昵称
    province         : 'string',                     // "Beijing",
    remark           : 'string',                     // "女儿",
    sex              : ContactGender.Male,
    signature        : 'string',                     // "且行且珍惜",
    smallHeadUrl     : 'string',
    stranger         : 'string',                     // 用户v1码，从未加过好友则为空 "v1_0468f2cd3f0efe7ca2589d57c3f9ba952a3789e41b6e78ee00ed53d1e6096b88@stranger"
    ticket           : 'string',                     // 用户v2码，如果非空则为单向好友(非对方好友) 'v2_xxx@stranger'
    userName         : 'usernmae',
  };
  return result;
}

export const convertToPuppetContact = (input: PadplusContactPayload) => {
  const result: ContactPayload = {
    id     : 'string',
    gender : ContactGender.Male,
    type   : ContactType.Personal,
    name   : 'string',
    avatar : 'string',
  }
  return result
}
