// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-communication",
          title: "Communication",
          description: "My collection of communication materials in conferences and science outreach.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is my CV summary. You can find the complete version by clicking the PDF icon in the top right corner ↗️",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "List and materials for courses that I taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-new-template-for-my-personal-website-the-site-is-under-construction-patience-s-il-vous-plait",
          title: 'New template for my personal website! The site is under construction, patience s’il-vous-plait....',
          description: "",
          section: "News",},{id: "news-my-conference-communication-material-is-now-available-please-check-it-out-in-parallel-i-contributed-on-a-proci-paper-that-came-out-this-week-you-can-find-it-below",
          title: 'My conference communication material is now available, please check it out! In parallel,...',
          description: "",
          section: "News",},{id: "projects-ondes-et-turbulence-dans-un-plasma-magnétisé",
          title: 'Ondes et turbulence dans un plasma magnétisé',
          description: "Poster d&#39;introduction à la physique des plasmas magnétisés destinés aux étudiants de Licence.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/L3_poster/";
            },},{id: "projects-control-and-stability-of-magnetized-plasma-columns",
          title: 'Control and stability of magnetized plasma columns',
          description: "PhD defence presentation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phd_talk/";
            },},{id: "projects-emissive-cathode-immersed-in-a-plasma",
          title: 'Emissive cathode immersed in a plasma',
          description: "Poster on the plasma-cathode dynamic system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pyro_poster/";
            },},{id: "projects-operation-and-stability-of-an-emissive-cathode-in-a-plasma",
          title: 'Operation and stability of an emissive cathode in a plasma',
          description: "Talk on the plasma-cathode dynamic system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pyro_talk/";
            },},{id: "projects-plasma-potential-control-using-an-emissive-cathode",
          title: 'Plasma potential control using an emissive cathode',
          description: "Poster on hot cathode as an innovative plasma control tool.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vp_poster/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%70%61%67%61%75%64@%65%74%68%7A.%63%68", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-0005-5063", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=R7Ct8CwAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/francis-pagaud-7433b014a", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/FrancisPagaud", "_blank");
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
