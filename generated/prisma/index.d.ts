
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Lecture
 * 
 */
export type Lecture = $Result.DefaultSelection<Prisma.$LecturePayload>
/**
 * Model Instructor
 * 
 */
export type Instructor = $Result.DefaultSelection<Prisma.$InstructorPayload>
/**
 * Model LectureInstructor
 * 
 */
export type LectureInstructor = $Result.DefaultSelection<Prisma.$LectureInstructorPayload>
/**
 * Model LecturePeriod
 * 
 */
export type LecturePeriod = $Result.DefaultSelection<Prisma.$LecturePeriodPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Lectures
 * const lectures = await prisma.lecture.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Lectures
   * const lectures = await prisma.lecture.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.lecture`: Exposes CRUD operations for the **Lecture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lectures
    * const lectures = await prisma.lecture.findMany()
    * ```
    */
  get lecture(): Prisma.LectureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructor`: Exposes CRUD operations for the **Instructor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instructors
    * const instructors = await prisma.instructor.findMany()
    * ```
    */
  get instructor(): Prisma.InstructorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lectureInstructor`: Exposes CRUD operations for the **LectureInstructor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LectureInstructors
    * const lectureInstructors = await prisma.lectureInstructor.findMany()
    * ```
    */
  get lectureInstructor(): Prisma.LectureInstructorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecturePeriod`: Exposes CRUD operations for the **LecturePeriod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LecturePeriods
    * const lecturePeriods = await prisma.lecturePeriod.findMany()
    * ```
    */
  get lecturePeriod(): Prisma.LecturePeriodDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Lecture: 'Lecture',
    Instructor: 'Instructor',
    LectureInstructor: 'LectureInstructor',
    LecturePeriod: 'LecturePeriod'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "lecture" | "instructor" | "lectureInstructor" | "lecturePeriod"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Lecture: {
        payload: Prisma.$LecturePayload<ExtArgs>
        fields: Prisma.LectureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LectureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LectureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          findFirst: {
            args: Prisma.LectureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LectureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          findMany: {
            args: Prisma.LectureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>[]
          }
          create: {
            args: Prisma.LectureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          createMany: {
            args: Prisma.LectureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LectureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>[]
          }
          delete: {
            args: Prisma.LectureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          update: {
            args: Prisma.LectureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          deleteMany: {
            args: Prisma.LectureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LectureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LectureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>[]
          }
          upsert: {
            args: Prisma.LectureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          aggregate: {
            args: Prisma.LectureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecture>
          }
          groupBy: {
            args: Prisma.LectureGroupByArgs<ExtArgs>
            result: $Utils.Optional<LectureGroupByOutputType>[]
          }
          count: {
            args: Prisma.LectureCountArgs<ExtArgs>
            result: $Utils.Optional<LectureCountAggregateOutputType> | number
          }
        }
      }
      Instructor: {
        payload: Prisma.$InstructorPayload<ExtArgs>
        fields: Prisma.InstructorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findFirst: {
            args: Prisma.InstructorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findMany: {
            args: Prisma.InstructorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          create: {
            args: Prisma.InstructorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          createMany: {
            args: Prisma.InstructorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          delete: {
            args: Prisma.InstructorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          update: {
            args: Prisma.InstructorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          deleteMany: {
            args: Prisma.InstructorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          upsert: {
            args: Prisma.InstructorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          aggregate: {
            args: Prisma.InstructorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructor>
          }
          groupBy: {
            args: Prisma.InstructorGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructorCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorCountAggregateOutputType> | number
          }
        }
      }
      LectureInstructor: {
        payload: Prisma.$LectureInstructorPayload<ExtArgs>
        fields: Prisma.LectureInstructorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LectureInstructorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureInstructorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LectureInstructorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureInstructorPayload>
          }
          findFirst: {
            args: Prisma.LectureInstructorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureInstructorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LectureInstructorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureInstructorPayload>
          }
          findMany: {
            args: Prisma.LectureInstructorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureInstructorPayload>[]
          }
          create: {
            args: Prisma.LectureInstructorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureInstructorPayload>
          }
          createMany: {
            args: Prisma.LectureInstructorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LectureInstructorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureInstructorPayload>[]
          }
          delete: {
            args: Prisma.LectureInstructorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureInstructorPayload>
          }
          update: {
            args: Prisma.LectureInstructorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureInstructorPayload>
          }
          deleteMany: {
            args: Prisma.LectureInstructorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LectureInstructorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LectureInstructorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureInstructorPayload>[]
          }
          upsert: {
            args: Prisma.LectureInstructorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureInstructorPayload>
          }
          aggregate: {
            args: Prisma.LectureInstructorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLectureInstructor>
          }
          groupBy: {
            args: Prisma.LectureInstructorGroupByArgs<ExtArgs>
            result: $Utils.Optional<LectureInstructorGroupByOutputType>[]
          }
          count: {
            args: Prisma.LectureInstructorCountArgs<ExtArgs>
            result: $Utils.Optional<LectureInstructorCountAggregateOutputType> | number
          }
        }
      }
      LecturePeriod: {
        payload: Prisma.$LecturePeriodPayload<ExtArgs>
        fields: Prisma.LecturePeriodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LecturePeriodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePeriodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LecturePeriodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePeriodPayload>
          }
          findFirst: {
            args: Prisma.LecturePeriodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePeriodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LecturePeriodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePeriodPayload>
          }
          findMany: {
            args: Prisma.LecturePeriodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePeriodPayload>[]
          }
          create: {
            args: Prisma.LecturePeriodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePeriodPayload>
          }
          createMany: {
            args: Prisma.LecturePeriodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LecturePeriodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePeriodPayload>[]
          }
          delete: {
            args: Prisma.LecturePeriodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePeriodPayload>
          }
          update: {
            args: Prisma.LecturePeriodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePeriodPayload>
          }
          deleteMany: {
            args: Prisma.LecturePeriodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LecturePeriodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LecturePeriodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePeriodPayload>[]
          }
          upsert: {
            args: Prisma.LecturePeriodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePeriodPayload>
          }
          aggregate: {
            args: Prisma.LecturePeriodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecturePeriod>
          }
          groupBy: {
            args: Prisma.LecturePeriodGroupByArgs<ExtArgs>
            result: $Utils.Optional<LecturePeriodGroupByOutputType>[]
          }
          count: {
            args: Prisma.LecturePeriodCountArgs<ExtArgs>
            result: $Utils.Optional<LecturePeriodCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    lecture?: LectureOmit
    instructor?: InstructorOmit
    lectureInstructor?: LectureInstructorOmit
    lecturePeriod?: LecturePeriodOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LectureCountOutputType
   */

  export type LectureCountOutputType = {
    instructors: number
    periods: number
  }

  export type LectureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructors?: boolean | LectureCountOutputTypeCountInstructorsArgs
    periods?: boolean | LectureCountOutputTypeCountPeriodsArgs
  }

  // Custom InputTypes
  /**
   * LectureCountOutputType without action
   */
  export type LectureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureCountOutputType
     */
    select?: LectureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LectureCountOutputType without action
   */
  export type LectureCountOutputTypeCountInstructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureInstructorWhereInput
  }

  /**
   * LectureCountOutputType without action
   */
  export type LectureCountOutputTypeCountPeriodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturePeriodWhereInput
  }


  /**
   * Count Type InstructorCountOutputType
   */

  export type InstructorCountOutputType = {
    lectures: number
  }

  export type InstructorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lectures?: boolean | InstructorCountOutputTypeCountLecturesArgs
  }

  // Custom InputTypes
  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorCountOutputType
     */
    select?: InstructorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeCountLecturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureInstructorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Lecture
   */

  export type AggregateLecture = {
    _count: LectureCountAggregateOutputType | null
    _avg: LectureAvgAggregateOutputType | null
    _sum: LectureSumAggregateOutputType | null
    _min: LectureMinAggregateOutputType | null
    _max: LectureMaxAggregateOutputType | null
  }

  export type LectureAvgAggregateOutputType = {
    id: number | null
    credits: number | null
    grade: number | null
  }

  export type LectureSumAggregateOutputType = {
    id: number | null
    credits: number | null
    grade: number[]
  }

  export type LectureMinAggregateOutputType = {
    id: number | null
    subjectName: string | null
    timetableCode: string | null
    credits: number | null
    semester: string | null
    createdAt: Date | null
    classroom: string | null
    lastUpdated: string | null
    overview: string | null
    objectives: string | null
    learningOutcomes: string | null
    teachingMethod: string | null
    notes: string | null
    preparation: string | null
    evaluation: string | null
    textbook: string | null
    referenceMaterials: string | null
    schedulePlan: string | null
  }

  export type LectureMaxAggregateOutputType = {
    id: number | null
    subjectName: string | null
    timetableCode: string | null
    credits: number | null
    semester: string | null
    createdAt: Date | null
    classroom: string | null
    lastUpdated: string | null
    overview: string | null
    objectives: string | null
    learningOutcomes: string | null
    teachingMethod: string | null
    notes: string | null
    preparation: string | null
    evaluation: string | null
    textbook: string | null
    referenceMaterials: string | null
    schedulePlan: string | null
  }

  export type LectureCountAggregateOutputType = {
    id: number
    subjectName: number
    timetableCode: number
    credits: number
    semester: number
    grade: number
    department: number
    createdAt: number
    classroom: number
    lastUpdated: number
    overview: number
    objectives: number
    learningOutcomes: number
    teachingMethod: number
    notes: number
    preparation: number
    evaluation: number
    textbook: number
    referenceMaterials: number
    schedulePlan: number
    _all: number
  }


  export type LectureAvgAggregateInputType = {
    id?: true
    credits?: true
    grade?: true
  }

  export type LectureSumAggregateInputType = {
    id?: true
    credits?: true
    grade?: true
  }

  export type LectureMinAggregateInputType = {
    id?: true
    subjectName?: true
    timetableCode?: true
    credits?: true
    semester?: true
    createdAt?: true
    classroom?: true
    lastUpdated?: true
    overview?: true
    objectives?: true
    learningOutcomes?: true
    teachingMethod?: true
    notes?: true
    preparation?: true
    evaluation?: true
    textbook?: true
    referenceMaterials?: true
    schedulePlan?: true
  }

  export type LectureMaxAggregateInputType = {
    id?: true
    subjectName?: true
    timetableCode?: true
    credits?: true
    semester?: true
    createdAt?: true
    classroom?: true
    lastUpdated?: true
    overview?: true
    objectives?: true
    learningOutcomes?: true
    teachingMethod?: true
    notes?: true
    preparation?: true
    evaluation?: true
    textbook?: true
    referenceMaterials?: true
    schedulePlan?: true
  }

  export type LectureCountAggregateInputType = {
    id?: true
    subjectName?: true
    timetableCode?: true
    credits?: true
    semester?: true
    grade?: true
    department?: true
    createdAt?: true
    classroom?: true
    lastUpdated?: true
    overview?: true
    objectives?: true
    learningOutcomes?: true
    teachingMethod?: true
    notes?: true
    preparation?: true
    evaluation?: true
    textbook?: true
    referenceMaterials?: true
    schedulePlan?: true
    _all?: true
  }

  export type LectureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecture to aggregate.
     */
    where?: LectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lectures to fetch.
     */
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lectures
    **/
    _count?: true | LectureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LectureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LectureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LectureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LectureMaxAggregateInputType
  }

  export type GetLectureAggregateType<T extends LectureAggregateArgs> = {
        [P in keyof T & keyof AggregateLecture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecture[P]>
      : GetScalarType<T[P], AggregateLecture[P]>
  }




  export type LectureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureWhereInput
    orderBy?: LectureOrderByWithAggregationInput | LectureOrderByWithAggregationInput[]
    by: LectureScalarFieldEnum[] | LectureScalarFieldEnum
    having?: LectureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LectureCountAggregateInputType | true
    _avg?: LectureAvgAggregateInputType
    _sum?: LectureSumAggregateInputType
    _min?: LectureMinAggregateInputType
    _max?: LectureMaxAggregateInputType
  }

  export type LectureGroupByOutputType = {
    id: number
    subjectName: string
    timetableCode: string
    credits: number
    semester: string
    grade: number[]
    department: string[]
    createdAt: Date
    classroom: string
    lastUpdated: string
    overview: string
    objectives: string
    learningOutcomes: string
    teachingMethod: string
    notes: string
    preparation: string
    evaluation: string
    textbook: string
    referenceMaterials: string
    schedulePlan: string
    _count: LectureCountAggregateOutputType | null
    _avg: LectureAvgAggregateOutputType | null
    _sum: LectureSumAggregateOutputType | null
    _min: LectureMinAggregateOutputType | null
    _max: LectureMaxAggregateOutputType | null
  }

  type GetLectureGroupByPayload<T extends LectureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LectureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LectureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LectureGroupByOutputType[P]>
            : GetScalarType<T[P], LectureGroupByOutputType[P]>
        }
      >
    >


  export type LectureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectName?: boolean
    timetableCode?: boolean
    credits?: boolean
    semester?: boolean
    grade?: boolean
    department?: boolean
    createdAt?: boolean
    classroom?: boolean
    lastUpdated?: boolean
    overview?: boolean
    objectives?: boolean
    learningOutcomes?: boolean
    teachingMethod?: boolean
    notes?: boolean
    preparation?: boolean
    evaluation?: boolean
    textbook?: boolean
    referenceMaterials?: boolean
    schedulePlan?: boolean
    instructors?: boolean | Lecture$instructorsArgs<ExtArgs>
    periods?: boolean | Lecture$periodsArgs<ExtArgs>
    _count?: boolean | LectureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecture"]>

  export type LectureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectName?: boolean
    timetableCode?: boolean
    credits?: boolean
    semester?: boolean
    grade?: boolean
    department?: boolean
    createdAt?: boolean
    classroom?: boolean
    lastUpdated?: boolean
    overview?: boolean
    objectives?: boolean
    learningOutcomes?: boolean
    teachingMethod?: boolean
    notes?: boolean
    preparation?: boolean
    evaluation?: boolean
    textbook?: boolean
    referenceMaterials?: boolean
    schedulePlan?: boolean
  }, ExtArgs["result"]["lecture"]>

  export type LectureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectName?: boolean
    timetableCode?: boolean
    credits?: boolean
    semester?: boolean
    grade?: boolean
    department?: boolean
    createdAt?: boolean
    classroom?: boolean
    lastUpdated?: boolean
    overview?: boolean
    objectives?: boolean
    learningOutcomes?: boolean
    teachingMethod?: boolean
    notes?: boolean
    preparation?: boolean
    evaluation?: boolean
    textbook?: boolean
    referenceMaterials?: boolean
    schedulePlan?: boolean
  }, ExtArgs["result"]["lecture"]>

  export type LectureSelectScalar = {
    id?: boolean
    subjectName?: boolean
    timetableCode?: boolean
    credits?: boolean
    semester?: boolean
    grade?: boolean
    department?: boolean
    createdAt?: boolean
    classroom?: boolean
    lastUpdated?: boolean
    overview?: boolean
    objectives?: boolean
    learningOutcomes?: boolean
    teachingMethod?: boolean
    notes?: boolean
    preparation?: boolean
    evaluation?: boolean
    textbook?: boolean
    referenceMaterials?: boolean
    schedulePlan?: boolean
  }

  export type LectureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subjectName" | "timetableCode" | "credits" | "semester" | "grade" | "department" | "createdAt" | "classroom" | "lastUpdated" | "overview" | "objectives" | "learningOutcomes" | "teachingMethod" | "notes" | "preparation" | "evaluation" | "textbook" | "referenceMaterials" | "schedulePlan", ExtArgs["result"]["lecture"]>
  export type LectureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructors?: boolean | Lecture$instructorsArgs<ExtArgs>
    periods?: boolean | Lecture$periodsArgs<ExtArgs>
    _count?: boolean | LectureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LectureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LectureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LecturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lecture"
    objects: {
      instructors: Prisma.$LectureInstructorPayload<ExtArgs>[]
      periods: Prisma.$LecturePeriodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subjectName: string
      timetableCode: string
      credits: number
      semester: string
      grade: number[]
      department: string[]
      createdAt: Date
      classroom: string
      lastUpdated: string
      overview: string
      objectives: string
      learningOutcomes: string
      teachingMethod: string
      notes: string
      preparation: string
      evaluation: string
      textbook: string
      referenceMaterials: string
      schedulePlan: string
    }, ExtArgs["result"]["lecture"]>
    composites: {}
  }

  type LectureGetPayload<S extends boolean | null | undefined | LectureDefaultArgs> = $Result.GetResult<Prisma.$LecturePayload, S>

  type LectureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LectureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LectureCountAggregateInputType | true
    }

  export interface LectureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lecture'], meta: { name: 'Lecture' } }
    /**
     * Find zero or one Lecture that matches the filter.
     * @param {LectureFindUniqueArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LectureFindUniqueArgs>(args: SelectSubset<T, LectureFindUniqueArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lecture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LectureFindUniqueOrThrowArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LectureFindUniqueOrThrowArgs>(args: SelectSubset<T, LectureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureFindFirstArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LectureFindFirstArgs>(args?: SelectSubset<T, LectureFindFirstArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureFindFirstOrThrowArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LectureFindFirstOrThrowArgs>(args?: SelectSubset<T, LectureFindFirstOrThrowArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lectures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lectures
     * const lectures = await prisma.lecture.findMany()
     * 
     * // Get first 10 Lectures
     * const lectures = await prisma.lecture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lectureWithIdOnly = await prisma.lecture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LectureFindManyArgs>(args?: SelectSubset<T, LectureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lecture.
     * @param {LectureCreateArgs} args - Arguments to create a Lecture.
     * @example
     * // Create one Lecture
     * const Lecture = await prisma.lecture.create({
     *   data: {
     *     // ... data to create a Lecture
     *   }
     * })
     * 
     */
    create<T extends LectureCreateArgs>(args: SelectSubset<T, LectureCreateArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lectures.
     * @param {LectureCreateManyArgs} args - Arguments to create many Lectures.
     * @example
     * // Create many Lectures
     * const lecture = await prisma.lecture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LectureCreateManyArgs>(args?: SelectSubset<T, LectureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lectures and returns the data saved in the database.
     * @param {LectureCreateManyAndReturnArgs} args - Arguments to create many Lectures.
     * @example
     * // Create many Lectures
     * const lecture = await prisma.lecture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lectures and only return the `id`
     * const lectureWithIdOnly = await prisma.lecture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LectureCreateManyAndReturnArgs>(args?: SelectSubset<T, LectureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lecture.
     * @param {LectureDeleteArgs} args - Arguments to delete one Lecture.
     * @example
     * // Delete one Lecture
     * const Lecture = await prisma.lecture.delete({
     *   where: {
     *     // ... filter to delete one Lecture
     *   }
     * })
     * 
     */
    delete<T extends LectureDeleteArgs>(args: SelectSubset<T, LectureDeleteArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lecture.
     * @param {LectureUpdateArgs} args - Arguments to update one Lecture.
     * @example
     * // Update one Lecture
     * const lecture = await prisma.lecture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LectureUpdateArgs>(args: SelectSubset<T, LectureUpdateArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lectures.
     * @param {LectureDeleteManyArgs} args - Arguments to filter Lectures to delete.
     * @example
     * // Delete a few Lectures
     * const { count } = await prisma.lecture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LectureDeleteManyArgs>(args?: SelectSubset<T, LectureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lectures
     * const lecture = await prisma.lecture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LectureUpdateManyArgs>(args: SelectSubset<T, LectureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lectures and returns the data updated in the database.
     * @param {LectureUpdateManyAndReturnArgs} args - Arguments to update many Lectures.
     * @example
     * // Update many Lectures
     * const lecture = await prisma.lecture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lectures and only return the `id`
     * const lectureWithIdOnly = await prisma.lecture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LectureUpdateManyAndReturnArgs>(args: SelectSubset<T, LectureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lecture.
     * @param {LectureUpsertArgs} args - Arguments to update or create a Lecture.
     * @example
     * // Update or create a Lecture
     * const lecture = await prisma.lecture.upsert({
     *   create: {
     *     // ... data to create a Lecture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecture we want to update
     *   }
     * })
     */
    upsert<T extends LectureUpsertArgs>(args: SelectSubset<T, LectureUpsertArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureCountArgs} args - Arguments to filter Lectures to count.
     * @example
     * // Count the number of Lectures
     * const count = await prisma.lecture.count({
     *   where: {
     *     // ... the filter for the Lectures we want to count
     *   }
     * })
    **/
    count<T extends LectureCountArgs>(
      args?: Subset<T, LectureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LectureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LectureAggregateArgs>(args: Subset<T, LectureAggregateArgs>): Prisma.PrismaPromise<GetLectureAggregateType<T>>

    /**
     * Group by Lecture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LectureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LectureGroupByArgs['orderBy'] }
        : { orderBy?: LectureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LectureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLectureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lecture model
   */
  readonly fields: LectureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lecture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LectureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructors<T extends Lecture$instructorsArgs<ExtArgs> = {}>(args?: Subset<T, Lecture$instructorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureInstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    periods<T extends Lecture$periodsArgs<ExtArgs> = {}>(args?: Subset<T, Lecture$periodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lecture model
   */
  interface LectureFieldRefs {
    readonly id: FieldRef<"Lecture", 'Int'>
    readonly subjectName: FieldRef<"Lecture", 'String'>
    readonly timetableCode: FieldRef<"Lecture", 'String'>
    readonly credits: FieldRef<"Lecture", 'Int'>
    readonly semester: FieldRef<"Lecture", 'String'>
    readonly grade: FieldRef<"Lecture", 'Int[]'>
    readonly department: FieldRef<"Lecture", 'String[]'>
    readonly createdAt: FieldRef<"Lecture", 'DateTime'>
    readonly classroom: FieldRef<"Lecture", 'String'>
    readonly lastUpdated: FieldRef<"Lecture", 'String'>
    readonly overview: FieldRef<"Lecture", 'String'>
    readonly objectives: FieldRef<"Lecture", 'String'>
    readonly learningOutcomes: FieldRef<"Lecture", 'String'>
    readonly teachingMethod: FieldRef<"Lecture", 'String'>
    readonly notes: FieldRef<"Lecture", 'String'>
    readonly preparation: FieldRef<"Lecture", 'String'>
    readonly evaluation: FieldRef<"Lecture", 'String'>
    readonly textbook: FieldRef<"Lecture", 'String'>
    readonly referenceMaterials: FieldRef<"Lecture", 'String'>
    readonly schedulePlan: FieldRef<"Lecture", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lecture findUnique
   */
  export type LectureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter, which Lecture to fetch.
     */
    where: LectureWhereUniqueInput
  }

  /**
   * Lecture findUniqueOrThrow
   */
  export type LectureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter, which Lecture to fetch.
     */
    where: LectureWhereUniqueInput
  }

  /**
   * Lecture findFirst
   */
  export type LectureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter, which Lecture to fetch.
     */
    where?: LectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lectures to fetch.
     */
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lectures.
     */
    cursor?: LectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lectures.
     */
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * Lecture findFirstOrThrow
   */
  export type LectureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter, which Lecture to fetch.
     */
    where?: LectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lectures to fetch.
     */
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lectures.
     */
    cursor?: LectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lectures.
     */
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * Lecture findMany
   */
  export type LectureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter, which Lectures to fetch.
     */
    where?: LectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lectures to fetch.
     */
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lectures.
     */
    cursor?: LectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lectures.
     */
    skip?: number
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * Lecture create
   */
  export type LectureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * The data needed to create a Lecture.
     */
    data: XOR<LectureCreateInput, LectureUncheckedCreateInput>
  }

  /**
   * Lecture createMany
   */
  export type LectureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lectures.
     */
    data: LectureCreateManyInput | LectureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lecture createManyAndReturn
   */
  export type LectureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * The data used to create many Lectures.
     */
    data: LectureCreateManyInput | LectureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lecture update
   */
  export type LectureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * The data needed to update a Lecture.
     */
    data: XOR<LectureUpdateInput, LectureUncheckedUpdateInput>
    /**
     * Choose, which Lecture to update.
     */
    where: LectureWhereUniqueInput
  }

  /**
   * Lecture updateMany
   */
  export type LectureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lectures.
     */
    data: XOR<LectureUpdateManyMutationInput, LectureUncheckedUpdateManyInput>
    /**
     * Filter which Lectures to update
     */
    where?: LectureWhereInput
    /**
     * Limit how many Lectures to update.
     */
    limit?: number
  }

  /**
   * Lecture updateManyAndReturn
   */
  export type LectureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * The data used to update Lectures.
     */
    data: XOR<LectureUpdateManyMutationInput, LectureUncheckedUpdateManyInput>
    /**
     * Filter which Lectures to update
     */
    where?: LectureWhereInput
    /**
     * Limit how many Lectures to update.
     */
    limit?: number
  }

  /**
   * Lecture upsert
   */
  export type LectureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * The filter to search for the Lecture to update in case it exists.
     */
    where: LectureWhereUniqueInput
    /**
     * In case the Lecture found by the `where` argument doesn't exist, create a new Lecture with this data.
     */
    create: XOR<LectureCreateInput, LectureUncheckedCreateInput>
    /**
     * In case the Lecture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LectureUpdateInput, LectureUncheckedUpdateInput>
  }

  /**
   * Lecture delete
   */
  export type LectureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter which Lecture to delete.
     */
    where: LectureWhereUniqueInput
  }

  /**
   * Lecture deleteMany
   */
  export type LectureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lectures to delete
     */
    where?: LectureWhereInput
    /**
     * Limit how many Lectures to delete.
     */
    limit?: number
  }

  /**
   * Lecture.instructors
   */
  export type Lecture$instructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureInstructor
     */
    select?: LectureInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureInstructor
     */
    omit?: LectureInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInstructorInclude<ExtArgs> | null
    where?: LectureInstructorWhereInput
    orderBy?: LectureInstructorOrderByWithRelationInput | LectureInstructorOrderByWithRelationInput[]
    cursor?: LectureInstructorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LectureInstructorScalarFieldEnum | LectureInstructorScalarFieldEnum[]
  }

  /**
   * Lecture.periods
   */
  export type Lecture$periodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturePeriod
     */
    select?: LecturePeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturePeriod
     */
    omit?: LecturePeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturePeriodInclude<ExtArgs> | null
    where?: LecturePeriodWhereInput
    orderBy?: LecturePeriodOrderByWithRelationInput | LecturePeriodOrderByWithRelationInput[]
    cursor?: LecturePeriodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LecturePeriodScalarFieldEnum | LecturePeriodScalarFieldEnum[]
  }

  /**
   * Lecture without action
   */
  export type LectureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
  }


  /**
   * Model Instructor
   */

  export type AggregateInstructor = {
    _count: InstructorCountAggregateOutputType | null
    _avg: InstructorAvgAggregateOutputType | null
    _sum: InstructorSumAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  export type InstructorAvgAggregateOutputType = {
    id: number | null
  }

  export type InstructorSumAggregateOutputType = {
    id: number | null
  }

  export type InstructorMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type InstructorMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type InstructorCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type InstructorAvgAggregateInputType = {
    id?: true
  }

  export type InstructorSumAggregateInputType = {
    id?: true
  }

  export type InstructorMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type InstructorMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type InstructorCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type InstructorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructor to aggregate.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instructors
    **/
    _count?: true | InstructorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstructorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstructorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorMaxAggregateInputType
  }

  export type GetInstructorAggregateType<T extends InstructorAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructor[P]>
      : GetScalarType<T[P], AggregateInstructor[P]>
  }




  export type InstructorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorWhereInput
    orderBy?: InstructorOrderByWithAggregationInput | InstructorOrderByWithAggregationInput[]
    by: InstructorScalarFieldEnum[] | InstructorScalarFieldEnum
    having?: InstructorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorCountAggregateInputType | true
    _avg?: InstructorAvgAggregateInputType
    _sum?: InstructorSumAggregateInputType
    _min?: InstructorMinAggregateInputType
    _max?: InstructorMaxAggregateInputType
  }

  export type InstructorGroupByOutputType = {
    id: number
    name: string
    _count: InstructorCountAggregateOutputType | null
    _avg: InstructorAvgAggregateOutputType | null
    _sum: InstructorSumAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  type GetInstructorGroupByPayload<T extends InstructorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorGroupByOutputType[P]>
        }
      >
    >


  export type InstructorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lectures?: boolean | Instructor$lecturesArgs<ExtArgs>
    _count?: boolean | InstructorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type InstructorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["instructor"]>
  export type InstructorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lectures?: boolean | Instructor$lecturesArgs<ExtArgs>
    _count?: boolean | InstructorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstructorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstructorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstructorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instructor"
    objects: {
      lectures: Prisma.$LectureInstructorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["instructor"]>
    composites: {}
  }

  type InstructorGetPayload<S extends boolean | null | undefined | InstructorDefaultArgs> = $Result.GetResult<Prisma.$InstructorPayload, S>

  type InstructorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructorCountAggregateInputType | true
    }

  export interface InstructorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instructor'], meta: { name: 'Instructor' } }
    /**
     * Find zero or one Instructor that matches the filter.
     * @param {InstructorFindUniqueArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructorFindUniqueArgs>(args: SelectSubset<T, InstructorFindUniqueArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instructor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructorFindUniqueOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructorFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructorFindFirstArgs>(args?: SelectSubset<T, InstructorFindFirstArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructorFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructorFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instructors
     * const instructors = await prisma.instructor.findMany()
     * 
     * // Get first 10 Instructors
     * const instructors = await prisma.instructor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructorWithIdOnly = await prisma.instructor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstructorFindManyArgs>(args?: SelectSubset<T, InstructorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instructor.
     * @param {InstructorCreateArgs} args - Arguments to create a Instructor.
     * @example
     * // Create one Instructor
     * const Instructor = await prisma.instructor.create({
     *   data: {
     *     // ... data to create a Instructor
     *   }
     * })
     * 
     */
    create<T extends InstructorCreateArgs>(args: SelectSubset<T, InstructorCreateArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instructors.
     * @param {InstructorCreateManyArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructor = await prisma.instructor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructorCreateManyArgs>(args?: SelectSubset<T, InstructorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instructors and returns the data saved in the database.
     * @param {InstructorCreateManyAndReturnArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructor = await prisma.instructor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instructors and only return the `id`
     * const instructorWithIdOnly = await prisma.instructor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructorCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instructor.
     * @param {InstructorDeleteArgs} args - Arguments to delete one Instructor.
     * @example
     * // Delete one Instructor
     * const Instructor = await prisma.instructor.delete({
     *   where: {
     *     // ... filter to delete one Instructor
     *   }
     * })
     * 
     */
    delete<T extends InstructorDeleteArgs>(args: SelectSubset<T, InstructorDeleteArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instructor.
     * @param {InstructorUpdateArgs} args - Arguments to update one Instructor.
     * @example
     * // Update one Instructor
     * const instructor = await prisma.instructor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructorUpdateArgs>(args: SelectSubset<T, InstructorUpdateArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instructors.
     * @param {InstructorDeleteManyArgs} args - Arguments to filter Instructors to delete.
     * @example
     * // Delete a few Instructors
     * const { count } = await prisma.instructor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructorDeleteManyArgs>(args?: SelectSubset<T, InstructorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instructors
     * const instructor = await prisma.instructor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructorUpdateManyArgs>(args: SelectSubset<T, InstructorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors and returns the data updated in the database.
     * @param {InstructorUpdateManyAndReturnArgs} args - Arguments to update many Instructors.
     * @example
     * // Update many Instructors
     * const instructor = await prisma.instructor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instructors and only return the `id`
     * const instructorWithIdOnly = await prisma.instructor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstructorUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instructor.
     * @param {InstructorUpsertArgs} args - Arguments to update or create a Instructor.
     * @example
     * // Update or create a Instructor
     * const instructor = await prisma.instructor.upsert({
     *   create: {
     *     // ... data to create a Instructor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instructor we want to update
     *   }
     * })
     */
    upsert<T extends InstructorUpsertArgs>(args: SelectSubset<T, InstructorUpsertArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorCountArgs} args - Arguments to filter Instructors to count.
     * @example
     * // Count the number of Instructors
     * const count = await prisma.instructor.count({
     *   where: {
     *     // ... the filter for the Instructors we want to count
     *   }
     * })
    **/
    count<T extends InstructorCountArgs>(
      args?: Subset<T, InstructorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstructorAggregateArgs>(args: Subset<T, InstructorAggregateArgs>): Prisma.PrismaPromise<GetInstructorAggregateType<T>>

    /**
     * Group by Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstructorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructorGroupByArgs['orderBy'] }
        : { orderBy?: InstructorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstructorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instructor model
   */
  readonly fields: InstructorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instructor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lectures<T extends Instructor$lecturesArgs<ExtArgs> = {}>(args?: Subset<T, Instructor$lecturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureInstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Instructor model
   */
  interface InstructorFieldRefs {
    readonly id: FieldRef<"Instructor", 'Int'>
    readonly name: FieldRef<"Instructor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instructor findUnique
   */
  export type InstructorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor findUniqueOrThrow
   */
  export type InstructorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor findFirst
   */
  export type InstructorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor findFirstOrThrow
   */
  export type InstructorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor findMany
   */
  export type InstructorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructors to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor create
   */
  export type InstructorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The data needed to create a Instructor.
     */
    data: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
  }

  /**
   * Instructor createMany
   */
  export type InstructorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instructors.
     */
    data: InstructorCreateManyInput | InstructorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instructor createManyAndReturn
   */
  export type InstructorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * The data used to create many Instructors.
     */
    data: InstructorCreateManyInput | InstructorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instructor update
   */
  export type InstructorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The data needed to update a Instructor.
     */
    data: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
    /**
     * Choose, which Instructor to update.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor updateMany
   */
  export type InstructorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instructors.
     */
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyInput>
    /**
     * Filter which Instructors to update
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to update.
     */
    limit?: number
  }

  /**
   * Instructor updateManyAndReturn
   */
  export type InstructorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * The data used to update Instructors.
     */
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyInput>
    /**
     * Filter which Instructors to update
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to update.
     */
    limit?: number
  }

  /**
   * Instructor upsert
   */
  export type InstructorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The filter to search for the Instructor to update in case it exists.
     */
    where: InstructorWhereUniqueInput
    /**
     * In case the Instructor found by the `where` argument doesn't exist, create a new Instructor with this data.
     */
    create: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
    /**
     * In case the Instructor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
  }

  /**
   * Instructor delete
   */
  export type InstructorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter which Instructor to delete.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor deleteMany
   */
  export type InstructorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructors to delete
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to delete.
     */
    limit?: number
  }

  /**
   * Instructor.lectures
   */
  export type Instructor$lecturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureInstructor
     */
    select?: LectureInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureInstructor
     */
    omit?: LectureInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInstructorInclude<ExtArgs> | null
    where?: LectureInstructorWhereInput
    orderBy?: LectureInstructorOrderByWithRelationInput | LectureInstructorOrderByWithRelationInput[]
    cursor?: LectureInstructorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LectureInstructorScalarFieldEnum | LectureInstructorScalarFieldEnum[]
  }

  /**
   * Instructor without action
   */
  export type InstructorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
  }


  /**
   * Model LectureInstructor
   */

  export type AggregateLectureInstructor = {
    _count: LectureInstructorCountAggregateOutputType | null
    _avg: LectureInstructorAvgAggregateOutputType | null
    _sum: LectureInstructorSumAggregateOutputType | null
    _min: LectureInstructorMinAggregateOutputType | null
    _max: LectureInstructorMaxAggregateOutputType | null
  }

  export type LectureInstructorAvgAggregateOutputType = {
    id: number | null
    lectureId: number | null
    instructorId: number | null
  }

  export type LectureInstructorSumAggregateOutputType = {
    id: number | null
    lectureId: number | null
    instructorId: number | null
  }

  export type LectureInstructorMinAggregateOutputType = {
    id: number | null
    lectureId: number | null
    instructorId: number | null
  }

  export type LectureInstructorMaxAggregateOutputType = {
    id: number | null
    lectureId: number | null
    instructorId: number | null
  }

  export type LectureInstructorCountAggregateOutputType = {
    id: number
    lectureId: number
    instructorId: number
    _all: number
  }


  export type LectureInstructorAvgAggregateInputType = {
    id?: true
    lectureId?: true
    instructorId?: true
  }

  export type LectureInstructorSumAggregateInputType = {
    id?: true
    lectureId?: true
    instructorId?: true
  }

  export type LectureInstructorMinAggregateInputType = {
    id?: true
    lectureId?: true
    instructorId?: true
  }

  export type LectureInstructorMaxAggregateInputType = {
    id?: true
    lectureId?: true
    instructorId?: true
  }

  export type LectureInstructorCountAggregateInputType = {
    id?: true
    lectureId?: true
    instructorId?: true
    _all?: true
  }

  export type LectureInstructorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LectureInstructor to aggregate.
     */
    where?: LectureInstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LectureInstructors to fetch.
     */
    orderBy?: LectureInstructorOrderByWithRelationInput | LectureInstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LectureInstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LectureInstructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LectureInstructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LectureInstructors
    **/
    _count?: true | LectureInstructorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LectureInstructorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LectureInstructorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LectureInstructorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LectureInstructorMaxAggregateInputType
  }

  export type GetLectureInstructorAggregateType<T extends LectureInstructorAggregateArgs> = {
        [P in keyof T & keyof AggregateLectureInstructor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLectureInstructor[P]>
      : GetScalarType<T[P], AggregateLectureInstructor[P]>
  }




  export type LectureInstructorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureInstructorWhereInput
    orderBy?: LectureInstructorOrderByWithAggregationInput | LectureInstructorOrderByWithAggregationInput[]
    by: LectureInstructorScalarFieldEnum[] | LectureInstructorScalarFieldEnum
    having?: LectureInstructorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LectureInstructorCountAggregateInputType | true
    _avg?: LectureInstructorAvgAggregateInputType
    _sum?: LectureInstructorSumAggregateInputType
    _min?: LectureInstructorMinAggregateInputType
    _max?: LectureInstructorMaxAggregateInputType
  }

  export type LectureInstructorGroupByOutputType = {
    id: number
    lectureId: number
    instructorId: number
    _count: LectureInstructorCountAggregateOutputType | null
    _avg: LectureInstructorAvgAggregateOutputType | null
    _sum: LectureInstructorSumAggregateOutputType | null
    _min: LectureInstructorMinAggregateOutputType | null
    _max: LectureInstructorMaxAggregateOutputType | null
  }

  type GetLectureInstructorGroupByPayload<T extends LectureInstructorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LectureInstructorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LectureInstructorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LectureInstructorGroupByOutputType[P]>
            : GetScalarType<T[P], LectureInstructorGroupByOutputType[P]>
        }
      >
    >


  export type LectureInstructorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lectureId?: boolean
    instructorId?: boolean
    lecture?: boolean | LectureDefaultArgs<ExtArgs>
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lectureInstructor"]>

  export type LectureInstructorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lectureId?: boolean
    instructorId?: boolean
    lecture?: boolean | LectureDefaultArgs<ExtArgs>
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lectureInstructor"]>

  export type LectureInstructorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lectureId?: boolean
    instructorId?: boolean
    lecture?: boolean | LectureDefaultArgs<ExtArgs>
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lectureInstructor"]>

  export type LectureInstructorSelectScalar = {
    id?: boolean
    lectureId?: boolean
    instructorId?: boolean
  }

  export type LectureInstructorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lectureId" | "instructorId", ExtArgs["result"]["lectureInstructor"]>
  export type LectureInstructorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecture?: boolean | LectureDefaultArgs<ExtArgs>
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }
  export type LectureInstructorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecture?: boolean | LectureDefaultArgs<ExtArgs>
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }
  export type LectureInstructorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecture?: boolean | LectureDefaultArgs<ExtArgs>
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }

  export type $LectureInstructorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LectureInstructor"
    objects: {
      lecture: Prisma.$LecturePayload<ExtArgs>
      instructor: Prisma.$InstructorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lectureId: number
      instructorId: number
    }, ExtArgs["result"]["lectureInstructor"]>
    composites: {}
  }

  type LectureInstructorGetPayload<S extends boolean | null | undefined | LectureInstructorDefaultArgs> = $Result.GetResult<Prisma.$LectureInstructorPayload, S>

  type LectureInstructorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LectureInstructorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LectureInstructorCountAggregateInputType | true
    }

  export interface LectureInstructorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LectureInstructor'], meta: { name: 'LectureInstructor' } }
    /**
     * Find zero or one LectureInstructor that matches the filter.
     * @param {LectureInstructorFindUniqueArgs} args - Arguments to find a LectureInstructor
     * @example
     * // Get one LectureInstructor
     * const lectureInstructor = await prisma.lectureInstructor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LectureInstructorFindUniqueArgs>(args: SelectSubset<T, LectureInstructorFindUniqueArgs<ExtArgs>>): Prisma__LectureInstructorClient<$Result.GetResult<Prisma.$LectureInstructorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LectureInstructor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LectureInstructorFindUniqueOrThrowArgs} args - Arguments to find a LectureInstructor
     * @example
     * // Get one LectureInstructor
     * const lectureInstructor = await prisma.lectureInstructor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LectureInstructorFindUniqueOrThrowArgs>(args: SelectSubset<T, LectureInstructorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LectureInstructorClient<$Result.GetResult<Prisma.$LectureInstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LectureInstructor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureInstructorFindFirstArgs} args - Arguments to find a LectureInstructor
     * @example
     * // Get one LectureInstructor
     * const lectureInstructor = await prisma.lectureInstructor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LectureInstructorFindFirstArgs>(args?: SelectSubset<T, LectureInstructorFindFirstArgs<ExtArgs>>): Prisma__LectureInstructorClient<$Result.GetResult<Prisma.$LectureInstructorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LectureInstructor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureInstructorFindFirstOrThrowArgs} args - Arguments to find a LectureInstructor
     * @example
     * // Get one LectureInstructor
     * const lectureInstructor = await prisma.lectureInstructor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LectureInstructorFindFirstOrThrowArgs>(args?: SelectSubset<T, LectureInstructorFindFirstOrThrowArgs<ExtArgs>>): Prisma__LectureInstructorClient<$Result.GetResult<Prisma.$LectureInstructorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LectureInstructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureInstructorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LectureInstructors
     * const lectureInstructors = await prisma.lectureInstructor.findMany()
     * 
     * // Get first 10 LectureInstructors
     * const lectureInstructors = await prisma.lectureInstructor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lectureInstructorWithIdOnly = await prisma.lectureInstructor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LectureInstructorFindManyArgs>(args?: SelectSubset<T, LectureInstructorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureInstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LectureInstructor.
     * @param {LectureInstructorCreateArgs} args - Arguments to create a LectureInstructor.
     * @example
     * // Create one LectureInstructor
     * const LectureInstructor = await prisma.lectureInstructor.create({
     *   data: {
     *     // ... data to create a LectureInstructor
     *   }
     * })
     * 
     */
    create<T extends LectureInstructorCreateArgs>(args: SelectSubset<T, LectureInstructorCreateArgs<ExtArgs>>): Prisma__LectureInstructorClient<$Result.GetResult<Prisma.$LectureInstructorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LectureInstructors.
     * @param {LectureInstructorCreateManyArgs} args - Arguments to create many LectureInstructors.
     * @example
     * // Create many LectureInstructors
     * const lectureInstructor = await prisma.lectureInstructor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LectureInstructorCreateManyArgs>(args?: SelectSubset<T, LectureInstructorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LectureInstructors and returns the data saved in the database.
     * @param {LectureInstructorCreateManyAndReturnArgs} args - Arguments to create many LectureInstructors.
     * @example
     * // Create many LectureInstructors
     * const lectureInstructor = await prisma.lectureInstructor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LectureInstructors and only return the `id`
     * const lectureInstructorWithIdOnly = await prisma.lectureInstructor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LectureInstructorCreateManyAndReturnArgs>(args?: SelectSubset<T, LectureInstructorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureInstructorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LectureInstructor.
     * @param {LectureInstructorDeleteArgs} args - Arguments to delete one LectureInstructor.
     * @example
     * // Delete one LectureInstructor
     * const LectureInstructor = await prisma.lectureInstructor.delete({
     *   where: {
     *     // ... filter to delete one LectureInstructor
     *   }
     * })
     * 
     */
    delete<T extends LectureInstructorDeleteArgs>(args: SelectSubset<T, LectureInstructorDeleteArgs<ExtArgs>>): Prisma__LectureInstructorClient<$Result.GetResult<Prisma.$LectureInstructorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LectureInstructor.
     * @param {LectureInstructorUpdateArgs} args - Arguments to update one LectureInstructor.
     * @example
     * // Update one LectureInstructor
     * const lectureInstructor = await prisma.lectureInstructor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LectureInstructorUpdateArgs>(args: SelectSubset<T, LectureInstructorUpdateArgs<ExtArgs>>): Prisma__LectureInstructorClient<$Result.GetResult<Prisma.$LectureInstructorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LectureInstructors.
     * @param {LectureInstructorDeleteManyArgs} args - Arguments to filter LectureInstructors to delete.
     * @example
     * // Delete a few LectureInstructors
     * const { count } = await prisma.lectureInstructor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LectureInstructorDeleteManyArgs>(args?: SelectSubset<T, LectureInstructorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LectureInstructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureInstructorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LectureInstructors
     * const lectureInstructor = await prisma.lectureInstructor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LectureInstructorUpdateManyArgs>(args: SelectSubset<T, LectureInstructorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LectureInstructors and returns the data updated in the database.
     * @param {LectureInstructorUpdateManyAndReturnArgs} args - Arguments to update many LectureInstructors.
     * @example
     * // Update many LectureInstructors
     * const lectureInstructor = await prisma.lectureInstructor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LectureInstructors and only return the `id`
     * const lectureInstructorWithIdOnly = await prisma.lectureInstructor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LectureInstructorUpdateManyAndReturnArgs>(args: SelectSubset<T, LectureInstructorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureInstructorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LectureInstructor.
     * @param {LectureInstructorUpsertArgs} args - Arguments to update or create a LectureInstructor.
     * @example
     * // Update or create a LectureInstructor
     * const lectureInstructor = await prisma.lectureInstructor.upsert({
     *   create: {
     *     // ... data to create a LectureInstructor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LectureInstructor we want to update
     *   }
     * })
     */
    upsert<T extends LectureInstructorUpsertArgs>(args: SelectSubset<T, LectureInstructorUpsertArgs<ExtArgs>>): Prisma__LectureInstructorClient<$Result.GetResult<Prisma.$LectureInstructorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LectureInstructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureInstructorCountArgs} args - Arguments to filter LectureInstructors to count.
     * @example
     * // Count the number of LectureInstructors
     * const count = await prisma.lectureInstructor.count({
     *   where: {
     *     // ... the filter for the LectureInstructors we want to count
     *   }
     * })
    **/
    count<T extends LectureInstructorCountArgs>(
      args?: Subset<T, LectureInstructorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LectureInstructorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LectureInstructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureInstructorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LectureInstructorAggregateArgs>(args: Subset<T, LectureInstructorAggregateArgs>): Prisma.PrismaPromise<GetLectureInstructorAggregateType<T>>

    /**
     * Group by LectureInstructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureInstructorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LectureInstructorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LectureInstructorGroupByArgs['orderBy'] }
        : { orderBy?: LectureInstructorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LectureInstructorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLectureInstructorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LectureInstructor model
   */
  readonly fields: LectureInstructorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LectureInstructor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LectureInstructorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecture<T extends LectureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LectureDefaultArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instructor<T extends InstructorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstructorDefaultArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LectureInstructor model
   */
  interface LectureInstructorFieldRefs {
    readonly id: FieldRef<"LectureInstructor", 'Int'>
    readonly lectureId: FieldRef<"LectureInstructor", 'Int'>
    readonly instructorId: FieldRef<"LectureInstructor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LectureInstructor findUnique
   */
  export type LectureInstructorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureInstructor
     */
    select?: LectureInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureInstructor
     */
    omit?: LectureInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInstructorInclude<ExtArgs> | null
    /**
     * Filter, which LectureInstructor to fetch.
     */
    where: LectureInstructorWhereUniqueInput
  }

  /**
   * LectureInstructor findUniqueOrThrow
   */
  export type LectureInstructorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureInstructor
     */
    select?: LectureInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureInstructor
     */
    omit?: LectureInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInstructorInclude<ExtArgs> | null
    /**
     * Filter, which LectureInstructor to fetch.
     */
    where: LectureInstructorWhereUniqueInput
  }

  /**
   * LectureInstructor findFirst
   */
  export type LectureInstructorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureInstructor
     */
    select?: LectureInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureInstructor
     */
    omit?: LectureInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInstructorInclude<ExtArgs> | null
    /**
     * Filter, which LectureInstructor to fetch.
     */
    where?: LectureInstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LectureInstructors to fetch.
     */
    orderBy?: LectureInstructorOrderByWithRelationInput | LectureInstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LectureInstructors.
     */
    cursor?: LectureInstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LectureInstructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LectureInstructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LectureInstructors.
     */
    distinct?: LectureInstructorScalarFieldEnum | LectureInstructorScalarFieldEnum[]
  }

  /**
   * LectureInstructor findFirstOrThrow
   */
  export type LectureInstructorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureInstructor
     */
    select?: LectureInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureInstructor
     */
    omit?: LectureInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInstructorInclude<ExtArgs> | null
    /**
     * Filter, which LectureInstructor to fetch.
     */
    where?: LectureInstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LectureInstructors to fetch.
     */
    orderBy?: LectureInstructorOrderByWithRelationInput | LectureInstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LectureInstructors.
     */
    cursor?: LectureInstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LectureInstructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LectureInstructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LectureInstructors.
     */
    distinct?: LectureInstructorScalarFieldEnum | LectureInstructorScalarFieldEnum[]
  }

  /**
   * LectureInstructor findMany
   */
  export type LectureInstructorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureInstructor
     */
    select?: LectureInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureInstructor
     */
    omit?: LectureInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInstructorInclude<ExtArgs> | null
    /**
     * Filter, which LectureInstructors to fetch.
     */
    where?: LectureInstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LectureInstructors to fetch.
     */
    orderBy?: LectureInstructorOrderByWithRelationInput | LectureInstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LectureInstructors.
     */
    cursor?: LectureInstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LectureInstructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LectureInstructors.
     */
    skip?: number
    distinct?: LectureInstructorScalarFieldEnum | LectureInstructorScalarFieldEnum[]
  }

  /**
   * LectureInstructor create
   */
  export type LectureInstructorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureInstructor
     */
    select?: LectureInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureInstructor
     */
    omit?: LectureInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInstructorInclude<ExtArgs> | null
    /**
     * The data needed to create a LectureInstructor.
     */
    data: XOR<LectureInstructorCreateInput, LectureInstructorUncheckedCreateInput>
  }

  /**
   * LectureInstructor createMany
   */
  export type LectureInstructorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LectureInstructors.
     */
    data: LectureInstructorCreateManyInput | LectureInstructorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LectureInstructor createManyAndReturn
   */
  export type LectureInstructorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureInstructor
     */
    select?: LectureInstructorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LectureInstructor
     */
    omit?: LectureInstructorOmit<ExtArgs> | null
    /**
     * The data used to create many LectureInstructors.
     */
    data: LectureInstructorCreateManyInput | LectureInstructorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInstructorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LectureInstructor update
   */
  export type LectureInstructorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureInstructor
     */
    select?: LectureInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureInstructor
     */
    omit?: LectureInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInstructorInclude<ExtArgs> | null
    /**
     * The data needed to update a LectureInstructor.
     */
    data: XOR<LectureInstructorUpdateInput, LectureInstructorUncheckedUpdateInput>
    /**
     * Choose, which LectureInstructor to update.
     */
    where: LectureInstructorWhereUniqueInput
  }

  /**
   * LectureInstructor updateMany
   */
  export type LectureInstructorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LectureInstructors.
     */
    data: XOR<LectureInstructorUpdateManyMutationInput, LectureInstructorUncheckedUpdateManyInput>
    /**
     * Filter which LectureInstructors to update
     */
    where?: LectureInstructorWhereInput
    /**
     * Limit how many LectureInstructors to update.
     */
    limit?: number
  }

  /**
   * LectureInstructor updateManyAndReturn
   */
  export type LectureInstructorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureInstructor
     */
    select?: LectureInstructorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LectureInstructor
     */
    omit?: LectureInstructorOmit<ExtArgs> | null
    /**
     * The data used to update LectureInstructors.
     */
    data: XOR<LectureInstructorUpdateManyMutationInput, LectureInstructorUncheckedUpdateManyInput>
    /**
     * Filter which LectureInstructors to update
     */
    where?: LectureInstructorWhereInput
    /**
     * Limit how many LectureInstructors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInstructorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LectureInstructor upsert
   */
  export type LectureInstructorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureInstructor
     */
    select?: LectureInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureInstructor
     */
    omit?: LectureInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInstructorInclude<ExtArgs> | null
    /**
     * The filter to search for the LectureInstructor to update in case it exists.
     */
    where: LectureInstructorWhereUniqueInput
    /**
     * In case the LectureInstructor found by the `where` argument doesn't exist, create a new LectureInstructor with this data.
     */
    create: XOR<LectureInstructorCreateInput, LectureInstructorUncheckedCreateInput>
    /**
     * In case the LectureInstructor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LectureInstructorUpdateInput, LectureInstructorUncheckedUpdateInput>
  }

  /**
   * LectureInstructor delete
   */
  export type LectureInstructorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureInstructor
     */
    select?: LectureInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureInstructor
     */
    omit?: LectureInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInstructorInclude<ExtArgs> | null
    /**
     * Filter which LectureInstructor to delete.
     */
    where: LectureInstructorWhereUniqueInput
  }

  /**
   * LectureInstructor deleteMany
   */
  export type LectureInstructorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LectureInstructors to delete
     */
    where?: LectureInstructorWhereInput
    /**
     * Limit how many LectureInstructors to delete.
     */
    limit?: number
  }

  /**
   * LectureInstructor without action
   */
  export type LectureInstructorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureInstructor
     */
    select?: LectureInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureInstructor
     */
    omit?: LectureInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInstructorInclude<ExtArgs> | null
  }


  /**
   * Model LecturePeriod
   */

  export type AggregateLecturePeriod = {
    _count: LecturePeriodCountAggregateOutputType | null
    _avg: LecturePeriodAvgAggregateOutputType | null
    _sum: LecturePeriodSumAggregateOutputType | null
    _min: LecturePeriodMinAggregateOutputType | null
    _max: LecturePeriodMaxAggregateOutputType | null
  }

  export type LecturePeriodAvgAggregateOutputType = {
    id: number | null
    period: number | null
    lectureId: number | null
  }

  export type LecturePeriodSumAggregateOutputType = {
    id: number | null
    period: number | null
    lectureId: number | null
  }

  export type LecturePeriodMinAggregateOutputType = {
    id: number | null
    day: string | null
    period: number | null
    lectureId: number | null
  }

  export type LecturePeriodMaxAggregateOutputType = {
    id: number | null
    day: string | null
    period: number | null
    lectureId: number | null
  }

  export type LecturePeriodCountAggregateOutputType = {
    id: number
    day: number
    period: number
    lectureId: number
    _all: number
  }


  export type LecturePeriodAvgAggregateInputType = {
    id?: true
    period?: true
    lectureId?: true
  }

  export type LecturePeriodSumAggregateInputType = {
    id?: true
    period?: true
    lectureId?: true
  }

  export type LecturePeriodMinAggregateInputType = {
    id?: true
    day?: true
    period?: true
    lectureId?: true
  }

  export type LecturePeriodMaxAggregateInputType = {
    id?: true
    day?: true
    period?: true
    lectureId?: true
  }

  export type LecturePeriodCountAggregateInputType = {
    id?: true
    day?: true
    period?: true
    lectureId?: true
    _all?: true
  }

  export type LecturePeriodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LecturePeriod to aggregate.
     */
    where?: LecturePeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturePeriods to fetch.
     */
    orderBy?: LecturePeriodOrderByWithRelationInput | LecturePeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LecturePeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturePeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturePeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LecturePeriods
    **/
    _count?: true | LecturePeriodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LecturePeriodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LecturePeriodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LecturePeriodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LecturePeriodMaxAggregateInputType
  }

  export type GetLecturePeriodAggregateType<T extends LecturePeriodAggregateArgs> = {
        [P in keyof T & keyof AggregateLecturePeriod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecturePeriod[P]>
      : GetScalarType<T[P], AggregateLecturePeriod[P]>
  }




  export type LecturePeriodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturePeriodWhereInput
    orderBy?: LecturePeriodOrderByWithAggregationInput | LecturePeriodOrderByWithAggregationInput[]
    by: LecturePeriodScalarFieldEnum[] | LecturePeriodScalarFieldEnum
    having?: LecturePeriodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LecturePeriodCountAggregateInputType | true
    _avg?: LecturePeriodAvgAggregateInputType
    _sum?: LecturePeriodSumAggregateInputType
    _min?: LecturePeriodMinAggregateInputType
    _max?: LecturePeriodMaxAggregateInputType
  }

  export type LecturePeriodGroupByOutputType = {
    id: number
    day: string
    period: number
    lectureId: number
    _count: LecturePeriodCountAggregateOutputType | null
    _avg: LecturePeriodAvgAggregateOutputType | null
    _sum: LecturePeriodSumAggregateOutputType | null
    _min: LecturePeriodMinAggregateOutputType | null
    _max: LecturePeriodMaxAggregateOutputType | null
  }

  type GetLecturePeriodGroupByPayload<T extends LecturePeriodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LecturePeriodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LecturePeriodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LecturePeriodGroupByOutputType[P]>
            : GetScalarType<T[P], LecturePeriodGroupByOutputType[P]>
        }
      >
    >


  export type LecturePeriodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    period?: boolean
    lectureId?: boolean
    lecture?: boolean | LectureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecturePeriod"]>

  export type LecturePeriodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    period?: boolean
    lectureId?: boolean
    lecture?: boolean | LectureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecturePeriod"]>

  export type LecturePeriodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    period?: boolean
    lectureId?: boolean
    lecture?: boolean | LectureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecturePeriod"]>

  export type LecturePeriodSelectScalar = {
    id?: boolean
    day?: boolean
    period?: boolean
    lectureId?: boolean
  }

  export type LecturePeriodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "day" | "period" | "lectureId", ExtArgs["result"]["lecturePeriod"]>
  export type LecturePeriodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecture?: boolean | LectureDefaultArgs<ExtArgs>
  }
  export type LecturePeriodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecture?: boolean | LectureDefaultArgs<ExtArgs>
  }
  export type LecturePeriodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecture?: boolean | LectureDefaultArgs<ExtArgs>
  }

  export type $LecturePeriodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LecturePeriod"
    objects: {
      lecture: Prisma.$LecturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      day: string
      period: number
      lectureId: number
    }, ExtArgs["result"]["lecturePeriod"]>
    composites: {}
  }

  type LecturePeriodGetPayload<S extends boolean | null | undefined | LecturePeriodDefaultArgs> = $Result.GetResult<Prisma.$LecturePeriodPayload, S>

  type LecturePeriodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LecturePeriodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LecturePeriodCountAggregateInputType | true
    }

  export interface LecturePeriodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LecturePeriod'], meta: { name: 'LecturePeriod' } }
    /**
     * Find zero or one LecturePeriod that matches the filter.
     * @param {LecturePeriodFindUniqueArgs} args - Arguments to find a LecturePeriod
     * @example
     * // Get one LecturePeriod
     * const lecturePeriod = await prisma.lecturePeriod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LecturePeriodFindUniqueArgs>(args: SelectSubset<T, LecturePeriodFindUniqueArgs<ExtArgs>>): Prisma__LecturePeriodClient<$Result.GetResult<Prisma.$LecturePeriodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LecturePeriod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LecturePeriodFindUniqueOrThrowArgs} args - Arguments to find a LecturePeriod
     * @example
     * // Get one LecturePeriod
     * const lecturePeriod = await prisma.lecturePeriod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LecturePeriodFindUniqueOrThrowArgs>(args: SelectSubset<T, LecturePeriodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LecturePeriodClient<$Result.GetResult<Prisma.$LecturePeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LecturePeriod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturePeriodFindFirstArgs} args - Arguments to find a LecturePeriod
     * @example
     * // Get one LecturePeriod
     * const lecturePeriod = await prisma.lecturePeriod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LecturePeriodFindFirstArgs>(args?: SelectSubset<T, LecturePeriodFindFirstArgs<ExtArgs>>): Prisma__LecturePeriodClient<$Result.GetResult<Prisma.$LecturePeriodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LecturePeriod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturePeriodFindFirstOrThrowArgs} args - Arguments to find a LecturePeriod
     * @example
     * // Get one LecturePeriod
     * const lecturePeriod = await prisma.lecturePeriod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LecturePeriodFindFirstOrThrowArgs>(args?: SelectSubset<T, LecturePeriodFindFirstOrThrowArgs<ExtArgs>>): Prisma__LecturePeriodClient<$Result.GetResult<Prisma.$LecturePeriodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LecturePeriods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturePeriodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LecturePeriods
     * const lecturePeriods = await prisma.lecturePeriod.findMany()
     * 
     * // Get first 10 LecturePeriods
     * const lecturePeriods = await prisma.lecturePeriod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lecturePeriodWithIdOnly = await prisma.lecturePeriod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LecturePeriodFindManyArgs>(args?: SelectSubset<T, LecturePeriodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LecturePeriod.
     * @param {LecturePeriodCreateArgs} args - Arguments to create a LecturePeriod.
     * @example
     * // Create one LecturePeriod
     * const LecturePeriod = await prisma.lecturePeriod.create({
     *   data: {
     *     // ... data to create a LecturePeriod
     *   }
     * })
     * 
     */
    create<T extends LecturePeriodCreateArgs>(args: SelectSubset<T, LecturePeriodCreateArgs<ExtArgs>>): Prisma__LecturePeriodClient<$Result.GetResult<Prisma.$LecturePeriodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LecturePeriods.
     * @param {LecturePeriodCreateManyArgs} args - Arguments to create many LecturePeriods.
     * @example
     * // Create many LecturePeriods
     * const lecturePeriod = await prisma.lecturePeriod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LecturePeriodCreateManyArgs>(args?: SelectSubset<T, LecturePeriodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LecturePeriods and returns the data saved in the database.
     * @param {LecturePeriodCreateManyAndReturnArgs} args - Arguments to create many LecturePeriods.
     * @example
     * // Create many LecturePeriods
     * const lecturePeriod = await prisma.lecturePeriod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LecturePeriods and only return the `id`
     * const lecturePeriodWithIdOnly = await prisma.lecturePeriod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LecturePeriodCreateManyAndReturnArgs>(args?: SelectSubset<T, LecturePeriodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePeriodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LecturePeriod.
     * @param {LecturePeriodDeleteArgs} args - Arguments to delete one LecturePeriod.
     * @example
     * // Delete one LecturePeriod
     * const LecturePeriod = await prisma.lecturePeriod.delete({
     *   where: {
     *     // ... filter to delete one LecturePeriod
     *   }
     * })
     * 
     */
    delete<T extends LecturePeriodDeleteArgs>(args: SelectSubset<T, LecturePeriodDeleteArgs<ExtArgs>>): Prisma__LecturePeriodClient<$Result.GetResult<Prisma.$LecturePeriodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LecturePeriod.
     * @param {LecturePeriodUpdateArgs} args - Arguments to update one LecturePeriod.
     * @example
     * // Update one LecturePeriod
     * const lecturePeriod = await prisma.lecturePeriod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LecturePeriodUpdateArgs>(args: SelectSubset<T, LecturePeriodUpdateArgs<ExtArgs>>): Prisma__LecturePeriodClient<$Result.GetResult<Prisma.$LecturePeriodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LecturePeriods.
     * @param {LecturePeriodDeleteManyArgs} args - Arguments to filter LecturePeriods to delete.
     * @example
     * // Delete a few LecturePeriods
     * const { count } = await prisma.lecturePeriod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LecturePeriodDeleteManyArgs>(args?: SelectSubset<T, LecturePeriodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LecturePeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturePeriodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LecturePeriods
     * const lecturePeriod = await prisma.lecturePeriod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LecturePeriodUpdateManyArgs>(args: SelectSubset<T, LecturePeriodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LecturePeriods and returns the data updated in the database.
     * @param {LecturePeriodUpdateManyAndReturnArgs} args - Arguments to update many LecturePeriods.
     * @example
     * // Update many LecturePeriods
     * const lecturePeriod = await prisma.lecturePeriod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LecturePeriods and only return the `id`
     * const lecturePeriodWithIdOnly = await prisma.lecturePeriod.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LecturePeriodUpdateManyAndReturnArgs>(args: SelectSubset<T, LecturePeriodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePeriodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LecturePeriod.
     * @param {LecturePeriodUpsertArgs} args - Arguments to update or create a LecturePeriod.
     * @example
     * // Update or create a LecturePeriod
     * const lecturePeriod = await prisma.lecturePeriod.upsert({
     *   create: {
     *     // ... data to create a LecturePeriod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LecturePeriod we want to update
     *   }
     * })
     */
    upsert<T extends LecturePeriodUpsertArgs>(args: SelectSubset<T, LecturePeriodUpsertArgs<ExtArgs>>): Prisma__LecturePeriodClient<$Result.GetResult<Prisma.$LecturePeriodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LecturePeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturePeriodCountArgs} args - Arguments to filter LecturePeriods to count.
     * @example
     * // Count the number of LecturePeriods
     * const count = await prisma.lecturePeriod.count({
     *   where: {
     *     // ... the filter for the LecturePeriods we want to count
     *   }
     * })
    **/
    count<T extends LecturePeriodCountArgs>(
      args?: Subset<T, LecturePeriodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LecturePeriodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LecturePeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturePeriodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LecturePeriodAggregateArgs>(args: Subset<T, LecturePeriodAggregateArgs>): Prisma.PrismaPromise<GetLecturePeriodAggregateType<T>>

    /**
     * Group by LecturePeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturePeriodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LecturePeriodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LecturePeriodGroupByArgs['orderBy'] }
        : { orderBy?: LecturePeriodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LecturePeriodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecturePeriodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LecturePeriod model
   */
  readonly fields: LecturePeriodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LecturePeriod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LecturePeriodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecture<T extends LectureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LectureDefaultArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LecturePeriod model
   */
  interface LecturePeriodFieldRefs {
    readonly id: FieldRef<"LecturePeriod", 'Int'>
    readonly day: FieldRef<"LecturePeriod", 'String'>
    readonly period: FieldRef<"LecturePeriod", 'Int'>
    readonly lectureId: FieldRef<"LecturePeriod", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LecturePeriod findUnique
   */
  export type LecturePeriodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturePeriod
     */
    select?: LecturePeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturePeriod
     */
    omit?: LecturePeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturePeriodInclude<ExtArgs> | null
    /**
     * Filter, which LecturePeriod to fetch.
     */
    where: LecturePeriodWhereUniqueInput
  }

  /**
   * LecturePeriod findUniqueOrThrow
   */
  export type LecturePeriodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturePeriod
     */
    select?: LecturePeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturePeriod
     */
    omit?: LecturePeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturePeriodInclude<ExtArgs> | null
    /**
     * Filter, which LecturePeriod to fetch.
     */
    where: LecturePeriodWhereUniqueInput
  }

  /**
   * LecturePeriod findFirst
   */
  export type LecturePeriodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturePeriod
     */
    select?: LecturePeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturePeriod
     */
    omit?: LecturePeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturePeriodInclude<ExtArgs> | null
    /**
     * Filter, which LecturePeriod to fetch.
     */
    where?: LecturePeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturePeriods to fetch.
     */
    orderBy?: LecturePeriodOrderByWithRelationInput | LecturePeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LecturePeriods.
     */
    cursor?: LecturePeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturePeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturePeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LecturePeriods.
     */
    distinct?: LecturePeriodScalarFieldEnum | LecturePeriodScalarFieldEnum[]
  }

  /**
   * LecturePeriod findFirstOrThrow
   */
  export type LecturePeriodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturePeriod
     */
    select?: LecturePeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturePeriod
     */
    omit?: LecturePeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturePeriodInclude<ExtArgs> | null
    /**
     * Filter, which LecturePeriod to fetch.
     */
    where?: LecturePeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturePeriods to fetch.
     */
    orderBy?: LecturePeriodOrderByWithRelationInput | LecturePeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LecturePeriods.
     */
    cursor?: LecturePeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturePeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturePeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LecturePeriods.
     */
    distinct?: LecturePeriodScalarFieldEnum | LecturePeriodScalarFieldEnum[]
  }

  /**
   * LecturePeriod findMany
   */
  export type LecturePeriodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturePeriod
     */
    select?: LecturePeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturePeriod
     */
    omit?: LecturePeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturePeriodInclude<ExtArgs> | null
    /**
     * Filter, which LecturePeriods to fetch.
     */
    where?: LecturePeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturePeriods to fetch.
     */
    orderBy?: LecturePeriodOrderByWithRelationInput | LecturePeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LecturePeriods.
     */
    cursor?: LecturePeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturePeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturePeriods.
     */
    skip?: number
    distinct?: LecturePeriodScalarFieldEnum | LecturePeriodScalarFieldEnum[]
  }

  /**
   * LecturePeriod create
   */
  export type LecturePeriodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturePeriod
     */
    select?: LecturePeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturePeriod
     */
    omit?: LecturePeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturePeriodInclude<ExtArgs> | null
    /**
     * The data needed to create a LecturePeriod.
     */
    data: XOR<LecturePeriodCreateInput, LecturePeriodUncheckedCreateInput>
  }

  /**
   * LecturePeriod createMany
   */
  export type LecturePeriodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LecturePeriods.
     */
    data: LecturePeriodCreateManyInput | LecturePeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LecturePeriod createManyAndReturn
   */
  export type LecturePeriodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturePeriod
     */
    select?: LecturePeriodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LecturePeriod
     */
    omit?: LecturePeriodOmit<ExtArgs> | null
    /**
     * The data used to create many LecturePeriods.
     */
    data: LecturePeriodCreateManyInput | LecturePeriodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturePeriodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LecturePeriod update
   */
  export type LecturePeriodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturePeriod
     */
    select?: LecturePeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturePeriod
     */
    omit?: LecturePeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturePeriodInclude<ExtArgs> | null
    /**
     * The data needed to update a LecturePeriod.
     */
    data: XOR<LecturePeriodUpdateInput, LecturePeriodUncheckedUpdateInput>
    /**
     * Choose, which LecturePeriod to update.
     */
    where: LecturePeriodWhereUniqueInput
  }

  /**
   * LecturePeriod updateMany
   */
  export type LecturePeriodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LecturePeriods.
     */
    data: XOR<LecturePeriodUpdateManyMutationInput, LecturePeriodUncheckedUpdateManyInput>
    /**
     * Filter which LecturePeriods to update
     */
    where?: LecturePeriodWhereInput
    /**
     * Limit how many LecturePeriods to update.
     */
    limit?: number
  }

  /**
   * LecturePeriod updateManyAndReturn
   */
  export type LecturePeriodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturePeriod
     */
    select?: LecturePeriodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LecturePeriod
     */
    omit?: LecturePeriodOmit<ExtArgs> | null
    /**
     * The data used to update LecturePeriods.
     */
    data: XOR<LecturePeriodUpdateManyMutationInput, LecturePeriodUncheckedUpdateManyInput>
    /**
     * Filter which LecturePeriods to update
     */
    where?: LecturePeriodWhereInput
    /**
     * Limit how many LecturePeriods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturePeriodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LecturePeriod upsert
   */
  export type LecturePeriodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturePeriod
     */
    select?: LecturePeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturePeriod
     */
    omit?: LecturePeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturePeriodInclude<ExtArgs> | null
    /**
     * The filter to search for the LecturePeriod to update in case it exists.
     */
    where: LecturePeriodWhereUniqueInput
    /**
     * In case the LecturePeriod found by the `where` argument doesn't exist, create a new LecturePeriod with this data.
     */
    create: XOR<LecturePeriodCreateInput, LecturePeriodUncheckedCreateInput>
    /**
     * In case the LecturePeriod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LecturePeriodUpdateInput, LecturePeriodUncheckedUpdateInput>
  }

  /**
   * LecturePeriod delete
   */
  export type LecturePeriodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturePeriod
     */
    select?: LecturePeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturePeriod
     */
    omit?: LecturePeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturePeriodInclude<ExtArgs> | null
    /**
     * Filter which LecturePeriod to delete.
     */
    where: LecturePeriodWhereUniqueInput
  }

  /**
   * LecturePeriod deleteMany
   */
  export type LecturePeriodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LecturePeriods to delete
     */
    where?: LecturePeriodWhereInput
    /**
     * Limit how many LecturePeriods to delete.
     */
    limit?: number
  }

  /**
   * LecturePeriod without action
   */
  export type LecturePeriodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturePeriod
     */
    select?: LecturePeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturePeriod
     */
    omit?: LecturePeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturePeriodInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LectureScalarFieldEnum: {
    id: 'id',
    subjectName: 'subjectName',
    timetableCode: 'timetableCode',
    credits: 'credits',
    semester: 'semester',
    grade: 'grade',
    department: 'department',
    createdAt: 'createdAt',
    classroom: 'classroom',
    lastUpdated: 'lastUpdated',
    overview: 'overview',
    objectives: 'objectives',
    learningOutcomes: 'learningOutcomes',
    teachingMethod: 'teachingMethod',
    notes: 'notes',
    preparation: 'preparation',
    evaluation: 'evaluation',
    textbook: 'textbook',
    referenceMaterials: 'referenceMaterials',
    schedulePlan: 'schedulePlan'
  };

  export type LectureScalarFieldEnum = (typeof LectureScalarFieldEnum)[keyof typeof LectureScalarFieldEnum]


  export const InstructorScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type InstructorScalarFieldEnum = (typeof InstructorScalarFieldEnum)[keyof typeof InstructorScalarFieldEnum]


  export const LectureInstructorScalarFieldEnum: {
    id: 'id',
    lectureId: 'lectureId',
    instructorId: 'instructorId'
  };

  export type LectureInstructorScalarFieldEnum = (typeof LectureInstructorScalarFieldEnum)[keyof typeof LectureInstructorScalarFieldEnum]


  export const LecturePeriodScalarFieldEnum: {
    id: 'id',
    day: 'day',
    period: 'period',
    lectureId: 'lectureId'
  };

  export type LecturePeriodScalarFieldEnum = (typeof LecturePeriodScalarFieldEnum)[keyof typeof LecturePeriodScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LectureWhereInput = {
    AND?: LectureWhereInput | LectureWhereInput[]
    OR?: LectureWhereInput[]
    NOT?: LectureWhereInput | LectureWhereInput[]
    id?: IntFilter<"Lecture"> | number
    subjectName?: StringFilter<"Lecture"> | string
    timetableCode?: StringFilter<"Lecture"> | string
    credits?: IntFilter<"Lecture"> | number
    semester?: StringFilter<"Lecture"> | string
    grade?: IntNullableListFilter<"Lecture">
    department?: StringNullableListFilter<"Lecture">
    createdAt?: DateTimeFilter<"Lecture"> | Date | string
    classroom?: StringFilter<"Lecture"> | string
    lastUpdated?: StringFilter<"Lecture"> | string
    overview?: StringFilter<"Lecture"> | string
    objectives?: StringFilter<"Lecture"> | string
    learningOutcomes?: StringFilter<"Lecture"> | string
    teachingMethod?: StringFilter<"Lecture"> | string
    notes?: StringFilter<"Lecture"> | string
    preparation?: StringFilter<"Lecture"> | string
    evaluation?: StringFilter<"Lecture"> | string
    textbook?: StringFilter<"Lecture"> | string
    referenceMaterials?: StringFilter<"Lecture"> | string
    schedulePlan?: StringFilter<"Lecture"> | string
    instructors?: LectureInstructorListRelationFilter
    periods?: LecturePeriodListRelationFilter
  }

  export type LectureOrderByWithRelationInput = {
    id?: SortOrder
    subjectName?: SortOrder
    timetableCode?: SortOrder
    credits?: SortOrder
    semester?: SortOrder
    grade?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    classroom?: SortOrder
    lastUpdated?: SortOrder
    overview?: SortOrder
    objectives?: SortOrder
    learningOutcomes?: SortOrder
    teachingMethod?: SortOrder
    notes?: SortOrder
    preparation?: SortOrder
    evaluation?: SortOrder
    textbook?: SortOrder
    referenceMaterials?: SortOrder
    schedulePlan?: SortOrder
    instructors?: LectureInstructorOrderByRelationAggregateInput
    periods?: LecturePeriodOrderByRelationAggregateInput
  }

  export type LectureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    timetableCode?: string
    AND?: LectureWhereInput | LectureWhereInput[]
    OR?: LectureWhereInput[]
    NOT?: LectureWhereInput | LectureWhereInput[]
    subjectName?: StringFilter<"Lecture"> | string
    credits?: IntFilter<"Lecture"> | number
    semester?: StringFilter<"Lecture"> | string
    grade?: IntNullableListFilter<"Lecture">
    department?: StringNullableListFilter<"Lecture">
    createdAt?: DateTimeFilter<"Lecture"> | Date | string
    classroom?: StringFilter<"Lecture"> | string
    lastUpdated?: StringFilter<"Lecture"> | string
    overview?: StringFilter<"Lecture"> | string
    objectives?: StringFilter<"Lecture"> | string
    learningOutcomes?: StringFilter<"Lecture"> | string
    teachingMethod?: StringFilter<"Lecture"> | string
    notes?: StringFilter<"Lecture"> | string
    preparation?: StringFilter<"Lecture"> | string
    evaluation?: StringFilter<"Lecture"> | string
    textbook?: StringFilter<"Lecture"> | string
    referenceMaterials?: StringFilter<"Lecture"> | string
    schedulePlan?: StringFilter<"Lecture"> | string
    instructors?: LectureInstructorListRelationFilter
    periods?: LecturePeriodListRelationFilter
  }, "id" | "timetableCode">

  export type LectureOrderByWithAggregationInput = {
    id?: SortOrder
    subjectName?: SortOrder
    timetableCode?: SortOrder
    credits?: SortOrder
    semester?: SortOrder
    grade?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    classroom?: SortOrder
    lastUpdated?: SortOrder
    overview?: SortOrder
    objectives?: SortOrder
    learningOutcomes?: SortOrder
    teachingMethod?: SortOrder
    notes?: SortOrder
    preparation?: SortOrder
    evaluation?: SortOrder
    textbook?: SortOrder
    referenceMaterials?: SortOrder
    schedulePlan?: SortOrder
    _count?: LectureCountOrderByAggregateInput
    _avg?: LectureAvgOrderByAggregateInput
    _max?: LectureMaxOrderByAggregateInput
    _min?: LectureMinOrderByAggregateInput
    _sum?: LectureSumOrderByAggregateInput
  }

  export type LectureScalarWhereWithAggregatesInput = {
    AND?: LectureScalarWhereWithAggregatesInput | LectureScalarWhereWithAggregatesInput[]
    OR?: LectureScalarWhereWithAggregatesInput[]
    NOT?: LectureScalarWhereWithAggregatesInput | LectureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lecture"> | number
    subjectName?: StringWithAggregatesFilter<"Lecture"> | string
    timetableCode?: StringWithAggregatesFilter<"Lecture"> | string
    credits?: IntWithAggregatesFilter<"Lecture"> | number
    semester?: StringWithAggregatesFilter<"Lecture"> | string
    grade?: IntNullableListFilter<"Lecture">
    department?: StringNullableListFilter<"Lecture">
    createdAt?: DateTimeWithAggregatesFilter<"Lecture"> | Date | string
    classroom?: StringWithAggregatesFilter<"Lecture"> | string
    lastUpdated?: StringWithAggregatesFilter<"Lecture"> | string
    overview?: StringWithAggregatesFilter<"Lecture"> | string
    objectives?: StringWithAggregatesFilter<"Lecture"> | string
    learningOutcomes?: StringWithAggregatesFilter<"Lecture"> | string
    teachingMethod?: StringWithAggregatesFilter<"Lecture"> | string
    notes?: StringWithAggregatesFilter<"Lecture"> | string
    preparation?: StringWithAggregatesFilter<"Lecture"> | string
    evaluation?: StringWithAggregatesFilter<"Lecture"> | string
    textbook?: StringWithAggregatesFilter<"Lecture"> | string
    referenceMaterials?: StringWithAggregatesFilter<"Lecture"> | string
    schedulePlan?: StringWithAggregatesFilter<"Lecture"> | string
  }

  export type InstructorWhereInput = {
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    id?: IntFilter<"Instructor"> | number
    name?: StringFilter<"Instructor"> | string
    lectures?: LectureInstructorListRelationFilter
  }

  export type InstructorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lectures?: LectureInstructorOrderByRelationAggregateInput
  }

  export type InstructorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    lectures?: LectureInstructorListRelationFilter
  }, "id" | "name">

  export type InstructorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: InstructorCountOrderByAggregateInput
    _avg?: InstructorAvgOrderByAggregateInput
    _max?: InstructorMaxOrderByAggregateInput
    _min?: InstructorMinOrderByAggregateInput
    _sum?: InstructorSumOrderByAggregateInput
  }

  export type InstructorScalarWhereWithAggregatesInput = {
    AND?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    OR?: InstructorScalarWhereWithAggregatesInput[]
    NOT?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Instructor"> | number
    name?: StringWithAggregatesFilter<"Instructor"> | string
  }

  export type LectureInstructorWhereInput = {
    AND?: LectureInstructorWhereInput | LectureInstructorWhereInput[]
    OR?: LectureInstructorWhereInput[]
    NOT?: LectureInstructorWhereInput | LectureInstructorWhereInput[]
    id?: IntFilter<"LectureInstructor"> | number
    lectureId?: IntFilter<"LectureInstructor"> | number
    instructorId?: IntFilter<"LectureInstructor"> | number
    lecture?: XOR<LectureScalarRelationFilter, LectureWhereInput>
    instructor?: XOR<InstructorScalarRelationFilter, InstructorWhereInput>
  }

  export type LectureInstructorOrderByWithRelationInput = {
    id?: SortOrder
    lectureId?: SortOrder
    instructorId?: SortOrder
    lecture?: LectureOrderByWithRelationInput
    instructor?: InstructorOrderByWithRelationInput
  }

  export type LectureInstructorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    lectureId_instructorId?: LectureInstructorLectureIdInstructorIdCompoundUniqueInput
    AND?: LectureInstructorWhereInput | LectureInstructorWhereInput[]
    OR?: LectureInstructorWhereInput[]
    NOT?: LectureInstructorWhereInput | LectureInstructorWhereInput[]
    lectureId?: IntFilter<"LectureInstructor"> | number
    instructorId?: IntFilter<"LectureInstructor"> | number
    lecture?: XOR<LectureScalarRelationFilter, LectureWhereInput>
    instructor?: XOR<InstructorScalarRelationFilter, InstructorWhereInput>
  }, "id" | "lectureId_instructorId">

  export type LectureInstructorOrderByWithAggregationInput = {
    id?: SortOrder
    lectureId?: SortOrder
    instructorId?: SortOrder
    _count?: LectureInstructorCountOrderByAggregateInput
    _avg?: LectureInstructorAvgOrderByAggregateInput
    _max?: LectureInstructorMaxOrderByAggregateInput
    _min?: LectureInstructorMinOrderByAggregateInput
    _sum?: LectureInstructorSumOrderByAggregateInput
  }

  export type LectureInstructorScalarWhereWithAggregatesInput = {
    AND?: LectureInstructorScalarWhereWithAggregatesInput | LectureInstructorScalarWhereWithAggregatesInput[]
    OR?: LectureInstructorScalarWhereWithAggregatesInput[]
    NOT?: LectureInstructorScalarWhereWithAggregatesInput | LectureInstructorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LectureInstructor"> | number
    lectureId?: IntWithAggregatesFilter<"LectureInstructor"> | number
    instructorId?: IntWithAggregatesFilter<"LectureInstructor"> | number
  }

  export type LecturePeriodWhereInput = {
    AND?: LecturePeriodWhereInput | LecturePeriodWhereInput[]
    OR?: LecturePeriodWhereInput[]
    NOT?: LecturePeriodWhereInput | LecturePeriodWhereInput[]
    id?: IntFilter<"LecturePeriod"> | number
    day?: StringFilter<"LecturePeriod"> | string
    period?: IntFilter<"LecturePeriod"> | number
    lectureId?: IntFilter<"LecturePeriod"> | number
    lecture?: XOR<LectureScalarRelationFilter, LectureWhereInput>
  }

  export type LecturePeriodOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    period?: SortOrder
    lectureId?: SortOrder
    lecture?: LectureOrderByWithRelationInput
  }

  export type LecturePeriodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LecturePeriodWhereInput | LecturePeriodWhereInput[]
    OR?: LecturePeriodWhereInput[]
    NOT?: LecturePeriodWhereInput | LecturePeriodWhereInput[]
    day?: StringFilter<"LecturePeriod"> | string
    period?: IntFilter<"LecturePeriod"> | number
    lectureId?: IntFilter<"LecturePeriod"> | number
    lecture?: XOR<LectureScalarRelationFilter, LectureWhereInput>
  }, "id">

  export type LecturePeriodOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    period?: SortOrder
    lectureId?: SortOrder
    _count?: LecturePeriodCountOrderByAggregateInput
    _avg?: LecturePeriodAvgOrderByAggregateInput
    _max?: LecturePeriodMaxOrderByAggregateInput
    _min?: LecturePeriodMinOrderByAggregateInput
    _sum?: LecturePeriodSumOrderByAggregateInput
  }

  export type LecturePeriodScalarWhereWithAggregatesInput = {
    AND?: LecturePeriodScalarWhereWithAggregatesInput | LecturePeriodScalarWhereWithAggregatesInput[]
    OR?: LecturePeriodScalarWhereWithAggregatesInput[]
    NOT?: LecturePeriodScalarWhereWithAggregatesInput | LecturePeriodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LecturePeriod"> | number
    day?: StringWithAggregatesFilter<"LecturePeriod"> | string
    period?: IntWithAggregatesFilter<"LecturePeriod"> | number
    lectureId?: IntWithAggregatesFilter<"LecturePeriod"> | number
  }

  export type LectureCreateInput = {
    subjectName: string
    timetableCode: string
    credits: number
    semester: string
    grade?: LectureCreategradeInput | number[]
    department?: LectureCreatedepartmentInput | string[]
    createdAt?: Date | string
    classroom: string
    lastUpdated: string
    overview: string
    objectives: string
    learningOutcomes: string
    teachingMethod: string
    notes: string
    preparation: string
    evaluation: string
    textbook: string
    referenceMaterials: string
    schedulePlan: string
    instructors?: LectureInstructorCreateNestedManyWithoutLectureInput
    periods?: LecturePeriodCreateNestedManyWithoutLectureInput
  }

  export type LectureUncheckedCreateInput = {
    id?: number
    subjectName: string
    timetableCode: string
    credits: number
    semester: string
    grade?: LectureCreategradeInput | number[]
    department?: LectureCreatedepartmentInput | string[]
    createdAt?: Date | string
    classroom: string
    lastUpdated: string
    overview: string
    objectives: string
    learningOutcomes: string
    teachingMethod: string
    notes: string
    preparation: string
    evaluation: string
    textbook: string
    referenceMaterials: string
    schedulePlan: string
    instructors?: LectureInstructorUncheckedCreateNestedManyWithoutLectureInput
    periods?: LecturePeriodUncheckedCreateNestedManyWithoutLectureInput
  }

  export type LectureUpdateInput = {
    subjectName?: StringFieldUpdateOperationsInput | string
    timetableCode?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    grade?: LectureUpdategradeInput | number[]
    department?: LectureUpdatedepartmentInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: StringFieldUpdateOperationsInput | string
    lastUpdated?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    objectives?: StringFieldUpdateOperationsInput | string
    learningOutcomes?: StringFieldUpdateOperationsInput | string
    teachingMethod?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    preparation?: StringFieldUpdateOperationsInput | string
    evaluation?: StringFieldUpdateOperationsInput | string
    textbook?: StringFieldUpdateOperationsInput | string
    referenceMaterials?: StringFieldUpdateOperationsInput | string
    schedulePlan?: StringFieldUpdateOperationsInput | string
    instructors?: LectureInstructorUpdateManyWithoutLectureNestedInput
    periods?: LecturePeriodUpdateManyWithoutLectureNestedInput
  }

  export type LectureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectName?: StringFieldUpdateOperationsInput | string
    timetableCode?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    grade?: LectureUpdategradeInput | number[]
    department?: LectureUpdatedepartmentInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: StringFieldUpdateOperationsInput | string
    lastUpdated?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    objectives?: StringFieldUpdateOperationsInput | string
    learningOutcomes?: StringFieldUpdateOperationsInput | string
    teachingMethod?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    preparation?: StringFieldUpdateOperationsInput | string
    evaluation?: StringFieldUpdateOperationsInput | string
    textbook?: StringFieldUpdateOperationsInput | string
    referenceMaterials?: StringFieldUpdateOperationsInput | string
    schedulePlan?: StringFieldUpdateOperationsInput | string
    instructors?: LectureInstructorUncheckedUpdateManyWithoutLectureNestedInput
    periods?: LecturePeriodUncheckedUpdateManyWithoutLectureNestedInput
  }

  export type LectureCreateManyInput = {
    id?: number
    subjectName: string
    timetableCode: string
    credits: number
    semester: string
    grade?: LectureCreategradeInput | number[]
    department?: LectureCreatedepartmentInput | string[]
    createdAt?: Date | string
    classroom: string
    lastUpdated: string
    overview: string
    objectives: string
    learningOutcomes: string
    teachingMethod: string
    notes: string
    preparation: string
    evaluation: string
    textbook: string
    referenceMaterials: string
    schedulePlan: string
  }

  export type LectureUpdateManyMutationInput = {
    subjectName?: StringFieldUpdateOperationsInput | string
    timetableCode?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    grade?: LectureUpdategradeInput | number[]
    department?: LectureUpdatedepartmentInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: StringFieldUpdateOperationsInput | string
    lastUpdated?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    objectives?: StringFieldUpdateOperationsInput | string
    learningOutcomes?: StringFieldUpdateOperationsInput | string
    teachingMethod?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    preparation?: StringFieldUpdateOperationsInput | string
    evaluation?: StringFieldUpdateOperationsInput | string
    textbook?: StringFieldUpdateOperationsInput | string
    referenceMaterials?: StringFieldUpdateOperationsInput | string
    schedulePlan?: StringFieldUpdateOperationsInput | string
  }

  export type LectureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectName?: StringFieldUpdateOperationsInput | string
    timetableCode?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    grade?: LectureUpdategradeInput | number[]
    department?: LectureUpdatedepartmentInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: StringFieldUpdateOperationsInput | string
    lastUpdated?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    objectives?: StringFieldUpdateOperationsInput | string
    learningOutcomes?: StringFieldUpdateOperationsInput | string
    teachingMethod?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    preparation?: StringFieldUpdateOperationsInput | string
    evaluation?: StringFieldUpdateOperationsInput | string
    textbook?: StringFieldUpdateOperationsInput | string
    referenceMaterials?: StringFieldUpdateOperationsInput | string
    schedulePlan?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorCreateInput = {
    name: string
    lectures?: LectureInstructorCreateNestedManyWithoutInstructorInput
  }

  export type InstructorUncheckedCreateInput = {
    id?: number
    name: string
    lectures?: LectureInstructorUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type InstructorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lectures?: LectureInstructorUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lectures?: LectureInstructorUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorCreateManyInput = {
    id?: number
    name: string
  }

  export type InstructorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LectureInstructorCreateInput = {
    lecture: LectureCreateNestedOneWithoutInstructorsInput
    instructor: InstructorCreateNestedOneWithoutLecturesInput
  }

  export type LectureInstructorUncheckedCreateInput = {
    id?: number
    lectureId: number
    instructorId: number
  }

  export type LectureInstructorUpdateInput = {
    lecture?: LectureUpdateOneRequiredWithoutInstructorsNestedInput
    instructor?: InstructorUpdateOneRequiredWithoutLecturesNestedInput
  }

  export type LectureInstructorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lectureId?: IntFieldUpdateOperationsInput | number
    instructorId?: IntFieldUpdateOperationsInput | number
  }

  export type LectureInstructorCreateManyInput = {
    id?: number
    lectureId: number
    instructorId: number
  }

  export type LectureInstructorUpdateManyMutationInput = {

  }

  export type LectureInstructorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lectureId?: IntFieldUpdateOperationsInput | number
    instructorId?: IntFieldUpdateOperationsInput | number
  }

  export type LecturePeriodCreateInput = {
    day: string
    period: number
    lecture: LectureCreateNestedOneWithoutPeriodsInput
  }

  export type LecturePeriodUncheckedCreateInput = {
    id?: number
    day: string
    period: number
    lectureId: number
  }

  export type LecturePeriodUpdateInput = {
    day?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    lecture?: LectureUpdateOneRequiredWithoutPeriodsNestedInput
  }

  export type LecturePeriodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    lectureId?: IntFieldUpdateOperationsInput | number
  }

  export type LecturePeriodCreateManyInput = {
    id?: number
    day: string
    period: number
    lectureId: number
  }

  export type LecturePeriodUpdateManyMutationInput = {
    day?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
  }

  export type LecturePeriodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    lectureId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LectureInstructorListRelationFilter = {
    every?: LectureInstructorWhereInput
    some?: LectureInstructorWhereInput
    none?: LectureInstructorWhereInput
  }

  export type LecturePeriodListRelationFilter = {
    every?: LecturePeriodWhereInput
    some?: LecturePeriodWhereInput
    none?: LecturePeriodWhereInput
  }

  export type LectureInstructorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LecturePeriodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LectureCountOrderByAggregateInput = {
    id?: SortOrder
    subjectName?: SortOrder
    timetableCode?: SortOrder
    credits?: SortOrder
    semester?: SortOrder
    grade?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    classroom?: SortOrder
    lastUpdated?: SortOrder
    overview?: SortOrder
    objectives?: SortOrder
    learningOutcomes?: SortOrder
    teachingMethod?: SortOrder
    notes?: SortOrder
    preparation?: SortOrder
    evaluation?: SortOrder
    textbook?: SortOrder
    referenceMaterials?: SortOrder
    schedulePlan?: SortOrder
  }

  export type LectureAvgOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
    grade?: SortOrder
  }

  export type LectureMaxOrderByAggregateInput = {
    id?: SortOrder
    subjectName?: SortOrder
    timetableCode?: SortOrder
    credits?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    classroom?: SortOrder
    lastUpdated?: SortOrder
    overview?: SortOrder
    objectives?: SortOrder
    learningOutcomes?: SortOrder
    teachingMethod?: SortOrder
    notes?: SortOrder
    preparation?: SortOrder
    evaluation?: SortOrder
    textbook?: SortOrder
    referenceMaterials?: SortOrder
    schedulePlan?: SortOrder
  }

  export type LectureMinOrderByAggregateInput = {
    id?: SortOrder
    subjectName?: SortOrder
    timetableCode?: SortOrder
    credits?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    classroom?: SortOrder
    lastUpdated?: SortOrder
    overview?: SortOrder
    objectives?: SortOrder
    learningOutcomes?: SortOrder
    teachingMethod?: SortOrder
    notes?: SortOrder
    preparation?: SortOrder
    evaluation?: SortOrder
    textbook?: SortOrder
    referenceMaterials?: SortOrder
    schedulePlan?: SortOrder
  }

  export type LectureSumOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
    grade?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type InstructorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InstructorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InstructorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InstructorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InstructorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LectureScalarRelationFilter = {
    is?: LectureWhereInput
    isNot?: LectureWhereInput
  }

  export type InstructorScalarRelationFilter = {
    is?: InstructorWhereInput
    isNot?: InstructorWhereInput
  }

  export type LectureInstructorLectureIdInstructorIdCompoundUniqueInput = {
    lectureId: number
    instructorId: number
  }

  export type LectureInstructorCountOrderByAggregateInput = {
    id?: SortOrder
    lectureId?: SortOrder
    instructorId?: SortOrder
  }

  export type LectureInstructorAvgOrderByAggregateInput = {
    id?: SortOrder
    lectureId?: SortOrder
    instructorId?: SortOrder
  }

  export type LectureInstructorMaxOrderByAggregateInput = {
    id?: SortOrder
    lectureId?: SortOrder
    instructorId?: SortOrder
  }

  export type LectureInstructorMinOrderByAggregateInput = {
    id?: SortOrder
    lectureId?: SortOrder
    instructorId?: SortOrder
  }

  export type LectureInstructorSumOrderByAggregateInput = {
    id?: SortOrder
    lectureId?: SortOrder
    instructorId?: SortOrder
  }

  export type LecturePeriodCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    period?: SortOrder
    lectureId?: SortOrder
  }

  export type LecturePeriodAvgOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    lectureId?: SortOrder
  }

  export type LecturePeriodMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    period?: SortOrder
    lectureId?: SortOrder
  }

  export type LecturePeriodMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    period?: SortOrder
    lectureId?: SortOrder
  }

  export type LecturePeriodSumOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    lectureId?: SortOrder
  }

  export type LectureCreategradeInput = {
    set: number[]
  }

  export type LectureCreatedepartmentInput = {
    set: string[]
  }

  export type LectureInstructorCreateNestedManyWithoutLectureInput = {
    create?: XOR<LectureInstructorCreateWithoutLectureInput, LectureInstructorUncheckedCreateWithoutLectureInput> | LectureInstructorCreateWithoutLectureInput[] | LectureInstructorUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: LectureInstructorCreateOrConnectWithoutLectureInput | LectureInstructorCreateOrConnectWithoutLectureInput[]
    createMany?: LectureInstructorCreateManyLectureInputEnvelope
    connect?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
  }

  export type LecturePeriodCreateNestedManyWithoutLectureInput = {
    create?: XOR<LecturePeriodCreateWithoutLectureInput, LecturePeriodUncheckedCreateWithoutLectureInput> | LecturePeriodCreateWithoutLectureInput[] | LecturePeriodUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: LecturePeriodCreateOrConnectWithoutLectureInput | LecturePeriodCreateOrConnectWithoutLectureInput[]
    createMany?: LecturePeriodCreateManyLectureInputEnvelope
    connect?: LecturePeriodWhereUniqueInput | LecturePeriodWhereUniqueInput[]
  }

  export type LectureInstructorUncheckedCreateNestedManyWithoutLectureInput = {
    create?: XOR<LectureInstructorCreateWithoutLectureInput, LectureInstructorUncheckedCreateWithoutLectureInput> | LectureInstructorCreateWithoutLectureInput[] | LectureInstructorUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: LectureInstructorCreateOrConnectWithoutLectureInput | LectureInstructorCreateOrConnectWithoutLectureInput[]
    createMany?: LectureInstructorCreateManyLectureInputEnvelope
    connect?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
  }

  export type LecturePeriodUncheckedCreateNestedManyWithoutLectureInput = {
    create?: XOR<LecturePeriodCreateWithoutLectureInput, LecturePeriodUncheckedCreateWithoutLectureInput> | LecturePeriodCreateWithoutLectureInput[] | LecturePeriodUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: LecturePeriodCreateOrConnectWithoutLectureInput | LecturePeriodCreateOrConnectWithoutLectureInput[]
    createMany?: LecturePeriodCreateManyLectureInputEnvelope
    connect?: LecturePeriodWhereUniqueInput | LecturePeriodWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LectureUpdategradeInput = {
    set?: number[]
    push?: number | number[]
  }

  export type LectureUpdatedepartmentInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LectureInstructorUpdateManyWithoutLectureNestedInput = {
    create?: XOR<LectureInstructorCreateWithoutLectureInput, LectureInstructorUncheckedCreateWithoutLectureInput> | LectureInstructorCreateWithoutLectureInput[] | LectureInstructorUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: LectureInstructorCreateOrConnectWithoutLectureInput | LectureInstructorCreateOrConnectWithoutLectureInput[]
    upsert?: LectureInstructorUpsertWithWhereUniqueWithoutLectureInput | LectureInstructorUpsertWithWhereUniqueWithoutLectureInput[]
    createMany?: LectureInstructorCreateManyLectureInputEnvelope
    set?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
    disconnect?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
    delete?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
    connect?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
    update?: LectureInstructorUpdateWithWhereUniqueWithoutLectureInput | LectureInstructorUpdateWithWhereUniqueWithoutLectureInput[]
    updateMany?: LectureInstructorUpdateManyWithWhereWithoutLectureInput | LectureInstructorUpdateManyWithWhereWithoutLectureInput[]
    deleteMany?: LectureInstructorScalarWhereInput | LectureInstructorScalarWhereInput[]
  }

  export type LecturePeriodUpdateManyWithoutLectureNestedInput = {
    create?: XOR<LecturePeriodCreateWithoutLectureInput, LecturePeriodUncheckedCreateWithoutLectureInput> | LecturePeriodCreateWithoutLectureInput[] | LecturePeriodUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: LecturePeriodCreateOrConnectWithoutLectureInput | LecturePeriodCreateOrConnectWithoutLectureInput[]
    upsert?: LecturePeriodUpsertWithWhereUniqueWithoutLectureInput | LecturePeriodUpsertWithWhereUniqueWithoutLectureInput[]
    createMany?: LecturePeriodCreateManyLectureInputEnvelope
    set?: LecturePeriodWhereUniqueInput | LecturePeriodWhereUniqueInput[]
    disconnect?: LecturePeriodWhereUniqueInput | LecturePeriodWhereUniqueInput[]
    delete?: LecturePeriodWhereUniqueInput | LecturePeriodWhereUniqueInput[]
    connect?: LecturePeriodWhereUniqueInput | LecturePeriodWhereUniqueInput[]
    update?: LecturePeriodUpdateWithWhereUniqueWithoutLectureInput | LecturePeriodUpdateWithWhereUniqueWithoutLectureInput[]
    updateMany?: LecturePeriodUpdateManyWithWhereWithoutLectureInput | LecturePeriodUpdateManyWithWhereWithoutLectureInput[]
    deleteMany?: LecturePeriodScalarWhereInput | LecturePeriodScalarWhereInput[]
  }

  export type LectureInstructorUncheckedUpdateManyWithoutLectureNestedInput = {
    create?: XOR<LectureInstructorCreateWithoutLectureInput, LectureInstructorUncheckedCreateWithoutLectureInput> | LectureInstructorCreateWithoutLectureInput[] | LectureInstructorUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: LectureInstructorCreateOrConnectWithoutLectureInput | LectureInstructorCreateOrConnectWithoutLectureInput[]
    upsert?: LectureInstructorUpsertWithWhereUniqueWithoutLectureInput | LectureInstructorUpsertWithWhereUniqueWithoutLectureInput[]
    createMany?: LectureInstructorCreateManyLectureInputEnvelope
    set?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
    disconnect?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
    delete?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
    connect?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
    update?: LectureInstructorUpdateWithWhereUniqueWithoutLectureInput | LectureInstructorUpdateWithWhereUniqueWithoutLectureInput[]
    updateMany?: LectureInstructorUpdateManyWithWhereWithoutLectureInput | LectureInstructorUpdateManyWithWhereWithoutLectureInput[]
    deleteMany?: LectureInstructorScalarWhereInput | LectureInstructorScalarWhereInput[]
  }

  export type LecturePeriodUncheckedUpdateManyWithoutLectureNestedInput = {
    create?: XOR<LecturePeriodCreateWithoutLectureInput, LecturePeriodUncheckedCreateWithoutLectureInput> | LecturePeriodCreateWithoutLectureInput[] | LecturePeriodUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: LecturePeriodCreateOrConnectWithoutLectureInput | LecturePeriodCreateOrConnectWithoutLectureInput[]
    upsert?: LecturePeriodUpsertWithWhereUniqueWithoutLectureInput | LecturePeriodUpsertWithWhereUniqueWithoutLectureInput[]
    createMany?: LecturePeriodCreateManyLectureInputEnvelope
    set?: LecturePeriodWhereUniqueInput | LecturePeriodWhereUniqueInput[]
    disconnect?: LecturePeriodWhereUniqueInput | LecturePeriodWhereUniqueInput[]
    delete?: LecturePeriodWhereUniqueInput | LecturePeriodWhereUniqueInput[]
    connect?: LecturePeriodWhereUniqueInput | LecturePeriodWhereUniqueInput[]
    update?: LecturePeriodUpdateWithWhereUniqueWithoutLectureInput | LecturePeriodUpdateWithWhereUniqueWithoutLectureInput[]
    updateMany?: LecturePeriodUpdateManyWithWhereWithoutLectureInput | LecturePeriodUpdateManyWithWhereWithoutLectureInput[]
    deleteMany?: LecturePeriodScalarWhereInput | LecturePeriodScalarWhereInput[]
  }

  export type LectureInstructorCreateNestedManyWithoutInstructorInput = {
    create?: XOR<LectureInstructorCreateWithoutInstructorInput, LectureInstructorUncheckedCreateWithoutInstructorInput> | LectureInstructorCreateWithoutInstructorInput[] | LectureInstructorUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: LectureInstructorCreateOrConnectWithoutInstructorInput | LectureInstructorCreateOrConnectWithoutInstructorInput[]
    createMany?: LectureInstructorCreateManyInstructorInputEnvelope
    connect?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
  }

  export type LectureInstructorUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<LectureInstructorCreateWithoutInstructorInput, LectureInstructorUncheckedCreateWithoutInstructorInput> | LectureInstructorCreateWithoutInstructorInput[] | LectureInstructorUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: LectureInstructorCreateOrConnectWithoutInstructorInput | LectureInstructorCreateOrConnectWithoutInstructorInput[]
    createMany?: LectureInstructorCreateManyInstructorInputEnvelope
    connect?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
  }

  export type LectureInstructorUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<LectureInstructorCreateWithoutInstructorInput, LectureInstructorUncheckedCreateWithoutInstructorInput> | LectureInstructorCreateWithoutInstructorInput[] | LectureInstructorUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: LectureInstructorCreateOrConnectWithoutInstructorInput | LectureInstructorCreateOrConnectWithoutInstructorInput[]
    upsert?: LectureInstructorUpsertWithWhereUniqueWithoutInstructorInput | LectureInstructorUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: LectureInstructorCreateManyInstructorInputEnvelope
    set?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
    disconnect?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
    delete?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
    connect?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
    update?: LectureInstructorUpdateWithWhereUniqueWithoutInstructorInput | LectureInstructorUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: LectureInstructorUpdateManyWithWhereWithoutInstructorInput | LectureInstructorUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: LectureInstructorScalarWhereInput | LectureInstructorScalarWhereInput[]
  }

  export type LectureInstructorUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<LectureInstructorCreateWithoutInstructorInput, LectureInstructorUncheckedCreateWithoutInstructorInput> | LectureInstructorCreateWithoutInstructorInput[] | LectureInstructorUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: LectureInstructorCreateOrConnectWithoutInstructorInput | LectureInstructorCreateOrConnectWithoutInstructorInput[]
    upsert?: LectureInstructorUpsertWithWhereUniqueWithoutInstructorInput | LectureInstructorUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: LectureInstructorCreateManyInstructorInputEnvelope
    set?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
    disconnect?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
    delete?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
    connect?: LectureInstructorWhereUniqueInput | LectureInstructorWhereUniqueInput[]
    update?: LectureInstructorUpdateWithWhereUniqueWithoutInstructorInput | LectureInstructorUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: LectureInstructorUpdateManyWithWhereWithoutInstructorInput | LectureInstructorUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: LectureInstructorScalarWhereInput | LectureInstructorScalarWhereInput[]
  }

  export type LectureCreateNestedOneWithoutInstructorsInput = {
    create?: XOR<LectureCreateWithoutInstructorsInput, LectureUncheckedCreateWithoutInstructorsInput>
    connectOrCreate?: LectureCreateOrConnectWithoutInstructorsInput
    connect?: LectureWhereUniqueInput
  }

  export type InstructorCreateNestedOneWithoutLecturesInput = {
    create?: XOR<InstructorCreateWithoutLecturesInput, InstructorUncheckedCreateWithoutLecturesInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutLecturesInput
    connect?: InstructorWhereUniqueInput
  }

  export type LectureUpdateOneRequiredWithoutInstructorsNestedInput = {
    create?: XOR<LectureCreateWithoutInstructorsInput, LectureUncheckedCreateWithoutInstructorsInput>
    connectOrCreate?: LectureCreateOrConnectWithoutInstructorsInput
    upsert?: LectureUpsertWithoutInstructorsInput
    connect?: LectureWhereUniqueInput
    update?: XOR<XOR<LectureUpdateToOneWithWhereWithoutInstructorsInput, LectureUpdateWithoutInstructorsInput>, LectureUncheckedUpdateWithoutInstructorsInput>
  }

  export type InstructorUpdateOneRequiredWithoutLecturesNestedInput = {
    create?: XOR<InstructorCreateWithoutLecturesInput, InstructorUncheckedCreateWithoutLecturesInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutLecturesInput
    upsert?: InstructorUpsertWithoutLecturesInput
    connect?: InstructorWhereUniqueInput
    update?: XOR<XOR<InstructorUpdateToOneWithWhereWithoutLecturesInput, InstructorUpdateWithoutLecturesInput>, InstructorUncheckedUpdateWithoutLecturesInput>
  }

  export type LectureCreateNestedOneWithoutPeriodsInput = {
    create?: XOR<LectureCreateWithoutPeriodsInput, LectureUncheckedCreateWithoutPeriodsInput>
    connectOrCreate?: LectureCreateOrConnectWithoutPeriodsInput
    connect?: LectureWhereUniqueInput
  }

  export type LectureUpdateOneRequiredWithoutPeriodsNestedInput = {
    create?: XOR<LectureCreateWithoutPeriodsInput, LectureUncheckedCreateWithoutPeriodsInput>
    connectOrCreate?: LectureCreateOrConnectWithoutPeriodsInput
    upsert?: LectureUpsertWithoutPeriodsInput
    connect?: LectureWhereUniqueInput
    update?: XOR<XOR<LectureUpdateToOneWithWhereWithoutPeriodsInput, LectureUpdateWithoutPeriodsInput>, LectureUncheckedUpdateWithoutPeriodsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LectureInstructorCreateWithoutLectureInput = {
    instructor: InstructorCreateNestedOneWithoutLecturesInput
  }

  export type LectureInstructorUncheckedCreateWithoutLectureInput = {
    id?: number
    instructorId: number
  }

  export type LectureInstructorCreateOrConnectWithoutLectureInput = {
    where: LectureInstructorWhereUniqueInput
    create: XOR<LectureInstructorCreateWithoutLectureInput, LectureInstructorUncheckedCreateWithoutLectureInput>
  }

  export type LectureInstructorCreateManyLectureInputEnvelope = {
    data: LectureInstructorCreateManyLectureInput | LectureInstructorCreateManyLectureInput[]
    skipDuplicates?: boolean
  }

  export type LecturePeriodCreateWithoutLectureInput = {
    day: string
    period: number
  }

  export type LecturePeriodUncheckedCreateWithoutLectureInput = {
    id?: number
    day: string
    period: number
  }

  export type LecturePeriodCreateOrConnectWithoutLectureInput = {
    where: LecturePeriodWhereUniqueInput
    create: XOR<LecturePeriodCreateWithoutLectureInput, LecturePeriodUncheckedCreateWithoutLectureInput>
  }

  export type LecturePeriodCreateManyLectureInputEnvelope = {
    data: LecturePeriodCreateManyLectureInput | LecturePeriodCreateManyLectureInput[]
    skipDuplicates?: boolean
  }

  export type LectureInstructorUpsertWithWhereUniqueWithoutLectureInput = {
    where: LectureInstructorWhereUniqueInput
    update: XOR<LectureInstructorUpdateWithoutLectureInput, LectureInstructorUncheckedUpdateWithoutLectureInput>
    create: XOR<LectureInstructorCreateWithoutLectureInput, LectureInstructorUncheckedCreateWithoutLectureInput>
  }

  export type LectureInstructorUpdateWithWhereUniqueWithoutLectureInput = {
    where: LectureInstructorWhereUniqueInput
    data: XOR<LectureInstructorUpdateWithoutLectureInput, LectureInstructorUncheckedUpdateWithoutLectureInput>
  }

  export type LectureInstructorUpdateManyWithWhereWithoutLectureInput = {
    where: LectureInstructorScalarWhereInput
    data: XOR<LectureInstructorUpdateManyMutationInput, LectureInstructorUncheckedUpdateManyWithoutLectureInput>
  }

  export type LectureInstructorScalarWhereInput = {
    AND?: LectureInstructorScalarWhereInput | LectureInstructorScalarWhereInput[]
    OR?: LectureInstructorScalarWhereInput[]
    NOT?: LectureInstructorScalarWhereInput | LectureInstructorScalarWhereInput[]
    id?: IntFilter<"LectureInstructor"> | number
    lectureId?: IntFilter<"LectureInstructor"> | number
    instructorId?: IntFilter<"LectureInstructor"> | number
  }

  export type LecturePeriodUpsertWithWhereUniqueWithoutLectureInput = {
    where: LecturePeriodWhereUniqueInput
    update: XOR<LecturePeriodUpdateWithoutLectureInput, LecturePeriodUncheckedUpdateWithoutLectureInput>
    create: XOR<LecturePeriodCreateWithoutLectureInput, LecturePeriodUncheckedCreateWithoutLectureInput>
  }

  export type LecturePeriodUpdateWithWhereUniqueWithoutLectureInput = {
    where: LecturePeriodWhereUniqueInput
    data: XOR<LecturePeriodUpdateWithoutLectureInput, LecturePeriodUncheckedUpdateWithoutLectureInput>
  }

  export type LecturePeriodUpdateManyWithWhereWithoutLectureInput = {
    where: LecturePeriodScalarWhereInput
    data: XOR<LecturePeriodUpdateManyMutationInput, LecturePeriodUncheckedUpdateManyWithoutLectureInput>
  }

  export type LecturePeriodScalarWhereInput = {
    AND?: LecturePeriodScalarWhereInput | LecturePeriodScalarWhereInput[]
    OR?: LecturePeriodScalarWhereInput[]
    NOT?: LecturePeriodScalarWhereInput | LecturePeriodScalarWhereInput[]
    id?: IntFilter<"LecturePeriod"> | number
    day?: StringFilter<"LecturePeriod"> | string
    period?: IntFilter<"LecturePeriod"> | number
    lectureId?: IntFilter<"LecturePeriod"> | number
  }

  export type LectureInstructorCreateWithoutInstructorInput = {
    lecture: LectureCreateNestedOneWithoutInstructorsInput
  }

  export type LectureInstructorUncheckedCreateWithoutInstructorInput = {
    id?: number
    lectureId: number
  }

  export type LectureInstructorCreateOrConnectWithoutInstructorInput = {
    where: LectureInstructorWhereUniqueInput
    create: XOR<LectureInstructorCreateWithoutInstructorInput, LectureInstructorUncheckedCreateWithoutInstructorInput>
  }

  export type LectureInstructorCreateManyInstructorInputEnvelope = {
    data: LectureInstructorCreateManyInstructorInput | LectureInstructorCreateManyInstructorInput[]
    skipDuplicates?: boolean
  }

  export type LectureInstructorUpsertWithWhereUniqueWithoutInstructorInput = {
    where: LectureInstructorWhereUniqueInput
    update: XOR<LectureInstructorUpdateWithoutInstructorInput, LectureInstructorUncheckedUpdateWithoutInstructorInput>
    create: XOR<LectureInstructorCreateWithoutInstructorInput, LectureInstructorUncheckedCreateWithoutInstructorInput>
  }

  export type LectureInstructorUpdateWithWhereUniqueWithoutInstructorInput = {
    where: LectureInstructorWhereUniqueInput
    data: XOR<LectureInstructorUpdateWithoutInstructorInput, LectureInstructorUncheckedUpdateWithoutInstructorInput>
  }

  export type LectureInstructorUpdateManyWithWhereWithoutInstructorInput = {
    where: LectureInstructorScalarWhereInput
    data: XOR<LectureInstructorUpdateManyMutationInput, LectureInstructorUncheckedUpdateManyWithoutInstructorInput>
  }

  export type LectureCreateWithoutInstructorsInput = {
    subjectName: string
    timetableCode: string
    credits: number
    semester: string
    grade?: LectureCreategradeInput | number[]
    department?: LectureCreatedepartmentInput | string[]
    createdAt?: Date | string
    classroom: string
    lastUpdated: string
    overview: string
    objectives: string
    learningOutcomes: string
    teachingMethod: string
    notes: string
    preparation: string
    evaluation: string
    textbook: string
    referenceMaterials: string
    schedulePlan: string
    periods?: LecturePeriodCreateNestedManyWithoutLectureInput
  }

  export type LectureUncheckedCreateWithoutInstructorsInput = {
    id?: number
    subjectName: string
    timetableCode: string
    credits: number
    semester: string
    grade?: LectureCreategradeInput | number[]
    department?: LectureCreatedepartmentInput | string[]
    createdAt?: Date | string
    classroom: string
    lastUpdated: string
    overview: string
    objectives: string
    learningOutcomes: string
    teachingMethod: string
    notes: string
    preparation: string
    evaluation: string
    textbook: string
    referenceMaterials: string
    schedulePlan: string
    periods?: LecturePeriodUncheckedCreateNestedManyWithoutLectureInput
  }

  export type LectureCreateOrConnectWithoutInstructorsInput = {
    where: LectureWhereUniqueInput
    create: XOR<LectureCreateWithoutInstructorsInput, LectureUncheckedCreateWithoutInstructorsInput>
  }

  export type InstructorCreateWithoutLecturesInput = {
    name: string
  }

  export type InstructorUncheckedCreateWithoutLecturesInput = {
    id?: number
    name: string
  }

  export type InstructorCreateOrConnectWithoutLecturesInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutLecturesInput, InstructorUncheckedCreateWithoutLecturesInput>
  }

  export type LectureUpsertWithoutInstructorsInput = {
    update: XOR<LectureUpdateWithoutInstructorsInput, LectureUncheckedUpdateWithoutInstructorsInput>
    create: XOR<LectureCreateWithoutInstructorsInput, LectureUncheckedCreateWithoutInstructorsInput>
    where?: LectureWhereInput
  }

  export type LectureUpdateToOneWithWhereWithoutInstructorsInput = {
    where?: LectureWhereInput
    data: XOR<LectureUpdateWithoutInstructorsInput, LectureUncheckedUpdateWithoutInstructorsInput>
  }

  export type LectureUpdateWithoutInstructorsInput = {
    subjectName?: StringFieldUpdateOperationsInput | string
    timetableCode?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    grade?: LectureUpdategradeInput | number[]
    department?: LectureUpdatedepartmentInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: StringFieldUpdateOperationsInput | string
    lastUpdated?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    objectives?: StringFieldUpdateOperationsInput | string
    learningOutcomes?: StringFieldUpdateOperationsInput | string
    teachingMethod?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    preparation?: StringFieldUpdateOperationsInput | string
    evaluation?: StringFieldUpdateOperationsInput | string
    textbook?: StringFieldUpdateOperationsInput | string
    referenceMaterials?: StringFieldUpdateOperationsInput | string
    schedulePlan?: StringFieldUpdateOperationsInput | string
    periods?: LecturePeriodUpdateManyWithoutLectureNestedInput
  }

  export type LectureUncheckedUpdateWithoutInstructorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectName?: StringFieldUpdateOperationsInput | string
    timetableCode?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    grade?: LectureUpdategradeInput | number[]
    department?: LectureUpdatedepartmentInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: StringFieldUpdateOperationsInput | string
    lastUpdated?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    objectives?: StringFieldUpdateOperationsInput | string
    learningOutcomes?: StringFieldUpdateOperationsInput | string
    teachingMethod?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    preparation?: StringFieldUpdateOperationsInput | string
    evaluation?: StringFieldUpdateOperationsInput | string
    textbook?: StringFieldUpdateOperationsInput | string
    referenceMaterials?: StringFieldUpdateOperationsInput | string
    schedulePlan?: StringFieldUpdateOperationsInput | string
    periods?: LecturePeriodUncheckedUpdateManyWithoutLectureNestedInput
  }

  export type InstructorUpsertWithoutLecturesInput = {
    update: XOR<InstructorUpdateWithoutLecturesInput, InstructorUncheckedUpdateWithoutLecturesInput>
    create: XOR<InstructorCreateWithoutLecturesInput, InstructorUncheckedCreateWithoutLecturesInput>
    where?: InstructorWhereInput
  }

  export type InstructorUpdateToOneWithWhereWithoutLecturesInput = {
    where?: InstructorWhereInput
    data: XOR<InstructorUpdateWithoutLecturesInput, InstructorUncheckedUpdateWithoutLecturesInput>
  }

  export type InstructorUpdateWithoutLecturesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorUncheckedUpdateWithoutLecturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LectureCreateWithoutPeriodsInput = {
    subjectName: string
    timetableCode: string
    credits: number
    semester: string
    grade?: LectureCreategradeInput | number[]
    department?: LectureCreatedepartmentInput | string[]
    createdAt?: Date | string
    classroom: string
    lastUpdated: string
    overview: string
    objectives: string
    learningOutcomes: string
    teachingMethod: string
    notes: string
    preparation: string
    evaluation: string
    textbook: string
    referenceMaterials: string
    schedulePlan: string
    instructors?: LectureInstructorCreateNestedManyWithoutLectureInput
  }

  export type LectureUncheckedCreateWithoutPeriodsInput = {
    id?: number
    subjectName: string
    timetableCode: string
    credits: number
    semester: string
    grade?: LectureCreategradeInput | number[]
    department?: LectureCreatedepartmentInput | string[]
    createdAt?: Date | string
    classroom: string
    lastUpdated: string
    overview: string
    objectives: string
    learningOutcomes: string
    teachingMethod: string
    notes: string
    preparation: string
    evaluation: string
    textbook: string
    referenceMaterials: string
    schedulePlan: string
    instructors?: LectureInstructorUncheckedCreateNestedManyWithoutLectureInput
  }

  export type LectureCreateOrConnectWithoutPeriodsInput = {
    where: LectureWhereUniqueInput
    create: XOR<LectureCreateWithoutPeriodsInput, LectureUncheckedCreateWithoutPeriodsInput>
  }

  export type LectureUpsertWithoutPeriodsInput = {
    update: XOR<LectureUpdateWithoutPeriodsInput, LectureUncheckedUpdateWithoutPeriodsInput>
    create: XOR<LectureCreateWithoutPeriodsInput, LectureUncheckedCreateWithoutPeriodsInput>
    where?: LectureWhereInput
  }

  export type LectureUpdateToOneWithWhereWithoutPeriodsInput = {
    where?: LectureWhereInput
    data: XOR<LectureUpdateWithoutPeriodsInput, LectureUncheckedUpdateWithoutPeriodsInput>
  }

  export type LectureUpdateWithoutPeriodsInput = {
    subjectName?: StringFieldUpdateOperationsInput | string
    timetableCode?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    grade?: LectureUpdategradeInput | number[]
    department?: LectureUpdatedepartmentInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: StringFieldUpdateOperationsInput | string
    lastUpdated?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    objectives?: StringFieldUpdateOperationsInput | string
    learningOutcomes?: StringFieldUpdateOperationsInput | string
    teachingMethod?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    preparation?: StringFieldUpdateOperationsInput | string
    evaluation?: StringFieldUpdateOperationsInput | string
    textbook?: StringFieldUpdateOperationsInput | string
    referenceMaterials?: StringFieldUpdateOperationsInput | string
    schedulePlan?: StringFieldUpdateOperationsInput | string
    instructors?: LectureInstructorUpdateManyWithoutLectureNestedInput
  }

  export type LectureUncheckedUpdateWithoutPeriodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectName?: StringFieldUpdateOperationsInput | string
    timetableCode?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    grade?: LectureUpdategradeInput | number[]
    department?: LectureUpdatedepartmentInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: StringFieldUpdateOperationsInput | string
    lastUpdated?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    objectives?: StringFieldUpdateOperationsInput | string
    learningOutcomes?: StringFieldUpdateOperationsInput | string
    teachingMethod?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    preparation?: StringFieldUpdateOperationsInput | string
    evaluation?: StringFieldUpdateOperationsInput | string
    textbook?: StringFieldUpdateOperationsInput | string
    referenceMaterials?: StringFieldUpdateOperationsInput | string
    schedulePlan?: StringFieldUpdateOperationsInput | string
    instructors?: LectureInstructorUncheckedUpdateManyWithoutLectureNestedInput
  }

  export type LectureInstructorCreateManyLectureInput = {
    id?: number
    instructorId: number
  }

  export type LecturePeriodCreateManyLectureInput = {
    id?: number
    day: string
    period: number
  }

  export type LectureInstructorUpdateWithoutLectureInput = {
    instructor?: InstructorUpdateOneRequiredWithoutLecturesNestedInput
  }

  export type LectureInstructorUncheckedUpdateWithoutLectureInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: IntFieldUpdateOperationsInput | number
  }

  export type LectureInstructorUncheckedUpdateManyWithoutLectureInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: IntFieldUpdateOperationsInput | number
  }

  export type LecturePeriodUpdateWithoutLectureInput = {
    day?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
  }

  export type LecturePeriodUncheckedUpdateWithoutLectureInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
  }

  export type LecturePeriodUncheckedUpdateManyWithoutLectureInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
  }

  export type LectureInstructorCreateManyInstructorInput = {
    id?: number
    lectureId: number
  }

  export type LectureInstructorUpdateWithoutInstructorInput = {
    lecture?: LectureUpdateOneRequiredWithoutInstructorsNestedInput
  }

  export type LectureInstructorUncheckedUpdateWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    lectureId?: IntFieldUpdateOperationsInput | number
  }

  export type LectureInstructorUncheckedUpdateManyWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    lectureId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}