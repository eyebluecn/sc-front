import {ResultCode} from "../result/ResultCode";

export default class CommonError extends Error {

    //错误码
    code: number = ResultCode.UNKNOWN

    constructor(code: number, message: string) {
        super(message);
        this.code = code
    }

}