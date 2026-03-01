<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const airports = {
  beira: { code: 'BEW', name: 'Aeroporto Internacional da Beira', city: 'Beira' },
  nampula: { code: 'APL', name: 'Aeroporto Internacional de Nampula', city: 'Nampula' },
  vilankulo: { code: 'VNX', name: 'Aeroporto Internacional de Vilankulo', city: 'Vilankulo' },
  pemba: { code: 'POL', name: 'Aeroporto de Pemba', city: 'Pemba' },
  tete: { code: 'TET', name: 'Aeroporto de Tete', city: 'Tete' },
  quelimane: { code: 'UEL', name: 'Aeroporto de Quelimane', city: 'Quelimane' },
  chimoio: { code: 'VPY', name: 'Aeroporto de Chimoio', city: 'Chimoio' },
}

const airport = computed(() => airports[route.params.slug] || null)
</script>

<template>
  <main class="airport-page">
    <div class="container">
      <div v-if="airport" class="airport-card">
        <p class="badge">Aeroporto</p>
        <h1>{{ airport.name }}</h1>
        <p><strong>C&oacute;digo IATA:</strong> {{ airport.code }}</p>
        <p><strong>Cidade:</strong> {{ airport.city }}</p>
        <router-link class="btn--base" to="/">Voltar ao In&iacute;cio</router-link>
      </div>
      <div v-else class="airport-card">
        <h1>P&aacute;gina n&atilde;o encontrada</h1>
        <p>Este aeroporto ainda n&atilde;o foi configurado.</p>
        <router-link class="btn--base" to="/">Voltar ao In&iacute;cio</router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
.airport-page {
  min-height: 70vh;
  padding: 140px 0 80px;
  background: #f8fafc;
}

.airport-card {
  max-width: 720px;
  margin: 0 auto;
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 10px 30px rgba(3, 1, 64, 0.08);
}

.badge {
  display: inline-block;
  font-size: 12px;
  color: #030140;
  background: rgba(242, 228, 22, 0.2);
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 12px;
}
</style>
