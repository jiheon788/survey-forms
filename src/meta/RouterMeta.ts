export interface IRouterMeta {
  path: string;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const RouterMeta: RouterMetaType = {
  HomePage: {
    path: '/',
  },
  CreatePage: {
    path: '/create',
  },
  PreviewPage: {
    path: '/preview',
  },
} as const;

export default RouterMeta;
