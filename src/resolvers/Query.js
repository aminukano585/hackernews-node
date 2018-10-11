function info() {
  return `This is the API of a Hackernews Clone`;
}

function feed(root, args, context, info) {
  return context.db.query.links({}, info);
}

module.exports = {
  info,
  feed,
  
}