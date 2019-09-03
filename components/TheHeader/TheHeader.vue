<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="nav-links">
        <nuxt-link to="/" tag="li" class="page-link"><a>All Posts</a></nuxt-link>
        <nuxt-link to="/about" tag="li" class="page-link"><a>About</a></nuxt-link>
              <nuxt-link to="/contact" tag="li" class="page-link"><a>Contact</a></nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;
  height: 4.5rem;
}
.main-nav {
  height: 100%;
}
.nav-links {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.nav-links a {
  text-decoration: none;
}
.page-link {
  list-style: none;
}
</style>
