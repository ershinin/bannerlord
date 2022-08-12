<template>
  <v-app>
    <v-navigation-drawer
        app
        temporary
        v-model="drawer"
    >
      <v-card
          class="mx-auto"
          max-width="400"
          tile
      >
        <v-list-item to="/">
          <v-list-item-content>
            <v-list-item-title>Главная</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
            v-for="link of linksPrints"
            :key="link.title"
            :to="link.url"
        >
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
            v-for="link of linksAdvPrints"
            :key="link.title"
            :to="link.url"
        >
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/contacts">
          <v-list-item-content>
            <v-list-item-title>Контакты</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar
        app
        dark
        prominent
        shrink-on-scroll
    >
      <v-app-bar-nav-icon class="hidden-md-and-up"
          @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-app-bar-title class="pa-0">
        <p class="text-h3 text-uppercase text-center">
          Bannerlord
        </p>
        <v-divider></v-divider>
        <p class="text-lowercase font-weight-thin text-center" style="letter-spacing: 0.4em;">
          Типография
        </p>
<!--       <v-img
           alt="Типография Bannerlord"
           src="../public/img/logo.png"
           contain
       ></v-img>-->
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-sheet
            :height="contactResize.height"
            :width="contactResize.width"
            style="position: absolute; right: 4px;"
            color="#272727"
      >
        <v-container class="pa-0">
          <v-row no-gutters justify="center" align="center">
            <span class="text-h5">945-45-40</span>
            <v-btn class="ma-0" color="#CF6508" icon>
              <v-icon size="24px"> mdi-phone </v-icon>
            </v-btn>
            <v-btn class="ma-0" color="#CF6508" icon>
              <font-awesome-icon icon="fa-brands fa-telegram" size="xl"/>
            </v-btn>
            <v-btn class="ma-0" color="#CF6508" icon>
              <v-icon size="24px"> mdi-whatsapp </v-icon>
            </v-btn>
            <span class="text-subtitle-2 text-decoration-underline hidden-xs-only">bannerlord@list.ru</span>
          </v-row>
        </v-container>
      </v-sheet>

      <template v-slot:extension class="hidden-sm-and-down">
          <v-tabs centered class="hidden-sm-and-down" color="#CF6508">
            <v-tab to="/" >Главная</v-tab>
            <v-menu offset-y open-on-hover>
              <template v-slot:activator="{ on, attrs }">
                <v-tab v-bind="attrs" v-on="on">
                  Широкоформатная печать
                </v-tab>
              </template>
              <v-list dark>
                <v-list-item
                    v-for="link in linksPrints"
                    :key="link.title"
                    :to="link.url"
                >
                  <v-list-item-title>{{ link.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu offset-y open-on-hover>
              <template v-slot:activator="{ on, attrs }">
                <v-tab v-bind="attrs" v-on="on">
                  Рекламная продукция
                </v-tab>
              </template>
              <v-list dark>
                <v-list-item
                    v-for="link in linksAdvPrints"
                    :key="link.title"
                    :to="link.url"
                >
                  <v-list-item-title>{{ link.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-tab to="/contacts" >Контакты</v-tab>
          </v-tabs>
      </template>
    </v-app-bar>

    <v-main>

      <v-container fluid>
        <router-view></router-view>

      </v-container>
    </v-main>

    <v-footer
        dark
        padless
    >
      <v-card
          flat
          tile
          class="lighten-1 text-center"
          width="100%"
      >
        <v-card-text>
          <v-btn class="mx-4" icon color="#CF6508">
            <v-icon size="24px">mdi-email</v-icon>
          </v-btn>
          <v-btn class="mx-4" icon color="#CF6508">
            <v-icon size="24px">mdi-instagram</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="pt-0">
          Наш адрес: Санкт-Петербург, 19 линия Васильевского острова, д. 32, к. 5, лит. З
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} — Bannerlord
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    linksPrints: [
      {title: 'Баннеры', url: '/banners'},
      {title: 'Плёнка', url: '/films'},
      {title: 'Плакаты', url: '/posters'},
      {title: 'Картины на холсте', url: '/paintings'},
    ],
    linksAdvPrints: [
      {title: 'Световые конструкции', url: '/light-design'},
      {title: 'Брендирование', url: '/branding'},
      {title: 'Информационные стенды', url: '/stands'},
      {title: 'Декор', url: '/decor'},
      {title: 'Дизайн', url: '/design'},
    ]
  }),

  computed: {
    contactResize () {
      return this.$vuetify.breakpoint.mdAndUp ? {
        width: 150,
        height: 100,
        } : this.$vuetify.breakpoint.smAndUp ? {
        width: 540,
        height: 48,
        } : {
        width: 300,
        height: 48,
      }
    },
  },
};
</script>
