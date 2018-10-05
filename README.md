# hackernews-node
Hackernews clone built from scratch using GraphQL

## Sample Queries

```
query allInfo {
  info
  feed {
    id
    url
    description
  }
}

query oneLink {
  link(id: "link-1") {
    id
    url
    description
  }
}

mutation addLink {
  post(
    url: "www.prisma.io",
    description: "Prisma turns your database into a GraphQL API"
  ) {
    id
  }
}

mutation editLink {
  updateLink(
    id: "link-1",
    url: "www.graphqlhub.com",
    description: "Query popular APIs using GraphQL in your browser"
  ) {
    id
    url
    description
  }
}

mutation removeLink {
  deleteLink(
    id: "link-1"
  ) {
    id
    url
    description
  }
}
```