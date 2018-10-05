const { GraphQLServer } = require('graphql-yoga');
const links = require('./data');

let idCount = links.length;

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

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));