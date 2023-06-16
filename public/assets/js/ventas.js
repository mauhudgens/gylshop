
document.getElementById("id_vista_ventas").onclick = function () {
    vistaVentas()
}

function vistaVentas() {

    $("#vista_general").html('<div class="container-ventas">' +
        '<div class="container-img-description">' +
        '<div class="container-img"><img  style="width:250px; height:250px;" src="../assets/img/logo_gyl.jpg"></img></div>' +
        '<div class="container-description">' +
        '<div id= "form_descripcion" ></div>' +
        '<div class="container-precio-description"><p class="precio-descripcion">$500<p><div><div id="select_empleados"></div></div></div>' +
        '</div>' +
        '</div>' +
        '<div id="tabla_productos"/><div id="button_general"/>' +
        '</div>');


    $('#form_descripcion').dxForm({
        colCount: 1,
        labelLocation: "top",
        labelMode: "outside",
        items: [
            {
                dataField: "id",
                label: { text: "Id" },
                visible: false,
                editorOptions: {

                }
            },
            {
                dataField: "nombre",
                label: { text: "Producto" },
                visible: true,
                editorOptions: {

                }
            },
            {
                dataField: "descripción",
                label: { text: "Descripción" },
                alignment: 'center',
                editorOptions: {

                }
            },
        ],
    }).dxForm("instance");

    $('#select_empleados').dxSelectBox({
        placeholder: 'Selecciona el empleado',
        items: ["EMPLEADO1", "EMPLEADO2", "EMPLEADO3", "EMPLEADO4", "EMPLEADO5"],
        visible: true,
        showClearButton: true,
        onValueChanged(e) {

        }
    }).dxSelectBox("instance");

    $("#tabla_productos").dxDataGrid({
        dataSource: null,
        columnAutoWidth: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        height:200,
        // rowAlternationEnabled: true,
        showBorders: true,
        columns: [
            {
                dataField: "id",
                caption: "Id producto",
                visible: false,
                alignment: 'center',
            },
            {
                dataField: "nombre",
                caption: "Nombre",
                alignment: 'center',
            },
            {
                dataField: "precio",
                caption: "Precio",
                alignment: 'center',
            },
            {
                dataField: "cantidad",
                caption: "Cantidad",
                alignment: 'center',
            },
        ],

        onSelectionChanged: function (selectedItems) {

            var data = selectedItems.selectedRowsData[0];
            if (data) {

            }
        },

        scrolling: {
            mode: "infinite"
        },

        selection: {
            mode: "single"
        }

    }).dxDataGrid("instance")

    $("#button_agregar").dxButton({
        text: "Agregar Registro",
        type: "default",
        visible: true,
        validationGroup: "groupName",
        onClick: function () {
        }
    });


}

// document.getElementById("div_datos_generales").onclick = function () { onClickDatosGenerales(valor_proyecto) };

// function onClickDatosGenerales(valor_proyecto) {
//     if (valor_proyecto != null) {
//         div_check_general.style.display = "none"
//         div_select_fenomenos.style.display = "none"
//         div_map.style.display = "none"
//         div_map_tiempos.style.display = "none"
//         console.log("datos_generales")
//         div_imagen.style.display = "none"
//         div_datos_generales.style.display = "inline"
//         form_datos_generales(valor_proyecto)
//         if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//             select('body').classList.toggle('toggle-sidebar')
//         }
//     } else {
//         Swal.fire({
//             icon: 'error',
//             title: 'Para capturar éste formulario, debes elegir un proyecto.',
//             text: '',
//         })
//     }
// }
