<script setup>

</script>

<template>
  <section id="layout">
    <header>
      <h1>Meu projeto hackathoner</h1>
    </header>

    <aside>
      <nav>
        <!-- Criando as rotas -->
        <router-link to="/">Home</router-link>
        <router-link to="/product">Produtos</router-link>
        <router-link to="/contact">Contato</router-link>
        <router-link to="/about">Sobre nós</router-link>
      </nav>

    </aside>

    <main>
      <!-- Linkando as rotas no main para aparecer nessa tag -->
      <router-view />
    </main>
  </section>
</template>

<style scoped>
  #layout {
    width: 100vw;
    min-height: 100vh;

    display: grid;
    grid-template-columns: 1fr 11fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 
      'sidebar header'
      'sidebar main';
  }

  header {
    height: 10vh;
    grid-area: header;
    background-color: beige;
  }

  aside {
    grid-area: sidebar;
    background-color: rgb(255, 142, 142);
  }

  aside nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  main {
    grid-area: main;
    background-color: rgb(162, 162, 238);
    padding: 20px;
  }
</style>
