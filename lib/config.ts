export const siteConfig = {
  languages: ["en", "zh"],
  defaultLanguage: "en",
  pages: {
    home: {
      route: "/",
      components: [
        {
          type: "hero",
          content: {
            en: {
              title: "Welcome to Our Site",
              description: "Discover amazing products and services"
            },
            zh: {
              title: "欢迎来到我们的网站",
              description: "发现惊人的产品和服务"
            }
          }
        },
        {
          type: "feedback",
          content: {
            en: {
              title: "What Our Customers Say",
              testimonials: [
                {
                  text: "Great service!",
                  author: "John Doe"
                }
              ]
            },
            zh: {
              title: "客户反馈",
              testimonials: [
                {
                  text: "服务很棒！",
                  author: "张三"
                }
              ]
            }
          }
        }
      ],
      seo: {
        en: {
          title: "Home | Our Amazing Site",
          description: "Discover our products and services",
          keywords: ["product", "service", "amazing"]
        },
        zh: {
          title: "首页 | 我们的精彩网站",
          description: "探索我们的产品和服务",
          keywords: ["产品", "服务", "精彩"]
        }
      }
    }
  },
  header: {
    en: {
      logo: "/images/logo.png",
      menu: [
        {label: "Home", link: "/"},
        {label: "Products", link: "/products"}
      ]
    },
    zh: {
      logo: "/images/logo.png",
      menu: [
        {label: "首页", link: "/"},
        {label: "产品", link: "/products"}
      ]
    }
  },
  footer: {
    en: {
      copyright: "© 2024 Our Company",
      links: [
        {label: "Privacy Policy", link: "/privacy"},
        {label: "Terms of Service", link: "/terms"}
      ]
    },
    zh: {
      copyright: "© 2024 我们的公司",
      links: [
        {label: "隐私政策", link: "/privacy"},
        {label: "服务条款", link: "/terms"}
      ]
    }
  },
  analytics: {
    googleAnalyticsId: "UA-XXXXXXXXX-X"
  }
};