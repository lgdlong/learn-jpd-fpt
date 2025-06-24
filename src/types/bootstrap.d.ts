// types/bootstrap.d.ts
interface BootstrapCollapseOptions {
  toggle?: boolean;
}

interface BootstrapCollapse {
  hide: () => void;
}

interface BootstrapStatic {
  Collapse: new (
    element: Element,
    options?: BootstrapCollapseOptions
  ) => BootstrapCollapse;
}

interface Window {
  bootstrap?: BootstrapStatic;
}
