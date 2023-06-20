
document.getElementById("id_vista_reportes").onclick = function () {
    vistaReportes()
}

function vistaReportes() {
    var venta = [{id: 1,
        descripcion:"Jeans color azúl talla S",        
        nombre: "Jeans",
        precio: 500,
        cantidad: 1,
        fecha_inicio: "20/06/23",
        fecha_fin: "21/06/23",
        total:"$500.00",
        empleado: "EMPLEADO1"}]
    $("#vista_general").html('<div class="">' +
        // '<div class="container-img-description">' +
        // '<div class="container-img"><img  style="width:250px; height:250px; margin-top:1.3em;" src="../assets/img/logo_gyl.jpg"></img></div>' +
        '<div class="container-filtro-fecha">' +
        '<div id= "form_descripcion" ></div>' +
        '<div class="btn-reportes" id= "button_reportes" ></div>' +
        // '<div class="container-precio-description"><p class="precio-descripcion">$500.00<p><div><div id="select_empleados"></div></div></div>' +
        '</div>' +
        // '</div>' +
        '<div id="tabla_productos"/><div id="button_general"/>' +
        '</div>');


    $('#form_descripcion').dxForm({
        colCount: 2,
        labelLocation: "top",
        labelMode: "outside",
        items: [
            {
                dataField: "fecha_inicio",
                label: { text: "Inicio" },
                visible: true,
                editorType:"dxDateBox",
                editorOptions: {

                }
            },
            {
                dataField: "fecha_fin",
                label: { text: "Fin" },
                visible: true,
                editorType:"dxDateBox",
                editorOptions: {

                }
            },
        ],
    }).dxForm("instance");

    $("#button_reportes").dxButton({
        
        text: "Filtrar",
        icon: 'fa-solid fa-magnifying-glass',
        validationGroup: "groupName",
        onClick: function () {
        }
    });

    // $('#select_empleados').dxSelectBox({
    //     placeholder: 'Selecciona el empleado',
    //     items: ["EMPLEADO1", "EMPLEADO2", "EMPLEADO3", "EMPLEADO4", "EMPLEADO5"],
    //     visible: true,
    //     showClearButton: true,
    //     onValueChanged(e) {

    //     }
    // }).dxSelectBox("instance");

    $("#tabla_productos").dxDataGrid({
        dataSource: venta,
        columnAutoWidth: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        height: "600px",
        // rowAlternationEnabled: true,
        showBorders: true,
        columns: [
            {
                dataField: "id",
                caption: "Id venta",
                visible: false,
                alignment: 'center',
            },
            {
                dataField: "fecha_inicio",
                caption: "Fecha Inicio",
                alignment: 'center',
            },
            {
                dataField: "fecha_fin",
                caption: "Fecha Fin",
                alignment: 'center',
            },
            {
                dataField: "total",
                caption: "total",
                alignment: 'center',
            },
            {
                dataField: "empleado",
                caption: "Vendedor",
                alignment: 'center',
            },
        ],

        onSelectionChanged: function (selectedItems) {

            var data = selectedItems.selectedRowsData[0];
            if (data) {

            }
        },

        headerFilter: {
            visible: true,
        },

        scrolling: {
            mode: "infinite"
        },

        selection: {
            mode: "single"
        },
        searchPanel: {
            visible: true,
            width: 240,
            placeholder: "Buscar..."
        },
        "export": {
            enabled: true,
            fileName: "Puntos al" + new Date().toDateString(),
            allowExportSelectedData: true
        },
        editing: {
            mode: "row",
            allowAdding: true,
            allowUpdating: true,
            allowDeleting: true,
            useIcons: true,
            texts: {
                addRow: "Agregar nuevo registro",
                cancelAllChanges: "Descartar cambios",
                cancelRowChanges: "Cancelar",
                confirmDeleteMessage: "¿Seguro que quieres eliminar este registro?",
                confirmDeleteTitle: "Advertencia",
                deleteRow: "Eliminar",
                editRow: "Editar",
                saveAllChanges: "Guardar cambios",
                saveRowChanges: "Guardar",
                undeleteRow: "Recuperar",
                validationCancelChanges: "Cancelar cambios",
                cancel: "Cancelar",
                ok: "Ok"
            },
        },
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
