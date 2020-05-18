const compNames = [
  'search',
];

// eslint-disable-next-line import/no-dynamic-require
const _import = name => require(`./${name}.vue`).default;

const components = [];
compNames.forEach((name) => {
  const component = _import(name);
  component.name = name;
  components.push(component);
});

const install = (Vue) => {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  ...components,
};
