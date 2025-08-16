export const AppointmentStatus = {
  pending: "pending",
  confirmed: "confirmed",
  cancelled: "cancelled",
  done: "done",
  no_show: "no_show"
} as const;
export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus];
export const NotificationType = {
  whatsapp: "whatsapp",
  email: "email",
  sms: "sms"
} as const;
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
export const NotificationStatus = {
  queued: "queued",
  sent: "sent",
  failed: "failed"
} as const;
export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus];
