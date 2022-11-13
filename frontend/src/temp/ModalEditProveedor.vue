<template>
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <!-- CONTENIDO -->
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Editar Proveedor</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <br>
        </div>

        <div class="modal-body">

          <form v-on:submit="onSubmit" class="form-horizontal">
            <!-- NOMBRE -->
            <div class="form-group">
              <label class="col-lg-4 control-label">Nombre</label>

              <div class="col-lg-6">
                <input type="text" v-model="nombre" placeholder="claro" class="form-control" required />
              </div>
            </div>
            <!-- FIN NOMBRE -->
            <!-- SIP HOST -->
            <div class="form-group">
              <label class="col-lg-4 control-label">Sip Host</label>

              <div class="col-lg-6">
                <input type="text" v-model="siphost" placeholder="128.0.0.1" class="form-control" required />
              </div>
            </div>
            <!-- FIN SIP HOST -->
            <!-- SIP CONFIG -->
            <div class="form-group">
              <label class="col-lg-4 control-label">Sip Config</label>

              <div class="col-lg-6">
                <textarea name="sipconfig" v-model="sipconfig" id="sipconfig" rows="8" class="form-control"
                  required></textarea>
              </div>
            </div>
            <!-- FIN SIP CONFIG -->
            <!-- VALOR FIJO -->
            <div class="form-group">
              <label class="col-lg-4 control-label">Valor Fijo</label>

              <div class="col-lg-6">
                <input type="number" v-model="valorfijo" placeholder="1000" class="form-control" min="0" required />
              </div>
            </div>
            <!-- FIN VALOR FIJO -->
            <!-- VALOR MOVIL -->
            <div class="form-group">
              <label class="col-lg-4 control-label">Valor Movil</label>

              <div class="col-lg-6">
                <input type="number" v-model="valormovil" placeholder="200" class="form-control" min="0" required />
              </div>
            </div>
            <!-- FIN VALOR MOVIL -->
            <!-- SUBMIT -->
            <div class="form-group">
              <div class="col-lg-offset-4 col-lg-8">
                <button class="btn btn-sm btn-warning" type="submit">
                  <i class="fa fa-edit"></i> Editar
                </button>
              </div>
            </div>

          </form>

        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        <!-- CONTENIDO -->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalEditProveedor",
  props: {
    proveedor: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      nombre: null,
      siphost: null,
      sipconfig: null,
      valorfijo: null,
      valormovil: null,
    };
  },
  watch: {
    proveedor(newValue, _) {
      this.nombre = newValue.nombre;
      this.siphost = newValue.siphost;
      this.sipconfig = newValue.sipconfig;
      this.valorfijo = newValue.valorfijo;
      this.valormovil = newValue.valormovil;
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const updateProveedor = {
        id: this.proveedor.id,
        nombre: this.nombre,
        siphost: this.siphost,
        sipconfig: this.sipconfig,
        valorfijo: this.valorfijo,
        valormovil: this.valormovil,
      };

      this.$emit("updated-event", updateProveedor)

      console.log("Actualizando!!!!");
    }
  }
}
</script>