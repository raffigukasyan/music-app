export interface INavigationMenu {
    link: string,
    title: string,
    icon: string,
}


export const NAVIGATION_MENU:INavigationMenu[] = [
    {
      link: '/',
      title: 'Главная',
      icon: 'home'
    },
    {
        link: 'songs',
        title: 'Музыка',
        icon: 'music'
    },
    {
        link: 'albums',
        title: 'Албомы',
        icon: 'albums'
    },
    {
        link: 'artists',
        title: 'Артисты',
        icon: 'sparkles'
    },
    {
        link: 'library',
        title: 'Библотека',
        icon: 'library'
    },
    {
        link: 'radio',
        title: 'Радио',
        icon: 'radio'
    },
]

export const AUTH_NAVIGATION_MENU:INavigationMenu[] = [
    {
        link: 'my-track',
        title: 'Мои музкки',
        icon: 'track',
    },
    {
        link: 'favorite',
        title: 'Мне нравится',
        icon: 'favorite'
    },
    {
        link: 'podcast',
        title: 'Подкасты',
        icon: 'podcast'
    }
]