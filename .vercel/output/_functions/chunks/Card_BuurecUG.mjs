import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_DQu2ueC8.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card"> <a${addAttribute(href, "href")}> <h2> ${title} <span>&rarr;</span> </h2> <p> ${body} </p> </a> </li>`;
}, "/Users/tomcomtang/VscodeProjects/video_fe/edgeone-pages-templates/pages-templates/examples/astro-template/src/components/Card.astro", void 0);

export { $$Card as $ };
