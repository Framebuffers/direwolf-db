
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
 * Model Wolfpack
 * 
 */
export type Wolfpack = $Result.DefaultSelection<Prisma.$WolfpackPayload>
/**
 * Model DocumentRecord
 * 
 */
export type DocumentRecord = $Result.DefaultSelection<Prisma.$DocumentRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Wolfpacks
 * const wolfpacks = await prisma.wolfpack.findMany()
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
   * // Fetch zero or more Wolfpacks
   * const wolfpacks = await prisma.wolfpack.findMany()
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
   * `prisma.wolfpack`: Exposes CRUD operations for the **Wolfpack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wolfpacks
    * const wolfpacks = await prisma.wolfpack.findMany()
    * ```
    */
  get wolfpack(): Prisma.WolfpackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentRecord`: Exposes CRUD operations for the **DocumentRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentRecords
    * const documentRecords = await prisma.documentRecord.findMany()
    * ```
    */
  get documentRecord(): Prisma.DocumentRecordDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    Wolfpack: 'Wolfpack',
    DocumentRecord: 'DocumentRecord'
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
      modelProps: "wolfpack" | "documentRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Wolfpack: {
        payload: Prisma.$WolfpackPayload<ExtArgs>
        fields: Prisma.WolfpackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WolfpackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WolfpackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WolfpackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WolfpackPayload>
          }
          findFirst: {
            args: Prisma.WolfpackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WolfpackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WolfpackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WolfpackPayload>
          }
          findMany: {
            args: Prisma.WolfpackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WolfpackPayload>[]
          }
          create: {
            args: Prisma.WolfpackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WolfpackPayload>
          }
          createMany: {
            args: Prisma.WolfpackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WolfpackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WolfpackPayload>[]
          }
          delete: {
            args: Prisma.WolfpackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WolfpackPayload>
          }
          update: {
            args: Prisma.WolfpackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WolfpackPayload>
          }
          deleteMany: {
            args: Prisma.WolfpackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WolfpackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WolfpackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WolfpackPayload>[]
          }
          upsert: {
            args: Prisma.WolfpackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WolfpackPayload>
          }
          aggregate: {
            args: Prisma.WolfpackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWolfpack>
          }
          groupBy: {
            args: Prisma.WolfpackGroupByArgs<ExtArgs>
            result: $Utils.Optional<WolfpackGroupByOutputType>[]
          }
          count: {
            args: Prisma.WolfpackCountArgs<ExtArgs>
            result: $Utils.Optional<WolfpackCountAggregateOutputType> | number
          }
        }
      }
      DocumentRecord: {
        payload: Prisma.$DocumentRecordPayload<ExtArgs>
        fields: Prisma.DocumentRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecordPayload>
          }
          findFirst: {
            args: Prisma.DocumentRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecordPayload>
          }
          findMany: {
            args: Prisma.DocumentRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecordPayload>[]
          }
          create: {
            args: Prisma.DocumentRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecordPayload>
          }
          createMany: {
            args: Prisma.DocumentRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecordPayload>[]
          }
          delete: {
            args: Prisma.DocumentRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecordPayload>
          }
          update: {
            args: Prisma.DocumentRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecordPayload>
          }
          deleteMany: {
            args: Prisma.DocumentRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecordPayload>[]
          }
          upsert: {
            args: Prisma.DocumentRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecordPayload>
          }
          aggregate: {
            args: Prisma.DocumentRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentRecord>
          }
          groupBy: {
            args: Prisma.DocumentRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentRecordCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentRecordCountAggregateOutputType> | number
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
    wolfpack?: WolfpackOmit
    documentRecord?: DocumentRecordOmit
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
   * Models
   */

  /**
   * Model Wolfpack
   */

  export type AggregateWolfpack = {
    _count: WolfpackCountAggregateOutputType | null
    _avg: WolfpackAvgAggregateOutputType | null
    _sum: WolfpackSumAggregateOutputType | null
    _min: WolfpackMinAggregateOutputType | null
    _max: WolfpackMaxAggregateOutputType | null
  }

  export type WolfpackAvgAggregateOutputType = {
    id: number | null
    timeTaken: number | null
    resultCount: number | null
  }

  export type WolfpackSumAggregateOutputType = {
    id: number | null
    timeTaken: number | null
    resultCount: number | null
  }

  export type WolfpackMinAggregateOutputType = {
    id: number | null
    documentName: string | null
    fileOrigin: string | null
    documentVersion: string | null
    wasCompleted: boolean | null
    timeTaken: number | null
    createdAt: Date | null
    guid: string | null
    resultCount: number | null
    testName: string | null
  }

  export type WolfpackMaxAggregateOutputType = {
    id: number | null
    documentName: string | null
    fileOrigin: string | null
    documentVersion: string | null
    wasCompleted: boolean | null
    timeTaken: number | null
    createdAt: Date | null
    guid: string | null
    resultCount: number | null
    testName: string | null
  }

  export type WolfpackCountAggregateOutputType = {
    id: number
    documentName: number
    fileOrigin: number
    documentVersion: number
    wasCompleted: number
    timeTaken: number
    createdAt: number
    guid: number
    resultCount: number
    testName: number
    results: number
    _all: number
  }


  export type WolfpackAvgAggregateInputType = {
    id?: true
    timeTaken?: true
    resultCount?: true
  }

  export type WolfpackSumAggregateInputType = {
    id?: true
    timeTaken?: true
    resultCount?: true
  }

  export type WolfpackMinAggregateInputType = {
    id?: true
    documentName?: true
    fileOrigin?: true
    documentVersion?: true
    wasCompleted?: true
    timeTaken?: true
    createdAt?: true
    guid?: true
    resultCount?: true
    testName?: true
  }

  export type WolfpackMaxAggregateInputType = {
    id?: true
    documentName?: true
    fileOrigin?: true
    documentVersion?: true
    wasCompleted?: true
    timeTaken?: true
    createdAt?: true
    guid?: true
    resultCount?: true
    testName?: true
  }

  export type WolfpackCountAggregateInputType = {
    id?: true
    documentName?: true
    fileOrigin?: true
    documentVersion?: true
    wasCompleted?: true
    timeTaken?: true
    createdAt?: true
    guid?: true
    resultCount?: true
    testName?: true
    results?: true
    _all?: true
  }

  export type WolfpackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wolfpack to aggregate.
     */
    where?: WolfpackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wolfpacks to fetch.
     */
    orderBy?: WolfpackOrderByWithRelationInput | WolfpackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WolfpackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wolfpacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wolfpacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wolfpacks
    **/
    _count?: true | WolfpackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WolfpackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WolfpackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WolfpackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WolfpackMaxAggregateInputType
  }

  export type GetWolfpackAggregateType<T extends WolfpackAggregateArgs> = {
        [P in keyof T & keyof AggregateWolfpack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWolfpack[P]>
      : GetScalarType<T[P], AggregateWolfpack[P]>
  }




  export type WolfpackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WolfpackWhereInput
    orderBy?: WolfpackOrderByWithAggregationInput | WolfpackOrderByWithAggregationInput[]
    by: WolfpackScalarFieldEnum[] | WolfpackScalarFieldEnum
    having?: WolfpackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WolfpackCountAggregateInputType | true
    _avg?: WolfpackAvgAggregateInputType
    _sum?: WolfpackSumAggregateInputType
    _min?: WolfpackMinAggregateInputType
    _max?: WolfpackMaxAggregateInputType
  }

  export type WolfpackGroupByOutputType = {
    id: number
    documentName: string
    fileOrigin: string
    documentVersion: string
    wasCompleted: boolean
    timeTaken: number
    createdAt: Date
    guid: string
    resultCount: number
    testName: string
    results: JsonValue | null
    _count: WolfpackCountAggregateOutputType | null
    _avg: WolfpackAvgAggregateOutputType | null
    _sum: WolfpackSumAggregateOutputType | null
    _min: WolfpackMinAggregateOutputType | null
    _max: WolfpackMaxAggregateOutputType | null
  }

  type GetWolfpackGroupByPayload<T extends WolfpackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WolfpackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WolfpackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WolfpackGroupByOutputType[P]>
            : GetScalarType<T[P], WolfpackGroupByOutputType[P]>
        }
      >
    >


  export type WolfpackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentName?: boolean
    fileOrigin?: boolean
    documentVersion?: boolean
    wasCompleted?: boolean
    timeTaken?: boolean
    createdAt?: boolean
    guid?: boolean
    resultCount?: boolean
    testName?: boolean
    results?: boolean
  }, ExtArgs["result"]["wolfpack"]>

  export type WolfpackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentName?: boolean
    fileOrigin?: boolean
    documentVersion?: boolean
    wasCompleted?: boolean
    timeTaken?: boolean
    createdAt?: boolean
    guid?: boolean
    resultCount?: boolean
    testName?: boolean
    results?: boolean
  }, ExtArgs["result"]["wolfpack"]>

  export type WolfpackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentName?: boolean
    fileOrigin?: boolean
    documentVersion?: boolean
    wasCompleted?: boolean
    timeTaken?: boolean
    createdAt?: boolean
    guid?: boolean
    resultCount?: boolean
    testName?: boolean
    results?: boolean
  }, ExtArgs["result"]["wolfpack"]>

  export type WolfpackSelectScalar = {
    id?: boolean
    documentName?: boolean
    fileOrigin?: boolean
    documentVersion?: boolean
    wasCompleted?: boolean
    timeTaken?: boolean
    createdAt?: boolean
    guid?: boolean
    resultCount?: boolean
    testName?: boolean
    results?: boolean
  }

  export type WolfpackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentName" | "fileOrigin" | "documentVersion" | "wasCompleted" | "timeTaken" | "createdAt" | "guid" | "resultCount" | "testName" | "results", ExtArgs["result"]["wolfpack"]>

  export type $WolfpackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wolfpack"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentName: string
      fileOrigin: string
      documentVersion: string
      wasCompleted: boolean
      timeTaken: number
      createdAt: Date
      guid: string
      resultCount: number
      testName: string
      results: Prisma.JsonValue | null
    }, ExtArgs["result"]["wolfpack"]>
    composites: {}
  }

  type WolfpackGetPayload<S extends boolean | null | undefined | WolfpackDefaultArgs> = $Result.GetResult<Prisma.$WolfpackPayload, S>

  type WolfpackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WolfpackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WolfpackCountAggregateInputType | true
    }

  export interface WolfpackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wolfpack'], meta: { name: 'Wolfpack' } }
    /**
     * Find zero or one Wolfpack that matches the filter.
     * @param {WolfpackFindUniqueArgs} args - Arguments to find a Wolfpack
     * @example
     * // Get one Wolfpack
     * const wolfpack = await prisma.wolfpack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WolfpackFindUniqueArgs>(args: SelectSubset<T, WolfpackFindUniqueArgs<ExtArgs>>): Prisma__WolfpackClient<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wolfpack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WolfpackFindUniqueOrThrowArgs} args - Arguments to find a Wolfpack
     * @example
     * // Get one Wolfpack
     * const wolfpack = await prisma.wolfpack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WolfpackFindUniqueOrThrowArgs>(args: SelectSubset<T, WolfpackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WolfpackClient<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wolfpack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WolfpackFindFirstArgs} args - Arguments to find a Wolfpack
     * @example
     * // Get one Wolfpack
     * const wolfpack = await prisma.wolfpack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WolfpackFindFirstArgs>(args?: SelectSubset<T, WolfpackFindFirstArgs<ExtArgs>>): Prisma__WolfpackClient<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wolfpack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WolfpackFindFirstOrThrowArgs} args - Arguments to find a Wolfpack
     * @example
     * // Get one Wolfpack
     * const wolfpack = await prisma.wolfpack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WolfpackFindFirstOrThrowArgs>(args?: SelectSubset<T, WolfpackFindFirstOrThrowArgs<ExtArgs>>): Prisma__WolfpackClient<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wolfpacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WolfpackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wolfpacks
     * const wolfpacks = await prisma.wolfpack.findMany()
     * 
     * // Get first 10 Wolfpacks
     * const wolfpacks = await prisma.wolfpack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wolfpackWithIdOnly = await prisma.wolfpack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WolfpackFindManyArgs>(args?: SelectSubset<T, WolfpackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wolfpack.
     * @param {WolfpackCreateArgs} args - Arguments to create a Wolfpack.
     * @example
     * // Create one Wolfpack
     * const Wolfpack = await prisma.wolfpack.create({
     *   data: {
     *     // ... data to create a Wolfpack
     *   }
     * })
     * 
     */
    create<T extends WolfpackCreateArgs>(args: SelectSubset<T, WolfpackCreateArgs<ExtArgs>>): Prisma__WolfpackClient<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wolfpacks.
     * @param {WolfpackCreateManyArgs} args - Arguments to create many Wolfpacks.
     * @example
     * // Create many Wolfpacks
     * const wolfpack = await prisma.wolfpack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WolfpackCreateManyArgs>(args?: SelectSubset<T, WolfpackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wolfpacks and returns the data saved in the database.
     * @param {WolfpackCreateManyAndReturnArgs} args - Arguments to create many Wolfpacks.
     * @example
     * // Create many Wolfpacks
     * const wolfpack = await prisma.wolfpack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wolfpacks and only return the `id`
     * const wolfpackWithIdOnly = await prisma.wolfpack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WolfpackCreateManyAndReturnArgs>(args?: SelectSubset<T, WolfpackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wolfpack.
     * @param {WolfpackDeleteArgs} args - Arguments to delete one Wolfpack.
     * @example
     * // Delete one Wolfpack
     * const Wolfpack = await prisma.wolfpack.delete({
     *   where: {
     *     // ... filter to delete one Wolfpack
     *   }
     * })
     * 
     */
    delete<T extends WolfpackDeleteArgs>(args: SelectSubset<T, WolfpackDeleteArgs<ExtArgs>>): Prisma__WolfpackClient<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wolfpack.
     * @param {WolfpackUpdateArgs} args - Arguments to update one Wolfpack.
     * @example
     * // Update one Wolfpack
     * const wolfpack = await prisma.wolfpack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WolfpackUpdateArgs>(args: SelectSubset<T, WolfpackUpdateArgs<ExtArgs>>): Prisma__WolfpackClient<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wolfpacks.
     * @param {WolfpackDeleteManyArgs} args - Arguments to filter Wolfpacks to delete.
     * @example
     * // Delete a few Wolfpacks
     * const { count } = await prisma.wolfpack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WolfpackDeleteManyArgs>(args?: SelectSubset<T, WolfpackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wolfpacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WolfpackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wolfpacks
     * const wolfpack = await prisma.wolfpack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WolfpackUpdateManyArgs>(args: SelectSubset<T, WolfpackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wolfpacks and returns the data updated in the database.
     * @param {WolfpackUpdateManyAndReturnArgs} args - Arguments to update many Wolfpacks.
     * @example
     * // Update many Wolfpacks
     * const wolfpack = await prisma.wolfpack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wolfpacks and only return the `id`
     * const wolfpackWithIdOnly = await prisma.wolfpack.updateManyAndReturn({
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
    updateManyAndReturn<T extends WolfpackUpdateManyAndReturnArgs>(args: SelectSubset<T, WolfpackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wolfpack.
     * @param {WolfpackUpsertArgs} args - Arguments to update or create a Wolfpack.
     * @example
     * // Update or create a Wolfpack
     * const wolfpack = await prisma.wolfpack.upsert({
     *   create: {
     *     // ... data to create a Wolfpack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wolfpack we want to update
     *   }
     * })
     */
    upsert<T extends WolfpackUpsertArgs>(args: SelectSubset<T, WolfpackUpsertArgs<ExtArgs>>): Prisma__WolfpackClient<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wolfpacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WolfpackCountArgs} args - Arguments to filter Wolfpacks to count.
     * @example
     * // Count the number of Wolfpacks
     * const count = await prisma.wolfpack.count({
     *   where: {
     *     // ... the filter for the Wolfpacks we want to count
     *   }
     * })
    **/
    count<T extends WolfpackCountArgs>(
      args?: Subset<T, WolfpackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WolfpackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wolfpack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WolfpackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WolfpackAggregateArgs>(args: Subset<T, WolfpackAggregateArgs>): Prisma.PrismaPromise<GetWolfpackAggregateType<T>>

    /**
     * Group by Wolfpack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WolfpackGroupByArgs} args - Group by arguments.
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
      T extends WolfpackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WolfpackGroupByArgs['orderBy'] }
        : { orderBy?: WolfpackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WolfpackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWolfpackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wolfpack model
   */
  readonly fields: WolfpackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wolfpack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WolfpackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Wolfpack model
   */ 
  interface WolfpackFieldRefs {
    readonly id: FieldRef<"Wolfpack", 'Int'>
    readonly documentName: FieldRef<"Wolfpack", 'String'>
    readonly fileOrigin: FieldRef<"Wolfpack", 'String'>
    readonly documentVersion: FieldRef<"Wolfpack", 'String'>
    readonly wasCompleted: FieldRef<"Wolfpack", 'Boolean'>
    readonly timeTaken: FieldRef<"Wolfpack", 'Float'>
    readonly createdAt: FieldRef<"Wolfpack", 'DateTime'>
    readonly guid: FieldRef<"Wolfpack", 'String'>
    readonly resultCount: FieldRef<"Wolfpack", 'Int'>
    readonly testName: FieldRef<"Wolfpack", 'String'>
    readonly results: FieldRef<"Wolfpack", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Wolfpack findUnique
   */
  export type WolfpackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wolfpack
     */
    select?: WolfpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wolfpack
     */
    omit?: WolfpackOmit<ExtArgs> | null
    /**
     * Filter, which Wolfpack to fetch.
     */
    where: WolfpackWhereUniqueInput
  }

  /**
   * Wolfpack findUniqueOrThrow
   */
  export type WolfpackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wolfpack
     */
    select?: WolfpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wolfpack
     */
    omit?: WolfpackOmit<ExtArgs> | null
    /**
     * Filter, which Wolfpack to fetch.
     */
    where: WolfpackWhereUniqueInput
  }

  /**
   * Wolfpack findFirst
   */
  export type WolfpackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wolfpack
     */
    select?: WolfpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wolfpack
     */
    omit?: WolfpackOmit<ExtArgs> | null
    /**
     * Filter, which Wolfpack to fetch.
     */
    where?: WolfpackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wolfpacks to fetch.
     */
    orderBy?: WolfpackOrderByWithRelationInput | WolfpackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wolfpacks.
     */
    cursor?: WolfpackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wolfpacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wolfpacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wolfpacks.
     */
    distinct?: WolfpackScalarFieldEnum | WolfpackScalarFieldEnum[]
  }

  /**
   * Wolfpack findFirstOrThrow
   */
  export type WolfpackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wolfpack
     */
    select?: WolfpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wolfpack
     */
    omit?: WolfpackOmit<ExtArgs> | null
    /**
     * Filter, which Wolfpack to fetch.
     */
    where?: WolfpackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wolfpacks to fetch.
     */
    orderBy?: WolfpackOrderByWithRelationInput | WolfpackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wolfpacks.
     */
    cursor?: WolfpackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wolfpacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wolfpacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wolfpacks.
     */
    distinct?: WolfpackScalarFieldEnum | WolfpackScalarFieldEnum[]
  }

  /**
   * Wolfpack findMany
   */
  export type WolfpackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wolfpack
     */
    select?: WolfpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wolfpack
     */
    omit?: WolfpackOmit<ExtArgs> | null
    /**
     * Filter, which Wolfpacks to fetch.
     */
    where?: WolfpackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wolfpacks to fetch.
     */
    orderBy?: WolfpackOrderByWithRelationInput | WolfpackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wolfpacks.
     */
    cursor?: WolfpackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wolfpacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wolfpacks.
     */
    skip?: number
    distinct?: WolfpackScalarFieldEnum | WolfpackScalarFieldEnum[]
  }

  /**
   * Wolfpack create
   */
  export type WolfpackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wolfpack
     */
    select?: WolfpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wolfpack
     */
    omit?: WolfpackOmit<ExtArgs> | null
    /**
     * The data needed to create a Wolfpack.
     */
    data: XOR<WolfpackCreateInput, WolfpackUncheckedCreateInput>
  }

  /**
   * Wolfpack createMany
   */
  export type WolfpackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wolfpacks.
     */
    data: WolfpackCreateManyInput | WolfpackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wolfpack createManyAndReturn
   */
  export type WolfpackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wolfpack
     */
    select?: WolfpackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wolfpack
     */
    omit?: WolfpackOmit<ExtArgs> | null
    /**
     * The data used to create many Wolfpacks.
     */
    data: WolfpackCreateManyInput | WolfpackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wolfpack update
   */
  export type WolfpackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wolfpack
     */
    select?: WolfpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wolfpack
     */
    omit?: WolfpackOmit<ExtArgs> | null
    /**
     * The data needed to update a Wolfpack.
     */
    data: XOR<WolfpackUpdateInput, WolfpackUncheckedUpdateInput>
    /**
     * Choose, which Wolfpack to update.
     */
    where: WolfpackWhereUniqueInput
  }

  /**
   * Wolfpack updateMany
   */
  export type WolfpackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wolfpacks.
     */
    data: XOR<WolfpackUpdateManyMutationInput, WolfpackUncheckedUpdateManyInput>
    /**
     * Filter which Wolfpacks to update
     */
    where?: WolfpackWhereInput
    /**
     * Limit how many Wolfpacks to update.
     */
    limit?: number
  }

  /**
   * Wolfpack updateManyAndReturn
   */
  export type WolfpackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wolfpack
     */
    select?: WolfpackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wolfpack
     */
    omit?: WolfpackOmit<ExtArgs> | null
    /**
     * The data used to update Wolfpacks.
     */
    data: XOR<WolfpackUpdateManyMutationInput, WolfpackUncheckedUpdateManyInput>
    /**
     * Filter which Wolfpacks to update
     */
    where?: WolfpackWhereInput
    /**
     * Limit how many Wolfpacks to update.
     */
    limit?: number
  }

  /**
   * Wolfpack upsert
   */
  export type WolfpackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wolfpack
     */
    select?: WolfpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wolfpack
     */
    omit?: WolfpackOmit<ExtArgs> | null
    /**
     * The filter to search for the Wolfpack to update in case it exists.
     */
    where: WolfpackWhereUniqueInput
    /**
     * In case the Wolfpack found by the `where` argument doesn't exist, create a new Wolfpack with this data.
     */
    create: XOR<WolfpackCreateInput, WolfpackUncheckedCreateInput>
    /**
     * In case the Wolfpack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WolfpackUpdateInput, WolfpackUncheckedUpdateInput>
  }

  /**
   * Wolfpack delete
   */
  export type WolfpackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wolfpack
     */
    select?: WolfpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wolfpack
     */
    omit?: WolfpackOmit<ExtArgs> | null
    /**
     * Filter which Wolfpack to delete.
     */
    where: WolfpackWhereUniqueInput
  }

  /**
   * Wolfpack deleteMany
   */
  export type WolfpackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wolfpacks to delete
     */
    where?: WolfpackWhereInput
    /**
     * Limit how many Wolfpacks to delete.
     */
    limit?: number
  }

  /**
   * Wolfpack without action
   */
  export type WolfpackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wolfpack
     */
    select?: WolfpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wolfpack
     */
    omit?: WolfpackOmit<ExtArgs> | null
  }


  /**
   * Model DocumentRecord
   */

  export type AggregateDocumentRecord = {
    _count: DocumentRecordCountAggregateOutputType | null
    _avg: DocumentRecordAvgAggregateOutputType | null
    _sum: DocumentRecordSumAggregateOutputType | null
    _min: DocumentRecordMinAggregateOutputType | null
    _max: DocumentRecordMaxAggregateOutputType | null
  }

  export type DocumentRecordAvgAggregateOutputType = {
    id: number | null
    documentSaveCount: number | null
    projectElevation: number | null
    projectLatitude: number | null
    projectLongitude: number | null
    projectTimeZone: number | null
  }

  export type DocumentRecordSumAggregateOutputType = {
    id: number | null
    documentSaveCount: number | null
    projectElevation: bigint | null
    projectLatitude: bigint | null
    projectLongitude: bigint | null
    projectTimeZone: bigint | null
  }

  export type DocumentRecordMinAggregateOutputType = {
    id: number | null
    documentRecordUniqueId: string | null
    parentWolfpackUniqueId: string | null
    documentCreationId: string | null
    documentSaveId: string | null
    documentSaveCount: number | null
    documentLastSaveDateTime: Date | null
    parentDocumentEpisodeUniqueId: string | null
    documentName: string | null
    documentPath: string | null
    projectName: string | null
    projectClient: string | null
    projectAddress: string | null
    projectAuthor: string | null
    projectBuildingName: string | null
    projectIssueDate: string | null
    projectLocation: string | null
    projectNumber: string | null
    projectOrganizationDescription: string | null
    projectOrganizationName: string | null
    projectStatus: string | null
    projectPlaceName: string | null
    projectElevation: bigint | null
    projectLatitude: bigint | null
    projectLongitude: bigint | null
    projectTimeZone: bigint | null
    projectGeoCoordinateSystemId: string | null
    projectGeoCoordinateSystemDefinition: string | null
    projectSpecLength: string | null
    projectSpecArea: string | null
    projectSpecAngle: string | null
    projectSpecCurrency: string | null
    projectSpecNumber: string | null
    projectSpecRotationAngle: string | null
    projectSpecSheetLength: string | null
    projectSpecSiteAngle: string | null
    projectSpecSlope: string | null
    projectSpecSpeed: string | null
    projectSpecTime: string | null
    projectSpecVolume: string | null
  }

  export type DocumentRecordMaxAggregateOutputType = {
    id: number | null
    documentRecordUniqueId: string | null
    parentWolfpackUniqueId: string | null
    documentCreationId: string | null
    documentSaveId: string | null
    documentSaveCount: number | null
    documentLastSaveDateTime: Date | null
    parentDocumentEpisodeUniqueId: string | null
    documentName: string | null
    documentPath: string | null
    projectName: string | null
    projectClient: string | null
    projectAddress: string | null
    projectAuthor: string | null
    projectBuildingName: string | null
    projectIssueDate: string | null
    projectLocation: string | null
    projectNumber: string | null
    projectOrganizationDescription: string | null
    projectOrganizationName: string | null
    projectStatus: string | null
    projectPlaceName: string | null
    projectElevation: bigint | null
    projectLatitude: bigint | null
    projectLongitude: bigint | null
    projectTimeZone: bigint | null
    projectGeoCoordinateSystemId: string | null
    projectGeoCoordinateSystemDefinition: string | null
    projectSpecLength: string | null
    projectSpecArea: string | null
    projectSpecAngle: string | null
    projectSpecCurrency: string | null
    projectSpecNumber: string | null
    projectSpecRotationAngle: string | null
    projectSpecSheetLength: string | null
    projectSpecSiteAngle: string | null
    projectSpecSlope: string | null
    projectSpecSpeed: string | null
    projectSpecTime: string | null
    projectSpecVolume: string | null
  }

  export type DocumentRecordCountAggregateOutputType = {
    id: number
    documentRecordUniqueId: number
    parentWolfpackUniqueId: number
    documentCreationId: number
    documentSaveId: number
    documentSaveCount: number
    documentLastSaveDateTime: number
    parentDocumentEpisodeUniqueId: number
    documentName: number
    documentPath: number
    projectName: number
    projectClient: number
    projectAddress: number
    projectAuthor: number
    projectBuildingName: number
    projectIssueDate: number
    projectLocation: number
    projectNumber: number
    projectOrganizationDescription: number
    projectOrganizationName: number
    projectStatus: number
    projectPlaceName: number
    projectElevation: number
    projectLatitude: number
    projectLongitude: number
    projectTimeZone: number
    projectGeoCoordinateSystemId: number
    projectGeoCoordinateSystemDefinition: number
    projectSpecLength: number
    projectSpecArea: number
    projectSpecAngle: number
    projectSpecCurrency: number
    projectSpecNumber: number
    projectSpecRotationAngle: number
    projectSpecSheetLength: number
    projectSpecSiteAngle: number
    projectSpecSlope: number
    projectSpecSpeed: number
    projectSpecTime: number
    projectSpecVolume: number
    _all: number
  }


  export type DocumentRecordAvgAggregateInputType = {
    id?: true
    documentSaveCount?: true
    projectElevation?: true
    projectLatitude?: true
    projectLongitude?: true
    projectTimeZone?: true
  }

  export type DocumentRecordSumAggregateInputType = {
    id?: true
    documentSaveCount?: true
    projectElevation?: true
    projectLatitude?: true
    projectLongitude?: true
    projectTimeZone?: true
  }

  export type DocumentRecordMinAggregateInputType = {
    id?: true
    documentRecordUniqueId?: true
    parentWolfpackUniqueId?: true
    documentCreationId?: true
    documentSaveId?: true
    documentSaveCount?: true
    documentLastSaveDateTime?: true
    parentDocumentEpisodeUniqueId?: true
    documentName?: true
    documentPath?: true
    projectName?: true
    projectClient?: true
    projectAddress?: true
    projectAuthor?: true
    projectBuildingName?: true
    projectIssueDate?: true
    projectLocation?: true
    projectNumber?: true
    projectOrganizationDescription?: true
    projectOrganizationName?: true
    projectStatus?: true
    projectPlaceName?: true
    projectElevation?: true
    projectLatitude?: true
    projectLongitude?: true
    projectTimeZone?: true
    projectGeoCoordinateSystemId?: true
    projectGeoCoordinateSystemDefinition?: true
    projectSpecLength?: true
    projectSpecArea?: true
    projectSpecAngle?: true
    projectSpecCurrency?: true
    projectSpecNumber?: true
    projectSpecRotationAngle?: true
    projectSpecSheetLength?: true
    projectSpecSiteAngle?: true
    projectSpecSlope?: true
    projectSpecSpeed?: true
    projectSpecTime?: true
    projectSpecVolume?: true
  }

  export type DocumentRecordMaxAggregateInputType = {
    id?: true
    documentRecordUniqueId?: true
    parentWolfpackUniqueId?: true
    documentCreationId?: true
    documentSaveId?: true
    documentSaveCount?: true
    documentLastSaveDateTime?: true
    parentDocumentEpisodeUniqueId?: true
    documentName?: true
    documentPath?: true
    projectName?: true
    projectClient?: true
    projectAddress?: true
    projectAuthor?: true
    projectBuildingName?: true
    projectIssueDate?: true
    projectLocation?: true
    projectNumber?: true
    projectOrganizationDescription?: true
    projectOrganizationName?: true
    projectStatus?: true
    projectPlaceName?: true
    projectElevation?: true
    projectLatitude?: true
    projectLongitude?: true
    projectTimeZone?: true
    projectGeoCoordinateSystemId?: true
    projectGeoCoordinateSystemDefinition?: true
    projectSpecLength?: true
    projectSpecArea?: true
    projectSpecAngle?: true
    projectSpecCurrency?: true
    projectSpecNumber?: true
    projectSpecRotationAngle?: true
    projectSpecSheetLength?: true
    projectSpecSiteAngle?: true
    projectSpecSlope?: true
    projectSpecSpeed?: true
    projectSpecTime?: true
    projectSpecVolume?: true
  }

  export type DocumentRecordCountAggregateInputType = {
    id?: true
    documentRecordUniqueId?: true
    parentWolfpackUniqueId?: true
    documentCreationId?: true
    documentSaveId?: true
    documentSaveCount?: true
    documentLastSaveDateTime?: true
    parentDocumentEpisodeUniqueId?: true
    documentName?: true
    documentPath?: true
    projectName?: true
    projectClient?: true
    projectAddress?: true
    projectAuthor?: true
    projectBuildingName?: true
    projectIssueDate?: true
    projectLocation?: true
    projectNumber?: true
    projectOrganizationDescription?: true
    projectOrganizationName?: true
    projectStatus?: true
    projectPlaceName?: true
    projectElevation?: true
    projectLatitude?: true
    projectLongitude?: true
    projectTimeZone?: true
    projectGeoCoordinateSystemId?: true
    projectGeoCoordinateSystemDefinition?: true
    projectSpecLength?: true
    projectSpecArea?: true
    projectSpecAngle?: true
    projectSpecCurrency?: true
    projectSpecNumber?: true
    projectSpecRotationAngle?: true
    projectSpecSheetLength?: true
    projectSpecSiteAngle?: true
    projectSpecSlope?: true
    projectSpecSpeed?: true
    projectSpecTime?: true
    projectSpecVolume?: true
    _all?: true
  }

  export type DocumentRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentRecord to aggregate.
     */
    where?: DocumentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentRecords to fetch.
     */
    orderBy?: DocumentRecordOrderByWithRelationInput | DocumentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentRecords
    **/
    _count?: true | DocumentRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentRecordMaxAggregateInputType
  }

  export type GetDocumentRecordAggregateType<T extends DocumentRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentRecord[P]>
      : GetScalarType<T[P], AggregateDocumentRecord[P]>
  }




  export type DocumentRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentRecordWhereInput
    orderBy?: DocumentRecordOrderByWithAggregationInput | DocumentRecordOrderByWithAggregationInput[]
    by: DocumentRecordScalarFieldEnum[] | DocumentRecordScalarFieldEnum
    having?: DocumentRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentRecordCountAggregateInputType | true
    _avg?: DocumentRecordAvgAggregateInputType
    _sum?: DocumentRecordSumAggregateInputType
    _min?: DocumentRecordMinAggregateInputType
    _max?: DocumentRecordMaxAggregateInputType
  }

  export type DocumentRecordGroupByOutputType = {
    id: number
    documentRecordUniqueId: string
    parentWolfpackUniqueId: string
    documentCreationId: string | null
    documentSaveId: string | null
    documentSaveCount: number | null
    documentLastSaveDateTime: Date
    parentDocumentEpisodeUniqueId: string
    documentName: string | null
    documentPath: string | null
    projectName: string | null
    projectClient: string | null
    projectAddress: string | null
    projectAuthor: string | null
    projectBuildingName: string | null
    projectIssueDate: string | null
    projectLocation: string | null
    projectNumber: string | null
    projectOrganizationDescription: string | null
    projectOrganizationName: string | null
    projectStatus: string | null
    projectPlaceName: string | null
    projectElevation: bigint | null
    projectLatitude: bigint | null
    projectLongitude: bigint | null
    projectTimeZone: bigint | null
    projectGeoCoordinateSystemId: string | null
    projectGeoCoordinateSystemDefinition: string | null
    projectSpecLength: string | null
    projectSpecArea: string | null
    projectSpecAngle: string | null
    projectSpecCurrency: string | null
    projectSpecNumber: string | null
    projectSpecRotationAngle: string | null
    projectSpecSheetLength: string | null
    projectSpecSiteAngle: string | null
    projectSpecSlope: string | null
    projectSpecSpeed: string | null
    projectSpecTime: string | null
    projectSpecVolume: string | null
    _count: DocumentRecordCountAggregateOutputType | null
    _avg: DocumentRecordAvgAggregateOutputType | null
    _sum: DocumentRecordSumAggregateOutputType | null
    _min: DocumentRecordMinAggregateOutputType | null
    _max: DocumentRecordMaxAggregateOutputType | null
  }

  type GetDocumentRecordGroupByPayload<T extends DocumentRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentRecordGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentRecordGroupByOutputType[P]>
        }
      >
    >


  export type DocumentRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentRecordUniqueId?: boolean
    parentWolfpackUniqueId?: boolean
    documentCreationId?: boolean
    documentSaveId?: boolean
    documentSaveCount?: boolean
    documentLastSaveDateTime?: boolean
    parentDocumentEpisodeUniqueId?: boolean
    documentName?: boolean
    documentPath?: boolean
    projectName?: boolean
    projectClient?: boolean
    projectAddress?: boolean
    projectAuthor?: boolean
    projectBuildingName?: boolean
    projectIssueDate?: boolean
    projectLocation?: boolean
    projectNumber?: boolean
    projectOrganizationDescription?: boolean
    projectOrganizationName?: boolean
    projectStatus?: boolean
    projectPlaceName?: boolean
    projectElevation?: boolean
    projectLatitude?: boolean
    projectLongitude?: boolean
    projectTimeZone?: boolean
    projectGeoCoordinateSystemId?: boolean
    projectGeoCoordinateSystemDefinition?: boolean
    projectSpecLength?: boolean
    projectSpecArea?: boolean
    projectSpecAngle?: boolean
    projectSpecCurrency?: boolean
    projectSpecNumber?: boolean
    projectSpecRotationAngle?: boolean
    projectSpecSheetLength?: boolean
    projectSpecSiteAngle?: boolean
    projectSpecSlope?: boolean
    projectSpecSpeed?: boolean
    projectSpecTime?: boolean
    projectSpecVolume?: boolean
  }, ExtArgs["result"]["documentRecord"]>

  export type DocumentRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentRecordUniqueId?: boolean
    parentWolfpackUniqueId?: boolean
    documentCreationId?: boolean
    documentSaveId?: boolean
    documentSaveCount?: boolean
    documentLastSaveDateTime?: boolean
    parentDocumentEpisodeUniqueId?: boolean
    documentName?: boolean
    documentPath?: boolean
    projectName?: boolean
    projectClient?: boolean
    projectAddress?: boolean
    projectAuthor?: boolean
    projectBuildingName?: boolean
    projectIssueDate?: boolean
    projectLocation?: boolean
    projectNumber?: boolean
    projectOrganizationDescription?: boolean
    projectOrganizationName?: boolean
    projectStatus?: boolean
    projectPlaceName?: boolean
    projectElevation?: boolean
    projectLatitude?: boolean
    projectLongitude?: boolean
    projectTimeZone?: boolean
    projectGeoCoordinateSystemId?: boolean
    projectGeoCoordinateSystemDefinition?: boolean
    projectSpecLength?: boolean
    projectSpecArea?: boolean
    projectSpecAngle?: boolean
    projectSpecCurrency?: boolean
    projectSpecNumber?: boolean
    projectSpecRotationAngle?: boolean
    projectSpecSheetLength?: boolean
    projectSpecSiteAngle?: boolean
    projectSpecSlope?: boolean
    projectSpecSpeed?: boolean
    projectSpecTime?: boolean
    projectSpecVolume?: boolean
  }, ExtArgs["result"]["documentRecord"]>

  export type DocumentRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentRecordUniqueId?: boolean
    parentWolfpackUniqueId?: boolean
    documentCreationId?: boolean
    documentSaveId?: boolean
    documentSaveCount?: boolean
    documentLastSaveDateTime?: boolean
    parentDocumentEpisodeUniqueId?: boolean
    documentName?: boolean
    documentPath?: boolean
    projectName?: boolean
    projectClient?: boolean
    projectAddress?: boolean
    projectAuthor?: boolean
    projectBuildingName?: boolean
    projectIssueDate?: boolean
    projectLocation?: boolean
    projectNumber?: boolean
    projectOrganizationDescription?: boolean
    projectOrganizationName?: boolean
    projectStatus?: boolean
    projectPlaceName?: boolean
    projectElevation?: boolean
    projectLatitude?: boolean
    projectLongitude?: boolean
    projectTimeZone?: boolean
    projectGeoCoordinateSystemId?: boolean
    projectGeoCoordinateSystemDefinition?: boolean
    projectSpecLength?: boolean
    projectSpecArea?: boolean
    projectSpecAngle?: boolean
    projectSpecCurrency?: boolean
    projectSpecNumber?: boolean
    projectSpecRotationAngle?: boolean
    projectSpecSheetLength?: boolean
    projectSpecSiteAngle?: boolean
    projectSpecSlope?: boolean
    projectSpecSpeed?: boolean
    projectSpecTime?: boolean
    projectSpecVolume?: boolean
  }, ExtArgs["result"]["documentRecord"]>

  export type DocumentRecordSelectScalar = {
    id?: boolean
    documentRecordUniqueId?: boolean
    parentWolfpackUniqueId?: boolean
    documentCreationId?: boolean
    documentSaveId?: boolean
    documentSaveCount?: boolean
    documentLastSaveDateTime?: boolean
    parentDocumentEpisodeUniqueId?: boolean
    documentName?: boolean
    documentPath?: boolean
    projectName?: boolean
    projectClient?: boolean
    projectAddress?: boolean
    projectAuthor?: boolean
    projectBuildingName?: boolean
    projectIssueDate?: boolean
    projectLocation?: boolean
    projectNumber?: boolean
    projectOrganizationDescription?: boolean
    projectOrganizationName?: boolean
    projectStatus?: boolean
    projectPlaceName?: boolean
    projectElevation?: boolean
    projectLatitude?: boolean
    projectLongitude?: boolean
    projectTimeZone?: boolean
    projectGeoCoordinateSystemId?: boolean
    projectGeoCoordinateSystemDefinition?: boolean
    projectSpecLength?: boolean
    projectSpecArea?: boolean
    projectSpecAngle?: boolean
    projectSpecCurrency?: boolean
    projectSpecNumber?: boolean
    projectSpecRotationAngle?: boolean
    projectSpecSheetLength?: boolean
    projectSpecSiteAngle?: boolean
    projectSpecSlope?: boolean
    projectSpecSpeed?: boolean
    projectSpecTime?: boolean
    projectSpecVolume?: boolean
  }

  export type DocumentRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentRecordUniqueId" | "parentWolfpackUniqueId" | "documentCreationId" | "documentSaveId" | "documentSaveCount" | "documentLastSaveDateTime" | "parentDocumentEpisodeUniqueId" | "documentName" | "documentPath" | "projectName" | "projectClient" | "projectAddress" | "projectAuthor" | "projectBuildingName" | "projectIssueDate" | "projectLocation" | "projectNumber" | "projectOrganizationDescription" | "projectOrganizationName" | "projectStatus" | "projectPlaceName" | "projectElevation" | "projectLatitude" | "projectLongitude" | "projectTimeZone" | "projectGeoCoordinateSystemId" | "projectGeoCoordinateSystemDefinition" | "projectSpecLength" | "projectSpecArea" | "projectSpecAngle" | "projectSpecCurrency" | "projectSpecNumber" | "projectSpecRotationAngle" | "projectSpecSheetLength" | "projectSpecSiteAngle" | "projectSpecSlope" | "projectSpecSpeed" | "projectSpecTime" | "projectSpecVolume", ExtArgs["result"]["documentRecord"]>

  export type $DocumentRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentRecordUniqueId: string
      parentWolfpackUniqueId: string
      documentCreationId: string | null
      documentSaveId: string | null
      documentSaveCount: number | null
      documentLastSaveDateTime: Date
      parentDocumentEpisodeUniqueId: string
      documentName: string | null
      documentPath: string | null
      projectName: string | null
      projectClient: string | null
      projectAddress: string | null
      projectAuthor: string | null
      projectBuildingName: string | null
      projectIssueDate: string | null
      projectLocation: string | null
      projectNumber: string | null
      projectOrganizationDescription: string | null
      projectOrganizationName: string | null
      projectStatus: string | null
      projectPlaceName: string | null
      projectElevation: bigint | null
      projectLatitude: bigint | null
      projectLongitude: bigint | null
      projectTimeZone: bigint | null
      projectGeoCoordinateSystemId: string | null
      projectGeoCoordinateSystemDefinition: string | null
      projectSpecLength: string | null
      projectSpecArea: string | null
      projectSpecAngle: string | null
      projectSpecCurrency: string | null
      projectSpecNumber: string | null
      projectSpecRotationAngle: string | null
      projectSpecSheetLength: string | null
      projectSpecSiteAngle: string | null
      projectSpecSlope: string | null
      projectSpecSpeed: string | null
      projectSpecTime: string | null
      projectSpecVolume: string | null
    }, ExtArgs["result"]["documentRecord"]>
    composites: {}
  }

  type DocumentRecordGetPayload<S extends boolean | null | undefined | DocumentRecordDefaultArgs> = $Result.GetResult<Prisma.$DocumentRecordPayload, S>

  type DocumentRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentRecordCountAggregateInputType | true
    }

  export interface DocumentRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentRecord'], meta: { name: 'DocumentRecord' } }
    /**
     * Find zero or one DocumentRecord that matches the filter.
     * @param {DocumentRecordFindUniqueArgs} args - Arguments to find a DocumentRecord
     * @example
     * // Get one DocumentRecord
     * const documentRecord = await prisma.documentRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentRecordFindUniqueArgs>(args: SelectSubset<T, DocumentRecordFindUniqueArgs<ExtArgs>>): Prisma__DocumentRecordClient<$Result.GetResult<Prisma.$DocumentRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentRecordFindUniqueOrThrowArgs} args - Arguments to find a DocumentRecord
     * @example
     * // Get one DocumentRecord
     * const documentRecord = await prisma.documentRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentRecordClient<$Result.GetResult<Prisma.$DocumentRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRecordFindFirstArgs} args - Arguments to find a DocumentRecord
     * @example
     * // Get one DocumentRecord
     * const documentRecord = await prisma.documentRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentRecordFindFirstArgs>(args?: SelectSubset<T, DocumentRecordFindFirstArgs<ExtArgs>>): Prisma__DocumentRecordClient<$Result.GetResult<Prisma.$DocumentRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRecordFindFirstOrThrowArgs} args - Arguments to find a DocumentRecord
     * @example
     * // Get one DocumentRecord
     * const documentRecord = await prisma.documentRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentRecordClient<$Result.GetResult<Prisma.$DocumentRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentRecords
     * const documentRecords = await prisma.documentRecord.findMany()
     * 
     * // Get first 10 DocumentRecords
     * const documentRecords = await prisma.documentRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentRecordWithIdOnly = await prisma.documentRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentRecordFindManyArgs>(args?: SelectSubset<T, DocumentRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentRecord.
     * @param {DocumentRecordCreateArgs} args - Arguments to create a DocumentRecord.
     * @example
     * // Create one DocumentRecord
     * const DocumentRecord = await prisma.documentRecord.create({
     *   data: {
     *     // ... data to create a DocumentRecord
     *   }
     * })
     * 
     */
    create<T extends DocumentRecordCreateArgs>(args: SelectSubset<T, DocumentRecordCreateArgs<ExtArgs>>): Prisma__DocumentRecordClient<$Result.GetResult<Prisma.$DocumentRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentRecords.
     * @param {DocumentRecordCreateManyArgs} args - Arguments to create many DocumentRecords.
     * @example
     * // Create many DocumentRecords
     * const documentRecord = await prisma.documentRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentRecordCreateManyArgs>(args?: SelectSubset<T, DocumentRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentRecords and returns the data saved in the database.
     * @param {DocumentRecordCreateManyAndReturnArgs} args - Arguments to create many DocumentRecords.
     * @example
     * // Create many DocumentRecords
     * const documentRecord = await prisma.documentRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentRecords and only return the `id`
     * const documentRecordWithIdOnly = await prisma.documentRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentRecord.
     * @param {DocumentRecordDeleteArgs} args - Arguments to delete one DocumentRecord.
     * @example
     * // Delete one DocumentRecord
     * const DocumentRecord = await prisma.documentRecord.delete({
     *   where: {
     *     // ... filter to delete one DocumentRecord
     *   }
     * })
     * 
     */
    delete<T extends DocumentRecordDeleteArgs>(args: SelectSubset<T, DocumentRecordDeleteArgs<ExtArgs>>): Prisma__DocumentRecordClient<$Result.GetResult<Prisma.$DocumentRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentRecord.
     * @param {DocumentRecordUpdateArgs} args - Arguments to update one DocumentRecord.
     * @example
     * // Update one DocumentRecord
     * const documentRecord = await prisma.documentRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentRecordUpdateArgs>(args: SelectSubset<T, DocumentRecordUpdateArgs<ExtArgs>>): Prisma__DocumentRecordClient<$Result.GetResult<Prisma.$DocumentRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentRecords.
     * @param {DocumentRecordDeleteManyArgs} args - Arguments to filter DocumentRecords to delete.
     * @example
     * // Delete a few DocumentRecords
     * const { count } = await prisma.documentRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentRecordDeleteManyArgs>(args?: SelectSubset<T, DocumentRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentRecords
     * const documentRecord = await prisma.documentRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentRecordUpdateManyArgs>(args: SelectSubset<T, DocumentRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentRecords and returns the data updated in the database.
     * @param {DocumentRecordUpdateManyAndReturnArgs} args - Arguments to update many DocumentRecords.
     * @example
     * // Update many DocumentRecords
     * const documentRecord = await prisma.documentRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentRecords and only return the `id`
     * const documentRecordWithIdOnly = await prisma.documentRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentRecord.
     * @param {DocumentRecordUpsertArgs} args - Arguments to update or create a DocumentRecord.
     * @example
     * // Update or create a DocumentRecord
     * const documentRecord = await prisma.documentRecord.upsert({
     *   create: {
     *     // ... data to create a DocumentRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentRecord we want to update
     *   }
     * })
     */
    upsert<T extends DocumentRecordUpsertArgs>(args: SelectSubset<T, DocumentRecordUpsertArgs<ExtArgs>>): Prisma__DocumentRecordClient<$Result.GetResult<Prisma.$DocumentRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRecordCountArgs} args - Arguments to filter DocumentRecords to count.
     * @example
     * // Count the number of DocumentRecords
     * const count = await prisma.documentRecord.count({
     *   where: {
     *     // ... the filter for the DocumentRecords we want to count
     *   }
     * })
    **/
    count<T extends DocumentRecordCountArgs>(
      args?: Subset<T, DocumentRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentRecordAggregateArgs>(args: Subset<T, DocumentRecordAggregateArgs>): Prisma.PrismaPromise<GetDocumentRecordAggregateType<T>>

    /**
     * Group by DocumentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRecordGroupByArgs} args - Group by arguments.
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
      T extends DocumentRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentRecordGroupByArgs['orderBy'] }
        : { orderBy?: DocumentRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentRecord model
   */
  readonly fields: DocumentRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the DocumentRecord model
   */ 
  interface DocumentRecordFieldRefs {
    readonly id: FieldRef<"DocumentRecord", 'Int'>
    readonly documentRecordUniqueId: FieldRef<"DocumentRecord", 'String'>
    readonly parentWolfpackUniqueId: FieldRef<"DocumentRecord", 'String'>
    readonly documentCreationId: FieldRef<"DocumentRecord", 'String'>
    readonly documentSaveId: FieldRef<"DocumentRecord", 'String'>
    readonly documentSaveCount: FieldRef<"DocumentRecord", 'Int'>
    readonly documentLastSaveDateTime: FieldRef<"DocumentRecord", 'DateTime'>
    readonly parentDocumentEpisodeUniqueId: FieldRef<"DocumentRecord", 'String'>
    readonly documentName: FieldRef<"DocumentRecord", 'String'>
    readonly documentPath: FieldRef<"DocumentRecord", 'String'>
    readonly projectName: FieldRef<"DocumentRecord", 'String'>
    readonly projectClient: FieldRef<"DocumentRecord", 'String'>
    readonly projectAddress: FieldRef<"DocumentRecord", 'String'>
    readonly projectAuthor: FieldRef<"DocumentRecord", 'String'>
    readonly projectBuildingName: FieldRef<"DocumentRecord", 'String'>
    readonly projectIssueDate: FieldRef<"DocumentRecord", 'String'>
    readonly projectLocation: FieldRef<"DocumentRecord", 'String'>
    readonly projectNumber: FieldRef<"DocumentRecord", 'String'>
    readonly projectOrganizationDescription: FieldRef<"DocumentRecord", 'String'>
    readonly projectOrganizationName: FieldRef<"DocumentRecord", 'String'>
    readonly projectStatus: FieldRef<"DocumentRecord", 'String'>
    readonly projectPlaceName: FieldRef<"DocumentRecord", 'String'>
    readonly projectElevation: FieldRef<"DocumentRecord", 'BigInt'>
    readonly projectLatitude: FieldRef<"DocumentRecord", 'BigInt'>
    readonly projectLongitude: FieldRef<"DocumentRecord", 'BigInt'>
    readonly projectTimeZone: FieldRef<"DocumentRecord", 'BigInt'>
    readonly projectGeoCoordinateSystemId: FieldRef<"DocumentRecord", 'String'>
    readonly projectGeoCoordinateSystemDefinition: FieldRef<"DocumentRecord", 'String'>
    readonly projectSpecLength: FieldRef<"DocumentRecord", 'String'>
    readonly projectSpecArea: FieldRef<"DocumentRecord", 'String'>
    readonly projectSpecAngle: FieldRef<"DocumentRecord", 'String'>
    readonly projectSpecCurrency: FieldRef<"DocumentRecord", 'String'>
    readonly projectSpecNumber: FieldRef<"DocumentRecord", 'String'>
    readonly projectSpecRotationAngle: FieldRef<"DocumentRecord", 'String'>
    readonly projectSpecSheetLength: FieldRef<"DocumentRecord", 'String'>
    readonly projectSpecSiteAngle: FieldRef<"DocumentRecord", 'String'>
    readonly projectSpecSlope: FieldRef<"DocumentRecord", 'String'>
    readonly projectSpecSpeed: FieldRef<"DocumentRecord", 'String'>
    readonly projectSpecTime: FieldRef<"DocumentRecord", 'String'>
    readonly projectSpecVolume: FieldRef<"DocumentRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DocumentRecord findUnique
   */
  export type DocumentRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecord
     */
    select?: DocumentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecord
     */
    omit?: DocumentRecordOmit<ExtArgs> | null
    /**
     * Filter, which DocumentRecord to fetch.
     */
    where: DocumentRecordWhereUniqueInput
  }

  /**
   * DocumentRecord findUniqueOrThrow
   */
  export type DocumentRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecord
     */
    select?: DocumentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecord
     */
    omit?: DocumentRecordOmit<ExtArgs> | null
    /**
     * Filter, which DocumentRecord to fetch.
     */
    where: DocumentRecordWhereUniqueInput
  }

  /**
   * DocumentRecord findFirst
   */
  export type DocumentRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecord
     */
    select?: DocumentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecord
     */
    omit?: DocumentRecordOmit<ExtArgs> | null
    /**
     * Filter, which DocumentRecord to fetch.
     */
    where?: DocumentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentRecords to fetch.
     */
    orderBy?: DocumentRecordOrderByWithRelationInput | DocumentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentRecords.
     */
    cursor?: DocumentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentRecords.
     */
    distinct?: DocumentRecordScalarFieldEnum | DocumentRecordScalarFieldEnum[]
  }

  /**
   * DocumentRecord findFirstOrThrow
   */
  export type DocumentRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecord
     */
    select?: DocumentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecord
     */
    omit?: DocumentRecordOmit<ExtArgs> | null
    /**
     * Filter, which DocumentRecord to fetch.
     */
    where?: DocumentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentRecords to fetch.
     */
    orderBy?: DocumentRecordOrderByWithRelationInput | DocumentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentRecords.
     */
    cursor?: DocumentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentRecords.
     */
    distinct?: DocumentRecordScalarFieldEnum | DocumentRecordScalarFieldEnum[]
  }

  /**
   * DocumentRecord findMany
   */
  export type DocumentRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecord
     */
    select?: DocumentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecord
     */
    omit?: DocumentRecordOmit<ExtArgs> | null
    /**
     * Filter, which DocumentRecords to fetch.
     */
    where?: DocumentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentRecords to fetch.
     */
    orderBy?: DocumentRecordOrderByWithRelationInput | DocumentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentRecords.
     */
    cursor?: DocumentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentRecords.
     */
    skip?: number
    distinct?: DocumentRecordScalarFieldEnum | DocumentRecordScalarFieldEnum[]
  }

  /**
   * DocumentRecord create
   */
  export type DocumentRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecord
     */
    select?: DocumentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecord
     */
    omit?: DocumentRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a DocumentRecord.
     */
    data: XOR<DocumentRecordCreateInput, DocumentRecordUncheckedCreateInput>
  }

  /**
   * DocumentRecord createMany
   */
  export type DocumentRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentRecords.
     */
    data: DocumentRecordCreateManyInput | DocumentRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentRecord createManyAndReturn
   */
  export type DocumentRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecord
     */
    select?: DocumentRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecord
     */
    omit?: DocumentRecordOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentRecords.
     */
    data: DocumentRecordCreateManyInput | DocumentRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentRecord update
   */
  export type DocumentRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecord
     */
    select?: DocumentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecord
     */
    omit?: DocumentRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a DocumentRecord.
     */
    data: XOR<DocumentRecordUpdateInput, DocumentRecordUncheckedUpdateInput>
    /**
     * Choose, which DocumentRecord to update.
     */
    where: DocumentRecordWhereUniqueInput
  }

  /**
   * DocumentRecord updateMany
   */
  export type DocumentRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentRecords.
     */
    data: XOR<DocumentRecordUpdateManyMutationInput, DocumentRecordUncheckedUpdateManyInput>
    /**
     * Filter which DocumentRecords to update
     */
    where?: DocumentRecordWhereInput
    /**
     * Limit how many DocumentRecords to update.
     */
    limit?: number
  }

  /**
   * DocumentRecord updateManyAndReturn
   */
  export type DocumentRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecord
     */
    select?: DocumentRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecord
     */
    omit?: DocumentRecordOmit<ExtArgs> | null
    /**
     * The data used to update DocumentRecords.
     */
    data: XOR<DocumentRecordUpdateManyMutationInput, DocumentRecordUncheckedUpdateManyInput>
    /**
     * Filter which DocumentRecords to update
     */
    where?: DocumentRecordWhereInput
    /**
     * Limit how many DocumentRecords to update.
     */
    limit?: number
  }

  /**
   * DocumentRecord upsert
   */
  export type DocumentRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecord
     */
    select?: DocumentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecord
     */
    omit?: DocumentRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the DocumentRecord to update in case it exists.
     */
    where: DocumentRecordWhereUniqueInput
    /**
     * In case the DocumentRecord found by the `where` argument doesn't exist, create a new DocumentRecord with this data.
     */
    create: XOR<DocumentRecordCreateInput, DocumentRecordUncheckedCreateInput>
    /**
     * In case the DocumentRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentRecordUpdateInput, DocumentRecordUncheckedUpdateInput>
  }

  /**
   * DocumentRecord delete
   */
  export type DocumentRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecord
     */
    select?: DocumentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecord
     */
    omit?: DocumentRecordOmit<ExtArgs> | null
    /**
     * Filter which DocumentRecord to delete.
     */
    where: DocumentRecordWhereUniqueInput
  }

  /**
   * DocumentRecord deleteMany
   */
  export type DocumentRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentRecords to delete
     */
    where?: DocumentRecordWhereInput
    /**
     * Limit how many DocumentRecords to delete.
     */
    limit?: number
  }

  /**
   * DocumentRecord without action
   */
  export type DocumentRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecord
     */
    select?: DocumentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecord
     */
    omit?: DocumentRecordOmit<ExtArgs> | null
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


  export const WolfpackScalarFieldEnum: {
    id: 'id',
    documentName: 'documentName',
    fileOrigin: 'fileOrigin',
    documentVersion: 'documentVersion',
    wasCompleted: 'wasCompleted',
    timeTaken: 'timeTaken',
    createdAt: 'createdAt',
    guid: 'guid',
    resultCount: 'resultCount',
    testName: 'testName',
    results: 'results'
  };

  export type WolfpackScalarFieldEnum = (typeof WolfpackScalarFieldEnum)[keyof typeof WolfpackScalarFieldEnum]


  export const DocumentRecordScalarFieldEnum: {
    id: 'id',
    documentRecordUniqueId: 'documentRecordUniqueId',
    parentWolfpackUniqueId: 'parentWolfpackUniqueId',
    documentCreationId: 'documentCreationId',
    documentSaveId: 'documentSaveId',
    documentSaveCount: 'documentSaveCount',
    documentLastSaveDateTime: 'documentLastSaveDateTime',
    parentDocumentEpisodeUniqueId: 'parentDocumentEpisodeUniqueId',
    documentName: 'documentName',
    documentPath: 'documentPath',
    projectName: 'projectName',
    projectClient: 'projectClient',
    projectAddress: 'projectAddress',
    projectAuthor: 'projectAuthor',
    projectBuildingName: 'projectBuildingName',
    projectIssueDate: 'projectIssueDate',
    projectLocation: 'projectLocation',
    projectNumber: 'projectNumber',
    projectOrganizationDescription: 'projectOrganizationDescription',
    projectOrganizationName: 'projectOrganizationName',
    projectStatus: 'projectStatus',
    projectPlaceName: 'projectPlaceName',
    projectElevation: 'projectElevation',
    projectLatitude: 'projectLatitude',
    projectLongitude: 'projectLongitude',
    projectTimeZone: 'projectTimeZone',
    projectGeoCoordinateSystemId: 'projectGeoCoordinateSystemId',
    projectGeoCoordinateSystemDefinition: 'projectGeoCoordinateSystemDefinition',
    projectSpecLength: 'projectSpecLength',
    projectSpecArea: 'projectSpecArea',
    projectSpecAngle: 'projectSpecAngle',
    projectSpecCurrency: 'projectSpecCurrency',
    projectSpecNumber: 'projectSpecNumber',
    projectSpecRotationAngle: 'projectSpecRotationAngle',
    projectSpecSheetLength: 'projectSpecSheetLength',
    projectSpecSiteAngle: 'projectSpecSiteAngle',
    projectSpecSlope: 'projectSpecSlope',
    projectSpecSpeed: 'projectSpecSpeed',
    projectSpecTime: 'projectSpecTime',
    projectSpecVolume: 'projectSpecVolume'
  };

  export type DocumentRecordScalarFieldEnum = (typeof DocumentRecordScalarFieldEnum)[keyof typeof DocumentRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    
  /**
   * Deep Input Types
   */


  export type WolfpackWhereInput = {
    AND?: WolfpackWhereInput | WolfpackWhereInput[]
    OR?: WolfpackWhereInput[]
    NOT?: WolfpackWhereInput | WolfpackWhereInput[]
    id?: IntFilter<"Wolfpack"> | number
    documentName?: StringFilter<"Wolfpack"> | string
    fileOrigin?: StringFilter<"Wolfpack"> | string
    documentVersion?: StringFilter<"Wolfpack"> | string
    wasCompleted?: BoolFilter<"Wolfpack"> | boolean
    timeTaken?: FloatFilter<"Wolfpack"> | number
    createdAt?: DateTimeFilter<"Wolfpack"> | Date | string
    guid?: StringFilter<"Wolfpack"> | string
    resultCount?: IntFilter<"Wolfpack"> | number
    testName?: StringFilter<"Wolfpack"> | string
    results?: JsonNullableFilter<"Wolfpack">
  }

  export type WolfpackOrderByWithRelationInput = {
    id?: SortOrder
    documentName?: SortOrder
    fileOrigin?: SortOrder
    documentVersion?: SortOrder
    wasCompleted?: SortOrder
    timeTaken?: SortOrder
    createdAt?: SortOrder
    guid?: SortOrder
    resultCount?: SortOrder
    testName?: SortOrder
    results?: SortOrderInput | SortOrder
  }

  export type WolfpackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WolfpackWhereInput | WolfpackWhereInput[]
    OR?: WolfpackWhereInput[]
    NOT?: WolfpackWhereInput | WolfpackWhereInput[]
    documentName?: StringFilter<"Wolfpack"> | string
    fileOrigin?: StringFilter<"Wolfpack"> | string
    documentVersion?: StringFilter<"Wolfpack"> | string
    wasCompleted?: BoolFilter<"Wolfpack"> | boolean
    timeTaken?: FloatFilter<"Wolfpack"> | number
    createdAt?: DateTimeFilter<"Wolfpack"> | Date | string
    guid?: StringFilter<"Wolfpack"> | string
    resultCount?: IntFilter<"Wolfpack"> | number
    testName?: StringFilter<"Wolfpack"> | string
    results?: JsonNullableFilter<"Wolfpack">
  }, "id">

  export type WolfpackOrderByWithAggregationInput = {
    id?: SortOrder
    documentName?: SortOrder
    fileOrigin?: SortOrder
    documentVersion?: SortOrder
    wasCompleted?: SortOrder
    timeTaken?: SortOrder
    createdAt?: SortOrder
    guid?: SortOrder
    resultCount?: SortOrder
    testName?: SortOrder
    results?: SortOrderInput | SortOrder
    _count?: WolfpackCountOrderByAggregateInput
    _avg?: WolfpackAvgOrderByAggregateInput
    _max?: WolfpackMaxOrderByAggregateInput
    _min?: WolfpackMinOrderByAggregateInput
    _sum?: WolfpackSumOrderByAggregateInput
  }

  export type WolfpackScalarWhereWithAggregatesInput = {
    AND?: WolfpackScalarWhereWithAggregatesInput | WolfpackScalarWhereWithAggregatesInput[]
    OR?: WolfpackScalarWhereWithAggregatesInput[]
    NOT?: WolfpackScalarWhereWithAggregatesInput | WolfpackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Wolfpack"> | number
    documentName?: StringWithAggregatesFilter<"Wolfpack"> | string
    fileOrigin?: StringWithAggregatesFilter<"Wolfpack"> | string
    documentVersion?: StringWithAggregatesFilter<"Wolfpack"> | string
    wasCompleted?: BoolWithAggregatesFilter<"Wolfpack"> | boolean
    timeTaken?: FloatWithAggregatesFilter<"Wolfpack"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Wolfpack"> | Date | string
    guid?: StringWithAggregatesFilter<"Wolfpack"> | string
    resultCount?: IntWithAggregatesFilter<"Wolfpack"> | number
    testName?: StringWithAggregatesFilter<"Wolfpack"> | string
    results?: JsonNullableWithAggregatesFilter<"Wolfpack">
  }

  export type DocumentRecordWhereInput = {
    AND?: DocumentRecordWhereInput | DocumentRecordWhereInput[]
    OR?: DocumentRecordWhereInput[]
    NOT?: DocumentRecordWhereInput | DocumentRecordWhereInput[]
    id?: IntFilter<"DocumentRecord"> | number
    documentRecordUniqueId?: StringFilter<"DocumentRecord"> | string
    parentWolfpackUniqueId?: StringFilter<"DocumentRecord"> | string
    documentCreationId?: StringNullableFilter<"DocumentRecord"> | string | null
    documentSaveId?: StringNullableFilter<"DocumentRecord"> | string | null
    documentSaveCount?: IntNullableFilter<"DocumentRecord"> | number | null
    documentLastSaveDateTime?: DateTimeFilter<"DocumentRecord"> | Date | string
    parentDocumentEpisodeUniqueId?: StringFilter<"DocumentRecord"> | string
    documentName?: StringNullableFilter<"DocumentRecord"> | string | null
    documentPath?: StringNullableFilter<"DocumentRecord"> | string | null
    projectName?: StringNullableFilter<"DocumentRecord"> | string | null
    projectClient?: StringNullableFilter<"DocumentRecord"> | string | null
    projectAddress?: StringNullableFilter<"DocumentRecord"> | string | null
    projectAuthor?: StringNullableFilter<"DocumentRecord"> | string | null
    projectBuildingName?: StringNullableFilter<"DocumentRecord"> | string | null
    projectIssueDate?: StringNullableFilter<"DocumentRecord"> | string | null
    projectLocation?: StringNullableFilter<"DocumentRecord"> | string | null
    projectNumber?: StringNullableFilter<"DocumentRecord"> | string | null
    projectOrganizationDescription?: StringNullableFilter<"DocumentRecord"> | string | null
    projectOrganizationName?: StringNullableFilter<"DocumentRecord"> | string | null
    projectStatus?: StringNullableFilter<"DocumentRecord"> | string | null
    projectPlaceName?: StringNullableFilter<"DocumentRecord"> | string | null
    projectElevation?: BigIntNullableFilter<"DocumentRecord"> | bigint | number | null
    projectLatitude?: BigIntNullableFilter<"DocumentRecord"> | bigint | number | null
    projectLongitude?: BigIntNullableFilter<"DocumentRecord"> | bigint | number | null
    projectTimeZone?: BigIntNullableFilter<"DocumentRecord"> | bigint | number | null
    projectGeoCoordinateSystemId?: StringNullableFilter<"DocumentRecord"> | string | null
    projectGeoCoordinateSystemDefinition?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecLength?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecArea?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecAngle?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecCurrency?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecNumber?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecRotationAngle?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecSheetLength?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecSiteAngle?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecSlope?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecSpeed?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecTime?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecVolume?: StringNullableFilter<"DocumentRecord"> | string | null
  }

  export type DocumentRecordOrderByWithRelationInput = {
    id?: SortOrder
    documentRecordUniqueId?: SortOrder
    parentWolfpackUniqueId?: SortOrder
    documentCreationId?: SortOrderInput | SortOrder
    documentSaveId?: SortOrderInput | SortOrder
    documentSaveCount?: SortOrderInput | SortOrder
    documentLastSaveDateTime?: SortOrder
    parentDocumentEpisodeUniqueId?: SortOrder
    documentName?: SortOrderInput | SortOrder
    documentPath?: SortOrderInput | SortOrder
    projectName?: SortOrderInput | SortOrder
    projectClient?: SortOrderInput | SortOrder
    projectAddress?: SortOrderInput | SortOrder
    projectAuthor?: SortOrderInput | SortOrder
    projectBuildingName?: SortOrderInput | SortOrder
    projectIssueDate?: SortOrderInput | SortOrder
    projectLocation?: SortOrderInput | SortOrder
    projectNumber?: SortOrderInput | SortOrder
    projectOrganizationDescription?: SortOrderInput | SortOrder
    projectOrganizationName?: SortOrderInput | SortOrder
    projectStatus?: SortOrderInput | SortOrder
    projectPlaceName?: SortOrderInput | SortOrder
    projectElevation?: SortOrderInput | SortOrder
    projectLatitude?: SortOrderInput | SortOrder
    projectLongitude?: SortOrderInput | SortOrder
    projectTimeZone?: SortOrderInput | SortOrder
    projectGeoCoordinateSystemId?: SortOrderInput | SortOrder
    projectGeoCoordinateSystemDefinition?: SortOrderInput | SortOrder
    projectSpecLength?: SortOrderInput | SortOrder
    projectSpecArea?: SortOrderInput | SortOrder
    projectSpecAngle?: SortOrderInput | SortOrder
    projectSpecCurrency?: SortOrderInput | SortOrder
    projectSpecNumber?: SortOrderInput | SortOrder
    projectSpecRotationAngle?: SortOrderInput | SortOrder
    projectSpecSheetLength?: SortOrderInput | SortOrder
    projectSpecSiteAngle?: SortOrderInput | SortOrder
    projectSpecSlope?: SortOrderInput | SortOrder
    projectSpecSpeed?: SortOrderInput | SortOrder
    projectSpecTime?: SortOrderInput | SortOrder
    projectSpecVolume?: SortOrderInput | SortOrder
  }

  export type DocumentRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentRecordUniqueId?: string
    parentWolfpackUniqueId?: string
    documentSaveId?: string
    AND?: DocumentRecordWhereInput | DocumentRecordWhereInput[]
    OR?: DocumentRecordWhereInput[]
    NOT?: DocumentRecordWhereInput | DocumentRecordWhereInput[]
    documentCreationId?: StringNullableFilter<"DocumentRecord"> | string | null
    documentSaveCount?: IntNullableFilter<"DocumentRecord"> | number | null
    documentLastSaveDateTime?: DateTimeFilter<"DocumentRecord"> | Date | string
    parentDocumentEpisodeUniqueId?: StringFilter<"DocumentRecord"> | string
    documentName?: StringNullableFilter<"DocumentRecord"> | string | null
    documentPath?: StringNullableFilter<"DocumentRecord"> | string | null
    projectName?: StringNullableFilter<"DocumentRecord"> | string | null
    projectClient?: StringNullableFilter<"DocumentRecord"> | string | null
    projectAddress?: StringNullableFilter<"DocumentRecord"> | string | null
    projectAuthor?: StringNullableFilter<"DocumentRecord"> | string | null
    projectBuildingName?: StringNullableFilter<"DocumentRecord"> | string | null
    projectIssueDate?: StringNullableFilter<"DocumentRecord"> | string | null
    projectLocation?: StringNullableFilter<"DocumentRecord"> | string | null
    projectNumber?: StringNullableFilter<"DocumentRecord"> | string | null
    projectOrganizationDescription?: StringNullableFilter<"DocumentRecord"> | string | null
    projectOrganizationName?: StringNullableFilter<"DocumentRecord"> | string | null
    projectStatus?: StringNullableFilter<"DocumentRecord"> | string | null
    projectPlaceName?: StringNullableFilter<"DocumentRecord"> | string | null
    projectElevation?: BigIntNullableFilter<"DocumentRecord"> | bigint | number | null
    projectLatitude?: BigIntNullableFilter<"DocumentRecord"> | bigint | number | null
    projectLongitude?: BigIntNullableFilter<"DocumentRecord"> | bigint | number | null
    projectTimeZone?: BigIntNullableFilter<"DocumentRecord"> | bigint | number | null
    projectGeoCoordinateSystemId?: StringNullableFilter<"DocumentRecord"> | string | null
    projectGeoCoordinateSystemDefinition?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecLength?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecArea?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecAngle?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecCurrency?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecNumber?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecRotationAngle?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecSheetLength?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecSiteAngle?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecSlope?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecSpeed?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecTime?: StringNullableFilter<"DocumentRecord"> | string | null
    projectSpecVolume?: StringNullableFilter<"DocumentRecord"> | string | null
  }, "id" | "documentRecordUniqueId" | "parentWolfpackUniqueId" | "documentSaveId">

  export type DocumentRecordOrderByWithAggregationInput = {
    id?: SortOrder
    documentRecordUniqueId?: SortOrder
    parentWolfpackUniqueId?: SortOrder
    documentCreationId?: SortOrderInput | SortOrder
    documentSaveId?: SortOrderInput | SortOrder
    documentSaveCount?: SortOrderInput | SortOrder
    documentLastSaveDateTime?: SortOrder
    parentDocumentEpisodeUniqueId?: SortOrder
    documentName?: SortOrderInput | SortOrder
    documentPath?: SortOrderInput | SortOrder
    projectName?: SortOrderInput | SortOrder
    projectClient?: SortOrderInput | SortOrder
    projectAddress?: SortOrderInput | SortOrder
    projectAuthor?: SortOrderInput | SortOrder
    projectBuildingName?: SortOrderInput | SortOrder
    projectIssueDate?: SortOrderInput | SortOrder
    projectLocation?: SortOrderInput | SortOrder
    projectNumber?: SortOrderInput | SortOrder
    projectOrganizationDescription?: SortOrderInput | SortOrder
    projectOrganizationName?: SortOrderInput | SortOrder
    projectStatus?: SortOrderInput | SortOrder
    projectPlaceName?: SortOrderInput | SortOrder
    projectElevation?: SortOrderInput | SortOrder
    projectLatitude?: SortOrderInput | SortOrder
    projectLongitude?: SortOrderInput | SortOrder
    projectTimeZone?: SortOrderInput | SortOrder
    projectGeoCoordinateSystemId?: SortOrderInput | SortOrder
    projectGeoCoordinateSystemDefinition?: SortOrderInput | SortOrder
    projectSpecLength?: SortOrderInput | SortOrder
    projectSpecArea?: SortOrderInput | SortOrder
    projectSpecAngle?: SortOrderInput | SortOrder
    projectSpecCurrency?: SortOrderInput | SortOrder
    projectSpecNumber?: SortOrderInput | SortOrder
    projectSpecRotationAngle?: SortOrderInput | SortOrder
    projectSpecSheetLength?: SortOrderInput | SortOrder
    projectSpecSiteAngle?: SortOrderInput | SortOrder
    projectSpecSlope?: SortOrderInput | SortOrder
    projectSpecSpeed?: SortOrderInput | SortOrder
    projectSpecTime?: SortOrderInput | SortOrder
    projectSpecVolume?: SortOrderInput | SortOrder
    _count?: DocumentRecordCountOrderByAggregateInput
    _avg?: DocumentRecordAvgOrderByAggregateInput
    _max?: DocumentRecordMaxOrderByAggregateInput
    _min?: DocumentRecordMinOrderByAggregateInput
    _sum?: DocumentRecordSumOrderByAggregateInput
  }

  export type DocumentRecordScalarWhereWithAggregatesInput = {
    AND?: DocumentRecordScalarWhereWithAggregatesInput | DocumentRecordScalarWhereWithAggregatesInput[]
    OR?: DocumentRecordScalarWhereWithAggregatesInput[]
    NOT?: DocumentRecordScalarWhereWithAggregatesInput | DocumentRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DocumentRecord"> | number
    documentRecordUniqueId?: StringWithAggregatesFilter<"DocumentRecord"> | string
    parentWolfpackUniqueId?: StringWithAggregatesFilter<"DocumentRecord"> | string
    documentCreationId?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    documentSaveId?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    documentSaveCount?: IntNullableWithAggregatesFilter<"DocumentRecord"> | number | null
    documentLastSaveDateTime?: DateTimeWithAggregatesFilter<"DocumentRecord"> | Date | string
    parentDocumentEpisodeUniqueId?: StringWithAggregatesFilter<"DocumentRecord"> | string
    documentName?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    documentPath?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectName?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectClient?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectAddress?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectAuthor?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectBuildingName?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectIssueDate?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectLocation?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectNumber?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectOrganizationDescription?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectOrganizationName?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectStatus?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectPlaceName?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectElevation?: BigIntNullableWithAggregatesFilter<"DocumentRecord"> | bigint | number | null
    projectLatitude?: BigIntNullableWithAggregatesFilter<"DocumentRecord"> | bigint | number | null
    projectLongitude?: BigIntNullableWithAggregatesFilter<"DocumentRecord"> | bigint | number | null
    projectTimeZone?: BigIntNullableWithAggregatesFilter<"DocumentRecord"> | bigint | number | null
    projectGeoCoordinateSystemId?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectGeoCoordinateSystemDefinition?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectSpecLength?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectSpecArea?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectSpecAngle?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectSpecCurrency?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectSpecNumber?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectSpecRotationAngle?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectSpecSheetLength?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectSpecSiteAngle?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectSpecSlope?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectSpecSpeed?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectSpecTime?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
    projectSpecVolume?: StringNullableWithAggregatesFilter<"DocumentRecord"> | string | null
  }

  export type WolfpackCreateInput = {
    documentName: string
    fileOrigin: string
    documentVersion: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
  }

  export type WolfpackUncheckedCreateInput = {
    id?: number
    documentName: string
    fileOrigin: string
    documentVersion: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
  }

  export type WolfpackUpdateInput = {
    documentName?: StringFieldUpdateOperationsInput | string
    fileOrigin?: StringFieldUpdateOperationsInput | string
    documentVersion?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
  }

  export type WolfpackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentName?: StringFieldUpdateOperationsInput | string
    fileOrigin?: StringFieldUpdateOperationsInput | string
    documentVersion?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
  }

  export type WolfpackCreateManyInput = {
    id?: number
    documentName: string
    fileOrigin: string
    documentVersion: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
  }

  export type WolfpackUpdateManyMutationInput = {
    documentName?: StringFieldUpdateOperationsInput | string
    fileOrigin?: StringFieldUpdateOperationsInput | string
    documentVersion?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
  }

  export type WolfpackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentName?: StringFieldUpdateOperationsInput | string
    fileOrigin?: StringFieldUpdateOperationsInput | string
    documentVersion?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DocumentRecordCreateInput = {
    id?: number
    documentRecordUniqueId: string
    parentWolfpackUniqueId: string
    documentCreationId?: string | null
    documentSaveId?: string | null
    documentSaveCount?: number | null
    documentLastSaveDateTime?: Date | string
    parentDocumentEpisodeUniqueId: string
    documentName?: string | null
    documentPath?: string | null
    projectName?: string | null
    projectClient?: string | null
    projectAddress?: string | null
    projectAuthor?: string | null
    projectBuildingName?: string | null
    projectIssueDate?: string | null
    projectLocation?: string | null
    projectNumber?: string | null
    projectOrganizationDescription?: string | null
    projectOrganizationName?: string | null
    projectStatus?: string | null
    projectPlaceName?: string | null
    projectElevation?: bigint | number | null
    projectLatitude?: bigint | number | null
    projectLongitude?: bigint | number | null
    projectTimeZone?: bigint | number | null
    projectGeoCoordinateSystemId?: string | null
    projectGeoCoordinateSystemDefinition?: string | null
    projectSpecLength?: string | null
    projectSpecArea?: string | null
    projectSpecAngle?: string | null
    projectSpecCurrency?: string | null
    projectSpecNumber?: string | null
    projectSpecRotationAngle?: string | null
    projectSpecSheetLength?: string | null
    projectSpecSiteAngle?: string | null
    projectSpecSlope?: string | null
    projectSpecSpeed?: string | null
    projectSpecTime?: string | null
    projectSpecVolume?: string | null
  }

  export type DocumentRecordUncheckedCreateInput = {
    id?: number
    documentRecordUniqueId: string
    parentWolfpackUniqueId: string
    documentCreationId?: string | null
    documentSaveId?: string | null
    documentSaveCount?: number | null
    documentLastSaveDateTime?: Date | string
    parentDocumentEpisodeUniqueId: string
    documentName?: string | null
    documentPath?: string | null
    projectName?: string | null
    projectClient?: string | null
    projectAddress?: string | null
    projectAuthor?: string | null
    projectBuildingName?: string | null
    projectIssueDate?: string | null
    projectLocation?: string | null
    projectNumber?: string | null
    projectOrganizationDescription?: string | null
    projectOrganizationName?: string | null
    projectStatus?: string | null
    projectPlaceName?: string | null
    projectElevation?: bigint | number | null
    projectLatitude?: bigint | number | null
    projectLongitude?: bigint | number | null
    projectTimeZone?: bigint | number | null
    projectGeoCoordinateSystemId?: string | null
    projectGeoCoordinateSystemDefinition?: string | null
    projectSpecLength?: string | null
    projectSpecArea?: string | null
    projectSpecAngle?: string | null
    projectSpecCurrency?: string | null
    projectSpecNumber?: string | null
    projectSpecRotationAngle?: string | null
    projectSpecSheetLength?: string | null
    projectSpecSiteAngle?: string | null
    projectSpecSlope?: string | null
    projectSpecSpeed?: string | null
    projectSpecTime?: string | null
    projectSpecVolume?: string | null
  }

  export type DocumentRecordUpdateInput = {
    documentRecordUniqueId?: StringFieldUpdateOperationsInput | string
    parentWolfpackUniqueId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: NullableStringFieldUpdateOperationsInput | string | null
    documentSaveId?: NullableStringFieldUpdateOperationsInput | string | null
    documentSaveCount?: NullableIntFieldUpdateOperationsInput | number | null
    documentLastSaveDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    parentDocumentEpisodeUniqueId?: StringFieldUpdateOperationsInput | string
    documentName?: NullableStringFieldUpdateOperationsInput | string | null
    documentPath?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectClient?: NullableStringFieldUpdateOperationsInput | string | null
    projectAddress?: NullableStringFieldUpdateOperationsInput | string | null
    projectAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    projectBuildingName?: NullableStringFieldUpdateOperationsInput | string | null
    projectIssueDate?: NullableStringFieldUpdateOperationsInput | string | null
    projectLocation?: NullableStringFieldUpdateOperationsInput | string | null
    projectNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectOrganizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    projectOrganizationName?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: NullableStringFieldUpdateOperationsInput | string | null
    projectPlaceName?: NullableStringFieldUpdateOperationsInput | string | null
    projectElevation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    projectLatitude?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    projectLongitude?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    projectTimeZone?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    projectGeoCoordinateSystemId?: NullableStringFieldUpdateOperationsInput | string | null
    projectGeoCoordinateSystemDefinition?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecLength?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecArea?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecAngle?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecRotationAngle?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecSheetLength?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecSiteAngle?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecSlope?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecTime?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecVolume?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentRecordUniqueId?: StringFieldUpdateOperationsInput | string
    parentWolfpackUniqueId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: NullableStringFieldUpdateOperationsInput | string | null
    documentSaveId?: NullableStringFieldUpdateOperationsInput | string | null
    documentSaveCount?: NullableIntFieldUpdateOperationsInput | number | null
    documentLastSaveDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    parentDocumentEpisodeUniqueId?: StringFieldUpdateOperationsInput | string
    documentName?: NullableStringFieldUpdateOperationsInput | string | null
    documentPath?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectClient?: NullableStringFieldUpdateOperationsInput | string | null
    projectAddress?: NullableStringFieldUpdateOperationsInput | string | null
    projectAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    projectBuildingName?: NullableStringFieldUpdateOperationsInput | string | null
    projectIssueDate?: NullableStringFieldUpdateOperationsInput | string | null
    projectLocation?: NullableStringFieldUpdateOperationsInput | string | null
    projectNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectOrganizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    projectOrganizationName?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: NullableStringFieldUpdateOperationsInput | string | null
    projectPlaceName?: NullableStringFieldUpdateOperationsInput | string | null
    projectElevation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    projectLatitude?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    projectLongitude?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    projectTimeZone?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    projectGeoCoordinateSystemId?: NullableStringFieldUpdateOperationsInput | string | null
    projectGeoCoordinateSystemDefinition?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecLength?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecArea?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecAngle?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecRotationAngle?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecSheetLength?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecSiteAngle?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecSlope?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecTime?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecVolume?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentRecordCreateManyInput = {
    id?: number
    documentRecordUniqueId: string
    parentWolfpackUniqueId: string
    documentCreationId?: string | null
    documentSaveId?: string | null
    documentSaveCount?: number | null
    documentLastSaveDateTime?: Date | string
    parentDocumentEpisodeUniqueId: string
    documentName?: string | null
    documentPath?: string | null
    projectName?: string | null
    projectClient?: string | null
    projectAddress?: string | null
    projectAuthor?: string | null
    projectBuildingName?: string | null
    projectIssueDate?: string | null
    projectLocation?: string | null
    projectNumber?: string | null
    projectOrganizationDescription?: string | null
    projectOrganizationName?: string | null
    projectStatus?: string | null
    projectPlaceName?: string | null
    projectElevation?: bigint | number | null
    projectLatitude?: bigint | number | null
    projectLongitude?: bigint | number | null
    projectTimeZone?: bigint | number | null
    projectGeoCoordinateSystemId?: string | null
    projectGeoCoordinateSystemDefinition?: string | null
    projectSpecLength?: string | null
    projectSpecArea?: string | null
    projectSpecAngle?: string | null
    projectSpecCurrency?: string | null
    projectSpecNumber?: string | null
    projectSpecRotationAngle?: string | null
    projectSpecSheetLength?: string | null
    projectSpecSiteAngle?: string | null
    projectSpecSlope?: string | null
    projectSpecSpeed?: string | null
    projectSpecTime?: string | null
    projectSpecVolume?: string | null
  }

  export type DocumentRecordUpdateManyMutationInput = {
    documentRecordUniqueId?: StringFieldUpdateOperationsInput | string
    parentWolfpackUniqueId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: NullableStringFieldUpdateOperationsInput | string | null
    documentSaveId?: NullableStringFieldUpdateOperationsInput | string | null
    documentSaveCount?: NullableIntFieldUpdateOperationsInput | number | null
    documentLastSaveDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    parentDocumentEpisodeUniqueId?: StringFieldUpdateOperationsInput | string
    documentName?: NullableStringFieldUpdateOperationsInput | string | null
    documentPath?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectClient?: NullableStringFieldUpdateOperationsInput | string | null
    projectAddress?: NullableStringFieldUpdateOperationsInput | string | null
    projectAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    projectBuildingName?: NullableStringFieldUpdateOperationsInput | string | null
    projectIssueDate?: NullableStringFieldUpdateOperationsInput | string | null
    projectLocation?: NullableStringFieldUpdateOperationsInput | string | null
    projectNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectOrganizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    projectOrganizationName?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: NullableStringFieldUpdateOperationsInput | string | null
    projectPlaceName?: NullableStringFieldUpdateOperationsInput | string | null
    projectElevation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    projectLatitude?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    projectLongitude?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    projectTimeZone?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    projectGeoCoordinateSystemId?: NullableStringFieldUpdateOperationsInput | string | null
    projectGeoCoordinateSystemDefinition?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecLength?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecArea?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecAngle?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecRotationAngle?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecSheetLength?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecSiteAngle?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecSlope?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecTime?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecVolume?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentRecordUniqueId?: StringFieldUpdateOperationsInput | string
    parentWolfpackUniqueId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: NullableStringFieldUpdateOperationsInput | string | null
    documentSaveId?: NullableStringFieldUpdateOperationsInput | string | null
    documentSaveCount?: NullableIntFieldUpdateOperationsInput | number | null
    documentLastSaveDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    parentDocumentEpisodeUniqueId?: StringFieldUpdateOperationsInput | string
    documentName?: NullableStringFieldUpdateOperationsInput | string | null
    documentPath?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectClient?: NullableStringFieldUpdateOperationsInput | string | null
    projectAddress?: NullableStringFieldUpdateOperationsInput | string | null
    projectAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    projectBuildingName?: NullableStringFieldUpdateOperationsInput | string | null
    projectIssueDate?: NullableStringFieldUpdateOperationsInput | string | null
    projectLocation?: NullableStringFieldUpdateOperationsInput | string | null
    projectNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectOrganizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    projectOrganizationName?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: NullableStringFieldUpdateOperationsInput | string | null
    projectPlaceName?: NullableStringFieldUpdateOperationsInput | string | null
    projectElevation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    projectLatitude?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    projectLongitude?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    projectTimeZone?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    projectGeoCoordinateSystemId?: NullableStringFieldUpdateOperationsInput | string | null
    projectGeoCoordinateSystemDefinition?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecLength?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecArea?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecAngle?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecRotationAngle?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecSheetLength?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecSiteAngle?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecSlope?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecTime?: NullableStringFieldUpdateOperationsInput | string | null
    projectSpecVolume?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WolfpackCountOrderByAggregateInput = {
    id?: SortOrder
    documentName?: SortOrder
    fileOrigin?: SortOrder
    documentVersion?: SortOrder
    wasCompleted?: SortOrder
    timeTaken?: SortOrder
    createdAt?: SortOrder
    guid?: SortOrder
    resultCount?: SortOrder
    testName?: SortOrder
    results?: SortOrder
  }

  export type WolfpackAvgOrderByAggregateInput = {
    id?: SortOrder
    timeTaken?: SortOrder
    resultCount?: SortOrder
  }

  export type WolfpackMaxOrderByAggregateInput = {
    id?: SortOrder
    documentName?: SortOrder
    fileOrigin?: SortOrder
    documentVersion?: SortOrder
    wasCompleted?: SortOrder
    timeTaken?: SortOrder
    createdAt?: SortOrder
    guid?: SortOrder
    resultCount?: SortOrder
    testName?: SortOrder
  }

  export type WolfpackMinOrderByAggregateInput = {
    id?: SortOrder
    documentName?: SortOrder
    fileOrigin?: SortOrder
    documentVersion?: SortOrder
    wasCompleted?: SortOrder
    timeTaken?: SortOrder
    createdAt?: SortOrder
    guid?: SortOrder
    resultCount?: SortOrder
    testName?: SortOrder
  }

  export type WolfpackSumOrderByAggregateInput = {
    id?: SortOrder
    timeTaken?: SortOrder
    resultCount?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type DocumentRecordCountOrderByAggregateInput = {
    id?: SortOrder
    documentRecordUniqueId?: SortOrder
    parentWolfpackUniqueId?: SortOrder
    documentCreationId?: SortOrder
    documentSaveId?: SortOrder
    documentSaveCount?: SortOrder
    documentLastSaveDateTime?: SortOrder
    parentDocumentEpisodeUniqueId?: SortOrder
    documentName?: SortOrder
    documentPath?: SortOrder
    projectName?: SortOrder
    projectClient?: SortOrder
    projectAddress?: SortOrder
    projectAuthor?: SortOrder
    projectBuildingName?: SortOrder
    projectIssueDate?: SortOrder
    projectLocation?: SortOrder
    projectNumber?: SortOrder
    projectOrganizationDescription?: SortOrder
    projectOrganizationName?: SortOrder
    projectStatus?: SortOrder
    projectPlaceName?: SortOrder
    projectElevation?: SortOrder
    projectLatitude?: SortOrder
    projectLongitude?: SortOrder
    projectTimeZone?: SortOrder
    projectGeoCoordinateSystemId?: SortOrder
    projectGeoCoordinateSystemDefinition?: SortOrder
    projectSpecLength?: SortOrder
    projectSpecArea?: SortOrder
    projectSpecAngle?: SortOrder
    projectSpecCurrency?: SortOrder
    projectSpecNumber?: SortOrder
    projectSpecRotationAngle?: SortOrder
    projectSpecSheetLength?: SortOrder
    projectSpecSiteAngle?: SortOrder
    projectSpecSlope?: SortOrder
    projectSpecSpeed?: SortOrder
    projectSpecTime?: SortOrder
    projectSpecVolume?: SortOrder
  }

  export type DocumentRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    documentSaveCount?: SortOrder
    projectElevation?: SortOrder
    projectLatitude?: SortOrder
    projectLongitude?: SortOrder
    projectTimeZone?: SortOrder
  }

  export type DocumentRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    documentRecordUniqueId?: SortOrder
    parentWolfpackUniqueId?: SortOrder
    documentCreationId?: SortOrder
    documentSaveId?: SortOrder
    documentSaveCount?: SortOrder
    documentLastSaveDateTime?: SortOrder
    parentDocumentEpisodeUniqueId?: SortOrder
    documentName?: SortOrder
    documentPath?: SortOrder
    projectName?: SortOrder
    projectClient?: SortOrder
    projectAddress?: SortOrder
    projectAuthor?: SortOrder
    projectBuildingName?: SortOrder
    projectIssueDate?: SortOrder
    projectLocation?: SortOrder
    projectNumber?: SortOrder
    projectOrganizationDescription?: SortOrder
    projectOrganizationName?: SortOrder
    projectStatus?: SortOrder
    projectPlaceName?: SortOrder
    projectElevation?: SortOrder
    projectLatitude?: SortOrder
    projectLongitude?: SortOrder
    projectTimeZone?: SortOrder
    projectGeoCoordinateSystemId?: SortOrder
    projectGeoCoordinateSystemDefinition?: SortOrder
    projectSpecLength?: SortOrder
    projectSpecArea?: SortOrder
    projectSpecAngle?: SortOrder
    projectSpecCurrency?: SortOrder
    projectSpecNumber?: SortOrder
    projectSpecRotationAngle?: SortOrder
    projectSpecSheetLength?: SortOrder
    projectSpecSiteAngle?: SortOrder
    projectSpecSlope?: SortOrder
    projectSpecSpeed?: SortOrder
    projectSpecTime?: SortOrder
    projectSpecVolume?: SortOrder
  }

  export type DocumentRecordMinOrderByAggregateInput = {
    id?: SortOrder
    documentRecordUniqueId?: SortOrder
    parentWolfpackUniqueId?: SortOrder
    documentCreationId?: SortOrder
    documentSaveId?: SortOrder
    documentSaveCount?: SortOrder
    documentLastSaveDateTime?: SortOrder
    parentDocumentEpisodeUniqueId?: SortOrder
    documentName?: SortOrder
    documentPath?: SortOrder
    projectName?: SortOrder
    projectClient?: SortOrder
    projectAddress?: SortOrder
    projectAuthor?: SortOrder
    projectBuildingName?: SortOrder
    projectIssueDate?: SortOrder
    projectLocation?: SortOrder
    projectNumber?: SortOrder
    projectOrganizationDescription?: SortOrder
    projectOrganizationName?: SortOrder
    projectStatus?: SortOrder
    projectPlaceName?: SortOrder
    projectElevation?: SortOrder
    projectLatitude?: SortOrder
    projectLongitude?: SortOrder
    projectTimeZone?: SortOrder
    projectGeoCoordinateSystemId?: SortOrder
    projectGeoCoordinateSystemDefinition?: SortOrder
    projectSpecLength?: SortOrder
    projectSpecArea?: SortOrder
    projectSpecAngle?: SortOrder
    projectSpecCurrency?: SortOrder
    projectSpecNumber?: SortOrder
    projectSpecRotationAngle?: SortOrder
    projectSpecSheetLength?: SortOrder
    projectSpecSiteAngle?: SortOrder
    projectSpecSlope?: SortOrder
    projectSpecSpeed?: SortOrder
    projectSpecTime?: SortOrder
    projectSpecVolume?: SortOrder
  }

  export type DocumentRecordSumOrderByAggregateInput = {
    id?: SortOrder
    documentSaveCount?: SortOrder
    projectElevation?: SortOrder
    projectLatitude?: SortOrder
    projectLongitude?: SortOrder
    projectTimeZone?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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