import { BOTTOM_BAR } from '@/constant'
import { Dialog } from '@varlet/ui'
import '@varlet/ui/es/dialog/style/index.mjs'

import { queryLogout } from '@/api'
import { useUserStore } from '@/store/modules/user'

export default function useLayout() {
  const router = useRouter()
  const route = useRoute()

  /** 底部导航列表 */
  const bottomBarList = [
    { id: BOTTOM_BAR.BIZ_POOL, path: 'biz-pool', icon: 'notebook', label: '招商池' },
    {
      id: BOTTOM_BAR.INDUSTRY_TRENDS,
      path: 'industry-trends',
      icon: 'bell',
      label: '行业动态'
    },
    {
      id: BOTTOM_BAR.MERCHANT_RECRUITMENT,
      path: 'merchant-recruitment',
      icon: 'xml',
      label: '招商UNI'
    },
    { id: BOTTOM_BAR.WORK_ORDERS, path: 'work-orders', icon: 'account-circle', label: '我的线索' }
  ]
  // 当前底部导航
  const curPath = ref(BOTTOM_BAR.BIZ_POOL)
  /** 底部导航改变 */
  const handleChange = (value: unknown) => {
    const val = value as BOTTOM_BAR
    const bar = bottomBarList.find((item) => item.id === val)
    if (bar) {
      router.replace({ path: bar.path })
    }
  }

  // 是不是主页面
  const isMainPage = computed<boolean>(() => route.meta?.mainPage as boolean)
  // 导航title
  const appBarTitle = computed<string>(() => route.meta?.title as string)
  // 路由key
  const appBarKey = computed<BOTTOM_BAR>(() => route.meta?.key as BOTTOM_BAR)
  watchEffect(() => {
    curPath.value = appBarKey.value
  })

  const userStore = useUserStore()

  const handleLogout = () => {
    Dialog({
      title: '您确定要退出登录吗？',
      onConfirm: async () => {
        await queryLogout({ index: 0 })
        Dialog.close()
        userStore.logout()
        router.replace('/login')
      }
    })
  }

  return { isMainPage, appBarTitle, bottomBarList, curPath, handleChange, handleLogout }
}
