
document.getElementById("id_vista_ventas").onclick = function () {
    vistaVentas()
}

var productos = [];
var producto_encontrado;
var tabla_venta;
var form_description;

if (producto_encontrado == null) {
    producto_encontrado = [{
        id: null,
        nombre: null,
        descripcion: null

    }]
}
async function buscarProducto(codigo) {
    console.log(codigo)
    const res = await fetch(`http://localhost:3000/buscarProducto/${codigo}`, {
    })
    const data = await res.json()
    console.log(data.rows[0])
    productos.push(data.rows[0])
    producto_encontrado = data.rows[0]
    if (producto_encontrado != null) {
        producto_encontrado = data.rows[0]
        tabla_venta.option("dataSource", productos)
        form_description.updateData("id", producto_encontrado.id);
        form_description.updateData("nombre", producto_encontrado.nombre);
        form_description.updateData("descripcion", producto_encontrado.descripcion);
        $('#etiqueta_precio').text("$" + producto_encontrado.precio + ".00")
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Producto no encontrado',
            showConfirmButton: true,
        })
        form_description.updateData("id", null);
        form_description.updateData("nombre", null);
        form_description.updateData("descripcion", null);
        $('#etiqueta_precio').text("$0.00")

    }

    console.log(productos)
}

function vistaVentas() {



    var venta = [{
        id: 1,
        descripcion: "Jeans color azúl talla S",
        nombre: "Jeans",
        precio: 500,
        cantidad: 1
    }]


    $("#vista_general").html('<div class="container-ventas">' +
        '<div class="container-img-description">' +
        '<div class="container-img"><img  style="width:250px; height:250px; margin-top:1.3em;" src="../assets/img/logo_gyl.jpg"></img></div>' +
        '<div class="container-description">' +
        '<div id= "form_descripcion" ></div>' +
        '<div class="container-precio-description"><div id="etiqueta_precio" class="precio-descripcion"></div><div class="container-codigo" id="codigo_producto"></div></div>' +
        '<div id="select_empleados"></div></div>' +
        '</div>' +
        '</div>' +
        '<div id="tabla_productos"/><div id="button_general"/>' +
        '</div>');


    form_description = $('#form_descripcion').dxForm({
        colCount: 1,
        labelLocation: "top",
        labelMode: "outside",
        items: [
            {
                dataField: "id",
                label: { text: "Id" },
                visible: false,
                editorOptions: {
                    value: producto_encontrado.id
                }
            },
            {
                dataField: "nombre",
                label: { text: "Producto" },
                visible: true,
                editorOptions: {
                    value: producto_encontrado.nombre
                }
            },
            {
                dataField: "descripcion",
                label: { text: "Descripción" },
                alignment: 'center',
                editorOptions: {
                    value: producto_encontrado.descripcion,
                    height: 110
                }
            },
        ],
    }).dxForm("instance");

    $('#codigo_producto').dxTextBox({
        onValueChanged: function (e) {
            buscarProducto(e.value)
        }
    }).dxTextBox("instance");

    $('#select_empleados').dxSelectBox({
        placeholder: 'Selecciona el empleado',
        items: ["EMPLEADO1", "EMPLEADO2", "EMPLEADO3", "EMPLEADO4", "EMPLEADO5"],
        visible: true,
        showClearButton: true,
        onValueChanged(e) {

        }
    }).dxSelectBox("instance");

    tabla_venta = $("#tabla_productos").dxDataGrid({
        dataSource: productos,
        columnAutoWidth: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        height: 300,
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
        },
        editing: {
            mode: "row",
            allowAdding: false,
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
        onRowRemoved: function (info) {
            form_description.updateData("id", null);
            form_description.updateData("nombre", null);
            form_description.updateData("descripcion", null);
            $('#codigo_producto').dxTextBox({
                value:null,
                onValueChanged: function (e) {
                    buscarProducto(e.value)
                }
            }).dxTextBox("instance");
            $('#etiqueta_precio').text("$0.00")
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
