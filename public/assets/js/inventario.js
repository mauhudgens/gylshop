
document.getElementById("id_vista_inventario").onclick = function () {
    $.LoadingOverlay("show");
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
    $.LoadingOverlay("hide");
    $("#vista_general").html('<div class="">' +
        '<div id="tabla_productos"/><div id="button_general"/>' +
        '</div>');
    $("#tabla_productos").dxDataGrid({
        dataSource: productos,
        columnAutoWidth: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        height:"700px",
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

