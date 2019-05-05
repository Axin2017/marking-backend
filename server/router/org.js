const orgapi = require("../../api/org");

exports.router = [
  {
    method: "get",
    path: "/getOrg",
    callback: async (ctx, next) => {
      const query = ctx.query || {};
      const result = await orgapi.getOrg(query);
      ctx.body = result;
    }
  },
  {
    method: "post",
    path: "/addOrg",
    callback: async (ctx, next) => {
      const org = ctx.request.body.org;
      const result = await orgapi.insertMarking(org);
      ctx.body = result;
    }
  }
];
