import type { MockMethod, Recordable } from 'vite-plugin-mock'

interface Response {
  body: Recordable
  query: Recordable
}

export default [
  {
    url: '/auth/login',
    method: 'post',
    response: ({ body }: Response) => {
      if (!body.phone || !body.password) {
        return { code: 400, msg: '请输入账号和密码', data: null }
      }
      return {
        code: 200,
        msg: 'ok',
        data: {
          user_id: '1001',
          phone: body.phone,
          name: '测试用户',
          role: 'user',
          token: `mock-token-${Date.now()}`,
          expire_time: new Date(Date.now() + 86400000).toISOString()
        }
      }
    }
  },
  {
    url: '/auth/register',
    method: 'post',
    response: ({ body }: Response) => {
      if (!body.phone || !body.password) {
        return { code: 400, msg: '注册信息不完整', data: null }
      }
      return {
        code: 200,
        msg: '注册成功',
        data: {
          user_id: String(Date.now()),
          phone: body.phone,
          name: body.phone,
          role: 'user',
          token: `mock-token-${Date.now()}`,
          expire_time: new Date(Date.now() + 86400000).toISOString()
        }
      }
    }
  },
  {
    url: '/auth/logout',
    method: 'post',
    response: () => ({ code: 200, msg: 'ok', data: null })
  },
  {
    url: '/mock-api/login',
    method: 'post',
    response: ({ body, query }: Response) => {
      console.log('body>>>>>>>>', body)
      console.log('query>>>>>>>>', query)
      return {
        code: 200,
        message: 'ok',
        data: { name: 'Evan', age: 26 }
      }
    }
  }
] as MockMethod[]
