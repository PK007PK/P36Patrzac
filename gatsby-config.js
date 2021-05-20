module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Patrząd w słońce`,
    description: `Urszula Krasny. Terapeutka i counsellorką Gestalt oraz autorka Talii Ja-Ty. Konsultacje terapeutyczne w gabinecie w Krakowie oraz online.`,
    siteUrl: `https://slonce.netlify.app/`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        //develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        whitelist: [
          "col-sm-1",
          "col-sm-2",
          "col-sm-3",
          "col-sm-4",
          "col-sm-5",
          "col-sm-6",
          "col-sm-7",
          "col-sm-8",
          "col-sm-9",
          "col-md-1",
          "col-md-2",
          "col-md-3",
          "col-md-4",
          "col-md-5",
          "col-md-6",
          "col-md-7",
          "col-md-8",
          "col-md-9",
          "col-lg-1",
          "col-lg-2",
          "col-lg-3",
          "col-lg-4",
          "col-lg-5",
          "col-lg-6",
          "col-lg-7",
          "col-lg-8",
          "col-lg-9",
        ], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    'gatsby-plugin-remove-serviceworker',
    // "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Patrząd w słońce`,
        short_name: `Patrząd w słońce`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1C2331`,
        display: `minimal-ui`,
        icon: `src/images/znak4.svg`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
