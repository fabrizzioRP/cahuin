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
    <ModalDelete :title="title" :info="selectedInfoDel" v-on:delete-event="deleteProveedor" />
    <!-- FIN COMIENZO DE LOS MODALS -->
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

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
  created() {
    this.allProveedors = this.getAllProveedors();
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
    getAllProveedors() {
      // TODO: fetch endpoint
      const data = require("../../../data/proveedor.json");
      return data;
    },
    createProveedor(data, status) {
      this.validateProve = status;
      this.validateMsg = status ? 'Proveedor creado correctamente' : 'No se pudo crear el Proveedor';

      setTimeout(() => {
        this.validateProve = "";
        this.validateMsg = "";
      }, 5000);

      this.allProveedors = [...this.allProveedors, data];
    },
    updateProveedor(data) {
      // TODO: llamar al endpoint UPDATE
      console.log(data);

      this.refreshValidate;
    },
    deleteProveedor(id) {
      // TODO: llamar al endpint DELETE
      console.log(id);
    },
    receiveUpdatedEvent(data) {
      this.selectedInfoEdi = data;
    },
    receiveDeleteEvent(data) {
      this.selectedInfoDel = data;
    },
  },
}
</script>