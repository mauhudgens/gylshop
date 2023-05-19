/**
* Template Name: NiceAdmin - v2.3.1
* Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
function init(){

}

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Sidebar toggle
   */
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function(e) {
      select('body').classList.toggle('toggle-sidebar')
    })
  }

  /**
   * Search bar toggle
   */
  if (select('.search-bar-toggle')) {
    on('click', '.search-bar-toggle', function(e) {
      select('.search-bar').classList.toggle('search-bar-show')
    })
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Initiate tooltips
   */
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  /**
   * Initiate quill editors
   */
  if (select('.quill-editor-default')) {
    new Quill('.quill-editor-default', {
      theme: 'snow'
    });
  }

  if (select('.quill-editor-bubble')) {
    new Quill('.quill-editor-bubble', {
      theme: 'bubble'
    });
  }

  if (select('.quill-editor-full')) {
    new Quill(".quill-editor-full", {
      modules: {
        toolbar: [
          [{
            font: []
          }, {
            size: []
          }],
          ["bold", "italic", "underline", "strike"],
          [{
              color: []
            },
            {
              background: []
            }
          ],
          [{
              script: "super"
            },
            {
              script: "sub"
            }
          ],
          [{
              list: "ordered"
            },
            {
              list: "bullet"
            },
            {
              indent: "-1"
            },
            {
              indent: "+1"
            }
          ],
          ["direction", {
            align: []
          }],
          ["link", "image", "video"],
          ["clean"]
        ]
      },
      theme: "snow"
    });
  }

  /**
   * Initiate TinyMCE Editor
   */
  const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;

  tinymce.init({
    selector: 'textarea.tinymce-editor',
    plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
    editimage_cors_hosts: ['picsum.photos'],
    menubar: 'file edit view insert format tools table help',
    toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
    toolbar_sticky: true,
    toolbar_sticky_offset: isSmallScreen ? 102 : 108,
    autosave_ask_before_unload: true,
    autosave_interval: '30s',
    autosave_prefix: '{path}{query}-{id}-',
    autosave_restore_when_empty: false,
    autosave_retention: '2m',
    image_advtab: true,
    link_list: [{
        title: 'My page 1',
        value: 'https://www.tiny.cloud'
      },
      {
        title: 'My page 2',
        value: 'http://www.moxiecode.com'
      }
    ],
    image_list: [{
        title: 'My page 1',
        value: 'https://www.tiny.cloud'
      },
      {
        title: 'My page 2',
        value: 'http://www.moxiecode.com'
      }
    ],
    image_class_list: [{
        title: 'None',
        value: ''
      },
      {
        title: 'Some class',
        value: 'class-name'
      }
    ],
    importcss_append: true,
    file_picker_callback: (callback, value, meta) => {
      /* Provide file and text for the link dialog */
      if (meta.filetype === 'file') {
        callback('https://www.google.com/logos/google.jpg', {
          text: 'My text'
        });
      }

      /* Provide image and alt text for the image dialog */
      if (meta.filetype === 'image') {
        callback('https://www.google.com/logos/google.jpg', {
          alt: 'My alt text'
        });
      }

      /* Provide alternative source and posted for the media dialog */
      if (meta.filetype === 'media') {
        callback('movie.mp4', {
          source2: 'alt.ogg',
          poster: 'https://www.google.com/logos/google.jpg'
        });
      }
    },
    templates: [{
        title: 'New Table',
        description: 'creates a new table',
        content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
      },
      {
        title: 'Starting my story',
        description: 'A cure for writers block',
        content: 'Once upon a time...'
      },
      {
        title: 'New list with dates',
        description: 'New List with dates',
        content: '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
      }
    ],
    template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
    template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
    height: 600,
    image_caption: true,
    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
    noneditable_class: 'mceNonEditable',
    toolbar_mode: 'sliding',
    contextmenu: 'link image table',
    skin: useDarkMode ? 'oxide-dark' : 'oxide',
    content_css: useDarkMode ? 'dark' : 'default',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
  });

  /**
   * Initiate Bootstrap validation check
   */
  var needsValidation = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(needsValidation)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })

  /**
   * Initiate Datatables
   */
  const datatables = select('.datatable', true)
  datatables.forEach(datatable => {
    new simpleDatatables.DataTable(datatable);
  })

  /**
   * Autoresize echart charts
   */
  const mainContainer = select('#main');
  if (mainContainer) {
    setTimeout(() => {
      new ResizeObserver(function() {
        select('.echart', true).forEach(getEchart => {
          echarts.getInstanceByDom(getEchart).resize();
        })
      }).observe(mainContainer);
    }, 200);
  }

    async function obtenerProyectos(){
      const res = await fetch('http://localhost:3000/tasks',{
      })
      const data = await res.json()
      $('#combo').dxSelectBox({
        dataSource: data.rows,
        valueExpr: "id",
        displayExpr: "proyecto",
        onValueChanged: function (e) {
          
        
        
          
          console.log(e.value)

          var promises = [d_m1_descripcion(1),d_m1_datos(e.value), d_m2_descripcion(3),d_m2_datos(e.value), d_m3_descripcion(2),d_m3_datos_1(e.value), d_m3_datos_2(e.value), 
            d_m4_descripcion(4), d_m4_datos(e.value), d_m5_descripcion(5), d_m5_datos(e.value), d_m6_descripcion(7), d_m6_datos(e.value), d_m7_descripcion(9), d_m7_datos(e.value)];
                Promise.all(promises).then(results => {

                  Generar_PDF(results[0], results[1], results[2], results[3], results[4], results[5], results[6], results[7], results[8], results[9], results[10], 
                    results[11], results[12], results[13], results[14]);
                }).catch(reason => {
                    // $.LoadingOverlay("hide");
                    // devalert('Error al cargar las imagenes');
                    Generar_PDF("", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
                });
      }
      });
    }

    
    
    

    const d_m1_descripcion = async (id) => {
      const res = await fetch(`http://localhost:3000/m1_descripcion/${id}`,{
      })
      const data = await res.json()
      return data
    }

    const d_m1_datos = async (id) => {
      const res = await fetch(`http://localhost:3000/m1_datos/${id}`,{
      })
      const data = await res.json()
      return data
    }

    const d_m2_descripcion = async (id) => {
      const res = await fetch(`http://localhost:3000/m2_descripcion/${id}`,{
      })
      const data = await res.json()
      return data
    }

    const d_m2_datos = async (id) => {
      const res = await fetch(`http://localhost:3000/m2_datos/${id}`,{
      })
      const data = await res.json()
      return data
    }
    const d_m3_descripcion = async (id) => {
      const res = await fetch(`http://localhost:3000/m3_descripcion/${id}`,{
      })
      const data = await res.json()
      return data
    }

    const d_m3_datos_1 = async (id) => {
      const res = await fetch(`http://localhost:3000/m3_datos_1/${id}`,{
      })
      const data = await res.json()
      return data
    }
    const d_m3_datos_2 = async (id) => {
      const res = await fetch(`http://localhost:3000/m3_datos_2/${id}`,{
      })
      const data = await res.json()
      return data
    }
    const d_m4_descripcion = async (id) => {
      const res = await fetch(`http://localhost:3000/m4_descripcion/${id}`,{
      })
      const data = await res.json()
      return data
    }

    const d_m4_datos = async (id) => {
      const res = await fetch(`http://localhost:3000/m4_datos/${id}`,{
      })
      const data = await res.json()
      return data
    }

    const d_m5_descripcion = async (id) => {
      const res = await fetch(`http://localhost:3000/m5_descripcion/${id}`,{
      })
      const data = await res.json()
      return data
    }

    const d_m5_datos = async (id) => {
      const res = await fetch(`http://localhost:3000/m5_datos/${id}`,{
      })
      const data = await res.json()
      return data
    }

    const d_m6_descripcion = async (id) => {
      const res = await fetch(`http://localhost:3000/m6_descripcion/${id}`,{
      })
      const data = await res.json()
      return data
    }

    const d_m6_datos = async (id) => {
      const res = await fetch(`http://localhost:3000/m6_datos/${id}`,{
      })
      const data = await res.json()
      return data
    }

    const d_m7_descripcion = async (id) => {
      const res = await fetch(`http://localhost:3000/m7_descripcion/${id}`,{
      })
      const data = await res.json()
      return data
    }

    const d_m7_datos = async (id) => {
      const res = await fetch(`http://localhost:3000/m7_datos/${id}`,{
      })
      const data = await res.json()
      return data
    }

    obtenerProyectos()

    // playground requires you to assign document definition to a variable called dd
  async function Generar_PDF(d_m1_descripcion, d_m1_datos, d_m2_descripcion, d_m2_datos, d_m3_descripcion, d_m3_datos_1, d_m3_datos_2, 
  d_m4_descripcion, d_m4_datos, d_m5_descripcion, d_m5_datos, d_m6_descripcion, d_m6_datos,  d_m7_descripcion, d_m7_datos, img) {
  let descripcion_completa = {
      pageSize: 'LETTER',
      pageMargins: [40, 40, 40, 40],
      info: {
    title: 'Descripción Mapas',
  },

      content: [
////////////////////////////////////UBICACION////////////////////////////////////////////////////////////////////////////////////////////
        {
          text: 'Mapa 1', bold: true, 
          alignment: 'left',
          style: 'header'
        },

        {
          text: '\n'+d_m1_descripcion.descripcion_de_mapa+'\n\n',
          alignment: 'justify',
          style: 'header'
        },

        {
          text: 'Descripcion del Proyecto ('+d_m1_datos.proyecto+') Ubicado en; ('+d_m1_datos.ubicacion+').\n\n', bold: true,
          alignment: 'justify',
          style: 'header'
        },
        // {
        //   image: 'https://srv739.hstgr.io:7443/1d0000ff154e8036/files/public_html/assets/img/proyectos_img/Ubicaci%C3%B3n_AAAG.jpeg'
        // },
        // {
        //   image: await getBase64ImageFromURL(
        //     "https://srv739.hstgr.io:7443/3d1435ae6301ba78/files/public_html/assets/img/proyectos_img/Ubicaci%C3%B3n_AAAG.jpeg"
        //   )
        // } ,

        
         
//////////////////////////////////RECURSOS EXTERNOS////////////////////////////////////////////////////////////////////////////////////////////////////
        {
          text: 'Mapa 2', bold: true, 
          alignment: 'left',
          style: 'header'
        },

        {
          text: '\n'+d_m2_descripcion.descripcion_de_mapa+'\n\n',
          alignment: 'justify',
          style: 'header'
        },
        {
          text: 'De acuerdo a la cartografía del área de estudio se identifican ('+d_m2_datos.unidades+') unidades  de tipo ('+d_m2_datos.tipo_recurso+'), como se muestra en el siguiente mapa.\n\n', bold: true,
          alignment: 'justify',
          style: 'header'
        },

//////////////////////////////////INFRAESTRUCTURA HIDRAULICA/////////////////////////////////////////////////////////////////////////////////////////////
        {
          text: 'Mapa 3', bold: true, 
          alignment: 'left',
          style: 'header'
        },

        {
          text: '\n'+d_m3_descripcion.descripcion_de_mapa+'\n\n',
          alignment: 'justify',
          style: 'header'
        },
        {
          text: 'En caso de algún incidente, es importante considerar la infraestructura existen en el area de estudio la cual se encuentra de de la siguiente manera;\n\n',
          alignment: 'justify',
          style: 'header'
        },
        {
          text: d_m3_datos_1.cobertura+'\n', bold: true, 
          alignment: 'justify',
          style: 'header'
        },
        {
          text: d_m3_datos_2.cobertura+'\n\n', bold: true, 
          alignment: 'justify',
          style: 'header'
        },

/////////////////////////////////////////LITOLOGIA//////////////////////////////////////////////////////////////////////////////////////////
        {
          text: 'Mapa 4', bold: true, 
          alignment: 'left',
          style: 'header'
        },

        {
          text: '\n'+d_m4_descripcion.descripcion_de_mapa+'\n\n',
          alignment: 'justify',
          style: 'header'
        },

        {
          text: 'En el área de estudio se identificó:',
          alignment: 'justify',
          style: 'header'
        },
        {
          text: d_m4_datos.roca+' ('+d_m4_datos.descripcion_clase+'), de tipo '+d_m4_datos.litologia+', ('+d_m4_datos.descripcion_tipo+').', bold: true,
          alignment: 'justify',
          style: 'header'
        },
        {
          text: 'Es importante considerar dentro del estudio de mecánica de suelos esta composición, para identificar el tipo de cimentación a utilizar en la construcción del proyecto.\n\n',
          alignment: 'justify',
          style: 'header'
        },
//////////////////////////////GEOMORFOLOGIA///////////////////////////////////////////////////////////////////////////////////////////////////
        {
          text: 'Mapa 5', bold: true, 
          alignment: 'left',
          style: 'header'
        },

        {
          text: '\n'+d_m5_descripcion.descripcion_de_mapa+'\n\n',
          alignment: 'justify',
          style: 'header'
        },

        {
          text: 'En el área de estudio se identificó la zona como:',
          alignment: 'justify',
          style: 'header'
        },
        {
          text: d_m5_datos.descripcion_tipo+'\n\n', bold: true,
          alignment: 'justify',
          style: 'header'
        },
/////////////////////////////////////EDAFOLOGIA////////////////////////////////////////////////////////////////////////////////////////////////
        {
          text: 'Mapa 6', bold: true, 
          alignment: 'left',
          style: 'header'
        },

        {
          text: '\n'+d_m6_descripcion.descripcion_de_mapa+'\n\n',
          alignment: 'justify',
          style: 'header'
        },

        {
          text: 'En el área de estudio se identificó:',
          alignment: 'justify',
          style: 'header'
        },
        {
          text: '('+d_m6_datos.tipo+') el cual es un ('+d_m6_datos.descripcion_tipo+').\n\n', bold: true,
          alignment: 'justify',
          style: 'header'
        },
/////////////////////////////////////USO DE SUELO Y VEGETACION////////////////////////////////////////////////////////////////////////////////////////////////
        {
          text: 'Mapa 7', bold: true, 
          alignment: 'left',
          style: 'header'
        },

        {
          text: '\n'+d_m7_descripcion.descripcion_de_mapa+'\n\n',
          alignment: 'justify',
          style: 'header'
        },

        {
          text: 'En el área de estudio se identificó como',
          alignment: 'justify',
          style: 'header'
        },
        // {
        //   text: '('+d_m6_datos.tipo+') el cual es un ('+d_m6_datos.descripcion_tipo+').\n\n', bold: true,
        //   alignment: 'justify',
        //   style: 'header'
        // },





      ],

      styles: {
    header: {
      fontSize: 10.5,
    },
  }

  }


  // abrir el PDF en una nueva ventana
  pdfMake.createPdf(descripcion_completa).open();

  

  // imprimir el PDF
  //pdfMake.createPdf (Dictamen).print ();

  // descargue el PDF 
  // pdfMake.createPdf(Dictamen).download('Dictamen.pdf');

}

function getBase64ImageFromURL(url) {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.setAttribute("crossOrigin", "anonymous");
    img.onload = () => {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png");
      resolve(dataURL);
    };
    img.onerror = error => {
      reject(error);
    };
    img.src = url;
  });
}




})();

