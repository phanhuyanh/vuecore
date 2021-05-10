<template>
  <header>
    <div class="container d-flex align-items-center justify-content-between">
      <div class="logo">
        <router-link to="/" class="d-flex">
          <img src="https://i.imgur.com/AacG6L7.png" alt="vuecore" />
        </router-link>
      </div>
      <div class="nav">
        <ul class="d-flex align-items-center">
          <li class="active">
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/docs">Documents</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
