export function findComponentByPath(uiComponents, componentPath) {
  for (const category in uiComponents) {
    const found = uiComponents[category].components.find(
      (component) => component.path === componentPath
    );
    if (found) {
      return { component: found, root: found.root };
    }
  }
  return null;
}
