<template>
  <section class="home-container">
    <div>
      <h2 class="home-slogan">
        Seamlessly use content files in your Nuxt.js sites.
      </h2>
      <div class="home-links">


        <!-- {{posts}} -->
        <nuxt-link v-for="post in posts" :key="post.meta.index" :to="post.permalink" class="button--green">{{post.permalink}}</nuxt-link>
        <a href="https://github.com/nuxt-community/content-module" target="_blank" class="button--grey">Learn More on Github</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  asyncData: async ({ app, route, payload }) => ({
    posts: await app.$content('_post').get(route.path) || payload
  })
}
</script>

<style>
.home-container
{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.home-slogan
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.home-links
{
  padding-top: 15px;
}
</style>
