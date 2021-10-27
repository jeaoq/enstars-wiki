// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Oi~ssu♪",
    tagline:
        "Standard for formatting dialogue-based stories, designed for Ensemble Stars!! story translations",
    url: "https://oissu.tsukina.ga",
    baseUrl: "/",
    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",
    organizationName: "enstars", // Usually your GitHub org/user name.
    projectName: "oissu", // Usually your repo name.

    presets: [
        [
            "@docusaurus/preset-classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js")
                    // Please change this to your repo.
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/facebook/docusaurus/edit/main/website/blog/"
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css")
                }
            })
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: "img/oissu-splash.png",
            colorMode: {
                defaultMode: "light",
                switchConfig: {
                    darkIcon: "dark_mode",
                    darkIconStyle: {
                        // marginLeft: "2px",
                        fontSize: "0.9em",
                        color: "white",
                        fontFamily: "Material Icons Round"
                    },
                    lightIcon: "light_mode",
                    lightIconStyle: {
                        // marginLeft: "1px",
                        fontSize: "0.9em",
                        color: "white",
                        fontFamily: "Material Icons Round"
                    }
                }
            },
            navbar: {
                title: "Oi~ssu♪",
                logo: {
                    alt: "Oi~ssu♪ Logo",
                    src: "img/logo-color.svg"
                },
                items: [
                    {
                        type: "doc",
                        docId: "index",
                        position: "left",
                        label: "Documentation"
                    },
                    {
                        href: "https://github.com/enstars/oissu",
                        label: "GitHub",
                        position: "left"
                    }
                ]
            },
            footer: {
                style: "light",
                copyright: `Oissu is licensed under the <a target="_blank" href="https://github.com/enstars/oissu/blob/main/LICENSE"><svg style="display: inline-block; vertical-align:-2px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" fill="currentColor" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg> <b>GNU General Public License v3.0.</b></a>`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            }
        }),
    scripts: [
        {
            src: "https://r.tsukina.ga/oissu",
            async: true
        },
        {
            src: "https://static.cloudflareinsights.com/beacon.min.js",
            defer: true,
            "data-cf-beacon": '{"token": "a5087641643d4694bd3742d86656891a"}'
        }
    ]
};

module.exports = config;
