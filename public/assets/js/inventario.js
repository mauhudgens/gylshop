
document.getElementById("id_vista_inventario").onclick = function () {
    obtenerProductos()
}

async function obtenerProductos(){
      const res = await fetch('http://localhost:3000/traerInventario',{
      })
      const data = await res.json()
      console.log(data.rows)
      vistaInventario(data.rows)
    }

function vistaInventario(productos) {
    // var productos = [{id: 1,
    //     descripcion:"Jeans color azúl talla S",        
    //     nombre: "Jeans",
    //     precio: 500,
    //     cantidad: 1,
    //     codigo:"0525"}]
    $("#vista_general").html('<div class="">' +
        // '<div class="container-img-description">' +
        // '<div class="container-img"><img  style="width:250px; height:250px; margin-top:1.3em;" src="../assets/img/logo_gyl.jpg"></img></div>' +
        // '<div class="container-description">' +
        // '<div id= "form_descripcion" ></div>' +
        // '<div class="container-precio-description"><p class="precio-descripcion">$500.00<p><div><div id="select_empleados"></div></div></div>' +
        // '</div>' +
        // '</div>' +
        '<div id="tabla_productos"/><div id="button_general"/>' +
        '</div>');


    // $('#form_descripcion').dxForm({
    //     colCount: 1,
    //     labelLocation: "top",
    //     labelMode: "outside",
    //     items: [
    //         {
    //             dataField: "id",
    //             label: { text: "Id" },
    //             visible: false,
    //             editorOptions: {

    //             }
    //         },
    //         {
    //             dataField: "nombre",
    //             label: { text: "Producto" },
    //             visible: true,
    //             editorOptions: {

    //             }
    //         },
    //         {
    //             dataField: "descripción",
    //             label: { text: "Descripción" },
    //             alignment: 'center',
    //             editorOptions: {
    //                 height: 110
    //             }
    //         },
    //     ],
    // }).dxForm("instance");

    // $('#select_empleados').dxSelectBox({
    //     placeholder: 'Selecciona el empleado',
    //     items: ["EMPLEADO1", "EMPLEADO2", "EMPLEADO3", "EMPLEADO4", "EMPLEADO5"],
    //     visible: true,
    //     showClearButton: true,
    //     onValueChanged(e) {

    //     }
    // }).dxSelectBox("instance");

    $("#tabla_productos").dxDataGrid({
        dataSource: productos,
        columnAutoWidth: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        height:"700px",
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
                dataField: "descripcion",
                caption: "Descripción",
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
            {
                dataField: "codigo",
                caption: "Código",
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

        // selection: {
        //     mode: "single"
        // },
        searchPanel: {
            visible: true,
            width: 240,
            placeholder: "Buscar..."
        },
        "export": {
            enabled: true,
            fileName: "Inventario",
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
