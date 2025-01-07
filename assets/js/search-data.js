// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-conóceme",
    title: "Conóceme",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-portfolio",
          title: "Portfolio",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-tendiendo-un-puente-el-camino-de-ximena-peredo-desde-el-activismo-hacia-una-política-más-colaborativa",
      
        title: "Tendiendo un puente - el camino de Ximena Peredo desde el activismo hacia...",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/Tendiendo-un-puente/";
        
      },
    },{id: "post-bridging-the-gap-ximena-peredo-s-journey-from-activism-to-collaborative-politics",
      
        title: "Bridging the Gap - Ximena Peredo’s Journey from Activism to Collaborative Politics",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/Bridging-the-gap/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-200-de-nuevo-león-la-serie",
          title: '200 de Nuevo León - La serie',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/200-de-Nuevo-Leon-la-serie/";
            },},{id: "projects-40-aniversario-del-teatro-de-la-ciudad",
          title: '40 aniversario del teatro de la ciudad',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/40-aniversario-del-teatro-de-la-ciudad/";
            },},{id: "projects-las-y-los-200-de-nuevo-león",
          title: 'Las y los 200 de Nuevo León',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Las-y-los-200-de-Nuevo-Leon/";
            },},{id: "projects-reels-de-instagram",
          title: 'Reels de Instagram',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Reels/";
            },},{id: "projects-participar-nos-cambia",
          title: 'Participar Nos Cambia',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/participar-nos-cambia/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
