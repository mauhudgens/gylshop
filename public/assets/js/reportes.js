
document.getElementById("id_vista_reportes").onclick = function () {
    $.LoadingOverlay("show");
    obtenerReportes()
}

async function obtenerReportes(){
    const res = await fetch('http://localhost:3000/obtenerReportes',{
    })
    const data = await res.json()
    console.log(data.rows)
    vistaReportes(data.rows)
  }

function vistaReportes(data) {
    $.LoadingOverlay("hide");
    console.log(data)
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
        '<div class="container-filtro-fecha">' +
        '<div id= "form_descripcion" ></div>' +
        '<div class="btn-reportes" id= "button_reportes" ></div>' +
        '</div>' +
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

    $("#tabla_productos").dxDataGrid({
        dataSource: data,
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
                dataField: "fecha",
                caption: "Fecha Inicio",
                alignment: 'center',
            },
            {
                dataField: "tipo",
                caption: "Tipo",
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
