import { None, Option, Some } from "./option";

export type Result<T, E> = Ok<T> | Err<E>;

export interface Ok<T> {
  readonly _tag: "Ok";
  readonly value: T;
}

export interface Err<E> {
  readonly _tag: "Err";
  readonly error: E;
}

// Result constructors
export const Ok = <T>(value: T): Ok<T> => ({ _tag: "Ok", value });
export const Err = <E>(error: E): Err<E> => ({ _tag: "Err", error });

// Result methods
export const ResultUtils = {
  // Check if Result is Ok
  isOk: <T, E>(result: Result<T, E>): result is Ok<T> => result._tag === "Ok",

  // Check if Result is Err
  isErr: <T, E>(result: Result<T, E>): result is Err<E> =>
    result._tag === "Err",

  // Map over the value if Ok
  map: <T, U, E>(result: Result<T, E>, fn: (value: T) => U): Result<U, E> =>
    result._tag === "Ok" ? Ok(fn(result.value)) : result,

  // Map over the error if Err
  mapErr: <T, E, F>(result: Result<T, E>, fn: (error: E) => F): Result<T, F> =>
    result._tag === "Err" ? Err(fn(result.error)) : result,

  // FlatMap/bind operation
  flatMap: <T, U, E>(
    result: Result<T, E>,
    fn: (value: T) => Result<U, E>,
  ): Result<U, E> => (result._tag === "Ok" ? fn(result.value) : result),

  // Get value or default
  unwrapOr: <T, E>(result: Result<T, E>, defaultValue: T): T =>
    result._tag === "Ok" ? result.value : defaultValue,

  // Get value or compute default
  unwrapOrElse: <T, E>(result: Result<T, E>, fn: (error: E) => T): T =>
    result._tag === "Ok" ? result.value : fn(result.error),

  // Convert to Option, discarding error
  ok: <T, E>(result: Result<T, E>): Option<T> =>
    result._tag === "Ok" ? Some(result.value) : None,

  // Convert to Option of error, discarding value
  err: <T, E>(result: Result<T, E>): Option<E> =>
    result._tag === "Err" ? Some(result.error) : None,

  // Match on Result with handlers
  match: <T, E, U>(
    result: Result<T, E>,
    handlers: { ok: (value: T) => U; err: (error: E) => U },
  ): U =>
    result._tag === "Ok"
      ? handlers.ok(result.value)
      : handlers.err(result.error),
};

// Helper functions for converting from/to nullable values
export const fromNullable = <T>(value: T | null | undefined): Option<T> =>
  value != null ? Some(value) : None;

export const toNullable = <T>(option: Option<T>): T | null =>
  option._tag === "Some" ? option.value : null;

// Helper for try-catch operations
export const tryCatch = <T>(fn: () => T): Result<T, Error> => {
  try {
    return Ok(fn());
  } catch (error) {
    return Err(error instanceof Error ? error : new Error(String(error)));
  }
};

// Helper for async try-catch operations
export const asyncTryCatch = async <T>(
  fn: () => Promise<T>,
): Promise<Result<T, Error>> => {
  try {
    const value = await fn();
    return Ok(value);
  } catch (error) {
    return Err(error instanceof Error ? error : new Error(String(error)));
  }
};
