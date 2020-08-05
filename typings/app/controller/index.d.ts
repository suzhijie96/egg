// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';
import ExportRegister from '../../../app/controller/register';
import ExportVerify from '../../../app/controller/verify';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    login: ExportLogin;
    register: ExportRegister;
    verify: ExportVerify;
  }
}
