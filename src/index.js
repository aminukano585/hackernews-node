const { GraphQLServer } = require('graphql-yoga');

let links = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  },
  {
    id: 'link-1',
    url: 'https://github.com/prisma/graphql-yoga',
    description: 'Fully-featured GraphQL Server with focus on easy setup'
  }
];
let idCount = links.length;

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
    link: (_, args) => {
      return links[args.id.slice(5)];
    },
  },
  Mutation: {
    post: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        url: args.url,
        description: args.description,
      };
      links.push(link);
      return link
    },
    updateLink: (_, args) => {
      links[args.id.slice(5)] = {
        id: args.id,
        url: args.url,
        description: args.description
      };
      return links[args.id.slice(5)];
    },
    deleteLink: (_, args) => {
      return links.splice(links[args.id.slice(5)], 1)[0];
    }
  },
}

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));