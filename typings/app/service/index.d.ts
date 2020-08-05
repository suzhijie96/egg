// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportLogin from '../../../app/service/login';
import ExportRegister from '../../../app/service/register';
import ExportTest from '../../../app/service/Test';
import ExportVerify from '../../../app/service/verify';

declare module 'egg' {
  interface IService {
    login: AutoInstanceType<typeof ExportLogin>;
    register: AutoInstanceType<typeof ExportRegister>;
    test: AutoInstanceType<typeof ExportTest>;
    verify: AutoInstanceType<typeof ExportVerify>;
  }
}
