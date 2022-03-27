module.exports = {
  siteMetadata: {
    title: `Seafarer International`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://4000-turtlemaster16-seafarerm-c8vh41cidey.ws-us38.gitpod.io/api/ship/",
        rootKey: 'ships',
        schemas:  {
            ships: `
                id: Int
                shipname: String
                shipspeed: Float
            `
        }
      }
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://4000-turtlemaster16-seafarerm-c8vh41cidey.ws-us38.gitpod.io/api/crew/",
        rootKey: 'crews',
        schemas:  {
            crews: `
                id: Int
                crewname: String
                crewrank: String
            `
        }
      }
    },
  ],
}
