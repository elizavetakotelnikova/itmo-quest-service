import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  HOME: 'home',
  PERSIK: 'persik',
  MENU: 'menu',
  MYCLUBS: 'myclubs',
  ACHIEVES: 'achieves',
  CREATECLUB: 'createclub',
  ABOUT: 'about'
};

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
      createPanel(DEFAULT_VIEW_PANELS.PERSIK, `/${DEFAULT_VIEW_PANELS.PERSIK}`, []),
      createPanel(DEFAULT_VIEW_PANELS.MENU, '/menu', []),
      createPanel(DEFAULT_VIEW_PANELS.MYCLUBS, '/myclubs', []),
      createPanel(DEFAULT_VIEW_PANELS.ACHIEVES, '/achieves', []),
      createPanel(DEFAULT_VIEW_PANELS.CREATECLUB, '/createclub', []),
      createPanel(DEFAULT_VIEW_PANELS.ABOUT, '/about', [])
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());