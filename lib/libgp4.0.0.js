var aColorEvento    				= ['#0d6efd', '#198754', '#dc3545', '#6c757d', '#212529'];
// Compatibilidad con versiones anteriores: el control de pantalla completa de
// Contactos puede no existir en las vistas actuales.
var pCompleta_contactos = null;
var aRol            				= ['Cliente', 'Proveedor', 'Vendedor', 'Empleado', 'Acreedor', 'Deudor', 'Delegación', 'Almacén', 'Agencia envíos', 'Banco', 'Admón. Pública', 'Otro'];

var aTipoInteraccion  				= ['Llamada Telefónica', 'Correo Electrónico', 'Reunión Presencial', 'Videollamada', 'Mensaje de Texto', 'Mensajería Instantánea', 'Presentación de Producto / Servicio', 'Demo o Prueba de Producto', 'Capacitación o Formación', 'Propuesta Enviada', 'Confirmación de Pedido', 'Entrega de Producto / Servicio', 'Reunión de Seguimiento', 'Revisión de Progreso', 'Encuesta de Satisfacción', 'Asistencia Técnica', 'Resolución de Incidencias', 'Renovación de Contrato o Servicio', 'Actualización de Condiciones', 'Ajuste de Propuesta', 'Cierre de Venta', 'Cancelación / Terminación de Servicio', 'Envío de Documentación', 'Invitación a Evento/Webinar', 'Invitación a Evento/Webinar', 'Notificación de Cobro / Facturación', 'Reunión Interna de Estrategia (Equipo)', 'Otro'];
var aEtapaInteraccion  				= ['Prospecto Inicial', 'Calificación de Lead', 'Contacto Realizado', 'Reunión Inicial', 'Identificación de Necesidades', 'Presentación de Producto / Servicio', 'Envio de Propuesta', 'Negociación', 'Términos Acordados', 'Cierre Pendiente de Aprobación', 'Cierre de Venta', 'Implementación', 'Seguimiento Postventa', 'Renovación / Recompra', 'Oportunidad Perdida', 'Prospecto Inactivo', 'Otro'];
var aResultadoInteraccion 			= ['Exitosa', 'Sin Respuesta', 'Interesado', 'No Interesado', 'Seguimiento Programado', 'Propuesta Enviada', 'Aprobación Pendiente', 'Condiciones Negociadas', 'Cierre Exitoso', 'Oportunidad Perdida', 'Pendiente de Acción del Cliente', 'Feedback Recibido', 'Otro'];
var aAccionInteraccion 				= ['Enviar Correo de Seguimiento', 'Llamar para Recordatorio', 'Enviar Propuesta', 'Programar Reunión', 'Confirmar Asistencia', 'Enviar Documentación Adicional', 'Actualizar Propuesta', 'Revisar Necesidades del Cliente', 'Negociar Nuevas Condiciones', 'Solicitar Feedback', 'Cerrar Venta', 'Otro'];

var tabContactosCampos 				= ["cod", "per", "alt", "dom", "cpo", "pob", "pro", "pai", "te1", "te2", "cor", "www", "nif", "car", "dep", "rol", "ani", "nom", "sec", "dun", "eg1", "eg2", "eg3", "eti", "lin", "tel", "ins", "mes", "xxx", "rf1", "rf2", "rf3", "rf4", "fin", "ffi", "pr1", "pr2", "pr3", "pr4", "pr5", "pr6", "noa"];
var tabContactosTitCol_es_ES 		= ["Código", "Nombre", "Alta", "Dirección", "C. P.", "Población", "Provincia", "País", "Teléfono 1", "Teléfono 2", "E-mail", "Web", "NIF", "Cargo", "Departamento", "Rol", "Aniversario", "Empresa", "Sector", "DUNS", "Grupo 1", "Grupo 2", "Grupo 3", "Etiquetas", "LinkedIn", "Telegram", "Instagram", "Messenger", "X", "Referencia 1", "Referencia 2", "Referencia 3", "Referencia 4", "Inicio", "Fin", "Preferencias 1", "Preferencias 2", "Preferencias 3", "Preferencias 4", "Preferencias 5", "Preferencias 6", "Notas"];

var tabDocumentosCampos 			= ["fec", "nom", "com"];
var tabDocumentosTitCol_es_ES 		= ["Fecha", "Nombre fichero", "Descripción"];

var tabParticipantesCampos 			= ["cod", "per", "nom", "nif", "dom", "cpo", "pob", "pro", "pai", "te1", "te2", "cor", "www", "car", "dep", "rol"];
var tabParticipantesTitCol_es_ES 	= ["Código", "Nombre", "Empresa", "NIF", "Dirección", "C. P.", "Población", "Provincia", "País", "Teléfono 1", "Teléfono 2", "E-mail", "Web", "Cargo", "Departamento", "Rol"];

var tabInteraccionesCampos 			= ["fhii", "tipi", "asui", "desi", "ncli", "etai", "resi", "peni", "reci"];
var tabInteraccionesTitCol_es_ES 	= ["Fecha/hora", "Tipo", "Asunto", "Descripción", "Notas cliente", "Etapa", "Resultado", "Pendiente", "Recordatorio"];

var tabRecordatoriosCampos 			= ["recr", "penr", "codr", "perr", "nomr", "fhir", "tipr", "asur", "desr", "nclr", "etar", "resr"];
var tabRecordatoriosTitCol_es_ES 	= ["Recordatorio", "Pendiente", "Código", "Nombre", "Empresa", "Fecha/hora", "Tipo", "Asunto", "Descripción", "Notas cliente", "Etapa", "Resultado"];

var exp_es_ES 						= ["Imprimir tabla","Exportar tabla","Exportar a:","Mostrar columnas","Gestión documental","Importar","Tabla","Tarjeta/Tabla","Imprimir","Exportar a","Tarjeta","Buscar en la tabla","Vista de tarjeta","Cerrar","Dirección","Código postal","Población","Provincia","País","Teléfono 1","Teléfono 2","Correo electrónico","Dirección web","Nombre empresa","NIF","Cargo","Departamento","Notas","Guardar","Cancelar","Enviar","Contraseña","He olvidado mi contraseña","Aceptar","Abrir","Cancelar","¿Eres nuevo?","Es GRATIS y sencillo","Quiero registrarme","Escribe tu consulta","Recomendar a un amigo","Política de Privacidad","Condiciones de Uso","Correo electrónico no válido","Correo electrónico desconocido","Contraseña no válida","¿Quieres registrarte?","Registro","Versión","Recibirás la contraseña en tu correo para acceder a My Contacts Cloud","He leído y acepto la","Registrarme","La dirección de correo no coincide","Debes aceptar la Política de Privacidad","Tu nombre","Escribe de nuevo el correo","Menú","Eventos","Utilidades","Cambiar contraseña","Planes PRO","Suscripción","Enviar consulta","Cancelar cambios","Cerrar ventana","Asunto","Contenido","Consulta","Consulta enviada","contactos","eventos","documentos","GRATIS","Gratis","gratis","mes","Mensual","comprar","IVA incluido","Buscar","Columnas a mostrar","Guardar cambios","Contraseña actual","Nueva contraseña","Repita contraseña","Ocho caracteres como mínimo","Un número al menos","Una letra minúscula al menos","Una letra mayúscula al menos","La contraseña no coincide","La longitud de la contraseña debe ser de ocho caracteres como mínimo","La contraseña debe contener al menos un número","La contraseña debe contener al menos una letra minúscula","La contraseña debe contener al menos una letra mayúscula","Contraseña cambiada","La contraseña anterior no es correcta","Muchas gracias por tu compra","Recibirás un correo para acceder a la factura y recibo","Continuar","Sí","No","Error al conectar con la base de datos","Fallo al preparar la declaración SQL","Fallo al ejecutar la consulta SQL","Uno de estos caracteres especiales al menos !@#$%_-+=?","La contraseña debe contener al menos uno de estos caracteres especiales !@#$%_-+=?","Esta dirección de correo electrónico ya estaba dada de alta anteriormente","Nuevo contacto","Editar contacto","Eliminar contacto","Ver contacto","Contactos","Rol del contacto","Código","Nombre","Empresa","NIF","Dirección","C. P.","Población","Provincia","País","Telefóno 1","Telefóno 2","E-mail","Web","Cargo","Departamento","Rol","Alta","Cliente","Proveedor","Vendedor","Empleado","Acreedor","Deudor","Delegación","Almacén","Agencia envíos","Banco","Admón. Pública","Otro","Código del contacto. Máximo 15 caracteres. Si lo deja en blanco, My Contacts lo rellenará automáticamente","Nombre persona","Nombre de la persona de contacto. Máximo 60 caracteres","Fecha de alta del contacto","Abrir Google Maps","Llamar","Enviar un mensaje","Visitar web","NIF del contacto","Nombre de empresa","Contacto","Nuevo documento","Editar documento","Eliminar documento","Ver documento","Gestión documental","Fecha","Fecha del documento","Examinar...","Nombre del fichero","Descripción","Descripción del documento","El tamaño del fichero no debe superar los","Te recomendamos adquirir un plan PRO para poder añadir más documentos","Te recomendamos cambiar a un plan PRO superior para poder añadir más documentos","Documento","Importar","Nombre del fichero Excel","Primera fila contiene encabezados","letra de la columna del campo 'Código'","letra de la columna del campo 'Nombre'","letra de la columna del campo 'Dirección'","letra de la columna del campo 'C. P.'","letra de la columna del campo 'Población'","letra de la columna del campo 'Provincia'","letra de la columna del campo 'País'","letra de la columna del campo 'Teléfono 1'","letra de la columna del campo 'Teléfono 2'","letra de la columna del campo 'Correo electrónico'","letra de la columna del campo 'Dirección web'","letra de la columna del campo 'Empresa'","letra de la columna del campo 'NIF'","letra de la columna del campo 'Cargo'","letra de la columna del campo 'Departamento'","letra de la columna del campo 'Notas'","Te recomendamos adquirir un plan PRO para poder añadir más contactos","Te recomendamos cambiar a un plan PRO superior para poder añadir más contactos","No se importó nada","Se importó un registro","registros importados","Evento","Todo el día","Inicio","Fin","Color","Título","Descripción (opcional)","Lugar","Lugar (opcional)","Dirección web","Dirección web (opcional)","Visitar web","App reunión online","Ninguna app","Id. reunión","Id. de reunión (opcional)","Unirme a la reunión","Código de acceso","Código de acceso a la reunión (opcional)","Adjuntar ficheros","Eliminar evento","Código o enlace de la reunión","Código de acceso a la reunión","ID de reunión o nombre de enlace personal","Nuevo participante","Eliminar participante","Participantes","Fecha/hora de inicio del evento","Fecha/hora del fin del evento","Nuevo evento","Te recomendamos adquirir un plan PRO para poder añadir más eventos","Te recomendamos cambiar a un plan PRO superior para poder añadir más eventos","¿Eliminar evento?","Muchas gracias por registrarte","Recibirás un correo de bienvenida con la contraseña para abrir la App","Si tu cuenta es gmail, es posible que lo recibas en","Promociones","Si no encuentras el correo, revisa la","carpeta Spam","Recomendar","Tu amigo recibirá un correo con un enlace para visitar la web de My Contacts Cloud y suscribirse en caso de interesarle","Muchas gracias<br><br>Si la cuenta de tu amigo es gmail, es posible que lo reciba en Promociones","Eliminar","Zona horaria","Fines de semana","Cambiar idioma","9,95 €","19,95 €","29,95 €","49,95 €","99,95 €","Código duplicado","Selecciona una fila","Añade primero una fila","Contacto recientemente eliminado","Contacto asignado a uno o varios eventos","¿Eliminar contacto?","¿Eliminar documento?","Pulsa sobre el botón de Examinar para seleccionar el fichero","Selecciona un sólo fichero","La primera columna de datos debe ser la columna A","El campo 'Nombre' es obligatorio","¿Recibir nueva contraseña por correo electrónico?","Nueva contraseña enviada. Si se trata de una cuenta Gmail, posiblemente esté en Promociones. Revisa la carpeta Spam si no encuentra el mensaje.","Doble clic para seleccionar el contacto","Introduce la contraseña del correo que acabas de recibir. Podrás cambiarla después en el menú Utilidades, Cambiar contraseña.","Desuscribirme","Recibirás un correo con un enlace para que confirmes la desuscripción","Al desuscribirte...","Se eliminará la base de datos que contiene los datos introducidos en la app","No recibirás más mensajes de nuestra newsletter","Te daremos de baja en el registro de usuarios de la app","Pantalla completa","¿Salir de My Contacts Cloud?","Gira la pantalla","Inicio de sesión","--- o ---","Iniciar sesión en Microsoft","Nuevo correo electrónico","Recibirás un mensaje para verificar que esta dirección de correo electrónico es tuya","Mensaje enviado","Abre el mensaje y haz un clic sobre el enlace 'Sí, soy yo'","¡Vota por nuestra app!","Cerrar sesión","Soy nuevo","Introduce arriba tu dirección de correo electrónico o, si lo prefieres, inicia sesión con tu cuenta de Google, Microsoft o Apple","Planificador","Eventos Reuniones Tareas","Día","Semana","Mes","Agenda","No se ha podido previsualizar el fichero","Configurar contactos","Configurar eventos","Aniversario","Sector","Sector de la empresa","Número DUNS","Iniciar conversación","Nombre de usuario","ID usuario","Hallar ID númerico del usuario","Referencias","En 'Utilidades', 'Configurar contactos' podrás definir los nombres de las referencias","Fecha de inicio","Fecha final","Preferencias","En 'Utilidades', 'Configurar contactos' podrás definir los títulos de las preferencias","Define los nombres de las referencias para la ficha del contacto. Ejemplos: Referencia, contrato, póliza, proyecto, obra, vehículo, matrícula,...","Nombre referencia","Define los títulos de las preferencias del contacto. Ejemplos: Productos y servicios, necesidades especiales, envíos, tipo de comunicaciones, marketing, atención al cliente, formas de pago,...","Título preferencia","Hora de inicio","Hora final","Intérvalo de tiempo","cada 10 minutos","cada 15 minutos","cada 20 minutos","cada media hora","cada hora","cada 2 horas","Confirmar","La fecha final debe ser posterior a la inicial","El día debe ser distinto","Añade un evento, reunión o tarea con el botón del signo + que está arriba. También puedes añadirlo haciendo un clic o manteniendo presionado el dedo durante un segundo.","En la vista del mes, si haces clic o presionas el número del día, accederás a la vista diaria.","Arrastra y suelta un evento con el ratón o presionando previamente el dedo durante un segundo. Además de moverlo, podrás cambiar su tamaño.","Ver planes","Mi suscripción","No te conformes con lo básico, salta al siguiente nivel con los planes PRO","Podrás cambiar de plan a uno superior o inferior en cualquier momento de acuerdo a tus necesidades","Podrás cancelar tu plan en cualquier momento","Recibirás un correo electrónico con la factura de compra y el recibo del pago","Haz una prueba rápida tecleando nombre, población, teléfono y correo electrónico. Después de guardarlo, haz clic sobre el botón ","Documentos con ","Eventos con ","Recomendamos el inicio de sesión con una cuenta de Google, Microsoft o Apple por su rapidez y comodidad. También garantiza una recepción más segura de los mensajes de correo.","Precios con impuestos excluidos","valor al mes con la suscripción anual","(dos meses gratis)","Anual","más popular","Contactos de Google","Contactos de Microsoft","Desde fichero Excel","Grupos de contactos","Editar grupo","Autorizar","Nuevo elemento","El número máximo de elementos por grupo es 100","Elemento asignado a uno o más contactos","No se puede eliminar el elemento predeterminado","¿Eliminar elemento?","Grupos","En 'Utilidades', 'Grupos de contactos' podrás definir los nombres de los grupos y las opciones de cada grupo para la segmentación de contactos","Nombre del grupo","Nombre del elemento","¿Importar los contactos seleccionados?","Importar desde Excel","Filtrar por grupos y etiquetas","Filtrar","Quitar filtro","Etiquetas de contactos","Escribe una etiqueta","Selecciona el color","Añadir etiqueta","Etiqueta asignada a uno o más contactos","En 'Utilidades', 'Etiquetas de contactos' podrás definir las etiquetas para la segmentación de contactos","Grupos y Etiquetas","Etiquetas","Seleccionar Etiquetas","Máximo de 3 etiquetas seleccionadas","Interacciones","interacciones","Interacciones con","Nueva interacción","Editar interacción","Eliminar interacción","Ver interacción","Fecha/hora","Fecha/hora de la interacción","Tipo","Tipo de interacción","Notas cliente","Etapa","Etapa del proceso de venta","Resultado","Resultado de la interacción","Acción Pendiente","Recordatorio","Recordatorio de la Acción Pendiente","Llamada Telefónica","Correo Electrónico","Reunión Presencial","Videollamada","Mensaje de Texto","Mensajería Instantánea","Presentación de Producto / Servicio","Demo o Prueba de Producto","Capacitación o Formación","Propuesta Enviada","Confirmación de Pedido","Entrega de Producto / Servicio","Reunión de Seguimiento","Revisión de Progreso","Encuesta de Satisfacción","Asistencia Técnica","Resolución de Incidencias","Renovación de Contrato o Servicio","Actualización de Condiciones","Ajuste de Propuesta","Cierre de Venta","Cancelación / Terminación de Servicio","Envío de Documentación","Invitación a Evento/Webinar","Notificación de Cobro / Facturación","Reunión Interna de Estrategia (Equipo)","Prospecto Inicial","Calificación de Lead","Contacto Realizado","Reunión Inicial","Identificación de Necesidades","Envio de Propuesta","Negociación","Términos Acordados","Cierre Pendiente de Aprobación","Implementación","Seguimiento Postventa","Renovación / Recompra","Oportunidad Perdida","Prospecto Inactivo","Exitosa","Sin Respuesta","Interesado","No Interesado","Seguimiento Programado","Aprobación Pendiente","Condiciones Negociadas","Cierre Exitoso","Pendiente de Acción del Cliente","Feedback Recibido","Enviar Correo de Seguimiento","Llamar para Recordatorio","Enviar Propuesta","Programar Reunión","Confirmar Asistencia","Enviar Documentación Adicional","Actualizar Propuesta","Revisar Necesidades del Cliente","Negociar Nuevas Condiciones","Solicitar Feedback","Cerrar Venta","Interacción","¿Eliminar Interacción?","Recordatorios","Añade una interacción en Contactos","Pantalla normal","Contactos de Apple","Leer contactos desde iCloud","Sigue estos pasos para importar tus contactos:","Ir a "," e iniciar sesión.","En la sección ","Inicio de sesión y seguridad",", selecciona ","Contraseñas de aplicaciones","Haz clic en ","Generar una contraseña de aplicación"," e introduce ","Importar contactos"," como nombre.","Apple generará una contraseña con el formato ","Copia la contraseña y pégala abajo para continuar:","Correo electrónico del ID de Apple:","Contraseña de aplicación:"," Leer contactos","ID de Apple o contraseña incorrecta","Teclea el nombre del documento","Error al crear el documento en OneDrive","Error al crear el documento en Collabora","Error al abrir el documento en Collabora","Ya existe un documento con ese nombre","Hubo un problema al comunicarse con el servidor","Selecciona un documento","O crea un nuevo documento...","¡Vótanos!","App de correo","Dispositivo","Selecciona tipo","ID cuenta: ","Diseño","Marketing","No se pudo iniciar sesión con Microsoft","No se pudo autenticar con Microsoft","No se pudo obtener el token de acceso","📋 Dirección copiada al portapapeles: ","Extensión no soportada","No se pudo obtener acceso a los contactos de Microsoft","Autenticando con Google...","No se completó la autorización de Google.","Error de Google:","Falta el código de autorización de Google.","Falta el verificador de Google en el almacenamiento local.","Completando la autorización de Gmail...","Completando la autorización de Google...","No se pudo establecer comunicación con la ventana principal.","Error inesperado:","Procesando la autenticación de Google...","Guarda la ficha para aplicar los cambios.","Cerrando el editor","Cerrando el editor...","Cerrar ventana","Cargando...","Cierre de sesión","De","Para","Asunto","CC","CCO","Mensaje","Documentos adjuntos","Gestionar","Enviar con","Enviar","Cerrar","Nuevo mensaje","Mensaje enviado","Selecciona documentos","Buscar documentos","No se encontraron resultados","Buscando...","Actualizando documentos...","Conectando con Microsoft...","Conectando con Google...","Enviando mensaje...","No se pudieron cargar las bibliotecas del editor de mensajes.","Error del servidor de Google:","Error del servidor de Microsoft:","Error al procesar la autorización:","La respuesta de autenticación no es válida o ha caducado.","El selector de documentos no está disponible.","No se pudieron cargar los documentos.","No se pudieron preparar los archivos adjuntos.","El proveedor de correo no está disponible.","No se pudo iniciar sesión con Microsoft:","No se pudo iniciar sesión con Google:","Introduce al menos un destinatario.","Error al enviar el correo:","Error al enviar el mensaje con Gmail:","No se encontró la dirección de correo del remitente.","Error al enviar el correo con My Contacts Cloud:","Iniciar sesión con Google","Iniciar sesión con Microsoft","Iniciar sesión con Apple","Error de Google","Error inesperado","De, Para, CC, CCO, Asunto, Mensaje","Documentos adjuntos, Gestionar, Enviar con","Eliminar cuenta y datos","Esta acción es irreversible.","Cancelar renovación","Enviar correo de confirmación","Confirmar eliminación de cuenta y datos","Escribe ELIMINAR para confirmar","No eliminar","Eliminar definitivamente","Dejar de recibir newsletters","Solicitar la baja","Correo electrónico no válido","El dominio del correo electrónico no es válido","No se pudo validar el correo electrónico","El correo electrónico no ha superado la validación","Contactos de Apple (Mac/iOS)","Manual","Resumen","Equipo","Consultas","Compartir","Vótanos","Situación actual de tu espacio de trabajo","Plan","Uso del plan","Usuarios","Almacenamiento de documentos","Los eventos y las interacciones no tienen límite.","Trabajar con contactos","Ver equipo","Manual y preguntas frecuentes","Hola","Plan pendiente de identificar","Sin suscripción","probando","cancelado","Facturación:","La facturación la gestiona el propietario","No se pudo cargar el resumen","Cargando usuarios…","Invitar a un miembro","La invitación reserva una plaza durante siete días. El nuevo miembro compartirá los mismos contactos y datos del equipo.","Enviar invitación","Estado","Acciones","Los miembros trabajan con los datos compartidos. La gestión de usuarios, planes, pagos y facturas corresponde siempre al propietario.","usuarios utilizados","No se pudo cargar el equipo","Miembro","Propietario","Invitación pendiente","Retirada pendiente","Activo","Reenviar","Reintentar retirada","Retirar","¿Confirmas esta acción?","No se pudo completar la operación","Operación completada.","No se pudo enviar la invitación","Invitación enviada.","Sólo el propietario puede invitar usuarios","Sólo el propietario puede reenviar invitaciones","Sólo el propietario puede cancelar invitaciones","Sólo el propietario puede retirar miembros","Operación de equipo no válida","Esta dirección ya pertenece a otro espacio de trabajo","No existe una invitación pendiente para esta dirección","Esta dirección ya es miembro o tiene una invitación pendiente","El plan ya tiene utilizados todos los usuarios incluidos","No se pudo crear la invitación","Invitación enviada","No se encontró la invitación pendiente","Invitación cancelada","No se encontró el miembro","El miembro ha quedado bloqueado, pero no se pudo completar la revocación con Apple. Vuelve a intentar la retirada","El miembro cambió durante la retirada","Miembro retirado","No se pudo conectar con la base de datos","Prefijo de datos no válido","Organiza tus contactos y trabaja desde una sola ficha.","Enlace copiado","Error del servidor de Google.","Sesión de Microsoft cerrada","Esta solicitud sólo puede realizarla el propietario de la cuenta.","Si tienes acceso a la aplicación, también puedes iniciar el proceso desde su menú principal.","Qué se elimina","Al confirmar la solicitud se bloquea la cuenta y se eliminan el espacio de trabajo, el perfil del propietario, todos los miembros y sus sesiones, contactos, eventos, interacciones, configuraciones, documentos y demás datos guardados en My Contacts Cloud.","También se eliminan las copias temporales propias del espacio de trabajo y se revocan las credenciales de acceso con Apple que estén disponibles en el servidor.","Datos que pueden conservarse","La cuenta y sus datos operativos no se conservan como una cuenta desactivada ni se utilizan para reabrir el servicio.","Puede conservarse durante un máximo de 12 meses la información imprescindible para identificar el origen de los datos alojados y el inicio de la prestación cuando resulte legalmente exigible. La documentación contable y sus justificantes que deban conservarse por obligación legal podrán mantenerse durante seis años. Estos datos quedan separados del espacio de trabajo eliminado y sólo se usan para atender obligaciones legales, fiscales, de seguridad o prevención del fraude.","Consulta los detalles en la","Antes de solicitar la eliminación","Si existe una renovación activa, el proceso se detendrá para que el propietario la cancele primero desde la configuración de facturación. La eliminación no continuará automáticamente: después de confirmarse la cancelación deberás volver a iniciar esta solicitud.","Una vez confirmada la eliminación, el acceso se bloquea de inmediato y el borrado se procesa en segundo plano. Recibirás un correo cuando haya finalizado.","Correo electrónico del propietario","Solicitar eliminación","Si la dirección corresponde al propietario de una cuenta, recibirás un correo con las instrucciones para continuar.","Enviando solicitud…","No se ha podido enviar la solicitud. Inténtalo de nuevo más tarde.","Confirmar eliminación","Comprobando el enlace…","Esta acción es definitiva y no se puede deshacer.","Se eliminarán el espacio de trabajo, el propietario, todos los miembros y los datos y documentos guardados en My Contacts Cloud.","El enlace de eliminación no es válido.","El enlace no es válido o ha caducado.","La solicitud no se puede confirmar.","Eliminando la cuenta y sus datos…","No se ha podido confirmar la eliminación.","No se ha podido iniciar la eliminación.","La cuenta y sus datos se han eliminado correctamente.","La eliminación está en proceso. Recibirás un correo cuando termine.","Esta operación sólo detiene las comunicaciones comerciales. No elimina tu cuenta ni tus datos y no modifica tu suscripción.","El enlace no es válido.","La baja ya no se puede confirmar.","Confirma que quieres dejar de recibir newsletters.","No se ha podido comprobar el enlace.","Procesando la baja…","No se ha podido completar la baja.","La baja se ha completado correctamente.","La baja de newsletters no elimina la cuenta, los datos ni la suscripción.","Si la dirección corresponde al propietario de una cuenta, recibirás un correo con las instrucciones para confirmar la baja.","No se pudo comprobar el estado de la renovación. Inténtalo de nuevo más tarde.","No se pudo comprobar el estado de la renovación. No se ha iniciado la eliminación.","No se pudo enviar el correo de confirmación. No se ha iniciado la eliminación.","El enlace de eliminación no es válido o ha caducado.","No se pudo comprobar el enlace de eliminación.","No se pudo preparar la confirmación.","Confirma que deseas eliminar definitivamente la cuenta y todos sus datos.","Escribe ELIMINAR para confirmar la operación.","La confirmación de seguridad no es válida. Vuelve a abrir el enlace del correo.","La solicitud ya fue utilizada, ha caducado o no pudo confirmarse.","La cuenta ha quedado bloqueada y su eliminación está en proceso. Recibirás un correo cuando haya finalizado.","Método no permitido.","Si la dirección corresponde al propietario de una cuenta, recibirás un correo para confirmar la baja.","El enlace de baja no es válido o ha caducado.","No se pudo preparar la baja.","Confirma que deseas dejar de recibir los newsletters de My Contacts Cloud.","La confirmación de seguridad no es válida. Vuelve a abrir el enlace.","No se pudo completar la baja en este momento.","La baja se ha completado. No recibirás más newsletters de My Contacts Cloud.","Respuesta no válida al leer contactos de Apple","Esta función está disponible en la app de macOS o iOS con permiso para acceder a Contactos.","Planes PRO para equipos","Todos los usuarios comparten contactos, documentos, eventos e interacciones.","Volver","Comprobando tu cuenta…","Periodicidad","Anual · dos meses de ahorro","Precios sin impuestos. Paddle calcula los impuestos aplicables durante el pago.","al mes","al año","de documentos","Eventos e interacciones sin límite","Elegir","Una suscripción sencilla","Cada plan incluye un número cerrado de usuarios. No se facturan asientos adicionales ni se modifica la cantidad al invitar o retirar miembros. Para ampliar el equipo, el propietario elige otro plan.","La gestión de planes corresponde al propietario del equipo.","No se pudo comprobar la facturación","Plan actual:","pendiente de identificar","Tu prueba no necesita tarjeta. Elige un plan cuando quieras continuar con PRO.","No se pudo preparar la operación","¿Confirmas el cambio?","No se pudo solicitar el cambio","Cambiar al plan","Paddle mostrará el ajuste aplicable.","Ajuste inmediato estimado:","El sistema de pagos no está configurado correctamente","Esta licencia utiliza el sistema de facturación anterior","Paddle todavía no está configurado en este entorno","No se pudo preparar de forma segura el pago","El cambio se aplicará cuando Paddle lo confirme","Paddle no devolvió un enlace de configuración válido","No se pudo conectar con Paddle","Perderás el acceso aunque quede tiempo contratado. La eliminación no genera automáticamente un reembolso.","No se ha podido interpretar la respuesta del servidor.","Baja de newsletters","Cerrar sesión al salir","Sugerencia","Importa tus contactos de","y","haciendo clic sobre","Se eliminarán permanentemente:","El espacio de trabajo, el propietario y todos sus miembros.","Los contactos, eventos, documentos y demás datos guardados en My Contacts Cloud.","Las sesiones, configuraciones y accesos asociados a la cuenta.","Comprobando el estado de la suscripción…","Antes de eliminar tu cuenta y sus datos debes cancelar la renovación de la suscripción. Cuando la cancelación haya sido confirmada, vuelve a seleccionar «Eliminar cuenta y datos».","Documentos","de","usuarios","Más popular","Sistema anterior","Método no permitido","sesión no válida","opción disponible únicamente para el propietario","El sistema de pagos no está configurado correctamente.","La gestión de la suscripción corresponde al propietario del equipo.","No se pudo abrir la configuración de Paddle","Plan Paddle no válido","Periodicidad Paddle no válida","El equipo actual no cabe en el plan seleccionado","Los contactos actuales no caben en el plan seleccionado","Los documentos actuales no caben en el plan seleccionado","Respuesta de Paddle no válida","Paddle no pudo completar la operación solicitada"];


//variable para expresiones de porcentajes
var sMask1ant               	= null;

// para imprimir tabla
var textoEnVezDeIcono       	= false;

var volverAtras             	= false;

var modalColTabla				= null;

var myModalMenu					= null;
var myModalDashboard			= null;
var myModalEquipo				= null;
var myModalConfContactos  		= null;
var myModalConfEventos  		= null;
var myModalIdioma  				= null;
var myModalContrasena  			= null;
var myModalImportarExcel 		= null;

var myModalPoliticaPrivacidad 	= null;
var mymodalCondicionesUso 		= null;
var mymodalConsulta				= null;
var mymodalDesuscripcion 		= null;

// variables para tabla Contactos
var indiceFilaTab 				= -1;
var refrescoTabContactos 		= -1;
var iPosTabContactos 			=  0;
//var cargaIniContactos 			= true;
var nombrePersonaContacto 		= '';
var vistaAntTabContactos  		= '';

// variables para tabla Documentos
var indiceFilaTabDocumentos     = -1;
var refrescoTabDocumentos       = -1;
var iPosTabDocumentos           =  0;
var vistaAntTabDocumentos  		= '';

// variables para tabla Participantes
var indiceFilaTabParticipantes 	= -1;
var refrescoTabParticipantes    = -1;
var iPosTabParticipantes        =  0;
var vistaAntTabParticipantes  	= '';

// variables para tabla Interacciones
var indiceFilaTabInteracciones 	= -1;
var refrescoTabInteracciones    = -1;
var iPosTabInteracciones        =  0;
var vistaAntTabInteracciones  	= '';


// variables para tabla Recordatorios
var indiceFilaTabRecordatorios 	= -1;
var refrescoTabRecordatorios    = -1;
var iPosTabRecordatorios        =  0;
var vistaAntTabRecordatorios  	= '';



// variable para controlar la salida del modal de Evento tanto a documentos como a contactos
var salidaModalEvento 			= 0;


// variables para salir del modal inmediatamente sin ejecutarse nada
var salirModalContacto 			= false;
var salirModalDocumento 		= false;
// var salirModalDocEditar 		= false;
var salirModalEvento  			= false;
var salirModalInteraccion 		= false;

var salirFormEventoSubmit  		= false;

//variable modal comunicaciones contacto
var comunicacionesContacto 		= null;

// variables para FullCalendar
var calendar            		= null;
var ventanaSobre        		= null;
var ventanaComContactos  		= null;
var aColorFondoEvento   		= ['#0d6efd', '#198754', '#dc3545', '#ffc107', '#212529'];
var sEvents 					= '';


//variables para grupos de contactos
var dataGruposContactos   		= null;
var primeraVezModalGruposContactos = false;
// Inicializar variables para las sumas de elementos de cada uno de los tres grupos
var sumEleGrupo1 				= 0;
var sumEleGrupo2 				= 0;
var sumEleGrupo3 				= 0;

//variables para etiquetas
var dataEtiquetas   			= null;
var etiSeleccionadasContacto	= [];
var etiSeleccionadasFiltro		= [];
var etiSeleccionadasTmp 		= [];
var maxTags           			= 3;
var abrirModalTagsDesde    		= '';
var salidaTagModal  	   		= false;
var et1Cancelar   				= 0;
var et2Cancelar   				= 0;
var et3Cancelar   				= 0;


// variables para etiquetascontactos
var selectedColorTag 			= '#0d6efd'; // Color inicial por defecto
var editingTagIndex 			= null; // Para saber si estamos editando una etiqueta
var editingTagId 				= null; // ID de la etiqueta que se está editando
var MAX_TAGS_CREACION 			= 100; // Límite máximo de etiquetas   

// variables edición documento de Gestión Documental
var docEditado  				= 0;  // 0 = No se edita; 1 = Documento de Microsoft Office (OneDrive); 2 = Documento de LibreOffice (Collabora)
var nomDocEditadoCompleto 		= '';
var OneDriveFileId      		= '';
var OneDriveEditUrl  			= '';


var windowObjectReference1 		= null;

var ventanaMsjCorreo 			= null;



// Array de contactos importados de Apple
var arrayContactosAppleDevice;


// Asociación de colores a los valores del radio
const colorMapTag 				= {
    1: '#0d6efd',   // Azul
    2: '#198754',   // Verde
    3: '#dc3545',   // Rojo
    4: '#ffc107',   // Amarillo
    5: '#212529'    // Negro
};

// variables para carga y ejecución de librwrías
var libIdioCargado  			= '';

// para salir de form Contactos cuando se desplega teléfonos
var salidaTelefonos 			= false;

var cambioPantalla  			= false;

var libsCargadas 				= false;
var versionMccStatic 			= '4.0.0-22';
var mccHtmlDinamicoBase 		= 'https://cdn.jsdelivr.net/gh/mycontactscloud/app@main/';
var mccHtmlDinamicoPermitido 	= new Set([
	'contactos',
	'documentos',
	'interacciones',
	'eventos',
	'gruposcontactos',
	'etiquetascontactos',
	'recordatorios',
	'importargoogle',
	'importarms',
	'importarapple',
	'importarappledevice'
]);
var libCss 						= [
    {
        url: 'https://cdn.jsdelivr.net/npm/bootstrap-table@1.24.0/dist/bootstrap-table.min.css',
        integrity: 'sha256-3V00yGRv9dbwr5nN+Vc8LrakTM3FTTU+qwp+Q8zglSw=',
        crossorigin: 'anonymous'
    },
    {
        url: 'https://cdn.jsdelivr.net/npm/summernote@0.9.1/dist/summernote-lite.min.css',
        integrity: 'sha256-3iZSiBLGKwzUj9d2oikFrL596M8C6ZPahULF5F4xABA=',
        crossorigin: 'anonymous'
    },
    {
        url: 'https://cdn.jsdelivr.net/npm/slim-select@2.11.0/dist/slimselect.min.css',
        integrity: '',
        crossorigin: 'anonymous'
    },
]
var libJs 						= [
    {
        url: 'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js',
        integrity: 'sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=',
        crossorigin: 'anonymous'
    },
    {
        url: 'https://cdn.jsdelivr.net/npm/bootstrap-table@1.24.0/dist/bootstrap-table.min.js',
        integrity: 'sha256-8FO9YknRRlszlyJKmNdv3/bIYXQZOjADPv5LVUpdhwI=',
        crossorigin: 'anonymous'
    },
    {
        url: 'https://cdn.jsdelivr.net/npm/summernote@0.9.1/dist/summernote-lite.min.js',
        integrity: 'sha256-WE15Fp77erC5GsqgCzToOqov7byvkSpItz2kqUfJekc=',
        crossorigin: 'anonymous'
    },

    {
        url: 'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.js',
        integrity: 'sha256-ZztCtsADLKbUFK/X6nOYnJr0eelmV2X3dhLDB/JK6fM=',
        crossorigin: 'anonymous'
    },
    {
        url: 'https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js',
        integrity: 'sha256-hbosw/+FiiD6Sf5uRXvshj6kC1Wp83JeWKlA5i9vYaQ=',
        crossorigin: 'anonymous'
    },        
]
var libResto 					= [	
    {
        url: 'https://cdn.jsdelivr.net/npm/bootstrap-table@1.24.0/dist/bootstrap-table-locale-all.min.js',
        integrity: 'sha256-vdLrfdxDnGXDZE+GcmfTr4bxMeWHv8sqXclhMTO3fio=',
        crossorigin: 'anonymous'
    },
    {
        url: 'https://cdn.jsdelivr.net/npm/summernote@0.9.1/dist/lang/summernote-en-US.min.js',
        integrity: 'sha256-T92iLmPhDObDSHLwM/Y6sGzEbdHFB3mK4PekV1eQg8w=',
        crossorigin: 'anonymous'
    },
    {
        url: 'https://cdn.jsdelivr.net/npm/@fullcalendar/core@6.1.15/locales-all.global.min.js',
        integrity: 'sha256-lzem0W8FCaLegnCNhEQnF4bMnpq9Du4IiUDonSOXCA8=',
        crossorigin: 'anonymous'
    },
    {
        url: 'https://cdn.jsdelivr.net/npm/@fullcalendar/bootstrap5@6.1.15/index.global.min.js',
        integrity: 'sha256-TslkUnYKZuqQj4Ueu1WQesikFvl2DADWslCx3EfBHZM=',
        crossorigin: 'anonymous'
    },
    {
        url: 'https://cdn.jsdelivr.net/npm/jspdf-autotable@3.8.4/dist/jspdf.plugin.autotable.min.js',
        integrity: 'sha256-IiODDPmh7IWvAUzHGzfBsetWbz0YsquAcelq+CLFi9s=',
        crossorigin: 'anonymous'
    },
    {      
        url: 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js',
        integrity: 'sha256-yVBhl8r4CaB1tt7h2g02+xnacVj/6KiOewyWxdhiPJk=',
        crossorigin: 'anonymous'
    },  
    {      
        url: 'https://cdn.jsdelivr.net/npm/slim-select@2.11.0/dist/slimselect.umd.min.js',
        integrity: 'sha256-pqs2C+hu+mL0hLImVMl7ldfMfLO0naLn3NPc8lNEPHM=',
        crossorigin: 'anonymous'
    }, 
    {      
        url: 'https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js',
        integrity: 'sha256-xoh0y6ov0WULfXcLMoaA6nZfszdgI8w2CEJ/3k8NBIE=',
        crossorigin: 'anonymous'
    },     

]



async function opPrincipal(n) {
    //await libsTablas(); // Espera a que se completen las librerías

    switch(n) {
    	case 0:
    		break;
        case 1:
        	cambioDiv('menu', 'contactos', 0, 0);
            break;
        case 2:
            cambioDiv('menu', 'importargoogle', 0, 0);	
            break;
        case 3:
        	cambioDiv('menu', 'importarms', 0, 0);
            break;
        case 4:
            localStorage.setItem('tipoFicheroImportacion', 85); 
            cambioDiv('menu', 'importarexcel', 0, 0);
            break;
        case 5:
        	cambioDiv('menu', 'gruposcontactos', 0, 0);
        	break;
        case 6:
        	cambioDiv('menu', 'confcontactos', 0, 0);
        	break;
        case 7:
        	cambioDiv('menu', 'confeventos', 0, 0);
        	break;
        case 8:
        	cambioDiv('menu', 'cambiaridioma', 0, 0);
        	break;
        case 9:
        	cambioDiv('menu', 'cambiarcontrasena', 0, 0);
        	break;
        case 10:
        	//window.open('planes.html', '_blank');
			//if (window.navigation) {
			    //window.navigation.navigate("planes.html");
			//} else {
			    //window.location.href = "planes.html";
			//}  
			//location.replace("planes.html");
			abrirPlanesProveedor();
        	break;
        case 11:
			abrirGestionSuscripcion();
        	break;
        case 12:
        	redirigirAvotacion();
        	break;
        case 13:
			iniFullalendar('timeGridDay');
        	break;
        case 14:
        	iniFullalendar('timeGridWeek');
        	break;
        case 15:
        	iniFullalendar('dayGridMonth');
        	break;
       	case 16:
       		iniFullalendar('listWeek');
        	break;
        case 17:
        	cambioDiv('menu', 'etiquetascontactos', 0, 0);
        	break; 
        case 18:
        	cambioDiv('menu', 'recordatorios', 0, 0);
        	break; 
       case 19:
       		cambioDiv('menu', 'politicaprivacidad', 0, 0);
       		break;
       case 20:
       		cambioDiv('menu', 'condicionesuso', 0, 0);
       		break;
       case 21:
       		cambioDiv('menu', 'consulta', 0, 0);
       		break;
      	case 22:
			if (localStorage.getItem('rolUsuario') !== 'owner') return;
       		cambioDiv('menu', 'desuscribirse', 0, 0);
       		break;
        case 23:
            cambioDiv('menu', 'importarapple', 0, 0);	
            break;
        case 24:
            cambioDiv('menu', 'importarappledevice', 0, 0);	
            break;
        case 25:
            if (!mccEsPropietario()) return;
            cambioDiv('menu', 'dashboard', 0, 0);
            break;
        case 26:
            if (!mccEsPropietario()) return;
            cambioDiv('menu', 'equipo', 0, 0);
            break;
        default:
            // Código para manejar cualquier otro caso o un valor de `n` no esperado
            console.log('Opción no válida');
            break;
    }
}

function abrirSuscripcion(t) {
    if ((localStorage.getItem('nomUs') == 'admin') || (localStorage.getItem('esAdministrador'))) {
        let formData4 = new FormData();
        formData4.append('tipoOperacion', t);
        async function datosDevueltos4() {
            const response4 = await fetch('https://' + window.location.host + '/stripePortal', {
                method: 'POST',
                body: formData4
            });
            const data = await response4.json();
            return data;
        };
        datosDevueltos4().then((data) => {
            if (data == 'N/D') {
                if (t == 1) {
                    var s = "En cualquier momento podrá efectuar la cancelación de su plan, seleccionar otro tipo de plan o cambiar la periodicidad de pago de su plan actual";
                } else {
                    var s = "Cuando adquiera el primer plan, se renueve el plan actual o cambie a otro plan, recibirá un correo electrónico con la factura y el recibo de pago. En esta ventana podrá modificar los datos de facturación de su empresa así como los datos de contacto";
                }
                modal1('My Contacts Cloud', 'Opción sólo disponible después de adquirir un plan' + '<br><br>' + s, myTextDataList);
            } else {
                //window.location.assign(data);
				window.open(data, '_blank');
            }
        }).catch(error => {
            alert(error.message);
        });  
    }
    return false;
};


function regTabla(modal, winVar, n) {
    if ((n == 2) || (n == 4)) {
        if (modal == 'modalContacto')    { 
        	if (filaNoSeleccionada('tabContactos', 	'success', msjModContacto)) 		{ return false; } 
        }
        if (modal == 'modalDocumento')   { 
        	if (filaNoSeleccionada('tabDocumentos', 'success1', msjModDocumento))  		{ return false; } 
        }

        if (modal == 'modalInteraccion')   { 
        	if (filaNoSeleccionada('tabInteracciones', 'success3', msjModInteraccion))  { return false; } 
        }        
    }
    window[winVar] = n;
    var myModal = new bootstrap.Modal(document.getElementById(modal));
    myModal.show();
}



function buscarAhora (tabla, control) {
    var elementoTabla = document.getElementById(tabla);
    if (!elementoTabla || typeof window.jQuery !== 'function' || typeof window.jQuery.fn.bootstrapTable !== 'function') {
        return false;
    }

    var elementoControl = document.getElementById(control);
    if (!elementoControl) {
        var controlesBusqueda = document.querySelectorAll('input[type="search"]');
        for (var i = 0; i < controlesBusqueda.length; i++) {
            var manejadorCambio = controlesBusqueda[i].getAttribute('onchange') || '';
            if (manejadorCambio.indexOf(tabla) !== -1) {
                elementoControl = controlesBusqueda[i];
                break;
            }
        }
    }

    if (!elementoControl) {
        return false;
    }

    window.jQuery(elementoTabla).bootstrapTable('resetSearch', elementoControl.value);
    return false;
}


function seleccionarFilaTablaSiExiste(tabla, clase, variableSeleccion, campoId, indice, idPreferido) {
    var elementoTabla = document.getElementById(tabla);
    if (!elementoTabla || typeof window.jQuery !== 'function' || typeof window.jQuery.fn.bootstrapTable !== 'function') {
        window[variableSeleccion] = '';
        return false;
    }

    var tablaBootstrap = window.jQuery(elementoTabla);
    var datos = tablaBootstrap.bootstrapTable('getData');
    if (!Array.isArray(datos) || datos.length === 0) {
        window[variableSeleccion] = '';
        return false;
    }

    var fila = null;
    if (idPreferido !== undefined && idPreferido !== null && idPreferido !== '') {
        fila = datos.find(function (elemento) {
            return elemento && String(elemento[campoId]) === String(idPreferido);
        }) || null;
    }

    if (!fila) {
        var posicion = Number.isInteger(indice) ? indice : 0;
        if (posicion < 0 || posicion >= datos.length) {
            posicion = 0;
        }
        fila = datos[posicion];
    }

    if (!fila || fila[campoId] === undefined || fila[campoId] === null) {
        window[variableSeleccion] = '';
        return false;
    }

    selRowTab(tabla, clase, variableSeleccion, fila[campoId]);
    return true;
}


function valorTarjeta (s) {
    $('#' + s).bootstrapTable('toggleView');
    return false;
}


function seleccionarCombo(nombre, valor) {
    var options = document.getElementsByName(nombre)[0];
    if (options) {
        for (var i = 0; i < options.length; i++) {       	
            if (options[i].value == valor) {
                options[i].defaultSelected = true;
            } else {
                options[i].defaultSelected = false;
            }
        }
    }
    return false;
}

function seleccionarRadio(nombre, valor) {
    var options = document.getElementsByName(nombre);
    if (options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].value == valor) {
                options[i].defaultChecked = true;
            } else {
                options[i].defaultChecked = false;
            }
        }
    }
    return false;
}


function dValorRadio(nombre) {
    var options = document.getElementsByName(nombre);
    if (options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].checked) {
                return options[i].value;
            }
        }
    }
}

function desactivarRadio(nombre, valor) {
    var options = document.getElementsByName(nombre);
    if (options) {
        for (var i = 0; i < options.length; i++) {
            options[i].disabled = valor; 
        }
    }
}


function valorEnlace(sText, tipo) {
  // tipo = 1 teléfono, 2 sms, 3 whatsapp

  // para teléfono y sms puede haber ceros delante y el signo +
    // para whatsapp eliminar los ceros de delante por si viene
    // con un prefijo internacional con ceros delante, por ejemplo 0034

    let longitud        = sText.length;
    let numeros         = '';
    if (tipo == 1 || tipo == 2) {
        var cadena      = '1234567890+';
    } else {
        var cadena      = '1234567890';
    }

    for (x = 0; x <= longitud; x++) {
        var ss11 = sText.substr(x, 1);
        if (cadena.indexOf(ss11) != -1) {
            numeros = numeros + ss11;
        }
    }

    if (numeros.length == 0) { numeros = '0'; }
    switch(tipo) {
      case 1:
          return numeros;
          break;
      case 2:
          return numeros;
          break;
      case 3:
          return parseFloat(numeros);
          break;
    }
} 

function mostrarColumnas (s, n) {
    window.numTablaMostrarColumnas = n;
    let modalCol = new bootstrap.Modal(document.getElementById(s));
    modalCol.show();
}


function valorCasilla (casilla, tabla) {
    if (casilla.checked == true) {
        $(tabla).bootstrapTable('showColumn', casilla.value);
    } else {
        $(tabla).bootstrapTable('hideColumn', casilla.value); 
    }
    return false;
}



function cambiarAltoTabla(tablaId, padding) {
    if (typeof window.jQuery !== 'function' || typeof window.jQuery.fn.bootstrapTable !== 'function') {
        return false;
    }

    var tablaBootstrap = window.jQuery('#' + tablaId);
    if (!tablaBootstrap.length) {
        return false;
    }

    // Usar setTimeout para retrasar la ejecución
    //setTimeout(() => {
        // Obtener la altura de la ventana
        var alturaVentana = document.documentElement.clientHeight;

        // Determinar la altura del elemento correspondiente
        var alturaFila = 0;
        if (tablaId === "tabContactos") 			{ alturaFila = window.jQuery("#filaContactos").height(); }
        if (tablaId === "tabImportGoogle") 			{ alturaFila = window.jQuery("#filaGoogle").height(); }
        if (tablaId === "tabImportMs") 				{ alturaFila = window.jQuery("#filaMs").height(); } 
        if (tablaId === "tabImportApple") 			{ alturaFila = window.jQuery("#filaApple").height(); }
        if (tablaId === "tabImportAppleDevice") 	{ alturaFila = window.jQuery("#filaAppleDevice").height(); }
        if (tablaId === "tabDocumentos") 			{ alturaFila = window.jQuery("#filaDocumentos").height(); }
        if (tablaId === "tabInteracciones") 		{ alturaFila = window.jQuery("#filaInteracciones").height(); }
        if (tablaId === "tabRecordatorios") 		{ alturaFila = window.jQuery("#filaRecordatorios").height(); }

        alturaFila = Number.isFinite(alturaFila) ? alturaFila : 0;

        // Calcular la altura disponible para la tabla
        var alturaTabla = alturaVentana - alturaFila - padding;

        // Ajustar la altura de la tabla utilizando Bootstrap Table
        if (tablaBootstrap.data("bootstrap.table") || tablaBootstrap.closest(".bootstrap-table").length) {
            tablaBootstrap.bootstrapTable("resetView", { height: alturaTabla });
        }
    //}, 400); // 1000 ms = 1 segundo de retraso

    return false;
}





function formatoFechaHora(valor) {
    return valor.substring(8, 10) + '-' + valor.substring(5, 7) + '-' + valor.substring(0, 4) + ' ' + valor.substring(11, 13) + ':' + valor.substring(14, 16);
}

function sustituirT(v) {
    var longitudV   = v.length;
    var sNuevo      = '';
    for (var x = 0; x <= longitudV; x++) {
        var s = v.substr(x, 1);
        if (s == 'T') { s = ' '; }
        sNuevo += s;
    }
    return sNuevo;
}


function selPrimeraFila(nombreTabla, nombreClase) {
	var numFilas = Object.keys($('#' + nombreTabla).bootstrapTable('getData')).length;
	if (numFilas > 0) {
		var tabla = document.getElementById(nombreTabla);
		//remover la clase de la fila con dicha clase
		var filaConClase = tabla.querySelector(`.${nombreClase}`);
	    if (filaConClase) {
	      filaConClase.classList.remove(nombreClase);
	    }
		//asignar la clase a la primera fila de la tabla
		var primeraFila = tabla.querySelector("tbody tr:first-child");
		if (primeraFila) {
		  primeraFila.classList.add(nombreClase);
		}	
	}
}


function seleccionarFila(tabla, winVar, nomCampo, clase) {
    var numFilas = Object.keys($('#' + tabla).bootstrapTable('getData')).length;
    var ind = 0;

    if (numFilas != 0)  {

        let rows = Array.from(document.querySelectorAll('tr.' + clase));
        rows.forEach(row => {  row.classList.remove(clase);  });

        if (window[winVar] == '') {
            document.getElementById(tabla).rows[1].classList.add(clase);
            window[winVar] = $('#' + tabla).bootstrapTable('getData')[0][nomCampo];
            ind = 1;
        } else {
            for (i = 0; i < numFilas; i++) {
                if ($('#' + tabla).bootstrapTable('getData')[i][nomCampo] == window[winVar]) {
                    ind = i;
                    document.getElementById(tabla).rows[i + 1].classList.add(clase);
                    break;
                }
            }       
        }
    } else {
        ind = -1;
        window[winVar] = '';
        $('.' + clase).removeClass(clase);
    }
    // devuelve índice
    return ind;
}


function filaNoSeleccionada(tabla, clase, idMsj) {
    let numFilas = Object.keys($('#' + tabla).bootstrapTable('getData')).length;
    let filaNoSeleccionadaB = true;
    if (numFilas != 0)  {
        for (i = 0; i < numFilas; i++) {
        	let v = document.getElementById(tabla).rows[i + 1];
        	if (v != undefined) {
	            if (document.getElementById(tabla).rows[i + 1].classList.contains(clase)) { 
	            	filaNoSeleccionadaB = false; 
	            	break;
	            };        		
        	}
        }

        if (filaNoSeleccionadaB) { 
            volverAtras = true;
            toastSelFila(tExp('Selecciona una fila', ''), idMsj); 
        }
    } else {
        volverAtras = true;
        toastSelFila(tExp('Añade primero una fila', ''), idMsj);
    }
    return filaNoSeleccionadaB;
}


function acReg(t, c, f, d) { // table, class, field, divMsj
	// Este código es muy bueno ya que busca si hay alguna fila con la clase. 
	// En caso de no hallar ninguna fila con la clase, avisa al usuario para seleccionar una fila
	// y en caso de encontrar una fila con la clase, devuelve el valor del id (identificador único) de la fila

	var numFilas 		= Object.keys($('#' + t).bootstrapTable('getData')).length;
	var oriInd 			= null;
	var valorIdTabla 	= null;	
	var rows 			= Array.from(document.querySelectorAll('tr.' + c));

	if (rows.length == 0) {
	    if (numFilas != 0)  {
	        toastSelFila(tExp('Selecciona una fila', ''), d);
	    } else {
	        toastSelFila(tExp('Añade primero una fila', ''), d);
	    }
	} else {
		rows.forEach((row) => {
		    oriInd 			= Array.from(row.parentElement.querySelectorAll('tr')).indexOf(row);
		    valorIdTabla 	= $('#' + t).bootstrapTable('getData')[oriInd][f];
		});
	}

    return [numFilas, oriInd, valorIdTabla];

}

function eliReg(t, c, f, d) {
	const [numFilas, oriInd, valorIdTabla] = acReg(t, c, f, d);
	if (oriInd != null) {
		$('#' + t).bootstrapTable('removeByUniqueId', valorIdTabla);
    	//asignar la clase a otra fila
    	if (numFilas - 1 == oriInd) { //si es la última fila ...
		    if (numFilas > 1) { // si hay más de una fila
		    	document.getElementById(t).rows[oriInd].classList.add(c);
		    }
    	} else {
    		document.getElementById(t).rows[oriInd + 1].classList.add(c);
    	}
	};
}



function eliminarReg(tabla, winVar, nomCampo, nomClase) {
    var totalFilas 				= Object.keys($('#' + tabla).bootstrapTable('getData')).length;
    var indiceFilaAeliminar 	= obtenerIndicePorId(tabla, nomCampo, window[winVar]);
    var indiceFilaAseleccionar 	= -1;

    if ((indiceFilaAeliminar + 1) == (totalFilas)) {  // es el último de la fila
    	if (totalFilas == 1) {
    		indiceFilaAseleccionar = -1; // no hay más filas
    	} else {
    		indiceFilaAseleccionar = indiceFilaAeliminar - 1;
    	}
    } else {
    	indiceFilaAseleccionar = indiceFilaAeliminar + 1;
    }

	if (indiceFilaAseleccionar != -1) {
		var valorAseleccionar = $('#' + tabla).bootstrapTable('getData')[indiceFilaAseleccionar][nomCampo]; // valor a seleccionar
	}

	$('#' + tabla).bootstrapTable('removeByUniqueId', window[winVar]);
	// después de remover la fila de la tabla me espero a que se actualice
	setTimeout(function() {
		if (indiceFilaAseleccionar == -1) {
			// nos salimos pues ya se removió la fila seleccionada
			window[winVar] 	= '';
			return false;
		} else {
    		var nuevoIndice = obtenerIndicePorId(tabla, nomCampo, valorAseleccionar);
    		window[winVar] 	= valorAseleccionar;
    		irAPaginaConRegistro(tabla, nuevoIndice, nomClase, winVar, valorAseleccionar);
		}
	}, 500);

    return false;
}


function indice(valor, nomCampo, tabla) {
    var a        = -1;
    var tabDatos = $('#' + tabla).bootstrapTable('getData');
    tabDatos.filter(function (o, index) {
        if (o[nomCampo] === valor) { a = index; }
    });
    return a; 
}

function formatoSepMilesSinDec(valor) {
    return parseInt(valor).toLocaleString();
}


function formatoFecha(valor) {
    if (!valor) return '';

    const formatos = {
        'DD-MM-YYYY': ['CL', 'ES', 'AR', 'UY', 'BO', 'PY', 'VE', 'PE', 'EC', 'CO', 'MX', 'CR', 'GT', 'HN', 'NI', 'PA', 'SV', 'BR', 'PT', 'IT', 'FR', 'DE', 'GR', 'TR', 'CZ', 'SK', 'PL'],
        'MM/DD/YYYY': ['US', 'CA', 'PH', 'IL', 'SA', 'EG', 'QA', 'KW', 'AE', 'JO', 'LB'],
        'YYYY/MM/DD': ['CN', 'JP', 'KR', 'TW'],
        'DD.MM.YYYY': ['RU', 'DE', 'AT', 'CH']
    };

    const id = localStorage.getItem('idiomaPais') || 'default';
    const pais = id.split('-').pop().toUpperCase();
    const formato = Object.keys(formatos).find(fmt => formatos[fmt].includes(pais)) || 'DD/MM/YYYY';

    switch (formato) {
        case 'DD-MM-YYYY':
            return valor.substring(8, 10) + '-' + valor.substring(5, 7) + '-' + valor.substring(0, 4);
        case 'MM/DD/YYYY':
            return valor.substring(5, 7) + '/' + valor.substring(8, 10) + '/' + valor.substring(0, 4);
        case 'YYYY/MM/DD':
            return valor.substring(0, 4) + '/' + valor.substring(5, 7) + '/' + valor.substring(8, 10);
        case 'DD.MM.YYYY':
            return valor.substring(8, 10) + '.' + valor.substring(5, 7) + '.' + valor.substring(0, 4);
        default:
            return valor.substring(8, 10) + '/' + valor.substring(5, 7) + '/' + valor.substring(0, 4);
    }
}





function formatoFechaHoraInternacional(valor) {
    if (valor == '') {
        return '';
    } else {
        var id 		= localStorage.getItem('idiomaPais') || 'default';
        var pais 	= id.split('-').pop().toUpperCase();  // Obtenemos las iniciales del país

        // Extraemos fecha y hora
        var anio 	= valor.substring(0, 4);
        var mes 	= valor.substring(5, 7);
        var dia 	= valor.substring(8, 10);
        var hora 	= parseInt(valor.substring(11, 13), 10);
        var minuto 	= valor.substring(14, 16);

        // Determinamos si el país usa formato de 12 horas
        var usaFormato12Horas = ['US', 'CA', 'PH', 'IL', 'SA', 'EG', 'QA', 'KW', 'AE', 'JO', 'LB'].includes(pais);
        var sufijo = '';

        if (usaFormato12Horas) {
            sufijo = hora >= 12 ? 'PM' : 'AM';
            hora = hora % 12 || 12;  // Convierte 0 a 12 para el formato de 12 horas
        }

        // Convertimos la hora a string y le agregamos el sufijo si aplica
        var horaStr = hora.toString().padStart(2, '0') + ':' + minuto + (usaFormato12Horas ? ' ' + sufijo : '');

        switch (pais) {
            // Formato DD-MM-YYYY HH:MM
            case 'CL':  // Chile
            case 'ES':  // España
            case 'AR':  // Argentina
            case 'UY':  // Uruguay
            case 'BO':  // Bolivia
            case 'PY':  // Paraguay
            case 'VE':  // Venezuela
            case 'PE':  // Perú
            case 'EC':  // Ecuador
            case 'CO':  // Colombia
            case 'MX':  // México
            case 'CR':  // Costa Rica
            case 'GT':  // Guatemala
            case 'HN':  // Honduras
            case 'NI':  // Nicaragua
            case 'PA':  // Panamá
            case 'SV':  // El Salvador
            case 'BR':  // Brasil
            case 'PT':  // Portugal
            case 'IT':  // Italia
            case 'FR':  // Francia
            case 'DE':  // Alemania
            case 'GR':  // Grecia
            case 'TR':  // Turquía
            case 'CZ':  // República Checa
            case 'SK':  // Eslovaquia
            case 'PL':  // Polonia
                return dia + '-' + mes + '-' + anio + ' ' + horaStr;

            // Formato MM/DD/YYYY HH:MM AM/PM para ciertos países
            case 'US':  // Estados Unidos
            case 'CA':  // Canadá
            case 'PH':  // Filipinas
            case 'IL':  // Israel
            case 'SA':  // Arabia Saudita
            case 'EG':  // Egipto
            case 'QA':  // Qatar
            case 'KW':  // Kuwait
            case 'AE':  // Emiratos Árabes Unidos
            case 'JO':  // Jordania
            case 'LB':  // Líbano
                return mes + '/' + dia + '/' + anio + ' ' + horaStr;

            // Formato YYYY/MM/DD HH:MM
            case 'CN':  // China
            case 'JP':  // Japón
            case 'KR':  // Corea del Sur
            case 'TW':  // Taiwán
                return anio + '/' + mes + '/' + dia + ' ' + horaStr;

            // Formato DD.MM.YYYY HH:MM
            case 'RU':  // Rusia
            case 'DE':  // Alemania
            case 'AT':  // Austria
            case 'CH':  // Suiza
                return dia + '.' + mes + '.' + anio + ' ' + horaStr;

            // Por defecto: Formato DD/MM/YYYY HH:MM
            default:
                return dia + '/' + mes + '/' + anio + ' ' + horaStr;
        }
    }
}




function primerDiaSemana() {
    var id = localStorage.getItem('idiomaPais') || 'default';
    var pais = id.split('-').pop().toUpperCase();  // Obtenemos las iniciales del país

    switch (pais) {
        // Países donde el primer día es Domingo (0)
        case 'US':  // Estados Unidos
        case 'CA':  // Canadá
        case 'MX':  // México
        case 'AR':  // Argentina
        case 'CO':  // Colombia
        case 'PE':  // Perú
        case 'VE':  // Venezuela
        case 'EC':  // Ecuador
        case 'BO':  // Bolivia
        case 'CL':  // Chile
        case 'CR':  // Costa Rica
        case 'DO':  // República Dominicana
        case 'PA':  // Panamá
        case 'PR':  // Puerto Rico
        case 'SV':  // El Salvador
        case 'GT':  // Guatemala
        case 'HN':  // Honduras
        case 'NI':  // Nicaragua
        case 'PY':  // Paraguay
        case 'UY':  // Uruguay
        case 'PH':  // Filipinas
        case 'SA':  // Arabia Saudita
        case 'EG':  // Egipto
        case 'QA':  // Qatar
        case 'KW':  // Kuwait
        case 'AE':  // Emiratos Árabes Unidos
        case 'JO':  // Jordania
        case 'LB':  // Líbano
        case 'IL':  // Israel (domingo es el primer día)
            return 0; // domingo

        // Países donde el primer día es Lunes (1)
        case 'ES':  // España
        case 'PT':  // Portugal
        case 'GB':  // Reino Unido
        case 'FR':  // Francia
        case 'DE':  // Alemania
        case 'IT':  // Italia
        case 'NL':  // Países Bajos
        case 'FI':  // Finlandia
        case 'SE':  // Suecia
        case 'NO':  // Noruega
        case 'DK':  // Dinamarca
        case 'RU':  // Rusia
        case 'PL':  // Polonia
        case 'CN':  // China
        case 'JP':  // Japón
        case 'KR':  // Corea del Sur
        case 'TW':  // Taiwán
        case 'CH':  // Suiza
        case 'AU':  // Australia
        case 'NZ':  // Nueva Zelanda
        case 'IE':  // Irlanda
        case 'HU':  // Hungría
        case 'TR':  // Turquía
        case 'CZ':  // República Checa
        case 'SK':  // Eslovaquia
        case 'GR':  // Grecia
        case 'RO':  // Rumanía
            return 1; // lunes

        // Por defecto: lunes (usualmente es la convención en la mayoría de los países)
        default:
            return 1; // lunes
    }
}





function formatoBool(valor, simbol) {
    if (textoEnVezDeIcono) { simbol = false; }
    if (valor == 0) {
        return '';
    } else {
        if (simbol) {
            return '<i class="bi bi-check-circle-fill text-success fw-bold"></i><title>Sí</title>';
        } else { return 'Sí'; }
    }           
}

function formatoPeriodicidad(valor) {
    if (valor == '')    { return ''; }
    if (valor == 'y')   { return 'Diaria'; }
    if (valor == 'ww')  { return 'Semanal'; }
    if (valor == 'm')   { return 'Mensual'; }
    if (valor == 'q')   { return 'Trimestral'; }
}

function formatBanco (value, longitudMax) {
    return '0'.repeat((longitudMax - value.length)) + value;
}

function cadenaCeros(oldS, numCeros) {
    oldS        = oldS.trim();
    var cadena  = '1234567890';
    var longS   = oldS.length;
    var newS    = '';
    var s       = '';
    for (let x = 0; x <= longS; x++) {
        s = oldS.substr(x, 1);
        if (cadena.indexOf(s) != -1) { newS += s; }
    }
    return formatBanco(newS, numCeros);     
}

function devBool(v) {
    if ((v == 0) || (v == false)) {
        return false;
    } else {
        return true;
    }
}

function porcentajeFocus(v) {
    sMask1ant = v;
}

function porcentajeBlur(n) {
    let n1 = document.getElementById(n); 
    let sMask1 = n1.value;
    if (sMask1 != sMask1ant) {
      let numSinMascara = quitarMascara(sMask1, ',');
      if (numSinMascara > 100) { numSinMascara = 100; }
      n1.value = numSinMascara.toFixed(2).toString().replace(".", ",") + " %";
    }    
}

function mascara (numDecimales, separadorDecimal, separadorMiles, simboloDivisa) {
    var sDec = '';
    if (numDecimales > 0) {
        sDec = separadorDecimal + '0'.repeat(numDecimales);
    }
    return $.trim('#' + separadorMiles + '##0' + sDec + ' ' + simboloDivisa);
}

function formatoNum (número, numDecimales, separadorDecimal, separadorMiles, simboloDivisa) {
    var nstr = número.toFixed(numDecimales).toString();
    nstr += '';
    x  = nstr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? separadorDecimal + x[1] : '';
    var rgx = /(\d+)(\d{3})/;

    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + separadorMiles + '$2');

    return $.trim(x1 + x2 + ' ' + simboloDivisa);
}

function quitarMascara(sMask1, separadorDecimal) {
    var longitudMask1               = sMask1.length;
    var sSinMask1                   = '';
    var cadena                      = '1234567890' + separadorDecimal;
    for (var x = 0; x <= longitudMask1; x++) {
        var s = sMask1.substr(x, 1);
        if (cadena.indexOf(s) != -1) {
            if (s == ',') { s = '.' }
            sSinMask1 = sSinMask1 + s;
        }
    }
    if (sSinMask1.length == 0) { sSinMask1 = '0'; }
    return parseFloat(sSinMask1);
}

function abrirGoogleMaps(a, b, c, d, e) {
    //window.open(rutaGoogleMaps(a, b, c, d, e), '_blank');
    var r = rutaGoogleMaps(a, b, c, d, e);
    if (r) { hiperenlace(r, 4); }
    return false;
}

function rutaGoogleMaps(a, b, c, d, e) {
    let direc = '';
    a = a || '';
    b = b || '';
    c = c || '';
    d = d || '';
    e = e || '';
    if (a != '') { direc = direc + a; }
    if (b != '') { direc = direc + ',' + b; }
    if (c != '') { direc = direc + ',' + c; }
    if (d != '') { direc = direc + ',' + d; }
    if (e != '') { direc = direc + ',' + e; }
    if (direc != '') {
        return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(direc);
    } else {
        return '';
    }
}


function clienteCorreo(servicio) {
    localStorage.setItem("clienteCorreo", servicio);
    document.getElementById("btnClienteCorreo").textContent = tExp(servicio, '');
}

function contextoDocumentosCorreo(contextoCorreo) {
	var contexto = {};
	if (contextoCorreo && typeof contextoCorreo === 'object') {
		contexto = Object.assign({}, contextoCorreo);
	} else if (contextoCorreo) {
		contexto.numGesDoc = contextoCorreo;
	}

	var numero = contexto.numGesDoc || contexto.ccn || contexto.contactoId || '';
	if (!numero) {
		var ccnControl = document.getElementById('ccn_contactos');
		if (ccnControl && ccnControl.value && ccnControl.value !== '0') {
			numero = ccnControl.value;
		}
	}
	if (!numero && typeof window.idTabContactos !== 'undefined' && window.idTabContactos) {
		numero = window.idTabContactos;
	}

	if (!contexto.prefijo) {
		contexto.prefijo = localStorage.getItem('prefijo') || '';
	}
	contexto.tfGesDoc = contexto.tfGesDoc || contexto.tf || (numero ? 85 : '');
	contexto.numGesDoc = numero || '';

	if (!contexto.nombreContacto) {
		var perControl = document.getElementById('per_contactos');
		if (perControl && perControl.value) {
			contexto.nombreContacto = perControl.value;
		} else if (typeof nombrePersonaContacto !== 'undefined') {
			contexto.nombreContacto = nombrePersonaContacto;
		}
	}

	return contexto;
}

function parametrosDocumentosCorreo(contextoCorreo) {
	var contexto = contextoDocumentosCorreo(contextoCorreo);
	if (!contexto.prefijo || !contexto.tfGesDoc || !contexto.numGesDoc || String(contexto.numGesDoc) == '0' || !isNumeric(contexto.numGesDoc)) {
		localStorage.removeItem('mcc_correo_docs_context');
		return '';
	}

	localStorage.setItem('mcc_correo_docs_context', JSON.stringify(contexto));
	return '&prefijo=' + encodeURIComponent(contexto.prefijo) +
		'&tfGesDoc=' + encodeURIComponent(contexto.tfGesDoc) +
		'&numGesDoc=' + encodeURIComponent(contexto.numGesDoc) +
		'&nombreContacto=' + encodeURIComponent(contexto.nombreContacto || '');
}

function parametrosDocumentosCorreoGuardado() {
	var contexto = {};
	try {
		contexto = JSON.parse(localStorage.getItem('mcc_correo_docs_context') || '{}');
	} catch (e) {
		contexto = {};
	}
	return parametrosDocumentosCorreo(contexto);
}

function prepararVentanaMsjCorreo() {
	if (ventanaMsjCorreo && !ventanaMsjCorreo.closed) {
		return ventanaMsjCorreo;
	}

	try {
		localStorage.removeItem('mcc_msjcorreo_url');
		localStorage.removeItem('mcc_msjcorreo_error');
		ventanaMsjCorreo = window.open(
			'https://' + window.location.host + '/app/msjcorreo_wait.html?ts=' + Date.now(),
			'ventanaMsjCorreo',
			`height=${screen.height},width=${screen.width},menubar=no,titlebar=yes,toolbar=no`
		);
		if (ventanaMsjCorreo) {
			try { ventanaMsjCorreo.moveTo(0, 0); } catch (e) {}
		}
	} catch (e) {
		ventanaMsjCorreo = null;
	}

	return ventanaMsjCorreo;
}

function notificarCambioDocumentosCorreo() {
	if (localStorage.getItem('mcc_docs_email_mode') === '1') {
		localStorage.setItem('mcc_docs_email_refresh_at', String(Date.now()));
	}
}

async function hiperenlace(sText, tipo, contextoCorreo) {
	if (!dEstSuscrip()) { return false; }
    // tipo = 1 teléfono, 2 sms, 3 whatsapp, 4 www, 5 mail
    if (tipo == 4) { 
        //window.open(sText, '_blank');
        abrirVentanaUnica(sText);
    } else if (tipo == 6) { // linkedin
        //window.open('https://www.linkedin.com/in/' + sText, '_blank'); 
        abrirVentanaUnica('https://www.linkedin.com/in/' + sText);
    } else if (tipo == 7) { // telegram
        //window.open('https://t.me/' + sText, '_blank'); 
        abrirVentanaUnica('https://t.me/' + sText);
    } else if (tipo == 8) { // messenger
        //window.open('https://m.me/' + sText, '_blank'); 
        abrirVentanaUnica('https://m.me/' + sText);
    } else if (tipo == 9) { // x
    	//window.open('https://twitter.com/messages/compose?recipient_id=' + sText, '_blank'); 
    	abrirVentanaUnica('https://twitter.com/messages/compose?recipient_id=' + sText);
    } else if (tipo == 10) { // instagram
        //window.open('https://ig.me/m/' + sText, '_blank');
        abrirVentanaUnica('https://ig.me/m/' + sText); 
    } else if (tipo == 5) {
        //window.open('mailto:' + sText, '_blank');

	    var url 			= "";
	    var encodedEmail 	= encodeURIComponent(sText);
	    var service 		= localStorage.getItem("clienteCorreo");
	    if (service !== "1" && service !== "2") {
	    	service = "5";
	    }

	    switch (service) {
	      case "1": // Gmail
	      		var docsParams = parametrosDocumentosCorreo(contextoCorreo);
				var g_from = localStorage.getItem("g_user_email") || localStorage.getItem("correoElec") || "";
						url = `https://` + window.location.host + `/app/msjcorreo.html?v=20260714-2&provider=gmail&from=${encodeURIComponent(g_from)}&to=${encodeURIComponent(sText)}` + docsParams;
	        break;
	      case "2": // Outlook
	      		var docsParams = parametrosDocumentosCorreo(contextoCorreo);
				var ms_from = localStorage.getItem("ms_user_email") || localStorage.getItem("correoElec") || "";
						url = `https://` + window.location.host + `/app/msjcorreo.html?v=20260714-2&provider=outlook&from=${encodeURIComponent(ms_from)}&to=${encodeURIComponent(sText)}` + docsParams;
		    	break;
	      case "5": // My Contacts Cloud
	      		var docsParams = parametrosDocumentosCorreo(contextoCorreo);
				var mcc_from = localStorage.getItem("correoElec") || "";
						url = `https://` + window.location.host + `/app/msjcorreo.html?v=20260714-2&provider=mcc&from=${encodeURIComponent(mcc_from)}&to=${encodeURIComponent(sText)}` + docsParams;
				break;
	      case "3": // iCloud
		    navigator.clipboard.writeText(sText).then(() => {
		      alert(tExp('📋 Dirección copiada al portapapeles: ', '') + sText);
		      // Luego abrimos iCloud Mail
		      //window.open("https://www.icloud.com/mail/", "_blank");
		      abrirVentanaUnica('https://www.icloud.com/mail/');
		    })
	        return;	        
	      case "4": // Yahoo
	      	//alert('entrada');
	        url = `https://compose.mail.yahoo.com/?to=${encodedEmail}`;
	        break;
	      default: // Dispositivo
	        url = `mailto:${sText}`;
	    }
	    if (url != '') {
	    	//window.open(url, "_blank");
	    	//abrirVentanaUnica(url);
	    	abrirVentanaMsjCorreo(url);
	    }
	    
    } else {
        // para teléfono y sms puede haber ceros delante y el signo +
        // para whatsapp eliminar los ceros de delante por si viene
        // con un prefijo internacional con ceros delante, por ejemplo 0034
        var longitud    = sText.length;
        var numeros     = '';
        
        if (tipo == 1 || tipo == 2) {
            var cadena      = '1234567890+';
        } else {
            var cadena      = '1234567890';
        }
        for (var x = 0; x <= longitud; x++) {
            var s = sText.substr(x, 1);
            if (cadena.indexOf(s) != -1) {
                numeros = numeros + s;
            }
        }
        if (numeros.length != 0) {
        	var s = '';
	        if (tipo == 1) { s = 'tel:' + numeros; }
	        if (tipo == 2) { s = 'sms:' + numeros; }
	        if (tipo == 3) { s = 'https://wa.me/' + parseFloat(numeros); }
			//window.open(s, '_blank');   
			abrirVentanaUnica(s);     	
        }
    }
    return false;
}


function devDato(s, i, d) {
    // s es la cadena SQL
    // i es id del input text
    // si d = true es defaultValue,  false es value
    let formData4 = new FormData();
    formData4.append('queries', s);
    formData4.append('esBDempresas', 0);
    async function datosDevueltos4() {
        const response4 = await fetch('https://' + window.location.host + '/multiselect', {
            method: 'POST',
            body: formData4
        });
        const data = await response4.json();
        return data;
    };
    datosDevueltos4().then((data) => { 
        let s = data[0].datoDevuelto || '';
        if (d == true) { i.defaultValue = s; } else { i.value = s; }
    }).catch(error => {
        if (d == true) { i.defaultValue = ''; } else { i.value = ''; }
        //alert(error.message);
    })  
}


function modal1(t, m, i) {
    let h = '<div class="modal" id="dialogo1" tabindex="-1">';
    h +=    '   <div class="modal-dialog">';
    h +=    '       <div class="modal-content">';
    h +=    '           <div class="modal-header bg-light">';
    h +=    '               <h5 class="modal-title">' + t + '</h5>';
    h +=    '               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="' + tExp("Cerrar", "") + '"></button>';
    h +=    '          </div>';
    h +=    '          <div class="modal-body">';
    h +=    '              <div align="center">';
    h +=    '                  <p>' + m + '</p>';
    h +=    '              </div>';
    h +=    '          </div>';
    h +=    '      </div>';
    h +=    '  </div>';
    h +=    '</div>';
    i.innerHTML = h;
    let v = new bootstrap.Modal(dialogo1);
    v.show();
}


function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function tooltips() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        this.addEventListener('hide.bs.tooltip', function () {
            new bootstrap.Tooltip(tooltipTriggerEl)
        })
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });    
}

function barraPaginacion (t) {
    if (window.innerWidth <= 992) {
        $(t).bootstrapTable('refreshOptions', {
            paginationParts: ['pageList']
        });
    } else {
        $(t).bootstrapTable('refreshOptions', {
            paginationParts: ['pageInfo', 'pageList']
        });         
    }
}

function noIncluidoEnContrasena(s, t) {
    s = s.trim();
    var longitud = s.length;
    var incluido = false;
    for (var x = 0; x < longitud; x++) {
        var ss11 = s.substr(x, 1);
        if (t==1) { var c = "1234567890".indexOf(ss11); }
        if (t==2) { var c = "abcdefghijklmnñopqrstuvwxyz".indexOf(ss11); }
        if (t==3) { var c = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".indexOf(ss11); }          
        if (t==4) { var c = "!@#$%_-+=?".indexOf(ss11); }
        if (c>=0) { incluido = true; break; }
    }
    return !incluido;
}


function permisosVentana(s) {
    let p = dPermiso(s, 0, 10);
    let nomVentana = p.substring(0, 4);

    let p2  = document.getElementById(nomVentana + '2');
    let p2b = document.getElementById(nomVentana + '2b');
    if (p[5]=='0') { p2.disabled = true; p2b.style.display = 'none'; } else { p2.disabled = false; p2b.style.display = ''; }
    let p3  = document.getElementById(nomVentana + '3');
    let p3b = document.getElementById(nomVentana + '3b');
    if (p[6]=='0') { p3.disabled = true; p3b.style.display = 'none'; } else { p3.disabled = false; p3b.style.display = ''; }
    let p4  = document.getElementById(nomVentana + '4');
    let p4b = document.getElementById(nomVentana + '4b');
    if (p[7]=='0') { p4.disabled = true; p4b.style.display = 'none'; } else { p4.disabled = false; p4b.style.display = ''; }
    let p5  = document.getElementById(nomVentana + '5');
    let p5b = document.getElementById(nomVentana + '5b');
    if (p[8]=='0') { p5.disabled = true; p5b.style.display = 'none'; } else { p5.disabled = false; p5b.style.display = ''; }
    let p6  = document.getElementById(nomVentana + '6');
    let p6b = document.getElementById(nomVentana + '6b');
    if (p[9]=='0') { p6.disabled = true; p6b.style.display = 'none'; } else { p6.disabled = false; p6b.style.display = ''; }              
}


function dPermiso(s, ini, fin) {
    // si n = 0 devuelve la cadena con todos los permisos, por ejemplo 101010
    // si n tiene un valor de 1 a 6 devuelve el permiso específico
    // 1-->ver  2-->añadir  3-->modificar  4-->eliminar  5-->imprimir  6-->exportar
    let nomUs = localStorage.getItem('nomUs');
    let s4 = '';

    if (nomUs == 'admin') {
        if (fin == 10) {
            return s4 + '111111';
        } else {
            return '1';
        }
    } else {
        let cadPermisos = localStorage.getItem('permisosGrupo');
        let pos = cadPermisos.indexOf(s4);
        return cadPermisos.substring(pos + ini, pos + fin);
    }
}

function abrirToast(id) {
    var toastLiveExample = document.getElementById(id);
    var toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
}


function gesDoc(n) {
    let serie       = 0;
    let numero      = 0;
    let nomForm     = '';
    let proced 		= '';

    switch (n) {
        case 84:
            numero  = window.idEvento;
            nomForm = 'formEvento';
            proced  = 'eventos';
            break;
        case 85:
            numero  = window.idTabContactos;
            nomForm = 'formContacto';
            proced  = 'contactos';
            break;            
        default:
            break;
    } 

    if (!isNumeric(numero))  { return false; }
    localStorage.setItem('tfGesDoc', n);
    localStorage.setItem('numGesDoc', numero);
    cambioDiv(proced, 'documentos', 1, 0);
    //nuevaVentana('gestiondocumental', nomForm, '', '', '');
}


function isNumeric(v) {
  return !isNaN(parseFloat(v)) && isFinite(v);
}

function eliminarReg1(tabla, winVar, nomCampo, winListEliminar) {
    let numFilas = Object.keys($('#' + tabla).bootstrapTable('getData')).length;
    //si no hay filas, salir
    if (numFilas == 0) { return false; }
    let valorAeliminar = window[winVar];
    let filaSeleccionada = indice1(window[winVar], nomCampo, tabla);
    //si es la última fila ...
    if (numFilas - 1 == filaSeleccionada) {
        //si sólo hay una fila
        if (numFilas == 1) {
            window[winVar]='';
        } else {
            window[winVar]=$('#' + tabla).bootstrapTable('getData')[filaSeleccionada - 1][nomCampo];  
        }
    } else {
        window[winVar]=$('#' + tabla).bootstrapTable('getData')[filaSeleccionada + 1][nomCampo];
    }
    $('#' + tabla).bootstrapTable('remove', {
        field: nomCampo,
        values: [valorAeliminar]
    })
    if (winListEliminar != '') {
        window[winListEliminar].push(valorAeliminar);    
    }
}

function indice1(valor, nomCampo, tabla) {
    let numFilas = Object.keys($('#' + tabla).bootstrapTable('getData')).length;
    if (numFilas != 0) {
        for (i = 0; i < numFilas; i++) {
            if ($('#' + tabla).bootstrapTable('getData')[i][nomCampo] == valor) {
                return i;
            }
        }
    }
}

function toggleFullScreen(buttonId) {
    var doc 	= window.document;
    var docEl 	= doc.documentElement;
    var button 	= document.getElementById(buttonId);
    var icon 	= document.getElementById("fullscreen-icon");
    var txt 	= document.getElementById("fullscreen-txt");

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
    var fullscreenElement = doc.fullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement;

    function actualizarBoton(enPantallaCompleta) {
        if (icon) {
            icon.classList.toggle('bi-arrows-fullscreen', !enPantallaCompleta);
            icon.classList.toggle('bi-arrows-collapse', enPantallaCompleta);
        }
        if (txt) {
            txt.innerText = enPantallaCompleta ? tExp("Pantalla normal", '') : tExp("Pantalla completa", '');
        }
        localStorage.setItem('isFullscreen', enPantallaCompleta ? 'true' : 'false');
    }

    if ((obtenerEntornoCliente() === 'macos' || obtenerEntornoCliente() === 'ios') && window.webkit?.messageHandlers?.fullscreenHandler?.postMessage) {
        var activarPantallaCompleta = localStorage.getItem('isFullscreen') !== 'true';
        try {
            window.webkit.messageHandlers.fullscreenHandler.postMessage({ enabled: activarPantallaCompleta });
            actualizarBoton(activarPantallaCompleta);
        } catch (err) {
            console.warn("No se pudo cambiar la pantalla completa nativa:", err);
        }
        return false;
    }

    if (!fullscreenElement) {
        if (!requestFullScreen) { return false; }
        // Entrar en pantalla completa
        try {
            requestFullScreen.call(docEl);
            actualizarBoton(true);
        } catch (err) {
            console.warn("No se pudo entrar en pantalla completa:", err);
        }
    } else {
        if (!cancelFullScreen) { return false; }
        // Salir de pantalla completa
        try {
            cancelFullScreen.call(doc);
            actualizarBoton(false);
        } catch (err) {
            console.warn("No se pudo salir de pantalla completa:", err);
        }
    }
    return false;
}


function mapFormat(a, b, c, d, e) {
    let s = rutaGoogleMaps(a, b, c, d, e);
    if (s != '') {
        return `<a onClick="hiperenlace('${s}', 4)" class="text-primary d-print-none">
                    <i class="bi bi-geo-alt-fill" style="font-size: 1rem;" title="${tExp('Abrir Google Maps', '')}"></i>
                </a>`;
    } else {
        return '';
    }
}


function etiFormat(a, b, c) {
    // En caso contrario (pantalla), crear los elementos div normalmente
    const fragment = document.createDocumentFragment();

    if (a != 0) { 
        const tagA = createTagElement(a);
        tagA.style.margin = '5px';  // Añadir espaciado entre etiquetas
        fragment.appendChild(tagA);
    }
    if (b != 0) { 
        const tagB = createTagElement(b);
        tagB.style.margin = '5px';  // Añadir espaciado entre etiquetas
        fragment.appendChild(tagB);
    }
    if (c != 0) { 
        const tagC = createTagElement(c);
        tagC.style.margin = '5px';  // Añadir espaciado entre etiquetas
        fragment.appendChild(tagC);
    }

    // Devolver el contenedor con las etiquetas creadas para pantalla
    const div = document.createElement('div');
    div.appendChild(fragment);
    return div.innerHTML;
}


function etiFormatPrint(a, b, c) {
    // Función para devolver el texto del tag si estamos en modo impresión
    function createTagText(tagNum) {
        const elemento = dataEtiquetas.find(el => el.num == tagNum);
        return elemento ? elemento.des : '';
    }

    let textResult = [];

    // Solo agregar etiquetas que no sean 0
    if (a != 0) { textResult.push(createTagText(a)); }
    if (b != 0) { textResult.push(createTagText(b)); }
    if (c != 0) { textResult.push(createTagText(c)); }

    // Unir las etiquetas con un espacio entre ellas
    return textResult.join(' ');
}



function comFormat(per, te1, te2, cor, www, lin, tel, ins, mes, xxx, dom, cpo, pob, pro, pai, ccn, origen) {

	if ((te1) || (te2) || (cor) || (www) || (lin) || (tel) || (ins) || (mes) || (xxx) || (dom) || (cpo) || (pob) || (pro) || (pai)) {

	    // Crear el elemento <a>
	    const a = document.createElement('a');
	    a.href = '#'; // Enlace vacío
	    a.innerHTML = '<i class="bi bi-wifi" class="d-print-none"></i>'; // Contenido del enlace

	    // Añadir el evento click de forma segura
	    a.addEventListener('click', (event) => {
	        event.preventDefault(); // Evita que el enlace recargue la página
	        comFormatDialogo(per, te1, te2, cor, www, lin, tel, ins, mes, xxx, dom, cpo, pob, pro, pai, ccn, origen);
	    });

	    // Devolver el elemento <a> directamente
	    return a; // No usamos outerHTML, devolvemos el nodo directamente

	} else {
		return '';
	}
}


function comFormatDialogo(per, te1, te2, cor, www, lin, tel, ins, mes, xxx, dom, cpo, pob, pro, pai, ccn, origen) {

	let sCom = '';
	if (te1) { sCom  = '<div class="row mb-1"><div class="btn-group" role="group"><button class="btn btn-lg btn-outline-success" title="' + tExp('Llamar', '') + '" data-bs-toggle="tooltip" onClick="hiperenlace(\'' + te1 + '\', 1)"><i class="bi bi-telephone-fill"></i></button><button class="btn btn-lg btn-outline-success" title="' + tExp('WhatsApp', '') + '" data-bs-toggle="tooltip" onClick="hiperenlace(\'' + te1 + '\', 3)"><i class="bi bi-whatsapp"></i></button><button class="btn btn-lg btn-outline-success" title="' + tExp('SMS', '') + '" data-bs-toggle="tooltip" onClick="hiperenlace(\'' + te1 + '\', 2)"><i class="bi bi-chat-left-text"></i></button></div></div>'; }
	if (te2) { sCom += '<div class="row mb-1"><div class="btn-group" role="group"><button class="btn btn-lg btn-outline-success" title="' + tExp('Llamar', '') + '" data-bs-toggle="tooltip" onClick="hiperenlace(\'' + te2 + '\', 1)"><i class="bi bi-telephone-fill"></i></button><button class="btn btn-lg btn-outline-success" title="' + tExp('WhatsApp', '') + '" data-bs-toggle="tooltip" onClick="hiperenlace(\'' + te2 + '\', 3)"><i class="bi bi-whatsapp"></i></button><button class="btn btn-lg btn-outline-success" title="' + tExp('SMS', '') + '" data-bs-toggle="tooltip" onClick="hiperenlace(\'' + te2 + '\', 2)"><i class="bi bi-chat-left-text"></i></button></div></div>'; }

	if ((cor) || (www) || (dom) || (cpo) || (pob) || (pro) || (pai)) {
		sCom += '<div class="row mb-1"><div class="btn-group" role="group">';
		if (cor) { 
			var encodedEmail 	= encodeURIComponent(cor);
		    var service 		= localStorage.getItem("clienteCorreo");
		    if (service !== '1' && service !== '2') {
		    	service = '5';
		    }
		    var url 			= '';
		    if (false && service == '1') { // Gmail
			    const isAndroid = /Android/i.test(navigator.userAgent);
			    if (isAndroid) {
			        // Opción 3: Intent para abrir en la app de Gmail en Android
			        url = `intent://compose?to=${encodedEmail}#Intent;scheme=mailto;package=com.google.android.gm;end;`;
			    } else {
			        // Opción 2: URL estándar para abrir la ventana de redacción en Gmail
			        url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}`;
			    }
			    sCom += '<a href="' + url + '" target="_blank" class="btn btn-lg btn-outline-primary" title="' + tExp('Correo electrónico', '') + '" data-bs-toggle="tooltip"><i class="bi bi-at"></i></a>';
			} else if (service == '4') { // Yahoo
				url = `https://compose.mail.yahoo.com/?to=${encodedEmail}`;
	       		sCom += '<a href="' + url + '" target="_blank" class="btn btn-lg btn-outline-primary" title="' + tExp('Correo electrónico', '') + '" data-bs-toggle="tooltip"><i class="bi bi-at"></i></a>';
			} else if (service == '0') { // Dispositivo
				url = 'mailto:' + cor;
	       		sCom += '<a href="' + url + '" target="_blank" class="btn btn-lg btn-outline-primary" title="' + tExp('Correo electrónico', '') + '" data-bs-toggle="tooltip"><i class="bi bi-at"></i></a>';       		
		    } else { // iCloud or Outlook
		    	sCom += '<button class="btn btn-lg btn-outline-primary" title="' + tExp('Correo electrónico', '') + '" data-bs-toggle="tooltip" onClick="hiperenlace(\'' + cor + '\', 5, {tfGesDoc:85,numGesDoc:' + ccn + '})"><i class="bi bi-at"></i></button>'; 
		    }
		}
		if (www) { sCom += '<button class="btn btn-lg btn-outline-primary" title="' + tExp('Dirección web', '') + '" data-bs-toggle="tooltip" onClick="hiperenlace(\'' + www + '\', 4)"><i class="bi bi-globe2"></i></button>'; }
		if ((dom) || (cpo) || (pob) || (pro) || (pai)) { sCom += '<button class="btn btn-lg btn-outline-primary" title="' + tExp('Abrir Google Maps', '') + '" data-bs-toggle="tooltip" onClick="abrirGoogleMaps(\'' + dom + '\', \'' + cpo + '\', \'' + pob + '\', \'' + pro + '\', \'' + pai + '\')"><i class="bi bi-geo-alt-fill"></i></button>'; }
		sCom += '</div></div>';
	}

	if ((lin) || (tel) || (ins) || (mes) || (xxx)) {
		sCom += '<div class="row mb-1"><div class="btn-group" role="group">';
		if (lin) { sCom += '<button class="btn btn-lg btn-outline-primary" title="LinkedIn" 	data-bs-toggle="tooltip" onClick="hiperenlace(\'' + lin + '\', 6)"><i class="bi bi-linkedin"></i></button>'; }
		if (tel) { sCom += '<button class="btn btn-lg btn-outline-primary" title="Telegram" 	data-bs-toggle="tooltip" onClick="hiperenlace(\'' + tel + '\', 7)"><i class="bi bi-telegram"></i></button>'; }
		if (mes) { sCom += '<button class="btn btn-lg btn-outline-primary" title="Messenger" 	data-bs-toggle="tooltip" onClick="hiperenlace(\'' + mes + '\', 8)"><i class="bi bi-messenger"></i></button>'; }
		if (xxx) { sCom += '<button class="btn btn-lg btn-outline-primary" title="X" 			data-bs-toggle="tooltip" onClick="hiperenlace(\'' + xxx + '\', 9)"><i class="bi bi-twitter-x"></i></button>'; }
		sCom += '</div></div>';
	}	

	if (origen == 1) {  // el modal se abrirá en contactos
		if (document.getElementById('gesdGrupo_contactos').style.display == '') {
			sCom += '<div class="row"><div class="btn-group" role="group">';
			sCom += '<button class="btn btn-lg btn-outline-dark align-items-center" title="' + tExp('Interacciones', '') + '" 	data-bs-toggle="tooltip" onClick="nombrePersonaContacto = \'' + per + '\'; comunicacionesContacto.hide(); cambioDiv(\'contactos\', \'interacciones\', 1, 0);"><i class="bi bi-journals"></i><span style="font-size: 0.875rem;"></span></button>';
			sCom += '<button class="btn btn-lg btn-outline-dark align-items-center" title="' + tExp('Gestión documental', '') + '" 	  	data-bs-toggle="tooltip" onClick="nombrePersonaContacto = \'' + per + '\'; comunicacionesContacto.hide(); localStorage.setItem(\'tfGesDoc\', 85); localStorage.setItem(\'numGesDoc\', ' + ccn + '); cambioDiv(\'contactos\', \'documentos\', 1, 0);"><i class="bi bi-folder-symlink"></i><span style="font-size: 0.875rem;"></span></button>';	
			sCom += '<button class="btn btn-lg btn-outline-dark align-items-center" title="' + tExp('Eventos', '') + '" 	 	data-bs-toggle="tooltip" onClick="nombrePersonaContacto = \'' + per + '\'; comunicacionesContacto.hide(); localStorage.setItem(\'vistaIni\', \'listYear\'); localStorage.setItem(\'codContactoNlistadoEventos\', ' + ccn + '); setTimeout(function() { cambioDiv(\'contactos\', \'eventos\', 1, 0);  }, 500);"><i class="bi bi-calendar2-check"></i><span style="font-size: 0.875rem;"></span></button>';
			sCom += '</div></div>';
		}
		if (sCom) { modMsjCom('contactos005', per, sCom, msjContactos); }			
	} else { // el modal se abrirá en recordatorios
		if (sCom) { modMsjCom('recordatorios005', per, sCom, msjRecordatorios); }	
	}
}

function corFormatNew(v, row) {
	if (v) {
		//return '<a href="mailto:' + v + '" target="_blank" class="text-decoration-none">' + v + '</a>';

		//return '<a href="#" onclick="hiperenlace(\'' + v + '\', 5); return false;" class="text-decoration-none">' + v + '</a>';

		var encodedEmail 	= encodeURIComponent(v);
	    var service 		= localStorage.getItem("clienteCorreo");
	    if (service !== '1' && service !== '2') {
	    	service = '5';
	    }
	    var url 			= '';
	    if (false && service == '1') { // Gmail
		    const isAndroid = /Android/i.test(navigator.userAgent);
		    if (isAndroid) {
		        // Opción 3: Intent para abrir en la app de Gmail en Android
		        url = `intent://compose?to=${encodedEmail}#Intent;scheme=mailto;package=com.google.android.gm;end;`;
		    } else {
		        // Opción 2: URL estándar para abrir la ventana de redacción en Gmail
		        //url = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=${encodedEmail}&action=compose`;
		        url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}`;
		    }
		    return '<a href="' + url + '" target="_blank" class="text-decoration-none">' + v + '</a>';
		} else if (service == '4') { // Yahoo
			url = `https://compose.mail.yahoo.com/?to=${encodedEmail}`;
       		return '<a href="' + url + '" target="_blank" class="text-decoration-none">' + v + '</a>';
		} else if (service == '0') { // Dispositivo
			url = 'mailto:' + v;
       		return '<a href="' + url + '" target="_blank" class="text-decoration-none">' + v + '</a>';       		
	    } else { // iCloud or Outlook
	    	var contexto = '';
	    	if (row && row.ccn) {
	    		contexto = ', {tfGesDoc:85,numGesDoc:' + row.ccn + '}';
	    	}
	    	return '<a href="#" onclick="hiperenlace(\'' + v + '\', 5' + contexto + '); return false;" class="text-decoration-none">' + v + '</a>';
	    }
	} else {
		return '';
	}
}

function webFormatNew(v) {
	if (v) {
		//return '<a href="' + v + '" target="_blank" class="text-decoration-none">' + v + '</a>';
		return '<a href="#" onclick="hiperenlace(\'' + v + '\', 4); return false;" class="text-decoration-none">' + v + '</a>';
	} else {
		return '';
	}
}


function telFormaNew(v) {
    if (!v) return ''; // Si no hay valor, devolver una cadena vacía

    const etLlamar = ' ' + tExp('Llamar', '');
    const etWhatsapp = ' Whatsapp';
    const etSMS = ' SMS';

    // Contenedor principal
    const containerStyle = 'white-space: nowrap;';
    const buttonStyle = `
        class="btn btn-outline-primary dropdown-toggle btn-mini hide-on-pdf"
        type="button" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
        style="border-radius: 10px; border-color: #007bff; background-color: #f8f9fa; color: #007bff;"
    `;
    const dropdownStyle = `
        class="dropdown-menu p-2 shadow-sm" 
        style="border-radius: 8px; background-color: #f8f9fa; border: 1px solid #007bff;"
    `;

    // Lista de elementos del dropdown
    const dropdownItems = `
		<li>
		    <a class="dropdown-item d-flex align-items-center" onClick="hiperenlace('${v}', 1)" style="gap: 8px;">
		        <i class="bi bi-telephone" style="font-size: 1.2rem; color: #007bff;"></i>
		        <span style="color: #333; font-weight: 500;">${etLlamar}</span>
		    </a>
		</li>
		<li><hr class="dropdown-divider"></li>
		<li>
		    <a class="dropdown-item d-flex align-items-center" onClick="hiperenlace('${v}', 3)" style="gap: 8px;">
		        <i class="bi bi-whatsapp" style="font-size: 1.2rem; color: #25d366;"></i>
		        <span style="color: #333; font-weight: 500;">${etWhatsapp}</span>
		    </a>
		</li>
		<li><hr class="dropdown-divider"></li>
		<li>
		    <a class="dropdown-item d-flex align-items-center" onClick="hiperenlace('${v}', 2)" style="gap: 8px;">
		        <i class="bi bi-chat-left-text" style="font-size: 1.2rem; color: #007bff;"></i>
		        <span style="color: #333; font-weight: 500;">${etSMS}</span>
		    </a>
		</li>
    `;

    // Montaje del HTML
    return `
        <div style="${containerStyle}">
            <button ${buttonStyle}></button>
            <ul ${dropdownStyle}>
                ${dropdownItems}
            </ul>
            <span style="margin-left: 8px;">${v}</span>
        </div>
    `;
}


function telFormaNew1(v) {
    if (!v) return ''; // Si no hay valor, devolver una cadena vacía

    const etLlamar = ' ' + tExp('Llamar', '');
    const etWhatsapp = ' Whatsapp';
    const etSMS = ' SMS';

    // Botón desplegable
    const buttonStyle = `
        class="btn btn-outline-primary dropdown-toggle btn-mini hide-on-pdf"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style="border-radius: 10px; border-color: #007bff; background-color: #f8f9fa; color: #007bff; display: inline-block;"
    `;

    // Lista desplegable
    const dropdownStyle = `
        class="dropdown-menu p-2 shadow-sm"
        style="border-radius: 8px; background-color: #f8f9fa; border: 1px solid #007bff;"
    `;

    // Elementos del menú desplegable
    const dropdownItems = `
		<li>
		    <a class="dropdown-item d-flex align-items-center" onClick="hiperenlace('${v}', 1)" style="gap: 8px;">
		        <i class="bi bi-telephone" style="font-size: 1.2rem; color: #007bff;"></i>
		        <span style="color: #333; font-weight: 500;">${etLlamar}</span>
		    </a>
		</li>
		<li><hr class="dropdown-divider"></li>
		<li>
		    <a class="dropdown-item d-flex align-items-center" onClick="hiperenlace('${v}', 3)" style="gap: 8px;">
		        <i class="bi bi-whatsapp" style="font-size: 1.2rem; color: #25d366;"></i>
		        <span style="color: #333; font-weight: 500;">${etWhatsapp}</span>
		    </a>
		</li>
		<li><hr class="dropdown-divider"></li>
		<li>
		    <a class="dropdown-item d-flex align-items-center" onClick="hiperenlace('${v}', 2)" style="gap: 8px;">
		        <i class="bi bi-chat-left-text" style="font-size: 1.2rem; color: #007bff;"></i>
		        <span style="color: #333; font-weight: 500;">${etSMS}</span>
		    </a>
		</li>
    `;

    // Montaje del HTML con contenedor inline-flex
    return `
        <div style="display: inline-flex; align-items: center; gap: 8px; white-space: nowrap;">
            <button ${buttonStyle}></button>
            <ul ${dropdownStyle}>
                ${dropdownItems}
            </ul>
            <span>${v}</span>
        </div>
    `;
}





function linkedinFormat(v) {
	if (v) {
		//return '<a href="https://www.linkedin.com/in/' + v + '" target="_blank" class="text-decoration-none">' + v + '</a>';
		return '<a href="#" onclick="hiperenlace(\'' + v + '\', 6); return false;" class="text-decoration-none">' + v + '</a>';
	} else {
		return '';
	}
}

function telegramFormat(v) {
	if (v) {
		//return '<a href="https://t.me/' + v + '" target="_blank" class="text-decoration-none">' + v + '</a>';
		return '<a href="#" onclick="hiperenlace(\'' + v + '\', 7); return false;" class="text-decoration-none">' + v + '</a>';
	} else {
		return '';
	}    
}

function messengerFormat(v) {
	if (v) {
		//return '<a href="https://m.me/' + v + '" target="_blank" class="text-decoration-none">' + v + '</a>';
		return '<a href="#" onclick="hiperenlace(\'' + v + '\', 8); return false;" class="text-decoration-none">' + v + '</a>';
	} else {
		return '';
	}    
}

function xFormat(v) {
	if (v) {
		//return '<a href="https://twitter.com/messages/compose?recipient_id=' + v + '" target="_blank" class="text-decoration-none">' + v + '</a>';
		return '<a href="#" onclick="hiperenlace(\'' + v + '\', 9); return false;" class="text-decoration-none">' + v + '</a>';
	} else {
		return '';
	}
}

function instagramFormat(v) {
	if (v) {
		//return '<a href="https://ig.me/m/' + v + '" target="_blank" class="text-decoration-none">' + v + '</a>';
		return '<a href="#" onclick="hiperenlace(\'' + v + '\', 10); return false;" class="text-decoration-none">' + v + '</a>';
	} else {
		return '';
	}
}

function abrirModal1DesdeFicha(n) {
    if (n == 1) {
        //window.open('planes.html', '_blank');   
		abrirPlanesProveedor();
    } else {
		abrirGestionSuscripcion();
    }
}

function nombreArchivoDesdeContentDisposition(header) {
    if (!header) return "";

    const encoded = header.match(/filename\*=UTF-8''([^;]+)/i);
    if (encoded && encoded[1]) {
        try { return decodeURIComponent(encoded[1].replace(/^"|"$/g, "")); } catch (e) {}
    }

    const quoted = header.match(/filename\s*=\s*"([^"]+)"/i);
    if (quoted && quoted[1]) return quoted[1];

    const plain = header.match(/filename\s*=\s*([^;]+)/i);
    return plain && plain[1] ? plain[1].trim().replace(/^"|"$/g, "") : "";
}

function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = String(reader.result || "");
            resolve(result.includes(",") ? result.split(",").pop() : result);
        };
        reader.onerror = () => reject(reader.error || new Error("No se pudo leer el archivo"));
        reader.readAsDataURL(blob);
    });
}

async function guardarBlobSinVentana(blob, nombre) {
    const filename = nombre || "documento";

    try {
        const handler = window.webkit?.messageHandlers?.fileExportHandler;
        if (handler?.postMessage) {
            const base64 = await blobToBase64(blob);
            handler.postMessage({ filename, base64 });
            return;
        }
    } catch (e) {
        console.warn("No se pudo usar fileExportHandler; se descarga desde el navegador.", e);
    }

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
        URL.revokeObjectURL(url);
        link.remove();
    }, 1000);
}

async function gesDocContenido(event, id) {
    if (event?.preventDefault) event.preventDefault();

    const prefijo = localStorage.getItem('prefijo') || '';
    const enlace = 'https://' + window.location.host + '/descargarFichero?prefijo=' + encodeURIComponent(prefijo) + '&id=' + encodeURIComponent(id);

    try {
        const response = await fetch(enlace, { cache: "no-store", credentials: "same-origin" });
        if (!response.ok) throw new Error(await response.text());

        const blob = await response.blob();
        const nombreCabecera = nombreArchivoDesdeContentDisposition(response.headers.get("Content-Disposition"));
        const nombreTabla = nombreDocumentoTabla(id);
        await guardarBlobSinVentana(blob, nombreCabecera || nombreTabla || "documento");
    } catch (error) {
        console.error("No se pudo descargar el documento:", error);
        toastMsj(tExp("No se pudo descargar el documento", ""), msjDocumentos, 1500, 5, 5);
    }

    return false;
}


function visorContenido(event, id) {
    event.preventDefault();
    cargarDocumentoReal(id);
    return false;
}

function nombreDocumentoTabla(id) {
    try {
        if (typeof $ !== "undefined" && $('#tabDocumentos').length) {
            let row = $('#tabDocumentos').bootstrapTable('getRowByUniqueId', Number(id));
            if (!row) row = $('#tabDocumentos').bootstrapTable('getRowByUniqueId', String(id));
            if (!row) {
                const rows = $('#tabDocumentos').bootstrapTable('getData') || [];
                row = rows.find((item) => String(item.id) === String(id));
            }
            if (row && row.nom) return row.nom;
        }
    } catch (e) {}
    return "";
}

function abrirVisorDocumentoInterno(id) {
    const prefijo = localStorage.getItem('prefijo') || '';
    const enlace = `https://${window.location.host}/app/visor-documento.html?prefijo=${encodeURIComponent(prefijo)}&id=${encodeURIComponent(id)}`;
    abrirVentanaUnica(enlace);
    return false;
}

async function cargarDocumentoReal(id) {
    const nom = nombreDocumentoTabla(id);
    var e = obtenerExtensionArchivo(nom);
    if ((e == 'odt') || (e == 'ods') || (e == 'odp')) {
    	visorDocEnCollabora(id, nom, e);
    	return false;
    }
    return abrirVisorDocumentoInterno(id);
}


function normalizarUrlVentanaNativa(url) {
  if (!url) { return url; }

  const texto = String(url);
  if (/^[a-z][a-z0-9+.-]*:/i.test(texto)) {
    return texto;
  }

  try {
    const decodificada = decodeURIComponent(texto);
    if (/^[a-z][a-z0-9+.-]*:/i.test(decodificada) || /^[^?#]+\.html(?:[?#].*)?$/i.test(decodificada)) {
      return decodificada;
    }
  } catch (e) {}

  return texto;
}

function abrirDireccionNativaIOS(url) {
  try {
    if (window.webkit?.messageHandlers?.direccion?.postMessage) {
      window.webkit.messageHandlers.direccion.postMessage({ url });
      return true;
    }
  } catch (e) {
    console.warn("No se pudo abrir URL via messageHandler.direccion:", e);
  }

  window.location.href = 'direccion:' + url;
  return true;
}

function abrirVentanaUnica(url) {
  if (!url) { return; }
  url = normalizarUrlVentanaNativa(url);

  const userAgent = navigator.userAgent || "";
  const isWebView = typeof window.webkit !== "undefined" && !!window.webkit.messageHandlers;

  const esAppIOS = isWebView && /iPhone|iPad|iPod/i.test(userAgent);
  const esAppMac = isWebView && /Macintosh|Mac OS X/i.test(userAgent);

  if (esAppIOS) {
    abrirDireccionNativaIOS(url);
    return;
  }

  if (esAppMac) {
    const enlace = normalizarUrlVentanaNativa(url);
    window.open(enlace, "_blank", "width=1200,height=800,menubar=no,toolbar=no");
    return;
  }

  // 🌐 Web o Android
  if (!windowObjectReference1 || windowObjectReference1.closed) {
    // 🚫 No envolver en window1.html si es googlelogin.html
    const usarDirecto = url.startsWith("googlelogin.html");
    const finalUrl = usarDirecto ? url : `window1.html?url=${encodeURIComponent(url)}`;

    windowObjectReference1 = window.open(
      finalUrl,
      "ventanaUnicaVisor",
      `height=${screen.height},width=${screen.width},menubar=no,titlebar=yes,toolbar=no`
    );
    if (windowObjectReference1) {
      try { windowObjectReference1.moveTo(0, 0); } catch (e) {}
      try { windowObjectReference1.focus(); } catch (e) {}
    } else {
      alert(tExp('El navegador bloqueó la ventana emergente. Habilítala y vuelve a intentarlo.', ''));
    }
  } else {
    const usarDirecto = url.startsWith("googlelogin.html");
    windowObjectReference1.location.href = usarDirecto ? url : `window1.html?url=${encodeURIComponent(url)}`;
    windowObjectReference1.focus();
  }
}




function abrirVentanaMsjCorreo(url) {
    url = normalizarUrlVentanaNativa(url);

    const userAgent = navigator.userAgent || "";
    const isWebView = typeof window.webkit !== "undefined" && !!window.webkit.messageHandlers;

    const esAppIOS = isWebView && /iPhone|iPad|iPod/i.test(userAgent);
    const esAppMac = isWebView && /Macintosh|Mac OS X/i.test(userAgent);

    if (esAppIOS) {
        // ✅ App iOS: abrir directamente la URL real (ventana secundaria en app)
        abrirDireccionNativaIOS(url);
        return;
    }

    if (esAppMac) {
        // ✅ App Mac: abrir en nueva ventana flotante
        const enlace = decodeURIComponent(url);
        window.open(enlace, "_blank", "width=1200,height=800,menubar=no,toolbar=no");
        return;
    }

    // 🌐 Web o Android
    localStorage.setItem('mcc_msjcorreo_url', url);

    if (!ventanaMsjCorreo || ventanaMsjCorreo.closed) {
        ventanaMsjCorreo = window.open(
            url,
            "ventanaMsjCorreo",
            `height=${screen.height},width=${screen.width},menubar=no,titlebar=yes,toolbar=no`,
            'noreferrer'
        );
        if (ventanaMsjCorreo) {
            try { ventanaMsjCorreo.moveTo(0, 0); } catch (e) {}
        } else {
            window.location.href = url;
        }
    } else {
        ventanaMsjCorreo.location.href = url;
        ventanaMsjCorreo.focus();
    }
}





function activarTooltips() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {  return bootstrap.Tooltip.getOrCreateInstance(tooltipTriggerEl, {
      	trigger: 'hover',
  		delay: { show: 500, hide: 200 },
  		boundary: 'viewport',
  		container: 'body'  		
    }    ) });    
}

function activarTooltipsDiv(d) {
	var varDiv = document.getElementById(d);
	var tooltipTriggerList = [].slice.call(varDiv.querySelectorAll('[data-bs-toggle="tooltip"]'));
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	    return bootstrap.Tooltip.getOrCreateInstance(tooltipTriggerEl, {
	        trigger: 'hover',
	        delay: { show: 500, hide: 200 },
	        boundary: 'viewport',
	        container: 'body'
	    });
	});
}


function desactivarTooltipsDiv(d) {
	var varDiv = document.getElementById(d);
	if (!varDiv || typeof bootstrap === 'undefined' || !bootstrap.Tooltip) {
		return;
	}

	var tooltipTriggerList = [].slice.call(varDiv.querySelectorAll('[data-bs-toggle="tooltip"]'));

	tooltipTriggerList.forEach(function(tooltipTriggerEl) {
	    var tooltip = bootstrap.Tooltip.getInstance(tooltipTriggerEl);
	    if (tooltip) {
	        // Bootstrap termina de ocultar el tooltip de forma asincrona. Si se
	        // destruye la instancia antes de que acabe la transicion, su callback
	        // intenta leer una configuracion ya eliminada y lanza un error.
	        try {
	        	tooltip.hide();
	        } catch (error) {
	        	// La vista puede haberse retirado ya; la limpieza diferida sigue
	        	// siendo segura y evita bloquear el cambio de ventana.
	        }

	        setTimeout(function() {
	        	try {
	        		tooltip.dispose();
	        	} catch (error) {
	        		// La instancia puede haberse destruido durante la transicion.
	        	}
	        }, 350);
	    }
	});
}


function crearToastDocumento(t, m, o) {
    let h = '<div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-0">';
    h +=    '   <div id="liveToastDocumento" class="toast d-inline bg-transparent" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">';
    h +=    '       <div class="toast-body">';
    h +=    '           <div class="d-flex">';
    h +=    '               <button class="btn btn-success btn-lg rounded-circle" id="btnAgregarDocumento" title="' + t + '" onClick="const tooltip1 = bootstrap.Tooltip.getInstance(this); tooltip1.hide(); regTabla(' + m + ', ' + o + ', 1)" data-bs-toggle="tooltip"><i class="bi bi-file-earmark-plus" style="font-size: 1.4rem; color: currentColor;"></i></button>';
    h +=    '               <button type="button" class="btn-close btn-sm" data-bs-dismiss="toast" aria-label="' + tExp("Cerrar", "") + '" title="' + tExp("Cerrar", "") + '" data-bs-toggle="tooltip"></button>';
    h +=    '              </div>';
    h +=    '          </div>';
    h +=    '      </div>';
    h +=    '</div>';
    toaDocumento.innerHTML = h;

    const toastElementDocumento = document.getElementById('liveToastDocumento');

    toastElementDocumento.addEventListener('shown.bs.toast', function () {
    	activarTooltipsDiv('liveToastDocumento');
    });

    // Evento hidden.bs.toast: Eliminar el Toast cuando la animación de ocultar haya finalizado
    toastElementDocumento.addEventListener('hidden.bs.toast', function () {
    	desactivarTooltipsDiv('liveToastDocumento');
        setTimeout(function() {
            toastElementDocumento.remove();  // Eliminar el Toast del DOM
        }, 500);  // Opcional: pequeño retraso si lo deseas
    });

}


function crearToastInteraccion(t, m, o) {
    let h = '<div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-0">';
    h +=    '   <div id="liveToastInteraccion" class="toast d-inline bg-transparent" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">';
    h +=    '       <div class="toast-body">';
    h +=    '           <div class="d-flex">';
    h +=    '               <button class="btn btn-success btn-lg rounded-circle" id="btnAgregarInteraccion" title="' + t + '" onClick="const tooltip1 = bootstrap.Tooltip.getInstance(this); tooltip1.hide(); regTabla(' + m + ', ' + o + ', 1)" data-bs-toggle="tooltip"><i class="bi bi-journal-plus" style="font-size: 1.4rem; color: currentColor;"></i></button>';
    h +=    '               <button type="button" class="btn-close btn-sm" data-bs-dismiss="toast" aria-label="' + tExp("Cerrar", "") + '" title="' + tExp("Cerrar", "") + '" data-bs-toggle="tooltip"></button>';
    h +=    '              </div>';
    h +=    '          </div>';
    h +=    '      </div>';
    h +=    '</div>';
    toaInteraccion.innerHTML = h;

    const toastElementInteraccion = document.getElementById('liveToastInteraccion');

    toastElementInteraccion.addEventListener('shown.bs.toast', function () {
    	activarTooltipsDiv('liveToastInteraccion');
    });

    // Evento hidden.bs.toast: Eliminar el Toast cuando la animación de ocultar haya finalizado
    toastElementInteraccion.addEventListener('hidden.bs.toast', function () {
    	desactivarTooltipsDiv('liveToastInteraccion');
        setTimeout(function() {
            toastElementInteraccion.remove();  // Eliminar el Toast del DOM
        }, 500);  // Opcional: pequeño retraso si lo deseas
    });

}




function compPagCambiada(sOld, sNew, i) {
    let cambio = false;
    let x = 0;
    do {
        cambio = pagCambiada (sOld, sNew, i[x][0], i[x][1]);    
        x++;        
    } while (cambio == false)
    return false;
}

function pagCambiada (o, n, mO, smN) {
    var cambiada = false;
    let smO = mO.id;
    if (smN == '') {
        if (o.substring(o.length - smO.length) == smO) { cambiada = true; }
    } else {
        if ((o.substring(o.length - smO.length) == smO) && (n.substring(n.length - smN.length) == smN)) { cambiada = true; }
    }
    if (cambiada) { 
        let modal = bootstrap.Modal.getInstance(mO); 
        if (modal._isShown) { modal.hide(); } 

        //let nom = '#' + mO.id;
        //if ($(nom).hasClass('show')) {  $(nom).modal('hide');  }
    }
    return cambiada;
}




// Modal de configuración de columnas
function modalColTab(idModal, idDiv, idTabla) {
    // Cerrar otros modales si están abiertos
    const modalIds = [
        'modalColTabContactos',
        'modalColTabInteracciones',
        'modalColTabParticipantes'
    ];
    modalIds.forEach(modalId => {
        const modalElement = document.getElementById(modalId);
        if (modalElement) {
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            if (modalInstance) {
                modalInstance.hide();
                modalInstance.dispose();
            }
        }
    });

    var listFields = 'listFieldsContactos';
    if (idTabla == 'tabInteracciones') {
        listFields = 'listFieldsInteracciones';
    } else if (idTabla == 'tabParticipantes') {
        listFields = 'listFieldsParticipantes';
    }

    // Generar la estructura HTML del modal
    const h = `
        <div class="modal fade modal-dialog-scrollable" id="${idModal}" tabindex="-1" data-bs-backdrop="false">
            <div class="modal-dialog modal-md">
                <div class="modal-content rounded-4 shadow">
                    <div class="modal-header bg-light sticky-top">
                        <h6 class="modal-title">` + tExp('Columnas a mostrar', localStorage.getItem('idiomaPais')) + `</h6>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="${tExp("Cerrar", "")}" onclick="saveColumnConfig('${idTabla}')"></button>
                    </div>
                    <div class="modal-body" style="max-height: 300px; overflow-y: auto; width: auto;">
                        <form>
                            <div class="form-group" id="${listFields}">
                                ${listColNom(idTabla)}
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer bg-light sticky-bottom d-flex justify-content-center align-items-center"> 
                        <div class="row justify-content-between align-content-center gx-5 gy-0">
                            <div class="col-auto">
                                <button class="btn btn-outline-success" style="width: 50px;" onclick="moveSelectedColumn('${idTabla}', 'up')">
                                    <i class="bi bi-caret-up-fill"></i>
                                </button>
                            </div>
                            <div class="col-auto">
                                <button class="btn btn-outline-success" style="width: 50px;" onclick="moveSelectedColumn('${idTabla}', 'down')">
                                    <i class="bi bi-caret-down-fill"></i>
                                </button>                         
                            </div> 
                        </div>                       
                    </div>
                </div>
            </div>
        </div>`;

    // Insertar el modal en el contenedor
    const modalContainer = document.getElementById(idDiv);
    if (!modalContainer) {
        console.error(`No se encontró el contenedor con ID: ${idDiv}`);
        return;
    }
    modalContainer.innerHTML = h;

    // Inicializar y mostrar el modal
    const modalElement = document.getElementById(idModal);
    if (!modalElement) {
        console.error(`No se pudo crear el modal con ID: ${idModal}`);
        return;
    }

    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();

    // Seleccionar la primera fila después de un pequeño retraso
    //setTimeout(() => {
        const firstRowClass = getSelectableRowClass(idTabla);
        const firstRow = document.querySelector(`.${firstRowClass}`);
        if (firstRow) {
            selectRow(firstRow, idTabla);
        } else {
            console.warn('No se encontró la primera fila seleccionable.');
        }
    //}, 50);
}

// Obtener la clase de filas seleccionables según la tabla
function getSelectableRowClass(idTabla) {
    if (idTabla == 'tabInteracciones') return 'selectable-row2';
    if (idTabla == 'tabParticipantes') return 'selectable-row3';
    return 'selectable-row1'; // Default para tabContactos
}

// Generar la lista de columnas
function listColNom(idTabla) {
    const columns = $('#' + idTabla).bootstrapTable('getOptions').columns[0];
    let html = '<ul class="list-group">';
    const numSelectable = getSelectableRowClass(idTabla);

    columns.forEach((col, index) => {
        const isVisible = col.visible !== false;
        const colName = col.title || "";
        const isSwitchable = col.switchable !== false;
        const isForceHide = col.forceHide === true;

        // Excluir las columnas con forceHide o sin título
        if (!isForceHide && isSwitchable && colName.trim() !== "") {
            html += `
                <li class="list-group-item d-flex justify-content-between align-items-center ${numSelectable}" 
                    data-index="${index}" 
                    style="cursor: pointer;" 
                    onclick="selectRow(this, '${idTabla}')">
                    <div>
                        <input type="checkbox" class="form-check-input me-2" data-field="${col.field}" 
                            ${isVisible ? 'checked' : ''} 
                            onchange="toggleColumnVisibility('${idTabla}', '${col.field}', this.checked)">
                        <span>${colName}</span>
                    </div>
                </li>`;
        }
    });
    html += '</ul>';
    return html;
}

// Cambiar la visibilidad de una columna
function toggleColumnVisibility(idTabla, field, visible) {
    if (visible) {
        $('#' + idTabla).bootstrapTable('showColumn', field);
    } else {
        $('#' + idTabla).bootstrapTable('hideColumn', field);
    }
}

// Seleccionar una fila y destacar con fondo success claro y degradado
function selectRow(row, idTabla) {
    const rows = document.querySelectorAll(`.${getSelectableRowClass(idTabla)}`);
    rows.forEach(r => {
        r.style.background = ''; // Quitar el fondo de otras filas
        r.style.color = ''; // Quitar el color de texto
        r.style.border = ''; // Quitar el borde
    });
    row.style.background = 'linear-gradient(to right, #d4edda, #c3e6cb)'; // Fondo degradado claro
    row.style.color = '#155724'; // Color de texto verde oscuro
    row.style.border = '1px solid #c3e6cb'; // Bordes visibles
}

// Mover la columna seleccionada
function moveSelectedColumn(idTabla, direction) {
    const selectedRowClass = getSelectableRowClass(idTabla);
    let selectedRow = document.querySelector(`.${selectedRowClass}[style*="background"]`);
    if (!selectedRow) {
        alert('Seleccione una fila para mover');
        return;
    }

    let index = parseInt(selectedRow.getAttribute('data-index'), 10);
    let table = $('#' + idTabla);
    let columns = table.bootstrapTable('getOptions').columns[0];

    const limites = idTabla === 'tabContactos' ? 7 : 2;

    if ((direction === 'up' && index <= limites) || (direction === 'down' && index >= columns.length - 1)) {
        //alert('No se puede mover más en esa dirección');
        return;
    }

    if (direction === 'up') {
        [columns[index - 1], columns[index]] = [columns[index], columns[index - 1]];
    } else if (direction === 'down') {
        [columns[index], columns[index + 1]] = [columns[index + 1], columns[index]];
    }

    table.bootstrapTable('refreshOptions', { columns: columns });

    
    if (idTabla == 'tabParticipantes') { salirModalEvento = true; }

    let selectedRowIndex = index + (direction === 'up' ? -1 : 1);
    
    var listFieldsElement = document.getElementById('listFieldsContactos');
    if (idTabla == 'tabInteracciones') {
        listFieldsElement = document.getElementById('listFieldsInteracciones');
    } else if (idTabla == 'tabParticipantes') {
        listFieldsElement = document.getElementById('listFieldsParticipantes');
    }    

    listFieldsElement.innerHTML = listColNom(idTabla);

    //setTimeout(() => {
        const newSelectedRow = document.querySelector(`.${selectedRowClass}[data-index="${selectedRowIndex}"]`);
        if (newSelectedRow) {
            selectRow(newSelectedRow, idTabla);
        }
    //}, 50);
}
// Fin Modal de configuración de columnas




function formatearColumna (column) {
    if ((column.field === 'alt') || (column.field === 'ani') || (column.field === 'fin') || (column.field === 'ffi')) {
        column.formatter = fecFormato;
    } else if ((column.field === 'te1') || (column.field === 'te2')) {
        column.formatter = telFormato;
    } else if (column.field === 'cor') {
        column.formatter = corFormato;
    } else if (column.field === 'www') {
        column.formatter = webFormato;
    } else if (column.field === 'rol') {
        column.formatter = rolFormato;
    } else if ((column.field === 'eg1') || (column.field === 'eg2') || (column.field === 'eg3')) {
        column.formatter = elementoGrupoFormato;
    } else if ((column.field === 'et1') || (column.field === 'et2') || (column.field === 'et3')) {
        column.formatter = etiFormatoUno;
    } else if (column.field === 'eti') {
        column.formatter = etiFormato;
    } else if (column.field === 'lin') {
        column.formatter = linkedinFormato;
    } else if (column.field === 'tel') {
        column.formatter = telegramFormato;
    } else if (column.field === 'ins') {
        column.formatter = instagramFormato;
    } else if (column.field === 'mes') {
        column.formatter = messengerFormato;
    } else if (column.field === 'xxx') {
        column.formatter = xFormato;
    } else if ((column.field === 'fhii') || (column.field === 'reci')) {
        column.formatter = fecHorFormato;
    } else if (column.field === 'tipi') {
        column.formatter = tipoInteraccionFormato;
    } else if (column.field === 'etai') {
        column.formatter = etapaInteraccionFormato;
    } else if (column.field === 'resi') {
        column.formatter = resultadoInteraccionFormato;
    } else if (column.field === 'peni') {
        column.formatter = pendienteInteraccionFormato;
    }
}
















function cerrarModalCol () {
	if (modalColTabla._isShown) { modalColTabla.hide(); }
    return false;	
}

function cambiarHashAlCerrarModal() {
    history.go(-1);
    return false;
}



function modMsjCom(n, t, m, i) {
    let h = '<div class="modal fade modal-sm" id="dialogo' + n + '" tabindex="-1" data-bs-backdrop="false">';
    h +=    '   <div class="modal-dialog modal-dialog-centered">';
    h +=    '       <div class="modal-content">';
    h +=    '           <div class="modal-header bg-info">';
    h +=    '               <i class="bi bi-person-fill"></i>';
    h +=    ' 				<h6 class="modal-title">' + '&nbsp;' + t + '</h6>';
    h +=    '               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="' + tExp("Cerrar", "") + '"></button>';
    h +=    '          </div>';
    h +=    '          <div class="modal-body bg-light">';
    h +=    m;
    h +=    '          </div>';
    h +=    '      </div>';
    h +=    '  </div>';
    h +=    '</div>';
    i.innerHTML = h;
    let sn =  'dialogo' + n;
    comunicacionesContacto = new bootstrap.Modal(document.getElementById(sn));
    comunicacionesContacto.show();
    return false;
}

function modMsj(n, t, m, i, b) {
    let h = '<div class="modal" id="dialogo' + n + '" tabindex="-1" data-bs-backdrop="false">';
    h +=    '   <div class="modal-dialog">';
    h +=    '       <div class="modal-content">';
    h +=    '           <div class="modal-header bg-light">';
    h +=    '               <h5 class="modal-title">' + t + '</h5>';
    h +=    '               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="' + tExp("Cerrar", "") + '"></button>';
    h +=    '          </div>';
    h +=    '          <div class="modal-body">';
    h +=    '              <div align="center">';
    h +=    '                  <p>' + m + '</p>';
    h +=    '              </div>';
    h +=    '          </div>';
    h +=    '      </div>';
    h +=    '  </div>';
    h +=    '</div>';
    i.innerHTML = h;
    let sn =  'dialogo' + n;
    if (b) {
        history.replaceState(undefined, undefined, '#' + sn);
    } else {
        window.location.hash = '#' + sn;
    }
    let v = new bootstrap.Modal(document.getElementById(sn));
    v.show();
    return false;
}


function modMsjFinPruebaToast(n, t, m, o) {
    // Crear una capa de fondo semitransparente para bloquear la interacción
    let overlay = '<div id="toast-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); z-index: 1100;"></div>';
    document.body.insertAdjacentHTML('beforeend', overlay);

    // Crear el toast con un z-index más alto que el modal
    let h = '<div class="toast align-items-center position-fixed" id="toast' + n + '" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false" style="z-index: 1101; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; border: 1px solid rgba(0,0,0,0.2);">';
    h +=    '   <div class="toast-header bg-light">';
    h +=    '       <strong class="me-auto">' + t + '</strong>';
    h +=    '       <button type="button" class="btn-close" id="close-toast" aria-label="' + tExp("Cerrar", "") + '"></button>'; // Botón de cierre manual
    h +=    '   </div>';
    h +=    '   <div class="toast-body">';
    h +=    '       <div style="margin: 0; padding: 0;"><img src="./im/im4.jpg" alt="Test" style="width: 100%; height: auto;"></div>';
    h +=    '       <div style="text-align: center;" class="mt-3 mb-4">';
    h +=    '           <h4 class="fw-bold" style="color: orange;">' + m + '</h4>';
    h +=    '           <h6 class="fw-bold text-success">' + o + '</h6>';
    h +=    '       </div>';
    h +=    '       <div style="text-align: right;">';
    h +=    '           <button type="button" class="btn btn-outline-success btn-lg" onClick="opPrincipal(10);">';
    h +=    '               <i class="bi bi-palette2" style="font-size: 1.6rem; color: orange;"></i>&nbsp;<span>' + tExp('Planes PRO', '') + '</span>';
    h +=    '           </button>';
    h +=    '       </div>';
    h +=    '   </div>';
    h +=    '</div>';

    // Añadir el toast al final del body
    document.body.insertAdjacentHTML('beforeend', h);
    
    // Mostrar el toast
    let toastEl = document.getElementById('toast' + n);
    let toast = new bootstrap.Toast(toastEl);
    toast.show();

    // Deshabilitar el botón de cierre automático
    document.getElementById('close-toast').addEventListener('click', function() {
        // Cerrar el toast y eliminar la capa de fondo
        toast.hide();
        document.getElementById('toast-overlay').remove(); // Quitar la capa de fondo
        toastEl.remove(); // Eliminar el toast del DOM
    });

    return false;
}










function crearToastContacto(t, m, o, s)  {
    let h = '<div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-0">';
    h +=    '   <div id="liveToastContacto" class="toast d-inline bg-transparent" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">';
    h +=    '       <div class="toast-body">';
    h +=    '           <div class="d-flex">';
    h +=    '               <a href="#' + s + '" class="btn btn-success btn-lg rounded-circle" role="button" id="btnAgregarContacto" title="' + t + '" data-bs-toggle="tooltip" onClick="const tooltip1 = bootstrap.Tooltip.getInstance(this); tooltip1.hide(); regTabla(' + m + ', ' + o + ', 1)"><i class="bi bi-person-plus-fill" style="font-size: 1.4rem; color: currentColor;"></i></a>';
    h +=    '               <button type="button" class="btn-close btn-sm" data-bs-dismiss="toast" aria-label="' + tExp("Cerrar", "") + '" title="' + tExp("Cerrar", "") + '" data-bs-toggle="tooltip"></button>';
    h +=    '            </div>';
    h +=    '          </div>';
    h +=    '      </div>';
    h +=    '</div>';
    toaContacto.innerHTML = h;

    const toastElementContacto = document.getElementById('liveToastContacto');

    toastElementContacto.addEventListener('shown.bs.toast', function () {
    	activarTooltipsDiv('liveToastContacto');
    });

    // Evento hidden.bs.toast: Eliminar el Toast cuando la animación de ocultar haya finalizado
    toastElementContacto.addEventListener('hidden.bs.toast', function () {
    	desactivarTooltipsDiv('liveToastContacto');
        setTimeout(function() {
            toastElementContacto.remove();  // Eliminar el Toast del DOM
        }, 500);  // Opcional: pequeño retraso si lo deseas
    });
}



function toastSelFila(t, i) {
	if (t == 'http: no such file') { return false; }
    let h   =     '<div class="toast-container position-fixed top-50 start-50 translate-middle p-0">';
    h       +=    '<div class="toast align-items-center bg-success text-white p-1" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="true" data-bs-delay="2000" id="selFila">';
    h       +=    '<div class="d-flex justify-content-center">';
    h       +=    '<div class="toast-body fw-bold fs-2">' + t + '</div>';
    h       +=    '</div>';
    h       +=    '</div>';
    h       +=    '</div>';
    i.innerHTML = h;
    var toast = new bootstrap.Toast(document.getElementById('selFila'));
    toast.show();
}

function toastMsj(t, i, d, s, n) {
    // Verifica si el modal ya existe y lo elimina
    var existingToast = document.getElementById('toast' + n);
    if (existingToast) { existingToast.remove(); }

    let h   =     '<div class="toast-container position-fixed top-50 start-50 translate-middle p-0">';
    h       +=    '<div class="toast align-items-center bg-success text-white p-1" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="true" data-bs-delay="' + d + '" id="toast' + n + '">';
    h       +=    '<div class="d-flex justify-content-center">';
    h       +=    '<div class="toast-body fw-bold fs-' + s + '">' + t + '</div>';
    h       +=    '</div>';
    h       +=    '</div>';
    h       +=    '</div>';
    i.innerHTML = h;
    var toast = new bootstrap.Toast(document.getElementById('toast' + n));
    toast.show();
}

// Cadenas añadidas en la versión 4.0 sin alterar los índices de los catálogos
// históricos. El español continúa siendo siempre el texto fuente.
var mccExpComplementarias = {
    "Eliminar cuenta y datos": {ca:"Eliminar el compte i les dades",eu:"Ezabatu kontua eta datuak",gl:"Eliminar a conta e os datos",en:"Delete account and data",it:"Elimina account e dati",pt:"Eliminar conta e dados",fr:"Supprimer le compte et les données",de:"Konto und Daten löschen"},
    "Esta acción es irreversible.": {ca:"Aquesta acció és irreversible.",eu:"Ekintza hau itzulezina da.",gl:"Esta acción é irreversible.",en:"This action cannot be undone.",it:"Questa azione è irreversibile.",pt:"Esta ação é irreversível.",fr:"Cette action est irréversible.",de:"Diese Aktion kann nicht rückgängig gemacht werden."},
    "Se eliminarán permanentemente:": {ca:"S'eliminaran permanentment:",eu:"Betiko ezabatuko dira:",gl:"Eliminaranse permanentemente:",en:"The following will be permanently deleted:",it:"Verranno eliminati definitivamente:",pt:"Serão eliminados permanentemente:",fr:"Les éléments suivants seront définitivement supprimés :",de:"Folgendes wird dauerhaft gelöscht:"},
    "El espacio de trabajo, el propietario y todos sus miembros.": {ca:"L'espai de treball, el propietari i tots els membres.",eu:"Lan-eremua, jabea eta kide guztiak.",gl:"O espazo de traballo, o propietario da conta e todos os seus membros.",en:"The workspace, its owner, and all members.",it:"Lo spazio di lavoro, il proprietario e tutti i membri.",pt:"O espaço de trabalho, o proprietário e todos os membros.",fr:"L'espace de travail, son propriétaire et tous ses membres.",de:"Der Arbeitsbereich, der Kontoinhaber und alle Mitglieder."},
    "Los contactos, eventos, documentos y demás datos guardados en My Contacts Cloud.": {ca:"Els contactes, esdeveniments, documents i altres dades desades a My Contacts Cloud.",eu:"My Contacts Cloud-en gordetako kontaktuak, gertaerak, dokumentuak eta gainerako datuak.",gl:"Os contactos, eventos, documentos e demais datos gardados en My Contacts Cloud.",en:"Contacts, events, documents, and all other data stored in My Contacts Cloud.",it:"Contatti, eventi, documenti e tutti gli altri dati salvati in My Contacts Cloud.",pt:"Contactos, eventos, documentos e todos os outros dados guardados no My Contacts Cloud.",fr:"Les contacts, événements, documents et toutes les autres données enregistrées dans My Contacts Cloud.",de:"Kontakte, Termine, Dokumente und alle weiteren in My Contacts Cloud gespeicherten Daten."},
    "Las sesiones, configuraciones y accesos asociados a la cuenta.": {ca:"Les sessions, configuracions i accessos associats al compte.",eu:"Kontuarekin lotutako saioak, konfigurazioak eta sarbideak.",gl:"As sesións, configuracións e accesos asociados á conta.",en:"Sessions, settings, and access associated with the account.",it:"Le sessioni, le impostazioni e gli accessi associati all'account.",pt:"As sessões, configurações e acessos associados à conta.",fr:"Les sessions, réglages et accès associés au compte.",de:"Sitzungen, Einstellungen und Zugriffe, die mit dem Konto verknüpft sind."},
    "Perderás el acceso aunque quede tiempo contratado. La eliminación no genera automáticamente un reembolso.": {ca:"Perdràs l'accés encara que quedi temps contractat. L'eliminació no genera automàticament cap reemborsament.",eu:"Sarbidea galduko duzu kontratatutako denbora geratzen bada ere. Ezabatzeak ez du automatikoki dirurik itzultzen.",gl:"Perderás o acceso aínda que quede tempo contratado. A eliminación non xera automaticamente un reembolso.",en:"You will lose access even if paid time remains. Deletion does not automatically issue a refund.",it:"Perderai l'accesso anche se resta del tempo già pagato. L'eliminazione non genera automaticamente un rimborso.",pt:"Perderá o acesso mesmo que ainda reste tempo contratado. A eliminação não gera automaticamente um reembolso.",fr:"Vous perdrez l'accès même s'il reste une période payée. La suppression n'entraîne pas automatiquement de remboursement.",de:"Sie verlieren den Zugriff, auch wenn noch bezahlte Zeit verbleibt. Durch die Löschung erfolgt nicht automatisch eine Rückerstattung."},
    "Comprobando el estado de la suscripción…": {ca:"Comprovant l'estat de la subscripció…",eu:"Harpidetzaren egoera egiaztatzen…",gl:"Comprobando o estado da subscrición…",en:"Checking subscription status…",it:"Verifica dello stato dell'abbonamento…",pt:"A verificar o estado da subscrição…",fr:"Vérification de l'état de l'abonnement…",de:"Abonnementstatus wird geprüft…"},
    "Antes de eliminar tu cuenta y sus datos debes cancelar la renovación de la suscripción. Cuando la cancelación haya sido confirmada, vuelve a seleccionar «Eliminar cuenta y datos».": {ca:"Abans d'eliminar el compte i les dades, has de cancel·lar la renovació de la subscripció. Quan la cancel·lació estigui confirmada, torna a seleccionar «Eliminar el compte i les dades».",eu:"Kontua eta datuak ezabatu aurretik, harpidetzaren berritzea bertan behera utzi behar duzu. Ezeztapena baieztatu ondoren, hautatu berriro «Ezabatu kontua eta datuak».",gl:"Antes de eliminar a conta e os datos debes cancelar a renovación da subscrición. Cando se confirme a cancelación, volve seleccionar «Eliminar a conta e os datos».",en:"Before deleting your account and data, you must cancel subscription renewal. Once cancellation is confirmed, select “Delete account and data” again.",it:"Prima di eliminare l'account e i dati, devi annullare il rinnovo dell'abbonamento. Quando l'annullamento sarà confermato, seleziona nuovamente «Elimina account e dati».",pt:"Antes de eliminar a conta e os dados, tem de cancelar a renovação da subscrição. Quando o cancelamento for confirmado, selecione novamente «Eliminar conta e dados».",fr:"Avant de supprimer votre compte et vos données, vous devez annuler le renouvellement de l'abonnement. Une fois l'annulation confirmée, sélectionnez de nouveau « Supprimer le compte et les données ».",de:"Bevor Sie Ihr Konto und Ihre Daten löschen, müssen Sie die Verlängerung des Abonnements kündigen. Wählen Sie nach Bestätigung der Kündigung erneut „Konto und Daten löschen“ aus."},
    "Cancelar renovación": {ca:"Cancel·lar la renovació",eu:"Berritzea bertan behera utzi",gl:"Cancelar a renovación",en:"Cancel renewal",it:"Annulla rinnovo",pt:"Cancelar renovação",fr:"Annuler le renouvellement",de:"Verlängerung kündigen"},
    "Enviar correo de confirmación": {ca:"Enviar el correu de confirmació",eu:"Bidali berrespen-mezua",gl:"Enviar o correo de confirmación",en:"Send confirmation email",it:"Invia email di conferma",pt:"Enviar email de confirmação",fr:"Envoyer l'e-mail de confirmation",de:"Bestätigungs-E-Mail senden"},
    "Esta operación corresponde exclusivamente al propietario.": {ca:"Aquesta operació correspon exclusivament al propietari.",eu:"Eragiketa hau jabeari dagokio soilik.",gl:"Esta operación corresponde exclusivamente ao propietario da conta.",en:"Only the owner can perform this operation.",it:"Questa operazione può essere eseguita solo dal proprietario.",pt:"Esta operação só pode ser efetuada pelo proprietário.",fr:"Seul le propriétaire peut effectuer cette opération.",de:"Dieser Vorgang kann nur vom Kontoinhaber ausgeführt werden."},
    "Debes cancelar primero la renovación de la suscripción.": {ca:"Primer has de cancel·lar la renovació de la subscripció.",eu:"Lehenik harpidetzaren berritzea bertan behera utzi behar duzu.",gl:"Primeiro debes cancelar a renovación da subscrición.",en:"You must cancel subscription renewal first.",it:"Devi prima annullare il rinnovo dell'abbonamento.",pt:"Tem de cancelar primeiro a renovação da subscrição.",fr:"Vous devez d'abord annuler le renouvellement de l'abonnement.",de:"Sie müssen zuerst die Verlängerung des Abonnements kündigen."},
    "No se puede iniciar la eliminación en este momento.": {ca:"No es pot iniciar l'eliminació en aquest moment.",eu:"Une honetan ezin da ezabaketa hasi.",gl:"Non se pode iniciar a eliminación neste momento.",en:"Deletion cannot be started at this time.",it:"Al momento non è possibile avviare l'eliminazione.",pt:"Não é possível iniciar a eliminação neste momento.",fr:"La suppression ne peut pas être lancée pour le moment.",de:"Die Löschung kann derzeit nicht gestartet werden."},
    "La cuenta puede iniciar el proceso de eliminación.": {ca:"El compte pot iniciar el procés d'eliminació.",eu:"Kontuak ezabatze-prozesua has dezake.",gl:"A conta pode iniciar o proceso de eliminación.",en:"The account can start the deletion process.",it:"L'account può avviare la procedura di eliminazione.",pt:"A conta pode iniciar o processo de eliminação.",fr:"Le compte peut lancer le processus de suppression.",de:"Der Löschvorgang für das Konto kann gestartet werden."},
    "Preparando el correo de confirmación…": {ca:"Preparant el correu de confirmació…",eu:"Berrespen-mezua prestatzen…",gl:"Preparando o correo de confirmación…",en:"Preparing the confirmation email…",it:"Preparazione dell'email di conferma…",pt:"A preparar o email de confirmação…",fr:"Préparation de l'e-mail de confirmation…",de:"Bestätigungs-E-Mail wird vorbereitet…"},
    "Te hemos enviado un correo con el enlace para confirmar la eliminación.": {ca:"T'hem enviat un correu amb l'enllaç per confirmar l'eliminació.",eu:"Ezabaketa baieztatzeko esteka duen mezu bat bidali dizugu.",gl:"Enviámosche un correo coa ligazón para confirmar a eliminación.",en:"We have sent you an email with the link to confirm deletion.",it:"Ti abbiamo inviato un'email con il link per confermare l'eliminazione.",pt:"Enviámos-lhe um email com a ligação para confirmar a eliminação.",fr:"Nous vous avons envoyé un e-mail contenant le lien permettant de confirmer la suppression.",de:"Wir haben Ihnen eine E-Mail mit dem Link zur Bestätigung der Löschung gesendet."},
    "No se ha podido interpretar la respuesta del servidor.": {ca:"No s'ha pogut interpretar la resposta del servidor.",eu:"Ezin izan da zerbitzariaren erantzuna interpretatu.",gl:"Non se puido interpretar a resposta do servidor.",en:"The server response could not be read.",it:"Non è stato possibile interpretare la risposta del server.",pt:"Não foi possível interpretar a resposta do servidor.",fr:"La réponse du serveur n'a pas pu être interprétée.",de:"Die Serverantwort konnte nicht verarbeitet werden."},
    "No se ha podido completar la comprobación.": {ca:"No s'ha pogut completar la comprovació.",eu:"Ezin izan da egiaztapena osatu.",gl:"Non se puido completar a comprobación.",en:"The check could not be completed.",it:"Non è stato possibile completare la verifica.",pt:"Não foi possível concluir a verificação.",fr:"La vérification n'a pas pu être effectuée.",de:"Die Prüfung konnte nicht abgeschlossen werden."},
    "No se ha podido comprobar la suscripción.": {ca:"No s'ha pogut comprovar la subscripció.",eu:"Ezin izan da harpidetza egiaztatu.",gl:"Non se puido comprobar a subscrición.",en:"The subscription could not be checked.",it:"Non è stato possibile verificare l'abbonamento.",pt:"Não foi possível verificar a subscrição.",fr:"L'abonnement n'a pas pu être vérifié.",de:"Das Abonnement konnte nicht geprüft werden."},
    "No se ha podido crear la solicitud.": {ca:"No s'ha pogut crear la sol·licitud.",eu:"Ezin izan da eskaera sortu.",gl:"Non se puido crear a solicitude.",en:"The request could not be created.",it:"Non è stato possibile creare la richiesta.",pt:"Não foi possível criar o pedido.",fr:"La demande n'a pas pu être créée.",de:"Die Anfrage konnte nicht erstellt werden."},
    "No se ha podido enviar el correo de confirmación.": {ca:"No s'ha pogut enviar el correu de confirmació.",eu:"Ezin izan da berrespen-mezua bidali.",gl:"Non se puido enviar o correo de confirmación.",en:"The confirmation email could not be sent.",it:"Non è stato possibile inviare l'email di conferma.",pt:"Não foi possível enviar o email de confirmação.",fr:"L'e-mail de confirmation n'a pas pu être envoyé.",de:"Die Bestätigungs-E-Mail konnte nicht gesendet werden."},
    "La renovación no está activa. Puedes solicitar la eliminación de la cuenta y sus datos.": {ca:"La renovació no està activa. Pots sol·licitar l'eliminació del compte i les seves dades.",eu:"Berritzea ez dago aktibo. Kontua eta haren datuak ezabatzeko eska dezakezu.",gl:"A renovación non está activa. Podes solicitar a eliminación da conta e dos seus datos.",en:"Renewal is not active. You can request deletion of the account and its data.",it:"Il rinnovo non è attivo. Puoi richiedere l'eliminazione dell'account e dei relativi dati.",pt:"A renovação não está ativa. Pode solicitar a eliminação da conta e dos respetivos dados.",fr:"Le renouvellement n'est pas actif. Vous pouvez demander la suppression du compte et de ses données.",de:"Die Verlängerung ist nicht aktiv. Sie können die Löschung des Kontos und seiner Daten beantragen."},
    "Te hemos enviado un correo para confirmar la eliminación de la cuenta y sus datos.": {ca:"T'hem enviat un correu per confirmar l'eliminació del compte i les seves dades.",eu:"Kontua eta haren datuak ezabatzea baieztatzeko mezu bat bidali dizugu.",gl:"Enviámosche un correo para confirmar a eliminación da conta e dos seus datos.",en:"We have sent you an email to confirm deletion of the account and its data.",it:"Ti abbiamo inviato un'email per confermare l'eliminazione dell'account e dei relativi dati.",pt:"Enviámos-lhe um email para confirmar a eliminação da conta e dos respetivos dados.",fr:"Nous vous avons envoyé un e-mail pour confirmer la suppression du compte et de ses données.",de:"Wir haben Ihnen eine E-Mail zur Bestätigung der Löschung des Kontos und seiner Daten gesendet."},
    "Antes de eliminar tu cuenta y sus datos debes cancelar la renovación de la suscripción. Accede a la configuración de Paddle para cancelarla. Cuando la cancelación haya sido confirmada, vuelve a seleccionar \"Eliminar cuenta y datos\".": {ca:"Abans d'eliminar el compte i les dades, has de cancel·lar la renovació de la subscripció des de la configuració de Paddle. Quan estigui confirmada, torna a seleccionar «Eliminar el compte i les dades».",eu:"Kontua eta datuak ezabatu aurretik, harpidetzaren berritzea bertan behera utzi Paddle-ren konfigurazioan. Baieztatu ondoren, hautatu berriro «Ezabatu kontua eta datuak».",gl:"Antes de eliminar a conta e os datos debes cancelar a renovación desde a configuración de Paddle. Cando se confirme, volve seleccionar «Eliminar a conta e os datos».",en:"Before deleting your account and data, cancel subscription renewal in Paddle settings. Once confirmed, select “Delete account and data” again.",it:"Prima di eliminare l'account e i dati, annulla il rinnovo nelle impostazioni di Paddle. Dopo la conferma, seleziona nuovamente «Elimina account e dati».",pt:"Antes de eliminar a conta e os dados, cancele a renovação nas configurações da Paddle. Após a confirmação, selecione novamente «Eliminar conta e dados».",fr:"Avant de supprimer votre compte et vos données, annulez le renouvellement dans les réglages de Paddle. Une fois l'annulation confirmée, sélectionnez de nouveau « Supprimer le compte et les données ».",de:"Bevor Sie Ihr Konto und Ihre Daten löschen, kündigen Sie die Verlängerung in den Paddle-Einstellungen. Wählen Sie nach der Bestätigung erneut „Konto und Daten löschen“ aus."},
    "Antes de eliminar tu cuenta y sus datos debes cancelar la renovación de la suscripción. Accede a la configuración de facturación para cancelarla. Cuando la cancelación haya sido confirmada, vuelve a seleccionar \"Eliminar cuenta y datos\".": {ca:"Abans d'eliminar el compte i les dades, has de cancel·lar la renovació des de la configuració de facturació. Quan estigui confirmada, torna a seleccionar «Eliminar el compte i les dades».",eu:"Kontua eta datuak ezabatu aurretik, berritzea bertan behera utzi fakturazio-ezarpenetan. Baieztatu ondoren, hautatu berriro «Ezabatu kontua eta datuak».",gl:"Antes de eliminar a conta e os datos debes cancelar a renovación desde a configuración de facturación. Cando se confirme, volve seleccionar «Eliminar a conta e os datos».",en:"Before deleting your account and data, cancel renewal in billing settings. Once confirmed, select “Delete account and data” again.",it:"Prima di eliminare l'account e i dati, annulla il rinnovo nelle impostazioni di fatturazione. Dopo la conferma, seleziona nuovamente «Elimina account e dati».",pt:"Antes de eliminar a conta e os dados, cancele a renovação nas configurações de faturação. Após a confirmação, selecione novamente «Eliminar conta e dados».",fr:"Avant de supprimer votre compte et vos données, annulez le renouvellement dans les réglages de facturation. Une fois l'annulation confirmée, sélectionnez de nouveau « Supprimer le compte et les données ».",de:"Bevor Sie Ihr Konto und Ihre Daten löschen, kündigen Sie die Verlängerung in den Abrechnungseinstellungen. Wählen Sie nach der Bestätigung erneut „Konto und Daten löschen“ aus."}
};

function mccTExpComplementaria(s, id) {
    var entrada = mccExpComplementarias[s];
    if (!entrada) return null;
    var codigo = String(id || localStorage.getItem('idiomaPais') || navigator.language || 'es-ES').toLowerCase();
    var idioma = codigo.substring(0, 2);
    if (idioma == 'es') return s;
    return entrada[idioma] || entrada.en || s;
}

function tExp (s, id) {

    //alert('tExp: ' + id);
    if (id == '') { id = localStorage.getItem('idiomaPais'); }

    var p2 = exp_es_ES.indexOf(s);
    if (p2 == -1) {
        var complementaria = mccTExpComplementaria(s, id);
        return complementaria == null ? s : complementaria;
    } else {

        switch (id) {
            case 'es-es':
            case 'es-ES':
                return s;  
                break;
            case 'ca-es':
            case 'ca-ES':
                return exp_ca_ES[p2];
                break;
            case 'eu-es':
            case 'eu-ES':
                return exp_eu_ES[p2];
                break;
            case 'gl-es':
            case 'gl-ES':
                return exp_gl_ES[p2];
                break;
            case 'en-gb':
            case 'en-GB':
                return exp_en_GB[p2];
                break;
            case 'es-mx':
            case 'es-MX':
                return exp_es_MX[p2];
                break;
            case 'es-cl':
            case 'es-CL':
                return exp_es_CL[p2];
                break;
            case 'es-us':
            case 'es-US':
                return exp_es_US[p2];
                break;
            case 'en-us':
            case 'en-US':
                return exp_en_US[p2];
                break;
            case 'en-ca':
            case 'en-CA':
                return exp_en_CA[p2];
                break;                                                              
            case 'en-au':
            case 'en-AU':
                return exp_en_AU[p2];
                break;
            case 'it-it':
            case 'it-IT':
                return exp_it_IT[p2];
                break;
            case 'pt-pt':
            case 'pt-PT':
                return exp_pt_PT[p2];
                break;
            case 'pt-br':
            case 'pt-BR':
                return exp_pt_BR[p2];
                break;
            case 'fr-fr':
            case 'fr-FR':
                return exp_fr_FR[p2];
                break;
            case 'fr-ca':
            case 'fr-CA':
                return exp_fr_CA[p2];
                break;                                                              
            case 'de-de':
            case 'de-DE':
                return exp_de_DE[p2];
                break;
            case 'es-ar':
            case 'es-AR':
                return exp_es_AR[p2];
                break;
            case 'es-co':
            case 'es-CO':
                return exp_es_CO[p2];
                break;
            case 'es-pe':
            case 'es-PE':
                return exp_es_PE[p2];
                break;
            case 'es-uy':
            case 'es-UY':
                return exp_es_UY[p2];
                break;
            case 'en-nz':
            case 'en-NZ':
                return exp_en_NZ[p2];
                break;
            case 'en-ie':
            case 'en-IE':
                return exp_en_IE[p2];
                break;
            case 'en-in':
            case 'en-IN':
                return exp_en_IN[p2];
                break;
            case 'en-sg':
            case 'en-SG':
                return exp_en_SG[p2];
                break;
            case 'en-hk':
            case 'en-HK':
                return exp_en_HK[p2];
                break;                                                              
            case 'en-my':
            case 'en-MY':
                return exp_en_MY[p2];
                break;
            case 'fr-be':
            case 'fr-BE':
                return exp_fr_BE[p2];
                break;
            case 'fr-ch':
            case 'fr-CH':
                return exp_fr_CH[p2];
                break;
            case 'it-ch':
            case 'it-CH':
                return exp_it_CH[p2];
                break;
            case 'de-at':
            case 'de-AT':
                return exp_de_AT[p2];
                break;
            case 'de-be':
            case 'de-BE':
                return exp_de_BE[p2];
                break;                                                              
            case 'de-ch':
            case 'de-CH':
                return exp_de_CH[p2];
                break;
            case 'en-pk':
            case 'en-PK':
                return exp_en_PK[p2];
                break;
            case 'en-ng':
            case 'en-NG':
                return exp_en_NG[p2];
                break;
            case 'en-bd':
            case 'en-BD':
                return exp_en_BD[p2];
                break;
            case 'en-ph':
            case 'en-PH':
                return exp_en_PH[p2];
                break;
            case 'en-tz':
            case 'en-TZ':
                return exp_en_TZ[p2];
                break;                                                              
            case 'en-za':
            case 'en-ZA':
                return exp_en_ZA[p2];
                break;
            case 'en-ke':
            case 'en-KE':
                return exp_en_KE[p2];
                break;
            case 'en-ug':
            case 'en-UG':
                return exp_en_UG[p2];
                break;
            case 'en-gh':
            case 'en-GH':
                return exp_en_GH[p2];
                break;
            case 'en-mw':
            case 'en-MW':
                return exp_en_MW[p2];
                break;
            case 'en-zm':
            case 'en-ZM':
                return exp_en_ZM[p2];
                break;                                                              
            case 'en-zw':
            case 'en-ZW':
                return exp_en_ZW[p2];
                break;
            case 'en-cm':
            case 'en-CM':
                return exp_en_CM[p2];
                break;                                                       
            case 'en-lk':
            case 'en-LK':
                return exp_en_LK[p2];
                break;
            case 'es-ve':
            case 'es-VE':
                return exp_es_VE[p2];
                break;
            case 'es-gt':
            case 'es-GT':
                return exp_es_GT[p2];
                break;
            case 'es-ec':
            case 'es-EC':
                return exp_es_EC[p2];
                break;
            case 'es-bo':
            case 'es-BO':
                return exp_es_BO[p2];
                break;
            case 'es-cu':
            case 'es-CU':
                return exp_es_CU[p2];
                break;
            case 'es-do':
            case 'es-DO':
                return exp_es_DO[p2];
                break;
            case 'es-hn':
            case 'es-HN':
                return exp_es_HN[p2];
                break;
            case 'es-py':
            case 'es-PY':
                return exp_es_PY[p2];
                break;
            case 'es-sv':
            case 'es-SV':
                return exp_es_SV[p2];
                break;
            case 'es-ni':
            case 'es-NI':
                return exp_es_NI[p2];
                break;
            case 'es-pa':
            case 'es-PA':
                return exp_es_PA[p2];
                break;   
            case 'fr-cd':
            case 'fr-CD':
                return exp_fr_CD[p2];
                break;
            case 'fr-cm':
            case 'fr-CM':
                return exp_fr_CM[p2];
                break;
            case 'fr-mg':
            case 'fr-MG':
                return exp_fr_MG[p2];
                break;
            case 'fr-ci':
            case 'fr-CI':
                return exp_fr_CI[p2];
                break;
            case 'fr-bf':
            case 'fr-BF':
                return exp_fr_BF[p2];
                break;
            case 'fr-ne':
            case 'fr-NE':
                return exp_fr_NE[p2];
                break; 
            case 'fr-sn':
            case 'fr-SN':
                return exp_fr_SN[p2];
                break;
            case 'fr-ml':
            case 'fr-ML':
                return exp_fr_ML[p2];
                break;
            case 'fr-bj':
            case 'fr-BJ':
                return exp_fr_BJ[p2];
                break;
            case 'fr-rw':
            case 'fr-RW':
                return exp_fr_RW[p2];
                break;
            case 'fr-td':
            case 'fr-TD':
                return exp_fr_TD[p2];
                break;
            case 'fr-gn':
            case 'fr-GN':
                return exp_fr_GN[p2];
                break;  
            case 'pt-ao':
            case 'pt-AO':
                return exp_pt_AO[p2];
                break;
            case 'pt-mz':
            case 'pt-MZ':
                return exp_pt_MZ[p2];
                break;  
            default:
	            if (navigator.language.substring(0, 2) == 'es') {
	            	return exp_es_ES[p2];
	            } else {
	            	return exp_en_US[p2];
	            }
        }
	}
}


function traducirAtributosIdioma(raiz, idPa) {
    const aria = raiz.querySelectorAll('[aria-label]');
    aria.forEach((elemento) => {
        let original = elemento.getAttribute('data-mcc-i18n-aria-label');
        if (!original) {
            original = elemento.getAttribute('aria-label') || '';
            if (original) elemento.setAttribute('data-mcc-i18n-aria-label', original);
        }
        if (original) elemento.setAttribute('aria-label', tExp(original, idPa));
    });

    // Algunos botones desplegables antiguos contienen dos atributos
    // data-bs-toggle. El navegador conserva el de "dropdown", por lo que el
    // selector exclusivo de tooltips dejaba su title sin traducir.
    const tooltips = raiz.querySelectorAll('[title], [data-bs-original-title], [data-mcc-i18n-title]');
    tooltips.forEach((tooltip) => {
        let original = tooltip.getAttribute('data-mcc-i18n-title');
        if (!original) {
            original = tooltip.getAttribute('title') || tooltip.getAttribute('data-bs-original-title') || '';
            if (original) tooltip.setAttribute('data-mcc-i18n-title', original);
        }
        if (!original) return;

        const esTooltipBootstrap = tooltip.getAttribute('data-bs-toggle') === 'tooltip';
        const instancia = esTooltipBootstrap ? bootstrap.Tooltip.getInstance(tooltip) : null;
        if (instancia) instancia.dispose();
        const traducido = tExp(original, idPa);
        tooltip.setAttribute('title', traducido);
        tooltip.setAttribute('data-bs-original-title', traducido);
        if (esTooltipBootstrap) {
            new bootstrap.Tooltip(tooltip, {
                trigger: 'hover',
                delay: { show: 500, hide: 200 },
                boundary: 'viewport',
                container: 'body'
            });
        }
    });
}


function cambiarTextoIdioma(idPa) {
    const spans     = document.querySelectorAll('span');
    spans.forEach((span) => {
        if (!span.querySelector('*')) span.textContent = tExp(span.textContent, idPa);
    });

    const inputs    = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    inputs.forEach((input) => { input.placeholder = tExp(input.placeholder, idPa); });

    traducirAtributosIdioma(document, idPa);

    const labels 	= document.querySelectorAll('label');
    labels.forEach((label) => {
    	if ((label.id != 'etPolPriv') && (label.id != 'etContEncab') && (label.id != 'etTodoElDia'))   {
    		label.innerText = tExp(label.innerText, idPa);
    	}  
    });  

    const opciones 	= document.querySelectorAll('option');
    opciones.forEach((opcion) => { opcion.innerHTML = tExp(opcion.innerHTML, idPa); });

    cambiarEnlacesIdioma(idPa);
}



function cambiarTextoIdiomaDiv(idPa, d) {

	const divActivo = document.getElementById(d);

    const spans     = divActivo.querySelectorAll('span');
    spans.forEach((span) => {
        if (!span.querySelector('*')) span.textContent = tExp(span.textContent, idPa);
    });

    const inputs    = divActivo.querySelectorAll('input[placeholder], textarea[placeholder]');
    inputs.forEach((input) => { input.placeholder = tExp(input.placeholder, idPa); });

    traducirAtributosIdioma(divActivo, idPa);

    const labels 	= divActivo.querySelectorAll('label');
    labels.forEach((label) => {
    	if ((label.id != 'etPolPriv') && (label.id != 'etContEncab') && (label.id != 'etTodoElDia'))   {
    		label.innerText = tExp(label.innerText, idPa);
    	}  
    });  

    const opciones 	= divActivo.querySelectorAll('option');
    opciones.forEach((opcion) => { opcion.innerHTML = tExp(opcion.innerHTML, idPa); });

    if (d == 'modalMenu') {cambiarEnlacesIdioma(idPa);}
}


function cambiarEnlacesIdioma(id) {
	if (id == '') { id = localStorage.getItem('idiomaPais'); }
    const enlaces   = document.querySelectorAll('a[href]');
    enlaces.forEach((enlace) => { 
        if (enlace.id == 'recomendarAmigo') {

            switch (id) {
                case 'es-es':
                case 'es-ES':
                    enlace.href = "mailto:?subject=Recomendación%20App%20My%20Contacts%20Cloud&body=Hola%2C%0D%0A%0D%0ATe%20recomiendo%20que%20pruebes%20la%20App%20My%20Contacts%20Cloud.%20Es%20gratis%20y%20para%20siempre.%0D%0A%0D%0AAl%20hacer%20clic%20en%20https://mycontacts.cloud%20acceder%C3%A1s%20a%20la%20web%20de%20My%20Contacts%20y%20podr%C3%A1s%20suscribirte%20si%20te%20interesa.%0D%0A%0D%0ASaludos%20";
                    break;
                case 'ca-es':
                case 'ca-ES':
                	enlace.href = "mailto:?subject=Recomanació%20de%20l'aplicació%20My%20Contacts%20Cloud&body=Hola%2C%0D%0A%0D%0ATe%20recomano%20que%20proveïs%20l'aplicació%20My%20Contacts%20Cloud.%20És%20gratuïta%20i%20per%20sempre.%0D%0A%0D%0AEn%20fer%20clic%20a%20https://mycontacts.cloud%20accediràs%20a%20la%20web%20de%20My%20Contacts%20i%20podràs%20subscriure't%20si%20t'interessa.%0D%0A%0D%0ASalutacions%20";
                    break;
                case 'eu-es':
                case 'eu-ES':
                	enlace.href = "mailto:?subject=My%20Contacts%20Cloud%20Aplikazioaren%20Aholkua&body=Kaixo%2C%0D%0A%0D%0A%20My%20Contacts%20Cloud%20Aplikazioa%20probatzeko%20uste%20duzula%20aholkua.%20Doan%20eta%20betirako%20dago%20eskuragarri.%0D%0A%0D%0A%20Hemen%20sartuz%20https://mycontacts.cloud%20My%20Contacts%20webgunean%20ezazu%20zure%20izena%20ematea%20interesatzen%20bazait.%0D%0A%0D%0A%20Agurra%20";
                    break;
                case 'gl-es':
                case 'gl-ES':
                	enlace.href = "mailto:?subject=Recomendación%20de%20App%20My%20Contacts%20Cloud&body=Ola%2C%0D%0A%0D%0ARecoméndoche%20que%20probe%20a%20App%20My%20Contacts%20Cloud.%20É%20de%20balde%20e%20para%20sempre.%0D%0A%0D%0AAo%20facer%20clic%20en%20https://mycontacts.cloud%20accederás%20á%20web%20de%20My%20Contacts%20e%20poderás%20subscribirte%20se%20che%20interesa.%0D%0A%0D%0ASaúdos%20";
                    break;
                case 'en-gb':
                case 'en-GB':
                    enlace.href = "mailto:?subject=Recommendation%20My%20Contacts%20Cloud%20App&body=Hello%2C%0D%0A%0D%0AI%20recommend%20you%20to%20try%20the%20App%20My%20Contacts%20Cloud.%20It's%20free%20and%20forever.%0D%0A%0D%0ABy%20clicking%20on%20https://mycontacts.cloud%20you%20will%20access%20the%20My%20Contacts%20website%20and%20you%20can%20subscribe%20if%20you%20are%20interested.%0D%0A%0D%0ABest%20regards%20";
                    break;
                case 'es-mx':
                case 'es-MX':
                case 'es-cl':
                case 'es-CL': 
                case 'es-us':
                case 'es-US': 
		        case 'es-ar':
		        case 'es-AR':
		        case 'es-co':
		        case 'es-CO':
		        case 'es-pe':
		        case 'es-PE':
		        case 'es-uy':
		        case 'es-UY':
		        case 'es-ve':
		        case 'es-VE':
		        case 'es-gt':
		        case 'es-GT':
		        case 'es-ec':
		        case 'es-EC':
		        case 'es-bo':
		        case 'es-BO':
		        case 'es-cu':
		        case 'es-CU':
		        case 'es-do':
		        case 'es-DO':
		        case 'es-hn':
		        case 'es-HN':
		        case 'es-py':
		        case 'es-PY':
		        case 'es-sv':
		        case 'es-SV':
		        case 'es-ni':
		        case 'es-NI':
		        case 'es-pa':
		        case 'es-PA':
                	enlace.href = "mailto:?subject=Recomendación%20de%20la%20App%20My%20Contacts%20Cloud&body=Hola%2C%0D%0A%0D%0Ate%20recomiendo%20que%20pruebes%20la%20App%20My%20Contacts%20Cloud.%20Es%20gratis%20y%20para%20siempre.%0D%0A%0D%0AAl%20hacer%20clic%20en%20https://mycontacts.cloud%20accederás%20a%20la%20web%20de%20My%20Contacts%20y%20podrás%20suscribirte%20si%20te%20interesa.%0D%0A%0D%0ASaludos%20";
                    break;
                case 'en-us':
                case 'en-US':
                case 'en-ca':
                case 'en-CA':
                case 'en-au':
                case 'en-AU': 
		        case 'en-ie':
		        case 'en-IE':
		        case 'en-in':
		        case 'en-IN':
		        case 'en-sg':
		        case 'en-SG':
		        case 'en-hk':
		        case 'en-HK':
		        case 'en-my':
		        case 'en-MY':
		        case 'en-pk':
		        case 'en-PK': 
		        case 'en-ng':
		        case 'en-NG':      	
		        case 'en-bd':
		        case 'en-BD': 
		        case 'en-ph':
		        case 'en-PH':
		        case 'en-tz':
		        case 'en-TZ': 
		        case 'en-za':
		        case 'en-ZA':      	
		        case 'en-ke':
		        case 'en-KE': 
		        case 'en-ug':
		        case 'en-UG':
		        case 'en-gh':
		        case 'en-GH': 
		        case 'en-mw':
		        case 'en-MW':      	
		        case 'en-zm':
		        case 'en-ZM': 
		        case 'en-zw':
		        case 'en-ZW':
		        case 'en-cm':
		        case 'en-CM': 
		        case 'en-lk':
		        case 'en-LK':                                               	
                	enlace.href = "mailto:?subject=Recommendation%20of%20the%20My%20Contacts%20Cloud%20App&body=Hello%2C%0D%0A%0D%0AI%20recommend%20you%20try%20the%20My%20Contacts%20Cloud%20App.%20It's%20free%20and%20forever.%0D%0A%0D%0ABy%20clicking%20on%20https://mycontacts.cloud%20you%20will%20access%20the%20My%20Contacts%20website%20and%20can%20subscribe%20if%20you%20are%20interested.%0D%0A%0D%0ARegards%20";
                    break;
                case 'it-it':
                case 'it-IT':
		        case 'it-ch':
		        case 'it-CH':                	
                	enlace.href = "mailto:?subject=Consiglio%20per%20l'app%20My%20Contacts%20Cloud&body=Ciao%2C%0D%0A%0D%0Ati%20consiglio%20di%20provare%20l'app%20My%20Contacts%20Cloud.%20È%20gratuita%20per%20sempre.%0D%0A%0D%0AFacendo%20clic%20su%20https://mycontacts.cloud%20potrai%20accedere%20al%20sito%20web%20di%20My%20Contacts%20Cloud%20e%20iscriverti%2C%20se%20lo%20desideri.%0D%0A%0D%0AUn%20saluto%20";
                    break;
                case 'pt-pt':
                case 'pt-PT':
		        case 'pt-ao':
		        case 'pt-AO':
		        case 'pt-mz':
		        case 'pt-MZ':                 	
                	enlace.href = "mailto:?subject=Recomendação%20da%20App%20My%20Contacts%20Cloud&body=Olá%2C%0D%0A%0D%0ARecomendo%20que%20experimente%20a%20App%20My%20Contacts%20Cloud.%20É%20gratuita%20e%20para%20sempre.%0D%0A%0D%0A Ao%20clicar%20em%20https://mycontacts.cloud%20acessará%20o%20website%20do%20My%20Contacts%20e%20poderá%20subscrever-se%20se%20estiver%20interessado.%0D%0A%0D%0ACumprimentos%20";
                    break;
                case 'pt-br':
                case 'pt-BR':
                	enlace.href = "mailto:?subject=Recomendação%20do%20App%20My%20Contacts%20Cloud&body=Olá%2C%0D%0A%0D%0ARecomendo%20que%20experimente%20o%20App%20My%20Contacts%20Cloud.%20É%20gratuito%20e%20para%20sempre.%0D%0A%0D%0AAo%20clicar%20em%20https://mycontacts.cloud%20acessará%20o%20website%20do%20My%20Contacts%20e%20poderá%20subscrever-se%20se%20estiver%20interessado.%0D%0A%0D%0ACumprimentos%20";
                    break;
                case 'fr-fr':
                case 'fr-FR':
                case 'fr-ca':
                case 'fr-CA': 
		        case 'fr-be':
		        case 'fr-BE':
		        case 'fr-ch':
		        case 'fr-CH':
		        case 'fr-cd':
		        case 'fr-CD':
		        case 'fr-cm':
		        case 'fr-CM':
		        case 'fr-mg':
		        case 'fr-MG':
		        case 'fr-ci':
		        case 'fr-CI':
		        case 'fr-bf':
		        case 'fr-BF':   
		        case 'fr-ne':
		        case 'fr-NE':
		        case 'fr-sn':
		        case 'fr-SN':
		        case 'fr-ml':
		        case 'fr-ML':
		        case 'fr-bj':
		        case 'fr-BJ':
		        case 'fr-rw':
		        case 'fr-RW':                                                                      	
		        case 'fr-td':
		        case 'fr-TD':
		        case 'fr-gn':
		        case 'fr-GN':                               	
                	enlace.href = "mailto:?subject=Recommandation%20de%20l'application%20My%20Contacts%20Cloud&body=Bonjour%2C%0D%0A%0D%0Aje%20vous%20recommande%20d'essayer%20l'application%20My%20Contacts%20Cloud.%20C'est%20gratuit%20et%20pour%20toujours.%0D%0A%0D%0AEn%20cliquant%20sur%20https://mycontacts.cloud%20vous%20accéderez%20au%20site%20web%20de%20My%20Contacts%20et%20pourrez%20vous%20abonner%20si%20cela%20vous%20intéresse.%0D%0A%0D%0ASincères%20salutations%20";
                    break;                                                            
                case 'de-de':
                case 'de-DE':
		        case 'de-at':
		        case 'de-AT':
		        case 'de-be':
		        case 'de-BE':
		        case 'de-ch':
		        case 'de-CH':                	
                	enlace.href = "mailto:?subject=Empfehlung%20der%20My%20Contacts%20Cloud%20App&body=Hallo%2C%0D%0A%0D%0Aich%20empfehle%20Ihnen%2C%20die%20My%20Contacts%20Cloud%20App%20auszuprobieren.%20Sie%20ist%20kostenlos%20und%20für%20immer.%0D%0A%0D%0AIndem%20Sie%20auf%20https://mycontacts.cloud%20klicken%2C%20gelangen%20Sie%20zur%20My%20Contacts-Website%20und%20können%20sich%20registrieren%2C%20wenn%20Sie%20interessiert%20sind.%0D%0A%0D%0AMit%20freundlichen%20Grüßen%20";
                    break;
                default:
                    if (navigator.language.substring(0, 2) == 'es') {
                        enlace.href = "mailto:?subject=Recomendación%20App%20My%20Contacts%20Cloud&body=Hola%2C%0D%0A%0D%0ATe%20recomiendo%20que%20pruebes%20la%20App%20My%20Contacts%20Cloud.%20Es%20gratis%20y%20para%20siempre.%0D%0A%0D%0AAl%20hacer%20clic%20en%20https://mycontacts.cloud%20acceder%C3%A1s%20a%20la%20web%20de%20My%20Contacts%20y%20podr%C3%A1s%20suscribirte%20si%20te%20interesa.%0D%0A%0D%0ASaludos%20";
                    } else {
                        enlace.href = "mailto:?subject=Recommendation%20My%20Contacts%20Cloud%20App&body=Hello%2C%0D%0A%0D%0AI%20recommend%20you%20to%20try%20the%20App%20My%20Contacts%20Cloud.%20It's%20free%20and%20forever.%0D%0A%0D%0ABy%20clicking%20on%20https://mycontacts.cloud%20you%20will%20access%20the%20My%20Contacts%20website%20and%20you%20can%20subscribe%20if%20you%20are%20interested.%0D%0A%0D%0ABest%20regards%20";
                    }
            }
        }

    });    
}


function seleccionarIdioma(s, hayBoton) {
    var nomIm   = '';
    var txt     = '';
    switch (s) {
        case 'es-es':
        case 'es-ES':
            nomIm   = 'es';
            txt     = ' Español (España)';                  
            break;
        case 'ca-es':
        case 'ca-ES':
        case 'ca':
            nomIm   = 'es-ct';
            txt     = ' Català';  
            s 		= 'ca-ES';
            break;
        case 'eu-es':
        case 'eu-ES':
            nomIm   = 'es-pv';
            txt     = ' Euskara';  
            break;
        case 'gl-es':
        case 'gl-ES':
        case 'gl-gl':
        case 'gl-GL':
            nomIm   = 'es-ga';
            txt     = ' Galego';
            s 		= 'gl-ES';
            break;
        case 'en-gb':
        case 'en-GB':
            nomIm   = 'gb';
            txt     = ' English (Great Britain)';
            break;
        case 'es-mx':
        case 'es-MX':
            nomIm   = 'mx';
            txt     = ' Español (México)';
            break;
        case 'es-cl':
        case 'es-CL':
            nomIm   = 'cl';
            txt     = ' Español (Chile)';
            break;
        case 'es-us':
        case 'es-US':
            nomIm   = 'us';
            txt     = ' Español (Estados Unidos)';
            break;
        case 'es-ar':
        case 'es-AR':
            nomIm   = 'ar';
            txt     = ' Español (Argentina)';
            break;
        case 'es-co':
        case 'es-CO':
            nomIm   = 'co';
            txt     = ' Español (Colombia)';
            break;
        case 'es-pe':
        case 'es-PE':
            nomIm   = 'pe';
            txt     = ' Español (Perú)';
            break;
        case 'es-uy':
        case 'es-UY':
            nomIm   = 'uy';
            txt     = ' Español (Uruguay)';
            break;
        case 'es-ve':
        case 'es-VE':
            nomIm   = 've';
            txt     = ' Español (Venezuela)';
            break;
        case 'es-gt':
        case 'es-GT':
            nomIm   = 'gt';
            txt     = ' Español (Guatemala)';
            break; 
        case 'es-ec':
        case 'es-EC':
            nomIm   = 'ec';
            txt     = ' Español (Ecuador)';
            break; 
        case 'es-bo':
        case 'es-BO':
            nomIm   = 'bo';
            txt     = ' Español (Bolivia)';
            break; 
        case 'es-cu':
        case 'es-CU':
            nomIm   = 'cu';
            txt     = ' Español (Cuba)';
            break;
        case 'es-do':
        case 'es-DO':
            nomIm   = 'do';
            txt     = ' Español (R. Dominicana)';
            break; 
        case 'es-hn':
        case 'es-HN':
            nomIm   = 'hn';
            txt     = ' Español (Honduras)';
            break; 
        case 'es-py':
        case 'es-PY':
            nomIm   = 'py';
            txt     = ' Español (Paraguay)';
            break; 
        case 'es-sv':
        case 'es-SV':
            nomIm   = 'sv';
            txt     = ' Español (El Salvador)';
            break;            
        case 'es-ni':
        case 'es-NI':
            nomIm   = 'ni';
            txt     = ' Español (Nicaragua)';
            break;                                                             
        case 'es-pa':
        case 'es-PA':
            nomIm   = 'pa';
            txt     = ' Español (Panamá)';
            break;   
        case 'en-us':
        case 'en-US':
            nomIm   = 'us';
            txt     = ' English (United States)';
            break;
        case 'en-ca':
        case 'en-CA':
            nomIm   = 'ca';
            txt     = ' English (Canada)';
            break;                                                              
        case 'en-au':
        case 'en-AU':
            nomIm   = 'au';
            txt     = ' English (Australia)';
            break;
        case 'en-nz':
        case 'en-NZ':
            nomIm   = 'nz';
            txt     = ' English (New Zealand)';
            break;
        case 'en-ie':
        case 'en-IE':
            nomIm   = 'ie';
            txt     = ' English (Ireland)';
            break;
        case 'en-in':
        case 'en-IN':
            nomIm   = 'in';
            txt     = ' English (India)';
            break;
        case 'en-sg':
        case 'en-SG':
            nomIm   = 'sg';
            txt     = ' English (Singapore)';
            break;
        case 'en-hk':
        case 'en-HK':
            nomIm   = 'hk';
            txt     = ' English (Hong Kong)';
            break;
        case 'en-my':
        case 'en-MY':
            nomIm   = 'my';
            txt     = ' English (Malaysia)';
            break;
        case 'en-pk':
        case 'en-PK':
            nomIm   = 'pk';
            txt     = ' English (Pakistan)';
            break;
        case 'en-ng':
        case 'en-NG':
            nomIm   = 'ng';
            txt     = ' English (Nigeria)';
            break;
        case 'en-bd':
        case 'en-BD':
            nomIm   = 'bd';
            txt     = ' English (Bangladesh)';
            break;
        case 'en-ph':
        case 'en-PH':
            nomIm   = 'ph';
            txt     = ' English (Philippines)';
            break;
        case 'en-tz':
        case 'en-TZ':
            nomIm   = 'tz';
            txt     = ' English (Tanzania)';
            break;
        case 'en-za':
        case 'en-ZA':
            nomIm   = 'za';
            txt     = ' English (South Africa)';
            break;
        case 'en-ke':
        case 'en-KE':
            nomIm   = 'ke';
            txt     = ' English (Kenya)';
            break;  
        case 'en-ug':
        case 'en-UG':
            nomIm   = 'ug';
            txt     = ' English (Uganda)';
            break;   
        case 'en-gh':
        case 'en-GH':
            nomIm   = 'gh';
            txt     = ' English (Ghana)';
            break;
        case 'en-mw':
        case 'en-MW':
            nomIm   = 'mw';
            txt     = ' English (Malawi)';
            break;
        case 'en-zm':
        case 'en-ZM':
            nomIm   = 'zm';
            txt     = ' English (Zambia)';
            break;
        case 'en-zw':
        case 'en-ZW':
            nomIm   = 'zw';
            txt     = ' English (Zimbabwe)';
            break;
        case 'en-cm':
        case 'en-CM':
            nomIm   = 'cm';
            txt     = ' English (Cameroon)';
            break; 
        case 'en-lk':
        case 'en-LK':
            nomIm   = 'lk';
            txt     = ' English (Sri Lanka)';
            break;
        case 'it-it':
        case 'it-IT':
            nomIm   = 'it';
            txt     = ' Italiano (Italia)';
            break;
        case 'it-ch':
        case 'it-CH':
            nomIm   = 'ch';
            txt     = ' Italiano (Svizzera)';
            break;
        case 'pt-pt':
        case 'pt-PT':
            nomIm   = 'pt';
            txt     = ' Português (Portugal)';
            break;
        case 'pt-br':
        case 'pt-BR':
            nomIm   = 'br';
            txt     = ' Português (Brasil)';
            break;
        case 'pt-ao':
        case 'pt-AO':
            nomIm   = 'ao';
            txt     = ' Português (Angola)';
            break;
        case 'pt-mz':
        case 'pt-MZ':
            nomIm   = 'mz';
            txt     = ' Português (Moçambique)';
            break;
        case 'fr-fr':
        case 'fr-FR':
            nomIm   = 'fr';
            txt     = ' Français (France)';
            break;
        case 'fr-ca':
        case 'fr-CA':
            nomIm   = 'ca';
            txt     = ' Français (Canada)';
            break; 
        case 'fr-be':
        case 'fr-BE':
            nomIm   = 'be';
            txt     = ' Français (Belgique)';
            break;
        case 'fr-ch':
        case 'fr-CH':
            nomIm   = 'ch';
            txt     = ' Français (Suisse)';
            break;
        case 'fr-co':
        case 'fr-CD':
            nomIm   = 'co';
            txt     = ' Français (R. D. Congo)';
            break;
        case 'fr-cm':
        case 'fr-CM':
            nomIm   = 'cm';
            txt     = ' Français (Cameroun)';
            break; 
        case 'fr-mg':
        case 'fr-MG':
            nomIm   = 'mg';
            txt     = ' Français (Madagascar)';
            break;
        case 'fr-ci':
        case 'fr-CI':
            nomIm   = 'ci';
            txt     = " Français (Côte d'Ivoire)";
            break;
        case 'fr-bf':
        case 'fr-BF':
            nomIm   = 'bf';
            txt     = ' Français (Burkina Faso)';
            break;
        case 'fr-ne':
        case 'fr-NE':
            nomIm   = 'ne';
            txt     = ' Français (Niger)';
            break; 
        case 'fr-sn':
        case 'fr-SN':
            nomIm   = 'sn';
            txt     = ' Français (Sénégal)';
            break;
        case 'fr-ml':
        case 'fr-ML':
            nomIm   = 'ml';
            txt     = ' Français (Mali)';
            break;
        case 'fr-bj':
        case 'fr-BJ':
            nomIm   = 'bj';
            txt     = ' Français (Bénin)';
            break;
        case 'fr-rw':
        case 'fr-RW':
            nomIm   = 'rw';
            txt     = ' Français (Rwanda)';
            break; 
        case 'fr-td':
        case 'fr-TD':
            nomIm   = 'td';
            txt     = ' Français (Tchad)';
            break;
        case 'fr-gn':
        case 'fr-GN':
            nomIm   = 'gn';
            txt     = ' Français (Guinée)';
            break; 
        case 'de-de':
        case 'de-DE':
            nomIm   = 'de';
            txt     = ' Deutsch (Deutschland)';
            break;
        case 'de-at':
        case 'de-AT':
            nomIm   = 'at';
            txt     = ' Deutsch (Österreich)';
            break;
        case 'de-be':
        case 'de-BE':
            nomIm   = 'be';
            txt     = ' Deutsch (Belgien)';
            break;
        case 'de-ch':
        case 'de-CH':
            nomIm   = 'ch';
            txt     = ' Deutsch (Schweiz)';
            break;
        default:
        	var id = s.substring(0, 2);
            if (id == 'it') {
	            nomIm   = 'it';
	            txt     = ' Italiano (Italia)';
                s 		= 'it-IT';
			} else if (id == 'pt') {            
            	nomIm   = 'br';
            	txt     = ' Português (Brasil)';
                s 		= 'pt-BR';
			} else if (id == 'fr') {            
            	nomIm   = 'fr';
            	txt     = ' Français (France)';
                s 		= 'fr-FR';
            } else if (id == 'de') {            
            	nomIm   = 'de';
            	txt     = ' Deutsch (Deutschland)';
                s 		= 'de-DE';
			} else if (id == 'es') {            
                nomIm   = 'es';
                txt     = ' Español (España)';  
                s 		= 'es-ES';                
            } else { // inglés
	            nomIm   = 'us';
	            txt     = ' English (United States)';
	            s 		= 'en-US';
            }
    }
    if (hayBoton) {
    	document.getElementById('botonIdioma').innerHTML = '<svg class="icon"><use xlink:href="#' + nomIm + '"></use></svg> ' + txt;
    }
    return s;
}


function cambiarPolPri () {
	var x = 0;
    var idPa = localStorage.getItem('idiomaPais');
    const modal = document.getElementById('modalPoliticaPrivacidad');
    if (modal) {
        const spans = modal.querySelectorAll('span');
        spans.forEach((span) => {
            span.innerHTML = tExpPolPri(x, idPa);
            x = x + 1;
        });
    }
}

function tExpPolPri (i, id) {
    //var p2 = polPri_es_ES.indexOf(s);
    var p2 = i;
    if (p2 == -1) {
        return s;
    } else {
        switch (id) {
            case 'es-es':
            case 'es-ES':
                return polPri_es_ES[p2]; 
                break;
            case 'ca-es':
            case 'ca-ES':
                return polPri_ca_ES[p2];
                break;
            case 'eu-es':
            case 'eu-ES':
                return polPri_eu_ES[p2];
                break;
            case 'gl-es':
            case 'gl-ES':
                return polPri_gl_ES[p2];
                break;
            case 'en-gb':
            case 'en-GB':
                return polPri_en_GB[p2];
                break;
            case 'es-mx':
            case 'es-MX':
                return polPri_es_MX[p2];
                break;
            case 'es-cl':
            case 'es-CL':
                return polPri_es_CL[p2];
                break;
            case 'es-us':
            case 'es-US':
                return polPri_es_US[p2];
                break;
            case 'en-us':
            case 'en-US':
                return polPri_en_US[p2];
                break;
            case 'en-ca':
            case 'en-CA':
                return polPri_en_CA[p2];
                break;                                                              
            case 'en-au':
            case 'en-AU':
                return polPri_en_AU[p2];
                break;
            case 'it-it':
            case 'it-IT':
                return polPri_it_IT[p2];
                break;
            case 'pt-pt':
            case 'pt-PT':
                return polPri_pt_PT[p2];
                break;
            case 'pt-br':
            case 'pt-BR':
                return polPri_pt_BR[p2];
                break;

            case 'pt-ao':
            case 'pt-AO':
                return polPri_pt_AO[p2];
                break;
            case 'pt-mz':
            case 'pt-MZ':
                return polPri_pt_MZ[p2];
                break;

            case 'fr-fr':
            case 'fr-FR':
                return polPri_fr_FR[p2];
                break;
            case 'fr-ca':
            case 'fr-CA':
                return polPri_fr_CA[p2];
                break;                                                              
            case 'de-de':
            case 'de-DE':
                return polPri_de_DE[p2];
                break;
            case 'es-ar':
            case 'es-AR':
                return polPri_es_AR[p2];
                break;
            case 'es-co':
            case 'es-CO':
                return polPri_es_CO[p2];
                break;
            case 'es-pe':
            case 'es-PE':
                return polPri_es_PE[p2];
                break;
            case 'es-uy':
            case 'es-UY':
                return polPri_es_UY[p2];
                break;


            case 'es-ve':
            case 'es-VE':
                return polPri_es_VE[p2];
                break;
            case 'es-gt':
            case 'es-GT':
                return polPri_es_GT[p2];
                break;
            case 'es-ec':
            case 'es-EC':
                return polPri_es_EC[p2];
                break;
            case 'es-bo':
            case 'es-BO':
                return polPri_es_BO[p2];
                break;
            case 'es-cu':
            case 'es-CU':
                return polPri_es_CU[p2];
                break;
            case 'es-do':
            case 'es-DO':
                return polPri_es_DO[p2];
                break;  
            case 'es-hn':
            case 'es-HN':
                return polPri_es_HN[p2];
                break;
            case 'es-py':
            case 'es-PY':
                return polPri_es_PY[p2];
                break;
            case 'es-sv':
            case 'es-SV':
                return polPri_es_SV[p2];
                break;
            case 'es-ni':
            case 'es-NI':
                return polPri_es_NI[p2];
                break;
            case 'es-pa':
            case 'es-PA':
                return polPri_es_PA[p2];
                break;



            case 'en-nz':
            case 'en-NZ':
                return polPri_en_NZ[p2];
                break;
            case 'en-ie':
            case 'en-IE':
                return polPri_en_IE[p2];
                break;
            case 'en-in':
            case 'en-IN':
                return polPri_en_IN[p2];
                break;
            case 'en-sg':
            case 'en-SG':
                return polPri_en_SG[p2];
                break;
            case 'en-hk':
            case 'en-HK':
                return polPri_en_HK[p2];
                break;                                                              
            case 'en-my':
            case 'en-MY':
                return polPri_en_MY[p2];
                break;


            case 'en-pk':
            case 'en-PK':
                return polPri_en_PK[p2];
                break;
            case 'en-ng':
            case 'en-NG':
                return polPri_en_NG[p2];
                break;
            case 'en-bd':
            case 'en-BD':
                return polPri_en_BD[p2];
                break;
            case 'en-ph':
            case 'en-PH':
                return polPri_en_PH[p2];
                break;
            case 'en-tz':
            case 'en-TZ':
                return polPri_en_TZ[p2];
                break;
            case 'en-za':
            case 'en-ZA':
                return polPri_en_ZA[p2];
                break;
            case 'en-ke':
            case 'en-KE':
                return polPri_en_KE[p2];
                break;
            case 'en-ug':
            case 'en-UG':
                return polPri_en_UG[p2];
                break;
            case 'en-gh':
            case 'en-GH':
                return polPri_en_GH[p2];
                break;
            case 'en-mw':
            case 'en-MW':
                return polPri_en_MW[p2];
                break;
            case 'en-zm':
            case 'en-ZM':
                return polPri_en_ZM[p2];
                break;
            case 'en-zw':
            case 'en-ZW':
                return polPri_en_ZW[p2];
                break;
            case 'en-cm':
            case 'en-CM':
                return polPri_en_CM[p2];
                break;
            case 'en-lk':
            case 'en-LK':
                return polPri_en_LK[p2];
                break;
                                                                



            case 'fr-be':
            case 'fr-BE':
                return polPri_fr_BE[p2];
                break;
            case 'fr-ch':
            case 'fr-CH':
                return polPri_fr_CH[p2];
                break;


            case 'fr-cd':
            case 'fr-CD':
                return polPri_fr_CD[p2];
                break;
            case 'fr-cm':
            case 'fr-CM':
                return polPri_fr_CM[p2];
                break;
            case 'fr-mg':
            case 'fr-MG':
                return polPri_fr_MG[p2];
                break;
            case 'fr-ch':
            case 'fr-CH':
                return polPri_fr_CH[p2];
                break;
            case 'fr-ci':
            case 'fr-CI':
                return polPri_fr_CI[p2];
                break;
            case 'fr-bf':
            case 'fr-BF':
                return polPri_fr_BF[p2];
                break;
            case 'fr-be':
            case 'fr-BE':
                return polPri_fr_BE[p2];
                break;
            case 'fr-ne':
            case 'fr-NE':
                return polPri_fr_NE[p2];
                break;
            case 'fr-sn':
            case 'fr-SN':
                return polPri_fr_SN[p2];
                break;
            case 'fr-ml':
            case 'fr-ML':
                return polPri_fr_ML[p2];
                break;
            case 'fr-bj':
            case 'fr-BJ':
                return polPri_fr_BJ[p2];
                break;
            case 'fr-rw':
            case 'fr-RW':
                return polPri_fr_RW[p2];
                break;
            case 'fr-td':
            case 'fr-TD':
                return polPri_fr_TD[p2];
                break;
            case 'fr-gn':
            case 'fr-GN':
                return polPri_fr_GN[p2];
                break;




            case 'it-ch':
            case 'it-CH':
                return polPri_it_CH[p2];
                break;
            case 'de-at':
            case 'de-AT':
                return polPri_de_AT[p2];
                break;
            case 'de-be':
            case 'de-BE':
                return polPri_de_BE[p2];
                break;                                                              
            case 'de-ch':
            case 'de-CH':
                return polPri_de_CH[p2];
                break;
            default:
	            return polPri_en_US[p2];
        }

    }


}



function cambiarTerCon () {
    var idPa = localStorage.getItem('idiomaPais');
    var x = 0;
    const modal = document.getElementById('modalCondicionesUso');
    if (modal) {
        const spans = modal.querySelectorAll('span');
        spans.forEach((span) => {
            span.innerHTML = tExpTerCon(x, idPa);
            x = x + 1;
        });
    }
}

function tExpTerCon (i, id) {
    var p2 = i;
    if (p2 == -1) {
        return s;
    } else {
        switch (id) {
            case 'es-es':
            case 'es-ES':
                return terCon_es_ES[p2]; 
                break;
            case 'ca-es':
            case 'ca-ES':
                return terCon_ca_ES[p2];
                break;
            case 'eu-es':
            case 'eu-ES':
                return terCon_eu_ES[p2];
                break;
            case 'gl-es':
            case 'gl-ES':
                return terCon_gl_ES[p2];
                break;
            case 'en-gb':
            case 'en-GB':
                return terCon_en_GB[p2];
                break;
            case 'es-mx':
            case 'es-MX':
                return terCon_es_MX[p2];
                break;
            case 'es-cl':
            case 'es-CL':
                return terCon_es_CL[p2];
                break;
            case 'es-us':
            case 'es-US':
                return terCon_es_US[p2];
                break;
            case 'en-us':
            case 'en-US':
                return terCon_en_US[p2];
                break;
            case 'en-ca':
            case 'en-CA':
                return terCon_en_CA[p2];
                break;                                                              
            case 'en-au':
            case 'en-AU':
                return terCon_en_AU[p2];
                break;
            case 'it-it':
            case 'it-IT':
                return terCon_it_IT[p2];
                break;
            case 'pt-pt':
            case 'pt-PT':
                return terCon_pt_PT[p2];
                break;
            case 'pt-br':
            case 'pt-BR':
                return terCon_pt_BR[p2];
                break;
            case 'pt-ao':
            case 'pt-AO':
                return terCon_pt_AO[p2];
                break;
            case 'pt-mz':
            case 'pt-MZ':
                return terCon_pt_MZ[p2];
                break;
            case 'fr-fr':
            case 'fr-FR':
                return terCon_fr_FR[p2];
                break;
            case 'fr-ca':
            case 'fr-CA':
                return terCon_fr_CA[p2];
                break;                                                              
            case 'de-de':
            case 'de-DE':
                return terCon_de_DE[p2];
                break;
            case 'es-ar':
            case 'es-AR':
                return terCon_es_AR[p2];
                break;
            case 'es-co':
            case 'es-CO':
                return terCon_es_CO[p2];
                break;
            case 'es-pe':
            case 'es-PE':
                return terCon_es_PE[p2];
                break;
            case 'es-uy':
            case 'es-UY':
                return terCon_es_UY[p2];
                break;
            case 'es-ve':
            case 'es-VE':
                return terCon_es_VE[p2];
                break;
            case 'es-gt':
            case 'es-GT':
                return terCon_es_GT[p2];
                break;
            case 'es-ec':
            case 'es-EC':
                return terCon_es_EC[p2];
                break;
            case 'es-bo':
            case 'es-BO':
                return terCon_es_BO[p2];
                break;
            case 'es-cu':
            case 'es-CU':
                return terCon_es_CU[p2];
                break;
            case 'es-do':
            case 'es-DO':
                return terCon_es_DO[p2];
                break;  
            case 'es-hn':
            case 'es-HN':
                return terCon_es_HN[p2];
                break;
            case 'es-py':
            case 'es-PY':
                return terCon_es_PY[p2];
                break;
            case 'es-sv':
            case 'es-SV':
                return terCon_es_SV[p2];
                break;
            case 'es-ni':
            case 'es-NI':
                return terCon_es_NI[p2];
                break;
            case 'es-pa':
            case 'es-PA':
                return terCon_es_PA[p2];
                break;
            case 'en-nz':
            case 'en-NZ':
                return terCon_en_NZ[p2];
                break;
            case 'en-ie':
            case 'en-IE':
                return terCon_en_IE[p2];
                break;
            case 'en-in':
            case 'en-IN':
                return terCon_en_IN[p2];
                break;
            case 'en-sg':
            case 'en-SG':
                return terCon_en_SG[p2];
                break;
            case 'en-hk':
            case 'en-HK':
                return terCon_en_HK[p2];
                break;                                                              
            case 'en-my':
            case 'en-MY':
                return terCon_en_MY[p2];
                break;
            case 'en-pk':
            case 'en-PK':
                return terCon_en_PK[p2];
                break;
            case 'en-ng':
            case 'en-NG':
                return terCon_en_NG[p2];
                break;
            case 'en-bd':
            case 'en-BD':
                return terCon_en_BD[p2];
                break;
            case 'en-ph':
            case 'en-PH':
                return terCon_en_PH[p2];
                break;
            case 'en-tz':
            case 'en-TZ':
                return terCon_en_TZ[p2];
                break;
            case 'en-za':
            case 'en-ZA':
                return terCon_en_ZA[p2];
                break;
            case 'en-ke':
            case 'en-KE':
                return terCon_en_KE[p2];
                break;
            case 'en-ug':
            case 'en-UG':
                return terCon_en_UG[p2];
                break;
            case 'en-gh':
            case 'en-GH':
                return terCon_en_GH[p2];
                break;
            case 'en-mw':
            case 'en-MW':
                return terCon_en_MW[p2];
                break;
            case 'en-zm':
            case 'en-ZM':
                return terCon_en_ZM[p2];
                break;
            case 'en-zw':
            case 'en-ZW':
                return terCon_en_ZW[p2];
                break;
            case 'en-cm':
            case 'en-CM':
                return terCon_en_CM[p2];
                break;
            case 'en-lk':
            case 'en-LK':
                return terCon_en_LK[p2];
                break;
            case 'fr-be':
            case 'fr-BE':
                return terCon_fr_BE[p2];
                break;
            case 'fr-ch':
            case 'fr-CH':
                return terCon_fr_CH[p2];
                break;
            case 'fr-cd':
            case 'fr-CD':
                return terCon_fr_CD[p2];
                break;
            case 'fr-cm':
            case 'fr-CM':
                return terCon_fr_CM[p2];
                break;
            case 'fr-mg':
            case 'fr-MG':
                return terCon_fr_MG[p2];
                break;
            case 'fr-ch':
            case 'fr-CH':
                return terCon_fr_CH[p2];
                break;
            case 'fr-ci':
            case 'fr-CI':
                return terCon_fr_CI[p2];
                break;
            case 'fr-bf':
            case 'fr-BF':
                return terCon_fr_BF[p2];
                break;
            case 'fr-be':
            case 'fr-BE':
                return terCon_fr_BE[p2];
                break;
            case 'fr-ne':
            case 'fr-NE':
                return terCon_fr_NE[p2];
                break;
            case 'fr-sn':
            case 'fr-SN':
                return terCon_fr_SN[p2];
                break;
            case 'fr-ml':
            case 'fr-ML':
                return terCon_fr_ML[p2];
                break;
            case 'fr-bj':
            case 'fr-BJ':
                return terCon_fr_BJ[p2];
                break;
            case 'fr-rw':
            case 'fr-RW':
                return terCon_fr_RW[p2];
                break;
            case 'fr-td':
            case 'fr-TD':
                return terCon_fr_TD[p2];
                break;
            case 'fr-gn':
            case 'fr-GN':
                return terCon_fr_GN[p2];
                break;
            case 'it-ch':
            case 'it-CH':
                return terCon_it_CH[p2];
                break;
            case 'de-at':
            case 'de-AT':
                return terCon_de_AT[p2];
                break;
            case 'de-be':
            case 'de-BE':
                return terCon_de_BE[p2];
                break;                                                              
            case 'de-ch':
            case 'de-CH':
                return terCon_de_CH[p2];
                break;
            default:
	            return terCon_en_US[p2];
        }

    }


}


function localeTable (id) {
        switch (id) {
            case 'es-es':
            case 'es-ES':
            case 'es-us':
            case 'es-US':
                return 'es-ES'; 
                break;
            case 'gl-es':
            case 'gl-ES':
                mccCorregirLocaleBootstrapTableGalego();
                return 'gl-ES';
                break;
            case 'ca-es':
            case 'ca-ES':
                return 'ca-ES';
                break;
            case 'eu-es':
            case 'eu-ES':
                return 'eu-EU';
                break;
            case 'es-mx':
            case 'es-MX':
                return 'es-MX';
                break;
            case 'es-cl':
            case 'es-CL':
            case 'es-co':
            case 'es-CO':
            case 'es-pe':
            case 'es-PE':
            case 'es-uy':
            case 'es-UY':
            case 'es-ve':
            case 'es-VE':
            case 'es-gt':
            case 'es-GT':
            case 'es-ec':
            case 'es-EC':
            case 'es-bo':
            case 'es-BO':
            case 'es-cu':
            case 'es-CU':
            case 'es-do':
            case 'es-DO':
            case 'es-hn':
            case 'es-HN':
            case 'es-py':
            case 'es-PY':
            case 'es-sv':
            case 'es-SV':
            case 'es-ni':
            case 'es-NI':
            case 'es-pa':
            case 'es-PA':            	
                return 'es-CL';
                break;
            case 'es-ar':
            case 'es-AR':
                return 'es-AR';
                break;
            case 'en-us':
            case 'en-US':
            case 'en-gb':
            case 'en-GB':            	
            case 'en-ca':
            case 'en-CA':
            case 'en-au':
            case 'en-AU':
            case 'en-nz':
            case 'en-NZ':
            case 'en-ie':
            case 'en-IE':
            case 'en-in':
            case 'en-IN':
            case 'en-sg':
            case 'en-SG':
            case 'en-hk':
            case 'en-HK':
            case 'en-my':
            case 'en-MY': 
            case 'en-pk':
            case 'en-PK': 
            case 'en-ng':
            case 'en-NG':      	
            case 'en-bd':
            case 'en-BD': 
            case 'en-ph':
            case 'en-PH':
            case 'en-tz':
            case 'en-TZ': 
            case 'en-za':
            case 'en-ZA':      	
            case 'en-ke':
            case 'en-KE': 
            case 'en-ug':
            case 'en-UG':
            case 'en-gh':
            case 'en-GH': 
            case 'en-mw':
            case 'en-MW':      	
            case 'en-zm':
            case 'en-ZM': 
            case 'en-zw':
            case 'en-ZW':
            case 'en-cm':
            case 'en-CM': 
            case 'en-lk':
            case 'en-LK':            	
                return 'en-US';
                break;
            case 'it-it':
            case 'it-IT':
            case 'it-ch':
            case 'it-CH':            	
                return 'it-IT';
                break;
            case 'pt-pt':
            case 'pt-PT':
                return 'pt-PT';
                break;
            case 'pt-br':
            case 'pt-BR':
            case 'pt-ao':
            case 'pt-AO':
            case 'pt-mz':
            case 'pt-MZ':            	
                return 'pt-BR';
                break;
            case 'fr-fr':
            case 'fr-FR':
            case 'fr-ca':
            case 'fr-CA':
            case 'fr-cd':
            case 'fr-CD':
            case 'fr-cm':
            case 'fr-CM':
            case 'fr-mg':
            case 'fr-MG':
            case 'fr-ci':
            case 'fr-CI':
            case 'fr-bf':
            case 'fr-BF':   
            case 'fr-ne':
            case 'fr-NE':
            case 'fr-sn':
            case 'fr-SN':
            case 'fr-ml':
            case 'fr-ML':
            case 'fr-bj':
            case 'fr-BJ':
            case 'fr-rw':
            case 'fr-RW':                                                                      	
            case 'fr-td':
            case 'fr-TD':
            case 'fr-gn':
            case 'fr-GN':
                return 'fr-FR';
                break; 
            case 'fr-be':
            case 'fr-BE':
                return 'fr-BE';
                break; 
            case 'fr-ch':
            case 'fr-CH':
                return 'fr-CH';
                break;                 
            case 'de-de':
            case 'de-DE':
            case 'de-at':
            case 'de-AT':
            case 'de-be':
            case 'de-BE':
            case 'de-ch':
            case 'de-CH':
                return 'de-DE';
                break;
            default:
	            return 'en-US';
        }
}



function localeEvent (id) {
    switch (id) {
        case 'es-es':
        case 'es-ES':
       	case 'es-mx':
        case 'es-MX':
        case 'es-cl':
        case 'es-CL': 
        case 'es-ar':
        case 'es-AR':
        case 'es-co':
        case 'es-CO':
        case 'es-pe':
        case 'es-PE':
        case 'es-uy':
        case 'es-UY':
        case 'es-ve':
        case 'es-VE':
        case 'es-gt':
        case 'es-GT':
        case 'es-ec':
        case 'es-EC':
        case 'es-bo':
        case 'es-BO':
        case 'es-cu':
        case 'es-CU':
        case 'es-do':
        case 'es-DO':
        case 'es-hn':
        case 'es-HN':
        case 'es-py':
        case 'es-PY':
        case 'es-sv':
        case 'es-SV':
        case 'es-ni':
        case 'es-NI':
        case 'es-pa':
        case 'es-PA':                  	
        	return 'es'; 
            break;
        case 'es-us':
        case 'es-US':
        	return 'es-us'; 
            break;
        case 'gl-es': 
        case 'gl-ES': 
            return 'gl'; 
            break;
        case 'ca-es':
        case 'ca-ES':
            return 'ca';
            break;
        case 'eu-es':
        case 'eu-ES':
            return 'eu';
            break;
        case 'en-us':
        case 'en-US':
        case 'en-gb':
        case 'en-GB':            	
        case 'en-ca':
        case 'en-CA':
        case 'en-ie':
        case 'en-IE':
        case 'en-in':
        case 'en-IN':
        case 'en-sg':
        case 'en-SG':
        case 'en-hk':
        case 'en-HK':
        case 'en-my':
        case 'en-MY':
        case 'en-pk':
        case 'en-PK': 
        case 'en-ng':
        case 'en-NG':      	
        case 'en-bd':
        case 'en-BD': 
        case 'en-ph':
        case 'en-PH':
        case 'en-tz':
        case 'en-TZ': 
        case 'en-za':
        case 'en-ZA':      	
        case 'en-ke':
        case 'en-KE': 
        case 'en-ug':
        case 'en-UG':
        case 'en-gh':
        case 'en-GH': 
        case 'en-mw':
        case 'en-MW':      	
        case 'en-zm':
        case 'en-ZM': 
        case 'en-zw':
        case 'en-ZW':
        case 'en-cm':
        case 'en-CM':  
        case 'en-lk':
        case 'en-LK': 
            return 'en-gb';
            break;
        case 'en-au':
        case 'en-AU':
            return 'en-au';
            break;
        case 'en-nz':
        case 'en-NZ':
            return 'en-nz';
            break;            
        case 'it-it':
        case 'it-IT':
        case 'it-ch':
        case 'it-CH':        	
            return 'it';
            break;
        case 'pt-pt':
        case 'pt-PT':
            return 'pt';
            break;
        case 'pt-br':
        case 'pt-BR':
        case 'pt-ao':
        case 'pt-AO':
        case 'pt-mz':
        case 'pt-MZ':        	
            return 'pt-br';
            break;
        case 'fr-fr':
        case 'fr-FR':
        case 'fr-be':
        case 'fr-BE': 
        case 'fr-cd':
        case 'fr-CD':
        case 'fr-cm':
        case 'fr-CM':
        case 'fr-mg':
        case 'fr-MG':
        case 'fr-ci':
        case 'fr-CI':
        case 'fr-bf':
        case 'fr-BF':   
        case 'fr-ne':
        case 'fr-NE':
        case 'fr-sn':
        case 'fr-SN':
        case 'fr-ml':
        case 'fr-ML':
        case 'fr-bj':
        case 'fr-BJ':
        case 'fr-rw':
        case 'fr-RW':                                                                      	
        case 'fr-td':
        case 'fr-TD':
        case 'fr-gn':
        case 'fr-GN':
            return 'fr';
            break;
        case 'fr-ca':
        case 'fr-CA':
            return 'fr-ca';
            break;
        case 'fr-ch':
        case 'fr-CH':
            return 'fr-ch';
            break;
        case 'de-de':
        case 'de-DE':
        case 'de-be':
        case 'de-BE':
        case 'de-ch':
        case 'de-CH':        	
            return 'de';
            break;
        case 'de-at':
        case 'de-AT':
            return 'de-at';
            break;            
        default:
            return 'en-gb';            
    }
}


function nuevaSesionStripe(p, c) {
    async function datosDevueltos1() {
        var formData1 = new FormData();
        formData1.append('corElec', localStorage.getItem('correoElec'));
		formData1.append('uid', localStorage.getItem('uid'));
        formData1.append('idiPais', localStorage.getItem('idiomaPais'));
        formData1.append('precio', p);
        formData1.append('cancelado', c);
        const response1 = await fetch('https://' + window.location.host + '/sesionStripe', {
            method: 'POST',
            body:   formData1
        });
        const data = await response1.json();
        return data;
    }
    datosDevueltos1().then((data) => {
    	if (data.success) {
           	localStorage.setItem('idSesionStripe', data.data.value1);
	    	location.assign(data.data.value2);     		
    	} else {
			modal1("My Contacts Cloud", tExp(data.message, ""), document.getElementById("msjPlanes") || document.getElementById("msjModPrincipal"));
    	}
    }).catch(error => {
		modal1("My Contacts Cloud", error.message, document.getElementById("msjPlanes") || document.getElementById("msjModPrincipal"));
    });
}



function cambiarPlanEnStripe(p) {
	async function datosDevueltos1() {
	    var formData1 = new FormData();
	    formData1.append('corElec', localStorage.getItem('correoElec'));
	    formData1.append('uid', localStorage.getItem('uid'));
	    formData1.append('precio', 	p);
	    const response1 = await fetch('https://' + window.location.host + '/cambioEnSuscripcionPrueba', {
	        method: 'POST',
	        body:   formData1
	    });
	    const data = await response1.json();
	    return data;
	}
	datosDevueltos1().then((data) => {
		if (data.success) {
			localStorage.setItem('usuarios', 	data.data.value3);
			localStorage.setItem('plan', 		data.data.value4);  
			txtPrueba5.innerText = "PRO " + data.data.value4;  
			toastMsj(txtPlanCambiado(), msjPlanes, 1500, 4, 1);
		} else {
			modal1("My Contacts Cloud", tExp(data.message, ""), document.getElementById("msjPlanes") || document.getElementById("msjModPrincipal"));
		}
	}).catch(error => {
		modal1("My Contacts Cloud", error.message, document.getElementById("msjPlanes") || document.getElementById("msjModPrincipal"));
	});
}



function nuevaSuscripcionStripe() {
    async function datosDevueltos1() {
        var formData1 = new FormData();
        formData1.append('idSesion', 	localStorage.getItem('idSesionStripe'));
        formData1.append('corElec', 	localStorage.getItem('correoElec'));
		formData1.append('uid', localStorage.getItem('uid'));
        const response1 = await fetch('https://' + window.location.host + '/suscripcionStripe', {
            method: 'POST',
            body:   formData1
        });
        const data = await response1.json();
        return data;
    }
    datosDevueltos1().then((data) => {
    	if (data.success) {
    		localStorage.setItem('usuarios', 			data.data.value3);
    		localStorage.setItem('plan', 				data.data.value4);
		    localStorage.setItem('estadoSuscripcion', 	data.data.value5);
		    localStorage.setItem('diasPruebaRestantes', data.data.value6);
		    localStorage.setItem('pruebaCancelada', 	data.data.value7);    		
    		libIdioma(localStorage.getItem('idiomaPais'), 10);
    	} else {
			modal1("My Contacts Cloud", tExp(data.message, ""), document.getElementById("msjPlanes") || document.getElementById("msjModPrincipal"));
    	}
    }).catch(error => {
		modal1("My Contacts Cloud", error.message, document.getElementById("msjPlanes") || document.getElementById("msjModPrincipal"));
    });
}

function abrirPortalStripe() {
    async function datosDevueltos1() {
        var formData1 = new FormData();
        formData1.append('corElec', localStorage.getItem('correoElec'));
		formData1.append('uid', localStorage.getItem('uid'));
        formData1.append('idiPais', localStorage.getItem('idiomaPais'));
        const response1 = await fetch('https://' + window.location.host + '/portalStripe', {
            method: 'POST',
            body:   formData1
        });
        const data = await response1.json();
        return data;
    }
    datosDevueltos1().then((data) => {
    	if (data.success) {
    		location.assign(data.data.value1);
    	} else {
			modal1("My Contacts Cloud", tExp(data.message, ""), document.getElementById("msjPlanes") || document.getElementById("msjModPrincipal"));
    	}
    }).catch(error => {
		modal1("My Contacts Cloud", error.message, document.getElementById("msjPlanes") || document.getElementById("msjModPrincipal"));
    });
}


function crearEstilo(c, d, a, b) {
		// Create a <style> element
	const styleElement = document.createElement('style');

	// Define the CSS rules
	const cssRules = `
	  @media (min-width: 993px) {
	    #` + c + `:after  { content: '  ` + a + `';}
	    #` + d + `:after { content: '  ` + b + `';}
	  }
	`;

	// Add the CSS rules to the <style> element
	styleElement.innerHTML = cssRules;

	// Append the <style> element to the document's <head>
	document.head.appendChild(styleElement);
}

function nueContra() {
	mostrarModal(tExp("¿Recibir nueva contraseña por correo electrónico?", ''), async () => {
		async function datosDevueltos1() {
	        var formData1 = new FormData();
	        formData1.append('nom', 		localStorage.getItem('nombre'));
	        formData1.append('cor', 		localStorage.getItem('correoElec'));
	        formData1.append('prefijo', 	localStorage.getItem('prefijo'));
	        formData1.append('idiomaPais', 	localStorage.getItem('idiomaPais'));
	        const response1 = await fetch('https://' + window.location.host + '/nuevaContrasena', {
	            method: 'POST',
	            body:   formData1
	        });
	        const data = await response1.json();
	        return data;
	    }
	    datosDevueltos1().then((data) => {
	    	if (data.success) {
	    		modal1("My Contacts Cloud", tExp("Nueva contraseña enviada. Si se trata de una cuenta Gmail, posiblemente esté en Promociones. Revisa la carpeta Spam si no encuentra el mensaje.", ""), msjIndex);
	    	} else {
	    		modal1("My Contacts Cloud", tExp(data.message, ""), msjIndex);
	    	}
	    }).catch(error => {
	        modal1("My Contacts Cloud", error.message, msjIndex);
	    });
	});
}

function isValidEmail(email) {
  // Regular expression for validating an email address
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/;

  return emailRegex.test(email);
}


function listaNomParticipantesEvento() {
	//const t = $('#tabParticipantes').bootstrapTable('getData');
	//const f = t.map(row => {
	  //return { per: row.per };
	//});
	var s = '';
	//for (const i of f) {
		//if (s != '') { s += ', '; }
	  	//s += i.per;
	//}
	return s;
}



function validarIniSesion(tipo, idUs, nomUs, corElecUs, contra, authTicket = "") {
	const invitacionPendiente = window.__mccInvitacionPendiente || {};
	const tokenInvitacion = invitacionPendiente.token || localStorage.getItem('tokenInvitacion') || '';
	const prefijoInvitacion = invitacionPendiente.prefijo || localStorage.getItem('prefijoInvitacion') || '';
	const correoInvitacion = String(
		invitacionPendiente.correo || localStorage.getItem('correoInvitacion') || ''
	).trim().toLowerCase();
	const correoIdentificado = String(corElecUs || '').trim().toLowerCase();

	if (tokenInvitacion && correoInvitacion && correoIdentificado !== correoInvitacion) {
		modal1(
			"My Contacts Cloud",
			"La cuenta seleccionada no coincide con el correo electrónico autorizado por el propietario: " + correoInvitacion,
			msjIndex
		);
		return;
	}

	const uidAnterior = localStorage.getItem('uid') || '';
	var uid 		= crypto.randomUUID();
	let formData2 	= new FormData();
	formData2.append('tipo', 		tipo); // 0 normal, 1 google, 2 microsoft, 3 apple
	formData2.append('idUs', 		idUs);
	formData2.append('nomUs', 		nomUs);
	formData2.append('corElecUs', 	corElecUs);
	formData2.append('contrasena', 	contra);
	formData2.append('uid', 		uid);
	formData2.append('uidAnterior', uidAnterior);
	formData2.append('idiomaPais', 	localStorage.getItem('idiomaPais'));
	formData2.append('tokenInvitacion', tokenInvitacion);
	formData2.append('prefijoInvitacion', prefijoInvitacion);
	if ((String(tipo) === '1' || String(tipo) === '2') && authTicket) {
		formData2.append('authTicket', authTicket);
	}
	if (String(tipo) === '3' && window.__mccAppleRevocationTicket) {
		formData2.append('appleRevocationTicket', window.__mccAppleRevocationTicket);
	}
    async function datosDevueltos() {
        const response = await fetch('https://' + window.location.host + '/iniSesion', {
            method: 'POST',
            body: 	formData2
        });
        const data = await response.json();
        return data;
    }
    datosDevueltos().then((data) => {
    	if (data.success) {
			if (String(tipo) === '3') {
				window.__mccAppleRevocationTicket = '';
			}
            localStorage.setItem('prefijo', 		data.data.value1);
            localStorage.setItem('nombre', 			data.data.value2);
            localStorage.setItem('usuarios', 		data.data.value3);
            localStorage.setItem('idiomaPais', 		data.data.value4);
            localStorage.setItem('maxRegFree', 		data.data.value5);
            localStorage.setItem('plan', 			data.data.value6);
			const rolResuelto = data.data.rolUsuario === 'owner' || data.data.rolUsuario === 'member' ? data.data.rolUsuario : '';
			localStorage.setItem('rolUsuario', rolResuelto);
			if (rolResuelto === 'owner' && (data.data.sistemaPagos == 1 || data.data.sistemaPagos == 2)) {
				localStorage.setItem('sistemaPagos', String(data.data.sistemaPagos));
			} else {
				localStorage.removeItem('sistemaPagos');
			}
			localStorage.removeItem('tokenInvitacion');
			localStorage.removeItem('correoInvitacion');
			localStorage.removeItem('prefijoInvitacion');
			localStorage.removeItem('nuevoMiembro');
			window.__mccInvitacionPendiente = null;

		    localStorage.setItem('nomRef1', 		data.data.nomRef1);
		    localStorage.setItem('nomRef2', 		data.data.nomRef2);
		    localStorage.setItem('nomRef3', 		data.data.nomRef3);
		    localStorage.setItem('nomRef4', 		data.data.nomRef4);
		    localStorage.setItem('titPref1', 		data.data.titPref1);
		    localStorage.setItem('titPref2', 		data.data.titPref2);
		    localStorage.setItem('titPref3', 		data.data.titPref3);
		    localStorage.setItem('titPref4', 		data.data.titPref4);
		    localStorage.setItem('titPref5', 		data.data.titPref5);
		    localStorage.setItem('titPref6', 		data.data.titPref6);

		    localStorage.setItem('nomGrupo1', 		data.data.nomGrupo1);
		    localStorage.setItem('nomGrupo2', 		data.data.nomGrupo2);
		    localStorage.setItem('nomGrupo3', 		data.data.nomGrupo3);		    

		    localStorage.setItem('weekends', 		data.data.weekends);
		    localStorage.setItem('slotMinTime', 	data.data.slotMinTime);
		    localStorage.setItem('slotMaxTime', 	data.data.slotMaxTime);
		    localStorage.setItem('slotDuration', 	data.data.slotDuration);
		    localStorage.setItem('totRegContactos', data.data.totRegContactos);
		    localStorage.setItem('usuarioMensaje', 	data.data.usuarioMensaje);

		    let vEstSus = data.data.estado;

		    //if ((vEstSus == 'cancelado') || (vEstSus == 'canceled') || (vEstSus == ' ') || (vEstSus == ''))  { // cyber week
		    	//localStorage.setItem('estadoSuscripcion', 'probando');
		    	//localStorage.setItem('pruebaCancelada', 0);	
		    	//localStorage.setItem('diasPruebaRestantes', 0);
		    //} else {
		    	localStorage.setItem('estadoSuscripcion', data.data.estado);
		    	localStorage.setItem('pruebaCancelada', data.data.pruebaCancelada);	
		    	localStorage.setItem('diasPruebaRestantes', data.data.diasPrueba);	    	
		    //}
		    

	            localStorage.setItem('correoElec', 		corElecUs);
	            localStorage.setItem('tipoSesion', 		tipo);
	            localStorage.setItem('idSesion', 		idUs);
	            localStorage.setItem('procValida', 		true);
	            if (localStorage.getItem('cerrarSesion') === null) {
	                localStorage.setItem('cerrarSesion', 0);
	            }
	            if (typeof mccLimpiarSupresionRestauracionSalidaMcc === "function") {
	                mccLimpiarSupresionRestauracionSalidaMcc();
	            }
	            //localStorage.setItem('sSolicitado0', 	'principal');
            localStorage.setItem('permisosGrupo', 	'111111');
            localStorage.setItem('uid', 			uid);

            localStorage.setItem('divAnt', '');
            localStorage.setItem('divNue', 'menu');


			// Agsignar cliente de correo según el tipo en caso de no existir todavía clienteCorreo
			if (localStorage.getItem("clienteCorreo") === null) {
				localStorage.setItem("clienteCorreo", tipo);
			}


            //history.replaceState({ page: 'principal' }, 'Principal', 'principal.html');


			//const esAppMac = typeof window.webkit !== "undefined" && window.webkit.messageHandlers;
			//if (esAppMac && window.webkit.messageHandlers.cerrarVentanaSecundaria) {
			    // Pide a la app Mac cerrar esta ventana
			    //window.webkit.messageHandlers.cerrarVentanaSecundaria.postMessage("close");
			//}

			//if ((esIOS) && (localStorage.getItem('redireccion') == 'microsoft')) {
				//localStorage.setItem('redireccion') = '';
			//} else {
				location.replace('https://' + window.location.host + '/app/principal.html');	
			//}

    	} else {
			if (String(tipo) === '3' && String(data.message || '').includes('sesión de Apple')) {
				if (typeof mccLimpiarTokensApple === 'function') mccLimpiarTokensApple();
				localStorage.removeItem('uid');
			}
    		if (data.message == 'dirCorElecDesconocido') {
                let formNueCor1 = new bootstrap.Modal(formNueCor);
                formNueCor1.show();
    		} else if (data.message == 'Contraseña incorrecta') {
				modal1("My Contacts Cloud", txtContrasenaIncorrecta(), msjIndex);
    		} else {
	            modal1("My Contacts Cloud", tExp(data.message, ""), msjIndex);
    		}
    	}
    }).catch(error => {
        modal1("My Contacts Cloud", error.message, msjIndex);
    });
};


function esDispositivoiOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

// Verificar si es iOS o macOS y el navegador es Safari
function esIOSoMacSafari() {
  // Obtener el nombre del sistema operativo desde la propiedad 'platform'
  const sistemaOperativo = navigator.platform.toLowerCase();

  // Obtener la cadena del agente del usuario desde la propiedad 'userAgent'
  const agenteUsuario = navigator.userAgent.toLowerCase();

  // Verificar si es iOS o macOS y si el navegador es Safari
  return (sistemaOperativo.includes('mac') || sistemaOperativo.includes('ipad') || sistemaOperativo.includes('iphone')) &&
         agenteUsuario.includes('safari') && !agenteUsuario.includes('chrome');
}

function pantallaCompletaIOS() {
	// Verificar si el navegador es Safari en un dispositivo iOS
	const esSafariEnIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

	if (esSafariEnIOS) {
	  const elemento = document.documentElement;

	  if (elemento.webkitEnterFullscreen) {
	    elemento.webkitEnterFullscreen();
	  }
	} else {
	  // Si no estás en Safari en un dispositivo iOS, intenta la API estándar de pantalla completa
	  if (document.documentElement.requestFullscreen) {
	    document.documentElement.requestFullscreen();
	  } else if (document.documentElement.webkitRequestFullscreen) {
	    // Para versiones antiguas de Safari
	    document.documentElement.webkitRequestFullscreen();
	  } else if (document.documentElement.mozRequestFullScreen) {
	    // Para navegadores basados en Gecko (Firefox)
	    document.documentElement.mozRequestFullScreen();
	  } else if (document.documentElement.msRequestFullscreen) {
	    // Para navegadores de Microsoft (Internet Explorer y Edge)
	    document.documentElement.msRequestFullscreen();
	  }
	}

}









function mostrarModal(pregunta, callback) {
	// Función para mostrar un modal con botones "Sí/No"
    // Crea el modal dinámicamente

    // Verifica si el modal ya existe y lo elimina
    var existingModal = document.getElementById('confirmModal');
    if (existingModal) {
        existingModal.remove();
    }

    var modalHTML = `
        <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="confirmModalLabel" data-bs-backdrop="false">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-light">
                        <h5 class="modal-title" id="confirmModalLabel">` + tExp("Confirmar", "") + `</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="${tExp("Cerrar", "")}"></button>
                    </div>
                    <div class="modal-body">
                        ${pregunta}
                    </div>
                    <div class="modal-footer bg-light">
                        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">` + tExp("No", "") + `</button>
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal" id="modalYesButton">` + tExp("Sí", "") + `</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Agrega el modal al final del body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Obtiene el botón "Sí" del modal
    var modalYesButton = document.getElementById("modalYesButton");

    // Añade un evento al botón "Sí" para llamar al callback y luego cerrar el modal
    modalYesButton.addEventListener("click", function() {
        callback();
        //var modal = new bootstrap.Modal(document.getElementById("confirmModal"));
        //modal.hide();
    });

    // Muestra el modal
    var modal = new bootstrap.Modal(document.getElementById("confirmModal"));
    modal.show();
}



function fecFormato(value, row) { return formatoFecha(value); }
function corFormato(value, row) { return corFormatNew(value, row); }
function webFormato(value, row) { return webFormatNew(value); }
function telFormato(value, row) { return telFormaNew(value);  }    
function mapFormato(value, row) { return mapFormat(row['dom'], row['cpo'], row['pob'], row['pro'], row['pai']); }


function comFormato(value, row) { 
	return comFormat(row['per'], row['te1'], row['te2'], row['cor'], row['www'], row['lin'], row['tel'], row['ins'], row['mes'], row['xxx'], row['dom'], row['cpo'], row['pob'], row['pro'], row['pai'], row['ccn'], 1); 
}
function rolFormato(value, row) { return tExp(aRol[value - 1], ''); }
function enlaceFormato(value, row) {
	return '<a href="#" class="text-decoration-none" onClick="return gesDocContenido(event, ' + row.id + ')">' + escaparHTMLImpresion(value) + '</a>';
}

function visFormato(value, row) {
    return '<a href="javascript:void(0);" class="text-decoration-none" onclick="visorContenido(event, ' + row.id + ')"><i class="bi bi-tv"></i></a>';
}

function editDoc(value, row) {
    var e = obtenerExtensionArchivo(row.nom);
    if ((e == 'odt') || (e == 'ods') || (e == 'odp')) {
    	return `<a href="#" class="text-decoration-none" onClick="setTimeout(() => regTabla('modalDocumento', 'opcionDocumento', 2), 500)"><i class="bi bi-pencil"></i></a>`;
    } else {
    	return ``;
    }
} 



function linkedinFormato(value, row) 	{ return linkedinFormat(value); }
function telegramFormato(value, row) 	{ return telegramFormat(value); }
function instagramFormato(value, row) 	{ return instagramFormat(value); }
function messengerFormato(value, row) 	{ return messengerFormat(value); }
function xFormato(value, row) 			{ return xFormat(value); }

function elementoGrupoFormato(value, row) { return elementoGrupoFormat(value); }

function etiFormato(value, row) { return etiFormat(row['et1'], row['et2'], row['et3']); }

function etiFormatoUno(value, row) { 
	let elemento = dataEtiquetas.find(el => el.num == value);
	if (elemento) {
		return elemento.des;	
	} else {
		return '';
	}
}

function fecHorFormato(value, row) 					{ return formatoFechaHoraInternacional(value); }
function tipoInteraccionFormato(value, row) 		{ return tExp(aTipoInteraccion[value - 1], ''); }
function etapaInteraccionFormato(value, row) 		{ return tExp(aEtapaInteraccion[value - 1], ''); }
function resultadoInteraccionFormato(value, row) 	{ return tExp(aResultadoInteraccion[value - 1], ''); }
function pendienteInteraccionFormato(value, row) 	{ return tExp(aAccionInteraccion[value - 1], ''); }

function comFormatoRecordatorio(value, row) { 
	return comFormat(row['perr'], row['te1r'], row['te2r'], row['corr'], row['wwwr'], row['linr'], row['telr'], row['insr'], row['mesr'], row['xxxr'], row['domr'], row['cpor'], row['pobr'], row['pror'], row['pair'], row['idcr'], 2); 
}

window.icons = {
	detailOpen: 'bi-caret-down-fill',
	detailClose: 'bi-caret-up-fill'
}; 

function detailFormatterTabContactos(index, row) {
	var lang 		= localStorage.getItem('idiomaPais');
	var html 		= [];
	var htmlPrint 	= [];
	var bGeo 		= 0;
	var gooMaps 	= ' ' + mapFormat(row['dom'], row['cpo'], row['pob'], row['pro'], row['pai']); 

	var etis 		= etiFormat(row['et1'], row['et2'], row['et3']);

	$.each(row, function (key, value) {
		if (key == 'ccn' ||  !value || value == '') { }
		else {
			let a = '';
			let b = '';
			let c = '';
			if (key == 'cod')  		{ a = tExp('Código', lang); 			b = value; c = value; }
			if (key == 'per')  		{ a = tExp('Nombre', lang); 			b = value; c = value; }
			if (key == 'alt')  		{ a = tExp('Alta', lang); 				b = formatoFecha(value); c = formatoFecha(value); }


			if (key == 'dom')  		{ a = tExp('Dirección', lang); 			b = value; c = value; if (bGeo == 0) { b = b + gooMaps; bGeo = 1;} }
			if (key == 'cpo')  		{ a = tExp('C. P.', lang); 				b = value; c = value; if (bGeo == 0) { b = b + gooMaps; bGeo = 1;} }
			if (key == 'pob')  		{ a = tExp('Población', lang); 			b = value; c = value; if (bGeo == 0) { b = b + gooMaps; bGeo = 1;} }
			if (key == 'pro')  		{ a = tExp('Provincia', lang); 			b = value; c = value; if (bGeo == 0) { b = b + gooMaps; bGeo = 1;} }
			if (key == 'pai')  		{ a = tExp('País', lang); 				b = value; c = value; if (bGeo == 0) { b = b + gooMaps; bGeo = 1;} }
			
			if (key == 'te1')  		{ a = tExp('Telefóno 1', lang);			b = telFormaNew1(value); c = value; }
			if (key == 'te2')  		{ a = tExp('Teléfono 2', lang);			b = telFormaNew1(value); c = value; }
			if (key == 'cor')  		{ a = tExp('E-mail', lang); 			b = corFormatNew(value); c = value; }
			if (key == 'www')  		{ a = tExp('Web', lang); 				b = webFormatNew(value); c = value; }
			
			if (key == 'nif')  		{ a = tExp('NIF', lang); 				b = value; c = value; } 				
			if (key == 'car')  		{ a = tExp('Cargo', lang); 				b = value; c = value; } 
			if (key == 'dep')  		{ a = tExp('Departamento', lang); 		b = value; c = value; } 
			if (key == 'rol')  		{ a = tExp('Rol', lang); 				b = tExp(aRol[value - 1], lang); c = tExp(aRol[value - 1], lang); } 
			if (key == 'ani')  		{ a = tExp('Aniversario', lang); 		b = formatoFecha(value); c = formatoFecha(value); } 
			if (key == 'nom')  		{ a = tExp('Empresa', lang); 			b = value; c = value; }
			if (key == 'sec')  		{ a = tExp('Sector', lang); 			b = value; c = value; } 
			if (key == 'dun')  		{ a = 'DUNS'; 							b = value; c = value; } 

			if (key == 'eg1')  		{ 
				if (sumEleGrupo1 > 1) {
					a = localStorage.getItem('nomGrupo1'); 		b = elementoGrupoFormat(value); c = elementoGrupoFormat(value);
				}
			}
			if (key == 'eg2')  		{ 
				if (sumEleGrupo2 > 1) {
					a = localStorage.getItem('nomGrupo2'); 		b = elementoGrupoFormat(value); c = elementoGrupoFormat(value);
				}
			}
			if (key == 'eg3')  		{ 
				if (sumEleGrupo3 > 1) {
					a = localStorage.getItem('nomGrupo3'); 		b = elementoGrupoFormat(value); c = elementoGrupoFormat(value);
				}
			}			

			if (key == 'lin')  		{ a = 'LinkedIn'; 								b = linkedinFormat(value); 	c = value; } 
			if (key == 'tel')  		{ a = 'Telegram'; 								b = telegramFormat(value); 	c = value; } 
			if (key == 'ins')  		{ a = 'Instagram'; 								b = instagramFormat(value); c = value; } 
			if (key == 'mes')  		{ a = 'Messenger'; 								b = messengerFormat(value); c = value; } 
			if (key == 'xxx')  		{ a = 'X'; 										b = xFormat(value); 		c = value; } 

			if (key == 'rf1')  		{ a = localStorage.getItem('nomRef1') || tExp('Referencia 1', lang); 	b = value; c = value; }
			if (key == 'rf2')  		{ a = localStorage.getItem('nomRef2') || tExp('Referencia 2', lang); 	b = value; c = value; }
			if (key == 'rf3')  		{ a = localStorage.getItem('nomRef3') || tExp('Referencia 3', lang); 	b = value; c = value; }
			if (key == 'rf4')  		{ a = localStorage.getItem('nomRef4') || tExp('Referencia 4', lang); 	b = value; c = value; }
			if (key == 'fin')  		{ a = tExp('Inicio', lang); 					b = formatoFecha(value); c = formatoFecha(value); }
			if (key == 'ffi')  		{ a = tExp('Fin', lang); 						b = formatoFecha(value); c = formatoFecha(value); }		

			if (key == 'pr1')  		{ a = localStorage.getItem('titPref1') || tExp('Preferencias 1', lang); 		b = value; c = value; }
			if (key == 'pr2')  		{ a = localStorage.getItem('titPref2') || tExp('Preferencias 2', lang); 		b = value; c = value; }
			if (key == 'pr3')  		{ a = localStorage.getItem('titPref3') || tExp('Preferencias 3', lang); 		b = value; c = value; }
			if (key == 'pr4')  		{ a = localStorage.getItem('titPref4') || tExp('Preferencias 4', lang); 		b = value; c = value; }
			if (key == 'pr5')  		{ a = localStorage.getItem('titPref5') || tExp('Preferencias 5', lang); 		b = value; c = value; }
			if (key == 'pr6')  		{ a = localStorage.getItem('titPref6') || tExp('Preferencias 6', lang); 		b = value; c = value; }

			if (key == 'noa')  		{ a = tExp('Notas', lang); 						b = value; c = value; } 

			if (!(!b || b == '')) { html.push('<div><b>' + a + ':</b> ' + b + '</div>'); htmlPrint.push('<div><b>' + a + ':</b> ' + c + '</div>');	}

				
		}

	})

	html.push(etis);
	htmlPrint.push(etis);

	if (document.getElementById('gesdGrupo_contactos').style.display == '') {
		let e = btoa(unescape(encodeURIComponent(htmlPrint.join(''))));
		html.push('<div><button class="btn btn-sm btn-outline-dark mt-1 me-2" 	onClick="selRowTab(\'tabContactos\', \'success\', \'idTabContactos\', ' + row['ccn'] + '); nombrePersonaContacto = \'' + row['per'] + '\'; cambioDiv(\'contactos\', \'interacciones\', 1, 0);"><i class="bi bi-journals"></i><span style="font-size: 0.875rem;">' + ' ' + tExp('interacciones', '') + '</span></button>');	
		html.push('<button class="btn btn-sm btn-outline-dark mt-1 me-2" 		onClick="selRowTab(\'tabContactos\', \'success\', \'idTabContactos\', ' + row['ccn'] + '); nombrePersonaContacto = \'' + row['per'] + '\'; localStorage.setItem(\'tfGesDoc\', 85); localStorage.setItem(\'numGesDoc\', ' + row['ccn'] + '); cambioDiv(\'contactos\', \'documentos\', 1, 0);"><i class="bi bi-folder-symlink"></i><span style="font-size: 0.875rem;">' + ' ' + tExp('documentos', '') + '</span></button>');	
		html.push('<button class="btn btn-sm btn-outline-dark mt-1 me-4" 		onClick="selRowTab(\'tabContactos\', \'success\', \'idTabContactos\', ' + row['ccn'] + '); nombrePersonaContacto = \'' + row['per'] + '\'; localStorage.setItem(\'vistaIni\', \'listYear\'); localStorage.setItem(\'codContactoNlistadoEventos\', ' + row['ccn'] + '); setTimeout(function() { cambioDiv(\'contactos\', \'eventos\', 1, 0);  }, 500);"><i class="bi bi-calendar2-check"></i><span style="font-size: 0.875rem;">' + ' ' + tExp('eventos', '') + '</span></button>');
		html.push('<button class="btn btn-sm btn-outline-dark mt-1 me-4" 		onClick="selRowTab(\'tabContactos\', \'success\', \'idTabContactos\', ' + row['ccn'] + '); nombrePersonaContacto = \'' + row['per'] + '\'; regTabla(\'modalContacto\', \'opcionContacto\', 2)"><i class="bi bi-person-lines-fill"></i><span style="font-size: 0.875rem;"></span></button>');
		html.push('<button class="btn btn-sm btn-outline-dark mt-1 me-2" 		onClick="generateDOC(\'' 	+ e + '\',  \'' + row['per'] + '\', \'' 	+ row['cod'] + '\')"><i class="bi bi-file-earmark-word"></i><span style="font-size: 0.875rem;"></span></button>');
		html.push('<button class="btn btn-sm btn-outline-dark mt-1 me-2" 		onClick="generatePDF(\'' 	+ e + '\',  \'' + row['per'] + '\', \''	 	+ row['cod'] + '\')"><i class="bi bi-file-earmark-pdf"></i><span style="font-size: 0.875rem;"></span></button>');
		html.push('<button class="btn btn-sm btn-outline-dark mt-1" 			onClick="printContent(\'' 	+ e + '\',  \'' + row['per'] + '\', \'' 	+ row['cod'] + '\')"><i class="bi bi-printer"></i><span style="font-size: 0.875rem;"></span></button></div>');
	}

	return html.join('');
}



function eliminarContacto(){	
	if (filaNoSeleccionada('tabContactos', 'success', msjModContacto)) 	{ return false; }
	var formDataE = new FormData();
	formDataE.append("nform", 'contactos');
	formDataE.append("codnum", window.idTabContactos);
	formDataE.append("opcionlistado", 3);
	formDataE.append("prefijo", localStorage.getItem("prefijo"));
	async function compAntesDeEliminar() {
		const compResponseE 	= await fetch('https://' + window.location.host + '/compAntesEditarEliminar', {
      		method: 'POST',
      		body: 	formDataE
    	});
		const data 			= await compResponseE.json();
		return data;
	}
	compAntesDeEliminar().then((data) => {
		if (data.success) {
			if (!dEstSuscrip()) {return false;}
			let myModalE 		= new bootstrap.Modal(document.getElementById('formEliminarContacto'));
			myModalE.show();
			codE_contactos.defaultValue 	= data.data.codE;
			nomE_contactos.defaultValue 	= data.data.nomE;
		} else {
			modMsj('contactos001', 'My Contacts Cloud', tExp(data.message, ''), msjContactos, true);
		};				
	}).catch(error => {
		modMsj('contactos002', 'My Contacts Cloud', error.message, msjContactos, true);
	});
    return false;
}


function eliminarInteraccion(){	
	if (filaNoSeleccionada('tabInteracciones', 'success3', msjModInteraccion)) 	{ return false; }
	if (!dEstSuscrip()) { return false; }

	var formDataE = new FormData();
	formDataE.append("nform", 'interacciones');
	formDataE.append("codnum", window.idTabInteracciones);
	formDataE.append("opcionlistado", 3);
	formDataE.append("prefijo", localStorage.getItem("prefijo"));
	async function compAntesDeEliminar() {
		const compResponseE 	= await fetch('https://' + window.location.host + '/compAntesEditarEliminar', {
      		method: 'POST',
      		body: 	formDataE
    	});
		const data 			= await compResponseE.json();
		return data;
	}
	compAntesDeEliminar().then((data) => {
		if (data.success) {
			let myModalE = new bootstrap.Modal(document.getElementById('formEliminarInteraccion'));
			myModalE.show();
			fhiiE_interacciones.defaultValue 	= data.data.fhiiE;
			asuiE_interacciones.defaultValue 	= data.data.asuiE;
		} else {
			modMsj('interacciones001', 'My Contacts Cloud', tExp(data.message, ''), msjInteracciones, true);
		};				
	}).catch(error => {
		modMsj('interacciones002', 'My Contacts Cloud', error.message, msjInteracciones, true);
	});
    return false;
}


function cambioDiv(ant, nue, estAnt, estNue) {
	
	// estAnt = 1 -> mantener    estAnt = 0 -> terminar
	// estAnt = 1 -> mantenido   estAnt = 0 -> iniciar
	if (ant == 'documentos' && localStorage.getItem('mcc_docs_email_mode') == '1') {
		notificarCambioDocumentosCorreo();
		localStorage.removeItem('mcc_docs_email_mode');
		window.close();
		return false;
	}

	localStorage.setItem('divAnt', ant);
	localStorage.setItem('divNue', nue);
	if (ant != '') {
		if 		(ant == 'menu') 				{ myModalMenu.hide(); }
		else if (ant == 'dashboard') 			{ myModalDashboard.hide(); }
		else if (ant == 'equipo') 				{ myModalEquipo.hide(); }
		else if (ant == 'confcontactos') 		{ myModalConfContactos.hide(); }
		else if (ant == 'confeventos') 			{ myModalConfEventos.hide(); }
		else if (ant == 'cambiaridioma') 		{ myModalIdioma.hide(); }
		else if (ant == 'cambiarcontrasena') 	{ myModalContrasena.hide(); }
		else if (ant == 'importarexcel') 		{ myModalImportarExcel.hide(); }
		else if (ant == 'politicaprivacidad') 	{ myModalPoliticaPrivacidad.hide(); }
		else if (ant == 'condicionesuso') 		{ mymodalCondicionesUso.hide(); }
		else if (ant == 'consulta') 			{ mymodalConsulta.hide(); }
		else if (ant == 'desuscribirse') 		{ mymodalDesuscripcion.hide(); }
		else {
			desactivarTooltipsDiv(ant);
			if (ant == 'eventos') {
				let  myModal = bootstrap.Modal.getInstance(modalEvento);
				if (myModal) { myModal.hide(); }
			}
			document.getElementById(ant).style.display = 'none';
		}
	}

	if 		  (nue == 'menu') {
		if (!myModalMenu) 					{ myModalMenu 				= new bootstrap.Modal(document.getElementById('modalMenu')); }
        myModalMenu.show(); 
    } else if (nue == "dashboard") {
		if (!mccEsPropietario()) {
			localStorage.setItem('divNue', 'menu');
			if (!myModalMenu) { myModalMenu = new bootstrap.Modal(document.getElementById('modalMenu')); }
			myModalMenu.show();
			return;
		}
		if (!myModalDashboard) { myModalDashboard = new bootstrap.Modal(document.getElementById('modalDashboard')); }
		myModalDashboard.show();
		iniciarDashboard();
    } else if (nue == "equipo") {
		if (!mccEsPropietario()) {
			localStorage.setItem('divNue', 'menu');
			if (!myModalMenu) { myModalMenu = new bootstrap.Modal(document.getElementById('modalMenu')); }
			myModalMenu.show();
			return;
		}
		if (!myModalEquipo) { myModalEquipo = new bootstrap.Modal(document.getElementById('modalEquipo')); }
		myModalEquipo.show();
		iniciarEquipo();
    } else if (nue == "confcontactos") {
        if (!myModalConfContactos) 			{ myModalConfContactos 		= new bootstrap.Modal(document.getElementById('modalConfContactos')); }
        myModalConfContactos.show();
	} else if (nue == "confeventos") {    	
        if (!myModalConfEventos) 			{ myModalConfEventos 		= new bootstrap.Modal(document.getElementById('modalConfEventos')); }
        myModalConfEventos.show();
	} else if (nue == "cambiaridioma") {
        if (!myModalIdioma) 				{ myModalIdioma 			= new bootstrap.Modal(document.getElementById('modalIdioma')); }
        myModalIdioma.show();
	} else if (nue == "cambiarcontrasena") {
		if (!myModalContrasena) 			{ myModalContrasena 		= new bootstrap.Modal(document.getElementById('modalContrasena')); }
        myModalContrasena.show();
	} else if (nue == "importarexcel") {
		if (!myModalImportarExcel) 			{ myModalImportarExcel 		= new bootstrap.Modal(document.getElementById('modalImportarExcel')); }
        myModalImportarExcel.show(); 
	} else if (nue == "politicaprivacidad") {
		if (!myModalPoliticaPrivacidad) 	{ myModalPoliticaPrivacidad = new bootstrap.Modal(document.getElementById('modalPoliticaPrivacidad')); }
        myModalPoliticaPrivacidad.show();
	} else if (nue == "condicionesuso") {
		if (!mymodalCondicionesUso) 		{ mymodalCondicionesUso 	= new bootstrap.Modal(document.getElementById('modalCondicionesUso')); }
        mymodalCondicionesUso.show();
	} else if (nue == "consulta") {
		if (!mymodalConsulta) 				{ mymodalConsulta 			= new bootstrap.Modal(document.getElementById('modalConsulta')); }
        mymodalConsulta.show();
	} else if (nue == "desuscribirse") {
		if (localStorage.getItem('rolUsuario') !== 'owner') {
			localStorage.setItem('divNue', 'menu');
			if (!myModalMenu) { myModalMenu = new bootstrap.Modal(document.getElementById('modalMenu')); }
			myModalMenu.show();
			return;
		}
		if (!mymodalDesuscripcion) 			{ mymodalDesuscripcion 		= new bootstrap.Modal(document.getElementById('modalDesuscripcion')); }
        mymodalDesuscripcion.show();    
	} else {
		if (estNue == 1) {
			document.getElementById(nue).style.display = "";
			activarTooltipsDiv(nue);
			if (nue == 'eventos') {
				let  myModal = bootstrap.Modal.getInstance(modalEvento);
				if (myModal) { myModal.show();}
			}
		} else { 
			if ((nue == 'documentos') || (nue == 'interacciones') || (nue == 'importargoogle') || (nue == 'importarms') || (nue == 'importarapple') || (nue == 'importarappledevice')) {
				eliminarYImportarHTML(nue);
			} else if (document.body.contains(document.getElementById(nue))) { 
				document.getElementById(nue).style.display = "";
		        if (nue == 'contactos')  			{ iniciarContactos(); }
		        if (nue == 'documentos') 			{ iniciarDocumentos(); }
		        if (nue == 'eventos')  				{ iniciarEventos(); } 
		        if (nue == 'etiquetascontactos')  	{ iniciarEtiquetasContactos(); } 
				if (nue == 'gruposcontactos')  		{ iniciarGrupossContactos(); }
		        if (nue == 'recordatorios')  		{ iniciarRecordatorios(); } 
			} else {
				importarHTML(nue);
			}
		}
	}
}


async function eliminarYImportarHTML(nue) {
    const divExistente = document.getElementById(nue);

    // Elimina la tabla existente del DOM si existe
    if (divExistente) {
        divExistente.parentNode.removeChild(divExistente);
    }

    // Llama directamente a importHTML
    await importHTML(nue);
}

async function importarHTML(nue) {
    // Llama directamente a importHTML
    await importHTML(nue);
}



async function importHTML(s) {
    try {
        if (!mccHtmlDinamicoPermitido.has(s)) {
        	throw new Error('Fragmento HTML no permitido: ' + s);
        }

        var urlFragmento = mccHtmlDinamicoBase + s + '.html?v=' + encodeURIComponent(versionMccStatic);
        var response = await fetch(urlFragmento, { cache: 'no-store' });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const html = await response.text();
        //console.log('Se importó .html correctamente');
        
        const myDiv = document.createElement('div');
        myDiv.id = s;
        myDiv.innerHTML = html;
        myDiv.className = 'claseDiv';
        document.body.appendChild(myDiv);

        if (s == 'contactos') {
        	if (agregarCodigoContactos()) 			{ iniciarContactos(); }
        } else if (s == 'documentos') {
        	if (agregarCodigoDocumentos()) 			{ iniciarDocumentos(); }
        } else if (s == 'interacciones') {
        	if (agregarCodigoInteracciones()) 		{ iniciarInteracciones(); }        	
        } else if (s == 'eventos') {
        	if (agregarCodigoEventos()) 			{ iniciarEventos(); }
        } else if (s == 'gruposcontactos') {
        	if (agregarCodigoGruposContactos()) 	{ iniciarGruposContactos(); }
        } else if (s == 'etiquetascontactos') {
        	iniciarEtiquetasContactos();
        } else if (s == 'recordatorios') {
        	iniciarRecordatorios();
        } else if (s == 'importargoogle') {
        	iniciarImportarGoogle();
        } else if (s == 'importarms') {
        	if (agregrarCodigoImportarms()) 		{ iniciarImportarMs(); }
        } else if (s == 'importarapple') {
        	iniciarImportarApple();
        } else if (s == 'importarappledevice') {
        	iniciarImportarAppleDevice();
        }

    } catch (error) {
        console.error('Error fetching content:', error);
    }
}


function iniciarEtiquetasContactos() {
    setTimeout(function() {
        libIdioma(localStorage.getItem('idiomaPais'), 3);
    }, 100); 
    loadTagsFromServer();
}


function agregrarCodigoImportarms() {
	btnImportarContactosMs.addEventListener('click', () => {
	    importarContactosMicrosoft();
	});

	return true;
}



function agregarCodigoContactos() {

	modalContacto.addEventListener('show.bs.modal', function (e) {	

		if (salirModalContacto) { salirModalContacto = false; return false; }


		selectedTagsFichaContacto.innerHTML= '';

		activarTooltipsDiv('modalContacto');

		if (window.opcionContacto === 1) {

        	cod_contactos.focus();
        	ccn_contactos.defaultValue	=	0;

			alt_contactos.defaultValue	= 	new Date().toISOString().slice(0,10);

			cod_contactos.defaultValue	=	'';
			nom_contactos.defaultValue	=	'';
			nif_contactos.defaultValue	=   '';


			dom_contactos.defaultValue	=   '';
			cpo_contactos.defaultValue	=   '';
			pob_contactos.defaultValue	=   '';
			pro_contactos.defaultValue	=   '';
			pai_contactos.defaultValue	=   '';
			te1_contactos.defaultValue	=   '';
			te2_contactos.defaultValue	=   '';
			cor_contactos.defaultValue	=   '';
			per_contactos.defaultValue	=   '';

			car_contactos.defaultValue	=   '';
			dep_contactos.defaultValue	=   '';

			www_contactos.defaultValue	=   '';

			noa_contactos.defaultValue	=   '';

			seleccionarCombo('rol', '1');

			lin_contactos.defaultValue	=	''; 
			tel_contactos.defaultValue	=	''; 
			mes_contactos.defaultValue	=	''; 
			xxx_contactos.defaultValue	=	''; 
			ins_contactos.defaultValue	=	''; 
			ani_contactos.defaultValue	=	''; 
			dun_contactos.defaultValue	=	''; 
			sec_contactos.defaultValue	=	''; 
			pr1_contactos.defaultValue	=	''; 
			pr2_contactos.defaultValue	=	''; 
			pr3_contactos.defaultValue	=	''; 
			pr4_contactos.defaultValue	=	''; 
			pr5_contactos.defaultValue	=	''; 
			pr6_contactos.defaultValue	=	'';
			rf1_contactos.defaultValue	=	''; 
			rf2_contactos.defaultValue	=	''; 
			rf3_contactos.defaultValue	=	''; 
			rf4_contactos.defaultValue	=	''; 
			fin_contactos.defaultValue	=	''; 
			ffi_contactos.defaultValue	=	'';	

			seleccionarCombo('eg1_contactos', predGrupoContactos(1));
			seleccionarCombo('eg2_contactos', predGrupoContactos(2));
			seleccionarCombo('eg3_contactos', predGrupoContactos(3));

			camposSummernote();	

			cod_contactos.readOnly	=	false;
			alt_contactos.readOnly	= 	false;
			nom_contactos.readOnly	=	false;
			nif_contactos.readOnly	=   false;
			dom_contactos.readOnly	=   false;
			cpo_contactos.readOnly	=   false;
			pob_contactos.readOnly	=   false;
			pro_contactos.readOnly	=   false;
			pai_contactos.readOnly	=   false;
			te1_contactos.readOnly	=   false;
			te2_contactos.readOnly	=   false;
			cor_contactos.readOnly	=   false;
			per_contactos.readOnly	=   false;

			car_contactos.readOnly	=   false;
			dep_contactos.readOnly	=   false;

			www_contactos.readOnly	=   false;

			noa_contactos.readOnly	=   false;
			rol_contactos.disabled	= 	false;

			lin_contactos.readOnly	=	false;
			tel_contactos.readOnly	=	false;
			mes_contactos.readOnly	=	false;
			xxx_contactos.readOnly	=	false;
			ins_contactos.readOnly	=	false;
			ani_contactos.readOnly	=	false;
			dun_contactos.readOnly	=	false;
			sec_contactos.readOnly	=	false;
			pr1_contactos.readOnly	=	false;
			pr2_contactos.readOnly	=	false;
			pr3_contactos.readOnly	=	false;
			pr4_contactos.readOnly	=	false;
			pr5_contactos.readOnly	=	false;
			pr6_contactos.readOnly	=	false;
			rf1_contactos.readOnly	=	false;
			rf2_contactos.readOnly	=	false;
			rf3_contactos.readOnly	=	false;
			rf4_contactos.readOnly	=	false;
			fin_contactos.readOnly	=	false;
			ffi_contactos.readOnly	=	false;

			eg1_contactos.disabled	=	false;	
			eg2_contactos.disabled	=	false;	
			eg3_contactos.disabled	=	false;			

			aceptar_contactos.hidden	= 	false;
	      	cancelar_contactos.hidden 	= 	false;

	      	abrirTagModalDesdeFichaContacto.hidden = false;

	      	document.getElementById('formContacto').reset();

		}

		if (window.opcionContacto === 2 || window.opcionContacto === 4) {

			let formData2 = new FormData();
			formData2.append('num', 22);
			formData2.append('donde', window.idTabContactos);
			formData2.append('prefijo', localStorage.getItem('prefijo'));
			async function datosDevueltos2() {
				const response2 = await fetch('https://' + window.location.host + '/selectSimple', {
		      		method: 'POST',
		      		body: formData2
		    	});
				const data = await response2.json();
				return data;
			};
			datosDevueltos2().then((data) => {
				if (data.success) {
					ccn_contactos.defaultValue	=	window.idTabContactos;
					alt_contactos.defaultValue	= 	data.data.alt.substring(0, 10);
					cod_contactos.defaultValue	=	data.data.cod;
					nom_contactos.defaultValue	=	data.data.nom;
					nif_contactos.defaultValue	=   data.data.nif || '';

					dom_contactos.defaultValue	=   data.data.dom || '';
					cpo_contactos.defaultValue	=   data.data.cpo || '';
					pob_contactos.defaultValue	=   data.data.pob || '';
					pro_contactos.defaultValue	=   data.data.pro || '';
					pai_contactos.defaultValue	=   data.data.pai || '';
					te1_contactos.defaultValue	=   data.data.te1 || '';
					te2_contactos.defaultValue	=   data.data.te2 || '';
					cor_contactos.defaultValue	=   data.data.cor || '';
					per_contactos.defaultValue	=   data.data.per || '';

					car_contactos.defaultValue	=   data.data.car || '';
					dep_contactos.defaultValue	=   data.data.dep || '';

					www_contactos.defaultValue	=   data.data.www || '';

					noa_contactos.defaultValue	=   data.data.noa || '';

					seleccionarCombo('rol', data.data.rol);


					lin_contactos.defaultValue	=	data.data.lin || '';
					tel_contactos.defaultValue	=	data.data.tel || '';
					mes_contactos.defaultValue	=	data.data.mes || '';
					xxx_contactos.defaultValue	=	data.data.xxx || '';
					ins_contactos.defaultValue	=	data.data.ins || '';
					ani_contactos.defaultValue	=	data.data.ani.substring(0, 10) || '';
					dun_contactos.defaultValue	=	data.data.dun || '';
					sec_contactos.defaultValue	=	data.data.sec || '';
					pr1_contactos.defaultValue	=	data.data.pr1 || '';
					pr2_contactos.defaultValue	=	data.data.pr2 || '';
					pr3_contactos.defaultValue	=	data.data.pr3 || '';
					pr4_contactos.defaultValue	=	data.data.pr4 || '';
					pr5_contactos.defaultValue	=	data.data.pr5 || '';
					pr6_contactos.defaultValue	=	data.data.pr6 || '';
					rf1_contactos.defaultValue	=	data.data.rf1 || '';
					rf2_contactos.defaultValue	=	data.data.rf2 || '';
					rf3_contactos.defaultValue	=	data.data.rf3 || '';
					rf4_contactos.defaultValue	=	data.data.rf4 || '';
					fin_contactos.defaultValue	=	data.data.fin.substring(0, 10) || '';
					ffi_contactos.defaultValue	=	data.data.ffi.substring(0, 10) || '';

					seleccionarCombo('eg1_contactos', data.data.eg1 || '');
					seleccionarCombo('eg2_contactos', data.data.eg2 || '');
					seleccionarCombo('eg3_contactos', data.data.eg3 || '');

					//if (data.data.et1 != 0) { crearEtiqueta(data.data.et1, selectedTagsFichaContacto); }
					//if (data.data.et2 != 0) { crearEtiqueta(data.data.et2, selectedTagsFichaContacto); }
					//if (data.data.et3 != 0) { crearEtiqueta(data.data.et3, selectedTagsFichaContacto); }

					et1Cancelar = data.data.et1;
					et2Cancelar = data.data.et2;
					et3Cancelar = data.data.et3;

					if (window.opcionContacto === 2) {
						cod_contactos.readOnly	=	true;
						alt_contactos.readOnly	= 	false;
						nom_contactos.readOnly	=	false;
						nif_contactos.readOnly	=   false;
						dom_contactos.readOnly	=   false;
						cpo_contactos.readOnly	=   false;
						pob_contactos.readOnly	=   false;
						pro_contactos.readOnly	=   false;
						pai_contactos.readOnly	=   false;
						te1_contactos.readOnly	=   false;
						te2_contactos.readOnly	=   false;
						cor_contactos.readOnly	=   false;
						per_contactos.readOnly	=   false;
						car_contactos.readOnly	=   false;
						dep_contactos.readOnly	=   false;
						www_contactos.readOnly	=   false;
						noa_contactos.readOnly	=   false;
						rol_contactos.disabled	= 	false;

						lin_contactos.readOnly	=	false;
						tel_contactos.readOnly	=	false;
						mes_contactos.readOnly	=	false;
						xxx_contactos.readOnly	=	false;
						ins_contactos.readOnly	=	false;
						ani_contactos.readOnly	=	false;
						dun_contactos.readOnly	=	false;
						sec_contactos.readOnly	=	false;
						pr1_contactos.readOnly	=	false;
						pr2_contactos.readOnly	=	false;
						pr3_contactos.readOnly	=	false;
						pr4_contactos.readOnly	=	false;
						pr5_contactos.readOnly	=	false;
						pr6_contactos.readOnly	=	false;
						rf1_contactos.readOnly	=	false;
						rf2_contactos.readOnly	=	false;
						rf3_contactos.readOnly	=	false;
						rf4_contactos.readOnly	=	false;
						fin_contactos.readOnly	=	false;
						ffi_contactos.readOnly	=	false;

						eg1_contactos.disabled	=	false;
						eg2_contactos.disabled	=	false;
						eg3_contactos.disabled	=	false;

						camposSummernote();

						aceptar_contactos.hidden	= 	false;
				      	cancelar_contactos.hidden = 	false;
				      	abrirTagModalDesdeFichaContacto.hidden = false;

					}		

					if (window.opcionContacto === 4) {
						cod_contactos.readOnly	=	true;
						alt_contactos.readOnly	= 	true;
						nom_contactos.readOnly	=	true;
						nif_contactos.readOnly	=   true;
						dom_contactos.readOnly	=   true;
						cpo_contactos.readOnly	=   true;
						pob_contactos.readOnly	=   true;
						pro_contactos.readOnly	=   true;
						pai_contactos.readOnly	=   true;
						te1_contactos.readOnly	=   true;
						te2_contactos.readOnly	=   true;
						cor_contactos.readOnly	=   true;
						per_contactos.readOnly	=   true;
						car_contactos.readOnly	=   true;
						dep_contactos.readOnly	=   true;
						www_contactos.readOnly	=   true;
						noa_contactos.readOnly	=   true;
						rol_contactos.disabled	= 	true;

						lin_contactos.readOnly	=	true;
						tel_contactos.readOnly	=	true;
						mes_contactos.readOnly	=	true;
						xxx_contactos.readOnly	=	true;
						ins_contactos.readOnly	=	true;
						ani_contactos.readOnly	=	true;
						dun_contactos.readOnly	=	true;
						sec_contactos.readOnly	=	true;
						pr1_contactos.readOnly	=	true;
						pr2_contactos.readOnly	=	true;
						pr3_contactos.readOnly	=	true;
						pr4_contactos.readOnly	=	true;
						pr5_contactos.readOnly	=	true;
						pr6_contactos.readOnly	=	true;
						rf1_contactos.readOnly	=	true;
						rf2_contactos.readOnly	=	true;
						rf3_contactos.readOnly	=	true;
						rf4_contactos.readOnly	=	true;
						fin_contactos.readOnly	=	true;
						ffi_contactos.readOnly	=	true;	

						eg1_contactos.disabled	=	true;
						eg2_contactos.disabled	=	true;
						eg3_contactos.disabled	=	true;

						aceptar_contactos.hidden	= 	true;
				      	cancelar_contactos.hidden = 	true;
				      	abrirTagModalDesdeFichaContacto.hidden = true;
					}



				} else {
					toastSelFila(data.message, msjModContacto);
				}


				document.getElementById('formContacto').reset();

			}).catch(error => {
				alert(error.message);
		    	toastSelFila(error.message, msjModContacto);
		    })

		}

	})

	modalContacto.addEventListener('hide.bs.modal', function (e) {
	    if (document.getElementById('tagModal').classList.contains('show')) {
	      	e.preventDefault();  // Evitar que Modal 1 se cierre
	      	return false;
	    } else {
			if (salirModalContacto) { salirModalContacto = false; return false; }
			desactivarTooltipsDiv('modalContacto');	    	
	    }
	});

	modalContacto.addEventListener('shown.bs.modal', function (e) {

		if (window.opcionContacto == 1) { per_contactos.focus(); }

		let numRows = $('#tabContactos').bootstrapTable('getData').length;
		if (numRows == 0) {
		    if (document.getElementById("pruebaRapida").classList.contains("d-none")) {
		        document.getElementById("pruebaRapida").classList.remove("d-none");
		        document.getElementById("pruebaRapidaTexto").innerHTML = '<i class="bi bi-info-circle-fill fs-3" style="color: #0D6EFD; font-weight: bold;"></i>' + ' ' + tExp('Haz una prueba rápida tecleando nombre, población, teléfono y correo electrónico. Después de guardarlo, haz clic sobre el botón ', '') + '<i class="bi bi-wifi" style="color: #0d6efd; font-weight: bold;"></i>';
		    }
		} else {
		    // Verificar si la clase d-none NO está presente
		    if (!document.getElementById("pruebaRapida").classList.contains("d-none")) {
		        // Si la clase NO está presente, agregarla
		        document.getElementById("pruebaRapida").classList.add("d-none");
		    }
		}	

		
	    // Inicializar Summernote en todos los textarea con clase .editor
	    $('.editor').each(function() {
	    	if ($(this).siblings('.note-editor').length) {
	    		$(this).summernote('destroy');
	    	}
	    });
	    $('.editor').summernote(opcionesSummernoteContactos());
	    $('.editor').each(function() {
	    	normalizarSummernoteMcc(this);
	    });

	    // Esconder la barra de herramientas de todos los editores
	    $('.note-toolbar').hide();	 


	    if (window.opcionContacto != 4) {   

		    // Agregar eventos onFocus y onBlur a los textarea
		    $('.editor').on('summernote.focus', function() {
		    	$('.note-toolbar').hide();
		    	normalizarSummernoteMcc(this);
		        $(this).siblings('.note-editor').find('.note-toolbar').show();
		    //}).on('summernote.blur', function() {
		        //$(this).siblings('.note-editor').find('.note-toolbar').hide();
		    });

		}

	});

	modalContacto.addEventListener('hidden.bs.modal', function (e) {
	    // Destruir todos los editores Summernote al ocultar el modal
	    $('.editor').each(function() {
	        $(this).summernote('destroy');
	    });
	});

	// código para modal de filtros contactos
    modalFiltroContactos.addEventListener('show.bs.modal', function () {
        if (primeraVezModalGruposContactos == true) {
            primeraVezModalGruposContactos = false;

            modalFiltroContactosLabel.innerText = tExp("Filtrar por grupos y etiquetas", "");
            txtFiltrar.innerText = tExp("Filtrar", "");
            txtQuitarFiltro.innerText = tExp("Quitar filtro", "");



		  	new SlimSelect({
		    	select: '#eg1_filtroGruposContactos',
	    		settings: {
	      			allowDeselect: true,
	      			placeholderText: '',
	      			showSearch: false,
	      			closeOnSelect: false,
	      			contentLocation: document.getElementById('idSelect1'),
	      			contentPosition: 'fixed'
	    		},
		  	});

		  	new SlimSelect({
		    	select: '#eg2_filtroGruposContactos',
	    		settings: {
	      			allowDeselect: true,
	      			placeholderText: '',
	      			showSearch: false,
	      			closeOnSelect: false,
	      			contentLocation: document.getElementById('idSelect2'),
	      			contentPosition: 'fixed'
	    		},
		  	});

		  	new SlimSelect({
		    	select: '#eg3_filtroGruposContactos',
	    		settings: {
	      			allowDeselect: true,
	      			placeholderText: '',
	      			showSearch: false,
	      			closeOnSelect: false,
	      			contentLocation: document.getElementById('idSelect3'),
	      			contentPosition: 'fixed'
	    		},
		  	});


            ng1_filtroGruposContactos.innerText = localStorage.getItem('nomGrupo1');
            ng2_filtroGruposContactos.innerText = localStorage.getItem('nomGrupo2');
            ng3_filtroGruposContactos.innerText = localStorage.getItem('nomGrupo3');
            const grupo1Items = dataGruposContactos.filter(item => item.numGrupo === 1);
            const grupo2Items = dataGruposContactos.filter(item => item.numGrupo === 2);
            const grupo3Items = dataGruposContactos.filter(item => item.numGrupo === 3);
            populateSelect('eg1_filtroGruposContactos', grupo1Items);
            populateSelect('eg2_filtroGruposContactos', grupo2Items);
            populateSelect('eg3_filtroGruposContactos', grupo3Items);


			//const ids = ['eg1_filtroGruposContactos', 'eg2_filtroGruposContactos', 'eg3_filtroGruposContactos'];

			





        }
        activarTooltipsDiv('modalFiltroContactos');
    });

	modalFiltroContactos.addEventListener('hide.bs.modal', function (e) {
	    if (document.getElementById('tagModal').classList.contains('show')) {
	      	e.preventDefault();  // Evitar que el modal se cierre si se abre tagModal
	      	return false;
	    } else {
	    	desactivarTooltipsDiv('modalFiltroContactos');
	    }
	})


	applyFiltersBtn.addEventListener('click', function() {
	    // Limpiamos cualquier filtro activo para restablecer la tabla
	    $('#tabContactos').bootstrapTable('filterBy', {});

	    let datosTabla = $('#tabContactos').bootstrapTable('getData');

	    // Solo actualizamos el campo 'etiquetasOR' si hay etiquetas seleccionadas
	    if (etiSeleccionadasFiltro.length > 0) {
	        datosTabla.forEach(function(row) {
	            // Comprueba si alguna de las etiquetas (et1, et2, et3) está en 'etiSeleccionadasFiltro'
	            row.etiquetasOR = etiSeleccionadasFiltro.some(etiqueta => 
	                row.et1 === etiqueta || row.et2 === etiqueta || row.et3 === etiqueta
	            );
	        });

	        // Recargamos los datos actualizados en la tabla solo si hay etiquetas seleccionadas
	        $('#tabContactos').bootstrapTable('load', datosTabla);
	    }

	    let filterObj = {};
	    const filtro1 = getSelectedValues('eg1_filtroGruposContactos');
	    const filtro2 = getSelectedValues('eg2_filtroGruposContactos');
	    const filtro3 = getSelectedValues('eg3_filtroGruposContactos');

	    // Filtrar por grupos de contactos (AND)
	    if (filtro1.length > 0)  {
	        filterObj['eg1'] = filtro1;
	    }
	    if (filtro2.length > 0)  {
	        filterObj['eg2'] = filtro2;
	    }
	    if (filtro3.length > 0)  {
	        filterObj['eg3'] = filtro3;
	    }

	    // Si hay etiquetas seleccionadas, aplicamos la lógica OR para las etiquetas
	    if (etiSeleccionadasFiltro.length > 0) {
	        // Filtrar por el valor 'true' del campo 'etiquetasOR'
	        filterObj['etiquetasOR'] = true;
	    }

	    // Aplicamos los filtros combinados
	    $('#tabContactos').bootstrapTable('filterBy', filterObj);

	    // Cambiamos el ícono del botón de filtrado
	    cambiarIconoBotonFiltrado(1);

	    // Cerramos el modal de filtros
	    const modal = bootstrap.Modal.getInstance(document.getElementById('modalFiltroContactos'));
	    modal.hide();
	});




    // Evento para limpiar los filtros y restaurar los datos originales
    clearFiltersBtn.addEventListener('click', function() {
	    // Limpiamos cualquier filtro activo sin cargar datos anteriores
	    $('#tabContactos').bootstrapTable('filterBy', {});

	    // Cambiamos el ícono del botón de filtrado
	    cambiarIconoBotonFiltrado(2);

	    // Cerramos el modal de filtros
	    const modal = bootstrap.Modal.getInstance(document.getElementById('modalFiltroContactos'));
	    modal.hide();  
    });

	// fin código para modal de filtros contactos







	formContacto.onsubmit = async (e) => {
		e.preventDefault();
		if (salidaTelefonos) 	{ salidaTelefonos 	= false; return false; }
		if (salidaTagModal) 	{ salidaTagModal 	= false; return false; }

		if ((window.opcionContacto === 1) || (window.opcionContacto === 2)) {
	  		if (cor_contactos.value.length != 0) { 
		  		if (!isValidEmail(cor_contactos.value)) {
		  			modal1("My Contacts Cloud", tExp("Correo electrónico no válido", ""), msjModContacto);
		  			return false;
		  		}
	  		}				
		}

		if (!dEstSuscrip()) {return false;}

		// Seleccionamos las etiquetas del contenedor 'selectedTagsFichaContacto'
		const selectedTags = document.querySelectorAll('#selectedTagsFichaContacto .tag');
		// Creamos un array para almacenar los valores de las etiquetas
		etiSeleccionadasContacto = [];
		// Recorremos las etiquetas seleccionadas y obtenemos el valor de 'data-num'
		selectedTags.forEach(tag => {
		    const dataNum = tag.getAttribute('data-num');
		    etiSeleccionadasContacto.push(parseInt(dataNum)); // Añadimos el valor numérico al array
		});
		// Aseguramos que haya 3 valores en el array, rellenando con 0 si es necesario
		while (etiSeleccionadasContacto.length < 3) {
		    etiSeleccionadasContacto.push(0); // Añadimos 0 si faltan etiquetas
		}		

		var fila2 = {
			ccn:  			ccn_contactos.value,
			cod: 			cod_contactos.value,
			nom: 			nom_contactos.value,
			nif: 			nif_contactos.value,		
			dom: 			dom_contactos.value,
			cpo: 			cpo_contactos.value,
			pob: 			pob_contactos.value,
			pro: 			pro_contactos.value,
			pai: 			pai_contactos.value,
			per: 			per_contactos.value,
			te1: 			te1_contactos.value,
			te2: 			te2_contactos.value,
			cor: 			cor_contactos.value,			
			car: 			car_contactos.value,
			dep: 			dep_contactos.value,
			www: 			www_contactos.value,
			alt: 			alt_contactos.value,
			rol:            rol_contactos.value,
			lin:  			lin_contactos.value,
			tel: 			tel_contactos.value,
			mes:   			mes_contactos.value,
			xxx:   			xxx_contactos.value,
			ins:  			ins_contactos.value,
			ani:  			ani_contactos.value,
			dun:  			dun_contactos.value,
			sec:  			sec_contactos.value,
			pr1: 			pr1_contactos.value,
			pr2:  			pr2_contactos.value,
			pr3:  			pr3_contactos.value,
			pr4:  			pr4_contactos.value,
			pr5:   			pr5_contactos.value,
			pr6:  			pr6_contactos.value,
			rf1:  			rf1_contactos.value,
			rf2:  			rf2_contactos.value,
			rf3:  			rf3_contactos.value,
			rf4:  			rf4_contactos.value,
			fin:  			fin_contactos.value,
			ffi:  			ffi_contactos.value,
			noa: 			noa_contactos.value,
			eg1: 			eg1_contactos.value,		
			eg2: 			eg2_contactos.value,
			eg3: 			eg3_contactos.value,
			et1: 			etiSeleccionadasContacto[0],		
			et2: 			etiSeleccionadasContacto[1],
			et3: 			etiSeleccionadasContacto[2]			
	    };


		async function datosDevueltos1() {
			let formData1 = new FormData(formContacto);
			formData1.append('plan', localStorage.getItem('plan'));
			formData1.append('prefijo', localStorage.getItem('prefijo'));
			formData1.append('maxRegFree', localStorage.getItem('maxRegFree'));
			formData1.append('opcionListado', window.opcionContacto);

			formData1.append('eg1', eg1_contactos.value || '');
			formData1.append('eg2', eg2_contactos.value || '');
			formData1.append('eg3', eg3_contactos.value || '');	

			// Rellenamos los campos et1, et2 y et3 en formData con los valores del array
			formData1.append('et1', etiSeleccionadasContacto[0]); // Primera etiqueta o 0
			formData1.append('et2', etiSeleccionadasContacto[1]); // Segunda etiqueta o 0
			formData1.append('et3', etiSeleccionadasContacto[2]); // Tercera etiqueta o 0
			// Puedes verificar los valores con un log, si es necesario
			//console.log('et1:', etiquetas[0]);
			//console.log('et2:', etiquetas[1]);
			//console.log('et3:', etiquetas[2]);

			const response1 = await fetch('https://' + window.location.host + '/fichaContacto', {
				method: 'POST',
				body:   formData1
			});
			const data = await response1.json();
			return data;
		}

	    datosDevueltos1().then((data) => {
	    	if (data.success) {
	    		ocultarModal('modalContacto');
		    	if ((data.data.value1 == 'OK') && (window.opcionContacto === 2)) { // modificar fila de la tabla
					$('#tabContactos').bootstrapTable('updateByUniqueId', {
		  				id: 		window.idTabContactos,
		  				row: 		fila2,
			        	replace: 	false
					});
					selRowTab('tabContactos', 'success', 'idTabContactos', fila2.ccn);
		    	} else if (window.opcionContacto === 1) { // añadir nueva fila a la tabla
		    		fila2.ccn = data.data.value2;
		    		fila2.cod = data.data.value1;
	 				$('#tabContactos').bootstrapTable('append', fila2);
	 				setTimeout(function() {
	 					// Buscar el índice de la fila en la tabla visualizada
						indiceFilaTab = obtenerIndicePorId('tabContactos', 'ccn', data.data.value2);
						// devolverá -1 si no encuentra el índice, lo cual es posible ya que se podría haber añadido el nuevo registro a una tabla filtrada
						// si encuentra el índice, cambiará de página si es necesario
						if (indiceFilaTab != -1) { irAPaginaConRegistro('tabContactos', indiceFilaTab, 'success', 'idTabContactos', data.data.value2); }
	 				}, 500);
	 				//refrescoTabContactos = 1;
    				//$('#tabContactos').bootstrapTable('refresh');
			    }
		    } else {
		    	if (data.message == "K1") {
	          		salirModalContacto = true;
	          		modMsjFinPruebaToast('contactos003', 'My Contacts Cloud', txtFinPrueba1(), txtFinPrueba2());
		    	} else if (data.message == "K2") {
	          		salirModalContacto = true;
					modMsj('contactos004', 'My Contacts Cloud', tExp('Te recomendamos cambiar a un plan PRO superior para poder añadir más contactos', '') + '.<br><center><button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick="abrirModal1DesdeFicha(2)">' + tExp('Mi suscripción', '') + '</button></center>', msjModContacto, false);
		    	} else if (data.message == "KD1") {
					toastSelFila(tExp('Código duplicado', ''), msjModContacto);
		        	cod.focus();
		    	} else {
		    		toastSelFila(data.message, msjModContacto);
		    	}
		    }
	    }).catch(error => {
	    	toastSelFila(error.message, msjModContacto);
	    })			
		    
	}


	formContacto.onreset = (e) => {
		camposSummernote();
		selectedTagsFichaContacto.innerHTML = '';
		if (window.opcionContacto != 1) {
			if (et1Cancelar != 0) { crearEtiqueta(et1Cancelar, selectedTagsFichaContacto); }
			if (et2Cancelar != 0) { crearEtiqueta(et2Cancelar, selectedTagsFichaContacto); }
			if (et3Cancelar != 0) { crearEtiqueta(et3Cancelar, selectedTagsFichaContacto); }			
		}
	}


	cor_contactos.addEventListener ('blur', (event) => { 
		if (cor_contactos.value.length != 0) { 
			if (!isValidEmail(cor_contactos.value)) {
				modal1("My Contacts Cloud", tExp("Correo electrónico no válido", ""), msjModContacto);
			}
		}
	})




	SieliminarContacto.addEventListener('click', (event) => {
		let formData3 = new FormData();
		formData3.append('prefijo', localStorage.getItem('prefijo'));
		formData3.append("ccn", window.idTabContactos);
		formData3.append("opcionListado", 3);
		async function eliminaContacto() {
			const response3 = await fetch('https://' + window.location.host + '/fichaContacto', {
	      		method: 'POST',
	      		body: 	formData3,
	    	});
			const data = await response3.json();
			return data;
		}
		eliminaContacto().then((data) => {
			if (data.success) {
				if (data.data.value1 == 'OK') {
					eliminarReg('tabContactos', 'idTabContactos', 'ccn', 'success');
					//let indiceFila 	= indice(window.idTabContactos, 'ccn', 'tabContactos');
                    //irAPaginaConRegistro('tabContactos', indiceFila);
					//refrescoTabContactos = 1;
	    			//$('#tabContactos').bootstrapTable('refresh');
				}	
			}
		}).catch(error => {
			alert(error.message);
		});
	});

	opcionesTablaSubmenu_contactos.addEventListener('click',  (e) => { 
	    e.stopPropagation();
	});

	cont6b_contactos.addEventListener('click',   (e) => { 
	    e.stopPropagation();
	});

	// código para etiquetas -> modal tagModal
    tagModal.addEventListener('show.bs.modal', function (event) {
    	crearEstilo('guardarEtiquetas', 'cancelarEtiquetas', tExp('Aceptar', ''), tExp ('Cancelar', ''));
    	activarTooltipsDiv('tagModal');
        initializeTags();
        if (abrirModalTagsDesde=='modalContacto') {
        	etiSeleccionadasTmp = [...etiSeleccionadasContacto];
        } else {
        	etiSeleccionadasTmp = [...etiSeleccionadasFiltro];
        }
        highlightSelectedTags();  // Resaltar las etiquetas seleccionadas
        salidaTagModal = true;
    })

    tagModal.addEventListener('hide.bs.modal', function (event) {
    	desactivarTooltipsDiv('tagModal');
    })

    tagModal.addEventListener('hidden.bs.modal', function (event) {

    	document.getElementById(abrirModalTagsDesde).classList.remove('modal-open'); // Restaurar el estado del modal contacto
    	document.body.classList.remove('modal-open'); // Restaurar el estado del body	


	    // Remover las clases que se añadieron al abrir el segundo modal
	    const secondBackdrop = document.querySelector('.modal-backdrop');
	    if (secondBackdrop) {
	        secondBackdrop.classList.remove('modal-backdrop-superior');
	    }

	    // Cambiar el z-index del segundo modal
	    document.getElementById('tagModal').classList.remove('modal-superior');

    })

    guardarEtiquetas.addEventListener('click', function() {
        if (abrirModalTagsDesde=='modalContacto') {
        	etiSeleccionadasContacto = [...etiSeleccionadasTmp]; // Guardar los cambios temporales en las etiquetas seleccionadas
        	selectedTagsFichaContacto.innerHTML = '';
			for (let item of etiSeleccionadasContacto) {
				crearEtiqueta(item, selectedTagsFichaContacto);
			} 
        } else if (abrirModalTagsDesde=='modalFiltroContactos') {
        	etiSeleccionadasFiltro = [...etiSeleccionadasTmp]; // Guardar los cambios temporales en las etiquetas seleccionadas
        	selectedTagsFiltro.innerHTML = '';
			for (let item of etiSeleccionadasFiltro) {
				crearEtiqueta(item, selectedTagsFiltro);
			}
        }
    	
		// Obtener la instancia del modal de Bootstrap
		var modalInstance = bootstrap.Modal.getInstance(document.getElementById('tagModal'));
		// Ocultar el modal si la instancia existe
		if (modalInstance) { modalInstance.hide(); }
    });

    cancelarEtiquetas.addEventListener('click', function() {
    	if (abrirModalTagsDesde=='modalContacto') {
        	etiSeleccionadasTmp = [...etiSeleccionadasContacto];  // Restablecer los cambios temporales a los valores originales
        } else if (abrirModalTagsDesde=='modalFiltroContactos') {
        	etiSeleccionadasTmp = [...etiSeleccionadasFiltro];
        }
        highlightSelectedTags();  // Resaltar etiquetas seleccionadas originales
    });

    // Función para inicializar las etiquetas en el modal
    async function initializeTags() {
        const tagOptionsContainer = document.getElementById('tagOptionsContainer');
        tagOptionsContainer.innerHTML = '';  // Limpiar el contenedor antes de agregar nuevas opciones

        dataEtiquetas.forEach(tag => {
            // Crear un elemento para cada etiqueta
            const tagElement = document.createElement('div');
            tagElement.classList.add('tag-option');
            tagElement.setAttribute('data-num', tag.num);  // Asignar 'num' como identificador
            tagElement.textContent = tag.des;  // Asignar 'des' como texto de la etiqueta

            // Asignar el color de fondo usando el mapa de colores
            const backgroundColor = aColorFondoEvento[tag.col - 1] || '#000';  // Color por defecto en caso de un valor no encontrado
            tagElement.style.backgroundColor = backgroundColor;

            tagElement.style.marginRight 	= '8px';  // Espacio a la derecha
    		tagElement.style.marginBottom 	= '8px'; // Espacio en la parte inferior (opcional, si son varias filas)

            // Ajustar el color del texto en función del color de fondo
            if (tag.col === 4) {  // Si el fondo es amarillo, hacer el texto negro
                tagElement.style.color = 'black';
            } else {
                tagElement.style.color = 'white';
            }

            // Evento de selección de la etiqueta
            tagElement.onclick = function() {
                toggleTag(tagElement);
            };

            tagOptionsContainer.appendChild(tagElement);  // Agregar la etiqueta al contenedor
        });
    }

    // Función para resaltar las etiquetas seleccionadas en el modal
    function highlightSelectedTags() { 
        const tagOptions = document.querySelectorAll('#tagModal .tag-option');
        tagOptions.forEach(option => {
            const tagNum = option.getAttribute('data-num');
            // Convertir a número para comparar correctamente
            if (etiSeleccionadasTmp.includes(parseInt(tagNum))) {
                option.classList.add('etiSelected');
            } else {
                option.classList.remove('etiSelected');
            }
        });
    }

    // Función para alternar la selección de etiquetas
    function toggleTag(element) {
        const tagNum = parseInt(element.getAttribute('data-num'));  // Obtener el número de la etiqueta (data-num)
        const tagText = element.innerText;  // Este valor solo es relevante si lo necesitas para otra cosa

        // Comprobar si la etiqueta ya está seleccionada
        const existingIndex = etiSeleccionadasTmp.indexOf(tagNum);

        if (existingIndex === -1) {
            if (etiSeleccionadasTmp.length >= maxTags) {
                document.getElementById('maxLimitMsg').style.display = 'block';  // Mostrar mensaje de límite
                return;
            }
            // Agregar la etiqueta seleccionada temporalmente
            etiSeleccionadasTmp.push(tagNum);
        } else {
            // Quitar la etiqueta seleccionada temporalmente
            etiSeleccionadasTmp.splice(existingIndex, 1);
        }

        document.getElementById('maxLimitMsg').style.display = 'none';  // Ocultar mensaje de límite
        highlightSelectedTags();  // Resaltar etiquetas seleccionadas
    }


    // fin código modal 'tagModal'




    return true;
}




function agregarCodigoInteracciones() {
    opcionesTablaSubmenu_interacciones.addEventListener('click',  (e) => { 
        e.stopPropagation();
    });

    modalInteraccion.addEventListener('show.bs.modal', function (e) { 

    	if (salirModalInteraccion) { salirModalInteraccion = false; return false; }

        activarTooltipsDiv('modalInteraccion');

        if (window.opcionInteraccion === 1) {

            let date = new Date();
			var localDate = date.getFullYear() + '-' +
			    ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
			    ('0' + date.getDate()).slice(-2) + 'T' +
			    ('0' + date.getHours()).slice(-2) + ':' +
			    ('0' + date.getMinutes()).slice(-2);
			fhii_interacciones.defaultValue     =   localDate;

            asui_interacciones.defaultValue    		= '';       
            desi_interacciones.defaultValue    		= '';
            ncli_interacciones.defaultValue    		= '';
            reci_interacciones.defaultValue    		= null;
            seleccionarCombo('tipi', '1');
            seleccionarCombo('etai', '1');
            seleccionarCombo('resi', '1');
            seleccionarCombo('peni', '1');
             
            fhii_interacciones.readOnly        		= false;
            asui_interacciones.readOnly        		= false;
            desi_interacciones.readOnly       		= false;
            ncli_interacciones.readOnly       		= false;
            reci_interacciones.readOnly    			= false;

            tipi_interacciones.disabled       		= false;
            etai_interacciones.disabled       		= false;
            resi_interacciones.disabled       		= false;
            peni_interacciones.disabled       		= false;

            aceptar_interacciones.hidden      		= false;
            cancelar_interacciones.hidden     		= false;

            document.getElementById('formInteraccion').reset();
        }

        if (window.opcionInteraccion === 2 || window.opcionInteraccion === 4) {
            let formData2 = new FormData();
            formData2.append('num', 24);
            formData2.append('donde', window.idTabInteracciones);
            formData2.append('prefijo', localStorage.getItem('prefijo'));
            async function datosDevueltos2() {
                const response2 = await fetch('https://' + window.location.host + '/selectSimple', {
                    method: 'POST',
                    body: formData2
                });
                const data = await response2.json();
                return data;
            };
            datosDevueltos2().then((data) => {
                if (data.success) {
                    idii_interacciones.defaultValue = window.idTabInteracciones;
		            fhii_interacciones.defaultValue = data.data.fhii.substring(0, 16) || '';
		            asui_interacciones.defaultValue = data.data.asui || '';    
		            desi_interacciones.defaultValue = data.data.desi || '';
		            ncli_interacciones.defaultValue = data.data.ncli || '';
		            reci_interacciones.defaultValue = data.data.reci.substring(0, 16) || '';
		            seleccionarCombo('tipi', data.data.tipi);
		            seleccionarCombo('etai', data.data.etai);
		            seleccionarCombo('resi', data.data.resi);
		            seleccionarCombo('peni', data.data.peni);
			        if (window.opcionInteraccion === 2) {
			            fhii_interacciones.readOnly        		= false;
			            asui_interacciones.readOnly        		= false;
			            desi_interacciones.readOnly       		= false;
			            ncli_interacciones.readOnly       		= false;
			            reci_interacciones.readOnly    			= false;

			            tipi_interacciones.disabled       		= false;
			            etai_interacciones.disabled       		= false;
			            resi_interacciones.disabled       		= false;
			            peni_interacciones.disabled       		= false;

			            aceptar_interacciones.hidden      		= false;
			            cancelar_interacciones.hidden     		= false;

			        } else if (window.opcionInteraccion === 4) {
			            fhii_interacciones.readOnly        		= true;
			            asui_interacciones.readOnly        		= true;
			            desi_interacciones.readOnly       		= true;
			            ncli_interacciones.readOnly       		= true;
			            reci_interacciones.readOnly    			= true;

			            tipi_interacciones.disabled       		= true;
			            etai_interacciones.disabled       		= true;
			            resi_interacciones.disabled       		= true;
			            peni_interacciones.disabled       		= true;
			            
			            aceptar_interacciones.hidden      		= true;
			            cancelar_interacciones.hidden     		= true;
			        }
			        document.getElementById('formInteraccion').reset();
                } else {
                    toastSelFila(data.message, msjModInteraccion);
                }
            }).catch(error => {
                toastSelFila(error.message, msjModInteraccion);
            });
        };
    });


    modalInteraccion.addEventListener('hide.bs.modal', function (e) {
    	if (salirModalInteraccion) { salirModalInteraccion = false; return false; }
        desactivarTooltipsDiv('modalInteraccion');
    })  


    formInteraccion.onsubmit = async (e) => {
        e.preventDefault();
        if (!dEstSuscrip()) {return false;}

        let fila2 = {
        	idii: 	idii_interacciones.value,
			idci: 	window.idTabContactos,
			fhii: 	fhii_interacciones.value,
			tipi: 	tipi_interacciones.value,
			asui:  	asui_interacciones.value,
			desi:  	desi_interacciones.value,
			ncli:  	ncli_interacciones.value,
			etai:  	etai_interacciones.value,
			resi:  	resi_interacciones.value,
			peni:  	peni_interacciones.value,
			reci:  	reci_interacciones.value
        };

        async function datosDevueltos1() {
            let formData1 = new FormData(formInteraccion);
            formData1.append('prefijo', localStorage.getItem('prefijo'));
            formData1.append('opcionListado', window.opcionInteraccion);
            formData1.append('maxRegFree', localStorage.getItem('maxRegFree'));
            formData1.append('plan', localStorage.getItem('plan'));
            formData1.append('idci', window.idTabContactos);
            const response1 = await fetch('https://' + window.location.host + '/fichaInteraccion', {
                method: 'POST',
                body:   formData1
            });
            const data = await response1.json();
            return data;
        }
        datosDevueltos1().then((data) => {
            if (data.success) {
                ocultarModal('modalInteraccion');
                if (data.data.value1 == "") { // añadir
		    		fila2.idii = data.data.value2;
	 				$('#tabInteracciones').bootstrapTable('append', fila2);
	 				setTimeout(function() {
						selRowTab('tabInteracciones', 'success3', 'idTabInteracciones', data.data.value2);
	 				}, 500);
                } else if (data.data.value1 == "OK") { // modificar
                    $('#tabInteracciones').bootstrapTable('updateByUniqueId', {
                        id:         window.idTabInteracciones,
                        row:        fila2,
                        replace:    false
                    }); 
	 				setTimeout(function() {
						selRowTab('tabInteracciones', 'success3', 'idTabInteracciones', fila2.idii);
	 				}, 500);	                    
                }
            } else {
                if (data.message == "K1") {
                    salirModalInteraccion = true;
                    var s1 = tExp('Te recomendamos adquirir un plan PRO para poder añadir más interacciones', '');
                    modMsj('interacciones001', 'My Contacts Cloud', s1 + '.<br><center><button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick="abrirModal1DesdeFicha(1)">' + tExp('Ver planes', '') + '</button></center>', msjModInteraccion, false);
                } else if (data.message == "K2") {
                    salirModalInteraccion = true;
                    var s2 = tExp('Te recomendamos cambiar a un plan PRO superior para poder añadir más interacciones', '');
                    modMsj('interacciones002', 'My Contacts Cloud', s2 + '.<br><center><button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick="abrirModal1DesdeFicha(2)">' + tExp('Mi suscripción', '') + '</button></center>', msjModInteraccion, false);
                } else {
                    toastSelFila(tExp(data.message, ''), msjModInteraccion);
                }
            }
        }).catch(error => {
            toastSelFila(error.message, msjModInteraccion);
        })  
        
    }

    formEliminarInteraccion.addEventListener('show.bs.modal', function (e) {  
        let i = indice(window.idTabInteracciones, 'idii', 'tabInteracciones');
        fhiiE_interacciones.value = formatoFechaHora($('#tabInteracciones').bootstrapTable('getData')[i]['fhii']);
        asuiE_interacciones.value = $('#tabInteracciones').bootstrapTable('getData')[i]['asui'];
    });

    SieliminarInteraccion.addEventListener('click', (event) => {
        let formData3 = new FormData();
        formData3.append("prefijo", localStorage.getItem('prefijo'));
        formData3.append("opcionListado", 3);
        formData3.append("idii", window.idTabInteracciones);
        async function eliminaInteraccion() {
            const response3 = await fetch('https://' + window.location.host + '/fichaInteraccion', {
                method: 'POST',
                body:   formData3
            });
            const data = await response3.json();
            return data;
        }
        eliminaInteraccion().then((data) => {
            if (data.success) {
                if (data.data.value1 == "OK") {
                	if (!dEstSuscrip()) {return false; }
                    eliminarReg('tabInteracciones', 'idTabInteracciones', 'idii', 'success3');
                }
            } else {
                alert(data.message);
            }
        }).catch(error => {
            alert(error.message);
        });
    })

	return true;
}




















function textoAvisoGuardarDocumentoEditado() {
	return tExp('Guarda la ficha para aplicar los cambios.', '');
}

function ocultarAvisoGuardarDocumento() {
	const aviso = document.getElementById('avisoGuardarDocumento');
	const texto = document.getElementById('textoAvisoGuardarDocumento');
	if (aviso) aviso.hidden = true;
	if (texto) texto.textContent = '';
}

function mostrarAvisoGuardarDocumento() {
	const aviso = document.getElementById('avisoGuardarDocumento');
	const texto = document.getElementById('textoAvisoGuardarDocumento');
	if (!aviso || !texto) return;
	texto.textContent = textoAvisoGuardarDocumentoEditado();
	aviso.hidden = false;
}

function agregarCodigoDocumentos() {

	    opcionesTablaSubmenu_documentos.addEventListener('click',  (e) => { 
	        e.stopPropagation();
	    });

	    opcionesExportarSubmenu_documentos.addEventListener('click',   (e) => { 
	        e.stopPropagation();
	    });


	    fic_documentos.addEventListener('change', function(e) {
	        let file        						= e.target.files[0];
	        if (!file) return;
	        nom_documentos.value    				= file.name;
	       	docEditado  							= 0;
			nomDocEditadoCompleto 					= file.name;
			ocultarAvisoGuardarDocumento();
	        //alert(file.size);
	    })

	    modalDocumento.addEventListener('show.bs.modal', function (e) { 

	        if (salirModalDocumento) { salirModalDocumento = false; return false; }

	        activarTooltipsDiv('modalDocumento');

	        OneDriveFileId 			= '';
	        OneDriveEditUrl 		= '';
	        docEditado  			= 0;
			nomDocEditadoCompleto 	= '';
			ocultarAvisoGuardarDocumento();

	        if (window.opcionDocumento === 1) {
	            let date                			= new Date();
	            let currentDate         			= date.toISOString().slice(0,10);
	            fec_documentos.defaultValue    		= currentDate;
	            nom_documentos.defaultValue    		= '';       
	            com_documentos.defaultValue    		= '';
	            
	            fec_documentos.readOnly        		= false;
	            nom_documentos.readOnly        		= false;
	            com_documentos.readOnly       		= false;

	            aceptar_documentos.hidden      		= false;
	            cancelar_documentos.hidden     		= false;

	            examinar_documentos.style.display 	= '';

	            etGrupoBuscarDoc.style.display 		= "";
        		creaNuevoDocumento.style.display 	= "";
        		openDocEdit.style.display 			= "none";

	            document.getElementById('formDocumento').reset();
	        }

	        if (window.opcionDocumento === 2 || window.opcionDocumento === 4) {
	            let formData2 = new FormData();
	            formData2.append('num', 23);
	            formData2.append('donde', window.idTabDocumentos);
	            formData2.append('prefijo', localStorage.getItem('prefijo'));
	            async function datosDevueltos2() {
	                const response2 = await fetch('https://' + window.location.host + '/selectSimple', {
	                    method: 'POST',
	                    body: formData2
	                });
	                const data = await response2.json();
	                return data;
	            };
	            datosDevueltos2().then((data) => {
	                if (data.success) {
	                    id_documentos.defaultValue  			= window.idTabDocumentos;
	                    fec_documentos.defaultValue 			= data.data.fec;
	                    nom_documentos.defaultValue 			= data.data.nom;
	                    com_documentos.defaultValue 			= data.data.com || '';
	                    etGrupoBuscarDoc.style.display 			= "none";
        				creaNuevoDocumento.style.display 		= "none";
				        if (window.opcionDocumento === 2) {
				            fec_documentos.readOnly       		= false;
				            nom_documentos.readOnly        		= false;
				            com_documentos.readOnly        		= false;
				            aceptar_documentos.hidden      		= false;
				            cancelar_documentos.hidden     		= false;
				            examinar_documentos.style.display 	= '';

					        const extension = obtenerExtensionArchivo(data.data.nom);
					        const formatosValidos = ["odt", "ods", "odp"];
					        
					        if (formatosValidos.includes(extension)) {
					            openDocEdit.style.display = "";
					        } else {
					            openDocEdit.style.display = "none";
					        }				            

				        } else if (window.opcionDocumento === 4) {
				            fec_documentos.readOnly        		= true;
				            nom_documentos.readOnly        		= true;
				            com_documentos.readOnly       		= true;
				            aceptar_documentos.hidden      		= true;
				            cancelar_documentos.hidden     		= true;
				            examinar_documentos.style.display 	= 'none';
				            openDocEdit.style.display 			= "none";
				        }
				        document.getElementById('formDocumento').reset();
	                } else {
	                    toastSelFila(data.message, msjModDocumento);
	                }
	            }).catch(error => {
	                toastSelFila(error.message, msjModDocumento);
	            })
	        }




	    })


	    modalDocumento.addEventListener('hide.bs.modal', function (e) {
	        // if (salirModalDocEditar) { e.preventDefault(); salirModalDocEditar = false; return false; }
	        if (salirModalDocumento) { salirModalDocumento = false; return false; }
	        ocultarAvisoGuardarDocumento();
	        desactivarTooltipsDiv('modalDocumento');
	    }) 



		fileTypeMenu.addEventListener('click', function (e) {
		    e.preventDefault();
		    const item = e.target.closest('[data-value]');
		    if (!item) return;
		    const extension = item.getAttribute('data-value');

		    if (['odt', 'ods', 'odp'].includes(extension)) {
		        abrirDocumentoEnCollabora(extension);
		        return;
		    }

		    console.error('Extensión no soportada:', extension);
		    toastMsj(tExp("Extensión no soportada", ""), msjModDocumento, 1500, 5, 4);
		});



	    formDocumento.onsubmit = async (e) => {
	        e.preventDefault();
	        if (!dEstSuscrip()) { return false; }

	        var numFic = fic_documentos.files.length;
	        if ((numFic == 0) && (docEditado == 0) && (window.opcionDocumento == 1)) { // Debe haber un fichero seleccionado si se añade un documento nuevo y no se está creando nuevo
				toastSelFila(tExp('Pulsa sobre el botón de Examinar para seleccionar el fichero', ''), msjModDocumento);	
				return false;
	        } else if (numFic > 1) { // No puede haber más de un fichero seleccionado
	            toastSelFila(tExp('Selecciona un sólo fichero', ''), msjModDocumento);
	            return false;
	        } else if ((numFic == 1) && (docEditado == 0)) { // Comprobar el tamaño del fichero (máximo 5 mb)
	            var longFic = fic_documentos.files[0].size;
	            var longMax = 5 * 1024 * 1024; // máximo 5 mb.
	            if (longFic > longMax) {
	                toastSelFila(tExp('El tamaño del fichero no debe superar los', '') + ' 5 Mb', msjModDocumento);
	                return false;
	            } 
	        }

	        let fila2 = {
	            id:     id_documentos.value,
	            fec:    fec_documentos.value,
	            com:    com_documentos.value,
	            nom:    nom_documentos.value
	        };

	        async function datosDevueltos1() {
	        	var accessToken = '';
	        	if (docEditado == 1) {  // Documento de Microsoft Office editado en OneDrive
	        		accessToken = await obtenerTokenMicrosoft(3);
			        if (!accessToken) {
			            accessToken = '';
			        }
	        	}

	            let formData1 = new FormData(formDocumento);
	            formData1.append('prefijo', localStorage.getItem('prefijo'));
	            formData1.append('opcionListado', window.opcionDocumento);
	            formData1.append('maxRegFree', localStorage.getItem('maxRegFree'));
	            formData1.append('plan', localStorage.getItem('plan'));
	            formData1.append('numFicheros', numFic);
	            formData1.append('tfGesDoc', localStorage.getItem('tfGesDoc'));
	            formData1.append('numGesDoc', localStorage.getItem('numGesDoc'));
	            formData1.append('docEditado', docEditado);
	            formData1.append('nomDocEditadoCompleto', nomDocEditadoCompleto);
	            formData1.append('oneDriveFileId', OneDriveFileId);
	            formData1.append('accessToken', accessToken);

	            const response1 = await fetch('https://' + window.location.host + '/fichaDocumento', {
	                method: 'POST',
	                body:   formData1
	            });
	            const data = await response1.json();
	            return data;
	        }
	        datosDevueltos1().then((data) => {
	            if (data.success) {
	            	notificarCambioDocumentosCorreo();
	                ocultarModal('modalDocumento');
	                if (data.data.value1 == "AG") { // añadir
			    		fila2.id 		= data.data.value2;
		 				$('#tabDocumentos').bootstrapTable('append', fila2);
		 				setTimeout(function() {
							selRowTab('tabDocumentos', 'success1', 'idTabDocumentos', data.data.value2);
		 				}, 500);
	                } else if (data.data.value1 == "MO") { // modificar
	                    $('#tabDocumentos').bootstrapTable('updateByUniqueId', {
	                        id:         window.idTabDocumentos,
	                        row:        fila2,
	                        replace:    false
	                    }); 
		 				setTimeout(function() {
							selRowTab('tabDocumentos', 'success1', 'idTabDocumentos', window.idTabDocumentos);
		 				}, 500);	                    
	                }
	            } else {
	                if (data.message == "K1") {
	                    salirModalDocumento = true;
	                    var s1 = tExp('Te recomendamos adquirir un plan PRO para poder añadir más documentos', '');
	                    
	                    modMsj('documentos001', 'My Contacts Cloud', s1 + '.<br><center><button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick="abrirModal1DesdeFicha(1)">' + tExp('Ver planes', '') + '</button></center>', msjModDocumento, false);


	                } else if (data.message == "K2") {
	                    salirModalDocumento = true;
	                    var s2 = tExp('Te recomendamos cambiar a un plan PRO superior para poder añadir más documentos', '');
	                    
	                    modMsj('documentos002', 'My Contacts Cloud', s2 + '.<br><center><button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick="abrirModal1DesdeFicha(2)">' + tExp('Mi suscripción', '') + '</button></center>', msjModDocumento, false);
	                } else {
	                	
	                    toastSelFila(tExp(data.message, ''), msjModDocumento);
	                }
	            }
	        }).catch(error => {
	            toastSelFila(error.message, msjModDocumento);
	        })  
	        
	    }

	    formEliminarDocumento.addEventListener('show.bs.modal', function (e) {  
	        let i = indice(window.idTabDocumentos, 'id', 'tabDocumentos');
	        fecE.value = formatoFecha($('#tabDocumentos').bootstrapTable('getData')[i]['fec']);
	        nomE.value = $('#tabDocumentos').bootstrapTable('getData')[i]['nom'];
	        comE.value = $('#tabDocumentos').bootstrapTable('getData')[i]['com'];
	    });

	    SiEliminarDocumento.addEventListener('click',  (e) => { 
	        let formData3 = new FormData();
	        formData3.append("prefijo", localStorage.getItem('prefijo'));
	        formData3.append("opcionListado", 3);
	        formData3.append("id", window.idTabDocumentos);
	        async function eliminaDocumento() {
	            const response3 = await fetch('https://' + window.location.host + '/fichaDocumento', {
	                method: 'POST',
	                body:   formData3
	            });
	            const data = await response3.json();
	            return data;
	        }
	        eliminaDocumento().then((data) => {
	            if (data.success) {
	                if (data.data.value1 == "EL") {
	                	if (!dEstSuscrip()) {return false;}
	                	notificarCambioDocumentosCorreo();
	                    eliminarReg('tabDocumentos', 'idTabDocumentos', 'id', 'success1');
	                }
	            } else {
	                alert(data.message);
	            }
	        }).catch(error => {
	            alert(error.message);
	        });
	    });


		openDocEdit.addEventListener("click", (event) => {
			event.preventDefault();
			// salirModalDocEditar = true;
	        OneDriveEditUrl 	= '';
	        OneDriveFileId 		= '';

	        var e = obtenerExtensionArchivo(document.getElementById("nom_documentos").value.trim());
	        if ((e == 'odt') || (e == 'ods') || (e == 'odp')) {
	        	abrirDocumentoEnCollabora(e);
	        }
		});


	return true;
}




function agregarCodigoEventos() {

	opcionesTablaSubmenuCl_eventos.addEventListener('click', (e) => {  e.stopPropagation(); });

	opcionesExportarSubmenuCl_eventos.addEventListener('click', (e) => {  e.stopPropagation(); });

	modalEvento.addEventListener('show.bs.modal', function (e) { 

		if (salirModalEvento) { salirModalEvento = false; return false; }

		if (salidaModalEvento == 1) { salidaModalEvento = 0; return false; }

		activarTooltipsDiv('modalEvento');

	    var fechaInicial = null;
	    var fechaFinal = null;
	    //window.location.hash = 'eventos.html';

	    //modalColTab('modalColTabParticipantes', colTabParticipantes, 'tabParticipantes');

	    loadColumnConfig('tabParticipantes');
	    
	    if (window.opcionEvento === 1) {

	      window.idEvento = 0;

	      exampleModalLabel_eventos.innerHTML =  tExp('Nuevo evento', '');
	      
	      titulo_eventos.defaultValue  = '';
	      descripcion_eventos.defaultValue = '';
	      lugar_eventos.defaultValue = '';

	      idReunion_eventos.defaultValue    = '';
	      passReunion_eventos.defaultValue  = '';
	      appReunion_eventos.defaultValue   = 1;

	      www_eventos.defaultValue    = '';

	      todoeldia_eventos.defaultValue = window.todoElDia;
	      todoeldia_eventos.defaultChecked = window.todoElDia;


	      var fIni        = new Date(window.ini);
	      var fFin        = new Date(window.fin);
	      
	      // lo que se envía a la base de datos es la hora GMT+0
	      if (window.todoElDia) {
	        fechaInicial  = fIni.getFullYear() + '-' + ('0' + (fIni.getMonth() + 1)).slice(-2) + '-' + ('0' + fIni.getDate()).slice(-2) + 'T' + '00:00:00';
	        fechaFinal    = fFin.getFullYear() + '-' + ('0' + (fFin.getMonth() + 1)).slice(-2) + '-' + ('0' + fFin.getDate()).slice(-2) + 'T' + '00:00:00';
	      } else {
	        fechaInicial  = fIni.toISOString().slice(0, -1).substring(0, 16);
	        fechaFinal    = fFin.toISOString().slice(0, -1).substring(0, 16);
	      }
	      
	      // y en la ventana se visualiza la hora local
	      var localDateIni  = fIni.getFullYear() + '-' +
	            ('0' + (fIni.getMonth() + 1)).slice(-2) + '-' +
	            ('0' + fIni.getDate()).slice(-2) + 'T' +
	            ('0' + fIni.getHours()).slice(-2) + ':' +
	            ('0' + fIni.getMinutes()).slice(-2);
	      fechaini_eventos.defaultValue     =   localDateIni;
	      var localDateFin  = fFin.getFullYear() + '-' +
	            ('0' + (fFin.getMonth() + 1)).slice(-2) + '-' +
	            ('0' + fFin.getDate()).slice(-2) + 'T' +
	            ('0' + fFin.getHours()).slice(-2) + ':' +
	            ('0' + fFin.getMinutes()).slice(-2);
	      fechafin_eventos.defaultValue     =   localDateFin;


	      seleccionarRadio('color', 1);
	      seleccionarCombo('appReunion', '1');

	      bloquesAppReunion();
	      adjuntar1_eventos.hidden  =   true;
	      eliminar_eventos.hidden  =   true;


	    } else if (window.opcionEvento === 2 ) {

	      exampleModalLabel_eventos.innerHTML =  tExp('Evento', '');
	      let formData2 = new FormData();
	      formData2.append('num', 21);
	      formData2.append('donde', window.idEvento);
	      formData2.append('prefijo', localStorage.getItem('prefijo'));

	      async function datosDevueltos2() {
	        const response2 = await fetch('https://' + window.location.host + '/selectSimple', {
	              method: 'POST',
	              body: formData2
	          });
	        const data = await response2.json();
	        return data;
	      };
	      datosDevueltos2().then((data) => {
	        if (data.success) {
	          titulo_eventos.defaultValue       = data.data.titulo;
	          descripcion_eventos.defaultValue  = data.data.descripcion || '';
	          lugar_eventos.defaultValue        = data.data.lugar || '';
	          idReunion_eventos.defaultValue    = data.data.idReunion || '';
	          passReunion_eventos.defaultValue  = data.data.passReunion || '';
	          appReunion_eventos.defaultValue   = data.data.appReunion;
	          www_eventos.defaultValue          = data.data.www || '';
	          todoeldia_eventos.defaultValue    = data.data.todoeldia;

	          if (data.data.todoeldia == -1) {
	              var localDateIni  = data.data.fechaini.substring(0, 10) + 'T00:00';
	              var localDateFin  = data.data.fechafin.substring(0, 10) + 'T00:00';
	          } else {
	              var fIniGMT0              = new Date(data.data.fechaini);
	              var fFinGMT0              = new Date(data.data.fechafin);
	              var offsetMinutes         = fIniGMT0.getTimezoneOffset(); // Obtener la diferencia horaria entre la hora local y GMT en minutos
	              var fIniLocal             = new Date(fIniGMT0.getTime() - (offsetMinutes * 60 * 1000));
	              var fFinLocal             = new Date(fFinGMT0.getTime() - (offsetMinutes * 60 * 1000));
	              // y en la ventana se visualiza la hora local
	              var localDateIni  = fIniLocal.getFullYear() + '-' +
	                    ('0' + (fIniLocal.getMonth() + 1)).slice(-2) + '-' +
	                    ('0' + fIniLocal.getDate()).slice(-2) + 'T' +
	                    ('0' + fIniLocal.getHours()).slice(-2) + ':' +
	                    ('0' + fIniLocal.getMinutes()).slice(-2);
	              
	              var localDateFin  = fFinLocal.getFullYear() + '-' +
	                    ('0' + (fFinLocal.getMonth() + 1)).slice(-2) + '-' +
	                    ('0' + fFinLocal.getDate()).slice(-2) + 'T' +
	                    ('0' + fFinLocal.getHours()).slice(-2) + ':' +
	                    ('0' + fFinLocal.getMinutes()).slice(-2);            
	          }

	          fechaini_eventos.defaultValue     =   localDateIni;                
	          fechafin_eventos.defaultValue     =   localDateFin;

	          seleccionarRadio('color', data.data.color);
	          seleccionarCombo('appReunion', data.data.appReunion);
	          bloquesAppReunion();
	          if (data.data.todoeldia == 0) { todoeldia_eventos.defaultChecked = false; } else { todoeldia_eventos.defaultChecked = true; }
	        } else {
	          toastSelFila(data.message, msjModEvento);
	        }
	      }).catch(error => {
	        toastSelFila(error.message, msjModEvento);
	      })

	      adjuntar1_eventos.hidden  =   false;
	      eliminar_eventos.hidden   =   false;

	    }

		formEvento.reset();

	})


	modalEvento.addEventListener('hide.bs.modal', function (e) {
		//alert("hide");
		if (salirModalEvento) { salirModalEvento = false; return false; }
	    desactivarTooltipsDiv('modalEvento');	
	})


	formEvento.onsubmit = async (e) => {
	    e.preventDefault();
	    if (salirFormEventoSubmit) { salirFormEventoSubmit = false; return false; }
	    if (salirModalEvento) { return false; }

	    if (!dEstSuscrip()) {return false;}

	    let feIni = new Date(fechaini_eventos.value);
	    let feFin = new Date(fechafin_eventos.value);
	    if (feIni >= feFin) {
	        toastSelFila(tExp('La fecha final debe ser posterior a la inicial', ''), msjModEvento);
	        return false;
	    }

	    if (todoeldia_eventos.checked) {
	        let diaIni = new Date(feIni.getFullYear(), feIni.getMonth(), feIni.getDate());
	        let diaFin = new Date(feFin.getFullYear(), feFin.getMonth(), feFin.getDate());
	        if (diaIni == diaFin) {
	          toastSelFila(tExp('El día debe ser distinto', ''), msjModEvento);
	          return false;
	        }
	    }


	    if (todoeldia_eventos.checked) {
	      var fechaIniEvento = fechaini_eventos.value.substring(0, 10) + 'T00:00';
	      var fechaFinEvento = fechafin_eventos.value.substring(0, 10) + 'T00:00';
	    } else {
	      var fechaIniEvento = fechaini_eventos.value;
	      var fechaFinEvento = fechafin_eventos.value;      
	    }

	    var valorColor = dValorRadio('color');

	    bdEvento(window.opcionEvento, window.idEvento, titulo_eventos.value, todoeldia_eventos.checked, fechaIniEvento, fechaFinEvento, valorColor, www_eventos.value, descripcion_eventos.value, lugar_eventos.value, idReunion_eventos.value, passReunion_eventos.value, appReunion_eventos.value);

	}

	formEvento.onreset = async (e) => {
		indiceFilaTabParticipantes     = -1;
		refrescoTabParticipantes       = -1;
		iPosTabParticipantes           =  0;
		if (window.opcionEvento === 1) {
			$('#tabParticipantes').bootstrapTable('removeAll');	

			let codContactoNlistadoEventos = localStorage.getItem('codContactoNlistadoEventos');
			if (codContactoNlistadoEventos != '') {
				let Fila = $('#tabContactos').bootstrapTable('getRowByUniqueId', codContactoNlistadoEventos);
				if (Fila) {
					let fila1 = {
						ccn:    Fila.ccn,
						cod:    Fila.cod,
						per:    Fila.per,
						nom:    Fila.nom,
						te1:    Fila.te1,
						te2:    Fila.te2,
						cor:    Fila.cor,
						www:    Fila.www,
						car:    Fila.car,
						dep:    Fila.dep,
						nif:    Fila.nif,
						dom:    Fila.dom,
						cpo:    Fila.cpo,
						pob:    Fila.pob,
						pro:    Fila.pro,
						pai:    Fila.pai,
						rol:    Fila.rol
					};
					$('#tabParticipantes').bootstrapTable('append', fila1);
					window.ccnParticipante 	= fila.ccn;
					seleccionarFila('tabParticipantes', 'ccnParticipante', 'ccn', 'success2');
				}
			}

		} else if ((window.opcionEvento === 2) || (window.opcionEvento === 4)) {
		    $('#tabParticipantes').bootstrapTable('refresh', {
		      url: 'https://' + window.location.host + '/datosTablaSub?vista=participantes&prefijo=' + localStorage.getItem('prefijo') + '&id=' + window.idEvento
		    });
		}
	}

	todoeldia_eventos.addEventListener('click', (e) => { if (todoeldia_eventos.checked) { todoeldia_eventos.value = -1; } else { todoeldia_eventos.value = 0; } })

	appReunion_eventos.addEventListener('change', (e) => { bloquesAppReunion(); })





	return true;
}


//function importJS (s) {
	//import('./' + s + '.js')
    //.then(module => {
        // Script importado exitosamente
        //console.log('Se importó .js correctamente');
        //if (s == 'contactos')  	{ iniciarContactos(); }
        //if (s == 'documentos') 	{ iniciarDocumentos(); }
        //if (s == 'eventos')  	{ iniciarEventos(); }        
    //})
    //.catch(error => {
        // Error al importar el script
        //console.error('Error al importar contactos.js:', error);
    //});	
//}



// comienzo contactos

function iniciarContactos() {

	sumEleGrupo1 = 0;
	sumEleGrupo2 = 0;
	sumEleGrupo3 = 0;

    let formData2 = new FormData();
    formData2.append('prefijo', localStorage.getItem('prefijo'));
    async function datosDevueltos() {
        const response = await fetch('https://' + window.location.host + '/leergrupos', {
            method: 'POST',
            body: formData2
        });
        return await response.json();
    }
    datosDevueltos().then((data) => {
    	dataGruposContactos = data;

	    // Rellenar los combos de grupos de contactos
		document.getElementById('ng1_contactos').textContent 	= localStorage.getItem('nomGrupo1');
		document.getElementById('eg1_contactos').style.display 	= 'block';
		document.getElementById('eg1_contactos').innerHTML 		= ''; // vaciar primero por si se ha abierto el modal antes

		document.getElementById('ng2_contactos').textContent 	= localStorage.getItem('nomGrupo2');
		document.getElementById('eg2_contactos').style.display 	= 'block';
		document.getElementById('eg2_contactos').innerHTML 		= ''; // vaciar primero por si se ha abierto el modal antes

		document.getElementById('ng3_contactos').textContent 	= localStorage.getItem('nomGrupo3');
		document.getElementById('eg3_contactos').style.display 	= 'block';
		document.getElementById('eg3_contactos').innerHTML 		= ''; // vaciar primero por si se ha abierto el modal antes		
        	
        dataGruposContactos.forEach(item => {
            const numGrupo      		= parseInt(item.numGrupo);
        	const optionElement 		= document.createElement('option');
	        optionElement.value 		= item.numElemento;
	        optionElement.textContent 	= item.desElemento;

	        if (numGrupo === 1) {
	            document.getElementById('eg1_contactos').appendChild(optionElement);
	            sumEleGrupo1 += 1; // Sumar al grupo 1
	        } else if (numGrupo === 2) {
	            document.getElementById('eg2_contactos').appendChild(optionElement);
	            sumEleGrupo2 += 1; // Sumar al grupo 2
	        } else if (numGrupo === 3) {
	            document.getElementById('eg3_contactos').appendChild(optionElement);
	            sumEleGrupo3 += 1; // Sumar al grupo 3
	        }

	    });

	    primeraVezModalGruposContactos = true;
	    cambiarIconoBotonFiltrado(2);

	}).catch(error => {
        toastMsj(error.message, msjContactos, 2000, 6, 1);
    });  




    let formData3 = new FormData();
    formData3.append('prefijo', localStorage.getItem('prefijo'));
    async function datosDevueltos3() {
        const response = await fetch('https://' + window.location.host + '/leeretiquetas', {
            method: 'POST',
            body: formData3
        });
        return await response.json();
    }
    datosDevueltos3().then((data) => {
    	dataEtiquetas = data;
	}).catch(error => {
        toastMsj(error.message, msjContactos, 2000, 6, 1);
    });     	






	setTimeout(function() {

		window.idTabContactos = '';

	    salirModalContacto = false;
	    //pantallaCompletaIOS();
	    var idio = localStorage.getItem('idiomaPais');

	    var nomRef1 = localStorage.getItem('nomRef1');
	    var nomRef2 = localStorage.getItem('nomRef2');
	    var nomRef3 = localStorage.getItem('nomRef3');
	    var nomRef4 = localStorage.getItem('nomRef4');
	    rf1_contactos.placeholder = nomRef1;
	    rf2_contactos.placeholder = nomRef2;
	    rf3_contactos.placeholder = nomRef3;
	    rf4_contactos.placeholder = nomRef4;
	    rf1_contactos.title = nomRef1;
	    rf2_contactos.title = nomRef2;
	    rf3_contactos.title = nomRef3;
	    rf4_contactos.title = nomRef4;
	    lrf1_contactos.textContent = nomRef1;
	    lrf2_contactos.textContent = nomRef2;
	    lrf3_contactos.textContent = nomRef3;
	    lrf4_contactos.textContent = nomRef4;

	    var titPref1 = localStorage.getItem('titPref1');        
	    var titPref2 = localStorage.getItem('titPref2');
	    var titPref3 = localStorage.getItem('titPref3');
	    var titPref4 = localStorage.getItem('titPref4');
	    var titPref5 = localStorage.getItem('titPref5');
	    var titPref6 = localStorage.getItem('titPref6');

	    pr1_contactos.placeholder = titPref1;
	    pr2_contactos.placeholder = titPref2;
	    pr3_contactos.placeholder = titPref3;
	    pr4_contactos.placeholder = titPref4;
	    pr5_contactos.placeholder = titPref5;
	    pr6_contactos.placeholder = titPref6;

	    pr1_contactos.title = titPref1;
	    pr2_contactos.title = titPref2;
	    pr3_contactos.title = titPref3;
	    pr4_contactos.title = titPref4;
	    pr5_contactos.title = titPref5;
	    pr6_contactos.title = titPref6;

	    lpr1_contactos.textContent = titPref1;
	    lpr2_contactos.textContent = titPref2;
	    lpr3_contactos.textContent = titPref3;
	    lpr4_contactos.textContent = titPref4;
	    lpr5_contactos.textContent = titPref5;
	    lpr6_contactos.textContent = titPref6;

	    var nomGrupo1 = localStorage.getItem('nomGrupo1');        
	    var nomGrupo2 = localStorage.getItem('nomGrupo2');
	    var nomGrupo3 = localStorage.getItem('nomGrupo3');	    

	    indiceFilaTab 			= -1;
		refrescoTabContactos 	= -1;
		iPosTabContactos 		= 0;
	

	    if ($("#tabContactos").data("bootstrap.table") || $("#tabContactos").closest(".bootstrap-table").length) {
	    	$("#tabContactos").bootstrapTable("destroy");
	    }
	    $("#tabContactos").bootstrapTable({
	        locale: localeTable(idio),
	        url: "https://" + window.location.host + "/datosTabla?vista=contactos&prefijo=" + localStorage.getItem('prefijo'),
            onClickRow: function (row, $element, field) {
            	selRowTab('tabContactos', 'success', 'idTabContactos', row.ccn);
                //indiceFilaTab  = $element.data('index');
                //iPosTabContactos        = $(this).bootstrapTable('getScrollPosition');
		        nombrePersonaContacto = row.per;
            },
            onDblClickRow: function (row, $element, field) {
                if (salidaModalEvento == 1) {
					// primero comprobamos que el participante no está ya incluido en la tabla
					let idFila = $('#tabParticipantes').bootstrapTable('getRowByUniqueId', row.ccn);
					if (idFila === null) {
						let fila2 = {
							ccn:    row.ccn,
							cod:    row.cod,
							per:    row.per,
							nom:    row.nom,
							te1:    row.te1,
							te2:    row.te2,
							cor:    row.cor,
							www:    row.www,
							car:    row.car,
							dep:    row.dep,
							nif:    row.nif,
							dom:    row.dom,
							cpo:    row.cpo,
							pob:    row.pob,
							pro:    row.pro,
							pai:    row.pai,
							rol:    row.rol
						};
						$('#tabParticipantes').bootstrapTable('append', fila2);
						setTimeout(function() {
							selRowTab('tabParticipantes', 'success2', 'idTabParticipantes', row.ccn);
						}, 200);	
					}

					setTimeout(function() {
	                    cambioDiv('contactos', 'eventos', 0, 1);
	                }, 500);

                }
            },
            onSort: function (name, order) {
                setTimeout(function() {
                	saveColumnConfig('tabContactos');
                	if ($("#tabContactos").bootstrapTable('getOptions').pageNumber != 1) {
                		$("#tabContactos").bootstrapTable('selectPage', 1);
                	} else {
	                		seleccionarFilaTablaSiExiste('tabContactos', 'success', 'idTabContactos', 'ccn', 0);
	                	}
	                }, 500); 
            },
            onSearch: function (text) {
				seleccionarFilaTablaSiExiste('tabContactos', 'success', 'idTabContactos', 'ccn', 0);
            },
            onPageChange: function (number, size) {
                setTimeout(function() {
                	if (indiceFilaTab == -1) { indiceFilaTab = (number - 1) * size; }
	                seleccionarFilaTablaSiExiste('tabContactos', 'success', 'idTabContactos', 'ccn', indiceFilaTab);
	            }, 500);
            },      
		    onPostBody: function () {
		        // Detectar cambio vista tabla o tarjeta
		        var vistaActTabContactos = $('#tabContactos').bootstrapTable('getOptions').cardView;
		        if (vistaAntTabContactos !== vistaActTabContactos) {
		            vistaAntTabContactos = vistaActTabContactos;
		            setTimeout(function () {
		                seleccionarFilaTablaSiExiste('tabContactos', 'success', 'idTabContactos', 'ccn', 0, window.idTabContactos);
		            }, 200);
		        }
		    },
		    onLoadSuccess: function () {
				seleccionarFilaTablaSiExiste('tabContactos', 'success', 'idTabContactos', 'ccn', 0); 
			},		    	
	        columns: []
	    }); 


	    var tituloColumna;
	    for (var i = 0; i < tabContactosCampos.length; i++) {

	        if        (tabContactosCampos[i] == 'rf1') {
	            tituloColumna = nomRef1;
	        } else if (tabContactosCampos[i] == 'rf2') {
	            tituloColumna = nomRef2;
	        } else if (tabContactosCampos[i] == 'rf3') {
	            tituloColumna = nomRef3;
	        } else if (tabContactosCampos[i] == 'rf4') {
	            tituloColumna = nomRef4;
	        } else if (tabContactosCampos[i] == 'pr1') {
	            tituloColumna = titPref1;
	        } else if (tabContactosCampos[i] == 'pr2') {
	            tituloColumna = titPref2;
	        } else if (tabContactosCampos[i] == 'pr3') {
	            tituloColumna = titPref3;
	        } else if (tabContactosCampos[i] == 'pr4') {
	            tituloColumna = titPref4;
	        } else if (tabContactosCampos[i] == 'pr5') {
	            tituloColumna = titPref5;
	        } else if (tabContactosCampos[i] == 'pr6') {
	            tituloColumna = titPref6;
	        } else if (tabContactosCampos[i] == 'eg1') {
	            tituloColumna = nomGrupo1;
	        } else if (tabContactosCampos[i] == 'eg2') {
	            tituloColumna = nomGrupo2;
	        } else if (tabContactosCampos[i] == 'eg3') {
	            tituloColumna = nomGrupo3;
	        } else {
	            switch (idio) {
	                case 'es-es':
	                case 'es-ES':
	                    tituloColumna = tabContactosTitCol_es_ES[i];
	                    break;
	                case 'ca-es':
	                case 'ca-ES':
	                    tituloColumna = tabContactosTitCol_ca_ES[i];
	                    break;
	                case 'eu-es':
	                case 'eu-ES':
	                    tituloColumna = tabContactosTitCol_eu_ES[i];
	                    break;
	                case 'gl-es':
	                case 'gl-ES':
	                    tituloColumna = tabContactosTitCol_gl_ES[i];
	                    break;
	                case 'en-gb':
	                case 'en-GB':
	                    tituloColumna = tabContactosTitCol_en_GB[i];
	                    break;
	                case 'es-mx':
	                case 'es-MX':
	                    tituloColumna = tabContactosTitCol_es_MX[i];
	                    break;
	                case 'es-cl':
	                case 'es-CL':
	                    tituloColumna = tabContactosTitCol_es_CL[i];
	                    break;
	                case 'es-us':
	                case 'es-US':
	                    tituloColumna = tabContactosTitCol_es_US[i];
	                    break;
	                case 'en-us':
	                case 'en-US':
	                    tituloColumna = tabContactosTitCol_en_US[i];
	                    break;
	                case 'en-ca':
	                case 'en-CA':
	                    tituloColumna = tabContactosTitCol_en_CA[i];
	                    break;                                                              
	                case 'en-au':
	                case 'en-AU':
	                    tituloColumna = tabContactosTitCol_en_AU[i];
	                    break;
	                case 'it-it':
	                case 'it-IT':
	                    tituloColumna = tabContactosTitCol_it_IT[i];
	                    break;
	                case 'pt-pt':
	                case 'pt-PT':
	                    tituloColumna = tabContactosTitCol_pt_PT[i];
	                    break;
	                case 'pt-br':
	                case 'pt-BR':
	                    tituloColumna = tabContactosTitCol_pt_BR[i];
	                    break;
	                case 'fr-fr':
	                case 'fr-FR':
	                    tituloColumna = tabContactosTitCol_fr_FR[i];
	                    break;
	                case 'fr-ca':
	                case 'fr-CA':
	                    tituloColumna = tabContactosTitCol_fr_CA[i];
	                    break;                                                              
	                case 'de-de':
	                case 'de-DE':
	                    tituloColumna = tabContactosTitCol_de_DE[i];
	                    break;
			        case 'en-nz':
			        case 'en-NZ':
			            tituloColumna = tabContactosTitCol_en_NZ[i];
			            break;
			        case 'en-ie':
			        case 'en-IE':
			            tituloColumna = tabContactosTitCol_en_IE[i];
			            break;
			        case 'en-in':
			        case 'en-IN':
			            tituloColumna = tabContactosTitCol_en_IN[i];
			            break;
			        case 'en-sg':
			        case 'en-SG':
			            tituloColumna = tabContactosTitCol_en_SG[i];
			            break;	 
			        case 'en-hk':
			        case 'en-HK':
			            tituloColumna = tabContactosTitCol_en_HK[i];
			            break;
			        case 'en-my':
			        case 'en-MY':
			            tituloColumna = tabContactosTitCol_en_MY[i];
			            break;
			        case 'es-ar':
			        case 'es-AR':
			            tituloColumna = tabContactosTitCol_es_AR[i];
			            break;
			        case 'es-co':
			        case 'es-CO':
			            tituloColumna = tabContactosTitCol_es_CO[i];
			            break;	
			        case 'es-pe':
			        case 'es-PE':
			            tituloColumna = tabContactosTitCol_es_PE[i];
			            break;
			        case 'es-uy':
			        case 'es-UY':
			            tituloColumna = tabContactosTitCol_es_UY[i];
			            break;
			        case 'fr-be':
			        case 'fr-BE':
			            tituloColumna = tabContactosTitCol_fr_BE[i];
			            break;
			        case 'fr-ch':
			        case 'fr-CH':
			            tituloColumna = tabContactosTitCol_fr_CH[i];
			            break;	
			        case 'it-ch':
			        case 'it-CH':
			            tituloColumna = tabContactosTitCol_it_CH[i];
			            break;
			        case 'de-at':
			        case 'de-AT':
			            tituloColumna = tabContactosTitCol_de_AT[i];
			            break;
			        case 'de-be':
			        case 'de-BE':
			            tituloColumna = tabContactosTitCol_de_BE[i];
			            break;
			        case 'de-ch':
			        case 'de-CH':
			            tituloColumna = tabContactosTitCol_de_CH[i];
			            break;
		            case 'es-ve':
		            case 'es-VE':
		                tituloColumna = tabContactosTitCol_es_VE[i];
		                break;
		            case 'es-gt':
		            case 'es-GT':
		                tituloColumna = tabContactosTitCol_es_GT[i];
		                break;
		            case 'es-ec':
		            case 'es-EC':
		                tituloColumna = tabContactosTitCol_es_EC[i];
		                break;
		            case 'es-bo':
		            case 'es-BO':
		                tituloColumna = tabContactosTitCol_es_BO[i];
		                break;
		            case 'es-cu':
		            case 'es-CU':
		                tituloColumna = tabContactosTitCol_es_CU[i];
		                break;
		            case 'es-do':
		            case 'es-DO':
		                tituloColumna = tabContactosTitCol_es_DO[i];
		                break;  
		            case 'es-hn':
		            case 'es-HN':
		                tituloColumna = tabContactosTitCol_es_HN[i];
		                break;
		            case 'es-py':
		            case 'es-PY':
		                tituloColumna = tabContactosTitCol_es_PY[i];
		                break;
		            case 'es-sv':
		            case 'es-SV':
		                tituloColumna = tabContactosTitCol_es_SV[i];
		                break;
		            case 'es-ni':
		            case 'es-NI':
		                tituloColumna = tabContactosTitCol_es_NI[i];
		                break;
		            case 'es-pa':
		            case 'es-PA':
		                tituloColumna = tabContactosTitCol_es_PA[i];
		                break;
		            case 'en-pk':
		            case 'en-PK':
		                tituloColumna = tabContactosTitCol_en_PK[i];
		                break;
		            case 'en-ng':
		            case 'en-NG':
		                tituloColumna = tabContactosTitCol_en_NG[i];
		                break;
		            case 'en-bd':
		            case 'en-BD':
		                tituloColumna = tabContactosTitCol_en_BD[i];
		                break;
		            case 'en-ph':
		            case 'en-PH':
		                tituloColumna = tabContactosTitCol_en_PH[i];
		                break;
		            case 'en-tz':
		            case 'en-TZ':
		                tituloColumna = tabContactosTitCol_en_TZ[i];
		                break;
		            case 'en-za':
		            case 'en-ZA':
		                tituloColumna = tabContactosTitCol_en_ZA[i];
		                break;
		            case 'en-ke':
		            case 'en-KE':
		                tituloColumna = tabContactosTitCol_en_KE[i];
		                break;
		            case 'en-ug':
		            case 'en-UG':
		                tituloColumna = tabContactosTitCol_en_UG[i];
		                break;
		            case 'en-gh':
		            case 'en-GH':
		                tituloColumna = tabContactosTitCol_en_GH[i];
		                break;
		            case 'en-mw':
		            case 'en-MW':
		                tituloColumna = tabContactosTitCol_en_MW[i];
		                break;
		            case 'en-zm':
		            case 'en-ZM':
		                tituloColumna = tabContactosTitCol_en_ZM[i];
		                break;
		            case 'en-zw':
		            case 'en-ZW':
		                tituloColumna = tabContactosTitCol_en_ZW[i];
		                break;
		            case 'en-cm':
		            case 'en-CM':
		                tituloColumna = tabContactosTitCol_en_CM[i];
		                break;
		            case 'en-lk':
		            case 'en-LK':
		                tituloColumna = tabContactosTitCol_en_LK[i];
		                break;
		            case 'fr-cd':
		            case 'fr-CD':
		                tituloColumna = tabContactosTitCol_fr_CD[i];
		                break;
		            case 'fr-cm':
		            case 'fr-CM':
		                tituloColumna = tabContactosTitCol_fr_CM[i];
		                break;
		            case 'fr-mg':
		            case 'fr-MG':
		                tituloColumna = tabContactosTitCol_fr_MG[i];
		                break;
		            case 'fr-ch':
		            case 'fr-CH':
		                tituloColumna = tabContactosTitCol_fr_CH[i];
		                break;
		            case 'fr-ci':
		            case 'fr-CI':
		                tituloColumna = tabContactosTitCol_fr_CI[i];
		                break;
		            case 'fr-bf':
		            case 'fr-BF':
		                tituloColumna = tabContactosTitCol_fr_BF[i];
		                break;
		            case 'fr-be':
		            case 'fr-BE':
		                tituloColumna = tabContactosTitCol_fr_BE[i];
		                break;
		            case 'fr-ne':
		            case 'fr-NE':
		                tituloColumna = tabContactosTitCol_fr_NE[i];
		                break;
		            case 'fr-sn':
		            case 'fr-SN':
		                tituloColumna = tabContactosTitCol_fr_SN[i];
		                break;
		            case 'fr-ml':
		            case 'fr-ML':
		                tituloColumna = tabContactosTitCol_fr_ML[i];
		                break;
		            case 'fr-bj':
		            case 'fr-BJ':
		                tituloColumna = tabContactosTitCol_fr_BJ[i];
		                break;
		            case 'fr-rw':
		            case 'fr-RW':
		                tituloColumna = tabContactosTitCol_fr_RW[i];
		                break;
		            case 'fr-td':
		            case 'fr-TD':
		                tituloColumna = tabContactosTitCol_fr_TD[i];
		                break;
		            case 'fr-gn':
		            case 'fr-GN':
		                tituloColumna = tabContactosTitCol_fr_GN[i];
		                break;                                
		            case 'pt-ao':
		            case 'pt-AO':
		                tituloColumna = tabContactosTitCol_pt_AO[i];
		                break;
		            case 'pt-mz':
		            case 'pt-MZ':
		                tituloColumna = tabContactosTitCol_pt_MZ[i];
		                break;
	                default:
	                    tituloColumna = tabContactosTitCol_en_US[i];
	            } 
	        }
	        

	        $("#tabContactos").bootstrapTable('updateColumnTitle', {
	            field: tabContactosCampos[i],
	            title: tituloColumna
	        });
	    }

	    loadColumnConfig('tabContactos');

	    // Aplicar el formateador a la columna 'alt' solo al cargar la tabla
	    const columns = $('#tabContactos').bootstrapTable('getOptions').columns[0];
	    columns.forEach(column => {
	    	formatearColumna (column);
	    });
	    // Refrescar la tabla para reflejar los cambios
	    $('#tabContactos').bootstrapTable('refreshOptions', { columns: columns });

	    crearToastContacto("Nuevo contacto", "'modalContacto'", "'opcionContacto'", "modalContacto");

	    cambiarTextoIdioma('');

	    crearEstilo('aceptar_contactos', 'cancelar_contactos', tExp('Guardar', ''), tExp ('Cancelar', ''));
	    //if (window.nExtContactos == 0) { cambioOrientacion(true); }

	    activarTooltipsDiv('contactos');

	    cambiarAltoTabla('tabContactos', 0);

	    barraPaginacion('#tabContactos');

	    if (cont2_contactos.disabled == false) { abrirToast('liveToastContacto'); }

	    if (salidaModalEvento == 1) {
	    	toastMsj(tExp('Doble clic para seleccionar el contacto', ''), msjContactos, 2000, 6, 5); 
	    	document.getElementById('gesdGrupo_contactos').style.display = 'none';
	    	document.getElementById('separador1Li_contactos').style.display = 'none';
	    	document.getElementById('gesdLi_contactos').style.display = 'none';	    	
	    	document.getElementById('evenLi_contactos').style.display = 'none';
	    	document.getElementById('botonFiltrado').style.display = 'none';
	    } else {
	    	document.getElementById('gesdGrupo_contactos').style.display = '';
	    	document.getElementById('separador1Li_contactos').style.display = 'list-item';
	    	document.getElementById('gesdLi_contactos').style.display = 'list-item';
	    	document.getElementById('evenLi_contactos').style.display = 'list-item';
	    	document.getElementById('botonFiltrado').style.display = '';
	    }

	    //modalColTab('modalColTabContactos', coltabContactos, 'tabContactos'); 

        const o = window.screen.orientation.type;
        const botonPantallaCompletaContactos = document.getElementById('pCompleta_contactos') || pCompleta_contactos;
        if (o.slice(0, 9) == 'landscape') {
            if (botonPantallaCompletaContactos) botonPantallaCompletaContactos.style.display = '';
        } else {
            if (botonPantallaCompletaContactos) botonPantallaCompletaContactos.style.display = 'none';
            if (salidaModalEvento == 0) { 
            	toastMsj(tExp('Gira la pantalla', ''), msjContactos, 1500, 4, 6); 
            }
        }   

	}, 200);

    $('#tabContactos').bootstrapTable('filterBy', {});





	var service = localStorage.getItem("clienteCorreo");
	if (service !== '1' && service !== '2') {
		service = '5';
	}
	var botonEmail = document.getElementById("botonEmail");

	if (service === '4' || service === '0') {
	    // Usamos un <a> con href que se actualiza dinámicamente al hacer clic
	    botonEmail.innerHTML = `
	        <a href="#" target="_blank" rel="noopener noreferrer" id="correoLink" class="btn btn-primary ml-auto" title="Enviar un mensaje" data-bs-toggle="tooltip">
	            <i class="bi bi-at"></i>
	        </a>
	    `;

	    // Añadir evento para construir la URL justo antes de abrirla
	    document.getElementById("correoLink").addEventListener("click", function(e) {
	        e.preventDefault(); // evitar navegación inmediata
	        var correo = document.getElementById("cor_contactos").value;
	        var url = '';

	        if (service === '1') { // Gmail
	            const isAndroid = /Android/i.test(navigator.userAgent);
	            if (isAndroid) {
	                url = `intent://compose?to=${encodeURIComponent(correo)}#Intent;scheme=mailto;package=com.google.android.gm;end;`;
	            } else {
	                url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(correo)}`;
	            }
	        } else if (service === '4') { // Yahoo
	            url = `https://compose.mail.yahoo.com/?to=${encodeURIComponent(correo)}`;
	        } else if (service === '0') { // Dispositivo
	            url = `mailto:${encodeURIComponent(correo)}`;
	        }

	        window.open(url, "_blank");
	    });

	} else {
	    // iCloud u Outlook
	    botonEmail.innerHTML = `
	        <button type="button" class="btn btn-primary ml-auto" id="abrirD_contactos"
	                title="Enviar un mensaje" data-bs-toggle="tooltip"
	                onclick="hiperenlace(document.getElementById('cor_contactos').value, 5, {tfGesDoc:85,numGesDoc:document.getElementById('ccn_contactos').value})">
	            <i class="bi bi-at" style="font-size:1rem;color:currentColor"></i>
	        </button>
	    `;
	}










}


function iniciarDocumentos() {

	window.idTabDocumentos = '';

	salirModalDocumento 	= false;
	// salirModalDocEditar 	= false;
	//pantallaCompletaIOS();
	var tfGesDoc 	= localStorage.getItem('tfGesDoc');
	var numGesDoc 	= localStorage.getItem('numGesDoc');

	var idio = localStorage.getItem('idiomaPais');

	indiceFilaTabDocumentos     = -1;
	refrescoTabDocumentos       = -1;
	iPosTabDocumentos           =  0;

    if ($("#tabDocumentos").data("bootstrap.table") || $("#tabDocumentos").closest(".bootstrap-table").length) {
        $("#tabDocumentos").bootstrapTable("destroy");
    }
    $("#tabDocumentos").bootstrapTable({
        locale: localeTable(idio),
        url: 'https://' + window.location.host + '/datosTablaGesDoc?prefijo=' + localStorage.getItem('prefijo') + '&tfGesDoc=' + tfGesDoc + '&numGesDoc=' + numGesDoc,
        onClickRow: function (row, $element, field) {
        	selRowTab('tabDocumentos', 'success1', 'idTabDocumentos', row.id);
        },
        onSort: function (name, order) {
			setTimeout(function() {
				saveColumnConfig('tabDocumentos');
				seleccionarFilaTablaSiExiste('tabDocumentos', 'success1', 'idTabDocumentos', 'id', 0);
			}, 500); 
        },
        onSearch: function (text) {
	        	seleccionarFilaTablaSiExiste('tabDocumentos', 'success1', 'idTabDocumentos', 'id', 0);
        },  
        onPostBody: function () {
        	// Detectar cambio vista tabla o tarjeta
		    var vistaActTabDocumentos = $('#tabDocumentos').bootstrapTable('getOptions').cardView;
		    if (vistaAntTabDocumentos !== vistaActTabDocumentos) {
		        vistaAntTabDocumentos = vistaActTabDocumentos;
				setTimeout(function() {
					seleccionarFilaTablaSiExiste('tabDocumentos', 'success1', 'idTabDocumentos', 'id', 0, window.idTabDocumentos);
				}, 200);
		    }
        },     
        columns: []
    }); 

    for (var i = 0; i < tabDocumentosCampos.length; i++) {
        $("#tabDocumentos").bootstrapTable('updateColumnTitle', {
            field: tabDocumentosCampos[i],
            title: dTitColDocumentos(idio, i)
        });
    }


    loadColumnConfig('tabDocumentos');
    
    $("#tabDocumentos").off("load-success.bs.table.mccDocumentos").on("load-success.bs.table.mccDocumentos", function () {
        var datosDocumentos = $("#tabDocumentos").bootstrapTable('getData');
        if (Array.isArray(datosDocumentos) && datosDocumentos.length > 0) {
	    	    $("#tabDocumentos").bootstrapTable('check', 0);
        }
        seleccionarFilaTablaSiExiste('tabDocumentos', 'success1', 'idTabDocumentos', 'id', 0);
    });	

	crearToastDocumento("Nuevo documento", "'modalDocumento'", "'opcionDocumento'");
	cambiarTextoIdioma('');
	crearEstilo('aceptar_documentos', 'cancelar_documentos', tExp('Guardar', ''), tExp ('Cancelar', ''));
	//cambioOrientacion();
	activarTooltipsDiv('documentos');
	cambiarAltoTabla('tabDocumentos', 0);
	barraPaginacion('#tabDocumentos');
    abrirToast('liveToastDocumento');

    if (localStorage.getItem('divAnt') == 'contactos') { 
    	toastMsj(tExp('Documentos con ', '') + nombrePersonaContacto, msjDocumentos, 1500, 5, 7); 
    } 

}



function iniciarEventos() {

    window.salirDeCambioEvento = 0;

    salirModalEvento 	= false;

    var codContactoNlistadoEventos = localStorage.getItem('codContactoNlistadoEventos');
    if (codContactoNlistadoEventos == '') {
    	sEvents = 'https://' + window.location.host + '/datosTabla?vista=eventos&prefijo=' + localStorage.getItem('prefijo');
    } else {
    	sEvents = 'https://' + window.location.host + '/datosTablaEventosContacto?codContactoN=' + codContactoNlistadoEventos + '&prefijo=' + localStorage.getItem('prefijo');
    }

    var idLocale        = localeEvent(localStorage.getItem('idiomaPais'));
    var primerDiaSem    = primerDiaSemana();

    // recuperar valores configuración eventos
    var Vweekends         = false;
    if (localStorage.getItem('weekends') == 1) { Vweekends = true; }  
    var VslotMinTime      = localStorage.getItem('slotMinTime').toString().padStart(2, '0') + ':00:00';
    var VslotMaxTime      = localStorage.getItem('slotMaxTime').toString().padStart(2, '0') + ':00:00';
    var tmpSlotDuration   = localStorage.getItem('slotDuration');
    if (tmpSlotDuration == 1) { 
      	var VslotDuration   = '01:00'; 
    } else if (tmpSlotDuration == 2) {
      	var VslotDuration   = '02:00'; 
    } else {
      	var VslotDuration   = '00:' + tmpSlotDuration.toString(); 
    }
    // fin recuperación valores configuración eventos

    window.ccnParticipante        = '';

    var vistaIni = localStorage.getItem('vistaIni');

    var idio = localStorage.getItem('idiomaPais');


	indiceFilaTabParticipantes     = -1;
	refrescoTabParticipantes       = -1;
	iPosTabParticipantes           =  0;	    

    if ($("#tabParticipantes").data("bootstrap.table") || $("#tabParticipantes").closest(".bootstrap-table").length) {
        $("#tabParticipantes").bootstrapTable("destroy");
    }
    $("#tabParticipantes").bootstrapTable({
        locale: localeTable(idio),
        onClickRow: function (row, $element, field) {
        	selRowTab('tabParticipantes', 'success2', 'idTabParticipantes', row.ccn);
        },
        onSort: function (name, order) {
			setTimeout(function() {
				saveColumnConfig('tabParticipantes');
				seleccionarFilaTablaSiExiste('tabParticipantes', 'success2', 'idTabParticipantes', 'ccn', 0);
			}, 500); 
        },
        onSearch: function (text) {
	        	seleccionarFilaTablaSiExiste('tabParticipantes', 'success2', 'idTabParticipantes', 'ccn', 0);
        },
        onPostBody: function () {
        	// Detectar cambio vista tabla o tarjeta
		    var vistaActTabParticipantes = $('#tabParticipantes').bootstrapTable('getOptions').cardView;
		    if (vistaAntTabParticipantes !== vistaActTabParticipantes) {
		        vistaAntTabParticipantes = vistaActTabParticipantes;
				setTimeout(function() {
					seleccionarFilaTablaSiExiste('tabParticipantes', 'success2', 'idTabParticipantes', 'ccn', 0, window.idTabParticipantes);
				}, 200);
		    }
        }, 
	    onLoadSuccess: function () {
	        var datosParticipantes = $("#tabParticipantes").bootstrapTable('getData');
	        if (Array.isArray(datosParticipantes) && datosParticipantes.length > 0) {
	    	    $("#tabParticipantes").bootstrapTable('check', 0);
	        }
	        seleccionarFilaTablaSiExiste('tabParticipantes', 'success2', 'idTabParticipantes', 'ccn', 0);
	    },        
        columns: []
    }); 
 
    for (var i = 0; i < tabParticipantesCampos.length; i++) {
        $("#tabParticipantes").bootstrapTable('updateColumnTitle', {
            field: tabParticipantesCampos[i],
            title: dTitColParticipantes(idio, i)
        });
    }


    loadColumnConfig('tabParticipantes');


    // Aplicar los formateadores al cargar la tabla
    const columns = $('#tabParticipantes').bootstrapTable('getOptions').columns[0];
    columns.forEach(column => {
    	formatearColumna (column);
    });
    // Refrescar la tabla para reflejar los cambios
    $('#tabParticipantes').bootstrapTable('refreshOptions', { columns: columns });    
   

    cambiarTextoIdioma('');

    // let o = window.screen.orientation.type;
    // if (o.slice(0, 9) != 'landscape') {
       // toastSelFila(tExp('Gira la pantalla', ''), msjMod1);
    //} 

    crearEstiloEl(tExp('Eliminar', ''));
    crearEstilo('aceptar_eventos', 'cancelar_eventos', tExp('Guardar', ''), tExp ('Cancelar', ''));

   	activarTooltipsDiv('eventos');

    if (localStorage.getItem('divAnt') == 'contactos') { 
    	toastMsj(tExp('Eventos con ', '') + nombrePersonaContacto, msjEventos, 1500, 5, 8); 
    } 


    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function(element){ return new bootstrap.Popover(element); });


    var calendarEl = document.getElementById('calendario_eventos');


    calendar = new FullCalendar.Calendar(calendarEl, {
		themeSystem: 'bootstrap5',
		locale: idLocale,
		noEventsContent: String(idLocale || '').toLowerCase().startsWith('de')
			? 'Keine Termine vorhanden'
			: (String(idLocale || '').toLowerCase().startsWith('ca')
				? 'No hi ha cap esdeveniment'
				: (String(idLocale || '').toLowerCase().startsWith('gl') ? 'Non hai ningún evento' : undefined)),
		buttonHints: String(idLocale || '').toLowerCase().startsWith('gl') ? {
			prev: 'Anterior',
			next: 'Seguinte',
			today: 'Hoxe',
			dayGridMonth: 'Vista do mes',
			timeGridWeek: 'Vista da semana',
			timeGridDay: 'Vista do día',
			listWeek: 'Vista da axenda'
		} : undefined,
		//timeZone: zonaHoraria,
		timeZone: 'local',
		//timeZone: 'Europe/Madrid',
		firstDay: primerDiaSem,
		weekends: Vweekends,
		slotMinTime: VslotMinTime,
		slotMaxTime: VslotMaxTime,
		slotDuration: VslotDuration,
		views: {
			dayGridMonth: {
			  	dayMaxEventRows: 5
			}
		},
		fixedWeekCount: false, 
		initialView: vistaIni,   
		headerToolbar: {
			//left: 'prev,next today',
			left: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
			center: 'title',
			right: 'ant,sig,today nue,imprimirCal,closeButton'
		},
	    customButtons: {
	              imprimirCal: {
	                  icon: 'printer',
	                  click: function() {
	                      imprimirCalendarioEventos();
	                  }
	              },        
	              closeButton: {
	                  icon: 'x-lg',
	                  click: function() {

	                  	salidaModalEvento = 0;

	                    //if (calendar) {
	                      //calendar.refetchEvents();
	                      //calendar.destroy(); 
	                    //}
	                    if (localStorage.getItem('divAnt') == 'contactos') {
	                    	if (localStorage.getItem('codContactoNlistadoEventos') != '') {
	                    		cambioDiv('eventos', 'contactos', 0, 1);
	                    	} else {
	                    		cambioDiv('eventos', 'menu', 0, 0);
	                    	}
	                    } else {
	                    	cambioDiv('eventos', 'menu', 0, 0);	
	                    }
	                    
	                  }
	              },
	              ant: {
	                  icon: 'chevron-left',
	                  click: function() {
	                    calendar.prev();
	                    //cambioVista();
	                  }
	              },
	              sig: {
	                  icon: 'chevron-right',
	                  click: function() {
	                    calendar.next();
	                    //cambioVista();
	                  }
	              },

	              nue: {
	                  icon: 'plus-lg',
	                  click: function() {
	                    // Obtener la fecha de hoy
	                    var hoy = new Date();
	                    // Obtener la fecha de mañana
	                    var man = new Date();
	                    man.setDate(hoy.getDate() + 1);
	                    window.opcionEvento = 1;
	                    window.idEvento     = 0;
	                    window.ini          = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
	                    window.fin          = new Date(man.getFullYear(), man.getMonth(), man.getDate());
	                    window.todoElDia    = true;
	                    let myModal         = new bootstrap.Modal(modalEvento);
	                    myModal.show(); 
	                  }
	              },              
	    },

		initialDate: new Date(),
		navLinks: true, // can click day/week names to navigate views
		selectable: true,
		selectMirror: true,
		selectLongPressDelay: 1000,
		eventLongPressDelay: 1000,
		nowIndicator: true,
		contentHeight: 'auto',
		rerenderDelay: null,

		select: function(info) {
			//window.location.hash = '#modalEvento';
			window.opcionEvento = 1;
			window.idEvento     = 0;
			window.ini          = info.start;
			window.fin          = info.end;
			window.todoElDia    = info.allDay;
			let myModal         = new bootstrap.Modal(modalEvento);
			myModal.show();
			calendar.unselect();
		},

		eventClick: function(info) {
			if (info.event.url) { info.jsEvent.preventDefault(); }
			//window.location.hash = '#modalEvento';
			window.opcionEvento = 2;
			window.idEvento     = info.event.id;
			window.todoElDia    = info.event.allDay;
			window.ini          = info.event.start;
			window.fin          = info.event.end;
			myModalEvento   	= new bootstrap.Modal(modalEvento);
			myModalEvento.show();
			//alert(info.event.extendedProps.description + ' ' + info.event.extendedProps.participantes);
		},

	    eventChange: function (info) {
	        // This function is called when an event is dropped to a new position.
	          if (window.salirDeCambioEvento == 1) { return false; }

	          var fIni  = new Date(info.event.start);
	          var fFin  = new Date(info.event.end);
	          if (info.event.allDay) {
	            var fechaInicial = fIni.getFullYear() + '-' +
	                  ('0' + (fIni.getMonth() + 1)).slice(-2) + '-' +
	                  ('0' + fIni.getDate()).slice(-2) + 'T00:00';
	            var fechaFinal = fFin.getFullYear() + '-' +
	                  ('0' + (fFin.getMonth() + 1)).slice(-2) + '-' +
	                  ('0' + fFin.getDate()).slice(-2) + 'T00:00';
	          } else {
	            var fechaInicial = fIni.getFullYear() + '-' +
	                  ('0' + (fIni.getMonth() + 1)).slice(-2) + '-' +
	                  ('0' + fIni.getDate()).slice(-2) + 'T' +
	                  ('0' + fIni.getHours()).slice(-2) + ':' +
	                  ('0' + fIni.getMinutes()).slice(-2);
	            var fechaFinal = fFin.getFullYear() + '-' +
	                  ('0' + (fFin.getMonth() + 1)).slice(-2) + '-' +
	                  ('0' + fFin.getDate()).slice(-2) + 'T' +
	                  ('0' + fFin.getHours()).slice(-2) + ':' +
	                  ('0' + fFin.getMinutes()).slice(-2);            
	          }

	          bdEvento(4, info.event.id, '', info.event.allDay, fechaInicial, fechaFinal, '', '', '', '', '', '', '');                      
	                        
	        // If you want to revert the event to its original position, you can use the revert method.
	        // event.revert();
	    },      


	    eventMouseEnter: function(mouseEnterInfo) {

	        let sCon          = '';
	        let propExt       = mouseEnterInfo.event.extendedProps;
	        let participantes = listaNomParticipantesEvento();
	        if (propExt.descripcion != '')   { sCon  = '<h6><i class="bi-chat-square"></i>&nbsp;' + propExt.descripcion + '</h6>'; }
	        if (propExt.lugar       != '')   { sCon += '<h6><i class="bi-signpost"></i>&nbsp;'    + propExt.lugar + '</h6>'; }
	        if (participantes       != '')   { sCon += '<h6><i class="bi-people"></i>&nbsp;'    + participantes + '</h6>'; }

	        if (sCon) {
	          esconderPopover();
	          ventanaSobre = new bootstrap.Popover(mouseEnterInfo.el, {
	              title: '<h5 class="custom-title"><i class="bi-info-circle-fill"></i>&nbsp;' + mouseEnterInfo.event.title + '</h5>',
	              content: sCon,
	              html: true, 
	              trigger: 'focus'
	          });
	          ventanaSobre.show();          
	        }
	                
	    },
	    eventMouseLeave: function(mouseEnterInfo) {
	        esconderPopover();
	    },
		datesSet: function(info) {
			//cambioVista();
		},  

		//eventContent: function(arg) {
		    //if (calendar.view.type === 'list') {
		        //return {
		            //html: '<b>' + arg.event.title + '</b><br>' + arg.event.extendedProps.descripcion
		        //};
		    //} else {
		        //return {}; // Devuelve un objeto vacío si no estás en la vista de lista
		    //}
		//},

	    //eventDidMount: function(arg) {
	      //if (calendar.view.type === 'list') {
	        //arg.el.innerHTML = '<b>' + arg.event.title + '</b><br>' + arg.event.extendedProps.descripcion;
	      //} else {
	        //arg.el.innerText = arg.event.title;
	      //}
	    //},


		editable: true,
		forceEventDuration: true,
		lazyFetching: false,
		events: function(fetchInfo, successCallback, failureCallback) {
			////const url = `${sEvents}&t=${new Date().getTime()}`; 	
			const url = sEvents; 	
			fetch(url, {
			    method: 'GET',
			    headers: {
			        'Cache-Control': 'no-cache'
			    }
			})
			    .then(response => response.json())
			    .then(data => {
			        successCallback(data);
			    })
			    .catch(error => {
			        failureCallback(error);
			    });
		}

		
    }) // fin calendar = new FullCalendar.Calendar


	calendar.render();


	function cambioVista() {
 	    calendar.removeAllEvents(); 
	    calendar.refetchEvents();    
	}

}







// código eventos

		function nuevoEvento(id1, titulo1, todoeldia1, fechaini1, fechafin1, color1, www1, descripcion1, lugar1, idReunion1, passReunion1, appReunion1) {
			var visualizar = 'list-item';
			if (todoeldia1) { visualizar = 'block'; }
			let colorFondo = aColorFondoEvento[color1 - 1];
			var colorTexto = '#ffffff';
			if (color1 == 4) { colorTexto = '#000000';}
		  	calendar.addEvent({
				id: id1,
				allDay: todoeldia1,
				start: fechaini1,
				end: fechafin1,
				title: titulo1,
				url: www1,
				editable: true,
				display: visualizar,
				backgroundColor: colorFondo,
				borderColor: colorFondo,
				textColor: colorTexto,
				descripcion: descripcion1,
				lugar: lugar1,
				idReunion: idReunion1,
				passReunion: passReunion1,
				appReunion: appReunion1
		  	});
		}


		function modificarEvento(id1, titulo1, todoeldia1, fechaini1, fechafin1, color1, www1, descripcion1, lugar1, idReunion1, passReunion1, appReunion1) {
			window.salirDeCambioEvento = 1; // salir enseguida
			var visualizar = 'list-item';
			if (todoeldia1) { visualizar = 'block'; }
			let colorFondo = aColorFondoEvento[color1 - 1];
			var colorTexto = '#ffffff';
			if (color1 == 4) { colorTexto = '#000000';}
			let ev    = calendar.getEventById(id1);
			ev.setAllDay(todoeldia1);
			ev.setStart(fechaini1);
			ev.setEnd(fechafin1);
			ev.setProp('display', visualizar);
			ev.setProp('title', titulo1);
			ev.setProp('url', www1);
			ev.setProp('backgroundColor', colorFondo);
			ev.setProp('borderColor', colorFondo);
			ev.setProp('textColor', colorTexto);
			ev.setExtendedProp('descripcion', descripcion1);
			ev.setExtendedProp('lugar', lugar1);
			ev.setExtendedProp('idReunion', idReunion1);
			ev.setExtendedProp('passReunion', passReunion1);
			ev.setExtendedProp('appReunion', appReunion1);
			window.salirDeCambioEvento = 0;
		}

		function eliminarEvento(idAeliminar) {
			let ev = calendar.getEventById(idAeliminar);
			ev.remove();
		}

		function confirmacionEliminar() { 
			if (!dEstSuscrip()) {return false;}
			bdEvento(3, window.idEvento, '', '', '', '', '', '', '', '', '', '', ''); 
		}


		function bdEvento(accion, id1, titulo1, todoeldia1, fechaini1, fechafin1, color1, www1, descripcion1, lugar1, idReunion1, passReunion1, appReunion1) {
		    //se guarda en bd con GMT 0
		    if (accion != 3) {
		        if (todoeldia1) {
		            var fechaInicialGMT0  = fechaini1.replace('T', ' ');
		            var fechaFinalGMT0    = fechafin1.replace('T', ' '); 
		        } else {
		            var fIni              = new Date(fechaini1);
		            var fFin              = new Date(fechafin1);      
		            var fechaInicialGMT0  = fIni.toISOString().slice(0, -1).substring(0, 16).replace('T', ' ');
		            var fechaFinalGMT0    = fFin.toISOString().slice(0, -1).substring(0, 16).replace('T', ' ');      
		        }      
		    }

		    async function datosDevueltos1() {
		      let formData1 = new FormData();
		      formData1.append('plan', localStorage.getItem('plan'));
		      formData1.append('prefijo', localStorage.getItem('prefijo'));
		      formData1.append('maxRegFree', localStorage.getItem('maxRegFree'));
		      formData1.append('opcionListado', accion);
		      formData1.append('id', id1);
		      formData1.append('todoeldia', todoeldia1 ? -1 : 0);
		      formData1.append('fechaini', fechaInicialGMT0);
		      formData1.append('fechafin', fechaFinalGMT0);
		      if ((accion == 1) || (accion == 2)) {
		        const tableData    = $('#tabParticipantes').bootstrapTable('getData');
		        const filteredData = tableData.map(row => {
		          return { ccn: row.ccn };
		        }); 
		        formData1.append('titulo', titulo1);
		        formData1.append('descripcion', descripcion1);
		        formData1.append('lugar', lugar1);
		        formData1.append('color', color1);
		        formData1.append('www', www1);
		        formData1.append('idReunion', idReunion1);
		        formData1.append('passReunion', passReunion1);
		        formData1.append('appReunion', appReunion1);
		        formData1.append('dataJSON', JSON.stringify(filteredData));
		      }
		      const response1 = await fetch('https://' + window.location.host + '/fichaEvento', {
		          method: 'POST',
		          body:   formData1
		      });
		      const data = await response1.json();
		      return data;
		    }
		    datosDevueltos1().then((data) => {
		      if (data.success) {
		        if (accion == 1) { 
		            id1 = data.data.value2;
		            nuevoEvento(id1, titulo1, todoeldia1, fechaini1, fechafin1, color1, www1, descripcion1, lugar1, idReunion1, passReunion1, appReunion1); 
		        }
		        if (accion == 2) { modificarEvento(id1, titulo1, todoeldia1, fechaini1, fechafin1, color1, www1, descripcion1, lugar1, idReunion1, passReunion1, appReunion1); }

		        if (accion == 3) { eliminarEvento(id1); }

		        if ((accion == 1) || (accion == 2) || (accion == 3)) {
		            var modal = bootstrap.Modal.getInstance(modalEvento);
		            modal.hide();          
		        }
		        //calendar.render();
		      } else {
		        if (data.message == "K1") {
		        	salirModalEvento = true;	
		          	//modMsj('eventos001', 'My Contacts Cloud', tExp('Te recomendamos adquirir un plan PRO para poder añadir más eventos', '') + '.<br><center><button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick="abrirModal1DesdeFicha(1)">' + tExp('Ver planes', '') + '</button></center>', msjModEvento, false);
		          	modMsjFinPruebaToast('eventos001', 'My Contacts Cloud', txtFinPrueba1(), txtFinPrueba2());
		        } else if (data.message == "K2") {
		        	salirModalEvento = true;
		          	modMsj('eventos002', 'My Contacts Cloud', tExp('Te recomendamos cambiar a un plan PRO superior para poder añadir más eventos', '') + '.<br><center><button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick="abrirModal1DesdeFicha(2)">' + tExp('Mi suscripción', '') + '</button></center>', msjModEvento, false);
		        } else {
		          	toastSelFila(data.message, msjModEvento);
		        }
		      } 
		    })

		}


		function esconderPopover() {
		    if (ventanaSobre != null) {
		      	ventanaSobre.hide();
		      	ventanaSobre = null;
		    }
		}


		function crearEstiloEl(a) {
		    // Create a <style> element
		    const styleElement = document.createElement('style');

		    // Define the CSS rules
		    const cssRules = `
		      @media (min-width: 993px) {
		        #eliminar_eventos:after  { content: '  ` + a + `';}
		      }
		    `;

		    // Add the CSS rules to the <style> element
		    styleElement.innerHTML = cssRules;

		    // Append the <style> element to the document's <head>
		    document.head.appendChild(styleElement);
		}


		function dTitColParticipantes(id, i) {
		    switch (id) {
		          case 'es-es':
		          case 'es-ES':
		              return tabParticipantesTitCol_es_ES[i]; 
		              break;
		          case 'ca-es':
		          case 'ca-ES':
		              return tabParticipantesTitCol_ca_ES[i];
		              break;
		          case 'eu-es':
		          case 'eu-ES':
		              return tabParticipantesTitCol_eu_ES[i];
		              break;
		          case 'gl-es':
		          case 'gl-ES':
		              return tabParticipantesTitCol_gl_ES[i];
		              break;
		          case 'en-gb':
		          case 'en-GB':
		              return tabParticipantesTitCol_en_GB[i];
		              break;
		          case 'es-mx':
		          case 'es-MX':
		              return tabParticipantesTitCol_es_MX[i];
		              break;
		          case 'es-cl':
		          case 'es-CL':
		              return tabParticipantesTitCol_es_CL[i];
		              break;
		          case 'es-us':
		          case 'es-US':
		              return tabParticipantesTitCol_es_US[i];
		              break;
		          case 'en-us':
		          case 'en-US':
		              return tabParticipantesTitCol_en_US[i];
		              break;
		          case 'en-ca':
		          case 'en-CA':
		              return tabParticipantesTitCol_en_CA[i];
		              break;                                                              
		          case 'en-au':
		          case 'en-AU':
		              return tabParticipantesTitCol_en_AU[i];
		              break;
		          case 'it-it':
		          case 'it-IT':
		              return tabParticipantesTitCol_it_IT[i];
		              break;
		          case 'pt-pt':
		          case 'pt-PT':
		              return tabParticipantesTitCol_pt_PT[i];
		              break;
		          case 'pt-br':
		          case 'pt-BR':
		              return tabParticipantesTitCol_pt_BR[i];
		              break;
		          case 'fr-fr':
		          case 'fr-FR':
		              return tabParticipantesTitCol_fr_FR[i];
		              break;
		          case 'fr-ca':
		          case 'fr-CA':
		              return tabParticipantesTitCol_fr_CA[i];
		              break;                                                              
		          case 'de-de':
		          case 'de-DE':
		              return tabParticipantesTitCol_de_DE[i];
		              break;
			        case 'en-nz':
			        case 'en-NZ':
			            return tabParticipantesTitCol_en_NZ[i];
			            break;
			        case 'en-ie':
			        case 'en-IE':
			            return tabParticipantesTitCol_en_IE[i];
			            break;
			        case 'en-in':
			        case 'en-IN':
			            return tabParticipantesTitCol_en_IN[i];
			            break;
			        case 'en-sg':
			        case 'en-SG':
			            return tabParticipantesTitCol_en_SG[i];
			            break;	 
			        case 'en-hk':
			        case 'en-HK':
			            return tabParticipantesTitCol_en_HK[i];
			            break;
			        case 'en-my':
			        case 'en-MY':
			            return tabParticipantesTitCol_en_MY[i];
			            break;
			        case 'es-ar':
			        case 'es-AR':
			            return tabParticipantesTitCol_es_AR[i];
			            break;
			        case 'es-co':
			        case 'es-CO':
			            return tabParticipantesTitCol_es_CO[i];
			            break;	
			        case 'es-pe':
			        case 'es-PE':
			            return tabParticipantesTitCol_es_PE[i];
			            break;
			        case 'es-uy':
			        case 'es-UY':
			            return tabParticipantesTitCol_es_UY[i];
			            break;
			        case 'fr-be':
			        case 'fr-BE':
			            return tabParticipantesTitCol_fr_BE[i];
			            break;
			        case 'fr-ch':
			        case 'fr-CH':
			            return tabParticipantesTitCol_fr_CH[i];
			            break;	
			        case 'it-ch':
			        case 'it-CH':
			            return tabParticipantesTitCol_it_CH[i];
			            break;
			        case 'de-at':
			        case 'de-AT':
			            return tabParticipantesTitCol_de_AT[i];
			            break;
			        case 'de-be':
			        case 'de-BE':
			            return tabParticipantesTitCol_de_BE[i];
			            break;
			        case 'de-ch':
			        case 'de-CH':
			            return tabParticipantesTitCol_de_CH[i];
			            break;
		            case 'es-ve':
		            case 'es-VE':
		                return tabParticipantesTitCol_es_VE[i];
		                break;
		            case 'es-gt':
		            case 'es-GT':
		                return tabParticipantesTitCol_es_GT[i];
		                break;
		            case 'es-ec':
		            case 'es-EC':
		                return tabParticipantesTitCol_es_EC[i];
		                break;
		            case 'es-bo':
		            case 'es-BO':
		                return tabParticipantesTitCol_es_BO[i];
		                break;
		            case 'es-cu':
		            case 'es-CU':
		                return tabParticipantesTitCol_es_CU[i];
		                break;
		            case 'es-do':
		            case 'es-DO':
		                return tabParticipantesTitCol_es_DO[i];
		                break;  
		            case 'es-hn':
		            case 'es-HN':
		                return tabParticipantesTitCol_es_HN[i];
		                break;
		            case 'es-py':
		            case 'es-PY':
		                return tabParticipantesTitCol_es_PY[i];
		                break;
		            case 'es-sv':
		            case 'es-SV':
		                return tabParticipantesTitCol_es_SV[i];
		                break;
		            case 'es-ni':
		            case 'es-NI':
		                return tabParticipantesTitCol_es_NI[i];
		                break;
		            case 'es-pa':
		            case 'es-PA':
		                return tabParticipantesTitCol_es_PA[i];
		                break;
		            case 'en-pk':
		            case 'en-PK':
		                return tabParticipantesTitCol_en_PK[i];
		                break;
		            case 'en-ng':
		            case 'en-NG':
		                return tabParticipantesTitCol_en_NG[i];
		                break;
		            case 'en-bd':
		            case 'en-BD':
		                return tabParticipantesTitCol_en_BD[i];
		                break;
		            case 'en-ph':
		            case 'en-PH':
		                return tabParticipantesTitCol_en_PH[i];
		                break;
		            case 'en-tz':
		            case 'en-TZ':
		                return tabParticipantesTitCol_en_TZ[i];
		                break;
		            case 'en-za':
		            case 'en-ZA':
		                return tabParticipantesTitCol_en_ZA[i];
		                break;
		            case 'en-ke':
		            case 'en-KE':
		                return tabParticipantesTitCol_en_KE[i];
		                break;
		            case 'en-ug':
		            case 'en-UG':
		                return tabParticipantesTitCol_en_UG[i];
		                break;
		            case 'en-gh':
		            case 'en-GH':
		                return tabParticipantesTitCol_en_GH[i];
		                break;
		            case 'en-mw':
		            case 'en-MW':
		                return tabParticipantesTitCol_en_MW[i];
		                break;
		            case 'en-zm':
		            case 'en-ZM':
		                return tabParticipantesTitCol_en_ZM[i];
		                break;
		            case 'en-zw':
		            case 'en-ZW':
		                return tabParticipantesTitCol_en_ZW[i];
		                break;
		            case 'en-cm':
		            case 'en-CM':
		                return tabParticipantesTitCol_en_CM[i];
		                break;
		            case 'en-lk':
		            case 'en-LK':
		                return tabParticipantesTitCol_en_LK[i];
		                break;
		            case 'fr-cd':
		            case 'fr-CD':
		                return tabParticipantesTitCol_fr_CD[i];
		                break;
		            case 'fr-cm':
		            case 'fr-CM':
		                return tabParticipantesTitCol_fr_CM[i];
		                break;
		            case 'fr-mg':
		            case 'fr-MG':
		                return tabParticipantesTitCol_fr_MG[i];
		                break;
		            case 'fr-ch':
		            case 'fr-CH':
		                return tabParticipantesTitCol_fr_CH[i];
		                break;
		            case 'fr-ci':
		            case 'fr-CI':
		                return tabParticipantesTitCol_fr_CI[i];
		                break;
		            case 'fr-bf':
		            case 'fr-BF':
		                return tabParticipantesTitCol_fr_BF[i];
		                break;
		            case 'fr-be':
		            case 'fr-BE':
		                return tabParticipantesTitCol_fr_BE[i];
		                break;
		            case 'fr-ne':
		            case 'fr-NE':
		                return tabParticipantesTitCol_fr_NE[i];
		                break;
		            case 'fr-sn':
		            case 'fr-SN':
		                return tabParticipantesTitCol_fr_SN[i];
		                break;
		            case 'fr-ml':
		            case 'fr-ML':
		                return tabParticipantesTitCol_fr_ML[i];
		                break;
		            case 'fr-bj':
		            case 'fr-BJ':
		                return tabParticipantesTitCol_fr_BJ[i];
		                break;
		            case 'fr-rw':
		            case 'fr-RW':
		                return tabParticipantesTitCol_fr_RW[i];
		                break;
		            case 'fr-td':
		            case 'fr-TD':
		                return tabParticipantesTitCol_fr_TD[i];
		                break;
		            case 'fr-gn':
		            case 'fr-GN':
		                return tabParticipantesTitCol_fr_GN[i];
		                break;                                
		            case 'pt-ao':
		            case 'pt-AO':
		                return tabParticipantesTitCol_pt_AO[i];
		                break;
		            case 'pt-mz':
		            case 'pt-MZ':
		                return tabParticipantesTitCol_pt_MZ[i];
		                break;
		          	default:
		            	return tabParticipantesTitCol_en_US[i];
		      	}     
		  	}


			function bloquesAppReunion() {
				if (appReunion_eventos.value == 0) { // Ninguno
				    idReunionB_eventos.hidden        = true;
				    passReunionB_eventos.hidden      = true;
				} else if (appReunion_eventos.value == 1) { // Google Meet
				    idReunionB_eventos.hidden        = false;
				    passReunionB_eventos.hidden      = true;
				    idReunion_eventos.placeholder   = tExp("Código o enlace de la reunión", "");
				    idReunion_eventos.title         = tExp("Código o enlace de la reunión", "");  
				    let bsTooltip = new bootstrap.Tooltip(idReunion_eventos);
				} else if (appReunion_eventos.value == 2) { // Microsoft Teams
				    idReunionB_eventos.hidden        = false;
				    passReunionB_eventos.hidden      = false;
				    idReunion_eventos.placeholder   = tExp("Id. reunión", "");
				    idReunion_eventos.title         = tExp("Id. reunión", "");
				    let bsTooltip = new bootstrap.Tooltip(idReunion_eventos);
				    passReunion_eventos.placeholder = tExp("Código de acceso", "");
				    passReunion_eventos.title       = tExp("Código de acceso a la reunión", "");
				    bsTooltip = new bootstrap.Tooltip(passReunion_eventos);
				} else if (appReunion_eventos.value == 3) { // Zoom
				    idReunionB_eventos.hidden        = false;
				    passReunionB_eventos.hidden      = true;
				    idReunion_eventos.placeholder   = tExp("ID de reunión o nombre de enlace personal", "");
				    idReunion_eventos.title         = tExp("ID de reunión o nombre de enlace personal", ""); 
				    let bsTooltip = new bootstrap.Tooltip(idReunion_eventos);       
				}
				return false;
			}

			function abrirWebReunion() {
				var sEnlace = '';
				if (appReunion_eventos.value == 1) {
				  sEnlace = enlaceGoogleMeet(idReunion_eventos.value);
				} else if (appReunion_eventos.value == 2) {
				  sEnlace = 'https://www.microsoft.com/microsoft-teams/join-a-meeting';
				} else if (appReunion_eventos.value == 3) {
				  sEnlace = enlaceJoin(idReunion_eventos.value);
				}
				//let windowObjectJoin = window.open(sEnlace, 'reunion', 'height=' + screen.height + ', width=' + screen.width + ', menubar=no, titlebar=yes, toolbar=no, noopener');
				//windowObjectJoin.moveTo(0,0);
				//return false;
				if (sEnlace != '') { abrirVentanaUnica(sEnlace); }
			}

			function enlaceGoogleMeet(v) {
				var pos = v.indexOf('meet.google.com/');
				if (pos == -1) { // no está incluido 
				  return 'https://meet.google.com/' + v;
				} else {
				  pos = v.indexOf('https://');
				  if (pos == -1) { // no está incluido
				    return 'https://' + v;
				  } else {
				    return v;
				  }
				}
			}

			function enlaceJoin(v) {
				var pos = v.indexOf('zoom.us/');
				if (pos == -1) { // no está incluido 
				  	return 'https://zoom.us/j/' + v;
				} else {
					  pos = v.indexOf('https://');
					  if (pos == -1) { // no está incluido
					    return 'https://' + v;
					  } else {
					    return v;
					  }
				}
			}
	  

		  function detailFormatter1participantes(index, row) {
		    var html    = [];
		    var bGeo    = 0;
		    var lang  = localStorage.getItem('idiomaPais');
		    var gooMaps = ' ' + mapFormat(row['dom'], row['cpo'], row['pob'], row['pro'], row['pai']); 
		    $.each(row, function (key, value) {
		      if (key == 'ccn' ||  !value || value == '') { }
		      else if (key == !value || value == '') { } 
		      else {
		        let a = '';
		        let b = '';
		        if (key == 'cod')     { a = tExp('Código', lang);           b = value; }
		        if (key == 'per')     { a = tExp('Nombre', lang);           b = value; }
		        if (key == 'te1')     { a = tExp('Telefóno 1', lang);       b = telFormaNew1(value); }
		        if (key == 'te2')     { a = tExp('Teléfono 2', lang);       b = telFormaNew1(value); }
		        if (key == 'cor')     { a = tExp('E-mail', lang);           b = corFormatNew(value); }
		        if (key == 'www')     { a = tExp('Web', lang);              b = webFormatNew(value); }         
		        if (key == 'dom')     { a = tExp('Dirección', lang);        b = value; if (bGeo == 0) { b = b + gooMaps; bGeo = 1;} }
		        if (key == 'cpo')     { a = tExp('C. P.', lang);            b = value; if (bGeo == 0) { b = b + gooMaps; bGeo = 1;} }
		        if (key == 'pob')     { a = tExp('Población', lang);        b = value; if (bGeo == 0) { b = b + gooMaps; bGeo = 1;} }
		        if (key == 'pro')     { a = tExp('Provincia', lang);        b = value; if (bGeo == 0) { b = b + gooMaps; bGeo = 1;} }
		        if (key == 'pai')     { a = tExp('País', lang);             b = value; if (bGeo == 0) { b = b + gooMaps; bGeo = 1;} }
		        if (key == 'nom')     { a = tExp('Empresa', lang);          b = value; }
		        if (key == 'nif')     { a = tExp('NIF', lang);              b = value; }
		        if (key == 'dep')     { a = tExp('Departamento', lang);     b = value; }
		        if (key == 'car')     { a = tExp('Cargo', lang);            b = value; }
		        if (key == 'rol')     { a = tExp('Rol', lang);              b = tExp(aRol[value - 1], lang); } 
		        if (!(!b || b == '')) {
		          html.push('<div><b>' + a + ':</b> ' + b + '</div>');   
		        }
		      }
		    })
		    return html.join('');
		  }


// fin código eventos


// código documentos
	function eliminarDocumento() {	
		if (!dEstSuscrip()) {return false;}
		if (filaNoSeleccionada('tabDocumentos', 'success1', msjModDocumento)) 	{ return false; }
		let myModal = new bootstrap.Modal(document.getElementById('formEliminarDocumento'));
		myModal.show();
        return false;
	} 


	function dTitColDocumentos(id, i) {
	    switch (id) {
	        case 'es-es':
	        case 'es-ES':
	            return tabDocumentosTitCol_es_ES[i]; 
	            break;
	        case 'ca-es':
	        case 'ca-ES':
	            return tabDocumentosTitCol_ca_ES[i];
	            break;
	        case 'eu-es':
	        case 'eu-ES':
	            return tabDocumentosTitCol_eu_ES[i];
	            break;
	        case 'gl-es':
	        case 'gl-ES':
	            return tabDocumentosTitCol_gl_ES[i];
	            break;
	        case 'en-gb':
	        case 'en-GB':
	            return tabDocumentosTitCol_en_GB[i];
	            break;
	        case 'es-mx':
	        case 'es-MX':
	            return tabDocumentosTitCol_es_MX[i];
	            break;
	        case 'es-cl':
	        case 'es-CL':
	            return tabDocumentosTitCol_es_CL[i];
	            break;
	        case 'es-us':
	        case 'es-US':
	            return tabDocumentosTitCol_es_US[i];
	            break;
	        case 'en-us':
	        case 'en-US':
	            return tabDocumentosTitCol_en_US[i];
	            break;
	        case 'en-ca':
	        case 'en-CA':
	            return tabDocumentosTitCol_en_CA[i];
	            break;                                                              
	        case 'en-au':
	        case 'en-AU':
	            return tabDocumentosTitCol_en_AU[i];
	            break;
	        case 'it-it':
	        case 'it-IT':
	            return tabDocumentosTitCol_it_IT[i];
	            break;
	        case 'pt-pt':
	        case 'pt-PT':
	            return tabDocumentosTitCol_pt_PT[i];
	            break;
	        case 'pt-br':
	        case 'pt-BR':
	            return tabDocumentosTitCol_pt_BR[i];
	            break;
	        case 'fr-fr':
	        case 'fr-FR':
	            return tabDocumentosTitCol_fr_FR[i];
	            break;
	        case 'fr-ca':
	        case 'fr-CA':
	            return tabDocumentosTitCol_fr_CA[i];
	            break;                                                              
	        case 'de-de':
	        case 'de-DE':
	            return tabDocumentosTitCol_de_DE[i];
	            break;
	        case 'en-nz':
	        case 'en-NZ':
	            return tabDocumentosTitCol_en_NZ[i];
	            break;
	        case 'en-ie':
	        case 'en-IE':
	            return tabDocumentosTitCol_en_IE[i];
	            break;
	        case 'en-in':
	        case 'en-IN':
	            return tabDocumentosTitCol_en_IN[i];
	            break;
	        case 'en-sg':
	        case 'en-SG':
	            return tabDocumentosTitCol_en_SG[i];
	            break;	 
	        case 'en-hk':
	        case 'en-HK':
	            return tabDocumentosTitCol_en_HK[i];
	            break;
	        case 'en-my':
	        case 'en-MY':
	            return tabDocumentosTitCol_en_MY[i];
	            break;
	        case 'es-ar':
	        case 'es-AR':
	            return tabDocumentosTitCol_es_AR[i];
	            break;
	        case 'es-co':
	        case 'es-CO':
	            return tabDocumentosTitCol_es_CO[i];
	            break;	
	        case 'es-pe':
	        case 'es-PE':
	            return tabDocumentosTitCol_es_PE[i];
	            break;
	        case 'es-uy':
	        case 'es-UY':
	            return tabDocumentosTitCol_es_UY[i];
	            break;
	        case 'fr-be':
	        case 'fr-BE':
	            return tabDocumentosTitCol_fr_BE[i];
	            break;
	        case 'fr-ch':
	        case 'fr-CH':
	            return tabDocumentosTitCol_fr_CH[i];
	            break;	
	        case 'it-ch':
	        case 'it-CH':
	            return tabDocumentosTitCol_it_CH[i];
	            break;
	        case 'de-at':
	        case 'de-AT':
	            return tabDocumentosTitCol_de_AT[i];
	            break;
	        case 'de-be':
	        case 'de-BE':
	            return tabDocumentosTitCol_de_BE[i];
	            break;
	        case 'de-ch':
	        case 'de-CH':
	            return tabDocumentosTitCol_de_CH[i];
	            break;	
            case 'es-ve':
            case 'es-VE':
                return tabDocumentosTitCol_es_VE[i];
                break;
            case 'es-gt':
            case 'es-GT':
                return tabDocumentosTitCol_es_GT[i];
                break;
            case 'es-ec':
            case 'es-EC':
                return tabDocumentosTitCol_es_EC[i];
                break;
            case 'es-bo':
            case 'es-BO':
                return tabDocumentosTitCol_es_BO[i];
                break;
            case 'es-cu':
            case 'es-CU':
                return tabDocumentosTitCol_es_CU[i];
                break;
            case 'es-do':
            case 'es-DO':
                return tabDocumentosTitCol_es_DO[i];
                break;  
            case 'es-hn':
            case 'es-HN':
                return tabDocumentosTitCol_es_HN[i];
                break;
            case 'es-py':
            case 'es-PY':
                return tabDocumentosTitCol_es_PY[i];
                break;
            case 'es-sv':
            case 'es-SV':
                return tabDocumentosTitCol_es_SV[i];
                break;
            case 'es-ni':
            case 'es-NI':
                return tabDocumentosTitCol_es_NI[i];
                break;
            case 'es-pa':
            case 'es-PA':
                return tabDocumentosTitCol_es_PA[i];
                break;
            case 'en-pk':
            case 'en-PK':
                return tabDocumentosTitCol_en_PK[i];
                break;
            case 'en-ng':
            case 'en-NG':
                return tabDocumentosTitCol_en_NG[i];
                break;
            case 'en-bd':
            case 'en-BD':
                return tabDocumentosTitCol_en_BD[i];
                break;
            case 'en-ph':
            case 'en-PH':
                return tabDocumentosTitCol_en_PH[i];
                break;
            case 'en-tz':
            case 'en-TZ':
                return tabDocumentosTitCol_en_TZ[i];
                break;
            case 'en-za':
            case 'en-ZA':
                return tabDocumentosTitCol_en_ZA[i];
                break;
            case 'en-ke':
            case 'en-KE':
                return tabDocumentosTitCol_en_KE[i];
                break;
            case 'en-ug':
            case 'en-UG':
                return tabDocumentosTitCol_en_UG[i];
                break;
            case 'en-gh':
            case 'en-GH':
                return tabDocumentosTitCol_en_GH[i];
                break;
            case 'en-mw':
            case 'en-MW':
                return tabDocumentosTitCol_en_MW[i];
                break;
            case 'en-zm':
            case 'en-ZM':
                return tabDocumentosTitCol_en_ZM[i];
                break;
            case 'en-zw':
            case 'en-ZW':
                return tabDocumentosTitCol_en_ZW[i];
                break;
            case 'en-cm':
            case 'en-CM':
                return tabDocumentosTitCol_en_CM[i];
                break;
            case 'en-lk':
            case 'en-LK':
                return tabDocumentosTitCol_en_LK[i];
                break;
            case 'fr-cd':
            case 'fr-CD':
                return tabDocumentosTitCol_fr_CD[i];
                break;
            case 'fr-cm':
            case 'fr-CM':
                return tabDocumentosTitCol_fr_CM[i];
                break;
            case 'fr-mg':
            case 'fr-MG':
                return tabDocumentosTitCol_fr_MG[i];
                break;
            case 'fr-ch':
            case 'fr-CH':
                return tabDocumentosTitCol_fr_CH[i];
                break;
            case 'fr-ci':
            case 'fr-CI':
                return tabDocumentosTitCol_fr_CI[i];
                break;
            case 'fr-bf':
            case 'fr-BF':
                return tabDocumentosTitCol_fr_BF[i];
                break;
            case 'fr-be':
            case 'fr-BE':
                return tabDocumentosTitCol_fr_BE[i];
                break;
            case 'fr-ne':
            case 'fr-NE':
                return tabDocumentosTitCol_fr_NE[i];
                break;
            case 'fr-sn':
            case 'fr-SN':
                return tabDocumentosTitCol_fr_SN[i];
                break;
            case 'fr-ml':
            case 'fr-ML':
                return tabDocumentosTitCol_fr_ML[i];
                break;
            case 'fr-bj':
            case 'fr-BJ':
                return tabDocumentosTitCol_fr_BJ[i];
                break;
            case 'fr-rw':
            case 'fr-RW':
                return tabDocumentosTitCol_fr_RW[i];
                break;
            case 'fr-td':
            case 'fr-TD':
                return tabDocumentosTitCol_fr_TD[i];
                break;
            case 'fr-gn':
            case 'fr-GN':
                return tabDocumentosTitCol_fr_GN[i];
                break;                                
            case 'pt-ao':
            case 'pt-AO':
                return tabDocumentosTitCol_pt_AO[i];
                break;
            case 'pt-mz':
            case 'pt-MZ':
                return tabDocumentosTitCol_pt_MZ[i];
                break;
	        default:
	            return tabDocumentosTitCol_en_US[i];
	    }  		
	}	 	

// fin código documentos


function libIdioma(id, n) {
	if (libIdioCargado == id) {
		accionesTrasCargaLibIdio(id, n);
	} else {
	    var nomFichero    	= 'https://cdn.jsdelivr.net/gh/mycontactscloud/app@main/lib/idio4/mcc_' + id + '.js?v=4.0.0-22';
	    var script    		= document.createElement('script');
	    script.src      	= nomFichero;
	    script.type     	= 'text/javascript';
	    script.onload = function() {
	        //alert(`${nomFichero} ha sido cargado.`);
	        libIdioCargado = id;
	    	accionesTrasCargaLibIdio(id, n);
	    };
	    script.onerror = function() {
	        alert(`Error al cargar ${nomFichero}.`);
	    };
	    document.body.appendChild(script);		
	}
}


function accionesTrasCargaLibIdio(id, n) {
    if (n == 0) {
    } else if (n == 1) {
    	document.getElementById('tCambiarIdioma').innerHTML 	= tExp("Cambiar idioma", id);
        document.getElementById('tIdiomaAceptar').innerHTML  	= tExp("Aceptar", id);
        document.getElementById('tIdiomaCancelar').innerHTML 	= tExp("Cancelar", id);
	} else if (n == 2) {
  		cambiarTextoIdioma(id);
  		txtInvitacionInstalar.innerText = translateInstallInvitation(id);
  		txtbtnInstalarApp.innerText 	= translateInstallApp(id);
    	let myModal2 					= new bootstrap.Modal(document.getElementById('accesoUsuario'));
		myModal2.show();    		
	} else if (n == 3) {
		cambiarTextoIdioma(id);  
	} else if (n == 4) {
		actualizarEstadoPlanMenu();
		if (false) {
		var eSus = localStorage.getItem('estadoSuscripcion');
        if ((eSus == 'trialing') || (eSus == 'probando')) {
            if (document.getElementById("promocion").classList.contains("d-none")) {
                document.getElementById("promocion").classList.remove("d-none");
                txtPromocion1.innerText = fTextPromocion(1);
                txtPromocion2.innerText = fTextPromocion(2);
                txtPromocion3.innerText = fTextPromocion(3);
                txtPromocion4.innerText = fTextPromocion(4);
            }        	
            if (document.getElementById("filaPruebas").classList.contains("d-none")) {
                document.getElementById("filaPruebas").classList.remove("d-none");
            }
            if (localStorage.getItem('pruebaCancelada') == '0') { // Prueba no cancelada
                colPruebas1.innerHTML = fColPruebas1();
                txtSug1();
            } else { // Prueba cancelada
                colPruebas1.innerHTML = fColPruebas3();
            }
        } else if ((eSus == 'canceled') || (eSus == 'cancelado')) {
            if (document.getElementById("filaPruebas").classList.contains("d-none")) {
                document.getElementById("filaPruebas").classList.remove("d-none");
            }
            colPruebas1.innerHTML = fColPruebas4();
            txtSug1();
        } else {
            if (!document.getElementById("promocion").classList.contains("d-none")) {
                // Si la clase NO está presente, agregarla
                document.getElementById("promocion").classList.add("d-none");
            }         	
            if (!document.getElementById("filaPruebas").classList.contains("d-none")) {
                // Si la clase NO está presente, agregarla
                document.getElementById("filaPruebas").classList.add("d-none");
            }
        }
        }
        cambiarTextoIdiomaDiv(id, 'modalMenu');
        if (typeof actualizarPreferenciaCerrarSesionUI === "function") {
            actualizarPreferenciaCerrarSesionUI(id);
        }
        activarTooltipsDiv('modalMenu');			
	} else if (n == 5) {
        cambiarTextoIdioma(id);
        let myModal5 = new bootstrap.Modal(document.getElementById('modalPlanes'));
        myModal5.show();
	} else if (n == 8) {
    	cambiarPolPri();
        let myModal8 = new bootstrap.Modal(document.getElementById('modalPoliticaPrivacidad'));
        myModal8.show();
	} else if (n == 9) {
    	cambiarTerCon();
        let myModal9 = new bootstrap.Modal(document.getElementById('modalCondicionesUso'));
        myModal9.show();
	} else if (n == 10) {
        if ((localStorage.getItem('estadoSuscripcion') == 'trialing') || (localStorage.getItem('estadoSuscripcion') == 'probando')) {
            if (document.getElementById("pruebaOK").classList.contains("d-none")) {
                document.getElementById("pruebaOK").classList.remove("d-none");
            }
            if (!document.getElementById("compraOK").classList.contains("d-none")) {
                // Si la clase NO está presente, agregarla
                document.getElementById("compraOK").classList.add("d-none");
            }
            document.getElementById("txtPruebaActivada").innerText = txtPruebas5();
        } else {
            if (!document.getElementById("pruebaOK").classList.contains("d-none")) {
                // Si la clase NO está presente, agregarla
                document.getElementById("pruebaOK").classList.add("d-none");
            }        	
            if (document.getElementById("compraOK").classList.contains("d-none")) {
                document.getElementById("compraOK").classList.remove("d-none");
            }
        }
        cambiarTextoIdioma(id);
    	activarTooltips();
        let myModal10 = new bootstrap.Modal(document.getElementById('modalFinCompra'));
        myModal10.show();
    }

}

function translateInstallApp(id) {
    // Diccionario de traducciones
    const translations = {
        es: "Instalar app",
        en: "Install app",
        fr: "Installer l'application",
        it: "Installa app",
        pt: "Instalar app",
        de: "App installieren",
        ca: "Instal·lar app",
        gl: "Instalar aplicación"
    };
    
    // Extraer las dos primeras letras del ID
    let lang = id.substring(0, 2).toLowerCase();
    
    // Devolver la traducción correspondiente o la versión en inglés si el idioma no es reconocido
    return translations[lang] || translations.en;
}

function translateInstallInvitation(id) {
    // Diccionario de traducciones para la invitación a instalar
    const messages = {
        es: "Instala nuestra app y accede más rápido a todas sus funciones.",
        en: "Install our app and access all features faster.",
        fr: "Installez notre application et accédez plus rapidement à toutes ses fonctionnalités.",
        it: "Installa la nostra app e accedi più velocemente a tutte le funzionalità.",
        pt: "Instale nosso app e acesse mais rápido todos os recursos.",
        de: "Installieren Sie unsere App und greifen Sie schneller auf alle Funktionen zu.",
        ca: "Instal·la la nostra app i accedeix més ràpidament a totes les funcions.",
        gl: "Instala a nosa app e accede máis rápido a todas as funcións."
    };
    
    // Extraer las dos primeras letras del ID
    let lang = id.substring(0, 2).toLowerCase();
    
    // Devolver la traducción correspondiente o la versión en inglés si el idioma no es reconocido
    return messages[lang] || messages.en;
}




function mccTextoSeguro(t) {
  return (typeof tExp === 'function') ? tExp(t, '') : t;
}

function mccRunExclusive(key, task, onBusy) {
  if (!window.__mccAsyncLocks) window.__mccAsyncLocks = {};
  if (window.__mccAsyncLocks[key]) {
    if (typeof onBusy === 'function') onBusy();
    return window.__mccAsyncLocks[key];
  }

  let promise;
  try {
    promise = Promise.resolve(task());
  } catch (err) {
    promise = Promise.reject(err);
  }

  const trackedPromise = promise.finally(() => {
    if (window.__mccAsyncLocks && window.__mccAsyncLocks[key] === trackedPromise) {
      delete window.__mccAsyncLocks[key];
    }
  });
  window.__mccAsyncLocks[key] = trackedPromise;
  return trackedPromise;
}

function mccTrackOAuth(provider, tipo, starter) {
  if (!window.__mccOAuthFlights) window.__mccOAuthFlights = {};

  const activeProvider = window.__mccOAuthFlights.__activeProvider;
  if (activeProvider && activeProvider !== provider) {
    return Promise.reject(new Error(mccTextoSeguro('Hay otra autorización en curso. Finalízala o ciérrala antes de iniciar una nueva.')));
  }

  const current = window.__mccOAuthFlights[provider];
  if (current) {
    if (current.tipo === tipo && current.promise) {
      return current.promise;
    }
    return Promise.reject(new Error(mccTextoSeguro('Hay otra autorización en curso. Finalízala o ciérrala antes de iniciar una nueva.')));
  }

  const holder = { tipo: tipo, promise: null };
  window.__mccOAuthFlights[provider] = holder;
  window.__mccOAuthFlights.__activeProvider = provider;

  let promise;
  try {
    promise = Promise.resolve(starter());
  } catch (err) {
    promise = Promise.reject(err);
  }

  holder.promise = promise.finally(() => {
    mccCancelarOAuth(provider);
    if (window.__mccOAuthFlights && window.__mccOAuthFlights[provider] === holder) {
      delete window.__mccOAuthFlights[provider];
    }
    if (window.__mccOAuthFlights && window.__mccOAuthFlights.__activeProvider === provider) {
      delete window.__mccOAuthFlights.__activeProvider;
    }
  });

  return holder.promise;
}

const MCC_OAUTH_STATE_TTL_MS = 10 * 60 * 1000;

function mccClaveEstadoOAuth(provider) {
  return `mcc_oauth_state_${provider}`;
}

function mccCrearEstadoOAuth(provider) {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  const nonce = btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
  const state = `mcc_${provider}_${nonce}`;
  localStorage.setItem(mccClaveEstadoOAuth(provider), JSON.stringify({
    state,
    expiresAt: Date.now() + MCC_OAUTH_STATE_TTL_MS
  }));
  return state;
}

function mccRegistrarPopupOAuth(provider, popup) {
  if (!window.__mccOAuthPopups) window.__mccOAuthPopups = {};
  window.__mccOAuthPopups[provider] = popup;
}

function mccCompararTextoConstante(a, b) {
  a = String(a || "");
  b = String(b || "");
  let diferencia = a.length ^ b.length;
  const longitud = Math.max(a.length, b.length);
  for (let i = 0; i < longitud; i++) {
    diferencia |= (a.charCodeAt(i % Math.max(a.length, 1)) || 0) ^
      (b.charCodeAt(i % Math.max(b.length, 1)) || 0);
  }
  return diferencia === 0;
}

function mccProveedorOAuth(payload = {}) {
  const declarado = String(payload.provider || "").toLowerCase();
  if (["google", "microsoft", "apple"].includes(declarado)) return declarado;
  const numero = parseInt(localStorage.getItem("provider_tmp") || "0", 10);
  return ({ 1: "google", 2: "microsoft", 3: "apple" })[numero] || "";
}

function mccConsumirCallbackOAuth(provider, payload = {}, opciones = {}) {
  if (!["google", "microsoft", "apple"].includes(provider)) return false;

  let guardado;
  try {
    guardado = JSON.parse(localStorage.getItem(mccClaveEstadoOAuth(provider)) || "null");
  } catch (e) {
    guardado = null;
  }
  if (!guardado || !guardado.state || Number(guardado.expiresAt || 0) < Date.now()) {
    mccCancelarOAuth(provider);
    return false;
  }
  if (!mccCompararTextoConstante(guardado.state, payload.state)) return false;

  if (!opciones.nativo) {
    const event = opciones.event;
    const popup = window.__mccOAuthPopups && window.__mccOAuthPopups[provider];
    if (!event || event.origin !== window.location.origin || !popup || event.source !== popup) {
      return false;
    }
  }

  // Se consume antes del canje: una respuesta OAuth nunca puede reproducirse.
  localStorage.removeItem(mccClaveEstadoOAuth(provider));
  if (window.__mccOAuthPopups) delete window.__mccOAuthPopups[provider];
  return true;
}

// Compatibilidad temporal con contenedores ya publicados que invocan la
// función directa del puente pero todavía no devuelven state. Nunca se usa
// desde el listener postMessage: allí state y event.source son obligatorios.
function mccPrepararCallbackOAuthNativo(provider, payload = {}) {
  const preparado = Object.assign({}, payload);
  if (preparado.state || typeof esAppNativaMcc !== "function" || !esAppNativaMcc()) {
    return preparado;
  }
  try {
    const guardado = JSON.parse(localStorage.getItem(mccClaveEstadoOAuth(provider)) || "null");
    if (guardado && guardado.state && Number(guardado.expiresAt || 0) >= Date.now()) {
      preparado.state = guardado.state;
    }
  } catch (e) {}
  return preparado;
}

function mccPrepararCallbackAppleNativoDesdeEvento(provider, payload = {}, event) {
  if (provider !== "apple" || payload.state ||
      typeof esAppNativaMcc !== "function" || !esAppNativaMcc() ||
      !event || event.source !== window || event.origin !== window.location.origin) {
    return payload;
  }
  return mccPrepararCallbackOAuthNativo(provider, payload);
}

function mccCancelarOAuth(provider) {
  localStorage.removeItem(mccClaveEstadoOAuth(provider));
  if (window.__mccOAuthPopups) delete window.__mccOAuthPopups[provider];
}

function mccSetElementsDisabled(ids, disabled) {
  ids.forEach((id) => {
    const el = (typeof id === 'string') ? document.getElementById(id) : id;
    if (!el) return;
    el.disabled = disabled;
    if (disabled) {
      el.setAttribute('aria-busy', 'true');
      el.classList.add('disabled');
    } else {
      el.removeAttribute('aria-busy');
      el.classList.remove('disabled');
    }
  });
}

function mccToastOperacionEnCurso(contenedor) {
  const mensaje = mccTextoSeguro('Operación en curso. Espera a que termine.');
  if (typeof toastMsj === 'function' && contenedor) {
    toastMsj(mensaje, contenedor, 1500, 4, 5);
  } else {
    console.info(mensaje);
  }
}

function mccMostrarErrorImportacion(error, contenedor, mensajeGenerico) {
  console.error(mensajeGenerico, error);
  const mensaje = error && error.message ? error.message : mensajeGenerico;
  if (typeof toastSelFila === 'function' && contenedor) {
    toastSelFila(mccTextoSeguro(mensaje), contenedor);
  } else if (typeof toastMsj === 'function' && contenedor) {
    toastMsj(mccTextoSeguro(mensaje), contenedor, 2000, 5, 5);
  } else {
    alert(mccTextoSeguro(mensaje));
  }
}

function mccGestionarRespuestaImportacionContactos(data, contenedor) {
  if (data && data.success) {
    mostrarResumenImportacionContactos(data, contenedor);
    return;
  }

  const message = data && data.message ? data.message : 'No se pudo completar la importación';
  if (message == "K1") {
    modMsjFinPruebaToast('import001', 'My Contacts Cloud', txtFinPrueba1(), txtFinPrueba2());
  } else if (message == "K2") {
    modMsj(2, 'My Contacts Cloud', tExp('Te recomendamos cambiar a un plan PRO superior para poder añadir más contactos', '') + '.<br><center><button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick="abrirModal1DesdeFicha(2)">Mi suscripción</button></center>', contenedor, false);
  } else {
    toastSelFila(tExp(message, ''), contenedor);
  }
}

async function mccEnviarContactosSeleccionados(tableId, contenedor, busyKey, buttonIds) {
  if (!dEstSuscrip()) { return false; }

  return mccRunExclusive(busyKey, async () => {
    mccSetElementsDisabled(buttonIds, true);

    try {
      const selectedContacts = $('#' + tableId).bootstrapTable('getSelections');
      let formData2 = new FormData();
      formData2.append('prefijo',     localStorage.getItem('prefijo'));
      formData2.append('plan',        localStorage.getItem('plan'));
      formData2.append('maxRegFree',  localStorage.getItem('maxRegFree'));
      formData2.append('contImpor',   JSON.stringify(selectedContacts, null, 2));

      const response = await fetch('https://' + window.location.host + '/importms', {
        method: 'POST',
        body: formData2
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || response.statusText);
      }

      const data = await response.json();
      mccGestionarRespuestaImportacionContactos(data, contenedor);
      return data;
    } catch (error) {
      mccMostrarErrorImportacion(error, contenedor, 'Error al importar los contactos seleccionados');
      return null;
    } finally {
      mccSetElementsDisabled(buttonIds, false);
    }
  }, () => mccToastOperacionEnCurso(contenedor));
}

function textoResumenImportacionContactos(data) {
  const numRegImp = parseInt(data && data.data ? data.data.value1 : 0, 10) || 0;
  const numRegDup = parseInt(data && data.data ? data.data.value2 : 0, 10) || 0;
  const lineas = [];

  if (numRegImp == 0) { lineas.push(tExp('No se importó nada', '')); }
  if (numRegImp == 1) { lineas.push(tExp('Se importó un registro', '')); }
  if (numRegImp > 1)  { lineas.push(numRegImp + ' ' + tExp('registros importados', '')); }

  if (numRegDup == 1) { lineas.push('1 contacto duplicado no añadido'); }
  if (numRegDup > 1)  { lineas.push(numRegDup + ' contactos duplicados no añadidos'); }

  return lineas.join('<br>');
}

function mostrarResumenImportacionContactos(data, contenedorPreferente) {
  const mensaje = textoResumenImportacionContactos(data) || tExp('No se importó nada', '');
  let host = document.getElementById('mccImportResultHost');

  if (!host) {
    host = document.createElement('div');
    host.id = 'mccImportResultHost';
    document.body.appendChild(host);
  }

  const modalAnterior = document.getElementById('dialogo2');
  if (modalAnterior) { modalAnterior.remove(); }

  try {
    modMsj(2, 'My Contacts Cloud', mensaje, host, false);
  } catch (err) {
    if (contenedorPreferente) {
      modMsj(2, 'My Contacts Cloud', mensaje, contenedorPreferente, false);
    } else {
      alert(mensaje.replace(/<br\s*\/?\s*>/gi, '\n'));
    }
  }

  return mensaje;
}


function importSelectedGoogle() {
	return mccEnviarContactosSeleccionados('tabImportGoogle', msjImportGoogle, 'importSelectedGoogle', ['importButtonGoogle']);
}


function importSelectedMs() {
	return mccEnviarContactosSeleccionados('tabImportMs', msjImportMs, 'importSelectedMs', ['importButtonMs']);
}


function importSelectedApple() {
	return mccEnviarContactosSeleccionados('tabImportApple', msjImportApple, 'importSelectedApple', ['importButtonApple']);
}





function elementoGrupoFormat(n) {
	const elemento = dataGruposContactos.find(el => el.numElemento == n);
    return elemento.desElemento;    
}


// código para modal de filtros contactos
function populateSelect(selectId, items) {
    const select = document.getElementById(selectId);
    select.innerHTML = '';
    items.forEach(item => {
    	const option = document.createElement('option');
        option.textContent = item.desElemento;
        option.value = item.numElemento;
        select.appendChild(option);
    });
}

// Función para obtener los valores seleccionados de los select
function getSelectedValues(selectId) {
    const select = document.getElementById(selectId);
    return Array.from(select.selectedOptions).map(option => parseInt(option.value, 10));
}

function cambiarIconoBotonFiltrado(n) {
    cambiarIconoBotonFiltradoBis(document.getElementById('botonFiltrado'), n);
    cambiarIconoBotonFiltradoBis(document.getElementById('botonFiltrado1'), n);
}

function cambiarIconoBotonFiltradoBis(b, n) {
    const icono = b.querySelector('i');
    if (n == 1) {
        if (icono.classList.contains('bi-funnel')) {
            icono.classList.remove('bi-funnel');
            icono.classList.add('bi-funnel-fill');
        }
    } else {
        if (icono.classList.contains('bi-funnel-fill')) {
            icono.classList.remove('bi-funnel-fill');
            icono.classList.add('bi-funnel');
        }
    }
}

function predGrupoContactos(n) {
	const predItemGrupo 	= dataGruposContactos.find(item => item.numGrupo === n && item.predeterminado === 1);
	const numElementoPred 	= predItemGrupo ? predItemGrupo.numElemento : null;
	return numElementoPred;
}
// fin código para modal de filtros contactos


// código para exportación contactos
function titColtabImport (t) {
	// Crea un objeto con los campos y títulos correspondientes
	const columnas = {
	    name: 'Nombre',
	    email: 'E-mail',
	    phone1: 'Teléfono 1',
	    phone2: 'Teléfono 2',
	    company: 'Empresa',
	    notes: 'Notas'
	};
	// Recorre el objeto para actualizar los títulos de las columnas
	Object.entries(columnas).forEach(([field, title]) => {
	    $("#" + t).bootstrapTable('updateColumnTitle', {
	        field: field,
	        title: tExp(title, '')
	    });
	});
}

// Carga de librerías
function isCssLoaded(lib) {
    return Array.from(document.styleSheets).some(sheet => sheet.href === lib.url);
}

function isJsLoaded(lib) {
    return Array.from(document.scripts).some(script => script.src === lib.url);
}

async function cargarLibCss(lib) {
    if (isCssLoaded(lib)) {
        console.log(`CSS ya cargado: ${lib.url}`);
        return true;
    }
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = lib.url;

        if (lib.integrity) link.integrity = lib.integrity;
        if (lib.crossorigin) link.crossOrigin = lib.crossorigin;

        link.onload = () => resolve(true);
        link.onerror = () => reject(`Error cargando CSS: ${lib.url}`);
        document.head.appendChild(link);
    });
}

async function cargarLibJs(lib) {
    if (isJsLoaded(lib)) {
        console.log(`JS ya cargado: ${lib.url}`);
        return true;
    }
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = lib.url;
        script.defer = true;

        if (lib.integrity) script.integrity = lib.integrity;
        if (lib.crossorigin) script.crossOrigin = lib.crossorigin;

        script.onload = () => resolve(true);
        script.onerror = () => reject(`Error cargando JS: ${lib.url}`);
        document.body.appendChild(script);
    });
}

function mccCorregirLocaleBootstrapTableItaliano() {
    if (typeof $ === 'undefined' || !$.fn || !$.fn.bootstrapTable || !$.fn.bootstrapTable.locales) return;
    const localeIt = $.fn.bootstrapTable.locales['it-IT'];
    if (!localeIt) return;
    localeIt.formatCopyRows = () => 'Copia righe';
    localeIt.formatPrint = () => 'Stampa';
    localeIt.formatFilterControlSwitch = () => 'Mostra/nascondi controlli';
    localeIt.formatFilterControlSwitchHide = () => 'Nascondi controlli';
    localeIt.formatFilterControlSwitchShow = () => 'Mostra controlli';
}

function mccCorregirLocaleBootstrapTableAleman() {
    if (typeof $ === 'undefined' || !$.fn || !$.fn.bootstrapTable || !$.fn.bootstrapTable.locales) return;
    const localeDe = $.fn.bootstrapTable.locales['de-DE'] || $.fn.bootstrapTable.locales.de;
    if (!localeDe) return;
    localeDe.formatShowingRows = (von, bis, gesamt, ungefiltert) => {
        const text = `Zeilen ${von} bis ${bis} von ${gesamt}`;
        return ungefiltert !== undefined && ungefiltert > gesamt
            ? `${text} (gefiltert aus ${ungefiltert})`
            : text;
    };
    localeDe.formatDetailPagination = (gesamt) => `${gesamt} ${gesamt === 1 ? 'Zeile' : 'Zeilen'}`;
    localeDe.formatRecordsPerPage = (anzahl) => `${anzahl} Zeilen pro Seite`;
    localeDe.formatClearSearch = () => 'Filter löschen';
}

function mccCorregirLocaleBootstrapTableCatala() {
    if (typeof $ === 'undefined' || !$.fn || !$.fn.bootstrapTable || !$.fn.bootstrapTable.locales) return;
    const localeCa = $.fn.bootstrapTable.locales['ca-ES'] || $.fn.bootstrapTable.locales.ca;
    if (!localeCa) return;
    localeCa.formatShowingRows = (inici, fi, total, senseFiltrar) => {
        const text = `Files ${inici} a ${fi} de ${total}`;
        return senseFiltrar !== undefined && senseFiltrar > total
            ? `${text} (filtrades de ${senseFiltrar})`
            : text;
    };
    localeCa.formatDetailPagination = (total) => `${total} ${total === 1 ? 'fila' : 'files'}`;
    localeCa.formatRecordsPerPage = (quantitat) => `${quantitat} files per pàgina`;
    localeCa.formatClearSearch = () => 'Neteja el filtre';
}

function mccCorregirLocaleBootstrapTableGalego() {
    if (typeof $ === 'undefined' || !$.fn || !$.fn.bootstrapTable || !$.fn.bootstrapTable.locales) return;
    const localeGl = Object.assign({}, $.fn.bootstrapTable.locales['es-ES'] || $.fn.bootstrapTable.locales.es || {}, {
        formatCopyRows: () => 'Copiar filas',
        formatPrint: () => 'Imprimir',
        formatLoadingMessage: () => 'A cargar, agarda un momento',
        formatRecordsPerPage: (cantidade) => `${cantidade} filas por páxina`,
        formatShowingRows: (inicio, fin, total, senFiltrar) => {
            const text = `Filas ${inicio} a ${fin} de ${total}`;
            return senFiltrar !== undefined && senFiltrar > total
                ? `${text} (filtradas de ${senFiltrar})`
                : text;
        },
        formatSRPaginationPreText: () => 'Páxina anterior',
        formatSRPaginationPageText: (paxina) => `Ir á páxina ${paxina}`,
        formatSRPaginationNextText: () => 'Páxina seguinte',
        formatDetailPagination: (total) => `${total} ${total === 1 ? 'fila' : 'filas'}`,
        formatClearSearch: () => 'Limpar a busca',
        formatSearch: () => 'Buscar',
        formatNoMatches: () => 'Non se atoparon resultados',
        formatPaginationSwitch: () => 'Ocultar ou mostrar a paxinación',
        formatPaginationSwitchDown: () => 'Mostrar a paxinación',
        formatPaginationSwitchUp: () => 'Ocultar a paxinación',
        formatRefresh: () => 'Actualizar',
        formatToggleOn: () => 'Mostrar a vista de tarxeta',
        formatToggleOff: () => 'Ocultar a vista de tarxeta',
        formatColumns: () => 'Columnas',
        formatColumnsToggleAll: () => 'Alternar todas',
        formatFullscreen: () => 'Pantalla completa',
        formatAllRows: () => 'Todas',
        formatAutoRefresh: () => 'Actualización automática',
        formatExport: () => 'Exportar os datos',
        formatJumpTo: () => 'Ir',
        formatAdvancedSearch: () => 'Busca avanzada',
        formatAdvancedCloseButton: () => 'Pechar',
        formatFilterControlSwitch: () => 'Ocultar ou mostrar os controis',
        formatFilterControlSwitchHide: () => 'Ocultar os controis',
        formatFilterControlSwitchShow: () => 'Mostrar os controis',
        formatAddLevel: () => 'Engadir nivel',
        formatCancel: () => 'Cancelar',
        formatColumn: () => 'Columna',
        formatDeleteLevel: () => 'Eliminar nivel',
        formatDuplicateAlertTitle: () => 'Atopáronse entradas duplicadas!',
        formatDuplicateAlertDescription: () => 'Elimina ou modifica as columnas duplicadas',
        formatMultipleSort: () => 'Ordenación múltiple',
        formatOrder: () => 'Orde',
        formatSort: () => 'Ordenar',
        formatSortBy: () => 'Ordenar por',
        formatThenBy: () => 'despois por',
        formatSortOrders: () => ({ asc: 'Ascendente', desc: 'Descendente' })
    });
    $.fn.bootstrapTable.locales['gl-ES'] = localeGl;
    $.fn.bootstrapTable.locales.gl = localeGl;
    Object.assign($.fn.bootstrapTable.defaults, localeGl);
}

async function libsTablas() {
    if (libsCargadas) {
        document.body.classList.remove('loading');
        document.getElementById('spinnerPrincipal').style.display = 'none';
        return true;
    } else {
        try {
            // Cargar las librerías CSS en paralelo
            const cssPromises = libCss.map(cargarLibCss);
            await Promise.all(cssPromises);          

            // Cargar las librerías JS secuencialmente
            for (const lib1 of libJs) {
                await cargarLibJs(lib1);
            }

            // Cargar las librerías restantes secuencialmente
            for (const lib2 of libResto) {
                await cargarLibJs(lib2);
            }

            mccCorregirLocaleBootstrapTableItaliano();
            mccCorregirLocaleBootstrapTableAleman();
            mccCorregirLocaleBootstrapTableCatala();

            libsCargadas = true;
            document.body.classList.remove('loading');
            document.getElementById('spinnerPrincipal').style.display = 'none';
            return true;
        } catch (error) {
            console.log('Error en la carga de uno o más recursos:', error);
            return false;
        }
    }
}
// Fin Carga de librerías



async function opPrincipalNoMenu(s) {
    await libsTablas();
    cambioDiv('', s, 0, 0);
}


function iniFullalendar(s) {
	localStorage.setItem('vistaIni', s); 
	localStorage.setItem('codContactoNlistadoEventos', ''); 
	nombrePersonaContacto = ''; 
	setTimeout(function() {
		cambioDiv('menu', 'eventos', 0, 0);
	}, 500);	
}


function ocultarModal(s) {
	var modalElement = document.getElementById(s);
	var myModalInstance = bootstrap.Modal.getInstance(modalElement);
	if (myModalInstance) {
	    // Oculta el modal
	    myModalInstance.hide();
	}	
}


function txtFinPrueba1() {
	let id = localStorage.getItem('idiomaPais');
	switch (id.substring(0, 2)) {
		case 'es':
			return "Tu productividad merece más";
			break;
		case 'fr':
			return "Votre productivité mérite plus";
			break;
		case 'it':
			return "La tua produttività merita di più";
			break;
		case 'de':
			return "Ihre Produktivität verdient mehr";
			break;
		case 'pt':
			return "Sua produtividade merece mais";
			break;
		case 'ca':
			return "La teva productivitat mereix més";
			break;
		case 'gl':
			return "A túa produtividade merece máis";
			break; 
		default: // en
			return "Your productivity deserves more";
	}    
}

function txtFinPrueba2() {
	let id = localStorage.getItem('idiomaPais');
	switch (id.substring(0, 2)) {
		case 'es':
			return "Simplifica la gestión de tus contactos, interacciones, documentos y eventos";
			break;
		case 'fr':
			return "Simplifiez la gestion de vos contacts, interactions, documents et événements";
			break;
		case 'it':
			return "Semplifica la gestione dei tuoi contatti, interazioni, documenti ed eventi";
			break;
		case 'de':
			return "Vereinfachen Sie die Verwaltung Ihrer Kontakte, Interaktionen, Dokumente und Termine";
			break;
		case 'pt':
			return "Simplifique a gestão dos seus contatos, interações, documentos e eventos";
			break;
		case 'ca':
			return "Simplifica la gestió dels teus contactes, interaccions, documents i esdeveniments";
			break;
		case 'gl':
			return "Simplifica a xestión dos teus contactos, interaccións, documentos e eventos";
			break; 
		default: // en
			return "Simplify the management of your contacts, interactions, documents, and events";
	}    
}




function actualizarEstadoPlanMenu() {
    const promocionMenu = document.getElementById("promocion");
    const filaPruebasMenu = document.getElementById("filaPruebas");
    const colPruebas1Menu = document.getElementById("colPruebas1");
    const colPruebas2Menu = document.getElementById("colPruebas2");
    const colPruebas2Contenedor = colPruebas2Menu ? colPruebas2Menu.closest(".col-12") : null;
    const eSus = localStorage.getItem("estadoSuscripcion");

    if (promocionMenu && !promocionMenu.classList.contains("d-none")) {
        promocionMenu.classList.add("d-none");
    }
    if (!filaPruebasMenu || !colPruebas1Menu || !colPruebas2Menu) return;

    function mostrarSugerenciaPlan(mostrar) {
        if (colPruebas2Contenedor) colPruebas2Contenedor.classList.toggle("d-none", !mostrar);
        colPruebas2Menu.style.display = mostrar ? "block" : "none";
    }

    if (localStorage.getItem("rolUsuario") !== "owner") {
        filaPruebasMenu.classList.add("d-none");
        mostrarSugerenciaPlan(false);
        return;
    }

    if ((eSus == "trialing") || (eSus == "probando")) {
        filaPruebasMenu.classList.remove("d-none");
        mostrarSugerenciaPlan(true);
        if (localStorage.getItem("pruebaCancelada") == "0") {
            colPruebas1Menu.innerHTML = fColPruebas1();
        } else {
            colPruebas1Menu.innerHTML = fColPruebas3();
        }
        txtSug1();
    } else if ((eSus == "canceled") || (eSus == "cancelado")) {
        filaPruebasMenu.classList.remove("d-none");
        mostrarSugerenciaPlan(true);
        colPruebas1Menu.innerHTML = fColPruebas4();
        txtSug1();
    } else if (eSus == "active") {
        filaPruebasMenu.classList.remove("d-none");
        mostrarSugerenciaPlan(false);
        colPruebas1Menu.innerHTML = fColPlanActivo();
    } else {
        filaPruebasMenu.classList.add("d-none");
        mostrarSugerenciaPlan(false);
    }
}

function fColPlanActivo() {
    const plan = nombrePlanActivo();
    let id = localStorage.getItem("idiomaPais") || "en";
    let etiqueta = "";
    switch (id.substring(0, 2)) {
        case "es":
            etiqueta = "Plan activo: ";
            break;
        case "fr":
            etiqueta = "Plan actif : ";
            break;
        case "it":
            etiqueta = "Piano attivo: ";
            break;
        case "de":
            etiqueta = "Aktiver Plan: ";
            break;
        case "pt":
            etiqueta = "Plano ativo: ";
            break;
        case "ca":
            etiqueta = "Pla actiu: ";
            break;
        case "gl":
            etiqueta = "Plan activo: ";
            break;
        default:
            etiqueta = "Active plan: ";
    }
    return etiqueta + '<span class="text-dark fw-bold">' + escaparHTMLImpresion(plan) + '</span>';
}

function nombrePlanActivo() {
    let plan = (localStorage.getItem("plan") || "").trim();
    if (!plan || plan == "0") return "PRO";
    if (plan.toUpperCase().startsWith("PRO")) return plan.toUpperCase();
    return "PRO " + plan;
}

function valorDiasRestantesHTML(d) {
	return '<span class="text-dark fw-bold">' + escaparHTMLImpresion(String(d)) + '</span>';
}

function fColPruebas1() {
	let id 	= localStorage.getItem('idiomaPais');
	let d = 0;
	if (localStorage.getItem('estadoSuscripcion') == 'probando') {
		d 	= parseInt(localStorage.getItem('diasPruebaRestantes'), 10);
	} else { // estado 'trialing'
		d 	= parseInt(localStorage.getItem('diasPruebaRestantes'), 10) + 1;	
	}
	if (d >= 1) {
		switch (id.substring(0, 2)) {
			case 'es':
				return "En periodo de prueba. Días restantes: " + valorDiasRestantesHTML(d);
				break;
			case 'fr':
				return "En période d'essai. Jours restants : " + valorDiasRestantesHTML(d);
				break;
			case 'it':
				return "In periodo di prova. Giorni rimanenti: " + valorDiasRestantesHTML(d);
				break;
			case 'de':
				return "Testphase. Verbleibende Tage: " + valorDiasRestantesHTML(d);
				break;
			case 'pt':
				return "Em período de teste. Dias restantes: " + valorDiasRestantesHTML(d);
				break;
			case 'ca':
				return "En període de prova. Dies restants: " + valorDiasRestantesHTML(d);
				break;
			case 'gl':
				return "En período de proba. Días restantes: " + valorDiasRestantesHTML(d);
				break; 
			default: // en
				return "In trial period. Days remaining: " + valorDiasRestantesHTML(d);
		} 
	} 
   
}



function fColPruebas3() {
	let id 	= localStorage.getItem('idiomaPais');
	let d 	= parseInt(localStorage.getItem('diasPruebaRestantes'), 10) + 1;
	switch (id.substring(0, 2)) {
		case 'es':
			return "Prueba cancelada. Días restantes: " + valorDiasRestantesHTML(d);
			break;
		case 'fr':
			return "Essai annulé. Jours restants : " + valorDiasRestantesHTML(d);
			break;
		case 'it':
			return "Prova annullata. Giorni rimanenti: " + valorDiasRestantesHTML(d);
			break;
		case 'de':
			return "Testphase gekündigt. Verbleibende Tage: " + valorDiasRestantesHTML(d);
			break;
		case 'pt':
			return "Prova cancelada. Dias restantes: " + valorDiasRestantesHTML(d);
			break;
		case 'ca':
			return "Prova cancel·lada. Dies restants: " + valorDiasRestantesHTML(d);
			break;
		case 'gl':
			return "Proba cancelada. Días restantes: " + valorDiasRestantesHTML(d);
			break; 
		default: // en
			return "Trial canceled. Days remaining: " + valorDiasRestantesHTML(d);
	}    
}

function fColPruebas4() {
	let id 	= localStorage.getItem('idiomaPais');
	switch (id.substring(0, 2)) {
		case 'es':
			return 'Prueba finalizada. <a href="javascript:void(0);" onclick="opPrincipal(10);">Consulta los Planes PRO</a>';
			break;
		case 'fr':
			return 'Essai terminé. <a href="javascript:void(0);" onclick="opPrincipal(10);">Consultez les Plans PRO</a>';
			break;
		case 'it':
			return 'Prova terminata. <a href="javascript:void(0);" onclick="opPrincipal(10);">Consulta i Piani PRO</a>';
			break;
		case 'de':
			return 'Test abgeschlossen. <a href="javascript:void(0);" onclick="opPrincipal(10);">Schauen Sie sich die PRO-Pläne an</a>';
			break;
		case 'pt':
			return 'Teste concluído. <a href="javascript:void(0);" onclick="opPrincipal(10);">Consulte os Planos PRO</a>';
			break;
		case 'ca':
			return 'Prova finalitzada. <a href="javascript:void(0);" onclick="opPrincipal(10);">Consulta els Plans PRO</a>';
			break;
		case 'gl':
			return 'Proba finalizada. <a href="javascript:void(0);" onclick="opPrincipal(10);">Consulta os Plans PRO</a>';
			break; 
		default: // en
			return 'Trial completed. <a href="javascript:void(0);" onclick="opPrincipal(10);">Check out the PRO Plans</a>';
	}    
}






function txtSug1() {
	let id = localStorage.getItem('idiomaPais');
	switch (id.substring(0, 2)) {
		case 'es':
			sug11.innerText = "Sugerencia";
			sug12.innerText = "Importa tus contactos de";
			sug13.innerText = "y";
			sug14.innerText = "haciendo clic sobre";
			sug15.innerText = "Importar";
			break;
		case 'fr':
			sug11.innerText = "Suggestion";
			sug12.innerText = "Importez vos contacts depuis";
			sug13.innerText = "et";
			sug14.innerText = "en cliquant sur";
			sug15.innerText = "Importer";
			break;
		case 'it':
			sug11.innerText = "Suggerimento";
			sug12.innerText = "Importa i tuoi contatti da";
			sug13.innerText = "e";
				sug14.innerText = "facendo clic su";
			sug15.innerText = "Importa";
			break;
		case 'de':
			sug11.innerText = "Tipp";
			sug12.innerText = "Importieren Sie Ihre Kontakte aus";
			sug13.innerText = "und";
			sug14.innerText = "über die Schaltfläche";
			sug15.innerText = "Importieren";
			break;
		case 'pt':
			sug11.innerText = "Sugestão";
			if ((id == 'pt-BR') || (id == 'pt-br')) {
				sug12.innerText = "Importe seus contatos de";
			} else {				
				sug12.innerText = "Importe seus contactos de";
			}
			sug13.innerText = "e";
			sug14.innerText = "clicando em";
			sug15.innerText = "Importar";
			break;
		case 'ca':
			sug11.innerText = "Suggeriment";
			sug12.innerText = "Importa els teus contactes de";
			sug13.innerText = "i";
			sug14.innerText = "mitjançant el botó";
			sug15.innerText = "Importar";
			break;
		case 'gl':
			sug11.innerText = "Suxestión";
			sug12.innerText = "Importa os teus contactos de";
			sug13.innerText = "e";
			sug14.innerText = "mediante o botón";
			sug15.innerText = "Importar";
			break; 
		default: // en
			sug11.innerText = "Suggestion";
			sug12.innerText = "Import your contacts from";
			sug13.innerText = "and";
			sug14.innerText = "by clicking on";
			sug15.innerText = "Import";
	}
}


function txtPruebas5() {
	let id = localStorage.getItem('idiomaPais');
	switch (id.substring(0, 2)) {
		case 'es':
			return "Prueba activada";
			break;
		case 'fr':
			return "Essai activé";
			break;
		case 'it':
			return "Prova attivata";
			break;
		case 'de':
			return "Testphase aktiviert";
			break;
		case 'pt':
			return "Prova ativada";
			break;
		case 'ca':
			return "Prova activada";
			break;
		case 'gl':
			return "Proba activada";
			break; 
		default: // en
			return "Trial activated";
	}   
}


function txtPagosPendientes() {
	let id = localStorage.getItem('idiomaPais');
	switch (id.substring(0, 2)) {
		case 'es':
			return "Resuelve los pagos pendientes (botón 'Suscripción')";
			break;
		case 'fr':
			return "Résolvez les paiements en attente (bouton 'Abonnement')";
			break;
		case 'it':
			return "Risolvi i pagamenti in sospeso (pulsante 'Abbonamento')";
			break;
		case 'de':
			return "Begleichen Sie ausstehende Zahlungen (Schaltfläche 'Abonnement')";
			break;
		case 'pt':
			return "Resolva os pagamentos pendentes (botão 'Assinatura')";
			break;
		case 'ca':
			return "Resol els pagaments pendents (botó 'Subscripció')";
			break;
		case 'gl':
			return "Resolve os pagos pendentes (botón 'Subscrición')";
			break; 
		default: // en
			return "Resolve pending payments (button 'Subscription')";
	}   
}

function txtSuscripcionNuevoPlan() {
	let id = localStorage.getItem('idiomaPais');
	switch (id.substring(0, 2)) {
		case 'es':
			return "Suscríbete a un nuevo plan (botón 'Planes PRO')";
			break;
		case 'fr':
			return "Abonnez-vous à un nouveau plan (bouton 'Plans PRO')";
			break;
		case 'it':
			return "Abbonati a un nuovo piano (pulsante 'Piani PRO')";
			break;
		case 'de':
			return "Wählen Sie einen neuen Plan (Schaltfläche 'PRO-Pläne')";
			break;
		case 'pt':
			return "Assine um novo plano (botão 'Planos PRO')";
			break;
		case 'ca':
			return "Subscriu-te a un nou pla (botó 'Plans PRO')";
			break;
		case 'gl':
			return "Subscríbete a un novo plan (botón 'Plans PRO')";
			break; 
		default: // en
			return "Subscribe to a new plan (button 'PRO Plans')";
	}   
}

function txtCambiarPlan() {
	let id = localStorage.getItem('idiomaPais');
	switch (id.substring(0, 2)) {
		case 'es':
			return "Cambiar";
			break;
		case 'fr':
			return "Changer";
			break;
		case 'it':
			return "Cambiare";
			break;
		case 'de':
			return "Ändern";
			break;
		case 'pt':
			return "Mudar";
			break;
		case 'ca':
			return "Canviar";
			break;
		case 'gl':
			return "Cambiar";
			break; 
		default: // en
			return "Change";
	}   
}

function dEstSuscrip() {
	let e = localStorage.getItem('estadoSuscripcion');
	let c = localStorage.getItem('pruebaCancelada');
	if ( ((e == 'trialing') && (c == '0')) || ((e == 'probando') && (c == '0')) || (e == 'active') || (e == '') )  {
		return true;
	} else if ((e == 'canceled') || (e == 'cancelado')) {
		//modMsj('principal001', 'My Contacts Cloud', txtSuscripcionNuevoPlan(), msjModPrincipal, false);
		modMsjFinPruebaToast('principal002', 'My Contacts Cloud', txtFinPrueba1(), txtFinPrueba2());
		return false;
	} else if ((e == 'past_due') || (e == 'unpaid')) {
		
		return false;		
	} else {
		return false;
	}
}



function txtPlanCambiado() {
	let id = localStorage.getItem('idiomaPais');
	switch (id.substring(0, 2)) {
		case 'es':
			return "Plan cambiado";
			break;
		case 'fr':
			return "Plan changé";
			break;
		case 'it':
			return "Piano cambiato";
			break;
		case 'de':
			return "Plan geändert";
			break;
		case 'pt':
			return "Plano mudado";
			break;
		case 'ca':
			return "Pla canviat";
			break;
		case 'gl':
			return "Plan cambiado";
			break; 
		default: // en
			return "Changed plan";
	}   
}


function txtCambiarPlanAhora() {
	let id = localStorage.getItem('idiomaPais');
	switch (id.substring(0, 2)) {
		case 'es':
			return "Cambiar plan";
			break;
		case 'fr':
			return "Changer de plan";
			break;
		case 'it':
			return "Cambia piano";
			break;
		case 'de':
			return "Plan ändern";
			break;
		case 'pt':
			return "Mudar de plano";
			break;
		case 'ca':
			return "Canviar pla";
			break;
		case 'gl':
			return "Cambiar plan";
			break; 
		default: // en
			return "Change plan";
	}   
}

function txtProbarPlanAhora() {
	let id = localStorage.getItem('idiomaPais');
	switch (id.substring(0, 2)) {
		case 'es':
			return "Probar plan";
			break;
		case 'fr':
			return "Essayer un plan";
			break;
		case 'it':
			return "Prova un piano";
			break;
		case 'de':
			return "Plan ausprobieren";
			break;
		case 'pt':
			return "Experimentar plano";
			break;
		case 'ca':
			return "Provar pla";
			break;
		case 'gl':
			return "Probar plan";
			break; 
		default: // en
			return "Try plan";
	}   
}



function bPlanStripe(p) {
    let sus = localStorage.getItem('estadoSuscripcion');
    if (sus == '')  {
      	nuevaSesionStripe(p, 0);
    } else if ((sus == 'canceled') || (sus == 'cancelado') || (sus == 'probando')) {
      	nuevaSesionStripe(p, 1);
    } else if (sus == 'trialing') {
    	mostrarModal(txtCambiarPlan(), function() { cambiarPlanEnStripe(p); });
    } else {
      	abrirPortalStripe();
    }
}


function autorizacionContactosGoogleMicrosoft(t) {
  let id = localStorage.getItem('idiomaPais');
  switch (id.substring(0, 2)) {
    case 'es':
      return "My Contacts Cloud solicita tu permiso para ver y descargar tus contactos de " + t + ". Visualizaremos los datos en una tabla para que selecciones los contactos que desees importar.";
    case 'fr':
      return "My Contacts Cloud vous demande la permission de consulter et télécharger vos contacts " + t + ". Nous afficherons les données dans un tableau pour que vous puissiez sélectionner les contacts que vous souhaitez importer.";
    case 'it':
      return "My Contacts Cloud richiede il tuo consenso per accedere ai contatti " + t + " e importarli. I dati verranno mostrati in una tabella, così potrai selezionare i contatti da importare.";
    case 'de':
      return "My Contacts Cloud bittet um Ihre Erlaubnis, Ihre " + t + "-Kontakte anzuzeigen und zu importieren. Die Daten werden in einer Tabelle angezeigt, damit Sie die gewünschten Kontakte auswählen können.";
    case 'pt':
      return "O My Contacts Cloud solicita sua permissão para ver e baixar seus contatos do " + t + ". Exibiremos os dados em uma tabela para que você possa selecionar os contatos que deseja importar.";
    case 'ca':
      return "My Contacts Cloud sol·licita el teu permís per veure i descarregar els teus contactes de " + t + ". Mostrarem les dades en una taula perquè puguis seleccionar els contactes que vulguis importar.";
    case 'gl':
      return "My Contacts Cloud solicita o teu permiso para ver e descargar os teus contactos de " + t + ". Amosaremos os datos nunha táboa para que poidas seleccionar os contactos que desexes importar.";
    default: // en
      return "My Contacts Cloud requests your permission to view and download your " + t + " contacts. We will display the data in a table so you can select the contacts you wish to import.";
  }  
}



function txtContrasenaIncorrecta() {
	let id = localStorage.getItem('idiomaPais');
	switch (id.substring(0, 2)) {
		case 'es':
			return "Contraseña incorrecta";
			break;
		case 'fr':
			return "Mot de passe incorrect";
			break;
		case 'it':
			return "Password errata";
			break;
		case 'de':
			return "Falsches Passwort";
			break;
		case 'pt':
			return "Senha incorreta";
			break;
		case 'ca':
			return "Contrasenya incorrecta";
			break;
		case 'gl':
			return "Contrasinal incorrecto";
			break; 
		default: // en
			return "Incorrect password";
	}   
}


// Guardar configuración de columnas en localStorage
function saveColumnConfig(s) {
    const tableOptions = $('#' + s).bootstrapTable('getOptions');
    const visibleFields = $('#' + s).bootstrapTable('getVisibleColumns').map(col => col.field);

    // Obtener la configuración actual de columnas
    const columnConfig = tableOptions.columns[0].map((col, index) => ({
        field: col.field,
        visible: visibleFields.includes(col.field), // Visibilidad de la columna
        order: index, // Índice actual de la columna
    }));

    // Guardar la columna y el orden de ordenación actual
    const sortConfig = {
        sortName: tableOptions.sortName, // Columna actual de ordenación
        sortOrder: tableOptions.sortOrder // Dirección de orden (asc o desc)
    };

    // Guardar todo en localStorage
    localStorage.setItem('tableColumnConfig_' + s, JSON.stringify(columnConfig));
    localStorage.setItem('tableSortConfig_' + s, JSON.stringify(sortConfig));
}

// Cargar la configuración de columnas guardada
function loadColumnConfig(s) {
    const columnConfigStr = localStorage.getItem('tableColumnConfig_' + s);
    const sortConfigStr = localStorage.getItem('tableSortConfig_' + s);

    if (columnConfigStr && sortConfigStr) {
        const columnConfig = JSON.parse(columnConfigStr);
        const sortConfig = JSON.parse(sortConfigStr);

        // Ordenar las columnas según la configuración guardada
        columnConfig.sort((a, b) => a.order - b.order);

        // Aplicar visibilidad de columnas
        columnConfig.forEach(colConfig => {
            if (colConfig.visible) {
                $('#' + s).bootstrapTable('showColumn', colConfig.field);
            } else {
                $('#' + s).bootstrapTable('hideColumn', colConfig.field);
            }
        });

        // Aplicar nuevo orden de columnas
        const fieldsOrder = columnConfig.map(col => col.field);
        const currentColumns = $('#' + s).bootstrapTable('getOptions').columns[0];

        $('#' + s).bootstrapTable('refreshOptions', {
            columns: currentColumns.sort((a, b) => fieldsOrder.indexOf(a.field) - fieldsOrder.indexOf(b.field)),
            sortName: sortConfig.sortName, // Restaurar columna de ordenación
            sortOrder: sortConfig.sortOrder // Restaurar dirección de ordenación
        });
    }
}


function camposSummernote() {
	$('#pr1_contactos').summernote('code', pr1_contactos.defaultValue);
	$('#pr2_contactos').summernote('code', pr2_contactos.defaultValue);
	$('#pr3_contactos').summernote('code', pr3_contactos.defaultValue);
	$('#pr4_contactos').summernote('code', pr4_contactos.defaultValue);
	$('#pr5_contactos').summernote('code', pr5_contactos.defaultValue);
	$('#pr6_contactos').summernote('code', pr6_contactos.defaultValue);
	$('#noa_contactos').summernote('code', noa_contactos.defaultValue);
}	


function fuentesSummernoteGmail() {
	return [
		'Sans Serif',
		'Serif',
		'Fixed Width',
		'Wide',
		'Narrow',
		'Comic Sans MS',
		'Garamond',
		'Georgia',
		'Tahoma',
		'Trebuchet MS',
		'Verdana',
	];
}


function fijarFuenteSummernoteSansSerif(elemento) {
	var $editor = $(elemento).siblings('.note-editor');
	if (!$editor.length) {
		return;
	}

	$editor.find('.note-editable').css('font-family', 'sans-serif');

	var actualizarEtiquetaFuente = function() {
		$editor.find('.note-current-fontname').each(function() {
			var valor = (this.textContent || '').trim().toLowerCase();
			if (!valor || valor === 'arial' || valor === 'sans-serif') {
				this.textContent = 'Sans Serif';
			}
		});
	};

	actualizarEtiquetaFuente();
	$editor.off('.mccSummernoteFont').on('click.mccSummernoteFont keyup.mccSummernoteFont mouseup.mccSummernoteFont', actualizarEtiquetaFuente);

	var fuenteActual = $editor.find('.note-current-fontname')[0];
	if (fuenteActual && window.MutationObserver && !fuenteActual._mccSummernoteFontObserver) {
		var observer = new MutationObserver(actualizarEtiquetaFuente);
		observer.observe(fuenteActual, { childList: true, characterData: true, subtree: true });
		fuenteActual._mccSummernoteFontObserver = observer;
	}
}


function quitarBotonesSummernoteNoPermitidos(elemento) {
	var $editor = $(elemento).siblings('.note-editor');
	if (!$editor.length) {
		return;
	}

	var selectores = [
		'button[data-event="showVideoDialog"]',
		'button[data-event="codeview"]',
		'button[aria-label="Video"]',
		'button[aria-label="Code View"]',
		'button[title="Video"]',
		'button[title="Code View"]',
		'button[data-original-title="Video"]',
		'button[data-original-title="Code View"]',
	].join(',');

	$editor.find(selectores).each(function() {
		var $grupo = $(this).closest('.note-btn-group');
		$(this).remove();
		if ($grupo.length && !$grupo.find('button').length) {
			$grupo.remove();
		}
	});
}


function limitarFuentesSummernotePermitidas(elemento) {
	var $editor = $(elemento).siblings('.note-editor');
	if (!$editor.length) {
		return;
	}

	var fuentesPermitidas = {};
	fuentesSummernoteGmail().forEach(function(fuente) {
		fuentesPermitidas[fuente.toLowerCase()] = true;
	});

	$editor.find('.note-fontname .dropdown-menu').children().each(function() {
		var $opcion = $(this);
		var texto = ($opcion.text() || '').replace(/\s+/g, ' ').trim();
		var valor = ($opcion.attr('data-value') || $opcion.data('value') || texto || '').toString().replace(/\s+/g, ' ').trim();
		if (texto && !fuentesPermitidas[texto.toLowerCase()] && !fuentesPermitidas[valor.toLowerCase()]) {
			$opcion.remove();
		}
	});
}


function normalizarSummernoteMcc(elemento) {
	fijarFuenteSummernoteSansSerif(elemento);
	quitarBotonesSummernoteNoPermitidos(elemento);
	limitarFuentesSummernotePermitidas(elemento);
}


function opcionesSummernoteContactos() {
	var fuentes = fuentesSummernoteGmail();
	return {
		toolbar: [
			['style', ['style']],
			['font', ['bold', 'underline', 'clear']],
			['fontname', ['fontname']],
			['color', ['color']],
			['para', ['ul', 'ol', 'paragraph']],
			['table', ['table']],
			['insert', ['link', 'picture']],
			['view', ['fullscreen', 'help']],
		],
		fontNames: fuentes,
		fontNamesIgnoreCheck: fuentes,
		callbacks: {
			onInit: function() {
				normalizarSummernoteMcc(this);
			},
			onFocus: function() {
				normalizarSummernoteMcc(this);
			},
		},
	};
}


function exportarTabla(tabla, nomFichero, tituloNomTabla, pagOrientacion, formato) {

	if (!dEstSuscrip()) {return false;}

    nomFichero       = tExp(nomFichero, '');
    tituloNomTabla   = tExp(tituloNomTabla, '');

    var $table = $('#' + tabla);
    
    // Crear copia de los datos y columnas a ignorar
    var columnasAIgnorar = [];
    var columnas = $table.bootstrapTable('getOptions').columns[0];
    
    // Recorrer las columnas y verificar si se deben ignorar
    for (var i = 0; i < columnas.length; i++) {
        if (!columnas[i].visible || columnas[i].forceHide || columnas[i].printIgnore) {
            columnasAIgnorar.push(columnas[i].field);
        }
    }

    // Obtener los datos de la tabla
    var data = $table.bootstrapTable('getData');
    
    // Crear una copia de los datos con las transformaciones necesarias
    var dataFormateada = data.map(function(row) {
        // Crear una copia del objeto fila
        var newRow = { ...row };

        // Aplicar formateo personalizado solo en las columnas específicas
        if (tabla == 'tabContactos') {
	        if (newRow.rol !== undefined) {
	            newRow.rol = tExp(aRol[newRow.rol - 1], ''); 
	        } 
	        if (newRow.eg1 !== undefined) {
	            newRow.eg1 = elementoGrupoFormat(newRow.eg1);
	        } 
	        if (newRow.eg2 !== undefined) {
	            newRow.eg2 = elementoGrupoFormat(newRow.eg2);
	        } 
	        if (newRow.eg3 !== undefined) {
	            newRow.eg3 = elementoGrupoFormat(newRow.eg3);
	        } 
	        if (newRow.alt !== undefined) {
	            newRow.alt = formatoFecha(newRow.alt);
	        } 
	        if (newRow.ani !== undefined) {
	            newRow.ani = formatoFecha(newRow.ani);
	        } 
	        if (newRow.fin !== undefined) {
	            newRow.fin = formatoFecha(newRow.fin);
	        } 
	        if (newRow.ffi !== undefined) {
	            newRow.ffi = formatoFecha(newRow.ffi);
	        }
	        newRow.eti = etiFormatPrint(newRow.et1, newRow.et2, newRow.et3);
        } else if (tabla == 'tabInteracciones') {
	        if (newRow.tipi !== undefined) {
	            newRow.tipi = tExp(aTipoInteraccion[newRow.tipi - 1], ''); 
	        } 
	        if (newRow.etai !== undefined) {
	            newRow.etai = tExp(aEtapaInteraccion[newRow.etai - 1], ''); 
	        } 
	        if (newRow.resi !== undefined) {
	            newRow.resi = tExp(aResultadoInteraccion[newRow.resi - 1], ''); 
	        } 
	        if (newRow.peni !== undefined) {
	            newRow.peni = tExp(aAccionInteraccion[newRow.peni - 1], ''); 
	        } 
	        if (newRow.fhii !== undefined) {
            	newRow.fhii = formatoFechaHoraInternacional(newRow.fhii);
        	} 
        	if (newRow.reci !== undefined) {
            	newRow.reci = formatoFechaHoraInternacional(newRow.reci);
        	}
		} else if (tabla == 'tabRecordatorios') {    
		   	if (newRow.recr !== undefined) {
            	newRow.recr = formatoFechaHoraInternacional(newRow.recr);
        	}
	        if (newRow.penr !== undefined) {
	            newRow.penr = tExp(aAccionInteraccion[newRow.penr - 1], ''); 
	        } 
        }

        if (newRow.fec !== undefined) {
            newRow.fec = formatoFecha(newRow.fec); // Formatear 'fec'
        }  

        return newRow;
    });

    // Filtrar las columnas visibles
    var columnasVisibles = columnas.filter(col => col.visible && !columnasAIgnorar.includes(col.field));
    
    // Obtener los headers (títulos de las columnas) para la exportación
    var headers = columnasVisibles.map(col => col.title);

    switch (formato) {
        case 'pdf':
            exportarTablaPDF(nomFichero, tituloNomTabla, pagOrientacion, columnasAIgnorar, columnasVisibles, dataFormateada);
            break;
        case 'xlsx':
        case 'csv':
        case 'txt':
        case 'ods':
        case 'xml':
            exportarConSheetJS(dataFormateada, columnasVisibles, headers, nomFichero, formato);
            break;
        case 'json':   
        	exportarJson(dataFormateada, columnasVisibles, headers, nomFichero);
        	break;
        case 'html':
            exportarTablaHTML(dataFormateada, columnasVisibles, headers, nomFichero);
            break;
        case 'sql':
            exportarTablaSQL(dataFormateada, columnasVisibles, headers, nomFichero);
            break;
        default:
            console.error('Formato no soportado: ' + formato);
    }
}







// ✅ Función inteligente para guardar archivos según plataforma
function exportarArchivoSmart(blob, nombreArchivo) {
    const esAppWKWebView =
        typeof window.webkit !== "undefined" &&
        window.webkit.messageHandlers &&
        typeof window.webkit.messageHandlers.fileExportHandler === "object";

    const esMovil = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const esAndroid = /Android/i.test(navigator.userAgent);
    const tieneShareAPI = navigator.share && navigator.canShare;

    if (esAppWKWebView) {
        console.log("📡 Estoy en app Mac o iOS con WKWebView – enviando a Swift vía base64");

        const reader = new FileReader();
        reader.onloadend = function () {
            const base64 = reader.result.split(',')[1];
            if (base64) {
                try {
                    window.webkit.messageHandlers.fileExportHandler.postMessage({
                        filename: nombreArchivo,
                        base64: base64
                    });
                    console.log("✅ Archivo enviado correctamente a Swift");
                } catch (err) {
                    console.log("❌ Error enviando a Swift: " + err);
                }
            } else {
                console.log("⚠️ Base64 vacío o incorrecto");
            }
        };
        reader.readAsDataURL(blob);
        return;
    }

    if (esMovil && tieneShareAPI && !esAndroid) {
        alert("📤 Usando navigator.share en iOS móvil");

        try {
            const archivo = new File([blob], nombreArchivo, { type: blob.type || "application/octet-stream" });

            if (navigator.canShare({ files: [archivo] })) {
                navigator.share({
                    title: "Exportar archivo",
                    files: [archivo],
                }).catch(err => alert("⚠️ Compartir cancelado o falló: " + err));
                return;
            }
        } catch (err) {
            alert("⚠️ navigator.share falló: " + err);
        }
    }

    alert("💾 Guardando archivo con FileSaver.js: " + nombreArchivo);
    saveAs(blob, nombreArchivo);
}



// ✅ Exportar a PDF
function exportarTablaPDF(nomFichero, tituloNomTabla, pagOrientacion, columnasAIgnorar, columnasVisibles, data) {
    const jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF(pagOrientacion, 'pt', formatoPapel());

    var fecha1 = obtenerFechaActual();
    var fecha = formatoFecha(fecha1);

    doc.setFontSize(12);
    doc.text(tituloNomTabla, 40, 40);
    doc.text(fecha, 500, 40);

    var filas = data.map(row => columnasVisibles.map(col => limpiarHtml(row[col.field])));

    doc.autoTable({
        head: [columnasVisibles.map(col => col.title)],
        body: filas,
        startY: 60,
        margin: { top: 50 },
        styles: { fontSize: 10, cellPadding: 5 },
        theme: 'grid',
        headStyles: { fillColor: [0, 123, 255], textColor: [255, 255, 255] },
        alternateRowStyles: { fillColor: [245, 245, 245] }
    });

    var totalPages = doc.internal.getNumberOfPages();
    for (var i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.text(`${i} / ${totalPages}`, doc.internal.pageSize.getWidth() - 60, doc.internal.pageSize.getHeight() - 10);
    }

    const arrayBuffer = doc.output('arraybuffer');
    const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
    exportarArchivoSmart(blob, nomFichero + '.pdf');

    setTimeout(() => {
        window.close();
    }, 1500);    
}

// ✅ Exportar con SheetJS (XLSX, CSV...)
function exportarConSheetJS(data, columnasVisibles, headers, nomFichero, formato) {
    var ws_data = [headers];
    data.forEach(row => {
        var rowData = columnasVisibles.map(col => row[col.field]);
        ws_data.push(rowData);
    });

    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, nomFichero);

    var wbout = XLSX.write(wb, { bookType: formato, type: 'array' });
    var blob = new Blob([wbout], { type: "application/octet-stream" });

    // ✅ Guardar usando lógica inteligente sin ventana secundaria
    exportarArchivoSmart(blob, nomFichero + '.' + formato);
}



// ✅ Exportar a HTML
function exportarTablaHTML(data, columnasVisibles, headers, nomFichero) {
    var html = '<table><thead><tr>';
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += '</tr></thead><tbody>';

    data.forEach(row => {
        html += '<tr>';
        columnasVisibles.forEach(col => {
            html += `<td>${row[col.field]}</td>`;
        });
        html += '</tr>';
    });
    html += '</tbody></table>';

    var blob = new Blob([html], { type: 'text/html' });
    exportarArchivoSmart(blob, nomFichero + '.html');
    setTimeout(() => {
        window.close();
    }, 1500);    
}

// ✅ Exportar a SQL
function exportarTablaSQL(data, columnasVisibles, headers, nomFichero) {
    var sql = `CREATE TABLE ${nomFichero} (${headers.join(', ')});
`;
    data.forEach(row => {
        var values = columnasVisibles.map(col => `'${row[col.field]}'`).join(', ');
        sql += `INSERT INTO ${nomFichero} (${headers.join(', ')}) VALUES (${values});
`;
    });

    var blob = new Blob([sql], { type: 'text/sql' });
    exportarArchivoSmart(blob, nomFichero + '.sql');
    setTimeout(() => {
        window.close();
    }, 1500);    
}

// ✅ Exportar a JSON
function exportarJson(data, columnasVisibles, headers, nomFichero) {
    var dataFormateadaConHeaders = data.map(function(row) {
        var newRow = {};
        columnasVisibles.forEach(function(col, index) {
            newRow[headers[index]] = row[col.field];
        });
        return newRow;
    });

    var jsonData = JSON.stringify(dataFormateadaConHeaders, null, 2);
    var blob = new Blob([jsonData], { type: 'application/json' });
    exportarArchivoSmart(blob, nomFichero + '.json');
    setTimeout(() => {
        window.close();
    }, 1500);    
}











function obtenerFechaActual() {
    var fecha = new Date();

    var year = fecha.getFullYear();
    var month = ('0' + (fecha.getMonth() + 1)).slice(-2); // Mes con 2 dígitos
    var day = ('0' + fecha.getDate()).slice(-2);           // Día con 2 dígitos

    return year + '-' + month + '-' + day;
}

function escaparHTMLImpresion(valor) {
    return String(valor ?? '').replace(/[&<>"']/g, function (caracter) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[caracter];
    });
}

// Función para limpiar HTML en celdas (opcional)
function limpiarHtml(html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

function imprimirCalendarioEventos() {
    var calendarEl = document.getElementById('calendario_eventos');
    if (!calendarEl) {
        window.print();
        return;
    }

    var titulo = calendarEl.querySelector('.fc-toolbar-title')?.textContent || tExp('Eventos', '');
    var fecha = formatoFecha(obtenerFechaActual());
    var copia = calendarEl.cloneNode(true);

    copia.querySelectorAll('button, .fc-button, .fc-toolbar-chunk:nth-child(1), .fc-toolbar-chunk:nth-child(3), .fc-popover, .popover, .tooltip').forEach(function (el) {
        el.remove();
    });
    copia.querySelectorAll('[aria-describedby]').forEach(function (el) {
        el.removeAttribute('aria-describedby');
    });

    var html = `
    <html>
    <head>
        <title>${escaparHTMLImpresion(titulo)}</title>
        <style>
            @page {
                size: landscape;
                margin: 12mm;
            }
            * {
                box-sizing: border-box;
            }
            body {
                font-family: Arial, sans-serif;
                font-size: 12px;
                color: #222;
                margin: 0;
                background: #fff;
            }
            .print-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
                margin-bottom: 12px;
                font-size: 13px;
            }
            .print-title {
                font-size: 18px;
                font-weight: bold;
            }
            #calendario_eventos {
                max-width: none;
                margin: 0;
                background: #fff;
            }
            .fc {
                width: 100%;
            }
            .fc-toolbar {
                display: flex;
                justify-content: center;
                margin-bottom: 10px;
            }
            .fc-toolbar-title {
                font-size: 18px;
                font-weight: bold;
                text-align: center;
            }
            .fc-button,
            .print-hide {
                display: none !important;
            }
            table {
                width: 100%;
                border-collapse: collapse;
            }
            .fc-scrollgrid,
            .fc-scrollgrid table,
            .fc-theme-standard td,
            .fc-theme-standard th,
            .fc td,
            .fc th {
                border: 1px solid #cfcfcf;
            }
            .fc-col-header-cell,
            .fc-list-day-cushion {
                background: #f2f2f2;
                font-weight: bold;
            }
            th,
            td {
                vertical-align: top;
                padding: 4px;
            }
            a {
                color: inherit;
                text-decoration: none;
            }
            .fc-daygrid-day-frame {
                min-height: 78px;
            }
            .fc-daygrid-day-number {
                float: right;
                font-weight: bold;
                color: #333;
            }
            .fc-event {
                border-radius: 2px;
                margin: 1px 0;
                padding: 1px 3px;
                color: #fff;
                break-inside: avoid;
                page-break-inside: avoid;
            }
            .fc-event-title,
            .fc-event-time,
            .fc-list-event-title,
            .fc-list-event-time {
                font-size: 10px;
            }
            .fc-list-table td {
                padding: 6px;
            }
            .fc-timegrid-slot {
                height: 18px;
            }
        </style>
    </head>
    <body>
        <div class="print-header">
            <span class="print-title">${escaparHTMLImpresion(titulo)}</span>
            <span>${escaparHTMLImpresion(fecha)}</span>
        </div>
        ${copia.outerHTML}
    </body>
    </html>`;

    var esAppWKWebView =
        typeof window.webkit !== "undefined" &&
        window.webkit.messageHandlers &&
        typeof window.webkit.messageHandlers.printHandler === "object";

    if (esAppWKWebView) {
        try {
            window.webkit.messageHandlers.printHandler.postMessage({
                html: html,
                title: titulo,
                orientation: "landscape"
            });
            return;
        } catch (err) {
            console.log("Error enviando calendario a Swift para imprimir: " + err);
        }
    }

    var ancho = Math.min(window.innerWidth, 1200);
    var alto = Math.min(window.innerHeight, 800);
    var ventanaImpresion = window.open('', '', `width=${ancho},height=${alto},resizable=yes`);
    if (!ventanaImpresion) {
        window.print();
        return;
    }

    ventanaImpresion.document.write(html);
    ventanaImpresion.document.close();
    ventanaImpresion.onload = function () {
        ventanaImpresion.focus();
        ventanaImpresion.print();
        ventanaImpresion.close();
    };
}

function formatoPapel() {
    let id = localStorage.getItem('idiomaPais');
    switch (id) {
        // Estados Unidos
        case 'en-us':
        case 'en-US':
        case 'es-us':
        case 'es-US':
        
        // Canadá (se usa Letter tanto en inglés como en francés)
        case 'en-ca':
        case 'en-CA':
        case 'fr-ca':
        case 'fr-CA':
        
        // México
        case 'es-mx':
        case 'es-MX':
        
        // Chile
        case 'es-cl':
        case 'es-CL':
        
        // Colombia
        case 'es-co':
        case 'es-CO':
        
        // Filipinas (Letter es más común, aunque A4 está presente)
        case 'en-ph':
        case 'en-PH':
        case 'fil-ph':
        case 'fil-PH':
        
        // Panamá (predomina Letter en muchos contextos profesionales)
        case 'es-pa':
        case 'es-PA':
        
        // República Dominicana (similar a otros países de Centroamérica)
        case 'es-do':
        case 'es-DO':
        
        // Venezuela (usa Letter principalmente, pero A4 también en algunos casos)
        case 'es-ve':
        case 'es-VE':
        
        // Costa Rica
        case 'es-cr':
        case 'es-CR':
        
        // Guatemala
        case 'es-gt':
        case 'es-GT':
        
        // El Salvador
        case 'es-sv':
        case 'es-SV':
        
        // Nicaragua
        case 'es-ni':
        case 'es-NI':
        
        // Honduras
        case 'es-hn':
        case 'es-HN':
        
        // Puerto Rico (territorio de EE.UU., formato Letter es el estándar)
        case 'es-pr':
        case 'es-PR':
        
            return 'letter';
            break;
        
        default:
            // Para todos los demás casos, usar A4
            return 'a4';
    }
}



function imprimirTabla(tabla, tituloNomTabla, pagOrientacion) {
	if (!dEstSuscrip()) {return false;}

    tituloNomTabla  = tExp(tituloNomTabla, '');
    var fecha1 	= obtenerFechaActual();
    var fecha 	= formatoFecha(fecha1);    
    var $table      = $('#' + tabla);
    // Crear copia de los datos y columnas a ignorar
    var columnasAIgnorar = [];
    var columnas = $table.bootstrapTable('getOptions').columns[0];
    
    // Recorrer las columnas y verificar si se deben ignorar
    for (var i = 0; i < columnas.length; i++) {
        if (!columnas[i].visible || columnas[i].forceHide || columnas[i].printIgnore) {
            columnasAIgnorar.push(columnas[i].field);
        }
    }

    // Obtener los datos de la tabla
    var data = $table.bootstrapTable('getData');

    // Crear una copia de los datos con las transformaciones necesarias
    var dataFormateada = data.map(function(row) {
        var newRow = { ...row };

        if (tabla == 'tabContactos') {
	        if (newRow.rol !== undefined) {
	            newRow.rol = tExp(aRol[newRow.rol - 1], ''); 
	        } 
	        if (newRow.eg1 !== undefined) {
	            newRow.eg1 = elementoGrupoFormat(newRow.eg1);
	        } 
	        if (newRow.eg2 !== undefined) {
	            newRow.eg2 = elementoGrupoFormat(newRow.eg2);
	        } 
	        if (newRow.eg3 !== undefined) {
	            newRow.eg3 = elementoGrupoFormat(newRow.eg3);
	        } 
	        if (newRow.alt !== undefined) {
	            newRow.alt = formatoFecha(newRow.alt);
	        } 
	        if (newRow.ani !== undefined) {
	            newRow.ani = formatoFecha(newRow.ani);
	        } 
	        if (newRow.fin !== undefined) {
	            newRow.fin = formatoFecha(newRow.fin);
	        } 
	        if (newRow.ffi !== undefined) {
	            newRow.ffi = formatoFecha(newRow.ffi);
	        }   
			newRow.eti = etiFormatPrint(newRow.et1, newRow.et2, newRow.et3);	             	
        } else if (tabla == 'tabInteracciones') {
	        if (newRow.tipi !== undefined) {
	            newRow.tipi = tExp(aTipoInteraccion[newRow.tipi - 1], ''); 
	        } 
	        if (newRow.etai !== undefined) {
	            newRow.etai = tExp(aEtapaInteraccion[newRow.etai - 1], ''); 
	        } 
	        if (newRow.resi !== undefined) {
	            newRow.resi = tExp(aResultadoInteraccion[newRow.resi - 1], ''); 
	        } 
	        if (newRow.peni !== undefined) {
	            newRow.peni = tExp(aAccionInteraccion[newRow.peni - 1], ''); 
	        } 
	        if (newRow.fhii !== undefined) {
            	newRow.fhii = formatoFechaHoraInternacional(newRow.fhii);
        	} 
        	if (newRow.reci !== undefined) {
            	newRow.reci = formatoFechaHoraInternacional(newRow.reci);
        	}
		} else if (tabla == 'tabRecordatorios') {    
		   	if (newRow.recr !== undefined) {
            	newRow.recr = formatoFechaHoraInternacional(newRow.recr);
        	}
	        if (newRow.penr !== undefined) {
	            newRow.penr = tExp(aAccionInteraccion[newRow.penr - 1], ''); 
	        }         	
        }

        if (newRow.fec !== undefined) {
            newRow.fec = formatoFecha(newRow.fec);
        }

        return newRow;
    });

    // Filtrar las columnas visibles
    var columnasVisibles = columnas.filter(col => col.visible && !columnasAIgnorar.includes(col.field));

    // Crear la tabla HTML con estilos
    var html = `
    <html>
    <head>
    	<title>IMPRESION_AUTOMATICA</title>
        <style>
            @media print {
                @page {
                    size: ${pagOrientacion}; /* portrait o landscape */
                    margin: 20mm;
                }
            }
            body {
                font-family: Arial, sans-serif;
                font-size: 14px; /* Tamaño de letra general */
                margin: 20px;
            }
            table {
                border-collapse: collapse;
                width: 100%;
                margin-top: 20px;
                font-size: 12px; /* Tamaño de letra de la tabla */
            }
            table, th, td {
                border: 1px solid #dddddd;
            }
            th, td {
                padding: 8px;
                text-align: left;
            }
            th {
                background-color: #f2f2f2;
                font-weight: bold;
                text-align: center;
            }
            tr:nth-child(even) {
                background-color: #f9f9f9;
            }
            tr:hover {
                background-color: #f1f1f1;
            }
            h2 {
                text-align: center;
                font-size: 18px; /* Tamaño de letra del título */
            }
            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                font-size: 16px; /* Tamaño de letra del encabezado */
            }
            .header-title {
                font-weight: bold;
                text-align: left;
            }
            .header-date {
                text-align: right;
                font-size: 14px; /* Tamaño de letra de la fecha */
                color: gray;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <span class="header-title">${tituloNomTabla}</span>
            <span class="header-date">${fecha}</span>
        </div>
        <table>
            <thead><tr>`;

    // Añadir títulos de las columnas
    columnasVisibles.forEach(col => {
        html += `<th>${col.title}</th>`;
    });

    html += '</tr></thead><tbody>';

    // Añadir filas de datos
    dataFormateada.forEach(row => {
        html += '<tr>';
        columnasVisibles.forEach(col => {
            html += `<td>${row[col.field]}</td>`;
        });
        html += '</tr>';
    });

    html += `
        </tbody>
        </table>
    </body>
    </html>`;

    var esAppWKWebView =
        typeof window.webkit !== "undefined" &&
        window.webkit.messageHandlers &&
        typeof window.webkit.messageHandlers.printHandler === "object";

    if (esAppWKWebView) {
        try {
            window.webkit.messageHandlers.printHandler.postMessage({
                html: html,
                title: tituloNomTabla,
                orientation: pagOrientacion
            });
            return;
        } catch (err) {
            console.log("Error enviando impresion a Swift: " + err);
        }
    }

    // Crear la ventana emergente para impresión
    
	var ancho = Math.min(window.innerWidth, 1200); // Máximo 1200px
	var alto = Math.min(window.innerHeight, 800); // Máximo 800px
	var ventanaImpresion = window.open('', '', `width=${ancho},height=${alto},resizable=yes`);
    ventanaImpresion.document.write(html);
    ventanaImpresion.document.close();

    // Esperar que el contenido esté completamente cargado antes de imprimir
    ventanaImpresion.onload = function () {
        ventanaImpresion.focus();
        ventanaImpresion.print();
        ventanaImpresion.close();
    };
}







function obtenerIndicePorId(tabla, campoId, valorId) {
    var data = $('#' + tabla).bootstrapTable('getData'); // Obtiene los datos de la tabla visible
    
    // Usamos findIndex para encontrar el índice directamente
    var indice = data.findIndex(function(row) {
        return row[campoId] === valorId;
    });

    return indice; // Devolvemos el índice de la fila o -1 si no se encontró
}



function irAPaginaConRegistro(tabla, indiceFila, nomClase, variableId, valorId) {
    var $table = $('#' + tabla);
    
    // Obtener las opciones de la tabla, como la paginación y el número de filas por página
    var opcionesTabla = $table.bootstrapTable('getOptions');
    var tamanoPagina = opcionesTabla.pageSize;  // Número de registros por página
    var paginaActual = opcionesTabla.pageNumber;  // Página que el usuario está visualizando

    // Calcular en qué página debería estar el nuevo registro según su índice
    var paginaNuevoRegistro = Math.ceil((indiceFila + 1) / tamanoPagina);  // Se suma 1 ya que los índices comienzan en 0

    // Verificar si la página del nuevo registro es diferente a la que el usuario está viendo
    if (paginaNuevoRegistro !== paginaActual) {
        // Cambiar a la página donde está el nuevo registro
        $table.bootstrapTable('selectPage', paginaNuevoRegistro);
    } else { // si es la misma página seleccionar fila
    	selRowTab(tabla, nomClase, variableId, valorId);
    }
}

function selRowTab(tabla, nomClase, variableId, valorId) {

	indiceFilaTab = -1;  // siempre conviene inicializar esta variable a -1

	let rowsWithSuccess = document.querySelectorAll('#' + tabla + ' tbody .' + nomClase);
    // Eliminamos la clase 'success' en una sola operación
    rowsWithSuccess.forEach(row => row.classList.remove(nomClase));
    window[variableId] = '';

    if  (valorId !== undefined && valorId !== null) {
		let rowElement = document.querySelector('#' + tabla + ' tbody tr[data-uniqueid="' + valorId + '"]');
		if (rowElement) {
			window[variableId] = valorId;
		    rowElement.classList.add(nomClase);
		}    	
    }
}


function crearEtiqueta(n, refContenedorEtiquetas) {
	const tagElement = createTagElement(n);
    refContenedorEtiquetas.appendChild(tagElement);
}

// Crear un elemento de etiqueta
function createTagElement(tagNum) {
	const elemento 	= dataEtiquetas.find(el => el.num == tagNum);
	const tagTexto 	= elemento.des;
	const tagColor 	= aColorFondoEvento[elemento.col - 1];

    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.style.backgroundColor = tagColor;
    tag.style.color = (tagColor === '#ffc107') ? 'black' : 'white'; // Texto negro para amarillo

    tag.style.marginRight 	= '10px';  // Espacio a la derecha
    tag.style.marginBottom 	= '10px'; // Espacio en la parte inferior (opcional, si son varias filas)

    // Añadir un atributo data-num para el identificador de la etiqueta
    tag.setAttribute('data-num', tagNum);

    // Crear el span con el texto de la etiqueta
    const tagText = document.createElement('span');
    tagText.textContent = tagTexto;

    // Evento para modificar la etiqueta al hacer clic en el texto
    //tag.onclick = function() {
        //toggleTag(tag);
    //};

    // Añadir texto y botón al contenedor de la etiqueta
    tag.appendChild(tagText);

    return tag;
}

function abrirModalTags(s) {
	// Seleccionamos las etiquetas del contenedor
	var selectedTags = '';

	if (s=='modalContacto') {
		etiSeleccionadasContacto = [];  // Creamos un array para almacenar los valores de las etiquetas
		selectedTags = document.querySelectorAll('#selectedTagsFichaContacto .tag');
		// Recorremos las etiquetas seleccionadas y obtenemos el valor de 'data-num'
		selectedTags.forEach(tag => {
		    const dataNum = tag.getAttribute('data-num');
		    etiSeleccionadasContacto.push(parseInt(dataNum)); // Añadimos el valor numérico al array
		});	
	} else if (s=='modalFiltroContactos') {
		etiSeleccionadasFiltro = [];
		selectedTags = document.querySelectorAll('#selectedTagsFiltro .tag');
		// Recorremos las etiquetas seleccionadas y obtenemos el valor de 'data-num'
		selectedTags.forEach(tag => {
		    const dataNum = tag.getAttribute('data-num');
		    etiSeleccionadasFiltro.push(parseInt(dataNum)); // Añadimos el valor numérico al array
		});	
	}

	abrirModalTagsDesde = s;

	
	// Selecciona el modal
    let m = new bootstrap.Modal(document.getElementById('tagModal'), {
        backdrop: 'false' // Para evitar que se cierre al hacer clic fuera
    });

	// Muestra el modal
	m.show(); 


	document.getElementById(abrirModalTagsDesde).classList.add('modal-open'); // Forzar para que el modal desde donde se llama permanezca visible
	document.body.classList.add('modal-open'); // Forzar que el body mantenga el estado de modales abiertos

    // Asegúrate de que el backdrop del segundo modal tiene la clase correcta
    const secondBackdrop = document.querySelector('.modal-backdrop');
    if (secondBackdrop) {
        secondBackdrop.classList.add('modal-backdrop-superior');
    }

    // Cambiar el z-index del segundo modal
    document.getElementById('tagModal').classList.add('modal-superior');

}

// Esta función se encargará de formatear la columna etiquetasOR para su uso en filtros
function contieneAlgunaEtiqueta(value, row, index) {
    // Definimos el array de etiquetas seleccionadas, este array debería ser accesible
    const etiquetasSeleccionadas = etiSeleccionadasFiltro;

    // Comprobamos si alguna de las etiquetas de la fila coincide con las seleccionadas
    const etiquetasFila = [row.et1, row.et2, row.et3];

    // Determinamos si la fila tiene alguna etiqueta seleccionada
    const tieneEtiqueta = etiquetasFila.some(etiqueta => etiquetasSeleccionadas.includes(etiqueta));

    // Podemos devolver un valor booleano que se usará para el filtrado
    return tieneEtiqueta;
}











    // Obtener color seleccionado
    function getSelectedColorTag() {
        const selectedRadio = document.querySelector('input[name="color"]:checked');
        const selectedValue = selectedRadio.value;
        return colorMapTag[selectedValue];
    }

    // Función para cargar etiquetas desde el servidor
    async function loadTagsFromServer() {
        const formData = new FormData();
        formData.append('prefijo', localStorage.getItem('prefijo'));

        const response = await fetch('https://' + window.location.host + '/leeretiquetas', {
            method: 'POST',
            body: formData
        });

        const tagsData = await response.json();
        
        const tagContainer = document.getElementById('tagContainerEtiquetas');
        tagContainer.innerHTML = ''; // Limpiar etiquetas existentes

        // Renderizar etiquetas obtenidas del servidor
        tagsData.forEach(tag => {
            const tagElement = createTagElementEtiquetas(tag.des, colorMapTag[tag.col], tag.num);
            tagContainer.appendChild(tagElement);
        });
    }

    // Función para añadir una etiqueta nueva
    async function addTag() {
        const tagInput = document.getElementById('tagInput');
        const tagValue = tagInput.value.trim();
        const tagContainer = document.getElementById('tagContainerEtiquetas');

        // Verificar si ya se alcanzó el límite de 100 etiquetas
        if (tagContainer.children.length >= MAX_TAGS_CREACION) {
            alert('No se pueden añadir más de 100 etiquetas.');
            return;
        }

        if (tagValue === '') return;

        // Crear un nuevo elemento de etiqueta
        //const newTag = createTagElementEtiquetas(tagValue, getSelectedColorTag());

        // Añadir la etiqueta al contenedor
        //tagContainer.appendChild(newTag);

        // Limpiar el input
        tagInput.value = '';

        // Lógica para enviar la nueva etiqueta al servidor
        await sendTagToServer(tagValue, getSelectedColorTag());

    }

    // Crear un elemento de etiqueta
    function createTagElementEtiquetas(tagValue, tagColor, tagNum = null) {
        const tag = document.createElement('div');
        tag.classList.add('tagEtiquetas');
        tag.style.backgroundColor = tagColor;
        tag.style.color = (tagColor === '#ffc107') ? 'black' : 'white'; // Texto negro para fondo amarillo

        // Añadir un atributo data-num para el identificador de la etiqueta
        if (tagNum) {
            tag.setAttribute('data-num', tagNum);
        }

        // Crear el span con el texto de la etiqueta
        const tagText = document.createElement('span');
        tagText.textContent = tagValue;

        // Crear botón de eliminar
        const removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.onclick = async function(event) {
            event.stopPropagation(); // Para evitar que se dispare el evento de editar
            await deleteTag(tagNum, tag); // Llamar a la función deleteTag
        };

        // Evento para modificar la etiqueta al hacer clic en el texto
        tag.onclick = function() {
            editTag(tagValue, tagColor, tagNum); // Editar usando el valor y color de la etiqueta
        };

        // Añadir texto y botón al contenedor de la etiqueta
        tag.appendChild(tagText);
        tag.appendChild(removeButton);

        return tag;
    }

    // Enviar la nueva etiqueta al servidor
    async function sendTagToServer(des, col) {
        const formData = new FormData();
        formData.append('prefijo', localStorage.getItem('prefijo'));
        formData.append('des', des);
        formData.append('col', Object.keys(colorMapTag).find(key => colorMapTag[key] === col));

        await fetch('https://' + window.location.host + '/nuevaetiqueta', {
            method: 'POST',
            body: formData
        });

        const tagContainer = document.getElementById('tagContainerEtiquetas');
        // Comprobar si se ha alcanzado el límite tras agregar
        checkMaxTags(tagContainer.children.length);

        await loadTagsFromServer(); // Recargar las etiquetas después de guardar

    }

    // Editar una etiqueta existente
    function editTag(tagValue, tagColor, tagNum) {
        // Colocar los valores en el input de edición
        document.getElementById('tagInput').value = tagValue;

        // Actualizar color seleccionado
        const selectedColorKey = Object.keys(colorMapTag).find(key => colorMapTag[key] === tagColor);
        document.getElementById(`color${selectedColorKey}_eventos`).checked = true;

        // Mostrar botones de guardar y cancelar
        document.getElementById('addButton').classList.add('hiddenEtiquetas');
        document.getElementById('saveButton').classList.remove('hiddenEtiquetas');
        document.getElementById('cancelButton').classList.remove('hiddenEtiquetas');

        // Guardar la etiqueta que se está editando
        editingTagId = tagNum;
    }

    // Guardar cambios en una etiqueta
    async function saveTag() {
        const tagInput = document.getElementById('tagInput');
        const tagValue = tagInput.value.trim();
        const tagColor = getSelectedColorTag();

        if (editingTagId) {
            // Actualizar la etiqueta en el servidor
            const formData = new FormData();
            formData.append('prefijo', localStorage.getItem('prefijo'));
            formData.append('num', editingTagId);
            formData.append('des', tagValue);
            formData.append('col', Object.keys(colorMapTag).find(key => colorMapTag[key] === tagColor));

            await fetch('https://' + window.location.host + '/cambiaretiqueta', {
                method: 'POST',
                body: formData
            });
        }

        // Cancelar la edición
        cancelTag();
        await loadTagsFromServer(); // Recargar las etiquetas después de guardar
    }

    // Cancelar la edición de una etiqueta
    function cancelTag() {
        document.getElementById('tagInput').value = '';
        document.getElementById('addButton').classList.remove('hiddenEtiquetas');
        document.getElementById('saveButton').classList.add('hiddenEtiquetas');
        document.getElementById('cancelButton').classList.add('hiddenEtiquetas');
        editingTagIndex = null;
        editingTagId = null;
    }

    // Función para eliminar la etiqueta
    function deleteTag(tagNum) {
        if (!tagNum) {
            console.error('No se pudo eliminar la etiqueta: Falta el identificador (num).');
            return;
        }

        const formData = new FormData();
        formData.append('prefijo', localStorage.getItem('prefijo'));
        formData.append('num', tagNum);
        async function datosDevueltos() {
            const response = await fetch('https://' + window.location.host + '/eliminaretiqueta', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            return data;
        }
        datosDevueltos().then((data) => {
            if (data.success) {
                if (data.data.value1 == 'OK') {
                    // Buscar el elemento en el DOM usando el atributo data-num
                    const tagElement = document.querySelector(`[data-num="${tagNum}"]`);
                    if (tagElement) {
                        tagElement.remove(); // Eliminar visualmente la etiqueta
                    }
                }
            } else {
                if (data.message == 'Etiqueta asignada') {
                    toastMsj(tExp('Etiqueta asignada a uno o más contactos', ''), msjEtiquetasContactos, 2000, 6, 7);
                } else {
                    toastMsj(data.message, msjEtiquetasContactos, 2000, 6, 8);    
                }
            }
        }).catch(error => {
            toastMsj(error.message, msjEtiquetasContactos, 2000, 6, 9);
        }) 
    }


    // Función para comprobar si se ha alcanzado el máximo de etiquetas
    function checkMaxTags(tagCount) {
        const addButton = document.getElementById('addButton');

        if (tagCount >= MAX_TAGS_CREACION) {
            addButton.disabled = true; // Desactivar el botón si ya hay 100 etiquetas
        } else {
            addButton.disabled = false; // Reactivar el botón si hay menos de 100
        }
    }

// código interacciones
function iniciarInteracciones() {

	window.idTabInteracciones 		= '';
	salirModalInteraccion 			= false;

	//pantallaCompletaIOS();

	var idio = localStorage.getItem('idiomaPais');

	indiceFilaTabInteracciones     = -1;
	refrescoTabInteracciones       = -1;
	iPosTabInteracciones           =  0;

    if ($("#tabInteracciones").data("bootstrap.table") || $("#tabInteracciones").closest(".bootstrap-table").length) {
        $("#tabInteracciones").bootstrapTable("destroy");
    }
    $("#tabInteracciones").bootstrapTable({
        locale: localeTable(idio),
        url: 'https://' + window.location.host + '/datosTablaInteraccionesContacto?prefijo=' + localStorage.getItem('prefijo') + '&codContactoN=' + window.idTabContactos,
        onClickRow: function (row, $element, field) {
            selRowTab('tabInteracciones', 'success3', 'idTabInteracciones', row.idii);
        },
        onSort: function (name, order) {
            setTimeout(function() {
                saveColumnConfig('tabInteracciones');
                seleccionarFilaTablaSiExiste('tabInteracciones', 'success3', 'idTabInteracciones', 'idii', 0);
            }, 500); 
        },
        onSearch: function (text) {
            seleccionarFilaTablaSiExiste('tabInteracciones', 'success3', 'idTabInteracciones', 'idii', 0);
        },   
        onPostBody: function () {
            // Detectar cambio vista tabla o tarjeta
            var vistaActTabInteracciones = $('#tabInteracciones').bootstrapTable('getOptions').cardView;
            if (vistaAntTabInteracciones !== vistaActTabInteracciones) {
                vistaAntTabInteracciones = vistaActTabInteracciones;
                setTimeout(function() {
                    seleccionarFilaTablaSiExiste('tabInteracciones', 'success3', 'idTabInteracciones', 'idii', 0, window.idTabInteracciones);
                }, 200);                
            }
        },
        onLoadSuccess: function () {
            var datosInteracciones = $("#tabInteracciones").bootstrapTable('getData');
            if (Array.isArray(datosInteracciones) && datosInteracciones.length > 0) {
	    	    $("#tabInteracciones").bootstrapTable('check', 0);
            }
	        seleccionarFilaTablaSiExiste('tabInteracciones', 'success3', 'idTabInteracciones', 'idii', 0);
        },
        columns: []
    }); 

    for (var i = 0; i < tabInteraccionesCampos.length; i++) {
        $("#tabInteracciones").bootstrapTable('updateColumnTitle', {
            field: tabInteraccionesCampos[i],
            title: dTitColInteracciones(idio, i)
        });
    }


    loadColumnConfig('tabInteracciones');

    // Aplicar el formateador a las columnas solo al cargar la tabla
    const columns = $('#tabInteracciones').bootstrapTable('getOptions').columns[0];
    columns.forEach(column => {
    	formatearColumna (column);
    });
    // Refrescar la tabla para reflejar los cambios
    $('#tabInteracciones').bootstrapTable('refreshOptions', { columns: columns });      

	crearToastInteraccion("Nueva interacción", "'modalInteraccion'", "'opcionInteraccion'");
	cambiarTextoIdioma('');
	crearEstilo('aceptar_interacciones', 'cancelar_interacciones', tExp('Guardar', ''), tExp ('Cancelar', ''));
	//cambioOrientacion();
	activarTooltipsDiv('interacciones');
	cambiarAltoTabla('tabInteracciones', 0);
	barraPaginacion('#tabInteracciones');
    abrirToast('liveToastInteraccion');

    //modalColTab('modalColTabInteracciones', coltabInteracciones, 'tabInteracciones'); 

    if (localStorage.getItem('divAnt') == 'contactos') { 
    	toastMsj(tExp('Interacciones con', '') + ' ' + nombrePersonaContacto, msjInteracciones, 1500, 5, 7); 
    } 

}

function detailFormatterTabInteracciones(index, row) {
	var lang 	= localStorage.getItem('idiomaPais');
	var html 	= [];
	$.each(row, function (key, value) {
		if ( (key == 'idii') || (key == 'idci') || !value || value == '') { }
		else {
			let a = '';
			let b = '';
			if (key == 'fhii')  { a = tExp('Fecha/hora', lang); 	b = formatoFechaHora(value); }
			if (key == 'tipi')  { a = tExp('Tipo', lang); 			b = tExp(aTipoInteraccion[value - 1], ''); }
			if (key == 'asui')  { a = tExp('Asunto', lang); 		b = value; }
			if (key == 'desi')  { a = tExp('Descripción', lang); 	b = value; }
			if (key == 'ncli')  { a = tExp('Notas cliente', lang); 	b = value; }
			if (key == 'etai')  { a = tExp('Etapa', lang); 			b = tExp(aEtapaInteraccion[value - 1], ''); }
			if (key == 'resi')  { a = tExp('Resultado', lang); 		b = tExp(aResultadoInteraccion[value - 1], ''); }
			if (key == 'peni')  { a = tExp('Acción Pendiente', lang); 		b = tExp(aAccionInteraccion[value - 1], ''); }
			if (key == 'reci')  { a = tExp('Recordatorio', lang); 	b = formatoFechaHora(value); }
			if (!(!b || b == '')) { html.push('<div><b>' + a + ':</b> ' + b + '</div>'); }
		}
	})
	return html.join('');
}  

function dTitColInteracciones(id, i) {
    switch (id) {
        case 'es-es':
        case 'es-ES':
            return tabInteraccionesTitCol_es_ES[i]; 
            break;
        case 'ca-es':
        case 'ca-ES':
            return tabInteraccionesTitCol_ca_ES[i];
            break;
        case 'eu-es':
        case 'eu-ES':
            return tabInteraccionesTitCol_eu_ES[i];
            break;
        case 'gl-es':
        case 'gl-ES':
            return tabInteraccionesTitCol_gl_ES[i];
            break;
        case 'en-gb':
        case 'en-GB':
            return tabInteraccionesTitCol_en_GB[i];
            break;
        case 'es-mx':
        case 'es-MX':
            return tabInteraccionesTitCol_es_MX[i];
            break;
        case 'es-cl':
        case 'es-CL':
            return tabInteraccionesTitCol_es_CL[i];
            break;
        case 'es-us':
        case 'es-US':
            return tabInteraccionesTitCol_es_US[i];
            break;
        case 'en-us':
        case 'en-US':
            return tabInteraccionesTitCol_en_US[i];
            break;
        case 'en-ca':
        case 'en-CA':
            return tabInteraccionesTitCol_en_CA[i];
            break;                                                              
        case 'en-au':
        case 'en-AU':
            return tabInteraccionesTitCol_en_AU[i];
            break;
        case 'it-it':
        case 'it-IT':
            return tabInteraccionesTitCol_it_IT[i];
            break;
        case 'pt-pt':
        case 'pt-PT':
            return tabInteraccionesTitCol_pt_PT[i];
            break;
        case 'pt-br':
        case 'pt-BR':
            return tabInteraccionesTitCol_pt_BR[i];
            break;
        case 'fr-fr':
        case 'fr-FR':
            return tabInteraccionesTitCol_fr_FR[i];
            break;
        case 'fr-ca':
        case 'fr-CA':
            return tabInteraccionesTitCol_fr_CA[i];
            break;                                                              
        case 'de-de':
        case 'de-DE':
            return tabInteraccionesTitCol_de_DE[i];
            break;
        case 'en-nz':
        case 'en-NZ':
            return tabInteraccionesTitCol_en_NZ[i];
            break;
        case 'en-ie':
        case 'en-IE':
            return tabInteraccionesTitCol_en_IE[i];
            break;
        case 'en-in':
        case 'en-IN':
            return tabInteraccionesTitCol_en_IN[i];
            break;
        case 'en-sg':
        case 'en-SG':
            return tabInteraccionesTitCol_en_SG[i];
            break;	 
        case 'en-hk':
        case 'en-HK':
            return tabInteraccionesTitCol_en_HK[i];
            break;
        case 'en-my':
        case 'en-MY':
            return tabInteraccionesTitCol_en_MY[i];
            break;
        case 'es-ar':
        case 'es-AR':
            return tabInteraccionesTitCol_es_AR[i];
            break;
        case 'es-co':
        case 'es-CO':
            return tabInteraccionesTitCol_es_CO[i];
            break;	
        case 'es-pe':
        case 'es-PE':
            return tabInteraccionesTitCol_es_PE[i];
            break;
        case 'es-uy':
        case 'es-UY':
            return tabInteraccionesTitCol_es_UY[i];
            break;
        case 'fr-be':
        case 'fr-BE':
            return tabInteraccionesTitCol_fr_BE[i];
            break;
        case 'fr-ch':
        case 'fr-CH':
            return tabInteraccionesTitCol_fr_CH[i];
            break;	
        case 'it-ch':
        case 'it-CH':
            return tabInteraccionesTitCol_it_CH[i];
            break;
        case 'de-at':
        case 'de-AT':
            return tabInteraccionesTitCol_de_AT[i];
            break;
        case 'de-be':
        case 'de-BE':
            return tabInteraccionesTitCol_de_BE[i];
            break;
        case 'de-ch':
        case 'de-CH':
            return tabInteraccionesTitCol_de_CH[i];
            break;	
        case 'es-ve':
        case 'es-VE':
            return tabInteraccionesTitCol_es_VE[i];
            break;
        case 'es-gt':
        case 'es-GT':
            return tabInteraccionesTitCol_es_GT[i];
            break;
        case 'es-ec':
        case 'es-EC':
            return tabInteraccionesTitCol_es_EC[i];
            break;
        case 'es-bo':
        case 'es-BO':
            return tabInteraccionesTitCol_es_BO[i];
            break;
        case 'es-cu':
        case 'es-CU':
            return tabInteraccionesTitCol_es_CU[i];
            break;
        case 'es-do':
        case 'es-DO':
            return tabInteraccionesTitCol_es_DO[i];
            break;  
        case 'es-hn':
        case 'es-HN':
            return tabInteraccionesTitCol_es_HN[i];
            break;
        case 'es-py':
        case 'es-PY':
            return tabInteraccionesTitCol_es_PY[i];
            break;
        case 'es-sv':
        case 'es-SV':
            return tabInteraccionesTitCol_es_SV[i];
            break;
        case 'es-ni':
        case 'es-NI':
            return tabInteraccionesTitCol_es_NI[i];
            break;
        case 'es-pa':
        case 'es-PA':
            return tabInteraccionesTitCol_es_PA[i];
            break;
        case 'en-pk':
        case 'en-PK':
            return tabInteraccionesTitCol_en_PK[i];
            break;
        case 'en-ng':
        case 'en-NG':
            return tabInteraccionesTitCol_en_NG[i];
            break;
        case 'en-bd':
        case 'en-BD':
            return tabInteraccionesTitCol_en_BD[i];
            break;
        case 'en-ph':
        case 'en-PH':
            return tabInteraccionesTitCol_en_PH[i];
            break;
        case 'en-tz':
        case 'en-TZ':
            return tabInteraccionesTitCol_en_TZ[i];
            break;
        case 'en-za':
        case 'en-ZA':
            return tabInteraccionesTitCol_en_ZA[i];
            break;
        case 'en-ke':
        case 'en-KE':
            return tabInteraccionesTitCol_en_KE[i];
            break;
        case 'en-ug':
        case 'en-UG':
            return tabInteraccionesTitCol_en_UG[i];
            break;
        case 'en-gh':
        case 'en-GH':
            return tabInteraccionesTitCol_en_GH[i];
            break;
        case 'en-mw':
        case 'en-MW':
            return tabInteraccionesTitCol_en_MW[i];
            break;
        case 'en-zm':
        case 'en-ZM':
            return tabInteraccionesTitCol_en_ZM[i];
            break;
        case 'en-zw':
        case 'en-ZW':
            return tabInteraccionesTitCol_en_ZW[i];
            break;
        case 'en-cm':
        case 'en-CM':
            return tabInteraccionesTitCol_en_CM[i];
            break;
        case 'en-lk':
        case 'en-LK':
            return tabInteraccionesTitCol_en_LK[i];
            break;
        case 'fr-cd':
        case 'fr-CD':
            return tabInteraccionesTitCol_fr_CD[i];
            break;
        case 'fr-cm':
        case 'fr-CM':
            return tabInteraccionesTitCol_fr_CM[i];
            break;
        case 'fr-mg':
        case 'fr-MG':
            return tabInteraccionesTitCol_fr_MG[i];
            break;
        case 'fr-ch':
        case 'fr-CH':
            return tabInteraccionesTitCol_fr_CH[i];
            break;
        case 'fr-ci':
        case 'fr-CI':
            return tabInteraccionesTitCol_fr_CI[i];
            break;
        case 'fr-bf':
        case 'fr-BF':
            return tabInteraccionesTitCol_fr_BF[i];
            break;
        case 'fr-be':
        case 'fr-BE':
            return tabInteraccionesTitCol_fr_BE[i];
            break;
        case 'fr-ne':
        case 'fr-NE':
            return tabInteraccionesTitCol_fr_NE[i];
            break;
        case 'fr-sn':
        case 'fr-SN':
            return tabInteraccionesTitCol_fr_SN[i];
            break;
        case 'fr-ml':
        case 'fr-ML':
            return tabInteraccionesTitCol_fr_ML[i];
            break;
        case 'fr-bj':
        case 'fr-BJ':
            return tabInteraccionesTitCol_fr_BJ[i];
            break;
        case 'fr-rw':
        case 'fr-RW':
            return tabInteraccionesTitCol_fr_RW[i];
            break;
        case 'fr-td':
        case 'fr-TD':
            return tabInteraccionesTitCol_fr_TD[i];
            break;
        case 'fr-gn':
        case 'fr-GN':
            return tabInteraccionesTitCol_fr_GN[i];
            break;                                
        case 'pt-ao':
        case 'pt-AO':
            return tabInteraccionesTitCol_pt_AO[i];
            break;
        case 'pt-mz':
        case 'pt-MZ':
            return tabInteraccionesTitCol_pt_MZ[i];
            break;
        default:
            return tabInteraccionesTitCol_en_US[i];
    }  		
}	

// fin código interacciones  




// código importar contactos Google
function iniciarImportarGoogle() {
	txtAutorizacionGoogle.innerText = autorizacionContactosGoogleMicrosoft('Google');
	cambiarTextoIdioma('');

	const botonAutorizar = document.getElementById('authorize_button');
	if (botonAutorizar) {
		botonAutorizar.style.display = 'block';
		botonAutorizar.onclick = importarContactosGoogle;
	}
}

async function importarContactosGoogle() {
	return mccRunExclusive('importarContactosGoogle', async () => {
		mccSetElementsDisabled(['authorize_button', 'importButtonGoogle'], true);
		try {
			const accessToken = await obtenerTokenGoogle(2);
			if (!accessToken) {
				alert(tExp("No se pudo obtener acceso a los contactos de Google", ""));
				return;
			}

			let allConnections = [];
			let nextPageToken = "";

			do {
				const params = new URLSearchParams({
					personFields: "names,emailAddresses,phoneNumbers,organizations,biographies",
					pageSize: "90"
				});
				if (nextPageToken) params.set("pageToken", nextPageToken);

				const response = await fetch(`https://people.googleapis.com/v1/people/me/connections?${params.toString()}`, {
					headers: {
						Authorization: `Bearer ${accessToken}`
					}
				});

				if (!response.ok) {
					throw new Error(`Error en People API: ${response.status} ${response.statusText}`);
				}

				const data = await response.json();
				if (Array.isArray(data.connections)) {
					allConnections = allConnections.concat(data.connections);
				}
				nextPageToken = data.nextPageToken || "";
			} while (nextPageToken);

			const tableData = allConnections.map(person => {
				const name = person.names && person.names.length > 0 ? person.names[0].displayName : '';
				const email = person.emailAddresses && person.emailAddresses.length > 0 ? person.emailAddresses[0].value : '';
				const phone1 = person.phoneNumbers && person.phoneNumbers.length > 0 ? person.phoneNumbers[0].value : '';
				const phone2 = person.phoneNumbers && person.phoneNumbers.length > 1 ? person.phoneNumbers[1].value : '';
				const company = person.organizations && person.organizations.length > 0 ? person.organizations[0].name : '';
				const notes = person.biographies && person.biographies.length > 0 ? person.biographies[0].value : '';
				return {
					state: false,
					name: name,
					email: email,
					phone1: phone1,
					phone2: phone2,
					company: company,
					notes: notes
				};
			});

			document.getElementById('filaAutorizacionGoogle').style.display = 'none';
			document.getElementById('filaGoogle').classList.remove('d-none');
			document.getElementById('filaGoogle').classList.add('d-flex');
			document.getElementById('divTablaGoogle').classList.remove('d-none');
			document.getElementById('divTablaGoogle').classList.add('d-flex');

			const lengLocal = localeTable(localStorage.getItem('idiomaPais'));
			$('#tabImportGoogle').bootstrapTable('destroy');
			$('#tabImportGoogle').bootstrapTable({
				data: tableData,
				locale: lengLocal
			});
			titColtabImport('tabImportGoogle');
			cambiarAltoTabla('tabImportGoogle', 20);
			barraPaginacion('#tabImportGoogle');
		} catch (error) {
			mccMostrarErrorImportacion(error, msjImportGoogle, "Error al importar los contactos desde Google");
		} finally {
			mccSetElementsDisabled(['authorize_button', 'importButtonGoogle'], false);
		}
	}, () => mccToastOperacionEnCurso(msjImportGoogle));
}
// fin código importar contactos Google


// código importar contactos Microsoft
function iniciarImportarMs() {
    let id = localStorage.getItem('idiomaPais');   
	cambiarTextoIdioma(id);
	txtAutorizacionMicrosoft.innerText = autorizacionContactosGoogleMicrosoft('Microsoft');
}


async function importarContactosMicrosoft() {
	return mccRunExclusive('importarContactosMicrosoft', async () => {
		mccSetElementsDisabled(['btnImportarContactosMs', 'importButtonMs'], true);
		try {
			const accessToken = await obtenerTokenMicrosoft(2);
			if (!accessToken) {
				alert(tExp("No se pudo obtener acceso a los contactos de Microsoft", ""));
				return;
			}

			let contacts = [];
			let nextPage = 'https://graph.microsoft.com/v1.0/me/contacts';

			while (nextPage) {
				const response = await fetch(nextPage, {
					headers: {
						'Authorization': `Bearer ${accessToken}`
					}
				});

				if (!response.ok) {
					throw new Error(`Error en la API de Microsoft Graph: ${response.statusText}`);
				}

				const data = await response.json();
				contacts = contacts.concat(data.value);

				nextPage = data['@odata.nextLink'] || null;
			}

			document.getElementById('filaAutorizacionMs').style.display = 'none';
			document.getElementById('filaMs').classList.remove('d-none');
			document.getElementById('filaMs').classList.add('d-flex');
			document.getElementById('divTablaMs').classList.remove('d-none');
			document.getElementById('divTablaMs').classList.add('d-flex');

			const tableData = contacts.map(contact => {
				let phones = [];
				if (contact.mobilePhone) phones.push(contact.mobilePhone);
				if (contact.businessPhones) phones.push(...contact.businessPhones);
				if (contact.homePhones) phones.push(...contact.homePhones);
				if (contact.otherPhones) phones.push(...contact.otherPhones);

				return {
					state: false,
					name: contact.displayName || '',
					email: contact.emailAddresses?.[0]?.address || '',
					phone1: phones[0] || '',
					phone2: phones[1] || '',
					company: contact.companyName || '',
					notes: contact.notes || ''
				};
			});

			const lengLocal = localeTable(localStorage.getItem('idiomaPais'));
			$('#tabImportMs').bootstrapTable('destroy');
			$('#tabImportMs').bootstrapTable({
				data: tableData,
				locale: lengLocal
			});

			titColtabImport('tabImportMs');
			cambiarAltoTabla('tabImportMs', 20);
			barraPaginacion('#tabImportMs');

		} catch (error) {
			mccMostrarErrorImportacion(error, msjImportMs, "Error al importar los contactos desde Microsoft");
		} finally {
			mccSetElementsDisabled(['btnImportarContactosMs', 'importButtonMs'], false);
		}
	}, () => mccToastOperacionEnCurso(msjImportMs));
}

// fin código importar contactos Microsoft




// código importar contactos Apple
function iniciarImportarApple() {
	cambiarTextoIdioma('');
}

function startAppleContactsImport() {
	return mccRunExclusive('startAppleContactsImport', async () => {
		mccSetElementsDisabled(['btnLeerContactosApple', 'appleEmail', 'appPassword', 'importButtonApple'], true);

		try {
			let formData1 = new FormData();
			formData1.append('email', document.getElementById("appleEmail").value.trim());
			formData1.append('appPassword', document.getElementById("appPassword").value.trim());

			const response = await fetch('https://' + window.location.host + '/leerContactosApple', {
				method: 'POST',
				body: formData1
			});

			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(errorText || 'ID de Apple o contraseña incorrecta');
			}

			const data1 = await response.json();
			if (!Array.isArray(data1)) {
				throw new Error('Respuesta no válida al leer contactos de Apple');
			}

			document.getElementById('filaAutorizacionApple').style.display = 'none';
			document.getElementById("filaApple").classList.remove("d-none");
			document.getElementById("filaApple").classList.add("d-flex");
			document.getElementById('divTablaApple').classList.remove('d-none');
			document.getElementById('divTablaApple').classList.add('d-flex');
			var lengLocal = localeTable(localStorage.getItem('idiomaPais'));
			$('#tabImportApple').bootstrapTable('destroy');
			$('#tabImportApple').bootstrapTable({
				data: data1,
				locale: lengLocal
			});
			titColtabImport('tabImportApple');
		} catch (error) {
			console.error("❌ Error al leer contactos de Apple:", error);
			toastMsj(tExp('ID de Apple o contraseña incorrecta', ''), msjImportApple, 2000, 6, 1);
		} finally {
			mccSetElementsDisabled(['btnLeerContactosApple', 'appleEmail', 'appPassword', 'importButtonApple'], false);
		}
	}, () => mccToastOperacionEnCurso(msjImportApple));
}
// fin código importar contactos Apple


// inicio código importar contactos Apple Device
function iniciarImportarAppleDevice() {
    var lengLocal = localeTable(localStorage.getItem('idiomaPais'));

    // 🔄 Destruir tabla existente para reinicializarla correctamente
    //$('#tabImportAppleDevice').bootstrapTable('destroy');

    // ✅ Inicializar con columnas (checkbox debe definirse explícitamente)


	$('#tabImportAppleDevice').bootstrapTable({
	    locale: lengLocal,
	    checkboxHeader: false,
	    pagination: true,
	    pageSize: 100000,
	    sidePagination: 'client',
	    search: true,
	    searchHighlight: true,
	    searchOnEnterKey: false,
	    searchSelector: '#buscar_importarappledevice',
	    columns: [
	        { field: 'state', checkbox: true },
	        { field: 'name', title: 'Nombre' },
	        { field: 'email', title: 'E-mail' },
	        { field: 'phone1', title: 'Teléfono 1' },
	        { field: 'phone2', title: 'Teléfono 2' },
	        { field: 'company', title: 'Empresa' },
	        { field: 'notes', title: 'Notas' }
	    ] 
	    //data: arrayContactosAppleDevice
	});

    // ✅ Actualizar títulos dinámicamente según idioma
    titColtabImport('tabImportAppleDevice');
    cambiarTextoIdioma('');


    $('#tabImportAppleDevice').bootstrapTable('load', arrayContactosAppleDevice);

    cambiarAltoTabla('tabImportAppleDevice', 20);
	barraPaginacion('#tabImportAppleDevice');
    
}


function solicitarContactosAppleDevice() {
    // Definir primero el handler de recepción
	window.recibirContactosDesdeApp = function(contactos) {
	    arrayContactosAppleDevice = contactos;

	    //arrayContactosAppleDevice.forEach(function(contacto, index) {
	        //let tipo = typeof contacto.state;
	        //alert('Contacto ' + index + ': state es de tipo ' + tipo);
	    //});

		opPrincipal(24);

	};


    // Luego enviar la solicitud
    if (
        window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.contactosHandler
    ) {
        window.webkit.messageHandlers.contactosHandler.postMessage("solicitar");
    } else {
        mostrarAvisoImportarAppleDeviceNoDisponible();
    }
}

function mostrarAvisoImportarAppleDeviceNoDisponible() {
    let host = document.getElementById('msjImportAppleDeviceModalHost');
    if (!host) {
        host = document.createElement('div');
        host.id = 'msjImportAppleDeviceModalHost';
        document.body.appendChild(host);
    }

    modal1(
        'My Contacts Cloud',
        tExp('Esta función está disponible en la app de macOS o iOS con permiso para acceder a Contactos.', ''),
        host
    );
}

function importSelectedAppleDevice() {

  if (!dEstSuscrip()) {return false;}

  const selectedContacts = $('#tabImportAppleDevice').bootstrapTable('getSelections');

  let formData2 = new FormData();
  formData2.append('prefijo',     localStorage.getItem('prefijo'));
  formData2.append('plan',        localStorage.getItem('plan'));
  formData2.append('maxRegFree',  localStorage.getItem('maxRegFree'));
  formData2.append('contImpor',   JSON.stringify(selectedContacts, null, 2));

  async function datosDevueltos() {
      const response = await fetch('https://' + window.location.host + '/importms', {
          method: 'POST',
          body: formData2
      });
      const data = await response.json();
      return data;
  }
  datosDevueltos().then((data) => {
      if (data.success) {
          mostrarResumenImportacionContactos(data, msjImportAppleDevice); 
      } else {
          if (data.message == "K1") {
              //modMsj(2, 'My Contacts Cloud', tExp('Te recomendamos adquirir un plan PRO para poder añadir más contactos', '') + '.<br><center><button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick="abrirModal1DesdeFicha(1)">Ver planes</button></center>', msjImportGoogle, false);
			  modMsjFinPruebaToast('import001', 'My Contacts Cloud', txtFinPrueba1(), txtFinPrueba2());
          } else if (data.message == "K2") {
              modMsj(2, 'My Contacts Cloud', tExp('Te recomendamos cambiar a un plan PRO superior para poder añadir más contactos', '') + '.<br><center><button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick="abrirModal1DesdeFicha(2)">Mi suscripción</button></center>', msjImportAppleDevice, false);
          } else {
              toastSelFila(tExp(data.message, ''), msjImportAppleDevice);
          }
      }
  }).catch(error => {
      toastSelFila(tExp(error.message, ''), msjImportAppleDevice);
  	//toastSelFila(tExp('ID de Apple o contraseña incorrecta', ''), msjImportAppleDevice);
  })

}

// fin código importar contactos Apple Device























// código recordatorios
function iniciarRecordatorios() {

	window.idTabRecordatorios 		= '';

	//pantallaCompletaIOS();

	var idio = localStorage.getItem('idiomaPais');

	indiceFilaTabRecordatorios     = -1;
	refrescoTabRecordatorios       = -1;
	iPosTabRecordatorios           =  0;

    if ($("#tabRecordatorios").data("bootstrap.table") || $("#tabRecordatorios").closest(".bootstrap-table").length) {
        $("#tabRecordatorios").bootstrapTable("destroy");
    }
    $("#tabRecordatorios").bootstrapTable({
        locale: localeTable(idio),
        url: 'https://' + window.location.host + '/datosTablaRecordatorios?prefijo=' + localStorage.getItem('prefijo'),
        onClickRow: function (row, $element, field) {
            selRowTab('tabRecordatorios', 'success4', 'idTabRecordatorios', row.idir);
        },
        onSort: function (name, order) {
            setTimeout(function() {
                seleccionarFilaTablaSiExiste('tabRecordatorios', 'success4', 'idTabRecordatorios', 'idir', 0);
            }, 500); 
        },
        onSearch: function (text) {
            seleccionarFilaTablaSiExiste('tabRecordatorios', 'success4', 'idTabRecordatorios', 'idir', 0);
        },   
        onPostBody: function () {
            // Detectar cambio vista tabla o tarjeta
            var vistaActTabRecordatorios = $('#tabRecordatorios').bootstrapTable('getOptions').cardView;
            if (vistaAntTabRecordatorios !== vistaActTabRecordatorios) {
                vistaAntTabRecordatorios = vistaActTabRecordatorios;
                setTimeout(function() {
                    seleccionarFilaTablaSiExiste('tabRecordatorios', 'success4', 'idTabRecordatorios', 'idir', 0, window.idTabRecordatorios);
                }, 200);                
            }
        },
        onLoadSuccess: function () {
            var datosRecordatorios = $("#tabRecordatorios").bootstrapTable('getData');
            if (Array.isArray(datosRecordatorios) && datosRecordatorios.length > 0) {
	    	    $("#tabRecordatorios").bootstrapTable('check', 0);
            }
	        seleccionarFilaTablaSiExiste('tabRecordatorios', 'success4', 'idTabRecordatorios', 'idir', 0);
        },
        columns: []
    }); 


    for (var i = 0; i < tabRecordatoriosCampos.length; i++) {
        $("#tabRecordatorios").bootstrapTable('updateColumnTitle', {
            field: tabRecordatoriosCampos[i],
            title: dTitColRecordatorios(idio, i)
        });
    }

	cambiarTextoIdioma('');

	//cambioOrientacion();
	activarTooltipsDiv('recordatorios');

	cambiarAltoTabla('tabRecordatorios', 0);
	barraPaginacion('#tabRecordatorios');

    setTimeout(function() {
        let numRows = $('#tabRecordatorios').bootstrapTable('getData').length;
        if (numRows == 0 ) {
        	toastMsj(tExp('Añade una interacción en Contactos', ''), msjRecordatorios, 2000, 4, 6);
        }
    }, 500);


}

function detailFormatterTabRecordatorios(index, row) {
	var lang 	= localStorage.getItem('idiomaPais');
	var html 	= [];
	$.each(row, function (key, value) {
		if ( (key == 'idir') || (key == 'idcr') || !value || value == '') { }
		else {
			let a = '';
			let b = '';
			if (key == 'fhir')  { a = tExp('Fecha/hora', lang); 	b = formatoFechaHora(value); }
			if (key == 'tipr')  { a = tExp('Tipo', lang); 			b = tExp(aTipoInteraccion[value - 1], ''); }
			if (key == 'asur')  { a = tExp('Asunto', lang); 		b = value; }
			if (key == 'desr')  { a = tExp('Descripción', lang); 	b = value; }
			if (key == 'nclr')  { a = tExp('Notas cliente', lang); 	b = value; }
			if (key == 'etar')  { a = tExp('Etapa', lang); 			b = tExp(aEtapaInteraccion[value - 1], ''); }
			if (key == 'resr')  { a = tExp('Resultado', lang); 		b = tExp(aResultadoInteraccion[value - 1], ''); }
			if (!(!b || b == '')) { html.push('<div><b>' + a + ':</b> ' + b + '</div>'); }
		}
	})
	return html.join('');
}  

function dTitColRecordatorios(id, i) {
    switch (id) {
        case 'es-es':
        case 'es-ES':
            return tabRecordatoriosTitCol_es_ES[i]; 
        case 'ca-es':
        case 'ca-ES':
            return tabRecordatoriosTitCol_ca_ES[i];
        case 'eu-es':
        case 'eu-ES':
            return tabRecordatoriosTitCol_eu_ES[i];
        case 'gl-es':
        case 'gl-ES':
            return tabRecordatoriosTitCol_gl_ES[i];
        case 'en-gb':
        case 'en-GB':
            return tabRecordatoriosTitCol_en_GB[i];
        case 'es-mx':
        case 'es-MX':
            return tabRecordatoriosTitCol_es_MX[i];
        case 'es-cl':
        case 'es-CL':
            return tabRecordatoriosTitCol_es_CL[i];
        case 'es-us':
        case 'es-US':
            return tabRecordatoriosTitCol_es_US[i];
        case 'en-us':
        case 'en-US':
            return tabRecordatoriosTitCol_en_US[i];
        case 'en-ca':
        case 'en-CA':
            return tabRecordatoriosTitCol_en_CA[i];                                                            
        case 'en-au':
        case 'en-AU':
            return tabRecordatoriosTitCol_en_AU[i];
        case 'it-it':
        case 'it-IT':
            return tabRecordatoriosTitCol_it_IT[i];
        case 'pt-pt':
        case 'pt-PT':
            return tabRecordatoriosTitCol_pt_PT[i];
        case 'pt-br':
        case 'pt-BR':
            return tabRecordatoriosTitCol_pt_BR[i];
        case 'fr-fr':
        case 'fr-FR':
            return tabRecordatoriosTitCol_fr_FR[i];
        case 'fr-ca':
        case 'fr-CA':
            return tabRecordatoriosTitCol_fr_CA[i];                                                          
        case 'de-de':
        case 'de-DE':
            return tabRecordatoriosTitCol_de_DE[i];
        case 'en-nz':
        case 'en-NZ':
            return tabRecordatoriosTitCol_en_NZ[i];
        case 'en-ie':
        case 'en-IE':
            return tabRecordatoriosTitCol_en_IE[i];
        case 'en-in':
        case 'en-IN':
            return tabRecordatoriosTitCol_en_IN[i];
        case 'en-sg':
        case 'en-SG':
            return tabRecordatoriosTitCol_en_SG[i];
        case 'en-hk':
        case 'en-HK':
            return tabRecordatoriosTitCol_en_HK[i];
        case 'en-my':
        case 'en-MY':
            return tabRecordatoriosTitCol_en_MY[i];
        case 'es-ar':
        case 'es-AR':
            return tabRecordatoriosTitCol_es_AR[i];
        case 'es-co':
        case 'es-CO':
            return tabRecordatoriosTitCol_es_CO[i];
        case 'es-pe':
        case 'es-PE':
            return tabRecordatoriosTitCol_es_PE[i];
        case 'es-uy':
        case 'es-UY':
            return tabRecordatoriosTitCol_es_UY[i];
        case 'fr-be':
        case 'fr-BE':
            return tabRecordatoriosTitCol_fr_BE[i];
        case 'fr-ch':
        case 'fr-CH':
            return tabRecordatoriosTitCol_fr_CH[i];
        case 'it-ch':
        case 'it-CH':
            return tabRecordatoriosTitCol_it_CH[i];
        case 'de-at':
        case 'de-AT':
            return tabRecordatoriosTitCol_de_AT[i];
        case 'de-be':
        case 'de-BE':
            return tabRecordatoriosTitCol_de_BE[i];
        case 'de-ch':
        case 'de-CH':
            return tabRecordatoriosTitCol_de_CH[i];
        case 'es-ve':
        case 'es-VE':
            return tabRecordatoriosTitCol_es_VE[i];
        case 'es-gt':
        case 'es-GT':
            return tabRecordatoriosTitCol_es_GT[i];
        case 'es-ec':
        case 'es-EC':
            return tabRecordatoriosTitCol_es_EC[i];
        case 'es-bo':
        case 'es-BO':
            return tabRecordatoriosTitCol_es_BO[i];
        case 'es-cu':
        case 'es-CU':
            return tabRecordatoriosTitCol_es_CU[i];
        case 'es-do':
        case 'es-DO':
            return tabRecordatoriosTitCol_es_DO[i];
        case 'es-hn':
        case 'es-HN':
            return tabRecordatoriosTitCol_es_HN[i];
        case 'es-py':
        case 'es-PY':
            return tabRecordatoriosTitCol_es_PY[i];
        case 'es-sv':
        case 'es-SV':
            return tabRecordatoriosTitCol_es_SV[i];
        case 'es-ni':
        case 'es-NI':
            return tabRecordatoriosTitCol_es_NI[i];
        case 'es-pa':
        case 'es-PA':
            return tabRecordatoriosTitCol_es_PA[i];
        case 'en-pk':
        case 'en-PK':
            return tabRecordatoriosTitCol_en_PK[i];
        case 'en-ng':
        case 'en-NG':
            return tabRecordatoriosTitCol_en_NG[i];
        case 'en-bd':
        case 'en-BD':
            return tabRecordatoriosTitCol_en_BD[i];
        case 'en-ph':
        case 'en-PH':
            return tabRecordatoriosTitCol_en_PH[i];
        case 'en-tz':
        case 'en-TZ':
            return tabRecordatoriosTitCol_en_TZ[i];
        case 'en-za':
        case 'en-ZA':
            return tabRecordatoriosTitCol_en_ZA[i];
        case 'en-ke':
        case 'en-KE':
            return tabRecordatoriosTitCol_en_KE[i];
        case 'en-ug':
        case 'en-UG':
            return tabRecordatoriosTitCol_en_UG[i];
        case 'en-gh':
        case 'en-GH':
            return tabRecordatoriosTitCol_en_GH[i];
        case 'en-mw':
        case 'en-MW':
            return tabRecordatoriosTitCol_en_MW[i];
        case 'en-zm':
        case 'en-ZM':
            return tabRecordatoriosTitCol_en_ZM[i];
        case 'en-zw':
        case 'en-ZW':
            return tabRecordatoriosTitCol_en_ZW[i];
        case 'en-cm':
        case 'en-CM':
            return tabRecordatoriosTitCol_en_CM[i];
        case 'en-lk':
        case 'en-LK':
            return tabRecordatoriosTitCol_en_LK[i];
        case 'fr-cd':
        case 'fr-CD':
            return tabRecordatoriosTitCol_fr_CD[i];
        case 'fr-cm':
        case 'fr-CM':
            return tabRecordatoriosTitCol_fr_CM[i];
        case 'fr-mg':
        case 'fr-MG':
            return tabRecordatoriosTitCol_fr_MG[i];
        case 'fr-ch':
        case 'fr-CH':
            return tabRecordatoriosTitCol_fr_CH[i];
        case 'fr-ci':
        case 'fr-CI':
            return tabRecordatoriosTitCol_fr_CI[i];
        case 'fr-bf':
        case 'fr-BF':
            return tabRecordatoriosTitCol_fr_BF[i];
        case 'fr-be':
        case 'fr-BE':
            return tabRecordatoriosTitCol_fr_BE[i];
        case 'fr-ne':
        case 'fr-NE':
            return tabRecordatoriosTitCol_fr_NE[i];
        case 'fr-sn':
        case 'fr-SN':
            return tabRecordatoriosTitCol_fr_SN[i];
        case 'fr-ml':
        case 'fr-ML':
            return tabRecordatoriosTitCol_fr_ML[i];
        case 'fr-bj':
        case 'fr-BJ':
            return tabRecordatoriosTitCol_fr_BJ[i];
        case 'fr-rw':
        case 'fr-RW':
            return tabRecordatoriosTitCol_fr_RW[i];
        case 'fr-td':
        case 'fr-TD':
            return tabRecordatoriosTitCol_fr_TD[i];
        case 'fr-gn':
        case 'fr-GN':
            return tabRecordatoriosTitCol_fr_GN[i];                               
        case 'pt-ao':
        case 'pt-AO':
            return tabRecordatoriosTitCol_pt_AO[i];
        case 'pt-mz':
        case 'pt-MZ':
            return tabRecordatoriosTitCol_pt_MZ[i];
        default:
            return tabRecordatoriosTitCol_en_US[i];
    }  		
}	

// fin código recordatorios 















// Función para generar PDF del detalle del data-detail-formatter de contactos
function generatePDF(encodedHtml, nomContacto, codContacto) {
    const { jsPDF } = window.jspdf;
    var doc = new jsPDF('portrait', 'pt', formatoPapel());

    // Decodificar el contenido HTML
    var html = decodeURIComponent(escape(atob(encodedHtml)));

    // Crear un contenedor para procesar el HTML
    const container = document.createElement('div');
    container.innerHTML = html;

    // Extraer texto de cada línea (cada <div>)
    const lines = Array.from(container.querySelectorAll('div')).map(div => div.innerText || div.textContent);

    // Configuración de márgenes y estilos
    const marginLeft = 40; // Margen izquierdo
    const marginRight = 40; // Margen derecho
    const pageWidth = doc.internal.pageSize.getWidth();
    const usableWidth = pageWidth - marginLeft - marginRight; // Ancho disponible para texto
    const marginTop = 50;  // Margen superior
    const lineHeight = 20; // Espaciado entre líneas
    let cursorY = marginTop;

    // Añadir título y fecha
    const fecha1 = obtenerFechaActual();
    const fecha = formatoFecha(fecha1);

    doc.setFontSize(10);
    doc.text(nomContacto, marginLeft, 30);
    doc.text(fecha, pageWidth - marginRight, 30, { align: 'right' }); // Fecha en la esquina superior derecha

    doc.setFontSize(12);
    cursorY += lineHeight; // Dejar una línea en blanco

    // Procesar cada línea
    lines.forEach(line => {
        // Dividir la línea en varias si excede el ancho máximo
        const splitText = doc.splitTextToSize(line, usableWidth);

        // Dibujar cada línea de texto dividida
        splitText.forEach(subLine => {
            if (cursorY + lineHeight > doc.internal.pageSize.getHeight() - marginTop) {
                // Si el contenido excede la página actual, crear una nueva página
                doc.addPage();
                cursorY = marginTop;
            }
            doc.text(subLine, marginLeft, cursorY, { align: 'left' });
            cursorY += lineHeight; // Mover el cursor hacia abajo
        });
    });

    // Guardar el PDF
    const filename = `${codContacto}_${nomContacto}.pdf`;
    doc.save(filename);
}


function generateDOC(encodedHtml, nomContacto, codContacto) {
    // Decodificar el contenido HTML
    const html = decodeURIComponent(escape(atob(encodedHtml)));

    // Crear un contenedor para procesar el HTML
    const container = document.createElement('div');
    container.innerHTML = html;

    // Extraer texto de cada línea (cada <div>)
    const lines = Array.from(container.querySelectorAll('div')).map(div => div.innerText || div.textContent);

    // Construir el contenido del documento
    let content = ``;
    content += lines.join("\n");

    // Crear un blob con el contenido del documento
    const blob = new Blob([content], {
        type: "application/msword", // Tipo MIME para un archivo Word sencillo
    });

    // Guardar el archivo con un nombre adecuado
    const filename = `${codContacto}_${nomContacto}.doc`;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}


function printContent(encodedHtml, nomContacto, codContacto) {
    // Decodificar el contenido HTML
    const html = decodeURIComponent(escape(atob(encodedHtml)));

    // Crear un contenedor para procesar el HTML
    const container = document.createElement('div');
    container.innerHTML = html;

    // Extraer texto de cada línea (cada <div>)
    const lines = Array.from(container.querySelectorAll('div')).map(div => div.innerText || div.textContent);

    // Construir el contenido a imprimir
    let content = `<h2>${nomContacto} (${codContacto})</h2>`;
    content += `<pre style="font-family: Arial, sans-serif; white-space: pre-wrap;">${lines.join("\n")}</pre>`;

    // Crear una nueva ventana para imprimir
    const printWindow = window.open("", "_blank");
    if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(`
            <html>
                <head>
                    <style>
                        @page {
                            size: portrait; /* Configurar orientación vertical */
                            margin: 20mm;
                        }
                        body { 
                            font-family: Arial, sans-serif; 
                            margin: 20px; 
                        }
                        pre { 
                            white-space: pre-wrap; 
                            word-wrap: break-word; 
                        }
                        h2 { 
                            text-align: center; 
                        }
                    </style>
                </head>
                <body>
                    ${content}
                </body>
            </html>
        `);
        printWindow.document.close();

        // Esperar a que cargue el contenido y lanzar la impresión
        printWindow.onload = function () {
            printWindow.print();
            printWindow.close(); // Cerrar la ventana de impresión automáticamente
        };
    } else {
        alert("No se pudo abrir la ventana de impresión.");
    }
}



function fTextPromocion(n) {
    let id = localStorage.getItem('idiomaPais');
    switch (id.substring(0, 2)) {
        case 'es':
            switch (n) {
                case 1: return '🎁 Regalo de bienvenida 🎁';
                case 2: return '¡4 meses gratis en planes anuales!'; 
                case 3: return 'Únicamente disponible durante tu prueba gratuita de 10 días';
                case 4: return '¡No pierdas la oportunidad antes de que termine tu prueba (4 meses gratis en vez de 2 el primer año)!'; 
                default: return '';  // Opcional, para cualquier otro valor de 'n'
            }
        case 'fr':
            switch (n) {
                case 1: return '🎁 Cadeau de bienvenue 🎁'; 
                case 2: return '4 mois gratuits sur les plans annuels !'; 
                case 3: return 'Uniquement disponible pendant votre essai gratuit de 10 jours';
                case 4: return "Ne manquez pas l'opportunité avant la fin de votre essai (4 mois gratuits au lieu de 2 la première année)!";
                default: return '';
            }
        case 'it':
            switch (n) {
                case 1: return '🎁 Regalo di benvenuto 🎁'; 
                case 2: return '4 mesi gratuiti sui piani annuali!'; 
                case 3: return 'Disponibile solo durante la tua prova gratuita di 10 giorni'; 
                case 4: return "Non perdere l'opportunità prima che finisca la tua prova (4 mesi gratis invece di 2 il primo anno)!"; 
                default: return '';
            }
        case 'de':
            switch (n) {
                case 1: return '🎁 Willkommensgeschenk 🎁';
                case 2: return '4 Monate kostenlos bei einem Jahresplan!';
                case 3: return 'Nur während Ihrer 10-tägigen kostenlosen Testphase verfügbar';
                case 4: return "Nutzen Sie das Angebot vor dem Ende Ihrer Testphase: Im ersten Jahr erhalten Sie vier statt zwei Monate kostenlos!";
                default: return '';
            }
        case 'pt':
            switch (n) {
                case 1: return '🎁 Presente de boas-vindas 🎁'; 
                case 2: return '4 meses grátis em planos anuais!'; 
                case 3: return 'Disponível apenas durante o seu teste gratuito de 10 dias'; 
                case 4: return "Não perca a oportunidade antes que termine o seu teste (4 meses grátis em vez de 2 no primeiro ano)!"; 
                default: return '';
            }
        case 'ca':
            switch (n) {
                case 1: return '🎁 Regal de benvinguda 🎁'; 
                case 2: return '4 mesos gratuïts en plans anuals!'; 
                case 3: return 'Només disponible durant la teva prova gratuïta de 10 dies'; 
                case 4: return "No perdis l'oportunitat abans que acabi la teva prova (4 mesos gratuïts en comptes de 2 el primer any)!"; 
                default: return '';
            }
        case 'gl':
            switch (n) {
                case 1: return '🎁 Regalo de benvida 🎁'; 
                case 2: return '¡4 meses gratis en plans anuais!'; 
                case 3: return 'Unicamente dispoñible durante a túa proba gratuíta de 10 días'; 
                case 4: return "Non perdas a oportunidade antes de que termine a túa proba (4 meses gratis en vez de 2 no primeiro ano)!"; 
                default: return '';
            }
        default:  // en
            switch (n) {
                case 1: return '🎁 Welcome gift 🎁'; 
                case 2: return '4 months free on annual plans!'; 
                case 3: return 'Only available during your 10-day free trial'; 
                case 4: return "Don't miss the opportunity before your trial ends (4 months free instead of 2 the first year)!"; 
                default: return '';
            }
    }
}



// código grupos contactos
function agregarCodigoGruposContactos() {
    groupModal.addEventListener('shown.bs.modal', function (e) {
        groupInput.focus();
    });    

    elementModal.addEventListener('shown.bs.modal', function (e) {
        elementInput.focus();
    }); 

    return true;
}




function iniciarGruposContactos() {

    setTimeout(function() {
        libIdioma(localStorage.getItem('idiomaPais'), 3);
    }, 100); 

    const groupsContainer = document.getElementById('groupsContainer');
    const groupModal = new bootstrap.Modal(document.getElementById('groupModal'));
    const groupInput = document.getElementById('groupInput');
    const saveGroupBtn = document.getElementById('saveGroupBtn');
    const elementModal = new bootstrap.Modal(document.getElementById('elementModal'));
    const elementInput = document.getElementById('elementInput');
    const saveElementBtn = document.getElementById('saveElementBtn');
    let currentGroup = null;
    let currentElement = null;

    
    crearNuevoGrupo(localStorage.getItem('nomGrupo1'), 1);
    crearNuevoGrupo(localStorage.getItem('nomGrupo2'), 2);
    crearNuevoGrupo(localStorage.getItem('nomGrupo3'), 3);

    let formData2 = new FormData();
    formData2.append('prefijo', localStorage.getItem('prefijo'));

    async function datosDevueltos() {
        const response = await fetch('https://' + window.location.host + '/leergrupos', {
            method: 'POST',
            body: formData2
        });
        return await response.json();
    }
    datosDevueltos().then((data) => {
        const allGroupCards = document.getElementsByClassName('group-card');
        data.forEach(item => {
            const numGrupo          = item.numGrupo;
            const numElemento       = item.numElemento;
            const desElemento       = item.desElemento;
            const predeterminado    = item.predeterminado;

            const elementItem = document.createElement('li');
            elementItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            elementItem.innerHTML = `
                <span class="element-number d-none">${numElemento}</span>
                <span class="element-name">${desElemento}</span>
                <div class="element-buttons">
                    <button class="btn btn-sm btn-outline-secondary border-0 set-default-btn">
                        <i class="bi bi-star"></i>
                    </button>                        
                    <button class="btn btn-sm btn-outline-primary border-0 edit-element-btn">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-secondary border-0 delete-element-btn">
                        <i class="bi bi-trash2"></i>
                    </button>
                </div>
            `;

            if (predeterminado == 1) { elementItem.classList.add('default-element'); }

            const groupCardData = allGroupCards.item(parseInt(numGrupo) - 1);
            groupCardData.querySelector('.element-list').appendChild(elementItem);

        });
    }).catch(error => {
        toastMsj(error.message, msjElementModal, 2000, 6, 1);
    });


    saveGroupBtn.addEventListener('click', () => {
        const groupName = groupInput.value.trim().substring(0, 50);
        if (groupName) {
            const groupNumber = currentGroup.querySelector('.group-number').innerText;
            let formData2 = new FormData();
            formData2.append('prefijo', localStorage.getItem('prefijo'));
            formData2.append('numGrupo', groupNumber);
            formData2.append('nomGrupo', groupName);
            async function datosDevueltos() {
                const response = await fetch('https://' + window.location.host + '/cambiarnombregrupo', {
                    method: 'POST',
                    body: formData2
                });
                const data = await response.json();
                return data;
            }
            datosDevueltos().then((data) => {
                if (data.success) {
                    currentGroup.querySelector('.group-name').innerText = groupName;
                    if (groupNumber == '1') {
                        localStorage.setItem('nomGrupo1', groupName);
                    } else if (groupNumber == '2') {
                        localStorage.setItem('nomGrupo2', groupName);
                    } else if (groupNumber == '3') {
                        localStorage.setItem('nomGrupo3', groupName);
                    }
                }
            }).catch(error => {
                toastMsj(error.message, msjGroupModal, 2000, 6, 2);
            }) 
            groupModal.hide();
        }
    });

    saveElementBtn.addEventListener('click', () => {
        const elementName = elementInput.value.trim().substring(0, 50);
        if (elementName) {
            const elementList = currentGroup.querySelector('.element-list');
            if (elementList.querySelectorAll('li').length >= 100) {
                toastMsj(tExp('El número máximo de elementos por grupo es 100', ''), msjElementModal, 2000, 6, 3);
                return;
            }

            if (currentElement) {
                const elementNumber = currentElement.querySelector('.element-number').innerText;
                let formData2 = new FormData();
                formData2.append('prefijo', localStorage.getItem('prefijo'));
                formData2.append('numEle', elementNumber);
                formData2.append('desEle', elementName);
                async function datosDevueltos() {
                    const response = await fetch('https://' + window.location.host + '/cambiardeselemento', {
                        method: 'POST',
                        body: formData2
                    });
                    const data = await response.json();
                    return data;
                }
                datosDevueltos().then((data) => {
                    if (data.success) {
                        currentElement.querySelector('.element-name').innerText = elementName;
                    }
                }).catch(error => {
                    toastMsj(error.message, msjElementModal, 2000, 6, 4);
                }) 

            } else {
                //const elementNumber = prompt("Ingrese el número del nuevo elemento:");
                const groupNumber = currentGroup.querySelector('.group-number').innerText;
                let formData2 = new FormData();
                formData2.append('prefijo', localStorage.getItem('prefijo'));
                formData2.append('numGrupo', groupNumber);
                formData2.append('desEle', elementName);
                async function datosDevueltos() {
                    const response = await fetch('https://' + window.location.host + '/nuevoelementogrupo', {
                        method: 'POST',
                        body: formData2
                    });
                    const data = await response.json();
                    return data;
                }
                datosDevueltos().then((data) => {
                    if (data.success) {
                        const elementNumber = data.data.value2;
                        const elementItem = document.createElement('li');
                        elementItem.className = 'list-group-item d-flex justify-content-between align-items-center';
                        elementItem.innerHTML = `
                            <span class="element-number d-none">${elementNumber}</span>
                            <span class="element-name">${elementName}</span>
                            <div class="element-buttons">
                                <button class="btn btn-sm btn-outline-secondary border-0 set-default-btn">
                                    <i class="bi bi-star"></i>
                                </button>
                                <button class="btn btn-sm btn-outline-primary border-0 edit-element-btn">
                                    <i class="bi bi-pencil"></i>
                                </button>
                                <button class="btn btn-sm btn-outline-secondary border-0 delete-element-btn">
                                    <i class="bi bi-trash2"></i>
                                </button>
                            </div>
                        `;
                        elementList.appendChild(elementItem);
                    }
                }).catch(error => {
                    toastMsj(error.message, msjElementModal, 2000, 6, 5);
                }) 

            }

            elementModal.hide();
        }
    });

    function crearNuevoGrupo(nombre, numero) {
        const groupCard = document.createElement('div');
        groupCard.className = 'col-lg-4 col-md-6 col-sm-12 group-card';
        groupCard.innerHTML = `
            <div class="card">
                <div class="group-header">
                    <h5 class="card-title group-name">${nombre}</h5>
                    <span class="group-number d-none">${numero}</span>
                    <button class="btn btn-outline-primary border-0 btn-sm edit-group-btn">
                        <i class="bi bi-pencil"></i>
                    </button>
                </div>
                <div class="card-body">
                    <ul class="list-group element-list"></ul>
                </div>
                <div class="card-footer group-footer">
                    <button class="btn btn-success btn-sm add-element-btn"><span>Nuevo elemento</span></button>
                </div>
            </div>
        `;
        groupsContainer.appendChild(groupCard);

        const editGroupBtn  = groupCard.querySelector('.edit-group-btn');
        const addElementBtn = groupCard.querySelector('.add-element-btn');
        const elementList   = groupCard.querySelector('.element-list');

        editGroupBtn.addEventListener('click', () => {
            currentGroup = groupCard;
            groupInput.value = groupCard.querySelector('.group-name').innerText;
            groupModal.show();
        });

        addElementBtn.addEventListener('click', () => {
            currentGroup = groupCard;
            currentElement = null;
            elementInput.value = '';
            elementModal.show();
        });

        elementList.addEventListener('click', (event) => {

            if (event.target.closest('.set-default-btn')) {
                const elementItem   = event.target.closest('li');
                const elementNumber = elementItem.querySelector('.element-number').innerText;
                // Obtener el grupo al que pertenece el elemento
                const groupCard     = event.target.closest('.group-card');
                const groupNumber   = groupCard.querySelector('.group-number').innerText;
                let formData2 = new FormData();
                formData2.append('prefijo', localStorage.getItem('prefijo'));
                formData2.append('numEle', elementNumber);
                formData2.append('numGrupo', groupNumber);
                async function datosDevueltos() {
                    const response = await fetch('https://' + window.location.host + '/cambiarelementopredeterminadogrupo', {
                        method: 'POST',
                        body: formData2
                    });
                    const data = await response.json();
                    return data;
                }
                datosDevueltos().then((data) => {
                    if (data.success) {
                        const currentDefault = elementList.querySelector('.default-element');
                        if (currentDefault) {
                            currentDefault.classList.remove('default-element');
                        }
                        const elementItem = event.target.closest('li');
                        elementItem.classList.add('default-element');
                    }
                }).catch(error => {
                    toastMsj(error.message, msjElementModal, 2000, 6, 6);
                }) 
            } else if (event.target.closest('.edit-element-btn')) {
                const elementItem = event.target.closest('li');
                currentGroup = groupCard;
                currentElement = elementItem;
                elementInput.value = elementItem.querySelector('.element-name').innerText;
                const elementNumber = elementItem.querySelector('.element-number').innerText;
                elementModal.show();
            } else if (event.target.closest('.delete-element-btn')) {

                function eliminarElemento() {
                    const elementNumber = elementItem.querySelector('.element-number').innerText;
                    let formData2 = new FormData();
                    formData2.append('prefijo', localStorage.getItem('prefijo'));
                    formData2.append('numEle', elementNumber);
                    async function datosDevueltos() {
                        const response = await fetch('https://' + window.location.host + '/eliminarelemento', {
                            method: 'POST',
                            body: formData2
                        });
                        const data = await response.json();
                        return data;
                    }
                    datosDevueltos().then((data) => {
                        if (data.success) {
                            elementList.removeChild(elementItem);
                        } else {
                            if (data.message == 'Elemento asignado') {
                                toastMsj(tExp('Elemento asignado a uno o más contactos', ''), msjGruposContactos, 2000, 6, 7);
                            } else {
                                toastMsj(data.message, msjGruposContactos, 2000, 6, 8);    
                            }
                                                                
                        }
                    }).catch(error => {
                        toastMsj(error.message, msjGruposContactos, 2000, 6, 9);
                    })                             
                }


                const elementItem   = event.target.closest('li');

                // Verificar si elementItem tiene la clase .default-element
                if (elementItem.classList.contains('default-element')) {
                    toastMsj(tExp('No se puede eliminar el elemento predeterminado', ''), msjGruposContactos, 2000, 6, 10);
                    return; // Detener la eliminación si es un elemento predeterminado
                }                        

                // confirmar la elliminación del elemento
                mostrarModal(tExp('¿Eliminar elemento?', ''), eliminarElemento);
            }


        });
    }

}
// fin código grupos contactos




function construirUrlCollabora(urlBase, idioma) {
	const separador = urlBase.includes('?') ? '&' : '?';
	const idiomaCollabora = encodeURIComponent(idioma || 'en');
	return `${urlBase}${separador}lang=${idiomaCollabora}&autosave=1&UIMode=compact;Sidebar=false&closebutton=true`;
}


function abrirDocumentoEnCollabora(extension) {
    // Datos de ejemplo, estos deben obtenerse de la sesión del usuario o del formulario
    var prefijoUsuario 	= localStorage.getItem('prefijo');
    var idDocumentoBD = 0; 
    if (window.opcionDocumento == 2) { idDocumentoBD = Number(window.idTabDocumentos); }
    var nombreArchivo 	= document.getElementById("nom_documentos").value.trim();
    
    if (!nombreArchivo) {
        fileTypeDropdown.textContent = tExp('O crea un nuevo documento...', '');
        toastMsj(tExp("Teclea el nombre del documento", ''), msjModDocumento, 1500, 5, 4);
        document.getElementById("nom_documentos").focus();
        return;
    }

	var extensionActual = obtenerExtensionArchivo(nombreArchivo);

	if (!extensionActual || extensionActual !== extension) {
	    // Elimina la extensión actual del nombre del archivo, si existe
	    var nombreSinExtension = extensionActual
	        ? nombreArchivo.slice(0, -extensionActual.length - 1) // Remueve ".ext"
	        : nombreArchivo;
	        document.getElementById("nom_documentos").value = nombreSinExtension + "." + extension;
	        nombreArchivo = nombreSinExtension + "." + extension;
	}

    
    var nuevoNombreArchivo 				= `${prefijoUsuario}_${idDocumentoBD}_${nombreArchivo}`;
    
    fetch(`https://` + window.location.host + `/abrirDocCollabora`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prefijo: prefijoUsuario,
            idDocumento: idDocumentoBD,
            nombreArchivo: nombreArchivo,
            extension: extension,
        })
    })
    .then(response => response.json())
    .then(data => {

	    if (!data.url) {
	        //console.error("La respuesta del servidor no contiene una URL válida", data);
	        toastMsj(tExp("Error al crear el documento en Collabora", ""), msjModDocumento, 1500, 5, 4);
	        return;
	    }

        if (data.url) {
        	// &lang=es   
        	var idioma 					= localStorage.getItem('idiomaPais').substring(0, 2);

            const finalUrl 				= construirUrlCollabora(data.url, idioma);

            docEditado 					= 2;
            nomDocEditadoCompleto 		= nuevoNombreArchivo;

	       	openDocEdit.style.display 	= "none";
			mostrarAvisoGuardarDocumento();

			abrirVentanaUnica(finalUrl);
		    return false;

        } else {
            toastMsj(tExp("Error al abrir el documento en Collabora", ''), msjModDocumento, 1500, 5, 5);
        }
    })
    .catch(error => {
        //console.error("Error en la solicitud:", error);
        toastMsj(tExp("Hubo un problema al comunicarse con el servidor", ''), msjModDocumento, 1500, 5, 5);
    });
}



function visorDocEnCollabora(id, nom, ext) {
    // Datos de ejemplo, estos deben obtenerse de la sesión del usuario o del formulario
    var prefijo 			= localStorage.getItem('prefijo');
    var nuevoNombreArchivo 	= `${prefijo}_${id}_${nom}`;
    
    fetch(`https://` + window.location.host + `/abrirDocCollabora`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prefijo: prefijo,
            idDocumento: id,
            nombreArchivo: nom,
            extension: ext,
        })
    })
    .then(response => response.json())
    .then(data => {

	    if (!data.url) {
	        //console.error("La respuesta del servidor no contiene una URL válida", data);
	        toastMsj(tExp("Error al abrir el documento en Collabora", ""), msjModDocumento, 1500, 5, 4);
	        return;
	    }

        if (data.url) {
        	// &lang=es   
        	var idioma 					= localStorage.getItem('idiomaPais').substring(0, 2);

            const finalUrl 				= construirUrlCollabora(data.url, idioma);

	       	abrirVentanaUnica(finalUrl);
		    return false;

        } else {
            toastMsj(tExp("Error al crear el documento en Collabora", ''), msjDocumentos, 1500, 7, 5);
        }
    })
    .catch(error => {
        console.error("Error en la solicitud:", error);
        toastMsj(tExp("Hubo un problema al comunicarse con el servidor", ''), msjDocumentos, 1500, 8, 5);
    });
}


function obtenerExtensionArchivo(nombreArchivo) {
    const partes = nombreArchivo.split('.');
    return partes.length > 1 ? partes.pop().toLowerCase() : '';
}



// 🔍 Función para detectar iOS
function esIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}




// Inicio autenticación Microsoft



// 🔐 Iniciar sesión con Microsoft
function esApp_iOS() {
  const isIOS = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);
  const isWebView = window.webkit && window.webkit.messageHandlers;
  return isIOS && isWebView;
}









async function crearDocumentoEnOneDrive(extension) {
    toastMsj(tExp("Extensión no soportada", ""), msjModDocumento, 1500, 5, 5);
    return;

    var nombreArchivo = document.getElementById("nom_documentos").value.trim();
    if (!nombreArchivo) {
		fileTypeDropdown.textContent = tExp('O crea un nuevo documento...', '');
        toastMsj(tExp("Teclea el nombre del documento", ''), msjModDocumento, 1500, 5, 4);
        document.getElementById("nom_documentos").focus();
        return;
    }

	var extensionActual = obtenerExtensionArchivo(nombreArchivo);

	if (!extensionActual || extensionActual !== extension) {
	    // Elimina la extensión actual del nombre del archivo, si existe
	    var nombreSinExtension = extensionActual
	        ? nombreArchivo.slice(0, -extensionActual.length - 1) // Remueve ".ext"
	        : nombreArchivo;
	        document.getElementById("nom_documentos").value = nombreSinExtension + "." + extension;
	        nombreArchivo = nombreSinExtension + "." + extension;
	}

	document.getElementById("nom_documentos").value = nombreArchivo;

    try {
        const accessToken = await obtenerTokenMicrosoft(3);
        if (!accessToken) {
            alert(tExp("No se pudo obtener el token de acceso", ""));
            return;
        }

        // 🔹 Llamar a la API de Microsoft Graph para crear el archivo en OneDrive
        const response = await fetch("https://graph.microsoft.com/v1.0/me/drive/root/children", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nombreArchivo,
                file: {} // Esto crea un archivo vacío
            })
        });

        //if (!response.ok) {
            //throw new Error(`Error al crear el archivo: ${response.statusText}`);
        //}







		if (!response.ok) {
		    const errorData = await response.json().catch(() => ({}));

		    if (errorData.error?.code === "nameAlreadyExists") {
		        toastMsj(tExp('Ya existe un documento con ese nombre', ''), msjModDocumento, 1500, 5, 5);
		        return;
		    }

		    console.error("❌ Otro error al crear el archivo:", errorData);
		    throw new Error(`Error al crear el archivo: ${response.status} ${errorData.error?.message || response.statusText}`);
		}


        const data 					= await response.json();
        OneDriveFileId 				= data.id;
        //var idioma 					= localStorage.getItem('idiomaPais').toLowerCase();
        //OneDriveEditUrl				= `https://onedrive.live.com/edit.aspx?resid=${OneDriveFileId}&new=0&open=0&ui=` + idioma;
        OneDriveEditUrl				= `https://onedrive.live.com/edit.aspx?resid=${OneDriveFileId}`;
        // Read-only Mode: Replace edit.aspx with view.aspx in the URL structure. This will open the file in a view-only mode, preventing any edits by default.

        docEditado 					= 1;
        nomDocEditadoCompleto 		= '';

        //console.log("📄 Documento creado en OneDrive:", OneDriveEditUrl);

        openDocEdit.style.display 	= "none";

        const url = `${encodeURIComponent(OneDriveEditUrl)}`;
        abrirVentanaUnica(url);

    } catch (error) {
        //console.error("❌ Error:", error);
        toastMsj(tExp("Error al crear el documento en OneDrive", ''), msjModDocumento, 1500, 5, 5);
    }
}


async function abrirDocumentoEnOneDrive(id, editar) {
    var prefijo 	= localStorage.getItem('prefijo');
    var idioma 		= localStorage.getItem('idiomaPais').toLowerCase();
    var formData 	= new FormData();
    formData.append('prefijo', prefijo); // Base de datos en el servidor
    formData.append('id', id); // ID del documento en MySQL
    formData.append('idioma', idioma); // ID del documento en MySQL
    formData.append('editar', editar);

    // Obtener el token de Microsoft
    const accessToken = await obtenerTokenMicrosoft(3);
    //alert("Token de acceso obtenido: " + accessToken);
    if (!accessToken) {
        console.error("No se pudo obtener el token de acceso de Microsoft.");
        return null;
    }

    try {
        // 🔹 Paso 1: Solicita al servidor la autenticación y subida del archivo
        const response = await fetch('https://' + window.location.host + '/editarDocOffice', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}` // Se envía el token al servidor
            },
            body: formData
        });

        // **Verifica si la respuesta es JSON antes de intentar parsearla**
        const contentType = response.headers.get("content-type");
        if (!response.ok) {
            const errorText = await response.text(); // Captura el posible mensaje de error
            throw new Error(`Error del servidor: ${response.status} - ${errorText}`);
        }

        if (!contentType || !contentType.includes("application/json")) {
            throw new Error("El servidor no devolvió un JSON válido.");
        }

        const data = await response.json();
        if (!data.success) {
            throw new Error(data.message || "Error obteniendo enlace de edición.");
        }

        // 🔹 Paso 2: Abre el editor en OneDrive con la URL obtenida
        OneDriveEditUrl 		= data.editUrl;
        OneDriveFileId 			= data.oneDriveFileID;
        docEditado 				= 1;
        nomDocEditadoCompleto 	= '';        

        openDocEdit.style.display = "none";

	    if (OneDriveEditUrl != '') {
	        const url = `${encodeURIComponent(OneDriveEditUrl)}`;
	        abrirVentanaUnica(url);
	    } else {
	        //alert("❌ No se encontró la URL del documento.");
	        throw new Error("No se recibió una URL de edición.");
	    }


    } catch (error) {
        //console.error("Error:", error.message);
        toastMsj(tExp(error.message, ''), msjModDocumento, 1500, 4, 3);
    }
}

// Fin autenticación con Microsoft



// Autenticación Microsoft nuevo
// Intercambia el auth_code por un access_token usando tu backend o un proxy (recomendado)
async function ms_intercambiarAuthCodePorToken(authCode) {
  try {
    const formData = new URLSearchParams();
    formData.append("code", authCode);

    const respuesta = await fetch("https://" + window.location.host + "/apims/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData.toString()
    });

    const datos = await respuesta.json();

    if (datos.ok && datos.token && datos.nombre && datos.email && datos.id) {
      console.log("✅ Access token y datos del usuario recibidos correctamente");
      alert("✅ Access token y datos del usuario recibidos correctamente");
      //ms_validarInicioSesion(datos.token, datos.nombre, datos.email, datos.id);
    } else {
      console.error("❌ Error en datos recibidos del servidor:", datos);
      alert("❌ Error en datos recibidos del servidor: " + datos);
    }
  } catch (error) {
    console.error("❌ Error al obtener access token:", error);
    alert("❌ Error al obtener access token: " + error);
  }
}










async function renovarAccessToken() {
    const clientId = "94d22a88-045e-4fac-9861-9e49f234b4e1";
    const refreshToken = localStorage.getItem("refresh_token");
    const redirectUri = "https://" + window.location.host + "/app/msfinal.html"; // igual que en el registro de la app

    if (!refreshToken) {
        console.error("❌ No hay refresh_token en localStorage.");
        return null;
    }

    const body = new URLSearchParams({
        client_id: clientId,
        scope: "User.Read offline_access",  // pon aquí todos los scopes necesarios
        refresh_token: refreshToken,
        redirect_uri: redirectUri,
        grant_type: "refresh_token"
    });

    try {
        const response = await fetch("https://login.microsoftonline.com/common/oauth2/v2.0/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: body.toString()
        });

        const data = await response.json();

        if (data.access_token) {
            console.log("✅ Nuevo access_token recibido.");
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("refresh_token", data.refresh_token); // puede cambiar
            return data.access_token;
        } else {
            console.error("❌ Error al renovar token:", data);
            return null;
        }
    } catch (err) {
        console.error("❌ Excepción al renovar token:", err);
        return null;
    }
}





// Fin Autenticación Microsoft nuevo










// ✅ Versión completa y unificada de obtenerTokenMicrosoft con soporte WebKit/iOS y PWA
async function obtenerTokenMicrosoft(tipo = 1) {
	if (window.__mccOAuthFlights?.__activeProvider && window.__mccOAuthFlights.__activeProvider !== 'microsoft') {
		throw new Error(mccTextoSeguro('Hay otra autorización en curso. Finalízala o ciérrala antes de iniciar una nueva.'));
	}
	localStorage.setItem("provider_tmp", 2);  // proveedor temporal: Microsoft
  const scopesByType = {
    1: ["User.Read", "openid", "profile", "email", "offline_access"],
    2: ["User.Read", "Contacts.Read", "offline_access"],
    3: ["User.Read", "Files.ReadWrite", "Sites.ReadWrite.All", "offline_access"],
    4: ["User.Read", "Mail.Send", "offline_access"]
  };

  const requiredScopes = scopesByType[tipo];
  if (!requiredScopes) {
    console.error("Tipo de autenticación Microsoft no válido:", tipo);
    return Promise.reject(new Error("Tipo de autenticación Microsoft no válido"));
  }


  let grantedScopes = [];
  try {
    const stored = localStorage.getItem("ms_granted_scopes");
    if (stored) grantedScopes = JSON.parse(stored);
  } catch (e) {
    grantedScopes = [];
  }

  const missingScopes = requiredScopes.filter(s => !grantedScopes.includes(s));
  const accessToken = localStorage.getItem("ms_access_token");
  const tokenExp = parseInt(localStorage.getItem("ms_token_expires") || "0", 10);
  const nowSec = Math.floor(Date.now() / 1000);

	if (missingScopes.length === 0 && accessToken && tokenExp > nowSec + 300) {
		if (tipo === 1 && typeof validarIniSesion === 'function') {
			const userId = localStorage.getItem("ms_user_id");
			const userName = localStorage.getItem("ms_user_name");
			const userEmail = localStorage.getItem("ms_user_email");
			if (userId && userName && userEmail) {
			  	validarIniSesion(2, userId, userName, userEmail, '');
			}
		}
		return Promise.resolve(accessToken);
	}


  const refreshToken = localStorage.getItem("ms_refresh_token");
  if (refreshToken && missingScopes.length === 0) {
    try {
      	const newToken = await refreshMicrosoftToken(refreshToken, requiredScopes);
		if (tipo === 1 && typeof validarIniSesion === 'function') {
			const userId = localStorage.getItem("ms_user_id");
			const userName = localStorage.getItem("ms_user_name");
			const userEmail = localStorage.getItem("ms_user_email");
			if (userId && userName && userEmail) {
			  	validarIniSesion(2, userId, userName, userEmail, '');
			}
		}
      	return Promise.resolve(newToken);
    } catch (e) {
      	console.warn("Refresh fallido, continuará login interactivo");
	    // 🧹 Limpieza de estado inválido
	    localStorage.removeItem("ms_access_token");
	    localStorage.removeItem("ms_refresh_token");
	    localStorage.removeItem("ms_token_expires");
	    localStorage.removeItem("ms_granted_scopes");      
    }
  }

	  return mccTrackOAuth('microsoft', tipo, () => new Promise((resolve, reject) => {
	    const clientId = "94d22a88-045e-4fac-9861-9e49f234b4e1";
    const redirectUri = "https://" + window.location.host + "/app/msfinal.html";
    const codeVerifier = generarCodeVerifier();
    const state = mccCrearEstadoOAuth("microsoft");
    const plataformaPrevia = obtenerEntornoCliente();
    const esOAuthNativo = plataformaPrevia === 'ios' || plataformaPrevia === 'macos';
    let popup = null;

    if (!esOAuthNativo) {
      window.__mccMicrosoftPopupAuthActive = true;
      popup = window.open("about:blank", "MicrosoftLogin", "width=600,height=700,menubar=no,toolbar=no");
      if (!popup) {
        window.__mccMicrosoftPopupAuthActive = false;
        return reject(new Error("Popup bloqueado"));
      }
      try {
        popup.document.write('<!doctype html><html><head><title>Microsoft</title></head><body style="font-family:sans-serif;text-align:center;padding:2rem;">Conectando con Microsoft...</body></html>');
        popup.document.close();
      } catch (e) {}
      mccRegistrarPopupOAuth("microsoft", popup);
    }

    generarCodeChallenge(codeVerifier).then(codeChallenge => {
      localStorage.setItem("ms_code_verifier", codeVerifier);
      localStorage.setItem("ms_auth_tipo", tipo);

      const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?` +
        `client_id=${encodeURIComponent(clientId)}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&response_mode=query&scope=${encodeURIComponent(requiredScopes.join(" "))}` +
        `&state=${encodeURIComponent(state)}&code_challenge=${encodeURIComponent(codeChallenge)}&code_challenge_method=S256`;




        const plataforma   = obtenerEntornoCliente();

	      if (plataforma === 'ios' || plataforma === 'macos') {
			  window.__mccMicrosoftAuthResolve = resolve;
			  window.__mccMicrosoftAuthReject = reject;
			  abrirOAuthNativo(authUrl, codeVerifier, redirectUri);
			  return;
			}


      //const popup = window.open(`${redirectUri}?authUrl=${encodeURIComponent(authUrl)}`, "MicrosoftLogin", "width=600,height=700,menubar=no,toolbar=no");

		if (popup && !popup.closed) {
			popup.location.href = authUrl;
		}

      if (!popup || popup.closed) {
      	window.__mccMicrosoftPopupAuthActive = false;
      	return reject(new Error("Popup bloqueado"));
      }

      const popupPoll = setInterval(() => {
        if (popup.closed) {
          clearInterval(popupPoll);
          window.removeEventListener("message", onMessage);
          window.__mccMicrosoftPopupAuthActive = false;
          if (!receivedMessage) reject(new Error("Autenticación cancelada"));
        }
      }, 500);

      let receivedMessage = false;
      async function onMessage(event) {
        if (event.origin !== window.location.origin) return;
        if (event.source !== popup) return;

        const payload = event.data || {};
        const { code, error } = payload;
        if ((code || error) && !mccConsumirCallbackOAuth("microsoft", payload, { event })) {
          window.__mccMicrosoftPopupAuthActive = false;
          return reject(new Error("Respuesta OAuth de Microsoft no válida"));
        }
        if (code || error) {
          receivedMessage = true;
          clearInterval(popupPoll);
          window.removeEventListener("message", onMessage);
          if (popup && !popup.closed) popup.close();
        }

		if (error) {
			window.__mccMicrosoftPopupAuthActive = false;
			return reject(new Error("Microsoft: " + error));
		}
		if (!code) return reject(new Error("No se recibió código"));

		const verifier = localStorage.getItem("ms_code_verifier");
		if (!verifier) {
			window.__mccMicrosoftPopupAuthActive = false;
			return reject(new Error("Falta verifier"));
		}

		const formData = new URLSearchParams();
		formData.append("code", code);
		formData.append("verifier", verifier);
		formData.append("redirect_uri", "https://" + window.location.host + "/app/msfinal.html");
		formData.append("scope", requiredScopes.join(" "));

		const response = await fetch("https://" + window.location.host + "/apims", {
		  method: "POST",
		  headers: { "Content-Type": "application/x-www-form-urlencoded" },
			  body: formData.toString()
			});

		const resultText = await response.text();

		let result, accessToken, refreshToken, expiresIn;
		try {
		  result = JSON.parse(resultText);
		  accessToken = result.token;
		  refreshToken = result.refresh_token;
		  expiresIn = result.expires_in || 3600;
		} catch (err) {
		  window.__mccMicrosoftPopupAuthActive = false;
		  return reject(new Error("❌ Respuesta no válida desde /apims: " + resultText));
		}

		if (!accessToken || !refreshToken) {
			window.__mccMicrosoftPopupAuthActive = false;
			return reject(new Error("Token incompleto"));
		}

		const newExp = Math.floor(Date.now() / 1000) + parseInt(expiresIn);
		localStorage.setItem("ms_access_token", accessToken);
		localStorage.setItem("ms_refresh_token", refreshToken);
		localStorage.setItem("ms_token_expires", String(newExp));
		localStorage.setItem("ms_user_id", result.id);
		localStorage.setItem("ms_user_name", result.nombre);
		localStorage.setItem("ms_user_email", result.email);
		const updatedScopes = Array.from(new Set([...grantedScopes, ...requiredScopes]));
		localStorage.setItem("ms_granted_scopes", JSON.stringify(updatedScopes));

		if (tipo === 1 && typeof validarIniSesion === 'function') {
			console.log("Desde obtenerTokenMicrosoft");
		   validarIniSesion(2, result.id, result.nombre, result.email, '', result.auth_ticket);
		}	

		window.__mccMicrosoftPopupAuthActive = false;

		resolve(accessToken);

      }

      window.addEventListener("message", onMessage);
    }).catch(err => {
      window.__mccMicrosoftPopupAuthActive = false;
      try {
        if (popup && !popup.closed) popup.close();
      } catch (e) {}
      reject(err instanceof Error ? err : new Error(String(err)));
    });
	  }));
	}


// Función auxiliar para refrescar el token de Microsoft
async function refreshMicrosoftToken(refreshToken, grantedScopes) {
    // Construir la petición al endpoint de token de Microsoft
    const clientId = "94d22a88-045e-4fac-9861-9e49f234b4e1";  // TODO: reemplazar con el ID de la app registrada
    // Armar la lista de scopes para el refresh (excluir OIDC scopes que no son necesarios aquí)
    const scopeList = grantedScopes.filter(s => 
        s !== "offline_access" && s !== "openid" && s !== "profile" && s !== "email"
    );
    if (scopeList.length === 0) {
        throw new Error("No hay scopes delegados para solicitar en el refresh token");
    }
    const scopeParam = scopeList.join(" ");
    const tokenUrl = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", refreshToken);
    params.append("client_id", clientId);
    params.append("scope", scopeParam);
    // (Si la app es confidencial y requiere client_secret, se debería incluir también aquí.
    // En aplicaciones SPA con PKCE normalmente no se usa secreto de cliente.)

    const response = await fetch(tokenUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
    });
    if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    if (!data.access_token) {
        throw new Error("Respuesta de refresh inválida");
    }
    // Actualizar storage con los nuevos tokens y expiración
    localStorage.setItem('ms_access_token', data.access_token);
    if (data.refresh_token) {
        localStorage.setItem('ms_refresh_token', data.refresh_token);
    }
    if (data.expires_in) {
        const newExp = Math.floor(Date.now() / 1000) + parseInt(data.expires_in);
        localStorage.setItem('ms_token_expires', String(newExp));
    }
    console.log("Token de acceso de Microsoft refrescado correctamente.");
    return data.access_token;
}

// Fin autenticación Microsoft














// Nueva autenticación y scopes para Google
// ✅ Guarda datos del token y usuario en localStorage
function guardarTokenGoogle({
	  access_token,        // ⬅️ nombre correcto devuelto por Google
	  refresh_token,
	  expires_in,
	  id,
	  nombre,
	  email,
	  scope
	}) {
	  if (access_token) localStorage.setItem("g_access_token", access_token);
	  if (refresh_token) localStorage.setItem("g_refresh_token", refresh_token);

	  if (expires_in) {
	    const expira = Math.floor(Date.now() / 1000) + parseInt(expires_in, 10);
	    localStorage.setItem("g_token_expires", String(expira));
	  }

	  if (id)     localStorage.setItem("g_user_id",    id);
	  if (nombre) localStorage.setItem("g_user_name",  nombre);
	  if (email)  localStorage.setItem("g_user_email", email);

	  if (scope) {
	    const nuevos      = scope.split(" ");
	    const previos     = JSON.parse(localStorage.getItem("g_granted_scopes") || "[]");
	    const actualizados = Array.from(new Set([...previos, ...nuevos]));
	    localStorage.setItem("g_granted_scopes", JSON.stringify(actualizados));
	  }
}


// 🔐 Autenticación principal con Google
async function obtenerTokenGoogle(tipo = 1) {

  if (window.__mccOAuthFlights?.__activeProvider && window.__mccOAuthFlights.__activeProvider !== 'google') {
    throw new Error(mccTextoSeguro('Hay otra autorización en curso. Finalízala o ciérrala antes de iniciar una nueva.'));
  }

  localStorage.setItem("provider_tmp", "1");

  const scopesByType = {
    1: ["openid", "email", "profile"],
    2: ["https://www.googleapis.com/auth/contacts.readonly"],
    3: ["https://www.googleapis.com/auth/drive.file"],
    4: ["https://www.googleapis.com/auth/gmail.send"]
  };

  /* 1 ▸ fusionar scopes base + específicos */
  const baseScopes  = ["openid", "email", "profile"];
  const extraScopes = scopesByType[tipo];
  if (!extraScopes) throw new Error("Tipo de autenticación Google no válido");
  const requiredScopes = [...new Set([...baseScopes, ...extraScopes])];

  const plataforma   = obtenerEntornoCliente();
  const accessToken  = localStorage.getItem("g_access_token");
  const tokenExp     = parseInt(localStorage.getItem("g_token_expires") || "0", 10);
  const nowSec       = Math.floor(Date.now() / 1000);
  const correoInvitacion = String(localStorage.getItem("correoInvitacion") || "").trim().toLowerCase();
	const tokenInvitacion = String(localStorage.getItem("tokenInvitacion") || "");
	const prefijoInvitacion = String(localStorage.getItem("prefijoInvitacion") || "");
	if (tipo === 1 && tokenInvitacion) {
	  window.__mccInvitacionPendiente = {
	    token: tokenInvitacion,
	    prefijo: prefijoInvitacion,
	    correo: correoInvitacion
	  };
	}
  const correoGoogleGuardado = String(localStorage.getItem("g_user_email") || "").trim().toLowerCase();
  const puedeReutilizarCredenciales = !correoInvitacion ||
    (correoGoogleGuardado && correoGoogleGuardado === correoInvitacion);
  let grantedScopes = [];
  try {
    grantedScopes = JSON.parse(localStorage.getItem("g_granted_scopes") || "[]");
  } catch (e) {
    grantedScopes = [];
  }
  const missingScopes = requiredScopes.filter(s => !grantedScopes.includes(s));

  /* 2 ▸ token aún válido en localStorage */
  if (puedeReutilizarCredenciales && accessToken && tokenExp > nowSec + 300 && missingScopes.length === 0) {
    console.log("✅ Usando token válido desde localStorage");

    const id          = localStorage.getItem("g_user_id");
    const nombre      = localStorage.getItem("g_user_name");
    const email       = localStorage.getItem("g_user_email");

    if (tipo === 1 && typeof validarIniSesion === "function") {
      validarIniSesion(1, id, nombre, email, '');
    }
    return accessToken;
  }

  /* 3 ▸ refrescar con refresh_token si existe */
  const refreshToken = localStorage.getItem("g_refresh_token");
  if (puedeReutilizarCredenciales && refreshToken && missingScopes.length === 0) {
    try {
      const token = await refreshGoogleToken(refreshToken, requiredScopes);
      console.log("✅ Token refrescado exitosamente");

      const id     = localStorage.getItem("g_user_id");
      const nombre = localStorage.getItem("g_user_name");
      const email  = localStorage.getItem("g_user_email");

      if (tipo === 1 && typeof validarIniSesion === "function") {
        validarIniSesion(1, id, nombre, email, '');
      }
      return token;
    } catch (e) {
      console.warn("Refresh Google fallido:", e);
    }
  }

	  /* 4 ▸ flujo PKCE inicial */
	  return mccTrackOAuth('google', tipo, async () => {
	    let popupGoogle = null;
	    if ((plataforma !== "ios") && (plataforma !== "macos")) {
	      popupGoogle = window.open("about:blank", "GoogleLogin", "width=600,height=700,menubar=no,toolbar=no");
	      if (!popupGoogle) {
	        throw new Error("Popup bloqueado");
	      }
	      try {
	        popupGoogle.document.write('<!doctype html><html><head><title>Google</title></head><body style="font-family:sans-serif;text-align:center;padding:2rem;">Conectando con Google...</body></html>');
	        popupGoogle.document.close();
	      } catch (e) {}
	    }

	    const codeVerifier  = generarCodeVerifier();
	    const codeChallenge = await generarCodeChallenge(codeVerifier);
	    localStorage.setItem("g_code_verifier", codeVerifier);
	    localStorage.setItem("g_auth_tipo",   tipo);
	    localStorage.setItem("g_pending_scopes", JSON.stringify(requiredScopes));

	    /* 5 ▸ usa redirect HTTPS porque este clientId de Google es de tipo Web */
	    const clientId = "968670907013-pn8b7vp24u7093h9t62tnj05aqi8aqq3.apps.googleusercontent.com";
	    const redirectUri = "https://" + window.location.host + "/app/googlelogin.html";

	    /* 6 ▸ construye URL de autorización */
    const state   = mccCrearEstadoOAuth("google");
	    const promptGoogle = correoInvitacion ? "select_account consent" : "consent";
	    const authUrl =
	      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(clientId)}` +
	      `&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}` +
	      `&scope=${encodeURIComponent(requiredScopes.join(" "))}` +
	      `&state=${encodeURIComponent(state)}` +
	      `&code_challenge=${encodeURIComponent(codeChallenge)}` +
	      `&code_challenge_method=S256&access_type=offline&prompt=${encodeURIComponent(promptGoogle)}`;

	    localStorage.setItem("g_client_id", clientId);
	    localStorage.setItem("g_redirectUri", redirectUri);

	    return new Promise((resolve, reject) => {
	      let popupPoll = null;
	      const marcarCallbackRecibido = () => {
	        if (popupPoll) {
	          clearInterval(popupPoll);
	          popupPoll = null;
	        }
	      };
	      const limpiarCallbacks = () => {
	        marcarCallbackRecibido();
	        window.__mccGoogleAuthCallbackReceived = null;
	        window.__mccGoogleAuthResolve = null;
	        window.__mccGoogleAuthReject = null;
	      };
	      window.__mccGoogleAuthCallbackReceived = marcarCallbackRecibido;

	      window.__mccGoogleAuthResolve = (token) => {
	        try {
	          if (popupGoogle && !popupGoogle.closed) popupGoogle.close();
	        } catch (e) {}
	        limpiarCallbacks();
	        resolve(token);
	      };
	      window.__mccGoogleAuthReject = (error) => {
	        try {
	          if (popupGoogle && !popupGoogle.closed) popupGoogle.close();
	        } catch (e) {}
	        limpiarCallbacks();
	        reject(error);
	      };

	      if ((plataforma === "ios") || (plataforma === "macos")) {
	        abrirOAuthNativo(authUrl, codeVerifier, redirectUri);
	        return;
	      }

	      if (popupGoogle && !popupGoogle.closed) {
	        mccRegistrarPopupOAuth("google", popupGoogle);
	        popupGoogle.location.href = authUrl;
	      }
	      if (!popupGoogle || popupGoogle.closed) {
	        const error = new Error("Popup bloqueado");
	        modal1(
	          "My Contacts Cloud",
	          "El navegador bloqueó la ventana emergente. Habilítala y vuelve a intentarlo.",
	          document.getElementById("msjIndex") || document.getElementById("msjModPrincipal")
	        );
	        window.__mccGoogleAuthReject(error);
	        return;
	      }

	      popupPoll = setInterval(() => {
	        if (popupGoogle.closed && typeof window.__mccGoogleAuthReject === "function") {
	          window.__mccGoogleAuthReject(new Error("Autenticación cancelada"));
	        }
	      }, 500);
	    });
	  });


}

// 🔁 Refresca un access_token usando el refresh_token
async function refreshGoogleToken(refreshToken, grantedScopes) {
  /* 1 ▸ intenta usar el clientId ya guardado */
  let clientId = localStorage.getItem("g_client_id");

  /* 2 ▸ si no existe (caso legacy), dedúcelo según la plataforma */
  if (!clientId) {
    const entorno = obtenerEntornoCliente();
    switch (entorno) {
      case "ios":
      case "macos":
        clientId = "968670907013-pn8b7vp24u7093h9t62tnj05aqi8aqq3.apps.googleusercontent.com";
        break;
      default: /* web */
        clientId = "968670907013-pn8b7vp24u7093h9t62tnj05aqi8aqq3.apps.googleusercontent.com";
    }
  }

  /* 3 ▸ prepara el cuerpo de la petición */
  const params = new URLSearchParams();
  params.append("grant_type",    "refresh_token");
  params.append("refresh_token", refreshToken);
  params.append("client_id",     clientId);

  /* ▸ Incremental auth: solo si pides scopes nuevos */
  const extraScopes = grantedScopes.filter(
    s => !["openid", "email", "profile"].includes(s)
  );
  if (extraScopes.length) params.append("scope", extraScopes.join(" "));

  /* 4 ▸ solicita un nuevo access_token */
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method:  "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body:    params.toString()
  });
  if (!res.ok) throw new Error("Fallo al refrescar token Google: " + res.status);

  const data = await res.json();
  if (!data.access_token)
    throw new Error("Respuesta inválida de refresh token");

  /* 5 ▸ persiste clientId para futuros refrescos */
  if (!localStorage.getItem("g_client_id"))
    localStorage.setItem("g_client_id", clientId);

  /* 6 ▸ guarda tokens y devuelve el nuevo access_token */
  guardarTokenGoogle(data);
  return data.access_token;
}



// Fin autenticación Google





// Autenticación Apple
async function obtenerTokenApple() {

  if (window.__mccOAuthFlights?.__activeProvider && window.__mccOAuthFlights.__activeProvider !== 'apple') {
    throw new Error(mccTextoSeguro('Hay otra autorización en curso. Finalízala o ciérrala antes de iniciar una nueva.'));
  }

  localStorage.setItem("provider_tmp", 3); // Apple

  const plataforma = obtenerEntornoCliente();


  const token = localStorage.getItem("apple_access_token");
  const expira = parseInt(localStorage.getItem("apple_token_expires") || "0", 10);
  const ahora = Math.floor(Date.now() / 1000);
  const id = localStorage.getItem("apple_user_id");
  const email = localStorage.getItem("apple_user_email");
  const nombre = localStorage.getItem("apple_user_name");

  if (token && expira > ahora && id && email) {
    // Token válido, iniciar sesión directamente
    if (typeof validarIniSesion === "function") {
      validarIniSesion(3, id, nombre || "", email, '');
    }
    return;
  }

  // Token no válido: limpiar datos residuales antes de iniciar autenticación
  localStorage.removeItem("apple_access_token");
  localStorage.removeItem("apple_token_expires");
  localStorage.removeItem("apple_user_id");
  localStorage.removeItem("apple_user_name");
  localStorage.removeItem("apple_user_email");
  localStorage.removeItem("apple_code_verifier");
  localStorage.removeItem("apple_auth_state");

  // Iniciar flujo según plataforma

  if (plataforma === "ios" || plataforma === "macos") {
    obtenerTokenAppleApp();
  } else {
    obtenerTokenAppleWeb();
  }
}




// 🔐 Apple Sign In (versión actualizada para iOS/macOS nativo + fallback web)
async function obtenerTokenAppleApp() {
  /* ────────────────────────────────────────────────
     1.  CASO NATIVO (iOS / macOS Catalyst)
     Si WebView expone el handler `appleSignIn`, delegamos
     la autenticación a Swift (AppleAuthService) y salimos.
  ──────────────────────────────────────────────── */
  if (window.webkit?.messageHandlers?.appleSignIn) {
    const state = mccCrearEstadoOAuth("apple");
    localStorage.setItem("apple_auth_state", state);
    window.webkit.messageHandlers.appleSignIn.postMessage({ state });
    return;                          // ← el flujo continúa en Swift
  }

  /* ────────────────────────────────────────────────
     2.  FALLBACK WEB (PWA, navegadores embebidos, etc.)
     Mantiene el flujo PKCE con redirect a esquema propio.
  ──────────────────────────────────────────────── */
  const clientId     = "cloud.mycontacts";               // App ID nativo
  const redirectUri  = "cloud.mycontacts://oauth/callback";
  const state        = mccCrearEstadoOAuth("apple");

  const codeVerifier  = generarCodeVerifier();
  const codeChallenge = await generarCodeChallenge(codeVerifier);

  localStorage.setItem("apple_code_verifier", codeVerifier);
  localStorage.setItem("apple_auth_state", state);

  const authUrl =
    "https://appleid.apple.com/auth/authorize" +
    `?client_id=${encodeURIComponent(clientId)}` +
    "&response_type=code" +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    "&response_mode=query" +
    "&scope=name%20email" +
    `&state=${encodeURIComponent(state)}` +
    `&code_challenge=${encodeURIComponent(codeChallenge)}` +
    "&code_challenge_method=S256";

  // Abre la ventana secundaria (implementación existente)
  const enlace = `direccion:${redirectUri}?authUrl=${encodeURIComponent(authUrl)}`;
  window.location.href = enlace;
}






async function obtenerTokenAppleWeb() {
  const clientId = "cloud.mycontacts.app"; // Tu Service ID en Apple
  const redirectUri = "https://" + window.location.host + "/apple/callback"; // URL registrada en Apple
  const state = mccCrearEstadoOAuth("apple");
  const codeVerifier = generarCodeVerifier();
  const codeChallenge = await generarCodeChallenge(codeVerifier);

  localStorage.setItem("provider_tmp", "3"); // Apple
  localStorage.setItem("apple_code_verifier", codeVerifier);
  localStorage.setItem("apple_auth_state", state);

  const authUrl =
    "https://appleid.apple.com/auth/authorize" +
    `?client_id=${encodeURIComponent(clientId)}` +
    "&response_type=code%20id_token" + // %20 para incluir id_token opcional
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    "&response_mode=form_post" + // obligatorio con scope name/email
    "&scope=name%20email" +
    `&state=${encodeURIComponent(state)}` +
    `&code_challenge=${encodeURIComponent(codeChallenge)}` +
    "&code_challenge_method=S256";

  // Abrir una ventana secundaria real para completar el flujo OAuth.
  const popup = window.open(
    authUrl,
    "AppleLogin",
    "width=600,height=700"
  );

  if (!popup) {
    mccCancelarOAuth("apple");
    modal1(
      "My Contacts Cloud",
      "No se pudo abrir la ventana de autenticación.",
      document.getElementById("msjIndex") || document.getElementById("msjModPrincipal")
    );
    return;
  }
  mccRegistrarPopupOAuth("apple", popup);
}

// Fin Autenticación Apple


// Código compartido autenticación

function obtenerEntornoCliente() {
  if (window.__nativePlatform === 'macos') return 'macos';
  if (window.__nativePlatform === 'ios')   return 'ios';
  if (window.webkit?.messageHandlers) {
    const ua = navigator.userAgent || "";
    const esMac = /Macintosh|Mac OS X/i.test(ua) && !/iPhone|iPad|iPod/i.test(ua) && (navigator.maxTouchPoints || 0) <= 1;
    return esMac ? 'macos' : 'ios';
  }
  return 'web';
}

function esAppNativaMcc() {
  const entorno = obtenerEntornoCliente();
  return entorno === 'macos' || entorno === 'ios';
}

function abrirOAuthNativo(authUrl, verifier = "", redirectUri = "") {
  const payload = {
    authUrl,
    verifier,
    redirectUri
  };

  try {
    if (window.webkit?.messageHandlers?.direccion?.postMessage) {
      window.webkit.messageHandlers.direccion.postMessage(payload);
      return true;
    }
  } catch (err) {
    console.warn("No se pudo abrir OAuth via messageHandler.direccion:", err);
  }

  const target = redirectUri || "oauth";
  const appRedirect =
    `direccion:${target}?authUrl=${encodeURIComponent(authUrl)}` +
    `&verifier=${encodeURIComponent(verifier)}` +
    (redirectUri ? `&redirectUri=${encodeURIComponent(redirectUri)}` : "");
  window.location.href = appRedirect;
  return true;
}



function generarCodeVerifier() {
  const array = new Uint8Array(64);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function generarCodeChallenge(verifier) {
  const data = new TextEncoder().encode(verifier);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

// Fin compartido autenticación


function textoCerrarSesionAlSalirMcc(id = "") {
    const idioma = (id || localStorage.getItem("idiomaPais") || navigator.language || "es")
        .substring(0, 2)
        .toLowerCase();

    switch (idioma) {
        case "en": return "Log out on exit";
        case "fr": return "Se déconnecter en quittant";
        case "it": return "Disconnetti alla chiusura";
        case "pt": return "Terminar sessão ao sair";
        case "de": return "Beim Beenden abmelden";
        case "ca": return "Tancar sessió en sortir";
        case "gl": return "Pechar sesión ao saír";
        default: return "Cerrar sesión al salir";
    }
}

function actualizarPreferenciaCerrarSesionUI(id = "") {
    const label = document.getElementById("cerrarSesionLabel");
    if (!label) return;

    const texto = textoCerrarSesionAlSalirMcc(id);
    const span = label.querySelector("span");
    if (span) {
        span.textContent = texto;
    } else {
        label.textContent = texto;
    }
    label.title = texto;

    const input = document.getElementById("cerrarSesion");
    if (input) input.title = texto;
}

function mccDebeMantenerSesionAbierta() {
    return localStorage.getItem("cerrarSesion") !== "1";
}

const MCC_SUPRIMIR_RESTAURACION_SALIDA = "mcc_suprimir_restauracion_salida";

function mccSessionStorageSet(key, value) {
    try {
        sessionStorage.setItem(key, value);
    } catch (err) {
        window[key] = value;
    }
}

function mccSessionStorageGet(key) {
    try {
        return sessionStorage.getItem(key);
    } catch (err) {
        return window[key] || null;
    }
}

function mccSessionStorageRemove(key) {
    try {
        sessionStorage.removeItem(key);
    } catch (err) {
        delete window[key];
    }
}

function mccMarcarSalidaSinLogoutMcc() {
    mccSessionStorageSet(MCC_SUPRIMIR_RESTAURACION_SALIDA, String(Date.now()));
}

function mccDebeSuprimirRestauracionSalidaMcc() {
    const valor = mccSessionStorageGet(MCC_SUPRIMIR_RESTAURACION_SALIDA);
    if (!valor) return false;

    const marcaTiempo = parseInt(valor, 10);
    if (!marcaTiempo || Date.now() - marcaTiempo > 12 * 60 * 60 * 1000) {
        mccLimpiarSupresionRestauracionSalidaMcc();
        return false;
    }

    return true;
}

function mccLimpiarSupresionRestauracionSalidaMcc() {
    mccSessionStorageRemove(MCC_SUPRIMIR_RESTAURACION_SALIDA);
}

function mccTokenVigente(expKey, margenSegundos = 300) {
    const exp = parseInt(localStorage.getItem(expKey) || "0", 10);
    return exp > Math.floor(Date.now() / 1000) + margenSegundos;
}

async function restaurarSesionAbiertaMcc() {
    if (!mccDebeMantenerSesionAbierta()) return false;
    if (mccDebeSuprimirRestauracionSalidaMcc()) return false;
    if (window.__mccRestaurandoSesionAbierta) return true;

    const tipoSesion = String(localStorage.getItem("tipoSesion") || "");
    if (!tipoSesion) return false;

    window.__mccRestaurandoSesionAbierta = true;

    try {
        if (tipoSesion === "0") {
            const correo = localStorage.getItem("correoElec");
            if (correo && typeof validarIniSesion === "function") {
                validarIniSesion(0, "", "", correo, "***SesionAbierta***");
                return true;
            }
            return false;
        }

        if (tipoSesion === "1") {
            const tieneUsuario = localStorage.getItem("g_user_id") && localStorage.getItem("g_user_email");
            const tieneToken = mccTokenVigente("g_token_expires") || localStorage.getItem("g_refresh_token");
            if (tieneUsuario && tieneToken && typeof obtenerTokenGoogle === "function") {
                await obtenerTokenGoogle(1);
                return true;
            }
            return false;
        }

        if (tipoSesion === "2") {
            const tieneUsuario = localStorage.getItem("ms_user_id") && localStorage.getItem("ms_user_email");
            const tieneToken = mccTokenVigente("ms_token_expires") || localStorage.getItem("ms_refresh_token");
            if (tieneUsuario && tieneToken && typeof obtenerTokenMicrosoft === "function") {
                await obtenerTokenMicrosoft(1);
                return true;
            }
            return false;
        }

        if (tipoSesion === "3") {
            const tokenValido = mccTokenVigente("apple_token_expires", 60);
            const id = localStorage.getItem("apple_user_id");
            const nombre = localStorage.getItem("apple_user_name") || "";
            const email = localStorage.getItem("apple_user_email");
            if (tokenValido && id && email && typeof validarIniSesion === "function") {
                validarIniSesion(3, id, nombre, email, "");
                return true;
            }
        }
    } catch (err) {
        console.warn("No se pudo restaurar la sesión abierta:", err);
    } finally {
        setTimeout(() => { window.__mccRestaurandoSesionAbierta = false; }, 1000);
    }

    return false;
}

async function mccAvisarCierreSesionServidor(correo) {
    if (!correo) return;

    const url = "https://" + window.location.host + "/cierreSesion?cor=" + encodeURIComponent(correo);
    let timeout = null;
    let controller = null;

    try {
        if (typeof AbortController !== "undefined") {
            controller = new AbortController();
            timeout = setTimeout(() => controller.abort(), 1800);
        }

        await fetch(url, {
            method: "POST",
            cache: "no-store",
            keepalive: true,
            signal: controller ? controller.signal : undefined
        });
    } catch (err) {
        try {
            if (navigator.sendBeacon) navigator.sendBeacon(url);
        } catch (beaconErr) {
            console.warn("No se pudo enviar cierreSesion:", beaconErr);
        }
    } finally {
        if (timeout) clearTimeout(timeout);
    }
}

async function mccRevocarTokenGoogle(token) {
    if (!token) return;

    const body = new URLSearchParams();
    body.append("token", token);

    try {
        await Promise.race([
            fetch("https://oauth2.googleapis.com/revoke", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: body.toString(),
                keepalive: true
            }),
            new Promise((resolve) => setTimeout(resolve, 1800))
        ]);
    } catch (err) {
        console.warn("Fallo al revocar token Google:", err);
    }
}

function mccLimpiarClavesSesion(keys) {
    keys.forEach((key) => localStorage.removeItem(key));
}

function mccLimpiarSesionComun() {
    mccLimpiarClavesSesion([
        "prefijo",
        "nombre",
        "usuarios",
        "maxRegFree",
        "plan",
        "nomRef1",
        "nomRef2",
        "nomRef3",
        "nomRef4",
        "titPref1",
        "titPref2",
        "titPref3",
        "titPref4",
        "titPref5",
        "titPref6",
        "nomGrupo1",
        "nomGrupo2",
        "nomGrupo3",
        "weekends",
        "slotMinTime",
        "slotMaxTime",
        "slotDuration",
        "totRegContactos",
        "usuarioMensaje",
        "estadoSuscripcion",
        "pruebaCancelada",
        "diasPruebaRestantes",
        "correoElec",
        "tipoSesion",
        "idSesion",
        "permisosGrupo",
        "uid",
        "divAnt",
        "divNue",
        "clienteCorreo"
    ]);
}

function mccLimpiarTokensGoogle() {
    mccLimpiarClavesSesion([
        "g_access_token",
        "g_refresh_token",
        "g_token_expires",
        "g_user_id",
        "g_user_name",
        "g_user_email",
        "g_auth_tipo",
        "g_granted_scopes",
        "g_pending_scopes",
        "g_code_verifier",
        "g_client_id",
        "g_redirectUri",
        "provider_tmp"
    ]);
}

function mccLimpiarTokensMicrosoft() {
    mccLimpiarClavesSesion([
        "ms_access_token",
        "ms_refresh_token",
        "ms_token_expires",
        "ms_user_id",
        "ms_user_name",
        "ms_user_email",
        "ms_granted_scopes",
        "ms_auth_tipo",
        "ms_code_verifier",
        "provider_tmp",
        "access_token",
        "refresh_token"
    ]);
}

function mccLimpiarTokensApple() {
    mccLimpiarClavesSesion([
        "apple_access_token",
        "apple_token_expires",
        "apple_user_id",
        "apple_user_name",
        "apple_user_email",
        "apple_code_verifier",
        "apple_auth_state",
        "provider_tmp",
        "appleAccessToken"
    ]);
}

function mccUrlAbsoluta(url) {
    try {
        return new URL(url, window.location.href).href;
    } catch (err) {
        return window.location.origin + "/app/index.html#install";
    }
}


// Salida app
async function salirApp() {
    if (window.__mccSalidaEnCurso) return;
    window.__mccSalidaEnCurso = true;

    const dirSalida = urlSalidaMcc();
    const cierreDefinitivo = localStorage.getItem("cerrarSesion") == 1;

    if (!cierreDefinitivo) {
        localStorage.setItem("procValida", true);
        mccMarcarSalidaSinLogoutMcc();
        location.replace(dirSalida);
        return;
    }

    const tipoSesion = localStorage.getItem("tipoSesion");
    const correo = localStorage.getItem("correoElec");
    const googleTokenRevocable = localStorage.getItem("g_refresh_token") || localStorage.getItem("g_access_token");

    await mccAvisarCierreSesionServidor(correo);
    localStorage.setItem("procValida", false);

    if (tipoSesion == 1) {
        mccLimpiarTokensGoogle();
        mccLimpiarSesionComun();
        localStorage.setItem("procValida", false);
        await mccRevocarTokenGoogle(googleTokenRevocable);
        location.replace(dirSalida);
        return;
    }

    if (tipoSesion == 2) {
        mccLimpiarTokensMicrosoft();
        mccLimpiarSesionComun();
        localStorage.setItem("procValida", false);

        if (esAppNativaMcc()) {
            location.replace(dirSalida);
        } else {
            const postLogout = encodeURIComponent(mccUrlAbsoluta(dirSalida));
            window.location.href = "https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=" + postLogout;
        }
        return;
    }

    if (tipoSesion == 3) {
        mccLimpiarTokensApple();
        mccLimpiarSesionComun();
        localStorage.setItem("procValida", false);
        location.replace(dirSalida);
        return;
    }

    mccLimpiarSesionComun();
    localStorage.setItem("procValida", false);
    location.replace(dirSalida);
}

function urlSalidaMcc() {
    if (esAppNativaMcc()) {
        return window.location.origin + '/app/index.html#install';
    }

    var i = localStorage.getItem('idiomaPais');
    var s = i ? i.substring(0, 2).toLowerCase() : "";
    if (s == 'en') { s = ""; }
    if (s != ""  ) { s = "/" + s; }
    return '..' + s + '/index.html#install';
}


// Gestión sencilla del proveedor de pagos y del equipo compartido.
function mccEsPropietario() {
    return localStorage.getItem('rolUsuario') === 'owner';
}

function mccSistemaPagos() {
    const valor = parseInt(localStorage.getItem('sistemaPagos') || '0', 10);
    return (valor === 1 || valor === 2) ? valor : 0;
}

function abrirPlanesProveedor() {
    if (!mccEsPropietario()) {
        modal1('My Contacts Cloud', tExp('La gestión de planes corresponde al propietario del equipo.', ''), msjModPrincipal);
        return;
    }
    const sistema = mccSistemaPagos();
    if (sistema === 1) {
        abrirVentanaUnica('planes.html');
    } else if (sistema === 2) {
        abrirVentanaUnica('planesPaddle.html');
    } else {
        modal1('My Contacts Cloud', tExp('El sistema de pagos no está configurado correctamente.', ''), msjModPrincipal);
    }
}

function abrirGestionSuscripcion() {
    if (!mccEsPropietario()) {
        modal1('My Contacts Cloud', tExp('La gestión de la suscripción corresponde al propietario del equipo.', ''), msjModPrincipal);
        return;
    }
    const sistema = mccSistemaPagos();
    if (sistema === 1) {
        abrirPortalStripe();
    } else if (sistema === 2) {
        abrirPortalPaddle();
    } else {
        modal1('My Contacts Cloud', tExp('El sistema de pagos no está configurado correctamente.', ''), msjModPrincipal);
    }
}

async function mccPeticionSesion(ruta, valores) {
    const formData = new FormData();
    formData.append('correoElec', localStorage.getItem('correoElec') || '');
    formData.append('uid', localStorage.getItem('uid') || '');
    Object.entries(valores || {}).forEach(([clave, valor]) => formData.append(clave, valor));
    const response = await fetch(ruta, { method: 'POST', body: formData, cache: 'no-store' });
    return response.json();
}

async function abrirPortalPaddle() {
    try {
        const data = await mccPeticionSesion('/paddlePortal');
        if (!data.success) throw new Error(data.message || 'No se pudo abrir la configuración de Paddle');
        if (data.data.accion === 'planes') {
            abrirVentanaUnica('planesPaddle.html');
        } else {
            window.open(data.data.url, '_blank', 'noopener');
        }
    } catch (error) {
        modal1('My Contacts Cloud', tExp(error.message, ''), msjModPrincipal);
    }
}

function actualizarMenuSegunRol() {
    const propietario = mccEsPropietario();
    const resumenEquipo = document.getElementById('filaResumenEquipo');
    const suscripcion = document.getElementById('espacioSuscripcion');
    const planes = document.getElementById('espacioPlanesPro');
    if (resumenEquipo) resumenEquipo.classList.toggle('d-none', !propietario);
    if (suscripcion) suscripcion.classList.toggle('d-none', !propietario);
    if (planes) planes.classList.toggle('d-none', !propietario);
}

function mccFormatoNumero(numero) {
    const idioma = seleccionarIdioma(localStorage.getItem('idiomaPais') || navigator.language || 'es-ES', false);
    return new Intl.NumberFormat(idioma).format(Number(numero || 0));
}

function mccFormatoBytes(bytes) {
    const valor = Number(bytes || 0);
    const idioma = seleccionarIdioma(localStorage.getItem('idiomaPais') || navigator.language || 'es-ES', false);
    const frances = idioma.toLowerCase().startsWith('fr');
    const formato = (numero, decimales) => new Intl.NumberFormat(idioma, {
        minimumFractionDigits: decimales,
        maximumFractionDigits: decimales
    }).format(numero);
    if (valor < 1000000) return formato(valor / 1000, 1) + (frances ? ' ko' : ' KB');
    if (valor < 1000000000) return formato(valor / 1000000, 1) + (frances ? ' Mo' : ' MB');
    return formato(valor / 1000000000, 2) + (frances ? ' Go' : ' GB');
}

function mccEstadoSuscripcion(estado) {
    const estados = {
        trialing: 'probando',
        probando: 'probando',
        active: 'Activo',
        canceled: 'cancelado'
    };
    return tExp(estados[estado] || estado || 'Sin suscripción', '');
}

function mccPintaUso(idTexto, idBarra, usado, limite, formateador) {
    const texto = document.getElementById(idTexto);
    const barra = document.getElementById(idBarra);
    const porcentaje = limite > 0 ? Math.min(100, Math.round((usado / limite) * 100)) : 0;
    if (texto) texto.textContent = formateador(usado) + (limite > 0 ? ' ' + tExp('de', '') + ' ' + formateador(limite) : '');
    if (barra) {
        barra.style.width = porcentaje + '%';
        barra.textContent = porcentaje + '%';
        barra.classList.toggle('bg-warning', porcentaje >= 80 && porcentaje < 100);
        barra.classList.toggle('bg-danger', porcentaje >= 100);
    }
}

async function iniciarDashboard() {
    try {
        const data = await mccPeticionSesion('/resumenCuenta');
        if (!data.success) throw new Error(tExp(data.message || 'No se pudo cargar el resumen', ''));
        const r = data.data;
		const version = document.getElementById('dashVersion');
		if (version) version.textContent = r.version || '4.0.0';
        document.getElementById('dashBienvenida').textContent = tExp('Hola', '') + ', ' + (r.nombre || '');
        document.getElementById('dashPlan').textContent = tExp(r.planNombre || 'Plan pendiente de identificar', '');
        document.getElementById('dashEstado').textContent = mccEstadoSuscripcion(r.estadoSuscripcion);
        document.getElementById('dashEventos').textContent = mccFormatoNumero(r.eventos);
        document.getElementById('dashInteracciones').textContent = mccFormatoNumero(r.interacciones);
        document.getElementById('dashDocumentos').textContent = mccFormatoNumero(r.documentos);
        mccPintaUso('dashUsuariosTexto', 'dashUsuariosBarra', r.usuariosUtilizados, r.usuariosIncluidos, mccFormatoNumero);
        mccPintaUso('dashContactosTexto', 'dashContactosBarra', r.contactosUtilizados, r.contactosIncluidos, mccFormatoNumero);
        mccPintaUso('dashAlmacenamientoTexto', 'dashAlmacenamientoBarra', r.almacenamientoBytes, r.almacenamientoLimite, mccFormatoBytes);
        const pago = document.getElementById('dashPago');
        if (pago) {
            pago.textContent = r.proveedor
                ? tExp('Facturación:', '') + ' ' + tExp(r.proveedor, '')
                : tExp('La facturación la gestiona el propietario', '');
        }
    } catch (error) {
        const host = document.getElementById('dashMensaje');
        if (host) host.textContent = tExp(error.message, '');
    }
}

async function mccCargarEquipo() {
    const data = await mccPeticionSesion('/equipo', { operacion: 'listar' });
    if (!data.success) throw new Error(tExp(data.message || 'No se pudo cargar el equipo', ''));
    const r = data.data;
    const idiomaEquipo = String(localStorage.getItem('idiomaPais') || '').toLowerCase();
    if (idiomaEquipo.startsWith('fr')) {
        let etiquetaUso = tExp('usuarios utilizados', '');
        if (Number(r.usuariosUtilizados) === 1) {
            etiquetaUso = etiquetaUso.replace('utilisateurs', 'utilisateur').replace('utilisés', 'utilisé');
        }
        document.getElementById('equipoUso').textContent = r.usuariosUtilizados + ' ' + etiquetaUso + ' ' + tExp('de', '') + ' ' + r.usuariosIncluidos;
    } else if (idiomaEquipo.startsWith('it')) {
        const etiquetaUsuario = Number(r.usuariosUtilizados) === 1 ? 'utente' : 'utenti';
        document.getElementById('equipoUso').textContent = r.usuariosUtilizados + ' ' + etiquetaUsuario + ' ' + tExp('de', '') + ' ' + r.usuariosIncluidos + ' in uso';
    } else if (idiomaEquipo.startsWith('de')) {
        document.getElementById('equipoUso').textContent = r.usuariosUtilizados + ' ' + tExp('de', '') + ' ' + r.usuariosIncluidos + ' ' + tExp('usuarios utilizados', '');
    } else {
        document.getElementById('equipoUso').textContent = r.usuariosUtilizados + ' ' + tExp('de', '') + ' ' + r.usuariosIncluidos + ' ' + tExp('usuarios utilizados', '');
    }
    const form = document.getElementById('formInvitarMiembro');
    if (form) form.classList.toggle('d-none', !r.puedeGestionar);
    const cuerpo = document.getElementById('equipoFilas');
    cuerpo.innerHTML = '';
    r.miembros.forEach((m) => {
        const tr = document.createElement('tr');
        [m.nombre || '—', m.email, tExp(m.rol, ''), tExp(m.estado, '')].forEach((valor) => {
            const td = document.createElement('td');
            td.textContent = valor;
            tr.appendChild(td);
        });
        const acciones = document.createElement('td');
        if (r.puedeGestionar && m.rol === 'Miembro') {
            if (m.estado === 'Invitación pendiente') {
                acciones.appendChild(mccBotonEquipo('Reenviar', 'reenviar', m));
                acciones.appendChild(mccBotonEquipo('Cancelar', 'cancelar', m));
			} else if (m.estado === 'Retirada pendiente') {
				acciones.appendChild(mccBotonEquipo('Reintentar retirada', 'retirar', m));
            } else {
                acciones.appendChild(mccBotonEquipo('Retirar', 'retirar', m));
            }
        }
        tr.appendChild(acciones);
        cuerpo.appendChild(tr);
    });
}

function mccBotonEquipo(texto, operacion, miembro) {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = operacion === 'retirar' || operacion === 'cancelar' ? 'btn btn-sm btn-outline-danger me-1' : 'btn btn-sm btn-outline-primary me-1';
    boton.textContent = tExp(texto, '');
    boton.addEventListener('click', async () => {
        const ejecutar = async () => {
            try {
                const data = await mccPeticionSesion('/equipo', {
                    operacion: operacion,
                    emailMiembro: miembro.email,
                    nombreMiembro: miembro.nombre || ''
                });
                if (!data.success) throw new Error(tExp(data.message || 'No se pudo completar la operación', ''));
                await mccCargarEquipo();
				mccMostrarMensajeEquipo((data.data && data.data.mensaje) || 'Operación completada.', false);
            } catch (error) {
				mccMostrarMensajeEquipo(error.message, true);
            }
        };
        if (operacion === 'retirar' || operacion === 'cancelar') {
            mostrarModal(tExp('¿Confirmas esta acción?', ''), ejecutar);
        } else {
            await ejecutar();
        }
    });
    return boton;
}

function iniciarEquipo() {
    const form = document.getElementById('formInvitarMiembro');
    const uso = document.getElementById('equipoUso');
    if (uso) uso.textContent = tExp('Cargando usuarios…', '');
    if (form && !form.dataset.preparado) {
        form.dataset.preparado = '1';
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const boton = form.querySelector('button[type="submit"]');
            if (boton) boton.disabled = true;
            try {
                const data = await mccPeticionSesion('/equipo', {
                    operacion: 'invitar',
                    nombreMiembro: document.getElementById('equipoNombre').value,
                    emailMiembro: document.getElementById('equipoEmail').value
                });
                if (!data.success) throw new Error(tExp(data.message || 'No se pudo enviar la invitación', ''));
                form.reset();
                await mccCargarEquipo();
				mccMostrarMensajeEquipo((data.data && data.data.mensaje) || 'Invitación enviada.', false);
            } catch (error) {
				mccMostrarMensajeEquipo(error.message, true);
            } finally {
                if (boton) boton.disabled = false;
            }
        });
    }
    mccCargarEquipo().catch((error) => {
		mccMostrarMensajeEquipo(error.message, true);
    });
}

function mccMostrarMensajeEquipo(mensaje, esError) {
	const host = document.getElementById('equipoMensaje');
	if (!host) return;
	host.classList.remove('text-danger');
	host.classList.add('text-dark');
	modal1('My Contacts Cloud', tExp(mensaje, ''), host);
}
