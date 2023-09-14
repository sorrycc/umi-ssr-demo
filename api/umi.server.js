export default function handler(request, response) {
  require('../server/umi.server.js').default(request, response);
}
