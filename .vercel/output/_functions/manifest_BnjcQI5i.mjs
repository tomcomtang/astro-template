import { o as decodeKey } from './chunks/astro/server_DQu2ueC8.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D7ivIt-H.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/","cacheDir":"file:///Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/node_modules/.astro/","outDir":"file:///Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/dist/","srcDir":"file:///Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/src/","publicDir":"file:///Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/public/","buildClientDir":"file:///Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/dist/client/","buildServerDir":"file:///Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"components/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/components","isIndex":false,"type":"page","pattern":"^\\/components\\/?$","segments":[[{"content":"components","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/components.astro","pathname":"/components","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"static/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/static","isIndex":false,"type":"page","pattern":"^\\/static\\/?$","segments":[[{"content":"static","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/static.astro","pathname":"/static","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--font-size-base: clamp(1rem, .34vw + .91rem, 1.19rem);--font-size-lg: clamp(1.2rem, .7vw + 1.2rem, 1.5rem);--font-size-xl: clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem);--color-text: hsl(0, 0%, 95%);--color-bg: hsl(0, 0%, 15%);--color-border: hsl(0, 0%, 30%);--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101}html{font-family:system-ui,sans-serif;font-size:var(--font-size-base);color:var(--color-text);background-color:var(--color-bg)}body{margin:0}h1{font-size:var(--font-size-xl)}h2{font-size:var(--font-size-lg)}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.link-card{--link-gradient: linear-gradient( 45deg, #4f39fa, #da62c4 30%, var(--color-border) 60% );list-style:none;display:flex;padding:.08rem;background-color:#ffffff26;background-image:var(--link-gradient);background-size:400%;border-radius:.5rem;background-position:100%;transition:background-position .6s cubic-bezier(.22,1,.36,1),background-color .3s cubic-bezier(.22,1,.36,1)}.link-card>a{width:100%;text-decoration:none;line-height:1.4;padding:1em 1.3em;border-radius:.35rem;color:var(--color-text);background-color:#0006;border:1px solid rgba(255,255,255,.25)}.link-card h2{margin:0;transition:color .6s cubic-bezier(.22,1,.36,1)}.link-card p{margin-top:.75rem;margin-bottom:0}.link-card h2 span{display:inline-block;transition:transform .3s cubic-bezier(.22,1,.36,1)}.link-card:is(:hover,:focus-within){background-position:0;background-color:#fff3}.link-card:is(:hover,:focus-within) h2{color:#4f39fa}.link-card:is(:hover,:focus-within) h2 span{will-change:transform;transform:translate(2px)}\n:root{--astro-gradient: linear-gradient(0deg, #4f39fa, #da62c4)}h1[data-astro-cid-j7pv25f6]{margin:2rem 0;text-align:center}main[data-astro-cid-j7pv25f6]{margin:auto;padding:1em;max-width:calc(60ch + 80px)}.text-gradient[data-astro-cid-j7pv25f6]{font-weight:900;background-image:var(--astro-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:100% 200%;background-position-y:100%;border-radius:.4rem;animation:pulse 4s ease-in-out infinite}@keyframes pulse{0%,to{background-position-y:0%}50%{background-position-y:80%}}.instructions[data-astro-cid-j7pv25f6]{line-height:1.6;margin:1rem 0;border:1px solid rgba(var(--accent-light),25%);background:linear-gradient(rgba(var(--accent-dark),66%),rgba(var(--accent-dark),33%));padding:1.5rem;border-radius:.5rem;color:var(--color-text)}.instructions[data-astro-cid-j7pv25f6] code[data-astro-cid-j7pv25f6]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.3em .4em}.instructions[data-astro-cid-j7pv25f6] strong[data-astro-cid-j7pv25f6]{color:rgb(var(--accent-light))}.link-card-grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:1rem;padding:0}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/src/pages/components.astro",{"propagation":"none","containsHead":true}],["/Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/src/pages/static.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/components@_@astro":"pages/components.astro.mjs","\u0000@astro-page:src/pages/static@_@astro":"pages/static.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BnjcQI5i.mjs","/Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_HRSL5Olf.mjs","/Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/src/components/ReactCard":"_astro/ReactCard.BUZyjT0W.js","/Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/src/components/VueCard.vue":"_astro/VueCard.DZVLx4nb.js","/Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/src/components/SvelteCard.svelte":"_astro/SvelteCard.d1ZStZnR.js","@astrojs/react/client.js":"_astro/client.Bx7k8SOM.js","@astrojs/vue/client.js":"_astro/client.BkxD_KfP.js","@astrojs/svelte/client.js":"_astro/client.svelte.PY-0_3T5.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/_astro/ReactCard.BUZyjT0W.js","/_astro/SvelteCard.d1ZStZnR.js","/_astro/VueCard.DZVLx4nb.js","/_astro/client.BkxD_KfP.js","/_astro/client.Bx7k8SOM.js","/_astro/client.svelte.PY-0_3T5.js","/_astro/render.CeSqstft.js","/_astro/runtime-core.esm-bundler.B9YM59zu.js","/components/index.html","/static/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"qm/0RZELBvSHM3F9Jc7scNXfAuBtDRevNBhe/dHYyDc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
