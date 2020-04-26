module.exports = async function (context, req, data) {
    context.log('HTTP request', req.url, req.method, req.query, req.params);
    
    data = {};

    switch(req.method) {
      case "POST":
        if (req.params.id !== undefined && !req.params.id.lenght) {
            respond(context, 200, req, data);
        } else {
            respond(context, 400, req, data);
        }
        break;
      case "GET":
        if (req.params.id !== undefined && !req.params.id.lenght) {
            respond(context, 200, req, data);
        } else {
            respond(context, 200, req, []);   
        }
        break;
      case "PATCH":
        if (req.params.id !== undefined && !req.params.id.lenght) {
            respond(context, 200, req, data);
        } else {
            respond(context, 400, req, data);
        }
        break;
      case "DELETE":
        if (req.params.id !== undefined && !req.params.id.lenght) {
            respond(context, 200, req, data);
        } else {
            respond(context, 400, req, data);
        }
        break;
      default:
        
    }
}

function respond(context, status, req, data) {
    context.res = { status: status, body: { "url": req.url, "method": req.method, "query": req.query, "params": req.params, "data": data }};
}