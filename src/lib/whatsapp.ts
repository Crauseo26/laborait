export const WHATSAPP_NUMBER = "59890000000"; // Placeholder for Uruguay number

export function getWhatsAppLink(message: string = "Hola Laborait, me gustaría recibir más información."): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
