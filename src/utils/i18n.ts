import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'zh', // 默认语言
  messages: {
    en: {
      // 面包屑
      home: 'Home',
      welcome: 'welcome',
      software: 'Game software',
      'software/discount': 'Game software',
      version: 'Game Version',
      controls: 'Game controls',
      feedback: 'Feedback Management',
      revenue: 'Game revenue',
      discount: 'Game discount',
      info: 'Personal Info',
      transfer: 'Transfer',
      system: {
        logout: 'Log out',
        min_tx_price: 'Minimum withdrawal amount', // 提现最小金额
        max_tx_price: 'Maximum withdrawal amount', // 提现最大金额
        day: 'Monthly settlement date', // 每月结算日期
        min_zz_price: 'Minimum amount for transferring Yundou', // 转金豆最少金额
        max_zz_price: 'Maximum amount for transferring Yundou', // 转金豆最大金额
        lw_choucheng: 'Platform proportion', // 平台抽成比例
        game_choucheng_pt: 'Proportion of game sales platform', // 游戏售出平台抽成比例
        game_choucheng_gh: 'Proportion of game sales guild', // 游戏售出公会抽成比例
        zhibo_deldou: 'Number of Yundou deducted during the live game cycle' // 直播游戏时周期扣除的云豆数量
      },
      table: {
        title: 'Title',
        remark: 'Remark',
        icon: 'Icon',
        doc_url: 'Document address',
        min_price: 'Minimum broadcast balance',
        ctime: 'Create time',
        utime: 'Update time',
        operate: 'Operate',
        price: 'Yun Dou',
        num: 'Number',
        examine: 'Examine',
        status: 'Status',
        audit: 'Audit',
        pass: 'Approved',
        refuse: 'Refuse',
        nickname: 'Nickname',
        phoneNumber: 'Phone number',
        withdrawalAccount: 'Withdrawal account',
        source: 'Source',
        anchor: 'Anchor',
        author: 'Author',
        guild: 'Guild'
      },
      menu: {
        software: 'Game software',
        controls: 'Game controls',
        feedback: 'Game Feedback',
        revenue: 'Game revenue',
        discount: 'Game discount',
        personal: 'Personal center'
      },
      button: {
        add: 'Add',
        edit: 'Edit',
        del: 'Delete',
        confirm: 'Confirm',
        cancel: 'Cancel',
        generate: 'Generate',
        set: 'Set',
        examine: 'Examine',
        save: 'Save',
        query: 'Query',
        clear: 'Clear'
      },
      message: {
        add: 'Add successfully',
        set: 'Setting successfully',
        del: 'Delete successfully'
      },
      contextmenu: {
        reload: 'Reload',
        close: 'Close',
        closeOther: 'Close Others',
        closeRight: 'Close to the Right',
        closeLeft: 'Close to the Left',
        closeAll: 'Close All'
      }
    },
    zh: {
      home: '首页',
      welcome: '欢迎',
      software: '游戏软件',
      'software/discount': '游戏软件',
      version: '游戏版本',
      controls: '游戏操作',
      feedback: '反馈管理',
      revenue: '游戏收益',
      discount: '游戏折扣',
      info: '个人信息',
      transfer: '转账',
      system: {
        logout: '退出登录',
        min_tx_price: '提现最小金额',
        max_tx_price: '提现最大金额',
        day: '每月结算日期', // 每月结算日期
        min_zz_price: '转金豆最少金额',
        max_zz_price: '转金豆最大金额',
        lw_choucheng: '平台抽成比例',
        game_choucheng_pt: '游戏售出平台抽成比例',
        game_choucheng_gh: '游戏售出公会抽成比例',
        zhibo_deldou: '直播游戏时周期扣除的云豆数量'
      },
      table: {
        title: '标题',
        remark: '备注',
        icon: '图标',
        doc_url: '文档地址',
        min_price: '最低开播余额',
        ctime: '创建时间',
        utime: '更新时间',
        operate: '操作',
        price: '云豆',
        num: '数量',
        examine: '审核',
        status: '状态',
        audit: '待审核',
        pass: '通过',
        refuse: '拒绝',
        nickname: '昵称',
        phoneNumber: '手机号',
        withdrawalAccount: '提现账号',
        source: '来源',
        anchor: '主播',
        author: '作者',
        guild: '公会'
      },
      menu: {
        software: '游戏软件',
        controls: '游戏操作',
        feedback: '反馈管理',
        revenue: '游戏收益',
        discount: '游戏折扣',
        personal: '个人中心'
      },
      button: {
        add: '添加',
        edit: '编辑',
        del: '删除',
        confirm: '确认',
        cancel: '取消',
        generate: '生成',
        set: '设置',
        examine: '审核',
        save: '保存',
        query: '查询',
        clear: '清空'
      },
      message: {
        add: '添加成功',
        set: '设置成功',
        del: '删除成功'
      },
      contextmenu: {
        reload: '重新加载',
        close: '关闭',
        closeOther: '关闭其他',
        closeRight: '关闭右侧',
        closeLeft: '关闭左侧',
        closeAll: '全部关闭'
      }
    },
    tw: {
      home: '首頁',
      welcome: '歡迎',
      software: '遊戲軟件',
      'software/discount': '遊戲軟件',
      version: '遊戲版本',
      controls: '遊戲操作',
      feedback: '反饋管理',
      revenue: '遊戲收益',
      discount: '遊戲折扣',
      info: '個人信息',
      transfer: '轉賬',
      system: {
        logout: '退出登錄',
        min_tx_price: '提現最小金額',
        max_tx_price: '提現最大金額',
        day: '每月結算日期',
        min_zz_price: '轉金豆最小金額',
        max_zz_price: '轉金豆最大金額',
        lw_choucheng: '平台抽成比例',
        game_choucheng_pt: '遊戲售出平台抽成比例',
        game_choucheng_gh: '遊戲售出公會抽成比例',
        zhibo_deldou: '直播遊戲時週期扣除的雲豆數量'
      },
      table: {
        title: '標題',
        remark: '备注',
        icon: '圖標',
        doc_url: '文檔地址',
        min_price: '最低開播餘額',
        ctime: '創建時間',
        utime: '更新時間',
        operate: '操作',
        price: '雲豆',
        num: '數量',
        examine: '審核',
        status: '狀態',
        audit: '待審核',
        pass: '通過',
        refuse: '拒絕',
        nickname: '暱稱',
        phoneNumber: '手機號',
        withdrawalAccount: '提現賬號',
        source: '來源',
        anchor: '主播',
        author: '作者',
        guild: '公會'
      },
      menu: {
        software: '遊戲軟件',
        controls: '遊戲操作',
        feedback: '反饋管理',
        revenue: '遊戲收益',
        discount: '遊戲折扣',
        personal: '個人中心'
      },
      button: {
        add: '添加',
        edit: '編輯',
        del: '刪除',
        confirm: '確認',
        cancel: '取消',
        generate: '生成',
        set: '設置',
        examine: '審核',
        save: '保存',
        query: '查詢',
        clear: '清空'
      },
      message: {
        add: '添加成功',
        set: '設置成功',
        del: '刪除成功'
      },
      contextmenu: {
        reload: '重新加載',
        close: '關閉',
        closeOther: '關閉其他',
        closeRight: '關閉右側',
        closeLeft: '關閉左側',
        closeAll: '全部關閉'
      }
    }
    // 添加更多语言翻译
  }
})

export default i18n
