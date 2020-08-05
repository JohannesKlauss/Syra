export const routes = {
  LandingPage: process.env.NODE_ENV === 'development' ? '/syra' : '/new',
  Editor: '/syra',
  NewProject: '/new',
}