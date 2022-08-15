<template>
  <v-container>
    <v-row justify="center" >
      <v-card flat class="col-12 pa-0">
        <v-card-text class="text-h5 text-sm-h4 text-center grey--text text--darken-3" >Как с нами связаться</v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-row>
    <v-row
        class="d-flex flex-wrap"
        flat
        tile
        justify="center"
    >
      <v-card
            class="pa-0 col-9 col-sm-3 text-center"
            flat
            tile
            dark
        >
          <v-card-text class="text-h5">Телефон</v-card-text>
            <v-btn class="ma-0" color="#CF6508" icon href="tel:+78129454540">
              <v-icon x-large> mdi-phone </v-icon>
            </v-btn>
          <v-card-text class="text-button">945-45-40</v-card-text>
      </v-card>
      <v-card
          class="pa-0 col-9 col-sm-3 text-center"
          flat
          tile
          dark
          color="#CF6508"
      >
        <v-card-text class="text-h5">E-mail</v-card-text>
        <v-btn class="ma-0" icon href="mailto:bannerlord@list.ru">
          <v-icon x-large> mdi-email-outline </v-icon>
        </v-btn>
        <v-card-text class="text-body-2 text-decoration-underline pa-6">bannerlord@list.ru</v-card-text>
      </v-card>
      <v-card
          class="pa-0 col-9 col-sm-3 text-center"
          flat
          tile
          dark
      >
        <v-card-text class="text-h5">Telegram</v-card-text>
        <v-btn class="ma-0" color="#CF6508" icon href="https://t.me/bannerlord_spb">
          <font-awesome-icon icon="fa-brands fa-telegram fa-inverse" size="3x"/>
        </v-btn>
        <v-card-text class="text-button">+7 (921)-587-35-50</v-card-text>
      </v-card>
      <v-card
          class="pa-0 col-9 col-sm-3 text-center"
          flat
          tile
          dark
          color="#CF6508"
      >
        <v-card-text class="text-h5">WhatsApp</v-card-text>
        <v-btn class="ma-0" icon href="https://wa.me/79215873550">
          <v-icon x-large> mdi-whatsapp </v-icon>
        </v-btn>
        <v-card-text class="text-button">+7 (921)-587-35-50</v-card-text>
      </v-card>
    </v-row>
    <v-row justify="center">
      <v-card-text class="text-h5 text-center grey--text text--darken-3" >Наш адрес: </v-card-text>
      <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/bannerlord/225378779010/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Bannerlord</a><a href="https://yandex.ru/maps/2/saint-petersburg/category/outdoor_advertising/184107152/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Наружная реклама в Санкт‑Петербурге</a><a href="https://yandex.ru/maps/2/saint-petersburg/category/large_format_printing/184107120/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;">Широкоформатная печать в Санкт‑Петербурге</a><iframe src="https://yandex.ru/map-widget/v1/-/CCURZQQ5GD" width="560" height="400" frameborder="0" allowfullscreen="true" style="position:relative;"></iframe></div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Contacts",
}
</script>

<style scoped>

</style>