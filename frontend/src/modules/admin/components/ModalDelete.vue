<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Eliminar {{ title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ¿Esta seguro de eliminar al {{ title }} <strong>{{ info.nombre }}</strong> con el ID : <strong>{{ info.id
          }}</strong> ?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" :data-dismiss="dismiss ? 'modal' : ''"
            @click="confirmDelete">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalDelete",
  props: {
    title: {
      type: String,
      required: true,
    },
    info: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      dismiss: false,
    };
  },
  methods: {
    confirmDelete() {
      this.dismiss = true;
      this.$emit('delete-event', this.info.id);
      setTimeout(() => this.dismiss = false, 1000);
    }
  },
}
</script>