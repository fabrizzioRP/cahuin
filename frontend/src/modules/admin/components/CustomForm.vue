<template>
  <div class="col-md-4">
    <div class="panel panel-default">

      <!-- HEADER DE LA CAJA 1 -->
      <div class="panel-heading">
        <i class="fa fa-users"></i> Crear {{ title }}
      </div>
      <!-- FIN HEADER DE LA CAJA 1 -->
      <!-- BODY DE LA CAJA 1 -->
      <div class="panel-body table-responsive">
        <!-- FORMULARIO -->
        <form v-on:submit="onSubmit" class="form-horizontal">

          <div v-for="item in propiedades" :key="item.name" class="form-group">
            <label class="col-lg-4 control-label">{{ item.label }}</label>

            <div class="col-lg-6">

              <input v-if="item.etiqueta === 'input'" :type="item.type" :name="item.name"
                :placeholder="item.placeholder" class="form-control" required />

              <textarea v-else-if="item.etiqueta === 'textarea'" :name="item.name" :id="item.name" rows="8"
                class="form-control" required></textarea>

              <select v-else :name="item.name" class="form-control" required>
                <option :key="item.id" :value="item.id" v-for="item in aditionalProp">
                  {{ item.nombre }}
                </option>
              </select>

            </div>
          </div>

          <div class="form-group">
            <div class="col-lg-offset-4 col-lg-8">
              <button class="btn btn-sm btn-primary" type="submit">
                <i class="fa fa-plus"></i> Crear {{ title }}
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
  props: {
    title: {
      type: String,
      required: true,
    },
    propiedades: {
      type: Array,
      required: true,
      default: [],
    },
    aditionalProp: {
      type: Array,
      default: [],
    },
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const data = {
        id: Math.floor(Math.random() * 100),
      };

      if (this.title === 'Cliente') {
        data['accountid'] = Math.floor(Math.random() * 10000);
      }

      for (let i = 0; i < this.propiedades.length; i++) {
        if (e.target[i].name === 'valorfijo' || e.target[i].name === 'valormovil') {
          data[e.target[i].name] = Number(e.target[i].value);
        } else {
          data[e.target[i].name] = e.target[i].value;
        }
      }

      const isCorrect = 'success';
      console.table(data);

      // TODO: fetch endpoint
      this.$emit('create-event', data, isCorrect);

      for (let i = 0; i < this.propiedades.length; i++) {
        e.target[i].value = "";
      }
    },
  },
}
</script>