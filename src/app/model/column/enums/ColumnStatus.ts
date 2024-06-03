import Color from "../../base/option/Color";
import NumberOption from "../../base/option/NumberOption.ts";
import ColorNumberOption from "../../base/option/ColorNumberOption.ts";

enum ColumnStatus {
    NEW = 0,
    OK = 1,
    DISABLED = 2,
}

let ColumnStatuses: number[] = []
for (const key in ColumnStatus) {
    if (typeof ColumnStatus[key] === 'number') {
        ColumnStatuses.push(Number(ColumnStatus[key]))
    }
}

let ColumnStatusMap: { [key in ColumnStatus]: ColorNumberOption } = {
    0: {
        "name": "未发布",
        "value": 0,
        "color": Color.WARNING,
    },
    1: {
        "name": "已发布",
        "value": 1,
        "color": Color.SUCCESS,
    },
    2: {
        "name": "被禁用",
        "value": 2,
        "color": Color.DANGER,
    },
}

let ColumnStatusList: NumberOption[] = []
ColumnStatuses.forEach((type: ColumnStatus, index: number) => {
    ColumnStatusList.push(ColumnStatusMap[type])
})


export {ColumnStatus, ColumnStatuses, ColumnStatusMap, ColumnStatusList}




