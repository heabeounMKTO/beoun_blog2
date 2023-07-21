export interface NuxtCustomSchema {
 appConfig?: {
  /**
   * Nuxt Icon
   * 
   * Configure the defaults of Nuxt Icon
   * 
  */
  nuxtIcon?: {
   /**
    * Icon Size
    * 
    * Set the default icon size. Set to false to disable the sizing of icon in style.
    * 
    * @default "1em"
    * 
    * @studioIcon material-symbols:format-size-rounded
   */
   size?: string | false,

   /**
    * CSS Class
    * 
    * Set the default CSS class
    * 
    * @default ""
    * 
    * @studioIcon material-symbols:css
   */
   class?: string,

   /**
    * Icon aliases
    * 
    * Define Icon aliases to update them easily without code changes.
    * 
    * 
    * @studioIcon material-symbols:star-rounded
    * 
    * @studioInputObjectValueType icon
   */
   aliases?: { [alias: string]: string },
  },

  /**
   * Prose configuration from Nuxt Typography
   * 
   * 
   * @studioIcon material-symbols:short-text-rounded
   * 
   * @studioInput icon
  */
  prose?: {
   /**
    * Copy button (used in code blocks)
    * 
    * 
    * @studioIcon material-symbols:content-copy
   */
   copyButton?: {
    /**
     * Icon displayed to copy
     * 
     * @default "ph:copy"
    */
    iconCopy?: string,

    /**
     * Icon displayed when copied
     * 
     * @default "ph:check"
    */
    iconCopied?: string,
   },

   /**
    * Default configuration for all headings (h1, h2, h3, h4, h5 and h6)
    * 
    * 
    * @studioIcon material-symbols:title
   */
   headings?: {
    /**
     * Default icon for anchor link on hover
     * 
     * @default "ph:link"
    */
    icon?: string|false,
   },

   /**
    * First heading configuration
    * 
    * 
    * @studioIcon material-symbols:format-h1
   */
   h1?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },

   /**
    * Second heading configuration
    * 
    * 
    * @studioIcon material-symbols:format-h2
   */
   h2?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },

   /**
    * Third heading configuration
    * 
    * 
    * @studioIcon material-symbols:format-h3
   */
   h3?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },

   /**
    * Fourth heading configuration
    * 
    * 
    * @studioIcon material-symbols:format-h4
   */
   h4?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },

   /**
    * Fifth heading configuration
    * 
    * 
    * @studioIcon material-symbols:format-h5
   */
   h5?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },

   /**
    * Sixth heading configuration
    * 
    * 
    * @studioIcon material-symbols:format-h6
   */
   h6?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },
  },

  /**
   * Alpine theme configuration.
   * 
   * 
   * @studioIcon carbon:blog
  */
  alpine?: {
   /**
    * Website title, used as header default title and meta title.
    * 
    * @default "Alpine"
    * 
    * @studioIcon material-symbols:title
   */
   title?: string,

   /**
    * Website description, used for meta description.
    * 
    * @default "The minimalist blog theme"
    * 
    * @studioIcon material-symbols:description
   */
   description?: string,

   /**
    * Cover image.
    * 
    * 
    * @example '/cover.jpg'
    * 
    * @studioIcon dashicons:cover-image
   */
   image?: {
    /**
     * @default "/social-card-preview.png"
     * 
     * @example '/cover.jpg'
     * 
     * @studioIcon dashicons:cover-image
     * 
     * @studioInput file
    */
    src?: string,

    /** @default "An image showcasing my project." */
    alt?: string,

    /** @default 400 */
    width?: number,

    /** @default 300 */
    height?: number,
   },

   /**
    * Header configuration.
    * 
    * 
    * @studioIcon fluent:document-header-24-regular
   */
   header?: {
    /**
     * Header position.
     * 
     * @default "right"
    */
    position?: 'left'|'center'|'right',

    /**
     * Header logo.
     * 
     * 
     * @studioIcon dashicons:cover-image
    */
    logo?: {
     /**
      * Path of the logo.
      * 
      * @default "/logo.svg"
      * 
      * @studioIcon dashicons:cover-image
      * 
      * @studioInput file
     */
     path?: string,

     /**
      * Path of the logo in dark mode.
      * 
      * Leave it empty if you want to use the same logo.
      * 
      * @default "/logo-dark.svg"
      * 
      * @studioIcon dashicons:cover-image
      * 
      * @studioInput file
     */
     pathDark?: string,

     /**
      * Alt description for the image.
      * 
      * @default "Alpine theme logo"
     */
     alt?: string,
    },
   },

   /**
    * Footer configuration.
    * 
    * 
    * @studioIcon fluent:document-footer-24-regular
   */
   footer?: {
    /**
     * Footer credits.
     * 
    */
    credits?: {
     /**
      * Toggle the footer.
      * 
      * @default true
     */
     enabled?: boolean,

     /**
      * Text to be displayed.
      * 
      * @default "Alpine"
     */
     text?: string,

     /**
      * GitHub repository link.
      * 
      * @default "https://www.github.com/nuxt-themes/alpine"
     */
     repository?: string,
    },

    /**
     * Toggle the navigation.
     * 
     * @default true
    */
    navigation?: boolean,

    /**
     * Footer position.
     * 
     * @default "center"
    */
    alignment?: 'left'|'center'|'right',

    /**
     * Footer message.
     * 
     * Leave it empty to disable.
     * 
     * @default "Follow me on"
    */
    message?: string,
   },

   /**
    * Icons to be added to Social Icons in footer.
    * 
    * 
    * @studioIcon material-symbols:add-link
   */
   socials?: {
    /**
     * Twitter handle
     * 
     * @default ""
     * 
     * @example 'nuxt_js'
     * 
     * @studioIcon simple-icons:twitter
    */
    twitter?: string,

    /**
     * Instagram handle
     * 
     * @default ""
     * 
     * @example 'wearenuxt'
     * 
     * @studioIcon simple-icons:instagram
    */
    instagram?: string,

    /**
     * GitHub path
     * 
     * @default ""
     * 
     * @example 'nuxt-themes/alpine'
     * 
     * @studioIcon simple-icons:github
    */
    github?: string,

    /**
     * GitHub path
     * 
     * @default ""
     * 
     * @example 'nuxt'
     * 
     * @studioIcon simple-icons:facebook
    */
    facebook?: string,

    /**
     * Medium handle
     * 
     * @default ""
     * 
     * @example 'nuxt'
     * 
     * @studioIcon simple-icons:medium
    */
    medium?: string,

    /**
     * Youtube handle
     * 
     * @default ""
     * 
     * @example '@nuxtlabs'
     * 
     * @studioIcon simple-icons:youtube
    */
    youtube?: string,
   },

   /**
    * Contact form configuration.
    * 
    * 
    * @studioIcon ion:ios-paperplane
   */
   form?: {
    /**
     * Success message.
     * 
     * @default "Message sent. Thank you!"
    */
    successMessage?: string,
   },

   /**
    * Back to top button configuration.
    * 
    * 
    * @studioIcon material-symbols:arrow-upward
   */
   backToTop?: {
    /** @default "material-symbols:arrow-upward" */
    icon?: string,

    /** @default "Back to top" */
    text?: string,
   },
  },
 },
}
export type CustomAppConfig = Exclude<NuxtCustomSchema['appConfig'], undefined>
type _CustomAppConfig = CustomAppConfig

declare module '@nuxt/schema' {
  interface NuxtConfig extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface NuxtOptions extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface CustomAppConfig extends _CustomAppConfig {}
}

declare module 'nuxt/schema' {
  interface NuxtConfig extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface NuxtOptions extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface CustomAppConfig extends _CustomAppConfig {}
}
