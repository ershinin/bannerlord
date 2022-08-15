<template>
  <v-container>
    <v-row justify="center" >
      <v-card flat class="col-12 col-sm-9 pa-0">
        <v-card-text class="text-h4 text-sm-h3 text-center grey--text text--darken-3" >Широкоформатная печать и изготовление рекламной продукции</v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-row>

    <v-row class="d-flex flex-wrap"
           color="grey lighten-2"
           flat
           tile>
        <v-card
            v-for="n in linksPrints"
            :key="n.title"
            class="pa-2 col-sm-6 col-md-4"
            flat
            tile
            :to="n.url"
        >
          <v-hover v-slot="{ hover }">
          <v-img
              :src="`https://picsum.photos/400?image=${n.id * 5 + 10}`"
              :alt="n.title"
              aspect-ratio="1"
          >
            <v-row class="d-flex flex-column-reverse ma-0" align="center" style="height: 100%;">
              <div class=" white" style="width: 85%;  opacity: 0.85;">
                <v-card-text class="text-h5 text-center orange--text">{{ n.title }}</v-card-text>
                <v-scroll-y-transition >
                  <v-card-text
                      v-if="hover"
                      class="transition-fast-in-fast-out orange--text pt-0"
                  >
                    {{ n.desc }}
                  </v-card-text>
                </v-scroll-y-transition>
              </div>
            </v-row>
          </v-img>
          </v-hover>
        </v-card>

      <v-card
          v-for="n in linksAdvPrints"
          :key="n.title"
          class="pa-2 col-sm-6 col-md-4"
          flat
          tile
          :to="n.url"
      >
        <v-hover v-slot="{ hover }">
          <v-img
            :src="`https://picsum.photos/400?image=${n.id * 5 + 10}`"
            :alt="n.title"
            aspect-ratio="1"
          >

            <v-row class="d-flex flex-column-reverse ma-0" align="center" style="height: 100%;">
              <div class=" white" style="width: 85%;  opacity: 0.85;" >
                <v-card-text class="text-h5 text-center orange--text">{{ n.title }}</v-card-text>
                <v-scroll-y-transition >
                  <v-card-text
                      v-if="hover"
                      class="transition-fast-in-fast-out orange--text pt-0"
                  >
                    {{ n.desc }}
                  </v-card-text>
                </v-scroll-y-transition>
              </div>
            </v-row>
          </v-img>
        </v-hover>
      </v-card>
    </v-row>
    <v-row>
      <v-divider></v-divider>
    </v-row>
    <v-row justify="center" >
      <h5 class="text-h4 text-center col-12 my-4">Наши преимущества</h5>
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item color="orange lighten-4">
          <v-card class="elevation-2">
            <v-card-title class="text-h6 orange white--text" >
              Сертифицированные чернила
            </v-card-title>
            <v-card-text class="mt-2">
              Оригинальные чернила HP Latex благодаря которым продукция является безопасной для окружающей среды и человека
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="orange lighten-3" class="text-right">
          <v-card class="elevation-2">
            <v-card-title class="text-h6 orange white--text">
              Экологичная печать
            </v-card-title>
            <v-card-text class="text-left mt-2">
              Без запаха и едких выделений. Устойчива к ультрафиолету и воде
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item  color="orange lighten-2">
          <v-card class="elevation-2">
            <v-card-title class="text-h6 orange white--text">
              Высокое качество
            </v-card-title>
            <v-card-text class="mt-2">
              На новом современном оборудовании компании HP печать получается четкая и яркая
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="orange lighten-1" class="text-right">
          <v-card class="elevation-2">
            <v-card-title class="text-h6 orange white--text">
              Доступные цены
            </v-card-title>
            <v-card-text class="text-left mt-2">
              У нас свой парк оборудования для печати, поэтому цены отличные, без посредников
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="orange">
          <v-card class="elevation-2">
            <v-card-title class="text-h6 orange white--text">
              Выезд и замеры
            </v-card-title>
            <v-card-text class="mt-2">
              Нужен монтаж и замеры перед или после печати? У нас свой штат сотрудников, готовых воплотить вашу мечту в реальность
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="orange darken-1" class="text-right">
          <v-card class="elevation-2">
            <v-card-title class="text-h6 orange white--text">
              Широкий выбор материалов
            </v-card-title>
            <v-card-text class="text-left mt-2">
              Благодаря надежным поставщикам широкоформатных материалов, у нас всегда есть из чего выбрать
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-row>
  </v-container>
</template>

<script>
export default {

  isActive: false,
  name: "Home",

  data: () => ({
    isActive: false,
    linksPrints: [
      {title: 'Баннеры', url: '/banners', id: 1, desc: 'Прочные и недорогие рекламные баннеры. Выполнены на жестком баннерном полотне'},
      {title: 'Плёнка', url: '/films', id: 2, desc: 'Самоклеящаяся плёнка для рекламы на окнах, стенах и других гладких поверхностях'},
      {title: 'Плакаты', url: '/posters', id: 3, desc: 'Высококачественные афиши, плакаты, фотографии и другие виды интерьерных и экстерьерных решений'},
      {title: 'Картины на холсте', url: '/paintings', id: 4, desc: 'Интерьерное решение для дома и офиса, которое всегда притягивает взор'},
    ],
    linksAdvPrints: [
      {title: 'Световые конструкции', url: '/light-design', id: 5, desc: 'Светящиеся рекламные и декоративные конструкции'},
      {title: 'Брендирование', url: '/branding', id: 6, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing' },
      {title: 'Информационные стенды', url: '/stands', id: 7, desc: 'Настенные информационные стенды с прозрачными карманами для листов, визиток или листовок'},
      {title: 'Декор', url: '/decor', id: 8, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing'},
      {title: 'Дизайн', url: '/design', id: 9, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing'},
    ]
  }),
}
</script>

<style scoped>

</style>