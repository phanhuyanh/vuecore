<template>
  <div class="sidebar">
    <div class="search">
      <span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3187 18.0273L13.232 11.9406C14.1766 10.7195 14.6875 9.22656 14.6875 7.65625C14.6875 5.77656 13.9539 4.01406 12.6273 2.68516C11.3008 1.35625 9.53359 0.625 7.65625 0.625C5.77891 0.625 4.01172 1.35859 2.68516 2.68516C1.35625 4.01172 0.625 5.77656 0.625 7.65625C0.625 9.53359 1.35859 11.3008 2.68516 12.6273C4.01172 13.9562 5.77656 14.6875 7.65625 14.6875C9.22656 14.6875 10.7172 14.1766 11.9383 13.2344L18.025 19.3187C18.0428 19.3366 18.064 19.3508 18.0874 19.3604C18.1107 19.3701 18.1357 19.3751 18.1609 19.3751C18.1862 19.3751 18.2112 19.3701 18.2345 19.3604C18.2578 19.3508 18.279 19.3366 18.2969 19.3187L19.3187 18.2992C19.3366 18.2814 19.3508 18.2602 19.3604 18.2369C19.3701 18.2135 19.3751 18.1885 19.3751 18.1633C19.3751 18.138 19.3701 18.113 19.3604 18.0897C19.3508 18.0664 19.3366 18.0452 19.3187 18.0273V18.0273ZM11.3688 11.3688C10.375 12.3602 9.05781 12.9062 7.65625 12.9062C6.25469 12.9062 4.9375 12.3602 3.94375 11.3688C2.95234 10.375 2.40625 9.05781 2.40625 7.65625C2.40625 6.25469 2.95234 4.93516 3.94375 3.94375C4.9375 2.95234 6.25469 2.40625 7.65625 2.40625C9.05781 2.40625 10.3773 2.95 11.3688 3.94375C12.3602 4.9375 12.9062 6.25469 12.9062 7.65625C12.9062 9.05781 12.3602 10.3773 11.3688 11.3688Z"
            fill="#555770"
          />
        </svg>
      </span>
      <input type="text" placeholder="Search Components" autocomplete="off" />
    </div>
    <div class="section">
      <h5>
        <router-link :to="{ name: 'why-vuecore' }">Why Vuecore</router-link>
      </h5>
    </div>
    <div class="section">
      <h5>
        <router-link :to="{ name: 'getting-started' }">
          Getting started
        </router-link>
      </h5>
    </div>
    <div class="section">
      <h5>Theme</h5>
      <ul class="sub-section">
        <li class="sub-section-item">
          <router-link :to="{ name: 'colors' }">Colors</router-link>
        </li>
        <li class="sub-section-item">
          <router-link :to="{ name: 'typograph' }">Typograph</router-link>
        </li>
        <li class="sub-section-item">
          <router-link :to="{ name: 'elevation' }">Elevation</router-link>
        </li>
        <li class="sub-section-item">
          <router-link :to="{ name: 'icons' }">Icons</router-link>
        </li>
      </ul>
    </div>
    <div class="section">
      <h5>Layout</h5>
      <ul class="sub-section">
        <li class="sub-section-item">
          <router-link :to="{ name: 'grid' }">Grid</router-link>
        </li>
      </ul>
    </div>
    <div class="section">
      <h5>Components</h5>
      <ul class="sub-section">
        <li
          class="sub-section-item"
          v-for="component in components"
          :key="component"
          @click="() => (currentTab = component)"
        >
          <router-link
            :to="{ name: component }"
            :class="{ active: currentTab == component }"
            >{{ component }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      components: [
        "accordion",
        "alert",
        "avatar",
        "button",
        "calendar",
        "card",
        "carousel",
        "checkbox",
        "chip",
        "dropdown",
        "form",
        "graph",
        "input",
        "modal",
        "navigation",
        "notification",
        "pagination",
        "popup",
        "progress",
        "propover",
        "radio",
        "slider",
        "table",
        "textarea",
        "toggle",
        "tooltip",
        "upload"
      ],
      currentTab: ""
    };
  }
};
</script>
