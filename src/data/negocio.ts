export const negocio = {
  direccion: "Calle 8 Sur #31A-40, Barrio Santa Matilde, Localidad Puente Aranda, Bogotá D.C.",
  horario: [{ dias: "Lunes a sábado", horas: "4:00 p.m. – 10:00 p.m." }],
  numeroWhatsApp: "573504223128",
  mensajeWhatsApp: "¡Hola! Quiero hacer un pedido en Patacón Burger 🍔",
};

export const enlaceWhatsApp = `https://wa.me/${negocio.numeroWhatsApp}?text=${encodeURIComponent(negocio.mensajeWhatsApp)}`;
export const enlaceMapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(negocio.direccion)}`;
