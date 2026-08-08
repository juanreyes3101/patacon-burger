export const negocio = {
  direccion: "Calle 8 Sur #31A-40, Barrio Santa Matilde, Localidad Puente Aranda, Bogotá D.C.",
  horario: [{ dias: "Lunes a sábado", horas: "4:00 p.m. – 10:00 p.m." }],
  // Mismos datos que horario[], en formato que schema.org/JSON-LD (y el badge
  // de "abierto/cerrado") pueden leer directo, sin parsear texto.
  horarioSchema: {
    dias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abre: "16:00",
    cierra: "22:00",
  },
  numeroWhatsApp: "573504223128",
  mensajeWhatsApp: "¡Hola! Quiero hacer un pedido en Patacón Burger 🍔",
  metodosPago: [
    { nombre: "Efectivo" },
    { nombre: "Nequi", dato: "3504223128" },
    { nombre: "Llave Bre-B", dato: "3504223128" },
  ],
  // Vacío a propósito: sin cuenta de GoatCounter todavía. Crear una gratis en
  // goatcounter.com y pegar aquí el "code" del sitio para activar la analítica
  // — mientras esté vacío, no se carga ningún script de terceros.
  goatcounterCode: "",
};

export function enlacePedido(mensaje: string): string {
  return `https://wa.me/${negocio.numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
}

export const enlaceWhatsApp = enlacePedido(negocio.mensajeWhatsApp);
export const enlaceMapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(negocio.direccion)}`;
export const enlaceMapaEmbed = `https://www.google.com/maps?q=${encodeURIComponent(negocio.direccion)}&output=embed`;
