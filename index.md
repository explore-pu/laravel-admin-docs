<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const language = window.navigator.language || window.navigator.userLanguage;

  window.location.href = language !== 'zh-CN' ? 'en' : 'zh-CN';
});
</script>
