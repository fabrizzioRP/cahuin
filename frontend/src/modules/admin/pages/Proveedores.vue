<template>
  <div class="panel" style="border-color: #1ab394; border-width: 4px 0px 0">

    <!-- BANNERS DE UNA ACCION  -->
    <CustomBanner :msg="validateMsg" :typeMsg="validateProve" />
    <!-- FIN BANNERS DE UNA ACCION  -->

    <!-- COMIENZO PANEL GENERAL -->
    <div class="panel-heading" style="padding-bottom: 1px">
      <i class="fa fa-users"></i> Proveedores
    </div>
    <br />
    <!-- FIN PANEL GENERAL -->

    <!-- COMIENZO DOS PANELES -->
    <div class="panel-body" style="padding-top: 0px">
      <div class="row">

        <CustomForm :title="title" :propiedades="propsProve" @create-event="createProveedor" />

        <CustomTable :title="title" :headers="headers" :items="allProveedors" @on-delete-event="receiveDeleteEvent"
          @on-edit-event="receiveUpdatedEvent" />

      </div>
    </div>
    <!-- FIN DOS PANELES -->

    <!-- COMIENZO DE LOS MODALS -->
    <ModalEdit :title="title" :actualValues="selectedInfoEdi" :propiedades="propsProve"
      @updated-event="updateProveedor" />
    <ModalDelete :title="title" :info="selectedInfoDel" @delete-event="deleteProveedor" />
    <!-- FIN COMIENZO DE LOS MODALS -->
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import backend from '@/api/axios_config';

const propiedades = [
  { label: "Nombre", name: "nombre", etiqueta: "input", type: "text", placeholder: "claro" },
  { label: "Sip Host", name: "siphost", etiqueta: "input", type: "text", placeholder: "128.0.0.1" },
  { label: "Sip Config", name: "sipconfig", etiqueta: "textarea", type: "textarea", placeholder: "algo" },
  { label: "Valor Fijo", name: "valorfijo", etiqueta: "input", type: "number", placeholder: "1000" },
  { label: "Valor Movil", name: "valormovil", etiqueta: "input", type: "number", placeholder: "200" },
];

export default {
  name: "Proveedores",
  components: {
    CustomForm: defineAsyncComponent(() => import(/* webpackChunkName: "CustomForm" */ "../components/CustomForm.vue")),
    CustomTable: defineAsyncComponent(() => import(/* webpackChunkName: "CustomTable" */ "../components/CustomTable.vue")),
    CustomBanner: defineAsyncComponent(() => import(/* webpackChunkName: "CustomBanner" */ "../components/CustomBanner.vue")),
    ModalDelete: defineAsyncComponent(() => import(/* webpackChunkName: "ModalDelete" */ "../components/ModalDelete.vue")),
    ModalEdit: defineAsyncComponent(() => import(/* webpackChunkName: "ModalEdit" */ "../components/ModalEdit.vue")),
  },
  async created() {
    this.allProveedors = await this.getAllProveedors();
    this.propsProve = propiedades;
    this.headers = ["ID", "Nombre", "Sip Host", "Sip Config", "Valor Fijo", "Valor Movil"];
  },
  data() {
    return {
      title: "Proveedor",
      allProveedors: [],
      propsProve: [],
      headers: [],

      validateMsg: "",
      validateProve: "",

      selectedInfoEdi: {},
      selectedInfoDel: {},
    };
  },
  methods: {
    async getAllProveedors() {
      try {
        const format = [];
        const { data } = await backend.get("/proveedor");
        data.forEach(item => format.push({
          id: item.proveedor_id,
          nombre: item.proveedor_nombre,
          siphost: item.sip_host,
          sipconfig: item.sip_config,
          valorfijo: item.valor_fijo,
          valormovil: item.valor_movil,
        }));
        return format;
      } catch (error) {
        console.log(error.response);
      }
    },
    async createProveedor(data, status) {
      try {
        this.launchBanner(status, "creado");

        const response = await backend.post("/proveedor", data, {
          headers: "Content-Type: application/json",
        });

        const format = {
          id: response.data.proveedor_id,
          nombre: response.data.proveedor_nombre,
          siphost: response.data.sip_host,
          sipconfig: response.data.sip_config,
          valorfijo: response.data.valor_fijo,
          valormovil: response.data.valor_movil,
        };

        this.allProveedors = [...this.allProveedors, format];
      } catch (error) {
        this.launchBanner("error", "crear");
        console.log(error.response);
      }
    },
    updateProveedor(data) {
      // TODO: llamar al endpoint UPDATE
      console.log(data);

      this.refreshValidate;
    },
    async deleteProveedor(id) {
      try {
        const { data } = await backend.delete(`/proveedor/${id}`);
        this.allProveedors = this.allProveedors.filter(item => item.id != data.proveedor_id);
        this.launchBanner("success", "Actualizado");
      } catch (error) {
        this.launchBanner("error", "Actualizar");
        console.log(error.response);
      }
    },
    receiveUpdatedEvent(data) {
      this.selectedInfoEdi = data;
    },
    receiveDeleteEvent(data) {
      this.selectedInfoDel = data;
    },
    launchBanner(status, accion) {
      this.validateProve = status;
      this.validateMsg = status ? `Proveedor ${accion} correctamente` : `No se pudo ${accion} el Proveedor`;

      setTimeout(() => {
        this.validateProve = "";
        this.validateMsg = "";
      }, 3000);
    }
  },
}
</script>