export interface IRouterMeta {
  path: string;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const routerMeta: RouterMetaType = {
  HomePage: {
    path: '/',
  },
  CreatePage: {
    path: '/create',
  },
  PreviewPage: {
    path: '/preview',
  },
};

export default routerMeta;
