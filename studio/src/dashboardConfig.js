export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611bd57653ec31478d2852ea",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-k5xyth2h",
                  apiId: "33aaaf08-609c-4da9-a91a-f4b584cd46f0",
                },
                {
                  buildHookId: "611bd57683ce67447dbcdb4d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-2gt5srq5",
                  apiId: "cbe0e5c5-6122-427d-a976-6f2d9084990b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/KaliemSB/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-2gt5srq5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
