exports.handler = async function(event, context) {
  context.body = JSON.stringify({message: "Welcome to Serverless!"});
  context.statusCode = 200;
  return context;
}