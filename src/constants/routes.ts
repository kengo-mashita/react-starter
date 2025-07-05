export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
} as const;

export const ROUTES_LABELS = {
  [ROUTES.HOME]: 'Home',
  [ROUTES.ABOUT]: 'About',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePaths = (typeof ROUTES)[RouteKey];
