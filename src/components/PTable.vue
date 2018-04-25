<template>
  <table class="search-salesman-table">
    <thead>
      <tr class="table-column">
        <th v-for="columnName of data.columnsName" :key="columnName">{{ columnName }}</th>
      </tr>
    </thead>

    <tbody>
      <tr class="table-value" v-for="(rowName, indexTr) of data.rowsName" :key="indexTr" @click="self.callbackClickPTable(rowName)">
        <td v-for="(name, indexTd) of Object.keys(rowName)" :key="indexTd">{{ rowName[name] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['self', 'data'],
  data: () => ({

  }),
}
</script>

<style lang="scss" scoped>
@import './../styles/ptable.scss';
</style>
