<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="nav-links">
        <nuxt-link to="/" tag="li" class="page-link">
          <a>Home</a>
        </nuxt-link>

        <nuxt-link to="/previous" tag="li" class="page-link">
          <a>Previous</a>
        </nuxt-link>

        <nuxt-link to="/about" tag="li" class="page-link">
          <a>About</a>
        </nuxt-link>

        <nuxt-link to="/contact" tag="li" class="page-link">
          <a>Contact</a>
        </nuxt-link>
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
  z-index: 1;
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
.page-link a {
  text-decoration: none;
  display: block;
  color: white;
}
.page-link {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0 1rem;
  padding: 0.3rem;
}
.page-link a:hover,
.page-link a:active,
.page-link.nuxt-link-exact-active a {
  color: #06c4d1;
}
.page-link.nuxt-link-exact-active {
  border-bottom: 3px solid #06c4d1;
}
</style>
