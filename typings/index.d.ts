import 'egg';

// 请求函数封装的参数
interface IHttpGetParams {
    url: string,
    data: any,
    success: (data: any) => void,
    fail: (err: any) => void
}

// 请求体中的参数
interface IHttpPostData {
    subject: SUBJECTS,
    model: MODELS,
    testType?: TEST_TYPES
}

interface IQueryData {
    id: string;
    question: string;//问题
    answer: string;//答案
    item1: string;//选项，当内容为空时表示判断题正确选项
    item2: string;//选项，当内容为空时表示判断题错误选项
    item3: string;
    item4: string;
    explains: string;//答案解释
    url?: string;//图片url
}

// 科目参数
const enum SUBJECTS {
    s1 = 1,
    s2 = 4
}

// 驾照类型参数
const enum MODELS {
    c1 = 'c1',
    c2 = 'c2',
    a1 = 'a1',
    a2 = 'a2',
    b1 = 'b1',
    b2 = 'b2',
}

// 测试类型参数
const enum TEST_TYPES {
    rand = 'rand',
    order = 'order'
}

declare module 'egg' {
    IHttpGetParams,
    IHttpPostData,
    IQueryData,
    SUBJECTS,
    MODELS,
    TEST_TYPES
}