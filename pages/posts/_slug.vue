<template>
<section class="content-container">
  {{posts}}
</section>
</template>

<script>
export default {
  asyncData: async ({ app, route, payload }) => ({
    posts: await app.$content('_post').get(route.path)
  })
}
</script>

<style>
.content-container
{
  width: 38rem;
  margin: 0 auto
}

.post-title
{
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: #35495e;
}
</style>
