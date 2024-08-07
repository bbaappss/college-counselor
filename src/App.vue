<template>
  <v-layout class="app-container" :class="{ 'logged-in': isLoggedIn }">
    <v-app-bar class="elevation-1">
      <div class="header-container d-flex align-center justify-space-between ma-auto w-100 px-3 px-lg-0">
        <a href="/" class="logo">
          <LogoGreenBlack />
        </a>
        <v-text-field
          class="ml-8 mr-md-8"
          v-model="searchFilterSortStore.activeSearchTerms"
          label="Search By Name"
          append-inner-icon="mdi-magnify"
          density="compact"
          variant="solo"
          single-line
          hide-details
          @keydown="updateSearchBarInput"
          @keydown.enter="performSearch"
          @click:clear="updateSearchBarInput"
        ></v-text-field>
        <div class="d-none d-md-block">
          <v-btn
            cols="2"
            block
            class="max-w-24"
            color="primary" 
            variant="outlined"
            href="https://forms.gle/TkssoDbsbAaiuSnA6" 
            target="_blank"
          >
            Submit feedback
          </v-btn>
        </div>
        <!-- <div v-if="!isLoggedIn">
          <v-btn 
            :to="{name: 'login', query: { tabDestination: 'Sign Up' }}"
            class="no-active"
          >
            Sign up
          </v-btn>
          <v-btn 
            class="no-active"
            :to="{name: 'login', query: { tabDestination: 'Login' }}"
          >
            Login
          </v-btn>
        </div> -->
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-if="isLoggedIn"
      permanent
    >
      <v-list nav>
        <v-list-item 
          to="/" 
          prepend-icon="mdi-magnify" 
          title="Institutions" 
          value="Institution Search">
        </v-list-item>
        <v-list-item 
          to="/lists" 
          prepend-icon="mdi-list-box-outline" 
          title="Lists" 
          value="Saved Lists">
        </v-list-item>
        <v-list-item 
          to="/playground"
          prepend-icon="mdi-slide" 
          title="Playground" 
          value="Playground">
        </v-list-item>
        <v-list-item 
          to="/data-compare" 
          prepend-icon="mdi-compare-horizontal" 
          title="Data Compare" 
          value="Data Compare">
        </v-list-item>
        <v-list-item 
          to="/data-integration" 
          prepend-icon="mdi-call-merge" 
          title="Data Integration" 
          value="Data Integration">
        </v-list-item>
        <v-list-item 
          to="/image-work" 
          prepend-icon="mdi-image-edit" 
          title="Image Work" 
          value="Image Work">
        </v-list-item>
        <v-list-item
          to="/students" 
          prepend-icon="mdi-account-school" 
          title="Students" 
          value="Students">
        </v-list-item>
        <v-list-item 
          to="/account" 
          prepend-icon="mdi-cog" 
          title="Account" 
          value="Account">
        </v-list-item>
        <v-list-item 
          prepend-icon="mdi-logout" 
          title="Logout" 
          value="Logout" 
          @click="handleSignOut"
        >
        </v-list-item>
        <v-switch 
          class="px-4"
          label="Admin Mode"
          v-model="userStore.adminMode"
          color="primary"
          @change="userStore.saveAdminModeState"
        >
        </v-switch>
        <!-- <v-list-item
          v-if="userStore.adminMode"
          prepend-icon="mdi-table"
          title="Refresh Headers"
          value="Refresh Headers"
          @click="tableStore.refreshTableHeaders"
        >
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>    
    <v-main class="flex-column">
      <router-view :key="$route.fullPath"></router-view>
      <v-container class="pt-0">
        <v-footer class="pb-4 ml-0 mr-0 pl-0 pr-0">
          <v-row>
            <v-col cols="6">
              <p style="font-size: 13px">
              Version: {{ appVersionStore.getVersion() }}<br/>
              Copyright 2024 Ryteplan LLC All rights reserved
              </p>
            </v-col>
            <v-col cols="6" class="text-right">
              <p style="font-size: 13px">
                Data Source: Peterson's Databases<br/>
                Copyright 2024 Peterson's LLC All rights reserved
              </p>
            </v-col>
          </v-row>
        </v-footer>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import LogoGreenBlack from "@/components/svg/LogoGreenBlack.vue";
import { useAppVersionStore } from './/stores/appVersionStore';
import { useUserStore } from './/stores/userStore';
import { useTableStore } from './/stores/tableStore';
import { useSearchFilterSortStore } from './/stores/searchFilterSortStore';

let auth;

export default {
  setup() {
    let appVersionStore = useAppVersionStore();
    appVersionStore.compareVersion();

    let userStore = useUserStore();
    userStore.getAdminMode();

    let tableStore = useTableStore();

    let searchFilterSortStore = useSearchFilterSortStore();

    return {
      userStore,
      tableStore,
      searchFilterSortStore,
      appVersionStore
    };
  },
  components: {
    LogoGreenBlack
  },
  mounted() {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })

    // Check if the URL contains a "search" parameter
    if (this.$route.query.search) {
      this.searchFilterSortStore.activeSearchTerms = this.$route.query.search;
    }
  },
  data() {
    return {
      isLoggedIn: false,
    }
  },
  methods: {
    handleSignOut() {
      signOut(auth).then(() =>{
        this.userStore.isLoggedIn = false;
        localStorage.removeItem("adminMode");
        this.$router.push("/");
      })
    },
    updateSearchBarInput() {
      if (this.searchFilterSortStore.activeSearchTerms === '') {
        this.searchFilterSortStore.searchParameters.q = '*';
        this.searchFilterSortStore.searchParameters.activeSearchTerms = '*';
      } else {
        this.searchFilterSortStore.searchParameters.q = this.searchFilterSortStore.activeSearchTerms;
      }
    },
    performSearch(source) {
      const searchQuery = this.searchFilterSortStore.activeSearchTerms
        ? decodeURIComponent(encodeURIComponent(this.searchFilterSortStore.activeSearchTerms.trim().toLowerCase()))
        : '';

      this.tableStore.freshSearch = true;
        
      if (this.$route.path === '/') {
        this.searchFilterSortStore.activeSearchTerms = searchQuery;
        this.tableStore.performSearch();
        console.log("right before router push");
        this.$router.push({ query: { ...this.$route.query, search: searchQuery } });
      } else {
        if (source === 'fromClear') return;
        
        let route = this.$router.resolve({ 
          name: 'home',
          query: { "search": searchQuery },
        });

        window.open(route.href, '_self');
      }
    },
  }
};

</script>

<style>
  a.logo {
    color: #000;
    text-decoration: none;
    line-height: 1;
    height: 23px;
    margin-top: 4px;
  }

  .v-toolbar__content {
    margin: 0 auto;
  }

  .no-active .v-btn__overlay {
    display: none;
  }

  a {
    color: blue;
  }

  .v-footer {
    background: transparent !important;
  }

  @media screen and (min-width: 960px){
    .header-container {
      max-width: 900px;
    }    
  }

  @media screen and (min-width: 1280px){
    .header-container {
      max-width: 1200px;
    }
  }


</style>