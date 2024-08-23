import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/laravel-admin-docs/',
  outDir: 'docs',
  title: "laravel-admin-docs",
  description: "laravel-admin,laravel-admin document,a tool to quickly build back-office management",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/laravel-admin-docs/logo.png' }],
    // ['meta', { property: 'og:type', content: 'website' }],
    // ['meta', { name: 'theme-color', content: '#646cff' }],
    // ['script', {
    //     src: 'https://cdn.usefathom.com/script.js',
    //     'data-site': 'CBDFBSLI',
    //     'data-spa': 'auto',
    //     defer: '',
    //   },
    // ],
  ],
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Utils', link: 'https://github.com/laravel-admin-utils' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/explore-pu/laravel-admin' }
    ],
    outline: {
      level: 'deep',
    },
    editLink: {
      pattern: 'https://github.com/explore-pu/laravel-admin-docs/edit/main/:path',
    },
    sidebar: {
      '/': [
        {
          text: 'Summary',
          items: [
            {
              text: 'Guide',
              link: '/guide/'
            },
          ]
        },
        {
          text: 'Starter',
          collapsed: true,
          items: [
            {
              text: 'Install',
              link: '/guide/install'
            },
            {
              text: 'Quick Start',
              link: '/guide/quick-start',
            },
            {
              text: 'Configuration',
              link: '/guide/configuration',
            },
            {
              text: 'Upgrading',
              link: '/guide/upgrading'
            },
            {
              text: 'Content Layout',
              link: '/guide/content-layout'
            }
          ]
        },
        {
          text: 'Table',
          collapsed: true,
          items: [
            {
              text: 'Basic Usage',
              link: '/guide/model-table'
            },
            {
              text: 'Use of Columns',
              link: '/guide/model-table-column'
            },
            {
              text: 'Display of Columns',
              link: '/guide/model-table-column-display'
            },
            {
              text: 'Query Filtering',
              link: '/guide/model-table-filters'
            },
            {
              text: 'Column Filters',
              link: '/guide/model-table-column-filter'
            },
            {
              text: 'Inline Editing',
              link: '/guide/model-table-inline-edit'
            },
            {
              text: 'Data Manipulation',
              link: '/guide/model-table-actions'
            },
            {
              text: 'Custom Rows & Bulk Actions',
              link: '/guide/model-table-custom-actions'
            },
            {
              text: 'Data Export',
              link: '/guide/model-table-export'
            },
            {
              text: 'Head and Footer',
              link: '/guide/model-table-header-footer'
            },
            {
              text: 'Table Initialized',
              link: '/guide/model-table-init'
            },
            {
              text: 'Table Statistics',
              link: '/guide/model-table-total-row'
            },
            {
              text: 'Quick Search',
              link: '/guide/model-table-quick-search'
            },
            {
              text: 'Spec Selector',
              link: '/guide/model-table-spec-selector'
            },
            {
              text: 'Quick Creation',
              link: '/guide/model-table-quick-create'
            },
            {
              text: 'Custom Tools',
              link: '/guide/model-table-custom-tools'
            },
            {
              text: 'External data sources',
              link: '/guide/model-table-data'
            },
            {
              text: 'Shortcut Key',
              link: '/guide/model-table-hotkeys'
            },
            {
              text: 'SoftDelete',
              link: '/guide/model-table-soft-deletes'
            }
          ]
        },
        {
          text: 'Form',
          collapsed: true,
          items: [
            {
              text: 'Basic Usage',
              link: '/guide/model-form'
            },
            {
              text: 'Basic Component',
              link: '/guide/model-form-fields',
            },
            {
              text: 'Image file upload',
              link: '/guide/model-form-upload',
            },
            {
              text: 'JSON Component',
              link: '/guide/model-form-json-fields'
            },
            {
              text: 'Relationship Processing',
              link: '/guide/model-form-relationships'
            },
            {
              text: 'Form linkage',
              link: '/guide/model-form-linkage'
            },
            {
              text: 'Component management',
              link: '/guide/model-form-field-management'
            },
            {
              text: 'Form validation',
              link: '/guide/model-form-validation'
            },
            {
              text: 'Form callbacks',
              link: '/guide/model-form-callback'
            },
            {
              text: 'Form initialization',
              link: '/guide/model-form-init'
            },
            {
              text: 'Form layout',
              link: '/guide/model-form-layout'
            }
          ]
        },
        {
          text: 'Show',
          collapsed: true,
          items: [
            {
              text: 'Basic Usage',
              link: '/guide/model-show'
            },
            {
              text: 'field display',
              link: '/guide/model-show-fields',
            },
            {
              text: 'affiliations',
              link: '/guide/model-show-relationship',
            },
            {
              text: 'Display Extensions',
              link: '/guide/model-show-extension'
            }
          ]
        },
        {
          text: 'Tree',
          link: '/guide/model-tree'
        },
        {
          text: 'Data Form',
          link: '/guide/data-form'
        },
        {
          text: 'Localization',
          link: '/guide/localization'
        },
        {
          text: 'CSS/JavaScript',
          link: '/guide/frontend'
        },
        {
          text: 'Extended development',
          link: '/guide/extension-development'
        },
        {
          text: 'Commands',
          link: '/guide/commands'
        },
        {
          text: 'Page messages',
          link: '/guide/content-message'
        },
        {
          text: 'widgets',
          link: '/guide/widgets'
        },
        {
          text: 'Permission control',
          link: '/guide/permission'
        },
        {
          text: 'Customize Authentication',
          link: '/guide/custom-authentication'
        },
        {
          text: 'Custom Navbar',
          link: '/guide/custom-navbar'
        },
        {
          text: 'faqs',
          link: '/guide/qa'
        }
      ],
      '/zh-CN/': {
        base: '/zh-CN',
        items: [
          {
            text: '概述',
            items: [
              {
                text: '指引',
                link: '/guide/'
              },
            ]
          },
          {
            text: '入门',
            collapsed: true,
            items: [
              {
                text: '安装',
                link: '/guide/install'
              },
              {
                text: '快速开始',
                link: '/guide/quick-start',
              },
              {
                text: '配置文件',
                link: '/guide/configuration',
              },
              {
                text: '版本升级',
                link: '/guide/upgrading'
              },
              {
                text: '页面内容和布局',
                link: '/guide/content-layout'
              }
            ]
          },
          {
            text: '模型表格',
            collapsed: true,
            items: [
              {
                text: '基本使用',
                link: '/guide/model-table'
              },
              {
                text: '列的使用',
                link: '/guide/model-table-column'
              },
              {
                text: '列的显示',
                link: '/guide/model-table-column-display'
              },
              {
                text: '查询过滤',
                link: '/guide/model-table-filters'
              },
              {
                text: '列过滤器',
                link: '/guide/model-table-column-filter'
              },
              {
                text: '行内编辑',
                link: '/guide/model-table-inline-edit'
              },
              {
                text: '数据操作',
                link: '/guide/model-table-actions'
              },
              {
                text: '自定义行&批量操作',
                link: '/guide/model-table-custom-actions'
              },
              {
                text: '数据导出',
                link: '/guide/model-table-export'
              },
              {
                text: '头部和脚部',
                link: '/guide/model-table-header-footer'
              },
              {
                text: '表格初始化',
                link: '/guide/model-table-init'
              },
              {
                text: '表格统计行',
                link: '/guide/model-table-total-row'
              },
              {
                text: '快捷搜索',
                link: '/guide/model-table-quick-search'
              },
              {
                text: '规格选择器',
                link: '/guide/model-table-spec-selector'
              },
              {
                text: '快捷创建',
                link: '/guide/model-table-quick-create'
              },
              {
                text: '自定义工具',
                link: '/guide/model-table-custom-tools'
              },
              {
                text: '外部数据源',
                link: '/guide/model-table-data'
              },
              {
                text: '快捷键',
                link: '/guide/model-table-hotkeys'
              },
              {
                text: '软删除',
                link: '/guide/model-table-soft-deletes'
              }
            ]
          },
          {
            text: '模型表单',
            collapsed: true,
            items: [
              {
                text: '基本使用',
                link: '/guide/model-form'
              },
              {
                text: '基础组件',
                link: '/guide/model-form-fields',
              },
              {
                text: '图片文件上传',
                link: '/guide/model-form-upload',
              },
              {
                text: 'JSON组件',
                link: '/guide/model-form-json-fields'
              },
              {
                text: '关系处理',
                link: '/guide/model-form-relationships'
              },
              {
                text: '表单联动',
                link: '/guide/model-form-linkage'
              },
              {
                text: '组件管理',
                link: '/guide/model-form-field-management'
              },
              {
                text: '表单验证',
                link: '/guide/model-form-validation'
              },
              {
                text: '表单回调',
                link: '/guide/model-form-callback'
              },
              {
                text: '表单初始化',
                link: '/guide/model-form-init'
              },
              {
                text: '表单布局',
                link: '/guide/model-form-layout'
              }
            ]
          },
          {
            text: '模型详情',
            collapsed: true,
            items: [
              {
                text: '基本使用',
                link: '/guide/model-show'
              },
              {
                text: '字段显示',
                link: '/guide/model-show-fields',
              },
              {
                text: '关联关系',
                link: '/guide/model-show-relationship',
              },
              {
                text: '显示扩展',
                link: '/guide/model-show-extension'
              }
            ]
          },
          {
            text: '数据模型树',
            link: '/guide/model-tree'
          },
          {
            text: '数据表单',
            link: '/guide/data-form'
          },
          {
            text: '语言本地化',
            link: '/guide/localization'
          },
          {
            text: 'CSS/JavaScript',
            link: '/guide/frontend'
          },
          {
            text: '扩展开发',
            link: '/guide/extension-development'
          },
          {
            text: '控制台命令',
            link: '/guide/commands'
          },
          {
            text: '页面消息',
            link: '/guide/content-message'
          },
          {
            text: '前端组件',
            link: '/guide/widgets'
          },
          {
            text: '权限控制',
            link: '/guide/permission'
          },
          {
            text: '自定义登录认证',
            link: '/guide/custom-authentication'
          },
          {
            text: '自定义头部导航',
            link: '/guide/custom-navbar'
          },
          {
            text: '常见问题',
            link: '/guide/qa'
          }
        ]
      },
    },
  },

  locales: {
    'root': {
      label: 'English',
      lang: 'en',
      link: '/',
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      title: "laravel-admin文档",
      description: "laravel-admin,laravel-admin文档,一个快速构建后台管理的工具",
      themeConfig: {
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索文档',
              },
              modal: {
                displayDetails: '详细信息',
                resetButtonTitle: '重置',
                backButtonTitle: '后退',
                noResultsText: '没有找到',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              }
            }
          }
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: '首页', link: '/zh-CN' },
          { text: '插件', link: 'https://github.com/laravel-admin-utils' },
        ],
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        notFound: {
          title: '页面未找到',
          quote: "如果你不改变页面路径或者你继续寻找，你最终可能会到达你要的页面。",
          linkLabel: '返回首页',
          linkText: '返回首页',
        },
        outline: {
          level: 'deep',
          label: '页面导航',
        },
        editLink: {
          pattern: 'https://github.com/explore-pu/laravel-admin-docs/edit/main/:path',
          text: '为此页提供修改建议',
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
      }
    },
  },

});
