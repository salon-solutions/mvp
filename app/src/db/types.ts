import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { AppointmentStatus, NotificationType, NotificationStatus } from "./enums";

export type Account = {
  id: Generated<string>;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
};
export type Appointment = {
  id: Generated<string>;
  salonId: string;
  professionalId: string;
  serviceId: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string | null;
  date: Timestamp;
  startTime: string;
  endTime: string;
  status: Generated<AppointmentStatus>;
  notes: string | null;
  createdAt: Generated<Timestamp>;
};
export type Client = {
  id: Generated<string>;
  salonId: string;
  name: string;
  phone: string;
  email: string | null;
  birthday: Timestamp | null;
  totalAppointments: Generated<number>;
  lastAppointment: Timestamp | null;
  createdAt: Generated<Timestamp>;
};
export type Notification = {
  id: Generated<string>;
  appointmentId: string;
  type: NotificationType;
  status: NotificationStatus;
  scheduledAt: Timestamp;
  sentAt: Timestamp | null;
  createdAt: Generated<Timestamp>;
};
export type Professional = {
  id: Generated<string>;
  userId: string;
  salonId: string;
  name: string;
  photoUrl: string;
  active: Generated<boolean>;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
};
export type Salon = {
  id: Generated<string>;
  name: string;
  slug: string;
  ownerId: string;
  address: string;
  whatsapp: string | null;
  businessHours: unknown;
  logoUrl: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
};
export type Service = {
  id: Generated<string>;
  salonId: string;
  professionalId: string | null;
  name: string;
  duration: number;
  price: number;
  active: Generated<boolean>;
  createdAt: Generated<Timestamp>;
};
export type Session = {
  id: Generated<string>;
  sessionToken: string;
  userId: string;
  expires: Timestamp;
};
export type User = {
  id: Generated<string>;
  name: string;
  email: string;
  emailVerified: Timestamp | null;
  image: string | null;
  password: string | null;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
};
export type VerificationToken = {
  id: Generated<string>;
  identifier: string;
  token: string;
  expires: Timestamp;
};
export type DB = {
  Account: Account;
  Appointment: Appointment;
  Client: Client;
  Notification: Notification;
  Professional: Professional;
  Salon: Salon;
  Service: Service;
  Session: Session;
  User: User;
  VerificationToken: VerificationToken;
};
