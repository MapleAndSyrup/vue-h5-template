import { createFetch } from '@vueuse/core'

const useFetchApi = createFetch({
  baseUrl: '',
  options: {
    async beforeFetch({ options }) {
      const myToken = 'token'
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${myToken}`
      }
      return { options }
    },
    afterFetch(ctx) {
      const { data, response } = ctx
      if (response.status >= 200 && response.status < 300) {
        try {
          const jsonObj = data
          if (jsonObj.code != 200) {
            Snackbar.error(jsonObj.message || 'Error')
          }

          ctx.data = jsonObj.data
        } catch (error) {
          console.error(error)
          ctx.data = null
        }
      } else {
        Snackbar.error(response.statusText || 'Error')
        ctx.data = null
      }

      return ctx
    }
  }
})

export default useFetchApi
