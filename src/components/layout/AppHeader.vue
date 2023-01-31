<template>
  <header class="header">
    <nav>
      <ul class="list">
        <li>
          <RouterLink :to="{ name: 'home' }" class="link"> Главная </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'converter' }" class="link">
            Конвертер
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: darkslategrey;
}

.list {
  list-style: none;
  padding-left: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.link {
  text-decoration: none;
  margin-left: 1rem;
  margin-right: 1rem;
  color: darkgray;
  font-weight: bold;

  &.router-link-active {
    color: white;
  }
}
</style>
