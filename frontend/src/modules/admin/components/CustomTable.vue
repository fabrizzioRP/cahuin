<template>
  <div class="col-md-8">
    <div class="panel panel-default">
      <div class="panel-heading">
        <i class="fa fa-list"></i> Lista {{ title }}
      </div>
      <div class="panel-body">

        <table class="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th v-for="head in headers" :key="head">
                {{ head }}
              </th>
            </tr>
          </thead>
          <tbody style="text-align:center">
            <tr :key="item.id" v-for="item in items">
              <td>{{ item.id }}</td>
              <td v-if="item.accountid">{{ item.accountid }}</td>
              <td>{{ item.nombre }}</td>
              <td>{{ item.siphost }}</td>
              <td>{{ item.sipconfig }}</td>
              <td>{{ item.valorfijo }}</td>
              <td>{{ item.valormovil }}</td>
              <td v-if="item.proveedor">{{ item.proveedor }}</td>

              <td align="center">
                <button type="button" @click="onEdit(e, item)" class="btn btn-warning btn-xs" data-toggle="modal"
                  data-target="#staticBackdrop">
                  <i class="fa fa-edit"></i>
                </button>
              </td>

              <td align="center">
                <button type="button" @click="onDelete(e, { id: item.id, nombre: item.nombre })"
                  class="btn btn-danger btn-xs" data-toggle="modal" data-target="#exampleModal">
                  <i class="fa fa-remove"></i>
                </button>
              </td>

            </tr>
          </tbody>
        </table>

      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "CustomTable",
  props: {
    title: {
      type: String,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
      default: [],
    },
  },
  methods: {
    onEdit(_, data) {
      this.$emit('on-edit-event', data);
    },
    onDelete(_, data) {
      this.$emit('on-delete-event', data);
    },
  },
  emits: ['on-edit-event', 'on-delete-event'],
}
</script>

<style scoped>
thead,
th {
  text-align: center;
}
</style>