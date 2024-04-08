
export const useSideBar = () => {
    const scoped = ref(false)
    const redirectArray = [
        {
            name: "Новинки",
            link: '/latest',
            icon: '/icons/d-bolt.svg',
            aicon: '/icons/a-bolt.svg',
            locRefBool: false
        },
        {
            name: "Онгоїнги",
            link: '/ongoing',
            icon: '/icons/d-ongoing.svg',
            aicon: '/icons/a-ongoing.svg',
            locRefBool: false
        },
        {
            name: "Завершені",
            link: '/finish',
            icon: '/icons/d-finished.svg',
            aicon: '/icons/a-finished.svg',
            locRefBool: false
        },
        {
            name: "Недавние",
            link: '/recentplayed',
            icon: '/icons/d-clock.svg',
            aicon: '/icons/a-clock.svg',
            locRefBool: false
        },
        {
            name: "Спільнота",
            link: '/community',
            icon: '/icons/d-discord.svg',
            aicon: '/icons/a-discord.svg',
            locRef: 'https://discord.gg/rkeg68Zk5k',
            locRefBool: true
        },
        {
            name: "Новини",
            link: '/community',
            icon: '/icons/d-chat.svg',
            aicon: '/icons/a-chat.svg',
            locRefBool: false
        },
        {
            name: "Ранги на сайте",
            link: "/rankers",
            icon: '/icons/rankers.svg',
            aicon: '/icons/a-rankers.svg',
            custombg: true,
            locRefBool: false
        }
    ]

    return {
        scoped,
        redirectArray,
    }
}
