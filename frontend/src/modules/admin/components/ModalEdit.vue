<template>
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <!-- CONTENIDO -->
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Editar {{ title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <br>
        </div>

        <div class="modal-body">
          <!-- FORMULARIO -->
          <form v-on:submit="onSubmit" class="form-horizontal">

            <div v-for="item in propiedades" :key="item.name" class="form-group">
              <label class="col-lg-4 control-label">{{ item.label }}</label>

              <div class="col-lg-6">

                <input v-if="item.etiqueta === 'input'" :type="item.type" :name="item.name"
                  :value="actualValues[item.name]" class="form-control" required />

                <textarea v-else-if="item.etiqueta === 'textarea'" :name="item.name" :id="item.name" rows="8"
                  class="form-control" :value="actualValues[item.name]" required></textarea>

                <select v-else :name="item.name" class="form-control" required>
                  <option :key="prop.id" v-for="prop in aditionalProp"
                    :selected="actualValues[item.name] === prop.nombre ? true : false">
                    {{ prop.nombre }}
                  </option>
                </select>

              </div>
            </div>

            <div class="form-group">
              <div class="col-lg-offset-4 col-lg-8">
                <button class="btn btn-sm btn-warning" type="submit">
                  <i class="fa fa-edit"></i> Editar {{ title }}
                </button>
              </div>
            </div>
          </form>
          <!-- FORMULARIO -->
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "ModalEdit",
  props: {
    title: {
      type: String,
      required: true,
    },
    actualValues: {
      type: Object,
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
  components: {
    CustomBanner: defineAsyncComponent(() => import(/* webpackChunkName: "CustomBanner" */ "../components/CustomBanner")),
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      let isEqual = true;
      const beforeValues = this.actualValues;
      const actualValues = { id: beforeValues.id };

      if (beforeValues['accountid']) {
        actualValues['accountid'] = beforeValues['accountid'];
      }

      for (let i = 0; i < this.propiedades.length; i++) {
        if (e.target[i].name === 'valorfijo' || e.target[i].name === 'valormovil') {
          actualValues[e.target[i].name] = Number(e.target[i].value);
        } else {
          actualValues[e.target[i].name] = e.target[i].value;
        }
      }

      Object.values(this.actualValues).forEach((val, i) => {
        if (Object.values(actualValues)[i] !== val) return isEqual = false;
      });

      if (!isEqual) {
        this.$emit("updated-event", actualValues);
      }
    }
  }
}
</script>