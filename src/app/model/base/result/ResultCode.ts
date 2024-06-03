import Color from "../option/Color";
import ColorSelectionOption from "../option/ColorSelectionOption";
import NumberOption from "../option/NumberOption.ts";


enum ResultCode {
    OK = 0,//成功
    LOGIN = 4001, //没有登录
    NOT_FOUND = 4002,//资源没找到
    BAD_REQUEST = 4003,//请求不合法
    UNAUTHORIZED = 4004,//没有权限
    PARAMS_ERROR = 4005,//参数错误
    SERVER = 5000,//服务器内部出错
    UNKNOWN = 5001,//服务器未知错误
}

let ResultCodes: number[] = []
for (const key in ResultCode) {
    if (typeof ResultCode[key] === 'number') {
        ResultCodes.push(Number(ResultCode[key]))
    }
}

let ResultCodeMap: { [key in ResultCode]: NumberOption } = {
    0: {
        "name": "成功",
        "value": 0,
    },
    4001: {
        "name": "没有登录，禁止访问",
        "value": 4001,
    },
    4002: {
        "name": "资源没找到",
        "value": 4002,
    },
    4003: {
        "name": "请求不合法",
        "value": 4003,
    },
    4004: {
        "name": "没有权限",
        "value": 4004,
    },
    4005: {
        "name": "参数错误",
        "value": 4005,
    },
    5000: {
        "name": "服务器内部出错",
        "value": 5000,
    },
    5001: {
        "name": "服务器未知错误",
        "value": 5001,
    },
}

let ResultCodeList: NumberOption[] = []
ResultCodes.forEach((type: ResultCode, index: number) => {
    ResultCodeList.push(ResultCodeMap[type])
})


export {ResultCode, ResultCodes, ResultCodeMap, ResultCodeList}




