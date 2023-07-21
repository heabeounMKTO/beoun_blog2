import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["plausible"]?: typeof import("@nuxtjs/plausible").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinceau"]?: typeof import("pinceau/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tokens"]?: typeof import("@nuxt-themes/tokens").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["studio"]?: typeof import("@nuxthq/studio").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["@nuxt-themes/alpine"]?: typeof import("@nuxt-themes/alpine").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt-config-schema-compat"]?: typeof import("nuxt-config-schema").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/plausible", Exclude<NuxtConfig["plausible"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["pinceau/nuxt", Exclude<NuxtConfig["pinceau"], boolean>] | ["@nuxt-themes/tokens", Exclude<NuxtConfig["tokens"], boolean>] | ["@nuxthq/studio", Exclude<NuxtConfig["studio"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxt-themes/alpine", Exclude<NuxtConfig["@nuxt-themes/alpine"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["nuxt-config-schema", Exclude<NuxtConfig["nuxt-config-schema-compat"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   pinceau: {
      studio: boolean,

      outputDir: string,
   },

   content: {
      cacheVersion: number,

      cacheIntegrity: string,

      transformers: Array<any>,

      base: string,

      api: {
         baseURL: string,
      },

      watch: {
         ws: {
            port: {
               port: number,

               portRange: Array<number>,
            },

            hostname: string,

            showURL: boolean,
         },
      },

      sources: any,

      ignores: Array<any>,

      locales: Array<any>,

      defaultLocale: any,

      highlight: {
         theme: {
            default: string,

            dark: string,
         },

         preload: Array<string>,
      },

      markdown: {
         tags: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },

         anchorLinks: {
            depth: number,

            exclude: Array<number>,
         },

         remarkPlugins: any,

         rehypePlugins: any,
      },

      yaml: any,

      csv: {
         delimeter: string,

         json: boolean,
      },

      navigation: {
         fields: Array<string>,
      },

      documentDriven: boolean,

      respectPathCase: boolean,

      experimental: {
         clientDB: boolean,

         stripQueryParameters: boolean,
      },
   },

   appConfigSchema: {
      properties: {
         id: string,

         properties: {
            nuxtIcon: {
               title: string,

               description: string,

               id: string,

               properties: {
                  size: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     tsType: string,

                     id: string,

                     default: string,

                     type: string,
                  },

                  class: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     default: string,

                     type: string,
                  },

                  aliases: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     tsType: string,

                     id: string,

                     default: any,

                     type: string,
                  },
               },

               type: string,

               default: {
                  size: string,

                  class: string,

                  aliases: any,
               },
            },

            prose: {
               title: string,

               description: string,

               tags: Array<string>,

               id: string,

               properties: {
                  copyButton: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        iconCopy: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        iconCopied: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        iconCopy: string,

                        iconCopied: string,
                     },
                  },

                  headings: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        icon: string,
                     },
                  },

                  h1: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        icon: string,
                     },
                  },

                  h2: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        icon: string,
                     },
                  },

                  h3: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        icon: string,
                     },
                  },

                  h4: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        icon: string,
                     },
                  },

                  h5: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        icon: string,
                     },
                  },

                  h6: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        icon: string,
                     },
                  },
               },

               type: string,

               default: {
                  copyButton: {
                     iconCopy: string,

                     iconCopied: string,
                  },

                  headings: {
                     icon: string,
                  },

                  h1: {
                     icon: string,
                  },

                  h2: {
                     icon: string,
                  },

                  h3: {
                     icon: string,
                  },

                  h4: {
                     icon: string,
                  },

                  h5: {
                     icon: string,
                  },

                  h6: {
                     icon: string,
                  },
               },
            },

            alpine: {
               title: string,

               description: string,

               tags: Array<string>,

               id: string,

               properties: {
                  title: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     default: string,

                     type: string,
                  },

                  description: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     default: string,

                     type: string,
                  },

                  image: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        src: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        alt: {
                           type: string,

                           id: string,

                           default: string,
                        },

                        width: {
                           type: string,

                           id: string,

                           default: number,
                        },

                        height: {
                           type: string,

                           id: string,

                           default: number,
                        },
                     },

                     type: string,

                     default: {
                        src: string,

                        alt: string,

                        width: number,

                        height: number,
                     },
                  },

                  header: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        position: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },

                        logo: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           properties: {
                              path: {
                                 title: string,

                                 description: string,

                                 tags: Array<string>,

                                 id: string,

                                 default: string,

                                 type: string,
                              },

                              pathDark: {
                                 title: string,

                                 description: string,

                                 tags: Array<string>,

                                 id: string,

                                 default: string,

                                 type: string,
                              },

                              alt: {
                                 title: string,

                                 description: string,

                                 tags: Array<any>,

                                 id: string,

                                 default: string,

                                 type: string,
                              },
                           },

                           type: string,

                           default: {
                              path: string,

                              pathDark: string,

                              alt: string,
                           },
                        },
                     },

                     type: string,

                     default: {
                        position: string,

                        logo: {
                           path: string,

                           pathDark: string,

                           alt: string,
                        },
                     },
                  },

                  footer: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        credits: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           properties: {
                              enabled: {
                                 title: string,

                                 description: string,

                                 tags: Array<any>,

                                 id: string,

                                 default: boolean,

                                 type: string,
                              },

                              text: {
                                 title: string,

                                 description: string,

                                 tags: Array<any>,

                                 id: string,

                                 default: string,

                                 type: string,
                              },

                              repository: {
                                 title: string,

                                 description: string,

                                 tags: Array<any>,

                                 id: string,

                                 default: string,

                                 type: string,
                              },
                           },

                           type: string,

                           default: {
                              enabled: boolean,

                              text: string,

                              repository: string,
                           },
                        },

                        navigation: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: boolean,

                           type: string,
                        },

                        alignment: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },

                        message: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        credits: {
                           enabled: boolean,

                           text: string,

                           repository: string,
                        },

                        navigation: boolean,

                        alignment: string,

                        message: string,
                     },
                  },

                  socials: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        twitter: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        instagram: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        github: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        facebook: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        medium: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        youtube: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        twitter: string,

                        instagram: string,

                        github: string,

                        facebook: string,

                        medium: string,

                        youtube: string,
                     },
                  },

                  form: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        successMessage: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        successMessage: string,
                     },
                  },

                  backToTop: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           type: string,

                           id: string,

                           default: string,
                        },

                        text: {
                           type: string,

                           id: string,

                           default: string,
                        },
                     },

                     type: string,

                     default: {
                        icon: string,

                        text: string,
                     },
                  },
               },

               type: string,

               default: {
                  title: string,

                  description: string,

                  image: {
                     src: string,

                     alt: string,

                     width: number,

                     height: number,
                  },

                  header: {
                     position: string,

                     logo: {
                        path: string,

                        pathDark: string,

                        alt: string,
                     },
                  },

                  footer: {
                     credits: {
                        enabled: boolean,

                        text: string,

                        repository: string,
                     },

                     navigation: boolean,

                     alignment: string,

                     message: string,
                  },

                  socials: {
                     twitter: string,

                     instagram: string,

                     github: string,

                     facebook: string,

                     medium: string,

                     youtube: string,
                  },

                  form: {
                     successMessage: string,
                  },

                  backToTop: {
                     icon: string,

                     text: string,
                  },
               },
            },
         },

         type: string,

         default: {
            nuxtIcon: {
               size: string,

               class: string,

               aliases: any,
            },

            prose: {
               copyButton: {
                  iconCopy: string,

                  iconCopied: string,
               },

               headings: {
                  icon: string,
               },

               h1: {
                  icon: string,
               },

               h2: {
                  icon: string,
               },

               h3: {
                  icon: string,
               },

               h4: {
                  icon: string,
               },

               h5: {
                  icon: string,
               },

               h6: {
                  icon: string,
               },
            },

            alpine: {
               title: string,

               description: string,

               image: {
                  src: string,

                  alt: string,

                  width: number,

                  height: number,
               },

               header: {
                  position: string,

                  logo: {
                     path: string,

                     pathDark: string,

                     alt: string,
                  },
               },

               footer: {
                  credits: {
                     enabled: boolean,

                     text: string,

                     repository: string,
                  },

                  navigation: boolean,

                  alignment: string,

                  message: string,
               },

               socials: {
                  twitter: string,

                  instagram: string,

                  github: string,

                  facebook: string,

                  medium: string,

                  youtube: string,
               },

               form: {
                  successMessage: string,
               },

               backToTop: {
                  icon: string,

                  text: string,
               },
            },
         },
      },

      default: {
         nuxtIcon: {
            size: string,

            class: string,

            aliases: any,
         },

         prose: {
            copyButton: {
               iconCopy: string,

               iconCopied: string,
            },

            headings: {
               icon: string,
            },

            h1: {
               icon: string,
            },

            h2: {
               icon: string,
            },

            h3: {
               icon: string,
            },

            h4: {
               icon: string,
            },

            h5: {
               icon: string,
            },

            h6: {
               icon: string,
            },
         },

         alpine: {
            title: string,

            description: string,

            image: {
               src: string,

               alt: string,

               width: number,

               height: number,
            },

            header: {
               position: string,

               logo: {
                  path: string,

                  pathDark: string,

                  alt: string,
               },
            },

            footer: {
               credits: {
                  enabled: boolean,

                  text: string,

                  repository: string,
               },

               navigation: boolean,

               alignment: string,

               message: string,
            },

            socials: {
               twitter: string,

               instagram: string,

               github: string,

               facebook: string,

               medium: string,

               youtube: string,
            },

            form: {
               successMessage: string,
            },

            backToTop: {
               icon: string,

               text: string,
            },
         },
      },
   },
  }
  interface PublicRuntimeConfig {
   FORMSPREE_URL: string,

   plausible: {
      hashMode: boolean,

      trackLocalhost: boolean,

      domain: string,

      apiHost: string,

      autoPageviews: boolean,

      autoOutboundTracking: boolean,
   },

   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: any,

      experimental: {
         stripQueryParameters: boolean,

         clientDB: boolean,
      },

      respectPathCase: boolean,

      api: {
         baseURL: string,
      },

      navigation: {
         fields: Array<string>,
      },

      tags: {
         p: string,

         a: string,

         blockquote: string,

         "code-inline": string,

         code: string,

         em: string,

         h1: string,

         h2: string,

         h3: string,

         h4: string,

         h5: string,

         h6: string,

         hr: string,

         img: string,

         ul: string,

         ol: string,

         li: string,

         strong: string,

         table: string,

         thead: string,

         tbody: string,

         td: string,

         th: string,

         tr: string,
      },

      highlight: {
         theme: {
            default: string,

            dark: string,
         },

         preload: Array<string>,
      },

      wsUrl: string,

      documentDriven: {
         page: boolean,

         navigation: boolean,

         surround: boolean,

         globals: any,

         layoutFallbacks: Array<string>,

         injectPage: boolean,
      },

      host: string,

      trailingSlash: boolean,

      anchorLinks: {
         depth: number,

         exclude: Array<number>,
      },
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }