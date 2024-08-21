const CONFIG = {
  // profile setting (required)
  logo: "/logo.png",
  profile: {
    name: "Code Story Bro",
    image: "/profile-image.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Staff Software Engineer ⚛️",
    bio: "My React journey is fueled by a passion for nurturing talent and driving tech advancement.",
    email: "marcin.kolodziej.dev@gmail.com",
    linkedin: "codestorybro",
    discord: "https://discord.gg/4qBU8QT3ed",
    x: "https://x.com/codestorybro",
    github: "",
    instagram: "",
  },
  // blog setting (required)
  blog: {
    title:
      "Code Story Bro - master React with practical tutorials and insights",
    description:
      "Discover practical React tutorials, insightful advice, and a community of passionate developers dedicated to building better web applications. Whether you're a beginner or an expert, you'll find valuable content to enhance your React skills and deepen your programming knowledge. Let's grow and learn together!",
    image: "/thumbnail.png",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://blog-codestorybros-projects.vercel.app/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
