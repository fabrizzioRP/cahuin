<template>
  <div class="col-md-4">
    <div class="panel panel-default">

      <!-- HEADER DE LA CAJA 1 -->
      <div class="panel-heading">
        <i class="fa fa-users"></i> Crear Clientes
      </div>
      <!-- FIN HEADER DE LA CAJA 1 -->
      <!-- BODY DE LA CAJA 1 -->
      <div class="panel-body table-responsive">
        <!-- FORMULARIO -->
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
          <!-- PROVEEDOR ID -->
          <div class="form-group">
            <label class="col-lg-4 control-label">Proveedor</label>

            <div class="col-lg-6">
              <select name="proveedor" v-model="proveedor" class="form-control" required>
                <option :key="item.id" :value="item.id" v-for="item in amountProve">
                  {{ item.nombre }}
                </option>
              </select>
            </div>
          </div>
          <!-- FIN PROVEEDOR ID -->
          <!-- SUBMIT -->
          <div class="form-group">
            <div class="col-lg-offset-4 col-lg-8">
              <button class="btn btn-sm btn-primary" type="submit">
                <i class="fa fa-plus"></i> Crear
              </button>
            </div>
          </div>

        </form>
        <!-- FIN FORMULARIO -->
      </div>
      <!-- FIN BODY DE LA CAJA 1 -->

    </div>
  </div>
</template>

<script>
export default {
  name: "FormCliente",
  props: {
    amountProve: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      nombre: null,
      siphost: null,
      sipconfig: null,
      valorfijo: null,
      valormovil: null,
      proveedor: null,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const newClient = {
        id: Math.floor(Math.random() * 100),
        accountid: Math.floor(Math.random() * 10000),
        nombre: this.nombre,
        siphost: this.siphost,
        sipconfig: this.sipconfig,
        valorfijo: this.valorfijo,
        valormovil: this.valormovil,
        proveedor: this.proveedor,
      }

      const isCorrect = 'success';

      // TODO: fetch endpoint
      this.$emit("new-cliente", newClient, isCorrect);

      this.nombre = null;
      this.siphost = null;
      this.sipconfig = null;
      this.valorfijo = null;
      this.valormovil = null;
      this.proveedor = null;
    }
  }
}
</script>