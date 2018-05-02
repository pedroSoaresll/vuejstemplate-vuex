<template>
  <div class="historic-main">
    <p-card>
      <div slot="header">
        <span>Histórico</span>
      </div>

      <div slot="content">
        <div class="text-color-grey">
          <p class="font-weight-bold">
            Chamado nº: 
            <span class="font-weight-normal">12312312</span>
          </p>

          <p class="font-weight-bold">
            Responsável pelo Atendimento:
            <span class="font-weight-normal">Lorena Marques</span>
          </p>

          <p>Alteração de dados cadastrais:</p>
          <p>Softdescriptor:</p>
          <p>de: Alpa Pet</p>
          <p>para: Alpha Pet</p>

          <div class="divider"></div>

          <p class="font-weight-bold">
            Chamado nº: 
            <span class="font-weight-normal">12312312</span>
          </p>

          <p class="font-weight-bold">
            Responsável pelo Atendimento:
            <span class="font-weight-normal">Lorena Marques</span>
          </p>

          <p>Alteração de dados cadastrais:</p>
          <p>Softdescriptor:</p>
          <p>de: Alpa Pet</p>
          <p>para: Alpha Pet</p>
        </div>
      </div>
    </p-card>

    <div class="row mt-4">
      <div class="col-md-2">
        <button-back></button-back>
      </div>
    </div>
  </div>
</template>

<script>
import PCard from '@/components/shared/PCard'
import ButtonBack from '@/components/shared/ButtonBack'

export default {
  components: {
    PCard,
    ButtonBack
  }
}
</script>

