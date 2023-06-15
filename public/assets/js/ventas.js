
document.getElementById("id_vista_ventas").onclick = function () {
    form_datos_generales()
}

function form_datos_generales(data, insertupdate) {

    $("#vista_general").html('<div class="container-ventas">'+
    '<div id="contenido_vista_general"/><div id="button_general"/>'+
    '</div>');
    $("#contenido_vista_general").dxDataGrid({
        dataSource: null,
        columnAutoWidth: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
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
