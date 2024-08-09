<template>
  <q-layout>
    <div class="layout-view">
      <div
        class="sidebar col justify-between items-between shadow-2"
        v-show="$q.screen.gt.sm"
        style="height: 100%; max-width: 200px"
      >
        <div style="height: 80%">
          <q-tabs
            vertical
            dense
            active-color="primary"
            indicator-color="primary"
            class="q-mt-lg"
          >
            <q-route-tab
              v-for="(link, index) in links"
              :key="index"
              :to="'link.link'"
              :label="link.title"
              :caption="link.caption"
              :icon="link.icon"
            >
              <q-tab
                class="text-gray-9"
                :label="userName ? 'Logout' : 'Login'"
                :icon="userName ? 'logout' : 'login'"
                caption="Login or logout"
                @Click="handleAction"
              />
            </q-route-tab>
          </q-tabs>
        </div>
        <div
          align="center"
          class="cursor-pointer"
          @click="() => $q.dark.toggle()"
        >
          <q-avatar class="q-ma-md" :test="userName">
            <q-icon v-if="!user.avatar_url" name="person" />
            <q-img v-else :src="url(user.avatar_url)" />
          </q-avatar>
        </div>
      </div>
      <!-- mobile -->

      <q-footer v-show="$q.screen.lt.md" class="fixed-bottom" elevated>
        <q-tabs
          dense
          active-color="primary"
          indicator-color="primary"
          class="q-mt-lg"
        >
          <q-route-tab
            v-for="(link, index) in links"
            :key="index"
            :to="'link.link'"
            :label="link.title"
            :caption="link.caption"
            :icon="link.icon"
          >
            <q-tab class="cursor-pointer">
              <q-avatar class="q-ma-md" :test="userName">
                <q-icon v-if="!user.avatar_url" name="person" />
                <q-img v-else :src="url(user.avatar_url)" />
              </q-avatar>
            </q-tab>
            <q-tab
              class="text-gray-9"
              :label="userName ? 'Logout' : 'Login'"
              :icon="userName ? 'logout' : 'login'"
              caption="Login or logout"
              @Click="handleAction"
            />
          </q-route-tab>
        </q-tabs>
      </q-footer>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from 'src/stores/user-store';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { url } from 'src/helpers';

const router = useRouter();
const { user } = storeToRefs(useUserStore());
const userName = computed(() => user.value?.name);

async function handleAction() {
  if (userName.value !== undefined) {
    await useUserStore().logout();
    router.push('/guest/login');
  } else {
    router.push('/guest/login');
  }
}

const links = [
  {
    title: 'Groups',
    caption: 'Create a group',
    icon: 'group',
    to: '/groups',
  },
];
</script>

<style scoped></style>
