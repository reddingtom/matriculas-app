<template>
  <div class="form-wrapper">
    <h2>Formulário de Matrícula</h2>
    
    <form @submit.prevent="submitForm" class="form-container">
      
      <!-- Nome -->
      <div class="form-group">
        <label for="nome">Nome completo</label>
        <input
          type="text"
          id="nome"
          v-model="nome"
          @input="validateNome"
          placeholder="Digite seu nome"
        />
        <span v-if="errors.nome" class="error">{{ errors.nome }}</span>
      </div>

      <!-- Email -->
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          v-model="email"
          @input="validateEmail"
          placeholder="seuemail@exemplo.com"
        />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <!-- Curso -->
      <div class="form-group">
        <label for="curso">Curso</label>
        <select id="curso" v-model="curso" @change="validateCurso">
          <option disabled value="">Selecione um curso</option>
          <option v-for="c in cursos" :key="c.id" :value="c.nome">{{ c.nome }}</option>
        </select>
        <span v-if="errors.curso" class="error">{{ errors.curso }}</span>
      </div>

      <!-- Botão -->
      <button type="submit" :disabled="loading">
        {{ loading ? 'Enviando...' : 'Matricular' }}
      </button>
      
    </form>

    <!-- Mensagens de sucesso/erro -->
    <div v-if="successMessage" class="success">{{ successMessage }}</div>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const nome = ref('');
const email = ref('');
const curso = ref('');
const cursos = ref<{ id: number; nome: string }[]>([]);
const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');
const errors = ref({ nome: '', email: '', curso: '' });

// Validações simples
function validateNome() {
  errors.value.nome = nome.value.length < 3 ? 'Nome deve ter ao menos 3 caracteres' : '';
}

function validateEmail() {
  const re = /\S+@\S+\.\S+/;
  errors.value.email = !re.test(email.value) ? 'E-mail inválido' : '';
}

function validateCurso() {
  errors.value.curso = !curso.value ? 'Selecione um curso' : '';
}

// Buscar cursos ao montar o componente
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/cursos');
    cursos.value = response.data;
  } catch (err) {
    console.error('Erro ao buscar cursos:', err);
  }
});

// Submeter formulário
async function submitForm() {
  validateNome();
  validateEmail();
  validateCurso();

  if (errors.value.nome || errors.value.email || errors.value.curso) return;

  loading.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  try {
    const response = await axios.post('http://localhost:3000/matricula', {
      nome: nome.value,
      email: email.value,
      curso: curso.value
    });
    successMessage.value = 'Matrícula realizada com sucesso!';
    nome.value = '';
    email.value = '';
    curso.value = '';
  } catch (err: any) {
    errorMessage.value = err.response?.data?.message || 'Erro ao enviar formulário';
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.form-wrapper {
  max-width: 450px;
  margin: 40px auto;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-container {
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  margin-bottom: 6px;
  font-weight: bold;
  color: #555;
}

input, select {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
  transition: border-color 0.2s;
}

input:focus, select:focus {
  border-color: #007bff;
  outline: none;
}

button {
  padding: 12px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover:not([disabled]) {
  background-color: #0056b3;
}

button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.error {
  color: #d9534f;
  font-size: 13px;
  margin-top: 4px;
}

.success {
  color: #28a745;
  font-size: 15px;
  margin-top: 20px;
  text-align: center;
}
</style>
