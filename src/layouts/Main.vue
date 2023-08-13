<template>
  <v-app-bar>

    <v-img
      max-width="40"
      max-height="40"
      class="ml-6"
      src="./public/logo.png"
      alt="logo"
    ></v-img>

    <v-app-bar-title>Проектный чат</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-menu
      class="mr-6"
      min-width="200px"
      rounded
    >
      <template v-slot:activator="{ props }">
        <v-btn
          icon
          v-bind="props"
        >
          <v-avatar
            color="brown"
            size="large"
          >
            <span class="text-h5">{{ user.initials }}</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center">
            <v-avatar
              color="brown"
            >
              <span class="text-h5">{{ user.initials }}</span>
            </v-avatar>
            <h3>{{ user.fullName }}</h3>
            <p class="text-caption mt-1">
              {{ user.email }}
            </p>
            <v-divider class="my-3"></v-divider>
            <v-btn
              rounded
              variant="text"
            >
              Edit Account
            </v-btn>
            <v-divider class="my-3"></v-divider>
            <v-btn
              rounded
              variant="text"
            >
              Disconnect
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-app-bar>

  <slot></slot>

  <div style="max-height: 50px; background: rosybrown">
    bottom
  </div>

</template>

<script>
  export default {
    name: "Main",
    data: () => ({
      user: {
        initials: 'JD',
        fullName: 'John Doe',
        email: 'john.doe@doe.com',
      },
    }),
  }
</script>

<style scoped>

</style>
