<template>
  <div class="panel" style="border-color: #1ab394; border-width: 4px 0px 0">

    <!-- BANNERS DE UNA ACCION  -->
    <CustomBanner :msg="validateMsg" :typeMsg="validateCli" />
    <!-- FIN BANNERS DE UNA ACCION  -->

    <!-- COMIENZO PANEL GENERAL -->
    <div class="panel-heading" style="padding-bottom: 1px">
      <i class="fa fa-users"></i> Clientes
    </div>
    <br />
    <!-- FIN PANEL GENERAL -->

    <!-- COMIENZO DOS PANELES -->
    <div class="panel-body" style="padding-top: 0px">
      <div class="row">

        <CustomForm :title="title" :propiedades="propsClient" :aditionalProp="typesProve"
          @create-event="createClient" />

        <CustomTable :title="title" :headers="headers" :items="allClientes" @on-delete-event="receiveDeleteEvent"
          @on-edit-event="receiveUpdatedEvent" />

      </div>
    </div>
    <!-- FIN DOS PANELES -->

    <!-- COMIENZO DE LOS MODALS -->
    <ModalEdit :title="title" :actualValues="selectedInfoEdi" :propiedades="propsClient" :aditionalProp="typesProve"
      @updated-event="updateClient" />

    <ModalDelete :title="title" :info="selectedInfoDel" v-on:delete-event="deleteClient" />
    <!-- FIN COMIENZO DE LOS MODALS -->
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import backend from "@/api/axios_config";

const propiedades = [
  { label: "Nombre", name: "nombre", etiqueta: "input", type: "text", placeholder: "claro" },
  { label: "Sip Host", name: "siphost", etiqueta: "input", type: "text", placeholder: "128.0.0.1" },
  { label: "Sip Config", name: "sipconfig", etiqueta: "textarea", type: "textarea", placeholder: "algo" },
  { label: "Valor Fijo", name: "valorfijo", etiqueta: "input", type: "number", placeholder: "1000" },
  { label: "Valor Movil", name: "valormovil", etiqueta: "input", type: "number", placeholder: "200" },
  { label: "Proveedor", name: "proveedor", etiqueta: "select", type: "select", placeholder: "" },
];

export default {
  name: "Clientes",
  components: {
    CustomForm: defineAsyncComponent(() => import(/* webpackChunkName: "FormCliente" */ "../components/CustomForm.vue")),
    CustomTable: defineAsyncComponent(() => import(/* webpackChunkName: "CustomTable" */ "../components/CustomTable.vue")),
    CustomBanner: defineAsyncComponent(() => import(/* webpackChunkName: "CustomBanner" */ "../components/CustomBanner.vue")),
    ModalDelete: defineAsyncComponent(() => import(/* webpackChunkName: "ModalDelete" */ "../components/ModalDelete.vue")),
    ModalEdit: defineAsyncComponent(() => import(/* webpackChunkName: "ModalEdit" */ "../components/ModalEdit.vue")),
  },
  async created() {
    this.allClientes = await this.getAllClients();
    this.typesProve = await this.allTypesOfProve();
    this.propsClient = propiedades;
    this.headers = ["ID", "Account ID", "Nombre", "Sip Host", "Sip Config", "Valor Fijo", "Valor Movil", "Proveedor"];
  },
  data() {
    return {
      title: "Cliente",
      allClientes: [],
      typesProve: [],
      propsClient: [],
      headers: [],

      validateMsg: "",
      validateCli: "",

      selectedInfoEdi: {},
      selectedInfoDel: {},
    };
  },
  methods: {
    async getAllClients() {
      const format = [];
      const { data } = await backend.get("/cliente");
      data.forEach(item => format.push({
        id: item.cliente_id,
        accountid: item.accountcode,
        nombre: item.cliente_nombre,
        siphost: item.sip_host,
        sipconfig: item.sip_config,
        valorfijo: item.valor_fijo,
        valormovil: item.valor_movil,
        proveedor: item.proveedor_nombre,
      }));

      return format;
    },
    createClient(data, iscorrect) {
      this.validateCli = iscorrect;
      this.validateMsg = iscorrect ? 'Cliente creado correctamente' : 'No se pudo crear el cliente';

      setTimeout(() => {
        this.validateCli = "";
        this.validateMsg = "";
      }, 5000);

      this.allClientes = [...this.allClientes, data]
    },
    updateClient(data) {
      // TODO: realizar peticion al endpoint UPDATE
      console.log(data);
    },
    deleteClient(id) {
      // TODO: realizar peticion al endpoint DELETE
      console.log(id);
    },
    async allTypesOfProve() {
      let typesProve = [];
      const { data } = await backend.get("/proveedor");
      data.forEach(item => typesProve.push({ id: item.proveedor_id, nombre: item.proveedor_nombre }));
      return typesProve;
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