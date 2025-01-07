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
          description: "Aquí te muestro proyectos que he liderado, desde programas de televisión, documentales, hasta podcasts y series, donde destaca mi capacidad de investigación, guionismo, producción y edición.   Da clic en cualquier proyecto para obtener más información",
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
          title: '200 de Nuevo León (La serie)',
          description: "Serie que muestra 6 historias de personajes de diferentes municipios del estado y su impacto en la cultura y su comunidad.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/200-de-Nuevo-Leon-la-serie/";
            },},{id: "projects-40-aniversario-del-teatro-de-la-ciudad",
          title: '40 Aniversario del Teatro de la Ciudad',
          description: "Video conmemorativo del aniversario del Teatro.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/40-aniversario-del-teatro-de-la-ciudad/";
            },},{id: "projects-las-y-los-200-de-nuevo-león",
          title: 'Las y los 200 de Nuevo León',
          description: "Documental que conmemora el bicentenario de Nuevo León donde su gente reflexiona sobre una visión compartida para el futuro del estado.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Las-y-los-200-de-Nuevo-Leon/";
            },},{id: "projects-participar-nos-cambia-temporada-2",
          title: 'Participar Nos Cambia (Temporada 2)',
          description: "Nueva temporada donde abordamos nuevos proyectos e iniciativas para fortalecer la participación pública.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/participar-nos-cambia-temporada-2/";
            },},{id: "projects-participar-nos-cambia",
          title: 'Participar Nos Cambia',
          description: "Programa de TV que promueve una participación pública activa.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/participar-nos-cambia/";
            },},{id: "projects-participar-nos-une-podcast",
          title: 'Participar Nos Une (Podcast)',
          description: "Podcast que invita a reflexionar sobre el gobierno, la política pública y la participación ciudadana",
          section: "Projects",handler: () => {
              window.location.href = "/projects/participar-nos-une-podcast/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6F%72%6E%65%6C%61.%76%61%6C%64%65%7A@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/maldita_morra", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ornelavaldez", "_blank");
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
