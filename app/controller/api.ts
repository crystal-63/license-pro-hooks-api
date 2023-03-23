import { Controller } from 'egg';
import { IHttpPostData } from '../../typings';

export default class ApiController extends Controller {
    public async getQueries() {
        const { ctx } = this;
        // ctx.body = await ctx.service.test.sayHi('egg');

        //前端向NOde端POST数据请求的参数 subject model
        const { subject, model }: IHttpPostData = ctx.request.body;
        // 调用service 向聚合数据API发起HTTP请求，结果赋值给ctx.response.body(响应体)
        ctx.body = await ctx.service.api.getQueries({ subject, model });
    }
}