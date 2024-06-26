<script lang="ts" setup>
import LoginForm from "@/components/login/LoginForm.vue";
import SignupForm from "@/components/signup/SignupForm.vue";
import { useUserStore } from "@/stores/user";
import { useGlobalInfoFetch } from "@console/composables/use-global-info";
import router from "@console/router";
import { Toast } from "@halo-dev/components";
import { useRouteQuery } from "@vueuse/router";
import { computed, onBeforeMount, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const userStore = useUserStore();
const route = useRoute();
const { t } = useI18n();

onBeforeMount(() => {
  if (!userStore.isAnonymous) {
    router.push({ name: "Dashboard" });
  }
});

const { globalInfo } = useGlobalInfoFetch();

onMounted(() => {
  Toast.warning(t("core.binding.common.toast.mounted"));
});

function handleBinding() {
  const authProvider = globalInfo.value?.socialAuthProviders.find(
    (p) => p.name === route.params.provider
  );

  if (!authProvider?.bindingUrl) {
    Toast.error(t("core.binding.operations.bind.toast_failed"));
    return;
  }

  window.location.href = authProvider?.bindingUrl;

  Toast.success(t("core.binding.operations.bind.toast_success"));
}

const type = useRouteQuery<string>("type", "");

function handleChangeType() {
  type.value = type.value === "signup" ? "" : "signup";
}

const isLoginType = computed(() => type.value !== "signup");
</script>
<template>
  <div class="flex w-72 flex-col">
    <SignupForm
      v-if="type === 'signup'"
      button-text="core.binding.operations.signup_and_bind.button"
      @succeed="handleBinding"
    />
    <LoginForm
      v-else
      button-text="core.binding.operations.login_and_bind.button"
      @succeed="handleBinding"
    />
    <div
      v-if="globalInfo?.allowRegistration"
      class="flex justify-center gap-1 pt-3.5 text-xs"
    >
      <span class="text-slate-500">
        {{
          isLoginType
            ? $t("core.login.operations.signup.label")
            : $t("core.login.operations.return_login.label")
        }}
      </span>
      <span
        class="cursor-pointer text-secondary hover:text-gray-600"
        @click="handleChangeType"
      >
        {{
          isLoginType
            ? $t("core.login.operations.signup.button")
            : $t("core.login.operations.return_login.button")
        }}
      </span>
    </div>
  </div>
</template>
