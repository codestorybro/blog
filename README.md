# Welcome to my blog

Next.js static blog using Notion as a Content Management System (CMS). Supports both Blog format Post as well as Page format for Resume. Deployed using Vercel.

## Features

**📒 Writing posts using notion**

- No need of commiting to Github for posting anything to your website.
- Posts made on Notion are automaticaly updated on your site.

**📄 Use as a page as resume**

- Useful for generating full page sites using Notion.
- Can be used for Resume, Portfolios etc.

**👀 SEO friendly**

- Dynamically generates OG IMAGEs (thumbnails!) for posts. ([og-image-korean](https://github.com/morethanmin/og-image-korean)).
- Dynamically creates sitemap for posts.

## FAQ

<details>
   <summary> Click to see FAQ </summary>
   Q1: If you finish making avatar.svg, How to make favicon.ico and apple-touch-icon.png?

   A1: check out https://www.favicon-generator.org/

   Q2: Is it necessary to set up a sitemap file?
   A2: The system will dynamically create a sitemap.xml, so there is no need for manual setup.

   Q3: Why don’t Notion posts update automatically?
   A3: Please set the revalidateTime in site.config.js and observe how long it takes to update.

   Q4: What should be entered for NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID and NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in site.config.js?
   A4: You can check https://github.com/morethanmin/morethan-log/issues/203. Please note that updates may take some time to take effect after setting.

If you encounter any other issues, please feel free to add them to the GitHub README to assist future users. We look forward to your contributions!

</details>
