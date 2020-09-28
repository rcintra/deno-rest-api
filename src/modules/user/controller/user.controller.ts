import userService from "../service/user.service.ts";

class UserController {

    async findAll(ctx: any): Promise<any> {
        ctx.response.status = 200;
        ctx.response.body = {
            meta: {
                code: 200,
                status: "Ok",
            },
            data: await userService.findAll()
        }
    }

    async create(ctx: any): Promise<any> {
        await userService.create(ctx);

        ctx.response.status = 201;
        ctx.response.body = {
            meta: {
                code: 201,
                status: "Created",
            }
        }
    }
}

export default new UserController()