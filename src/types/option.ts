import { Result, Ok, Err } from "./result";

export type Option<T> = Some<T> | None;

export interface Some<T> {
  readonly _tag: "Some";
  readonly value: T;
}

export interface None {
  readonly _tag: "None";
}

// Option constructors
export const Some = <T>(value: T): Some<T> => ({ _tag: "Some", value });
export const None: None = { _tag: "None" };

// Option methods
export const OptionUtils = {
  // Check if Option is Some
  isSome: <T>(option: Option<T>): option is Some<T> => option._tag === "Some",

  // Check if Option is None
  isNone: <T>(option: Option<T>): option is None => option._tag === "None",

  // Map over the value if Some
  map: <T, U>(option: Option<T>, fn: (value: T) => U): Option<U> =>
    option._tag === "Some" ? Some(fn(option.value)) : None,

  // FlatMap/bind operation
  flatMap: <T, U>(option: Option<T>, fn: (value: T) => Option<U>): Option<U> =>
    option._tag === "Some" ? fn(option.value) : None,

  // Get value or default
  unwrapOr: <T>(option: Option<T>, defaultValue: T): T =>
    option._tag === "Some" ? option.value : defaultValue,

  // Get value or compute default
  unwrapOrElse: <T>(option: Option<T>, fn: () => T): T =>
    option._tag === "Some" ? option.value : fn(),

  // Convert to Result with error if None
  okOr: <T, E>(option: Option<T>, error: E): Result<T, E> =>
    option._tag === "Some" ? Ok(option.value) : Err(error),

  // Filter based on predicate
  filter: <T>(
    option: Option<T>,
    predicate: (value: T) => boolean,
  ): Option<T> =>
    option._tag === "Some" && predicate(option.value) ? option : None,
};
