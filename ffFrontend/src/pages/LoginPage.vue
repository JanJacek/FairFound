<template>
  <q-page padding class="register-page">
    <div class="row justify-center items-center" style="height: 100vh">
      <q-card class="my-card" style="min-width: 400px">
        <q-card-section class="text-center">
          <div class="text-h4">Log in</div>
          <div class="text-subtitle2">Welcome!</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-form @submit="submitForm" ref="formRef">
            <q-input
              outlined
              v-model="form.email"
              label="Email"
              lazy-rules
              :rules="[
                (val:string) => !!val || 'Please enter email',
                (val:string) => /.+@.+/.test(val) || 'Invalid email',
              ]"
            />
            <q-input
              outlined
              v-model="form.password"
              label="Password"
              type="password"
              class="q-my-md"
              lazy-rules
              :rules="[(val:string) => !!val || 'Field is required']"
            />

            <q-card-actions align="left" :vertical="true">
              <router-link to="/guest/register">Register</router-link>
              <q-btn type="submit" color="primary" label="Log in" />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { QForm, useQuasar } from 'quasar';
import { useUserStore } from 'src/stores/user-store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref({
  email: '',
  password: '',
});
const $q = useQuasar();

const formRef = ref<QForm | null>(null);

const submitForm = async () => {
  formRef.value?.validate().then(async () => {
    try {
      await useUserStore().login(form.value);
      console.log('user has been logged in');
      $q.notify({
        message: 'Logged in successfully',
        color: 'positive',
      });
      router.push('/');
    } catch (err) {
      console.log('error', err);
      $q.notify({
        message: 'Wrong Password',
        color: 'negative',
      });
    }
  });
};
</script>

<style scoped></style>

<style scoped></style>
