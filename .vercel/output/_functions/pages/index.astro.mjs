import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DQu2ueC8.mjs';
import { $ as $$Layout } from '../chunks/Layout_BHyunjjy.mjs';
import { $ as $$Card } from '../chunks/Card_BuurecUG.mjs';
/* empty css                                 */
export { r as renderers } from '../chunks/_@astro-renderers_BMIYgYzc.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Welcome to <span class="text-gradient" data-astro-cid-j7pv25f6>Astro</span></h1> <p class="instructions" data-astro-cid-j7pv25f6>
Check out the <code data-astro-cid-j7pv25f6>src/pages</code> directory to get started.<br data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
</p> <ul role="list" class="link-card-grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Card", $$Card, { "href": "https://docs.astro.build/", "title": "Documentation", "body": "Learn how Astro works and explore the official API docs.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/integrations/", "title": "Integrations", "body": "Supercharge your project with new frameworks and libraries.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/themes/", "title": "Themes", "body": "Explore a galaxy of community-built starter themes.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/chat/", "title": "Chat", "body": "Come say hi to our amazing Discord community. \u2764\uFE0F", "data-astro-cid-j7pv25f6": true })} </ul> </main> ` })} `;
}, "/Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/src/pages/index.astro", void 0);

const $$file = "/Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
