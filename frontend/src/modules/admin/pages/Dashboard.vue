<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="ibox float-e-margins">

        <div class="ibox-title" style="border-color: #1ab394">
          <h5><i class="fa fa-th"></i> Dashboard </h5>
        </div>

        <div class="ibox-content">
          <div class="row">

            <div class="col-lg-2">
              <div class="panel panel-primary">
                <div class="panel-heading"> Clientes </div>
                <div class="panel-body">
                  <table class="table">
                    <tr>
                      <td>Activos</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td>Inactivos</td>
                      <td>10</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="panel panel-primary">
                <div class="panel-heading"> Proveedores </div>
                <div class="panel-body">
                  <table class="table">
                    <tr>
                      <td>Activos</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td>Inactivos</td>
                      <td>10</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
}
</script>