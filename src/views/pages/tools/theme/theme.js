import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      css: '',
      rules: {
        name: value => {
          const pattern = /^[a-z0-9_]+$/g
          return pattern.test(value) || 'Pas d\'espaces, en minuscule'
        }
      },
      themes: [
        {
          title: 'Thème clair (light)',
          name: 'light',
          isDark: false,
          colors:
          [
            {
              name: 'primary',
              default: '#777',
              removable: false,
              shades: [
                {
                  active: false,
                  name: 'lighten-5',
                  value: '#fff'
                },
                {
                  active: false,
                  name: 'lighten-4',
                  value: '#fafafa'
                },
                {
                  active: false,
                  name: 'lighten-3',
                  value: '#dedede'
                },
                {
                  active: false,
                  name: 'lighten-2',
                  value: '#ccc'
                },
                {
                  active: false,
                  name: 'lighten-1',
                  value: '#aaa'
                },
                {
                  active: false,
                  name: 'darken-1',
                  value: '#888'
                },
                {
                  active: false,
                  name: 'darken-2',
                  value: '#666'
                },
                {
                  active: false,
                  name: 'darken-3',
                  value: '#444'
                },
                {
                  active: false,
                  name: 'darken-4',
                  value: '#111'
                }
              ]
            }
          ]
        },
        {
          title: 'Thème sombre (dark)',
          name: 'dark',
          isDark: true,
          colors: [
            {
              name: 'primary',
              default: '#ccc',
              removable: false,
              shades: [
                {
                  active: false,
                  name: 'lighten-5',
                  value: '#fff'
                },
                {
                  active: false,
                  name: 'lighten-4',
                  value: '#fafafa'
                },
                {
                  active: false,
                  name: 'lighten-3',
                  value: '#dedede'
                },
                {
                  active: false,
                  name: 'lighten-2',
                  value: '#ccc'
                },
                {
                  active: false,
                  name: 'lighten-1',
                  value: '#aaa'
                },
                {
                  active: false,
                  name: 'darken-1',
                  value: '#888'
                },
                {
                  active: false,
                  name: 'darken-2',
                  value: '#666'
                },
                {
                  active: false,
                  name: 'darken-3',
                  value: '#444'
                },
                {
                  active: false,
                  name: 'darken-4',
                  value: '#111'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    addColor: function () {
      for (let i = 0; i < this.themes.length; i++) {
        this.themes[i].colors.push({
          name: '',
          placeholder: 'secondary',
          default: '#777',
          removable: true,
          shades: [
            {
              active: false,
              name: 'lighten-5',
              value: '#fff'
            },
            {
              active: false,
              name: 'lighten-4',
              value: '#fafafa'
            },
            {
              active: false,
              name: 'lighten-3',
              value: '#dedede'
            },
            {
              active: false,
              name: 'lighten-2',
              value: '#ccc'
            },
            {
              active: false,
              name: 'lighten-1',
              value: '#aaa'
            },
            {
              active: false,
              name: 'darken-1',
              value: '#888'
            },
            {
              active: false,
              name: 'darken-2',
              value: '#666'
            },
            {
              active: false,
              name: 'darken-3',
              value: '#444'
            },
            {
              active: false,
              name: 'darken-4',
              value: '#111'
            }
          ]
        })
        this.$set(this.themes[i].colors[this.themes[i].colors.length - 2], 'removable', false)
      }
    },
    deleteColor: function () {
      for (let i = 0; i < this.themes.length; i++) {
        this.themes[i].colors.pop()
        if (this.themes[i].colors.length > 1) {
          this.$set(this.themes[i].colors[this.themes[i].colors.length - 1], 'removable', true)
        }
      }
    },
    generateTheme: function () {
      this.css = ''
      for (let i = 0; i < this.themes.length; i++) {
        for (let j = 0; j < this.themes[i].colors.length; j++) {
          // Default :
          // - Color
          this.css += `.theme--${this.themes[i].name} .${this.themes[i].colors[j].name}--text {color: ${this.themes[i].colors[j].default} !important;} `
          // - Background
          this.css += `.theme--${this.themes[i].name} .${this.themes[i].colors[j].name} {background: ${this.themes[i].colors[j].default} !important;} `
          // IF shades activated :
          if (this.themes[i].colors[j].activateShade) {
            for (let k = 0; k < this.themes[i].colors[j].shades.length; k++) {
              if (this.themes[i].colors[j].shades[k].active) {
                // Shade :
                // - Color
                this.css += `.theme--${this.themes[i].name} .${this.themes[i].colors[j].name}--text.text--${this.themes[i].colors[j].shades[k].name} {color: ${this.themes[i].colors[j].shades[k].value} !important;} `
                // - Background
                this.css += `.theme--${this.themes[i].name} .${this.themes[i].colors[j].name}.${this.themes[i].colors[j].shades[k].name} {background: ${this.themes[i].colors[j].shades[k].value} !important;} `
              }
            }
          }
        }
      }
      this.$refs.result.innerHTML = `<style>${this.css}</style><kbd>${this.css}</kbd>`
    },
    getCss: function () {
      return (`<style>${this.css}</style><bkd>${this.css}</kbd>`)
    },
    ...mapActions('theme', [
      'toggleTheme'
    ])
  }, // End methods
  computed: {
    ...mapGetters('theme', [
      'darkTheme'
    ])
  }, // End computed
  created () {
    if (this.$route.meta.background) {
      document.body.setAttribute('class', 'bg' + this.$route.meta.background)
    }
    window.scrollTo(0, 0)
  }
} // End export default
