
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
 * Model ProjectInformation
 * 
 */
export type ProjectInformation = $Result.DefaultSelection<Prisma.$ProjectInformationPayload>
/**
 * Model ElementInformation
 * 
 */
export type ElementInformation = $Result.DefaultSelection<Prisma.$ElementInformationPayload>
/**
 * Model Parameters
 * 
 */
export type Parameters = $Result.DefaultSelection<Prisma.$ParametersPayload>
/**
 * Model DocumentInformation
 * 
 */
export type DocumentInformation = $Result.DefaultSelection<Prisma.$DocumentInformationPayload>
/**
 * Model DocumentWarning
 * 
 */
export type DocumentWarning = $Result.DefaultSelection<Prisma.$DocumentWarningPayload>
/**
 * Model SiteInformation
 * 
 */
export type SiteInformation = $Result.DefaultSelection<Prisma.$SiteInformationPayload>
/**
 * Model UnitsInformation
 * 
 */
export type UnitsInformation = $Result.DefaultSelection<Prisma.$UnitsInformationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StorageType: {
  INTEGER: 'INTEGER',
  DOUBLE: 'DOUBLE',
  STRING: 'STRING',
  ELEMENTID: 'ELEMENTID',
  INVALID: 'INVALID'
};

export type StorageType = (typeof StorageType)[keyof typeof StorageType]

}

export type StorageType = $Enums.StorageType

export const StorageType: typeof $Enums.StorageType

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
   * `prisma.projectInformation`: Exposes CRUD operations for the **ProjectInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectInformations
    * const projectInformations = await prisma.projectInformation.findMany()
    * ```
    */
  get projectInformation(): Prisma.ProjectInformationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.elementInformation`: Exposes CRUD operations for the **ElementInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ElementInformations
    * const elementInformations = await prisma.elementInformation.findMany()
    * ```
    */
  get elementInformation(): Prisma.ElementInformationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parameters`: Exposes CRUD operations for the **Parameters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parameters
    * const parameters = await prisma.parameters.findMany()
    * ```
    */
  get parameters(): Prisma.ParametersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentInformation`: Exposes CRUD operations for the **DocumentInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentInformations
    * const documentInformations = await prisma.documentInformation.findMany()
    * ```
    */
  get documentInformation(): Prisma.DocumentInformationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentWarning`: Exposes CRUD operations for the **DocumentWarning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentWarnings
    * const documentWarnings = await prisma.documentWarning.findMany()
    * ```
    */
  get documentWarning(): Prisma.DocumentWarningDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteInformation`: Exposes CRUD operations for the **SiteInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteInformations
    * const siteInformations = await prisma.siteInformation.findMany()
    * ```
    */
  get siteInformation(): Prisma.SiteInformationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unitsInformation`: Exposes CRUD operations for the **UnitsInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnitsInformations
    * const unitsInformations = await prisma.unitsInformation.findMany()
    * ```
    */
  get unitsInformation(): Prisma.UnitsInformationDelegate<ExtArgs, ClientOptions>;
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
    ProjectInformation: 'ProjectInformation',
    ElementInformation: 'ElementInformation',
    Parameters: 'Parameters',
    DocumentInformation: 'DocumentInformation',
    DocumentWarning: 'DocumentWarning',
    SiteInformation: 'SiteInformation',
    UnitsInformation: 'UnitsInformation'
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
      modelProps: "wolfpack" | "projectInformation" | "elementInformation" | "parameters" | "documentInformation" | "documentWarning" | "siteInformation" | "unitsInformation"
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
      ProjectInformation: {
        payload: Prisma.$ProjectInformationPayload<ExtArgs>
        fields: Prisma.ProjectInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectInformationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectInformationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInformationPayload>
          }
          findFirst: {
            args: Prisma.ProjectInformationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectInformationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInformationPayload>
          }
          findMany: {
            args: Prisma.ProjectInformationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInformationPayload>[]
          }
          create: {
            args: Prisma.ProjectInformationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInformationPayload>
          }
          createMany: {
            args: Prisma.ProjectInformationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectInformationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInformationPayload>[]
          }
          delete: {
            args: Prisma.ProjectInformationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInformationPayload>
          }
          update: {
            args: Prisma.ProjectInformationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInformationPayload>
          }
          deleteMany: {
            args: Prisma.ProjectInformationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectInformationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectInformationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInformationPayload>[]
          }
          upsert: {
            args: Prisma.ProjectInformationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInformationPayload>
          }
          aggregate: {
            args: Prisma.ProjectInformationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectInformation>
          }
          groupBy: {
            args: Prisma.ProjectInformationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectInformationCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectInformationCountAggregateOutputType> | number
          }
        }
      }
      ElementInformation: {
        payload: Prisma.$ElementInformationPayload<ExtArgs>
        fields: Prisma.ElementInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElementInformationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElementInformationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementInformationPayload>
          }
          findFirst: {
            args: Prisma.ElementInformationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElementInformationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementInformationPayload>
          }
          findMany: {
            args: Prisma.ElementInformationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementInformationPayload>[]
          }
          create: {
            args: Prisma.ElementInformationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementInformationPayload>
          }
          createMany: {
            args: Prisma.ElementInformationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ElementInformationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementInformationPayload>[]
          }
          delete: {
            args: Prisma.ElementInformationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementInformationPayload>
          }
          update: {
            args: Prisma.ElementInformationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementInformationPayload>
          }
          deleteMany: {
            args: Prisma.ElementInformationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ElementInformationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ElementInformationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementInformationPayload>[]
          }
          upsert: {
            args: Prisma.ElementInformationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementInformationPayload>
          }
          aggregate: {
            args: Prisma.ElementInformationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElementInformation>
          }
          groupBy: {
            args: Prisma.ElementInformationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElementInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ElementInformationCountArgs<ExtArgs>
            result: $Utils.Optional<ElementInformationCountAggregateOutputType> | number
          }
        }
      }
      Parameters: {
        payload: Prisma.$ParametersPayload<ExtArgs>
        fields: Prisma.ParametersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParametersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParametersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametersPayload>
          }
          findFirst: {
            args: Prisma.ParametersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParametersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametersPayload>
          }
          findMany: {
            args: Prisma.ParametersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametersPayload>[]
          }
          create: {
            args: Prisma.ParametersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametersPayload>
          }
          createMany: {
            args: Prisma.ParametersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParametersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametersPayload>[]
          }
          delete: {
            args: Prisma.ParametersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametersPayload>
          }
          update: {
            args: Prisma.ParametersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametersPayload>
          }
          deleteMany: {
            args: Prisma.ParametersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParametersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParametersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametersPayload>[]
          }
          upsert: {
            args: Prisma.ParametersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametersPayload>
          }
          aggregate: {
            args: Prisma.ParametersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParameters>
          }
          groupBy: {
            args: Prisma.ParametersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParametersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParametersCountArgs<ExtArgs>
            result: $Utils.Optional<ParametersCountAggregateOutputType> | number
          }
        }
      }
      DocumentInformation: {
        payload: Prisma.$DocumentInformationPayload<ExtArgs>
        fields: Prisma.DocumentInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentInformationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentInformationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentInformationPayload>
          }
          findFirst: {
            args: Prisma.DocumentInformationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentInformationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentInformationPayload>
          }
          findMany: {
            args: Prisma.DocumentInformationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentInformationPayload>[]
          }
          create: {
            args: Prisma.DocumentInformationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentInformationPayload>
          }
          createMany: {
            args: Prisma.DocumentInformationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentInformationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentInformationPayload>[]
          }
          delete: {
            args: Prisma.DocumentInformationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentInformationPayload>
          }
          update: {
            args: Prisma.DocumentInformationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentInformationPayload>
          }
          deleteMany: {
            args: Prisma.DocumentInformationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentInformationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentInformationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentInformationPayload>[]
          }
          upsert: {
            args: Prisma.DocumentInformationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentInformationPayload>
          }
          aggregate: {
            args: Prisma.DocumentInformationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentInformation>
          }
          groupBy: {
            args: Prisma.DocumentInformationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentInformationCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentInformationCountAggregateOutputType> | number
          }
        }
      }
      DocumentWarning: {
        payload: Prisma.$DocumentWarningPayload<ExtArgs>
        fields: Prisma.DocumentWarningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentWarningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentWarningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentWarningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentWarningPayload>
          }
          findFirst: {
            args: Prisma.DocumentWarningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentWarningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentWarningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentWarningPayload>
          }
          findMany: {
            args: Prisma.DocumentWarningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentWarningPayload>[]
          }
          create: {
            args: Prisma.DocumentWarningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentWarningPayload>
          }
          createMany: {
            args: Prisma.DocumentWarningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentWarningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentWarningPayload>[]
          }
          delete: {
            args: Prisma.DocumentWarningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentWarningPayload>
          }
          update: {
            args: Prisma.DocumentWarningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentWarningPayload>
          }
          deleteMany: {
            args: Prisma.DocumentWarningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentWarningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentWarningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentWarningPayload>[]
          }
          upsert: {
            args: Prisma.DocumentWarningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentWarningPayload>
          }
          aggregate: {
            args: Prisma.DocumentWarningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentWarning>
          }
          groupBy: {
            args: Prisma.DocumentWarningGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentWarningGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentWarningCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentWarningCountAggregateOutputType> | number
          }
        }
      }
      SiteInformation: {
        payload: Prisma.$SiteInformationPayload<ExtArgs>
        fields: Prisma.SiteInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteInformationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteInformationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteInformationPayload>
          }
          findFirst: {
            args: Prisma.SiteInformationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteInformationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteInformationPayload>
          }
          findMany: {
            args: Prisma.SiteInformationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteInformationPayload>[]
          }
          create: {
            args: Prisma.SiteInformationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteInformationPayload>
          }
          createMany: {
            args: Prisma.SiteInformationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteInformationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteInformationPayload>[]
          }
          delete: {
            args: Prisma.SiteInformationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteInformationPayload>
          }
          update: {
            args: Prisma.SiteInformationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteInformationPayload>
          }
          deleteMany: {
            args: Prisma.SiteInformationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteInformationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteInformationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteInformationPayload>[]
          }
          upsert: {
            args: Prisma.SiteInformationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteInformationPayload>
          }
          aggregate: {
            args: Prisma.SiteInformationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteInformation>
          }
          groupBy: {
            args: Prisma.SiteInformationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteInformationCountArgs<ExtArgs>
            result: $Utils.Optional<SiteInformationCountAggregateOutputType> | number
          }
        }
      }
      UnitsInformation: {
        payload: Prisma.$UnitsInformationPayload<ExtArgs>
        fields: Prisma.UnitsInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitsInformationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitsInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitsInformationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitsInformationPayload>
          }
          findFirst: {
            args: Prisma.UnitsInformationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitsInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitsInformationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitsInformationPayload>
          }
          findMany: {
            args: Prisma.UnitsInformationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitsInformationPayload>[]
          }
          create: {
            args: Prisma.UnitsInformationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitsInformationPayload>
          }
          createMany: {
            args: Prisma.UnitsInformationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitsInformationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitsInformationPayload>[]
          }
          delete: {
            args: Prisma.UnitsInformationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitsInformationPayload>
          }
          update: {
            args: Prisma.UnitsInformationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitsInformationPayload>
          }
          deleteMany: {
            args: Prisma.UnitsInformationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitsInformationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitsInformationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitsInformationPayload>[]
          }
          upsert: {
            args: Prisma.UnitsInformationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitsInformationPayload>
          }
          aggregate: {
            args: Prisma.UnitsInformationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnitsInformation>
          }
          groupBy: {
            args: Prisma.UnitsInformationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitsInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitsInformationCountArgs<ExtArgs>
            result: $Utils.Optional<UnitsInformationCountAggregateOutputType> | number
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
    projectInformation?: ProjectInformationOmit
    elementInformation?: ElementInformationOmit
    parameters?: ParametersOmit
    documentInformation?: DocumentInformationOmit
    documentWarning?: DocumentWarningOmit
    siteInformation?: SiteInformationOmit
    unitsInformation?: UnitsInformationOmit
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
   * Count Type WolfpackCountOutputType
   */

  export type WolfpackCountOutputType = {
    warnings: number
    elementInfo: number
  }

  export type WolfpackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warnings?: boolean | WolfpackCountOutputTypeCountWarningsArgs
    elementInfo?: boolean | WolfpackCountOutputTypeCountElementInfoArgs
  }

  // Custom InputTypes
  /**
   * WolfpackCountOutputType without action
   */
  export type WolfpackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WolfpackCountOutputType
     */
    select?: WolfpackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WolfpackCountOutputType without action
   */
  export type WolfpackCountOutputTypeCountWarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWarningWhereInput
  }

  /**
   * WolfpackCountOutputType without action
   */
  export type WolfpackCountOutputTypeCountElementInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElementInformationWhereInput
  }


  /**
   * Count Type ElementInformationCountOutputType
   */

  export type ElementInformationCountOutputType = {
    Parameters: number
  }

  export type ElementInformationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Parameters?: boolean | ElementInformationCountOutputTypeCountParametersArgs
  }

  // Custom InputTypes
  /**
   * ElementInformationCountOutputType without action
   */
  export type ElementInformationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementInformationCountOutputType
     */
    select?: ElementInformationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ElementInformationCountOutputType without action
   */
  export type ElementInformationCountOutputTypeCountParametersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParametersWhereInput
  }


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
    changedElements: number | null
    timeTaken: number | null
    resultCount: number | null
  }

  export type WolfpackSumAggregateOutputType = {
    id: number | null
    changedElements: bigint[]
    timeTaken: number | null
    resultCount: number | null
  }

  export type WolfpackMinAggregateOutputType = {
    id: number | null
    documentName: string | null
    documentSessionId: string | null
    documentCreationId: string | null
    fileOrigin: string | null
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
    documentSessionId: string | null
    documentCreationId: string | null
    fileOrigin: string | null
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
    documentSessionId: number
    documentCreationId: number
    changedElements: number
    fileOrigin: number
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
    changedElements?: true
    timeTaken?: true
    resultCount?: true
  }

  export type WolfpackSumAggregateInputType = {
    id?: true
    changedElements?: true
    timeTaken?: true
    resultCount?: true
  }

  export type WolfpackMinAggregateInputType = {
    id?: true
    documentName?: true
    documentSessionId?: true
    documentCreationId?: true
    fileOrigin?: true
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
    documentSessionId?: true
    documentCreationId?: true
    fileOrigin?: true
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
    documentSessionId?: true
    documentCreationId?: true
    changedElements?: true
    fileOrigin?: true
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
    documentSessionId: string
    documentCreationId: string
    changedElements: bigint[]
    fileOrigin: string
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
    documentSessionId?: boolean
    documentCreationId?: boolean
    changedElements?: boolean
    fileOrigin?: boolean
    wasCompleted?: boolean
    timeTaken?: boolean
    createdAt?: boolean
    guid?: boolean
    resultCount?: boolean
    testName?: boolean
    results?: boolean
    projectInformation?: boolean | Wolfpack$projectInformationArgs<ExtArgs>
    documentInformation?: boolean | Wolfpack$documentInformationArgs<ExtArgs>
    siteInformation?: boolean | Wolfpack$siteInformationArgs<ExtArgs>
    unitsInformation?: boolean | Wolfpack$unitsInformationArgs<ExtArgs>
    warnings?: boolean | Wolfpack$warningsArgs<ExtArgs>
    elementInfo?: boolean | Wolfpack$elementInfoArgs<ExtArgs>
    _count?: boolean | WolfpackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wolfpack"]>

  export type WolfpackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentName?: boolean
    documentSessionId?: boolean
    documentCreationId?: boolean
    changedElements?: boolean
    fileOrigin?: boolean
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
    documentSessionId?: boolean
    documentCreationId?: boolean
    changedElements?: boolean
    fileOrigin?: boolean
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
    documentSessionId?: boolean
    documentCreationId?: boolean
    changedElements?: boolean
    fileOrigin?: boolean
    wasCompleted?: boolean
    timeTaken?: boolean
    createdAt?: boolean
    guid?: boolean
    resultCount?: boolean
    testName?: boolean
    results?: boolean
  }

  export type WolfpackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentName" | "documentSessionId" | "documentCreationId" | "changedElements" | "fileOrigin" | "wasCompleted" | "timeTaken" | "createdAt" | "guid" | "resultCount" | "testName" | "results", ExtArgs["result"]["wolfpack"]>
  export type WolfpackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectInformation?: boolean | Wolfpack$projectInformationArgs<ExtArgs>
    documentInformation?: boolean | Wolfpack$documentInformationArgs<ExtArgs>
    siteInformation?: boolean | Wolfpack$siteInformationArgs<ExtArgs>
    unitsInformation?: boolean | Wolfpack$unitsInformationArgs<ExtArgs>
    warnings?: boolean | Wolfpack$warningsArgs<ExtArgs>
    elementInfo?: boolean | Wolfpack$elementInfoArgs<ExtArgs>
    _count?: boolean | WolfpackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WolfpackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WolfpackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WolfpackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wolfpack"
    objects: {
      projectInformation: Prisma.$ProjectInformationPayload<ExtArgs> | null
      documentInformation: Prisma.$DocumentInformationPayload<ExtArgs> | null
      siteInformation: Prisma.$SiteInformationPayload<ExtArgs> | null
      unitsInformation: Prisma.$UnitsInformationPayload<ExtArgs> | null
      warnings: Prisma.$DocumentWarningPayload<ExtArgs>[]
      elementInfo: Prisma.$ElementInformationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentName: string
      documentSessionId: string
      documentCreationId: string
      changedElements: bigint[]
      fileOrigin: string
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
    projectInformation<T extends Wolfpack$projectInformationArgs<ExtArgs> = {}>(args?: Subset<T, Wolfpack$projectInformationArgs<ExtArgs>>): Prisma__ProjectInformationClient<$Result.GetResult<Prisma.$ProjectInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    documentInformation<T extends Wolfpack$documentInformationArgs<ExtArgs> = {}>(args?: Subset<T, Wolfpack$documentInformationArgs<ExtArgs>>): Prisma__DocumentInformationClient<$Result.GetResult<Prisma.$DocumentInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    siteInformation<T extends Wolfpack$siteInformationArgs<ExtArgs> = {}>(args?: Subset<T, Wolfpack$siteInformationArgs<ExtArgs>>): Prisma__SiteInformationClient<$Result.GetResult<Prisma.$SiteInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    unitsInformation<T extends Wolfpack$unitsInformationArgs<ExtArgs> = {}>(args?: Subset<T, Wolfpack$unitsInformationArgs<ExtArgs>>): Prisma__UnitsInformationClient<$Result.GetResult<Prisma.$UnitsInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    warnings<T extends Wolfpack$warningsArgs<ExtArgs> = {}>(args?: Subset<T, Wolfpack$warningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentWarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    elementInfo<T extends Wolfpack$elementInfoArgs<ExtArgs> = {}>(args?: Subset<T, Wolfpack$elementInfoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly documentSessionId: FieldRef<"Wolfpack", 'String'>
    readonly documentCreationId: FieldRef<"Wolfpack", 'String'>
    readonly changedElements: FieldRef<"Wolfpack", 'BigInt[]'>
    readonly fileOrigin: FieldRef<"Wolfpack", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: WolfpackInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: WolfpackInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: WolfpackInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: WolfpackInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: WolfpackInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: WolfpackInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: WolfpackInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: WolfpackInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: WolfpackInclude<ExtArgs> | null
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
   * Wolfpack.projectInformation
   */
  export type Wolfpack$projectInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInformation
     */
    select?: ProjectInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInformation
     */
    omit?: ProjectInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInformationInclude<ExtArgs> | null
    where?: ProjectInformationWhereInput
  }

  /**
   * Wolfpack.documentInformation
   */
  export type Wolfpack$documentInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentInformation
     */
    select?: DocumentInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentInformation
     */
    omit?: DocumentInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInformationInclude<ExtArgs> | null
    where?: DocumentInformationWhereInput
  }

  /**
   * Wolfpack.siteInformation
   */
  export type Wolfpack$siteInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteInformation
     */
    select?: SiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteInformation
     */
    omit?: SiteInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInformationInclude<ExtArgs> | null
    where?: SiteInformationWhereInput
  }

  /**
   * Wolfpack.unitsInformation
   */
  export type Wolfpack$unitsInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitsInformation
     */
    select?: UnitsInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitsInformation
     */
    omit?: UnitsInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitsInformationInclude<ExtArgs> | null
    where?: UnitsInformationWhereInput
  }

  /**
   * Wolfpack.warnings
   */
  export type Wolfpack$warningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentWarning
     */
    select?: DocumentWarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentWarning
     */
    omit?: DocumentWarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentWarningInclude<ExtArgs> | null
    where?: DocumentWarningWhereInput
    orderBy?: DocumentWarningOrderByWithRelationInput | DocumentWarningOrderByWithRelationInput[]
    cursor?: DocumentWarningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentWarningScalarFieldEnum | DocumentWarningScalarFieldEnum[]
  }

  /**
   * Wolfpack.elementInfo
   */
  export type Wolfpack$elementInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementInformation
     */
    select?: ElementInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementInformation
     */
    omit?: ElementInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInformationInclude<ExtArgs> | null
    where?: ElementInformationWhereInput
    orderBy?: ElementInformationOrderByWithRelationInput | ElementInformationOrderByWithRelationInput[]
    cursor?: ElementInformationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElementInformationScalarFieldEnum | ElementInformationScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WolfpackInclude<ExtArgs> | null
  }


  /**
   * Model ProjectInformation
   */

  export type AggregateProjectInformation = {
    _count: ProjectInformationCountAggregateOutputType | null
    _avg: ProjectInformationAvgAggregateOutputType | null
    _sum: ProjectInformationSumAggregateOutputType | null
    _min: ProjectInformationMinAggregateOutputType | null
    _max: ProjectInformationMaxAggregateOutputType | null
  }

  export type ProjectInformationAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectInformationSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectInformationMinAggregateOutputType = {
    id: number | null
    projectId: string | null
    projectName: string | null
    client: string | null
    address: string | null
    author: string | null
    buildingName: string | null
    issueDate: string | null
    location: string | null
    projectNumber: string | null
    organizationDescription: string | null
    organizationName: string | null
    status: string | null
  }

  export type ProjectInformationMaxAggregateOutputType = {
    id: number | null
    projectId: string | null
    projectName: string | null
    client: string | null
    address: string | null
    author: string | null
    buildingName: string | null
    issueDate: string | null
    location: string | null
    projectNumber: string | null
    organizationDescription: string | null
    organizationName: string | null
    status: string | null
  }

  export type ProjectInformationCountAggregateOutputType = {
    id: number
    projectId: number
    projectName: number
    client: number
    address: number
    author: number
    buildingName: number
    issueDate: number
    location: number
    projectNumber: number
    organizationDescription: number
    organizationName: number
    status: number
    _all: number
  }


  export type ProjectInformationAvgAggregateInputType = {
    id?: true
  }

  export type ProjectInformationSumAggregateInputType = {
    id?: true
  }

  export type ProjectInformationMinAggregateInputType = {
    id?: true
    projectId?: true
    projectName?: true
    client?: true
    address?: true
    author?: true
    buildingName?: true
    issueDate?: true
    location?: true
    projectNumber?: true
    organizationDescription?: true
    organizationName?: true
    status?: true
  }

  export type ProjectInformationMaxAggregateInputType = {
    id?: true
    projectId?: true
    projectName?: true
    client?: true
    address?: true
    author?: true
    buildingName?: true
    issueDate?: true
    location?: true
    projectNumber?: true
    organizationDescription?: true
    organizationName?: true
    status?: true
  }

  export type ProjectInformationCountAggregateInputType = {
    id?: true
    projectId?: true
    projectName?: true
    client?: true
    address?: true
    author?: true
    buildingName?: true
    issueDate?: true
    location?: true
    projectNumber?: true
    organizationDescription?: true
    organizationName?: true
    status?: true
    _all?: true
  }

  export type ProjectInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectInformation to aggregate.
     */
    where?: ProjectInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectInformations to fetch.
     */
    orderBy?: ProjectInformationOrderByWithRelationInput | ProjectInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectInformations
    **/
    _count?: true | ProjectInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectInformationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectInformationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectInformationMaxAggregateInputType
  }

  export type GetProjectInformationAggregateType<T extends ProjectInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectInformation[P]>
      : GetScalarType<T[P], AggregateProjectInformation[P]>
  }




  export type ProjectInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectInformationWhereInput
    orderBy?: ProjectInformationOrderByWithAggregationInput | ProjectInformationOrderByWithAggregationInput[]
    by: ProjectInformationScalarFieldEnum[] | ProjectInformationScalarFieldEnum
    having?: ProjectInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectInformationCountAggregateInputType | true
    _avg?: ProjectInformationAvgAggregateInputType
    _sum?: ProjectInformationSumAggregateInputType
    _min?: ProjectInformationMinAggregateInputType
    _max?: ProjectInformationMaxAggregateInputType
  }

  export type ProjectInformationGroupByOutputType = {
    id: number
    projectId: string
    projectName: string
    client: string
    address: string
    author: string
    buildingName: string
    issueDate: string
    location: string
    projectNumber: string
    organizationDescription: string
    organizationName: string
    status: string
    _count: ProjectInformationCountAggregateOutputType | null
    _avg: ProjectInformationAvgAggregateOutputType | null
    _sum: ProjectInformationSumAggregateOutputType | null
    _min: ProjectInformationMinAggregateOutputType | null
    _max: ProjectInformationMaxAggregateOutputType | null
  }

  type GetProjectInformationGroupByPayload<T extends ProjectInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectInformationGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectInformationGroupByOutputType[P]>
        }
      >
    >


  export type ProjectInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    projectName?: boolean
    client?: boolean
    address?: boolean
    author?: boolean
    buildingName?: boolean
    issueDate?: boolean
    location?: boolean
    projectNumber?: boolean
    organizationDescription?: boolean
    organizationName?: boolean
    status?: boolean
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectInformation"]>

  export type ProjectInformationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    projectName?: boolean
    client?: boolean
    address?: boolean
    author?: boolean
    buildingName?: boolean
    issueDate?: boolean
    location?: boolean
    projectNumber?: boolean
    organizationDescription?: boolean
    organizationName?: boolean
    status?: boolean
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectInformation"]>

  export type ProjectInformationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    projectName?: boolean
    client?: boolean
    address?: boolean
    author?: boolean
    buildingName?: boolean
    issueDate?: boolean
    location?: boolean
    projectNumber?: boolean
    organizationDescription?: boolean
    organizationName?: boolean
    status?: boolean
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectInformation"]>

  export type ProjectInformationSelectScalar = {
    id?: boolean
    projectId?: boolean
    projectName?: boolean
    client?: boolean
    address?: boolean
    author?: boolean
    buildingName?: boolean
    issueDate?: boolean
    location?: boolean
    projectNumber?: boolean
    organizationDescription?: boolean
    organizationName?: boolean
    status?: boolean
  }

  export type ProjectInformationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "projectName" | "client" | "address" | "author" | "buildingName" | "issueDate" | "location" | "projectNumber" | "organizationDescription" | "organizationName" | "status", ExtArgs["result"]["projectInformation"]>
  export type ProjectInformationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }
  export type ProjectInformationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }
  export type ProjectInformationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }

  export type $ProjectInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectInformation"
    objects: {
      document: Prisma.$WolfpackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: string
      projectName: string
      client: string
      address: string
      author: string
      buildingName: string
      issueDate: string
      location: string
      projectNumber: string
      organizationDescription: string
      organizationName: string
      status: string
    }, ExtArgs["result"]["projectInformation"]>
    composites: {}
  }

  type ProjectInformationGetPayload<S extends boolean | null | undefined | ProjectInformationDefaultArgs> = $Result.GetResult<Prisma.$ProjectInformationPayload, S>

  type ProjectInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectInformationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectInformationCountAggregateInputType | true
    }

  export interface ProjectInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectInformation'], meta: { name: 'ProjectInformation' } }
    /**
     * Find zero or one ProjectInformation that matches the filter.
     * @param {ProjectInformationFindUniqueArgs} args - Arguments to find a ProjectInformation
     * @example
     * // Get one ProjectInformation
     * const projectInformation = await prisma.projectInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectInformationFindUniqueArgs>(args: SelectSubset<T, ProjectInformationFindUniqueArgs<ExtArgs>>): Prisma__ProjectInformationClient<$Result.GetResult<Prisma.$ProjectInformationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectInformation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectInformationFindUniqueOrThrowArgs} args - Arguments to find a ProjectInformation
     * @example
     * // Get one ProjectInformation
     * const projectInformation = await prisma.projectInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectInformationFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectInformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectInformationClient<$Result.GetResult<Prisma.$ProjectInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInformationFindFirstArgs} args - Arguments to find a ProjectInformation
     * @example
     * // Get one ProjectInformation
     * const projectInformation = await prisma.projectInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectInformationFindFirstArgs>(args?: SelectSubset<T, ProjectInformationFindFirstArgs<ExtArgs>>): Prisma__ProjectInformationClient<$Result.GetResult<Prisma.$ProjectInformationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInformationFindFirstOrThrowArgs} args - Arguments to find a ProjectInformation
     * @example
     * // Get one ProjectInformation
     * const projectInformation = await prisma.projectInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectInformationFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectInformationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectInformationClient<$Result.GetResult<Prisma.$ProjectInformationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectInformations
     * const projectInformations = await prisma.projectInformation.findMany()
     * 
     * // Get first 10 ProjectInformations
     * const projectInformations = await prisma.projectInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectInformationWithIdOnly = await prisma.projectInformation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectInformationFindManyArgs>(args?: SelectSubset<T, ProjectInformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectInformation.
     * @param {ProjectInformationCreateArgs} args - Arguments to create a ProjectInformation.
     * @example
     * // Create one ProjectInformation
     * const ProjectInformation = await prisma.projectInformation.create({
     *   data: {
     *     // ... data to create a ProjectInformation
     *   }
     * })
     * 
     */
    create<T extends ProjectInformationCreateArgs>(args: SelectSubset<T, ProjectInformationCreateArgs<ExtArgs>>): Prisma__ProjectInformationClient<$Result.GetResult<Prisma.$ProjectInformationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectInformations.
     * @param {ProjectInformationCreateManyArgs} args - Arguments to create many ProjectInformations.
     * @example
     * // Create many ProjectInformations
     * const projectInformation = await prisma.projectInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectInformationCreateManyArgs>(args?: SelectSubset<T, ProjectInformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectInformations and returns the data saved in the database.
     * @param {ProjectInformationCreateManyAndReturnArgs} args - Arguments to create many ProjectInformations.
     * @example
     * // Create many ProjectInformations
     * const projectInformation = await prisma.projectInformation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectInformations and only return the `id`
     * const projectInformationWithIdOnly = await prisma.projectInformation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectInformationCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectInformationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectInformationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectInformation.
     * @param {ProjectInformationDeleteArgs} args - Arguments to delete one ProjectInformation.
     * @example
     * // Delete one ProjectInformation
     * const ProjectInformation = await prisma.projectInformation.delete({
     *   where: {
     *     // ... filter to delete one ProjectInformation
     *   }
     * })
     * 
     */
    delete<T extends ProjectInformationDeleteArgs>(args: SelectSubset<T, ProjectInformationDeleteArgs<ExtArgs>>): Prisma__ProjectInformationClient<$Result.GetResult<Prisma.$ProjectInformationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectInformation.
     * @param {ProjectInformationUpdateArgs} args - Arguments to update one ProjectInformation.
     * @example
     * // Update one ProjectInformation
     * const projectInformation = await prisma.projectInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectInformationUpdateArgs>(args: SelectSubset<T, ProjectInformationUpdateArgs<ExtArgs>>): Prisma__ProjectInformationClient<$Result.GetResult<Prisma.$ProjectInformationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectInformations.
     * @param {ProjectInformationDeleteManyArgs} args - Arguments to filter ProjectInformations to delete.
     * @example
     * // Delete a few ProjectInformations
     * const { count } = await prisma.projectInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectInformationDeleteManyArgs>(args?: SelectSubset<T, ProjectInformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectInformations
     * const projectInformation = await prisma.projectInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectInformationUpdateManyArgs>(args: SelectSubset<T, ProjectInformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectInformations and returns the data updated in the database.
     * @param {ProjectInformationUpdateManyAndReturnArgs} args - Arguments to update many ProjectInformations.
     * @example
     * // Update many ProjectInformations
     * const projectInformation = await prisma.projectInformation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectInformations and only return the `id`
     * const projectInformationWithIdOnly = await prisma.projectInformation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectInformationUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectInformationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectInformationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectInformation.
     * @param {ProjectInformationUpsertArgs} args - Arguments to update or create a ProjectInformation.
     * @example
     * // Update or create a ProjectInformation
     * const projectInformation = await prisma.projectInformation.upsert({
     *   create: {
     *     // ... data to create a ProjectInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectInformation we want to update
     *   }
     * })
     */
    upsert<T extends ProjectInformationUpsertArgs>(args: SelectSubset<T, ProjectInformationUpsertArgs<ExtArgs>>): Prisma__ProjectInformationClient<$Result.GetResult<Prisma.$ProjectInformationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInformationCountArgs} args - Arguments to filter ProjectInformations to count.
     * @example
     * // Count the number of ProjectInformations
     * const count = await prisma.projectInformation.count({
     *   where: {
     *     // ... the filter for the ProjectInformations we want to count
     *   }
     * })
    **/
    count<T extends ProjectInformationCountArgs>(
      args?: Subset<T, ProjectInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectInformationAggregateArgs>(args: Subset<T, ProjectInformationAggregateArgs>): Prisma.PrismaPromise<GetProjectInformationAggregateType<T>>

    /**
     * Group by ProjectInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInformationGroupByArgs} args - Group by arguments.
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
      T extends ProjectInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectInformationGroupByArgs['orderBy'] }
        : { orderBy?: ProjectInformationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectInformation model
   */
  readonly fields: ProjectInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends WolfpackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WolfpackDefaultArgs<ExtArgs>>): Prisma__WolfpackClient<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectInformation model
   */ 
  interface ProjectInformationFieldRefs {
    readonly id: FieldRef<"ProjectInformation", 'Int'>
    readonly projectId: FieldRef<"ProjectInformation", 'String'>
    readonly projectName: FieldRef<"ProjectInformation", 'String'>
    readonly client: FieldRef<"ProjectInformation", 'String'>
    readonly address: FieldRef<"ProjectInformation", 'String'>
    readonly author: FieldRef<"ProjectInformation", 'String'>
    readonly buildingName: FieldRef<"ProjectInformation", 'String'>
    readonly issueDate: FieldRef<"ProjectInformation", 'String'>
    readonly location: FieldRef<"ProjectInformation", 'String'>
    readonly projectNumber: FieldRef<"ProjectInformation", 'String'>
    readonly organizationDescription: FieldRef<"ProjectInformation", 'String'>
    readonly organizationName: FieldRef<"ProjectInformation", 'String'>
    readonly status: FieldRef<"ProjectInformation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectInformation findUnique
   */
  export type ProjectInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInformation
     */
    select?: ProjectInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInformation
     */
    omit?: ProjectInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInformationInclude<ExtArgs> | null
    /**
     * Filter, which ProjectInformation to fetch.
     */
    where: ProjectInformationWhereUniqueInput
  }

  /**
   * ProjectInformation findUniqueOrThrow
   */
  export type ProjectInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInformation
     */
    select?: ProjectInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInformation
     */
    omit?: ProjectInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInformationInclude<ExtArgs> | null
    /**
     * Filter, which ProjectInformation to fetch.
     */
    where: ProjectInformationWhereUniqueInput
  }

  /**
   * ProjectInformation findFirst
   */
  export type ProjectInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInformation
     */
    select?: ProjectInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInformation
     */
    omit?: ProjectInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInformationInclude<ExtArgs> | null
    /**
     * Filter, which ProjectInformation to fetch.
     */
    where?: ProjectInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectInformations to fetch.
     */
    orderBy?: ProjectInformationOrderByWithRelationInput | ProjectInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectInformations.
     */
    cursor?: ProjectInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectInformations.
     */
    distinct?: ProjectInformationScalarFieldEnum | ProjectInformationScalarFieldEnum[]
  }

  /**
   * ProjectInformation findFirstOrThrow
   */
  export type ProjectInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInformation
     */
    select?: ProjectInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInformation
     */
    omit?: ProjectInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInformationInclude<ExtArgs> | null
    /**
     * Filter, which ProjectInformation to fetch.
     */
    where?: ProjectInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectInformations to fetch.
     */
    orderBy?: ProjectInformationOrderByWithRelationInput | ProjectInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectInformations.
     */
    cursor?: ProjectInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectInformations.
     */
    distinct?: ProjectInformationScalarFieldEnum | ProjectInformationScalarFieldEnum[]
  }

  /**
   * ProjectInformation findMany
   */
  export type ProjectInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInformation
     */
    select?: ProjectInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInformation
     */
    omit?: ProjectInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInformationInclude<ExtArgs> | null
    /**
     * Filter, which ProjectInformations to fetch.
     */
    where?: ProjectInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectInformations to fetch.
     */
    orderBy?: ProjectInformationOrderByWithRelationInput | ProjectInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectInformations.
     */
    cursor?: ProjectInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectInformations.
     */
    skip?: number
    distinct?: ProjectInformationScalarFieldEnum | ProjectInformationScalarFieldEnum[]
  }

  /**
   * ProjectInformation create
   */
  export type ProjectInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInformation
     */
    select?: ProjectInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInformation
     */
    omit?: ProjectInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInformationInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectInformation.
     */
    data: XOR<ProjectInformationCreateInput, ProjectInformationUncheckedCreateInput>
  }

  /**
   * ProjectInformation createMany
   */
  export type ProjectInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectInformations.
     */
    data: ProjectInformationCreateManyInput | ProjectInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectInformation createManyAndReturn
   */
  export type ProjectInformationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInformation
     */
    select?: ProjectInformationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInformation
     */
    omit?: ProjectInformationOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectInformations.
     */
    data: ProjectInformationCreateManyInput | ProjectInformationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInformationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectInformation update
   */
  export type ProjectInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInformation
     */
    select?: ProjectInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInformation
     */
    omit?: ProjectInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInformationInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectInformation.
     */
    data: XOR<ProjectInformationUpdateInput, ProjectInformationUncheckedUpdateInput>
    /**
     * Choose, which ProjectInformation to update.
     */
    where: ProjectInformationWhereUniqueInput
  }

  /**
   * ProjectInformation updateMany
   */
  export type ProjectInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectInformations.
     */
    data: XOR<ProjectInformationUpdateManyMutationInput, ProjectInformationUncheckedUpdateManyInput>
    /**
     * Filter which ProjectInformations to update
     */
    where?: ProjectInformationWhereInput
    /**
     * Limit how many ProjectInformations to update.
     */
    limit?: number
  }

  /**
   * ProjectInformation updateManyAndReturn
   */
  export type ProjectInformationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInformation
     */
    select?: ProjectInformationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInformation
     */
    omit?: ProjectInformationOmit<ExtArgs> | null
    /**
     * The data used to update ProjectInformations.
     */
    data: XOR<ProjectInformationUpdateManyMutationInput, ProjectInformationUncheckedUpdateManyInput>
    /**
     * Filter which ProjectInformations to update
     */
    where?: ProjectInformationWhereInput
    /**
     * Limit how many ProjectInformations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInformationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectInformation upsert
   */
  export type ProjectInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInformation
     */
    select?: ProjectInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInformation
     */
    omit?: ProjectInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInformationInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectInformation to update in case it exists.
     */
    where: ProjectInformationWhereUniqueInput
    /**
     * In case the ProjectInformation found by the `where` argument doesn't exist, create a new ProjectInformation with this data.
     */
    create: XOR<ProjectInformationCreateInput, ProjectInformationUncheckedCreateInput>
    /**
     * In case the ProjectInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectInformationUpdateInput, ProjectInformationUncheckedUpdateInput>
  }

  /**
   * ProjectInformation delete
   */
  export type ProjectInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInformation
     */
    select?: ProjectInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInformation
     */
    omit?: ProjectInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInformationInclude<ExtArgs> | null
    /**
     * Filter which ProjectInformation to delete.
     */
    where: ProjectInformationWhereUniqueInput
  }

  /**
   * ProjectInformation deleteMany
   */
  export type ProjectInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectInformations to delete
     */
    where?: ProjectInformationWhereInput
    /**
     * Limit how many ProjectInformations to delete.
     */
    limit?: number
  }

  /**
   * ProjectInformation without action
   */
  export type ProjectInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInformation
     */
    select?: ProjectInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInformation
     */
    omit?: ProjectInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInformationInclude<ExtArgs> | null
  }


  /**
   * Model ElementInformation
   */

  export type AggregateElementInformation = {
    _count: ElementInformationCountAggregateOutputType | null
    _avg: ElementInformationAvgAggregateOutputType | null
    _sum: ElementInformationSumAggregateOutputType | null
    _min: ElementInformationMinAggregateOutputType | null
    _max: ElementInformationMaxAggregateOutputType | null
  }

  export type ElementInformationAvgAggregateOutputType = {
    id: number | null
    idValue: number | null
  }

  export type ElementInformationSumAggregateOutputType = {
    id: number | null
    idValue: bigint | null
  }

  export type ElementInformationMinAggregateOutputType = {
    id: number | null
    uniqueElementId: string | null
    idValue: bigint | null
    elementVersionId: string | null
    familyName: string | null
    builtInCategory: string | null
    name: string | null
  }

  export type ElementInformationMaxAggregateOutputType = {
    id: number | null
    uniqueElementId: string | null
    idValue: bigint | null
    elementVersionId: string | null
    familyName: string | null
    builtInCategory: string | null
    name: string | null
  }

  export type ElementInformationCountAggregateOutputType = {
    id: number
    uniqueElementId: number
    idValue: number
    elementVersionId: number
    familyName: number
    builtInCategory: number
    name: number
    _all: number
  }


  export type ElementInformationAvgAggregateInputType = {
    id?: true
    idValue?: true
  }

  export type ElementInformationSumAggregateInputType = {
    id?: true
    idValue?: true
  }

  export type ElementInformationMinAggregateInputType = {
    id?: true
    uniqueElementId?: true
    idValue?: true
    elementVersionId?: true
    familyName?: true
    builtInCategory?: true
    name?: true
  }

  export type ElementInformationMaxAggregateInputType = {
    id?: true
    uniqueElementId?: true
    idValue?: true
    elementVersionId?: true
    familyName?: true
    builtInCategory?: true
    name?: true
  }

  export type ElementInformationCountAggregateInputType = {
    id?: true
    uniqueElementId?: true
    idValue?: true
    elementVersionId?: true
    familyName?: true
    builtInCategory?: true
    name?: true
    _all?: true
  }

  export type ElementInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ElementInformation to aggregate.
     */
    where?: ElementInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElementInformations to fetch.
     */
    orderBy?: ElementInformationOrderByWithRelationInput | ElementInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElementInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElementInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElementInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ElementInformations
    **/
    _count?: true | ElementInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ElementInformationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ElementInformationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElementInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElementInformationMaxAggregateInputType
  }

  export type GetElementInformationAggregateType<T extends ElementInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateElementInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElementInformation[P]>
      : GetScalarType<T[P], AggregateElementInformation[P]>
  }




  export type ElementInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElementInformationWhereInput
    orderBy?: ElementInformationOrderByWithAggregationInput | ElementInformationOrderByWithAggregationInput[]
    by: ElementInformationScalarFieldEnum[] | ElementInformationScalarFieldEnum
    having?: ElementInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElementInformationCountAggregateInputType | true
    _avg?: ElementInformationAvgAggregateInputType
    _sum?: ElementInformationSumAggregateInputType
    _min?: ElementInformationMinAggregateInputType
    _max?: ElementInformationMaxAggregateInputType
  }

  export type ElementInformationGroupByOutputType = {
    id: number
    uniqueElementId: string
    idValue: bigint
    elementVersionId: string
    familyName: string
    builtInCategory: string
    name: string
    _count: ElementInformationCountAggregateOutputType | null
    _avg: ElementInformationAvgAggregateOutputType | null
    _sum: ElementInformationSumAggregateOutputType | null
    _min: ElementInformationMinAggregateOutputType | null
    _max: ElementInformationMaxAggregateOutputType | null
  }

  type GetElementInformationGroupByPayload<T extends ElementInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElementInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElementInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElementInformationGroupByOutputType[P]>
            : GetScalarType<T[P], ElementInformationGroupByOutputType[P]>
        }
      >
    >


  export type ElementInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueElementId?: boolean
    idValue?: boolean
    elementVersionId?: boolean
    familyName?: boolean
    builtInCategory?: boolean
    name?: boolean
    wolfpackId?: boolean | WolfpackDefaultArgs<ExtArgs>
    Parameters?: boolean | ElementInformation$ParametersArgs<ExtArgs>
    _count?: boolean | ElementInformationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elementInformation"]>

  export type ElementInformationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueElementId?: boolean
    idValue?: boolean
    elementVersionId?: boolean
    familyName?: boolean
    builtInCategory?: boolean
    name?: boolean
    wolfpackId?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elementInformation"]>

  export type ElementInformationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueElementId?: boolean
    idValue?: boolean
    elementVersionId?: boolean
    familyName?: boolean
    builtInCategory?: boolean
    name?: boolean
    wolfpackId?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elementInformation"]>

  export type ElementInformationSelectScalar = {
    id?: boolean
    uniqueElementId?: boolean
    idValue?: boolean
    elementVersionId?: boolean
    familyName?: boolean
    builtInCategory?: boolean
    name?: boolean
  }

  export type ElementInformationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uniqueElementId" | "idValue" | "elementVersionId" | "familyName" | "builtInCategory" | "name", ExtArgs["result"]["elementInformation"]>
  export type ElementInformationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wolfpackId?: boolean | WolfpackDefaultArgs<ExtArgs>
    Parameters?: boolean | ElementInformation$ParametersArgs<ExtArgs>
    _count?: boolean | ElementInformationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ElementInformationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wolfpackId?: boolean | WolfpackDefaultArgs<ExtArgs>
  }
  export type ElementInformationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wolfpackId?: boolean | WolfpackDefaultArgs<ExtArgs>
  }

  export type $ElementInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ElementInformation"
    objects: {
      wolfpackId: Prisma.$WolfpackPayload<ExtArgs>
      Parameters: Prisma.$ParametersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uniqueElementId: string
      idValue: bigint
      elementVersionId: string
      familyName: string
      builtInCategory: string
      name: string
    }, ExtArgs["result"]["elementInformation"]>
    composites: {}
  }

  type ElementInformationGetPayload<S extends boolean | null | undefined | ElementInformationDefaultArgs> = $Result.GetResult<Prisma.$ElementInformationPayload, S>

  type ElementInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ElementInformationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElementInformationCountAggregateInputType | true
    }

  export interface ElementInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ElementInformation'], meta: { name: 'ElementInformation' } }
    /**
     * Find zero or one ElementInformation that matches the filter.
     * @param {ElementInformationFindUniqueArgs} args - Arguments to find a ElementInformation
     * @example
     * // Get one ElementInformation
     * const elementInformation = await prisma.elementInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElementInformationFindUniqueArgs>(args: SelectSubset<T, ElementInformationFindUniqueArgs<ExtArgs>>): Prisma__ElementInformationClient<$Result.GetResult<Prisma.$ElementInformationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ElementInformation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElementInformationFindUniqueOrThrowArgs} args - Arguments to find a ElementInformation
     * @example
     * // Get one ElementInformation
     * const elementInformation = await prisma.elementInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElementInformationFindUniqueOrThrowArgs>(args: SelectSubset<T, ElementInformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ElementInformationClient<$Result.GetResult<Prisma.$ElementInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ElementInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementInformationFindFirstArgs} args - Arguments to find a ElementInformation
     * @example
     * // Get one ElementInformation
     * const elementInformation = await prisma.elementInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElementInformationFindFirstArgs>(args?: SelectSubset<T, ElementInformationFindFirstArgs<ExtArgs>>): Prisma__ElementInformationClient<$Result.GetResult<Prisma.$ElementInformationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ElementInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementInformationFindFirstOrThrowArgs} args - Arguments to find a ElementInformation
     * @example
     * // Get one ElementInformation
     * const elementInformation = await prisma.elementInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElementInformationFindFirstOrThrowArgs>(args?: SelectSubset<T, ElementInformationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ElementInformationClient<$Result.GetResult<Prisma.$ElementInformationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ElementInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ElementInformations
     * const elementInformations = await prisma.elementInformation.findMany()
     * 
     * // Get first 10 ElementInformations
     * const elementInformations = await prisma.elementInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const elementInformationWithIdOnly = await prisma.elementInformation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ElementInformationFindManyArgs>(args?: SelectSubset<T, ElementInformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ElementInformation.
     * @param {ElementInformationCreateArgs} args - Arguments to create a ElementInformation.
     * @example
     * // Create one ElementInformation
     * const ElementInformation = await prisma.elementInformation.create({
     *   data: {
     *     // ... data to create a ElementInformation
     *   }
     * })
     * 
     */
    create<T extends ElementInformationCreateArgs>(args: SelectSubset<T, ElementInformationCreateArgs<ExtArgs>>): Prisma__ElementInformationClient<$Result.GetResult<Prisma.$ElementInformationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ElementInformations.
     * @param {ElementInformationCreateManyArgs} args - Arguments to create many ElementInformations.
     * @example
     * // Create many ElementInformations
     * const elementInformation = await prisma.elementInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ElementInformationCreateManyArgs>(args?: SelectSubset<T, ElementInformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ElementInformations and returns the data saved in the database.
     * @param {ElementInformationCreateManyAndReturnArgs} args - Arguments to create many ElementInformations.
     * @example
     * // Create many ElementInformations
     * const elementInformation = await prisma.elementInformation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ElementInformations and only return the `id`
     * const elementInformationWithIdOnly = await prisma.elementInformation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ElementInformationCreateManyAndReturnArgs>(args?: SelectSubset<T, ElementInformationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementInformationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ElementInformation.
     * @param {ElementInformationDeleteArgs} args - Arguments to delete one ElementInformation.
     * @example
     * // Delete one ElementInformation
     * const ElementInformation = await prisma.elementInformation.delete({
     *   where: {
     *     // ... filter to delete one ElementInformation
     *   }
     * })
     * 
     */
    delete<T extends ElementInformationDeleteArgs>(args: SelectSubset<T, ElementInformationDeleteArgs<ExtArgs>>): Prisma__ElementInformationClient<$Result.GetResult<Prisma.$ElementInformationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ElementInformation.
     * @param {ElementInformationUpdateArgs} args - Arguments to update one ElementInformation.
     * @example
     * // Update one ElementInformation
     * const elementInformation = await prisma.elementInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ElementInformationUpdateArgs>(args: SelectSubset<T, ElementInformationUpdateArgs<ExtArgs>>): Prisma__ElementInformationClient<$Result.GetResult<Prisma.$ElementInformationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ElementInformations.
     * @param {ElementInformationDeleteManyArgs} args - Arguments to filter ElementInformations to delete.
     * @example
     * // Delete a few ElementInformations
     * const { count } = await prisma.elementInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ElementInformationDeleteManyArgs>(args?: SelectSubset<T, ElementInformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ElementInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ElementInformations
     * const elementInformation = await prisma.elementInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ElementInformationUpdateManyArgs>(args: SelectSubset<T, ElementInformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ElementInformations and returns the data updated in the database.
     * @param {ElementInformationUpdateManyAndReturnArgs} args - Arguments to update many ElementInformations.
     * @example
     * // Update many ElementInformations
     * const elementInformation = await prisma.elementInformation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ElementInformations and only return the `id`
     * const elementInformationWithIdOnly = await prisma.elementInformation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ElementInformationUpdateManyAndReturnArgs>(args: SelectSubset<T, ElementInformationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementInformationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ElementInformation.
     * @param {ElementInformationUpsertArgs} args - Arguments to update or create a ElementInformation.
     * @example
     * // Update or create a ElementInformation
     * const elementInformation = await prisma.elementInformation.upsert({
     *   create: {
     *     // ... data to create a ElementInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ElementInformation we want to update
     *   }
     * })
     */
    upsert<T extends ElementInformationUpsertArgs>(args: SelectSubset<T, ElementInformationUpsertArgs<ExtArgs>>): Prisma__ElementInformationClient<$Result.GetResult<Prisma.$ElementInformationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ElementInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementInformationCountArgs} args - Arguments to filter ElementInformations to count.
     * @example
     * // Count the number of ElementInformations
     * const count = await prisma.elementInformation.count({
     *   where: {
     *     // ... the filter for the ElementInformations we want to count
     *   }
     * })
    **/
    count<T extends ElementInformationCountArgs>(
      args?: Subset<T, ElementInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElementInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ElementInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ElementInformationAggregateArgs>(args: Subset<T, ElementInformationAggregateArgs>): Prisma.PrismaPromise<GetElementInformationAggregateType<T>>

    /**
     * Group by ElementInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementInformationGroupByArgs} args - Group by arguments.
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
      T extends ElementInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElementInformationGroupByArgs['orderBy'] }
        : { orderBy?: ElementInformationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ElementInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElementInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ElementInformation model
   */
  readonly fields: ElementInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ElementInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElementInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wolfpackId<T extends WolfpackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WolfpackDefaultArgs<ExtArgs>>): Prisma__WolfpackClient<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Parameters<T extends ElementInformation$ParametersArgs<ExtArgs> = {}>(args?: Subset<T, ElementInformation$ParametersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParametersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ElementInformation model
   */ 
  interface ElementInformationFieldRefs {
    readonly id: FieldRef<"ElementInformation", 'Int'>
    readonly uniqueElementId: FieldRef<"ElementInformation", 'String'>
    readonly idValue: FieldRef<"ElementInformation", 'BigInt'>
    readonly elementVersionId: FieldRef<"ElementInformation", 'String'>
    readonly familyName: FieldRef<"ElementInformation", 'String'>
    readonly builtInCategory: FieldRef<"ElementInformation", 'String'>
    readonly name: FieldRef<"ElementInformation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ElementInformation findUnique
   */
  export type ElementInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementInformation
     */
    select?: ElementInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementInformation
     */
    omit?: ElementInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInformationInclude<ExtArgs> | null
    /**
     * Filter, which ElementInformation to fetch.
     */
    where: ElementInformationWhereUniqueInput
  }

  /**
   * ElementInformation findUniqueOrThrow
   */
  export type ElementInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementInformation
     */
    select?: ElementInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementInformation
     */
    omit?: ElementInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInformationInclude<ExtArgs> | null
    /**
     * Filter, which ElementInformation to fetch.
     */
    where: ElementInformationWhereUniqueInput
  }

  /**
   * ElementInformation findFirst
   */
  export type ElementInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementInformation
     */
    select?: ElementInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementInformation
     */
    omit?: ElementInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInformationInclude<ExtArgs> | null
    /**
     * Filter, which ElementInformation to fetch.
     */
    where?: ElementInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElementInformations to fetch.
     */
    orderBy?: ElementInformationOrderByWithRelationInput | ElementInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ElementInformations.
     */
    cursor?: ElementInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElementInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElementInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElementInformations.
     */
    distinct?: ElementInformationScalarFieldEnum | ElementInformationScalarFieldEnum[]
  }

  /**
   * ElementInformation findFirstOrThrow
   */
  export type ElementInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementInformation
     */
    select?: ElementInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementInformation
     */
    omit?: ElementInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInformationInclude<ExtArgs> | null
    /**
     * Filter, which ElementInformation to fetch.
     */
    where?: ElementInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElementInformations to fetch.
     */
    orderBy?: ElementInformationOrderByWithRelationInput | ElementInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ElementInformations.
     */
    cursor?: ElementInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElementInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElementInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElementInformations.
     */
    distinct?: ElementInformationScalarFieldEnum | ElementInformationScalarFieldEnum[]
  }

  /**
   * ElementInformation findMany
   */
  export type ElementInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementInformation
     */
    select?: ElementInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementInformation
     */
    omit?: ElementInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInformationInclude<ExtArgs> | null
    /**
     * Filter, which ElementInformations to fetch.
     */
    where?: ElementInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElementInformations to fetch.
     */
    orderBy?: ElementInformationOrderByWithRelationInput | ElementInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ElementInformations.
     */
    cursor?: ElementInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElementInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElementInformations.
     */
    skip?: number
    distinct?: ElementInformationScalarFieldEnum | ElementInformationScalarFieldEnum[]
  }

  /**
   * ElementInformation create
   */
  export type ElementInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementInformation
     */
    select?: ElementInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementInformation
     */
    omit?: ElementInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInformationInclude<ExtArgs> | null
    /**
     * The data needed to create a ElementInformation.
     */
    data: XOR<ElementInformationCreateInput, ElementInformationUncheckedCreateInput>
  }

  /**
   * ElementInformation createMany
   */
  export type ElementInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ElementInformations.
     */
    data: ElementInformationCreateManyInput | ElementInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ElementInformation createManyAndReturn
   */
  export type ElementInformationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementInformation
     */
    select?: ElementInformationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ElementInformation
     */
    omit?: ElementInformationOmit<ExtArgs> | null
    /**
     * The data used to create many ElementInformations.
     */
    data: ElementInformationCreateManyInput | ElementInformationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInformationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ElementInformation update
   */
  export type ElementInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementInformation
     */
    select?: ElementInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementInformation
     */
    omit?: ElementInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInformationInclude<ExtArgs> | null
    /**
     * The data needed to update a ElementInformation.
     */
    data: XOR<ElementInformationUpdateInput, ElementInformationUncheckedUpdateInput>
    /**
     * Choose, which ElementInformation to update.
     */
    where: ElementInformationWhereUniqueInput
  }

  /**
   * ElementInformation updateMany
   */
  export type ElementInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ElementInformations.
     */
    data: XOR<ElementInformationUpdateManyMutationInput, ElementInformationUncheckedUpdateManyInput>
    /**
     * Filter which ElementInformations to update
     */
    where?: ElementInformationWhereInput
    /**
     * Limit how many ElementInformations to update.
     */
    limit?: number
  }

  /**
   * ElementInformation updateManyAndReturn
   */
  export type ElementInformationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementInformation
     */
    select?: ElementInformationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ElementInformation
     */
    omit?: ElementInformationOmit<ExtArgs> | null
    /**
     * The data used to update ElementInformations.
     */
    data: XOR<ElementInformationUpdateManyMutationInput, ElementInformationUncheckedUpdateManyInput>
    /**
     * Filter which ElementInformations to update
     */
    where?: ElementInformationWhereInput
    /**
     * Limit how many ElementInformations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInformationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ElementInformation upsert
   */
  export type ElementInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementInformation
     */
    select?: ElementInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementInformation
     */
    omit?: ElementInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInformationInclude<ExtArgs> | null
    /**
     * The filter to search for the ElementInformation to update in case it exists.
     */
    where: ElementInformationWhereUniqueInput
    /**
     * In case the ElementInformation found by the `where` argument doesn't exist, create a new ElementInformation with this data.
     */
    create: XOR<ElementInformationCreateInput, ElementInformationUncheckedCreateInput>
    /**
     * In case the ElementInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElementInformationUpdateInput, ElementInformationUncheckedUpdateInput>
  }

  /**
   * ElementInformation delete
   */
  export type ElementInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementInformation
     */
    select?: ElementInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementInformation
     */
    omit?: ElementInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInformationInclude<ExtArgs> | null
    /**
     * Filter which ElementInformation to delete.
     */
    where: ElementInformationWhereUniqueInput
  }

  /**
   * ElementInformation deleteMany
   */
  export type ElementInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ElementInformations to delete
     */
    where?: ElementInformationWhereInput
    /**
     * Limit how many ElementInformations to delete.
     */
    limit?: number
  }

  /**
   * ElementInformation.Parameters
   */
  export type ElementInformation$ParametersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameters
     */
    select?: ParametersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameters
     */
    omit?: ParametersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametersInclude<ExtArgs> | null
    where?: ParametersWhereInput
    orderBy?: ParametersOrderByWithRelationInput | ParametersOrderByWithRelationInput[]
    cursor?: ParametersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParametersScalarFieldEnum | ParametersScalarFieldEnum[]
  }

  /**
   * ElementInformation without action
   */
  export type ElementInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementInformation
     */
    select?: ElementInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementInformation
     */
    omit?: ElementInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInformationInclude<ExtArgs> | null
  }


  /**
   * Model Parameters
   */

  export type AggregateParameters = {
    _count: ParametersCountAggregateOutputType | null
    _avg: ParametersAvgAggregateOutputType | null
    _sum: ParametersSumAggregateOutputType | null
    _min: ParametersMinAggregateOutputType | null
    _max: ParametersMaxAggregateOutputType | null
  }

  export type ParametersAvgAggregateOutputType = {
    id: number | null
  }

  export type ParametersSumAggregateOutputType = {
    id: number | null
  }

  export type ParametersMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    parameterGuid: string | null
    documentOwner: string | null
    storageType: $Enums.StorageType | null
    name: string | null
    value: string | null
    isReadOnly: boolean | null
    typeId: string | null
    dataType: string | null
    groupTypeId: string | null
    hasValue: boolean | null
    isShared: boolean | null
    isUserModifiable: boolean | null
    sharedParameterGuid: string | null
  }

  export type ParametersMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    parameterGuid: string | null
    documentOwner: string | null
    storageType: $Enums.StorageType | null
    name: string | null
    value: string | null
    isReadOnly: boolean | null
    typeId: string | null
    dataType: string | null
    groupTypeId: string | null
    hasValue: boolean | null
    isShared: boolean | null
    isUserModifiable: boolean | null
    sharedParameterGuid: string | null
  }

  export type ParametersCountAggregateOutputType = {
    id: number
    createdAt: number
    parameterGuid: number
    documentOwner: number
    storageType: number
    name: number
    value: number
    isReadOnly: number
    typeId: number
    dataType: number
    groupTypeId: number
    hasValue: number
    isShared: number
    isUserModifiable: number
    sharedParameterGuid: number
    _all: number
  }


  export type ParametersAvgAggregateInputType = {
    id?: true
  }

  export type ParametersSumAggregateInputType = {
    id?: true
  }

  export type ParametersMinAggregateInputType = {
    id?: true
    createdAt?: true
    parameterGuid?: true
    documentOwner?: true
    storageType?: true
    name?: true
    value?: true
    isReadOnly?: true
    typeId?: true
    dataType?: true
    groupTypeId?: true
    hasValue?: true
    isShared?: true
    isUserModifiable?: true
    sharedParameterGuid?: true
  }

  export type ParametersMaxAggregateInputType = {
    id?: true
    createdAt?: true
    parameterGuid?: true
    documentOwner?: true
    storageType?: true
    name?: true
    value?: true
    isReadOnly?: true
    typeId?: true
    dataType?: true
    groupTypeId?: true
    hasValue?: true
    isShared?: true
    isUserModifiable?: true
    sharedParameterGuid?: true
  }

  export type ParametersCountAggregateInputType = {
    id?: true
    createdAt?: true
    parameterGuid?: true
    documentOwner?: true
    storageType?: true
    name?: true
    value?: true
    isReadOnly?: true
    typeId?: true
    dataType?: true
    groupTypeId?: true
    hasValue?: true
    isShared?: true
    isUserModifiable?: true
    sharedParameterGuid?: true
    _all?: true
  }

  export type ParametersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parameters to aggregate.
     */
    where?: ParametersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parameters to fetch.
     */
    orderBy?: ParametersOrderByWithRelationInput | ParametersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParametersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parameters
    **/
    _count?: true | ParametersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParametersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParametersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParametersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParametersMaxAggregateInputType
  }

  export type GetParametersAggregateType<T extends ParametersAggregateArgs> = {
        [P in keyof T & keyof AggregateParameters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParameters[P]>
      : GetScalarType<T[P], AggregateParameters[P]>
  }




  export type ParametersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParametersWhereInput
    orderBy?: ParametersOrderByWithAggregationInput | ParametersOrderByWithAggregationInput[]
    by: ParametersScalarFieldEnum[] | ParametersScalarFieldEnum
    having?: ParametersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParametersCountAggregateInputType | true
    _avg?: ParametersAvgAggregateInputType
    _sum?: ParametersSumAggregateInputType
    _min?: ParametersMinAggregateInputType
    _max?: ParametersMaxAggregateInputType
  }

  export type ParametersGroupByOutputType = {
    id: number
    createdAt: Date
    parameterGuid: string
    documentOwner: string
    storageType: $Enums.StorageType
    name: string
    value: string
    isReadOnly: boolean
    typeId: string
    dataType: string
    groupTypeId: string
    hasValue: boolean
    isShared: boolean
    isUserModifiable: boolean
    sharedParameterGuid: string
    _count: ParametersCountAggregateOutputType | null
    _avg: ParametersAvgAggregateOutputType | null
    _sum: ParametersSumAggregateOutputType | null
    _min: ParametersMinAggregateOutputType | null
    _max: ParametersMaxAggregateOutputType | null
  }

  type GetParametersGroupByPayload<T extends ParametersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParametersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParametersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParametersGroupByOutputType[P]>
            : GetScalarType<T[P], ParametersGroupByOutputType[P]>
        }
      >
    >


  export type ParametersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    parameterGuid?: boolean
    documentOwner?: boolean
    storageType?: boolean
    name?: boolean
    value?: boolean
    isReadOnly?: boolean
    typeId?: boolean
    dataType?: boolean
    groupTypeId?: boolean
    hasValue?: boolean
    isShared?: boolean
    isUserModifiable?: boolean
    sharedParameterGuid?: boolean
    parentElementInfo?: boolean | ElementInformationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parameters"]>

  export type ParametersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    parameterGuid?: boolean
    documentOwner?: boolean
    storageType?: boolean
    name?: boolean
    value?: boolean
    isReadOnly?: boolean
    typeId?: boolean
    dataType?: boolean
    groupTypeId?: boolean
    hasValue?: boolean
    isShared?: boolean
    isUserModifiable?: boolean
    sharedParameterGuid?: boolean
    parentElementInfo?: boolean | ElementInformationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parameters"]>

  export type ParametersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    parameterGuid?: boolean
    documentOwner?: boolean
    storageType?: boolean
    name?: boolean
    value?: boolean
    isReadOnly?: boolean
    typeId?: boolean
    dataType?: boolean
    groupTypeId?: boolean
    hasValue?: boolean
    isShared?: boolean
    isUserModifiable?: boolean
    sharedParameterGuid?: boolean
    parentElementInfo?: boolean | ElementInformationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parameters"]>

  export type ParametersSelectScalar = {
    id?: boolean
    createdAt?: boolean
    parameterGuid?: boolean
    documentOwner?: boolean
    storageType?: boolean
    name?: boolean
    value?: boolean
    isReadOnly?: boolean
    typeId?: boolean
    dataType?: boolean
    groupTypeId?: boolean
    hasValue?: boolean
    isShared?: boolean
    isUserModifiable?: boolean
    sharedParameterGuid?: boolean
  }

  export type ParametersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "parameterGuid" | "documentOwner" | "storageType" | "name" | "value" | "isReadOnly" | "typeId" | "dataType" | "groupTypeId" | "hasValue" | "isShared" | "isUserModifiable" | "sharedParameterGuid", ExtArgs["result"]["parameters"]>
  export type ParametersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentElementInfo?: boolean | ElementInformationDefaultArgs<ExtArgs>
  }
  export type ParametersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentElementInfo?: boolean | ElementInformationDefaultArgs<ExtArgs>
  }
  export type ParametersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentElementInfo?: boolean | ElementInformationDefaultArgs<ExtArgs>
  }

  export type $ParametersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parameters"
    objects: {
      parentElementInfo: Prisma.$ElementInformationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      parameterGuid: string
      documentOwner: string
      storageType: $Enums.StorageType
      name: string
      value: string
      isReadOnly: boolean
      typeId: string
      dataType: string
      groupTypeId: string
      hasValue: boolean
      isShared: boolean
      isUserModifiable: boolean
      sharedParameterGuid: string
    }, ExtArgs["result"]["parameters"]>
    composites: {}
  }

  type ParametersGetPayload<S extends boolean | null | undefined | ParametersDefaultArgs> = $Result.GetResult<Prisma.$ParametersPayload, S>

  type ParametersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParametersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParametersCountAggregateInputType | true
    }

  export interface ParametersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parameters'], meta: { name: 'Parameters' } }
    /**
     * Find zero or one Parameters that matches the filter.
     * @param {ParametersFindUniqueArgs} args - Arguments to find a Parameters
     * @example
     * // Get one Parameters
     * const parameters = await prisma.parameters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParametersFindUniqueArgs>(args: SelectSubset<T, ParametersFindUniqueArgs<ExtArgs>>): Prisma__ParametersClient<$Result.GetResult<Prisma.$ParametersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parameters that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParametersFindUniqueOrThrowArgs} args - Arguments to find a Parameters
     * @example
     * // Get one Parameters
     * const parameters = await prisma.parameters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParametersFindUniqueOrThrowArgs>(args: SelectSubset<T, ParametersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParametersClient<$Result.GetResult<Prisma.$ParametersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parameters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametersFindFirstArgs} args - Arguments to find a Parameters
     * @example
     * // Get one Parameters
     * const parameters = await prisma.parameters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParametersFindFirstArgs>(args?: SelectSubset<T, ParametersFindFirstArgs<ExtArgs>>): Prisma__ParametersClient<$Result.GetResult<Prisma.$ParametersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parameters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametersFindFirstOrThrowArgs} args - Arguments to find a Parameters
     * @example
     * // Get one Parameters
     * const parameters = await prisma.parameters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParametersFindFirstOrThrowArgs>(args?: SelectSubset<T, ParametersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParametersClient<$Result.GetResult<Prisma.$ParametersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parameters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parameters
     * const parameters = await prisma.parameters.findMany()
     * 
     * // Get first 10 Parameters
     * const parameters = await prisma.parameters.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parametersWithIdOnly = await prisma.parameters.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParametersFindManyArgs>(args?: SelectSubset<T, ParametersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParametersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parameters.
     * @param {ParametersCreateArgs} args - Arguments to create a Parameters.
     * @example
     * // Create one Parameters
     * const Parameters = await prisma.parameters.create({
     *   data: {
     *     // ... data to create a Parameters
     *   }
     * })
     * 
     */
    create<T extends ParametersCreateArgs>(args: SelectSubset<T, ParametersCreateArgs<ExtArgs>>): Prisma__ParametersClient<$Result.GetResult<Prisma.$ParametersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parameters.
     * @param {ParametersCreateManyArgs} args - Arguments to create many Parameters.
     * @example
     * // Create many Parameters
     * const parameters = await prisma.parameters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParametersCreateManyArgs>(args?: SelectSubset<T, ParametersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parameters and returns the data saved in the database.
     * @param {ParametersCreateManyAndReturnArgs} args - Arguments to create many Parameters.
     * @example
     * // Create many Parameters
     * const parameters = await prisma.parameters.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parameters and only return the `id`
     * const parametersWithIdOnly = await prisma.parameters.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParametersCreateManyAndReturnArgs>(args?: SelectSubset<T, ParametersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParametersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parameters.
     * @param {ParametersDeleteArgs} args - Arguments to delete one Parameters.
     * @example
     * // Delete one Parameters
     * const Parameters = await prisma.parameters.delete({
     *   where: {
     *     // ... filter to delete one Parameters
     *   }
     * })
     * 
     */
    delete<T extends ParametersDeleteArgs>(args: SelectSubset<T, ParametersDeleteArgs<ExtArgs>>): Prisma__ParametersClient<$Result.GetResult<Prisma.$ParametersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parameters.
     * @param {ParametersUpdateArgs} args - Arguments to update one Parameters.
     * @example
     * // Update one Parameters
     * const parameters = await prisma.parameters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParametersUpdateArgs>(args: SelectSubset<T, ParametersUpdateArgs<ExtArgs>>): Prisma__ParametersClient<$Result.GetResult<Prisma.$ParametersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parameters.
     * @param {ParametersDeleteManyArgs} args - Arguments to filter Parameters to delete.
     * @example
     * // Delete a few Parameters
     * const { count } = await prisma.parameters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParametersDeleteManyArgs>(args?: SelectSubset<T, ParametersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parameters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parameters
     * const parameters = await prisma.parameters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParametersUpdateManyArgs>(args: SelectSubset<T, ParametersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parameters and returns the data updated in the database.
     * @param {ParametersUpdateManyAndReturnArgs} args - Arguments to update many Parameters.
     * @example
     * // Update many Parameters
     * const parameters = await prisma.parameters.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parameters and only return the `id`
     * const parametersWithIdOnly = await prisma.parameters.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParametersUpdateManyAndReturnArgs>(args: SelectSubset<T, ParametersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParametersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parameters.
     * @param {ParametersUpsertArgs} args - Arguments to update or create a Parameters.
     * @example
     * // Update or create a Parameters
     * const parameters = await prisma.parameters.upsert({
     *   create: {
     *     // ... data to create a Parameters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parameters we want to update
     *   }
     * })
     */
    upsert<T extends ParametersUpsertArgs>(args: SelectSubset<T, ParametersUpsertArgs<ExtArgs>>): Prisma__ParametersClient<$Result.GetResult<Prisma.$ParametersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parameters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametersCountArgs} args - Arguments to filter Parameters to count.
     * @example
     * // Count the number of Parameters
     * const count = await prisma.parameters.count({
     *   where: {
     *     // ... the filter for the Parameters we want to count
     *   }
     * })
    **/
    count<T extends ParametersCountArgs>(
      args?: Subset<T, ParametersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParametersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parameters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParametersAggregateArgs>(args: Subset<T, ParametersAggregateArgs>): Prisma.PrismaPromise<GetParametersAggregateType<T>>

    /**
     * Group by Parameters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametersGroupByArgs} args - Group by arguments.
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
      T extends ParametersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParametersGroupByArgs['orderBy'] }
        : { orderBy?: ParametersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParametersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParametersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parameters model
   */
  readonly fields: ParametersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parameters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParametersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parentElementInfo<T extends ElementInformationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElementInformationDefaultArgs<ExtArgs>>): Prisma__ElementInformationClient<$Result.GetResult<Prisma.$ElementInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Parameters model
   */ 
  interface ParametersFieldRefs {
    readonly id: FieldRef<"Parameters", 'Int'>
    readonly createdAt: FieldRef<"Parameters", 'DateTime'>
    readonly parameterGuid: FieldRef<"Parameters", 'String'>
    readonly documentOwner: FieldRef<"Parameters", 'String'>
    readonly storageType: FieldRef<"Parameters", 'StorageType'>
    readonly name: FieldRef<"Parameters", 'String'>
    readonly value: FieldRef<"Parameters", 'String'>
    readonly isReadOnly: FieldRef<"Parameters", 'Boolean'>
    readonly typeId: FieldRef<"Parameters", 'String'>
    readonly dataType: FieldRef<"Parameters", 'String'>
    readonly groupTypeId: FieldRef<"Parameters", 'String'>
    readonly hasValue: FieldRef<"Parameters", 'Boolean'>
    readonly isShared: FieldRef<"Parameters", 'Boolean'>
    readonly isUserModifiable: FieldRef<"Parameters", 'Boolean'>
    readonly sharedParameterGuid: FieldRef<"Parameters", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Parameters findUnique
   */
  export type ParametersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameters
     */
    select?: ParametersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameters
     */
    omit?: ParametersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametersInclude<ExtArgs> | null
    /**
     * Filter, which Parameters to fetch.
     */
    where: ParametersWhereUniqueInput
  }

  /**
   * Parameters findUniqueOrThrow
   */
  export type ParametersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameters
     */
    select?: ParametersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameters
     */
    omit?: ParametersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametersInclude<ExtArgs> | null
    /**
     * Filter, which Parameters to fetch.
     */
    where: ParametersWhereUniqueInput
  }

  /**
   * Parameters findFirst
   */
  export type ParametersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameters
     */
    select?: ParametersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameters
     */
    omit?: ParametersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametersInclude<ExtArgs> | null
    /**
     * Filter, which Parameters to fetch.
     */
    where?: ParametersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parameters to fetch.
     */
    orderBy?: ParametersOrderByWithRelationInput | ParametersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parameters.
     */
    cursor?: ParametersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parameters.
     */
    distinct?: ParametersScalarFieldEnum | ParametersScalarFieldEnum[]
  }

  /**
   * Parameters findFirstOrThrow
   */
  export type ParametersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameters
     */
    select?: ParametersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameters
     */
    omit?: ParametersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametersInclude<ExtArgs> | null
    /**
     * Filter, which Parameters to fetch.
     */
    where?: ParametersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parameters to fetch.
     */
    orderBy?: ParametersOrderByWithRelationInput | ParametersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parameters.
     */
    cursor?: ParametersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parameters.
     */
    distinct?: ParametersScalarFieldEnum | ParametersScalarFieldEnum[]
  }

  /**
   * Parameters findMany
   */
  export type ParametersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameters
     */
    select?: ParametersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameters
     */
    omit?: ParametersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametersInclude<ExtArgs> | null
    /**
     * Filter, which Parameters to fetch.
     */
    where?: ParametersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parameters to fetch.
     */
    orderBy?: ParametersOrderByWithRelationInput | ParametersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parameters.
     */
    cursor?: ParametersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parameters.
     */
    skip?: number
    distinct?: ParametersScalarFieldEnum | ParametersScalarFieldEnum[]
  }

  /**
   * Parameters create
   */
  export type ParametersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameters
     */
    select?: ParametersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameters
     */
    omit?: ParametersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametersInclude<ExtArgs> | null
    /**
     * The data needed to create a Parameters.
     */
    data: XOR<ParametersCreateInput, ParametersUncheckedCreateInput>
  }

  /**
   * Parameters createMany
   */
  export type ParametersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parameters.
     */
    data: ParametersCreateManyInput | ParametersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parameters createManyAndReturn
   */
  export type ParametersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameters
     */
    select?: ParametersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parameters
     */
    omit?: ParametersOmit<ExtArgs> | null
    /**
     * The data used to create many Parameters.
     */
    data: ParametersCreateManyInput | ParametersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parameters update
   */
  export type ParametersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameters
     */
    select?: ParametersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameters
     */
    omit?: ParametersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametersInclude<ExtArgs> | null
    /**
     * The data needed to update a Parameters.
     */
    data: XOR<ParametersUpdateInput, ParametersUncheckedUpdateInput>
    /**
     * Choose, which Parameters to update.
     */
    where: ParametersWhereUniqueInput
  }

  /**
   * Parameters updateMany
   */
  export type ParametersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parameters.
     */
    data: XOR<ParametersUpdateManyMutationInput, ParametersUncheckedUpdateManyInput>
    /**
     * Filter which Parameters to update
     */
    where?: ParametersWhereInput
    /**
     * Limit how many Parameters to update.
     */
    limit?: number
  }

  /**
   * Parameters updateManyAndReturn
   */
  export type ParametersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameters
     */
    select?: ParametersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parameters
     */
    omit?: ParametersOmit<ExtArgs> | null
    /**
     * The data used to update Parameters.
     */
    data: XOR<ParametersUpdateManyMutationInput, ParametersUncheckedUpdateManyInput>
    /**
     * Filter which Parameters to update
     */
    where?: ParametersWhereInput
    /**
     * Limit how many Parameters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parameters upsert
   */
  export type ParametersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameters
     */
    select?: ParametersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameters
     */
    omit?: ParametersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametersInclude<ExtArgs> | null
    /**
     * The filter to search for the Parameters to update in case it exists.
     */
    where: ParametersWhereUniqueInput
    /**
     * In case the Parameters found by the `where` argument doesn't exist, create a new Parameters with this data.
     */
    create: XOR<ParametersCreateInput, ParametersUncheckedCreateInput>
    /**
     * In case the Parameters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParametersUpdateInput, ParametersUncheckedUpdateInput>
  }

  /**
   * Parameters delete
   */
  export type ParametersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameters
     */
    select?: ParametersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameters
     */
    omit?: ParametersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametersInclude<ExtArgs> | null
    /**
     * Filter which Parameters to delete.
     */
    where: ParametersWhereUniqueInput
  }

  /**
   * Parameters deleteMany
   */
  export type ParametersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parameters to delete
     */
    where?: ParametersWhereInput
    /**
     * Limit how many Parameters to delete.
     */
    limit?: number
  }

  /**
   * Parameters without action
   */
  export type ParametersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameters
     */
    select?: ParametersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameters
     */
    omit?: ParametersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametersInclude<ExtArgs> | null
  }


  /**
   * Model DocumentInformation
   */

  export type AggregateDocumentInformation = {
    _count: DocumentInformationCountAggregateOutputType | null
    _avg: DocumentInformationAvgAggregateOutputType | null
    _sum: DocumentInformationSumAggregateOutputType | null
    _min: DocumentInformationMinAggregateOutputType | null
    _max: DocumentInformationMaxAggregateOutputType | null
  }

  export type DocumentInformationAvgAggregateOutputType = {
    id: number | null
    saveCount: number | null
  }

  export type DocumentInformationSumAggregateOutputType = {
    id: number | null
    saveCount: number | null
  }

  export type DocumentInformationMinAggregateOutputType = {
    id: number | null
    documentId: string | null
    name: string | null
    path: string | null
    uuid: string | null
    saveCount: number | null
  }

  export type DocumentInformationMaxAggregateOutputType = {
    id: number | null
    documentId: string | null
    name: string | null
    path: string | null
    uuid: string | null
    saveCount: number | null
  }

  export type DocumentInformationCountAggregateOutputType = {
    id: number
    documentId: number
    name: number
    path: number
    uuid: number
    saveCount: number
    _all: number
  }


  export type DocumentInformationAvgAggregateInputType = {
    id?: true
    saveCount?: true
  }

  export type DocumentInformationSumAggregateInputType = {
    id?: true
    saveCount?: true
  }

  export type DocumentInformationMinAggregateInputType = {
    id?: true
    documentId?: true
    name?: true
    path?: true
    uuid?: true
    saveCount?: true
  }

  export type DocumentInformationMaxAggregateInputType = {
    id?: true
    documentId?: true
    name?: true
    path?: true
    uuid?: true
    saveCount?: true
  }

  export type DocumentInformationCountAggregateInputType = {
    id?: true
    documentId?: true
    name?: true
    path?: true
    uuid?: true
    saveCount?: true
    _all?: true
  }

  export type DocumentInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentInformation to aggregate.
     */
    where?: DocumentInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentInformations to fetch.
     */
    orderBy?: DocumentInformationOrderByWithRelationInput | DocumentInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentInformations
    **/
    _count?: true | DocumentInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentInformationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentInformationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentInformationMaxAggregateInputType
  }

  export type GetDocumentInformationAggregateType<T extends DocumentInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentInformation[P]>
      : GetScalarType<T[P], AggregateDocumentInformation[P]>
  }




  export type DocumentInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentInformationWhereInput
    orderBy?: DocumentInformationOrderByWithAggregationInput | DocumentInformationOrderByWithAggregationInput[]
    by: DocumentInformationScalarFieldEnum[] | DocumentInformationScalarFieldEnum
    having?: DocumentInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentInformationCountAggregateInputType | true
    _avg?: DocumentInformationAvgAggregateInputType
    _sum?: DocumentInformationSumAggregateInputType
    _min?: DocumentInformationMinAggregateInputType
    _max?: DocumentInformationMaxAggregateInputType
  }

  export type DocumentInformationGroupByOutputType = {
    id: number
    documentId: string
    name: string
    path: string
    uuid: string
    saveCount: number
    _count: DocumentInformationCountAggregateOutputType | null
    _avg: DocumentInformationAvgAggregateOutputType | null
    _sum: DocumentInformationSumAggregateOutputType | null
    _min: DocumentInformationMinAggregateOutputType | null
    _max: DocumentInformationMaxAggregateOutputType | null
  }

  type GetDocumentInformationGroupByPayload<T extends DocumentInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentInformationGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentInformationGroupByOutputType[P]>
        }
      >
    >


  export type DocumentInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    name?: boolean
    path?: boolean
    uuid?: boolean
    saveCount?: boolean
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentInformation"]>

  export type DocumentInformationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    name?: boolean
    path?: boolean
    uuid?: boolean
    saveCount?: boolean
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentInformation"]>

  export type DocumentInformationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    name?: boolean
    path?: boolean
    uuid?: boolean
    saveCount?: boolean
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentInformation"]>

  export type DocumentInformationSelectScalar = {
    id?: boolean
    documentId?: boolean
    name?: boolean
    path?: boolean
    uuid?: boolean
    saveCount?: boolean
  }

  export type DocumentInformationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "name" | "path" | "uuid" | "saveCount", ExtArgs["result"]["documentInformation"]>
  export type DocumentInformationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }
  export type DocumentInformationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }
  export type DocumentInformationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }

  export type $DocumentInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentInformation"
    objects: {
      document: Prisma.$WolfpackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentId: string
      name: string
      path: string
      uuid: string
      saveCount: number
    }, ExtArgs["result"]["documentInformation"]>
    composites: {}
  }

  type DocumentInformationGetPayload<S extends boolean | null | undefined | DocumentInformationDefaultArgs> = $Result.GetResult<Prisma.$DocumentInformationPayload, S>

  type DocumentInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentInformationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentInformationCountAggregateInputType | true
    }

  export interface DocumentInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentInformation'], meta: { name: 'DocumentInformation' } }
    /**
     * Find zero or one DocumentInformation that matches the filter.
     * @param {DocumentInformationFindUniqueArgs} args - Arguments to find a DocumentInformation
     * @example
     * // Get one DocumentInformation
     * const documentInformation = await prisma.documentInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentInformationFindUniqueArgs>(args: SelectSubset<T, DocumentInformationFindUniqueArgs<ExtArgs>>): Prisma__DocumentInformationClient<$Result.GetResult<Prisma.$DocumentInformationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentInformation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentInformationFindUniqueOrThrowArgs} args - Arguments to find a DocumentInformation
     * @example
     * // Get one DocumentInformation
     * const documentInformation = await prisma.documentInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentInformationFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentInformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentInformationClient<$Result.GetResult<Prisma.$DocumentInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentInformationFindFirstArgs} args - Arguments to find a DocumentInformation
     * @example
     * // Get one DocumentInformation
     * const documentInformation = await prisma.documentInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentInformationFindFirstArgs>(args?: SelectSubset<T, DocumentInformationFindFirstArgs<ExtArgs>>): Prisma__DocumentInformationClient<$Result.GetResult<Prisma.$DocumentInformationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentInformationFindFirstOrThrowArgs} args - Arguments to find a DocumentInformation
     * @example
     * // Get one DocumentInformation
     * const documentInformation = await prisma.documentInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentInformationFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentInformationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentInformationClient<$Result.GetResult<Prisma.$DocumentInformationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentInformations
     * const documentInformations = await prisma.documentInformation.findMany()
     * 
     * // Get first 10 DocumentInformations
     * const documentInformations = await prisma.documentInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentInformationWithIdOnly = await prisma.documentInformation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentInformationFindManyArgs>(args?: SelectSubset<T, DocumentInformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentInformation.
     * @param {DocumentInformationCreateArgs} args - Arguments to create a DocumentInformation.
     * @example
     * // Create one DocumentInformation
     * const DocumentInformation = await prisma.documentInformation.create({
     *   data: {
     *     // ... data to create a DocumentInformation
     *   }
     * })
     * 
     */
    create<T extends DocumentInformationCreateArgs>(args: SelectSubset<T, DocumentInformationCreateArgs<ExtArgs>>): Prisma__DocumentInformationClient<$Result.GetResult<Prisma.$DocumentInformationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentInformations.
     * @param {DocumentInformationCreateManyArgs} args - Arguments to create many DocumentInformations.
     * @example
     * // Create many DocumentInformations
     * const documentInformation = await prisma.documentInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentInformationCreateManyArgs>(args?: SelectSubset<T, DocumentInformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentInformations and returns the data saved in the database.
     * @param {DocumentInformationCreateManyAndReturnArgs} args - Arguments to create many DocumentInformations.
     * @example
     * // Create many DocumentInformations
     * const documentInformation = await prisma.documentInformation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentInformations and only return the `id`
     * const documentInformationWithIdOnly = await prisma.documentInformation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentInformationCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentInformationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentInformationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentInformation.
     * @param {DocumentInformationDeleteArgs} args - Arguments to delete one DocumentInformation.
     * @example
     * // Delete one DocumentInformation
     * const DocumentInformation = await prisma.documentInformation.delete({
     *   where: {
     *     // ... filter to delete one DocumentInformation
     *   }
     * })
     * 
     */
    delete<T extends DocumentInformationDeleteArgs>(args: SelectSubset<T, DocumentInformationDeleteArgs<ExtArgs>>): Prisma__DocumentInformationClient<$Result.GetResult<Prisma.$DocumentInformationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentInformation.
     * @param {DocumentInformationUpdateArgs} args - Arguments to update one DocumentInformation.
     * @example
     * // Update one DocumentInformation
     * const documentInformation = await prisma.documentInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentInformationUpdateArgs>(args: SelectSubset<T, DocumentInformationUpdateArgs<ExtArgs>>): Prisma__DocumentInformationClient<$Result.GetResult<Prisma.$DocumentInformationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentInformations.
     * @param {DocumentInformationDeleteManyArgs} args - Arguments to filter DocumentInformations to delete.
     * @example
     * // Delete a few DocumentInformations
     * const { count } = await prisma.documentInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentInformationDeleteManyArgs>(args?: SelectSubset<T, DocumentInformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentInformations
     * const documentInformation = await prisma.documentInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentInformationUpdateManyArgs>(args: SelectSubset<T, DocumentInformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentInformations and returns the data updated in the database.
     * @param {DocumentInformationUpdateManyAndReturnArgs} args - Arguments to update many DocumentInformations.
     * @example
     * // Update many DocumentInformations
     * const documentInformation = await prisma.documentInformation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentInformations and only return the `id`
     * const documentInformationWithIdOnly = await prisma.documentInformation.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentInformationUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentInformationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentInformationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentInformation.
     * @param {DocumentInformationUpsertArgs} args - Arguments to update or create a DocumentInformation.
     * @example
     * // Update or create a DocumentInformation
     * const documentInformation = await prisma.documentInformation.upsert({
     *   create: {
     *     // ... data to create a DocumentInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentInformation we want to update
     *   }
     * })
     */
    upsert<T extends DocumentInformationUpsertArgs>(args: SelectSubset<T, DocumentInformationUpsertArgs<ExtArgs>>): Prisma__DocumentInformationClient<$Result.GetResult<Prisma.$DocumentInformationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentInformationCountArgs} args - Arguments to filter DocumentInformations to count.
     * @example
     * // Count the number of DocumentInformations
     * const count = await prisma.documentInformation.count({
     *   where: {
     *     // ... the filter for the DocumentInformations we want to count
     *   }
     * })
    **/
    count<T extends DocumentInformationCountArgs>(
      args?: Subset<T, DocumentInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentInformationAggregateArgs>(args: Subset<T, DocumentInformationAggregateArgs>): Prisma.PrismaPromise<GetDocumentInformationAggregateType<T>>

    /**
     * Group by DocumentInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentInformationGroupByArgs} args - Group by arguments.
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
      T extends DocumentInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentInformationGroupByArgs['orderBy'] }
        : { orderBy?: DocumentInformationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentInformation model
   */
  readonly fields: DocumentInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends WolfpackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WolfpackDefaultArgs<ExtArgs>>): Prisma__WolfpackClient<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DocumentInformation model
   */ 
  interface DocumentInformationFieldRefs {
    readonly id: FieldRef<"DocumentInformation", 'Int'>
    readonly documentId: FieldRef<"DocumentInformation", 'String'>
    readonly name: FieldRef<"DocumentInformation", 'String'>
    readonly path: FieldRef<"DocumentInformation", 'String'>
    readonly uuid: FieldRef<"DocumentInformation", 'String'>
    readonly saveCount: FieldRef<"DocumentInformation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DocumentInformation findUnique
   */
  export type DocumentInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentInformation
     */
    select?: DocumentInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentInformation
     */
    omit?: DocumentInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInformationInclude<ExtArgs> | null
    /**
     * Filter, which DocumentInformation to fetch.
     */
    where: DocumentInformationWhereUniqueInput
  }

  /**
   * DocumentInformation findUniqueOrThrow
   */
  export type DocumentInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentInformation
     */
    select?: DocumentInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentInformation
     */
    omit?: DocumentInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInformationInclude<ExtArgs> | null
    /**
     * Filter, which DocumentInformation to fetch.
     */
    where: DocumentInformationWhereUniqueInput
  }

  /**
   * DocumentInformation findFirst
   */
  export type DocumentInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentInformation
     */
    select?: DocumentInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentInformation
     */
    omit?: DocumentInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInformationInclude<ExtArgs> | null
    /**
     * Filter, which DocumentInformation to fetch.
     */
    where?: DocumentInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentInformations to fetch.
     */
    orderBy?: DocumentInformationOrderByWithRelationInput | DocumentInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentInformations.
     */
    cursor?: DocumentInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentInformations.
     */
    distinct?: DocumentInformationScalarFieldEnum | DocumentInformationScalarFieldEnum[]
  }

  /**
   * DocumentInformation findFirstOrThrow
   */
  export type DocumentInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentInformation
     */
    select?: DocumentInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentInformation
     */
    omit?: DocumentInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInformationInclude<ExtArgs> | null
    /**
     * Filter, which DocumentInformation to fetch.
     */
    where?: DocumentInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentInformations to fetch.
     */
    orderBy?: DocumentInformationOrderByWithRelationInput | DocumentInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentInformations.
     */
    cursor?: DocumentInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentInformations.
     */
    distinct?: DocumentInformationScalarFieldEnum | DocumentInformationScalarFieldEnum[]
  }

  /**
   * DocumentInformation findMany
   */
  export type DocumentInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentInformation
     */
    select?: DocumentInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentInformation
     */
    omit?: DocumentInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInformationInclude<ExtArgs> | null
    /**
     * Filter, which DocumentInformations to fetch.
     */
    where?: DocumentInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentInformations to fetch.
     */
    orderBy?: DocumentInformationOrderByWithRelationInput | DocumentInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentInformations.
     */
    cursor?: DocumentInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentInformations.
     */
    skip?: number
    distinct?: DocumentInformationScalarFieldEnum | DocumentInformationScalarFieldEnum[]
  }

  /**
   * DocumentInformation create
   */
  export type DocumentInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentInformation
     */
    select?: DocumentInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentInformation
     */
    omit?: DocumentInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInformationInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentInformation.
     */
    data: XOR<DocumentInformationCreateInput, DocumentInformationUncheckedCreateInput>
  }

  /**
   * DocumentInformation createMany
   */
  export type DocumentInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentInformations.
     */
    data: DocumentInformationCreateManyInput | DocumentInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentInformation createManyAndReturn
   */
  export type DocumentInformationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentInformation
     */
    select?: DocumentInformationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentInformation
     */
    omit?: DocumentInformationOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentInformations.
     */
    data: DocumentInformationCreateManyInput | DocumentInformationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInformationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentInformation update
   */
  export type DocumentInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentInformation
     */
    select?: DocumentInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentInformation
     */
    omit?: DocumentInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInformationInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentInformation.
     */
    data: XOR<DocumentInformationUpdateInput, DocumentInformationUncheckedUpdateInput>
    /**
     * Choose, which DocumentInformation to update.
     */
    where: DocumentInformationWhereUniqueInput
  }

  /**
   * DocumentInformation updateMany
   */
  export type DocumentInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentInformations.
     */
    data: XOR<DocumentInformationUpdateManyMutationInput, DocumentInformationUncheckedUpdateManyInput>
    /**
     * Filter which DocumentInformations to update
     */
    where?: DocumentInformationWhereInput
    /**
     * Limit how many DocumentInformations to update.
     */
    limit?: number
  }

  /**
   * DocumentInformation updateManyAndReturn
   */
  export type DocumentInformationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentInformation
     */
    select?: DocumentInformationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentInformation
     */
    omit?: DocumentInformationOmit<ExtArgs> | null
    /**
     * The data used to update DocumentInformations.
     */
    data: XOR<DocumentInformationUpdateManyMutationInput, DocumentInformationUncheckedUpdateManyInput>
    /**
     * Filter which DocumentInformations to update
     */
    where?: DocumentInformationWhereInput
    /**
     * Limit how many DocumentInformations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInformationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentInformation upsert
   */
  export type DocumentInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentInformation
     */
    select?: DocumentInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentInformation
     */
    omit?: DocumentInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInformationInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentInformation to update in case it exists.
     */
    where: DocumentInformationWhereUniqueInput
    /**
     * In case the DocumentInformation found by the `where` argument doesn't exist, create a new DocumentInformation with this data.
     */
    create: XOR<DocumentInformationCreateInput, DocumentInformationUncheckedCreateInput>
    /**
     * In case the DocumentInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentInformationUpdateInput, DocumentInformationUncheckedUpdateInput>
  }

  /**
   * DocumentInformation delete
   */
  export type DocumentInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentInformation
     */
    select?: DocumentInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentInformation
     */
    omit?: DocumentInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInformationInclude<ExtArgs> | null
    /**
     * Filter which DocumentInformation to delete.
     */
    where: DocumentInformationWhereUniqueInput
  }

  /**
   * DocumentInformation deleteMany
   */
  export type DocumentInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentInformations to delete
     */
    where?: DocumentInformationWhereInput
    /**
     * Limit how many DocumentInformations to delete.
     */
    limit?: number
  }

  /**
   * DocumentInformation without action
   */
  export type DocumentInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentInformation
     */
    select?: DocumentInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentInformation
     */
    omit?: DocumentInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInformationInclude<ExtArgs> | null
  }


  /**
   * Model DocumentWarning
   */

  export type AggregateDocumentWarning = {
    _count: DocumentWarningCountAggregateOutputType | null
    _avg: DocumentWarningAvgAggregateOutputType | null
    _sum: DocumentWarningSumAggregateOutputType | null
    _min: DocumentWarningMinAggregateOutputType | null
    _max: DocumentWarningMaxAggregateOutputType | null
  }

  export type DocumentWarningAvgAggregateOutputType = {
    id: number | null
    failingElementId: number | null
  }

  export type DocumentWarningSumAggregateOutputType = {
    id: number | null
    failingElementId: bigint[]
  }

  export type DocumentWarningMinAggregateOutputType = {
    id: number | null
    documentId: string | null
    createdAt: Date | null
    severity: string | null
    message: string | null
  }

  export type DocumentWarningMaxAggregateOutputType = {
    id: number | null
    documentId: string | null
    createdAt: Date | null
    severity: string | null
    message: string | null
  }

  export type DocumentWarningCountAggregateOutputType = {
    id: number
    documentId: number
    createdAt: number
    severity: number
    message: number
    failingElementId: number
    _all: number
  }


  export type DocumentWarningAvgAggregateInputType = {
    id?: true
    failingElementId?: true
  }

  export type DocumentWarningSumAggregateInputType = {
    id?: true
    failingElementId?: true
  }

  export type DocumentWarningMinAggregateInputType = {
    id?: true
    documentId?: true
    createdAt?: true
    severity?: true
    message?: true
  }

  export type DocumentWarningMaxAggregateInputType = {
    id?: true
    documentId?: true
    createdAt?: true
    severity?: true
    message?: true
  }

  export type DocumentWarningCountAggregateInputType = {
    id?: true
    documentId?: true
    createdAt?: true
    severity?: true
    message?: true
    failingElementId?: true
    _all?: true
  }

  export type DocumentWarningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentWarning to aggregate.
     */
    where?: DocumentWarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentWarnings to fetch.
     */
    orderBy?: DocumentWarningOrderByWithRelationInput | DocumentWarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentWarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentWarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentWarnings
    **/
    _count?: true | DocumentWarningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentWarningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentWarningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentWarningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentWarningMaxAggregateInputType
  }

  export type GetDocumentWarningAggregateType<T extends DocumentWarningAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentWarning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentWarning[P]>
      : GetScalarType<T[P], AggregateDocumentWarning[P]>
  }




  export type DocumentWarningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWarningWhereInput
    orderBy?: DocumentWarningOrderByWithAggregationInput | DocumentWarningOrderByWithAggregationInput[]
    by: DocumentWarningScalarFieldEnum[] | DocumentWarningScalarFieldEnum
    having?: DocumentWarningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentWarningCountAggregateInputType | true
    _avg?: DocumentWarningAvgAggregateInputType
    _sum?: DocumentWarningSumAggregateInputType
    _min?: DocumentWarningMinAggregateInputType
    _max?: DocumentWarningMaxAggregateInputType
  }

  export type DocumentWarningGroupByOutputType = {
    id: number
    documentId: string
    createdAt: Date
    severity: string
    message: string
    failingElementId: bigint[]
    _count: DocumentWarningCountAggregateOutputType | null
    _avg: DocumentWarningAvgAggregateOutputType | null
    _sum: DocumentWarningSumAggregateOutputType | null
    _min: DocumentWarningMinAggregateOutputType | null
    _max: DocumentWarningMaxAggregateOutputType | null
  }

  type GetDocumentWarningGroupByPayload<T extends DocumentWarningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentWarningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentWarningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentWarningGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentWarningGroupByOutputType[P]>
        }
      >
    >


  export type DocumentWarningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    createdAt?: boolean
    severity?: boolean
    message?: boolean
    failingElementId?: boolean
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentWarning"]>

  export type DocumentWarningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    createdAt?: boolean
    severity?: boolean
    message?: boolean
    failingElementId?: boolean
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentWarning"]>

  export type DocumentWarningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    createdAt?: boolean
    severity?: boolean
    message?: boolean
    failingElementId?: boolean
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentWarning"]>

  export type DocumentWarningSelectScalar = {
    id?: boolean
    documentId?: boolean
    createdAt?: boolean
    severity?: boolean
    message?: boolean
    failingElementId?: boolean
  }

  export type DocumentWarningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "createdAt" | "severity" | "message" | "failingElementId", ExtArgs["result"]["documentWarning"]>
  export type DocumentWarningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }
  export type DocumentWarningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }
  export type DocumentWarningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }

  export type $DocumentWarningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentWarning"
    objects: {
      document: Prisma.$WolfpackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentId: string
      createdAt: Date
      severity: string
      message: string
      failingElementId: bigint[]
    }, ExtArgs["result"]["documentWarning"]>
    composites: {}
  }

  type DocumentWarningGetPayload<S extends boolean | null | undefined | DocumentWarningDefaultArgs> = $Result.GetResult<Prisma.$DocumentWarningPayload, S>

  type DocumentWarningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentWarningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentWarningCountAggregateInputType | true
    }

  export interface DocumentWarningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentWarning'], meta: { name: 'DocumentWarning' } }
    /**
     * Find zero or one DocumentWarning that matches the filter.
     * @param {DocumentWarningFindUniqueArgs} args - Arguments to find a DocumentWarning
     * @example
     * // Get one DocumentWarning
     * const documentWarning = await prisma.documentWarning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentWarningFindUniqueArgs>(args: SelectSubset<T, DocumentWarningFindUniqueArgs<ExtArgs>>): Prisma__DocumentWarningClient<$Result.GetResult<Prisma.$DocumentWarningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentWarning that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentWarningFindUniqueOrThrowArgs} args - Arguments to find a DocumentWarning
     * @example
     * // Get one DocumentWarning
     * const documentWarning = await prisma.documentWarning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentWarningFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentWarningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentWarningClient<$Result.GetResult<Prisma.$DocumentWarningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentWarning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentWarningFindFirstArgs} args - Arguments to find a DocumentWarning
     * @example
     * // Get one DocumentWarning
     * const documentWarning = await prisma.documentWarning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentWarningFindFirstArgs>(args?: SelectSubset<T, DocumentWarningFindFirstArgs<ExtArgs>>): Prisma__DocumentWarningClient<$Result.GetResult<Prisma.$DocumentWarningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentWarning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentWarningFindFirstOrThrowArgs} args - Arguments to find a DocumentWarning
     * @example
     * // Get one DocumentWarning
     * const documentWarning = await prisma.documentWarning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentWarningFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentWarningFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentWarningClient<$Result.GetResult<Prisma.$DocumentWarningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentWarnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentWarningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentWarnings
     * const documentWarnings = await prisma.documentWarning.findMany()
     * 
     * // Get first 10 DocumentWarnings
     * const documentWarnings = await prisma.documentWarning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWarningWithIdOnly = await prisma.documentWarning.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentWarningFindManyArgs>(args?: SelectSubset<T, DocumentWarningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentWarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentWarning.
     * @param {DocumentWarningCreateArgs} args - Arguments to create a DocumentWarning.
     * @example
     * // Create one DocumentWarning
     * const DocumentWarning = await prisma.documentWarning.create({
     *   data: {
     *     // ... data to create a DocumentWarning
     *   }
     * })
     * 
     */
    create<T extends DocumentWarningCreateArgs>(args: SelectSubset<T, DocumentWarningCreateArgs<ExtArgs>>): Prisma__DocumentWarningClient<$Result.GetResult<Prisma.$DocumentWarningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentWarnings.
     * @param {DocumentWarningCreateManyArgs} args - Arguments to create many DocumentWarnings.
     * @example
     * // Create many DocumentWarnings
     * const documentWarning = await prisma.documentWarning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentWarningCreateManyArgs>(args?: SelectSubset<T, DocumentWarningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentWarnings and returns the data saved in the database.
     * @param {DocumentWarningCreateManyAndReturnArgs} args - Arguments to create many DocumentWarnings.
     * @example
     * // Create many DocumentWarnings
     * const documentWarning = await prisma.documentWarning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentWarnings and only return the `id`
     * const documentWarningWithIdOnly = await prisma.documentWarning.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentWarningCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentWarningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentWarningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentWarning.
     * @param {DocumentWarningDeleteArgs} args - Arguments to delete one DocumentWarning.
     * @example
     * // Delete one DocumentWarning
     * const DocumentWarning = await prisma.documentWarning.delete({
     *   where: {
     *     // ... filter to delete one DocumentWarning
     *   }
     * })
     * 
     */
    delete<T extends DocumentWarningDeleteArgs>(args: SelectSubset<T, DocumentWarningDeleteArgs<ExtArgs>>): Prisma__DocumentWarningClient<$Result.GetResult<Prisma.$DocumentWarningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentWarning.
     * @param {DocumentWarningUpdateArgs} args - Arguments to update one DocumentWarning.
     * @example
     * // Update one DocumentWarning
     * const documentWarning = await prisma.documentWarning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentWarningUpdateArgs>(args: SelectSubset<T, DocumentWarningUpdateArgs<ExtArgs>>): Prisma__DocumentWarningClient<$Result.GetResult<Prisma.$DocumentWarningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentWarnings.
     * @param {DocumentWarningDeleteManyArgs} args - Arguments to filter DocumentWarnings to delete.
     * @example
     * // Delete a few DocumentWarnings
     * const { count } = await prisma.documentWarning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentWarningDeleteManyArgs>(args?: SelectSubset<T, DocumentWarningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentWarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentWarningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentWarnings
     * const documentWarning = await prisma.documentWarning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentWarningUpdateManyArgs>(args: SelectSubset<T, DocumentWarningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentWarnings and returns the data updated in the database.
     * @param {DocumentWarningUpdateManyAndReturnArgs} args - Arguments to update many DocumentWarnings.
     * @example
     * // Update many DocumentWarnings
     * const documentWarning = await prisma.documentWarning.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentWarnings and only return the `id`
     * const documentWarningWithIdOnly = await prisma.documentWarning.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentWarningUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentWarningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentWarningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentWarning.
     * @param {DocumentWarningUpsertArgs} args - Arguments to update or create a DocumentWarning.
     * @example
     * // Update or create a DocumentWarning
     * const documentWarning = await prisma.documentWarning.upsert({
     *   create: {
     *     // ... data to create a DocumentWarning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentWarning we want to update
     *   }
     * })
     */
    upsert<T extends DocumentWarningUpsertArgs>(args: SelectSubset<T, DocumentWarningUpsertArgs<ExtArgs>>): Prisma__DocumentWarningClient<$Result.GetResult<Prisma.$DocumentWarningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentWarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentWarningCountArgs} args - Arguments to filter DocumentWarnings to count.
     * @example
     * // Count the number of DocumentWarnings
     * const count = await prisma.documentWarning.count({
     *   where: {
     *     // ... the filter for the DocumentWarnings we want to count
     *   }
     * })
    **/
    count<T extends DocumentWarningCountArgs>(
      args?: Subset<T, DocumentWarningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentWarningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentWarning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentWarningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentWarningAggregateArgs>(args: Subset<T, DocumentWarningAggregateArgs>): Prisma.PrismaPromise<GetDocumentWarningAggregateType<T>>

    /**
     * Group by DocumentWarning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentWarningGroupByArgs} args - Group by arguments.
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
      T extends DocumentWarningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentWarningGroupByArgs['orderBy'] }
        : { orderBy?: DocumentWarningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentWarningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentWarningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentWarning model
   */
  readonly fields: DocumentWarningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentWarning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentWarningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends WolfpackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WolfpackDefaultArgs<ExtArgs>>): Prisma__WolfpackClient<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DocumentWarning model
   */ 
  interface DocumentWarningFieldRefs {
    readonly id: FieldRef<"DocumentWarning", 'Int'>
    readonly documentId: FieldRef<"DocumentWarning", 'String'>
    readonly createdAt: FieldRef<"DocumentWarning", 'DateTime'>
    readonly severity: FieldRef<"DocumentWarning", 'String'>
    readonly message: FieldRef<"DocumentWarning", 'String'>
    readonly failingElementId: FieldRef<"DocumentWarning", 'BigInt[]'>
  }
    

  // Custom InputTypes
  /**
   * DocumentWarning findUnique
   */
  export type DocumentWarningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentWarning
     */
    select?: DocumentWarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentWarning
     */
    omit?: DocumentWarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentWarningInclude<ExtArgs> | null
    /**
     * Filter, which DocumentWarning to fetch.
     */
    where: DocumentWarningWhereUniqueInput
  }

  /**
   * DocumentWarning findUniqueOrThrow
   */
  export type DocumentWarningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentWarning
     */
    select?: DocumentWarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentWarning
     */
    omit?: DocumentWarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentWarningInclude<ExtArgs> | null
    /**
     * Filter, which DocumentWarning to fetch.
     */
    where: DocumentWarningWhereUniqueInput
  }

  /**
   * DocumentWarning findFirst
   */
  export type DocumentWarningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentWarning
     */
    select?: DocumentWarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentWarning
     */
    omit?: DocumentWarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentWarningInclude<ExtArgs> | null
    /**
     * Filter, which DocumentWarning to fetch.
     */
    where?: DocumentWarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentWarnings to fetch.
     */
    orderBy?: DocumentWarningOrderByWithRelationInput | DocumentWarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentWarnings.
     */
    cursor?: DocumentWarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentWarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentWarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentWarnings.
     */
    distinct?: DocumentWarningScalarFieldEnum | DocumentWarningScalarFieldEnum[]
  }

  /**
   * DocumentWarning findFirstOrThrow
   */
  export type DocumentWarningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentWarning
     */
    select?: DocumentWarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentWarning
     */
    omit?: DocumentWarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentWarningInclude<ExtArgs> | null
    /**
     * Filter, which DocumentWarning to fetch.
     */
    where?: DocumentWarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentWarnings to fetch.
     */
    orderBy?: DocumentWarningOrderByWithRelationInput | DocumentWarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentWarnings.
     */
    cursor?: DocumentWarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentWarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentWarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentWarnings.
     */
    distinct?: DocumentWarningScalarFieldEnum | DocumentWarningScalarFieldEnum[]
  }

  /**
   * DocumentWarning findMany
   */
  export type DocumentWarningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentWarning
     */
    select?: DocumentWarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentWarning
     */
    omit?: DocumentWarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentWarningInclude<ExtArgs> | null
    /**
     * Filter, which DocumentWarnings to fetch.
     */
    where?: DocumentWarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentWarnings to fetch.
     */
    orderBy?: DocumentWarningOrderByWithRelationInput | DocumentWarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentWarnings.
     */
    cursor?: DocumentWarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentWarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentWarnings.
     */
    skip?: number
    distinct?: DocumentWarningScalarFieldEnum | DocumentWarningScalarFieldEnum[]
  }

  /**
   * DocumentWarning create
   */
  export type DocumentWarningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentWarning
     */
    select?: DocumentWarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentWarning
     */
    omit?: DocumentWarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentWarningInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentWarning.
     */
    data: XOR<DocumentWarningCreateInput, DocumentWarningUncheckedCreateInput>
  }

  /**
   * DocumentWarning createMany
   */
  export type DocumentWarningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentWarnings.
     */
    data: DocumentWarningCreateManyInput | DocumentWarningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentWarning createManyAndReturn
   */
  export type DocumentWarningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentWarning
     */
    select?: DocumentWarningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentWarning
     */
    omit?: DocumentWarningOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentWarnings.
     */
    data: DocumentWarningCreateManyInput | DocumentWarningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentWarningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentWarning update
   */
  export type DocumentWarningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentWarning
     */
    select?: DocumentWarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentWarning
     */
    omit?: DocumentWarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentWarningInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentWarning.
     */
    data: XOR<DocumentWarningUpdateInput, DocumentWarningUncheckedUpdateInput>
    /**
     * Choose, which DocumentWarning to update.
     */
    where: DocumentWarningWhereUniqueInput
  }

  /**
   * DocumentWarning updateMany
   */
  export type DocumentWarningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentWarnings.
     */
    data: XOR<DocumentWarningUpdateManyMutationInput, DocumentWarningUncheckedUpdateManyInput>
    /**
     * Filter which DocumentWarnings to update
     */
    where?: DocumentWarningWhereInput
    /**
     * Limit how many DocumentWarnings to update.
     */
    limit?: number
  }

  /**
   * DocumentWarning updateManyAndReturn
   */
  export type DocumentWarningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentWarning
     */
    select?: DocumentWarningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentWarning
     */
    omit?: DocumentWarningOmit<ExtArgs> | null
    /**
     * The data used to update DocumentWarnings.
     */
    data: XOR<DocumentWarningUpdateManyMutationInput, DocumentWarningUncheckedUpdateManyInput>
    /**
     * Filter which DocumentWarnings to update
     */
    where?: DocumentWarningWhereInput
    /**
     * Limit how many DocumentWarnings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentWarningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentWarning upsert
   */
  export type DocumentWarningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentWarning
     */
    select?: DocumentWarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentWarning
     */
    omit?: DocumentWarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentWarningInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentWarning to update in case it exists.
     */
    where: DocumentWarningWhereUniqueInput
    /**
     * In case the DocumentWarning found by the `where` argument doesn't exist, create a new DocumentWarning with this data.
     */
    create: XOR<DocumentWarningCreateInput, DocumentWarningUncheckedCreateInput>
    /**
     * In case the DocumentWarning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentWarningUpdateInput, DocumentWarningUncheckedUpdateInput>
  }

  /**
   * DocumentWarning delete
   */
  export type DocumentWarningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentWarning
     */
    select?: DocumentWarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentWarning
     */
    omit?: DocumentWarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentWarningInclude<ExtArgs> | null
    /**
     * Filter which DocumentWarning to delete.
     */
    where: DocumentWarningWhereUniqueInput
  }

  /**
   * DocumentWarning deleteMany
   */
  export type DocumentWarningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentWarnings to delete
     */
    where?: DocumentWarningWhereInput
    /**
     * Limit how many DocumentWarnings to delete.
     */
    limit?: number
  }

  /**
   * DocumentWarning without action
   */
  export type DocumentWarningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentWarning
     */
    select?: DocumentWarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentWarning
     */
    omit?: DocumentWarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentWarningInclude<ExtArgs> | null
  }


  /**
   * Model SiteInformation
   */

  export type AggregateSiteInformation = {
    _count: SiteInformationCountAggregateOutputType | null
    _avg: SiteInformationAvgAggregateOutputType | null
    _sum: SiteInformationSumAggregateOutputType | null
    _min: SiteInformationMinAggregateOutputType | null
    _max: SiteInformationMaxAggregateOutputType | null
  }

  export type SiteInformationAvgAggregateOutputType = {
    id: number | null
    elevation: number | null
    latitude: number | null
    longitude: number | null
    timeZone: number | null
  }

  export type SiteInformationSumAggregateOutputType = {
    id: number | null
    elevation: bigint | null
    latitude: bigint | null
    longitude: bigint | null
    timeZone: bigint | null
  }

  export type SiteInformationMinAggregateOutputType = {
    id: number | null
    documentId: string | null
    placeName: string | null
    elevation: bigint | null
    latitude: bigint | null
    longitude: bigint | null
    timeZone: bigint | null
    coordinateSystemId: string | null
    coordinateSystemDefinition: string | null
  }

  export type SiteInformationMaxAggregateOutputType = {
    id: number | null
    documentId: string | null
    placeName: string | null
    elevation: bigint | null
    latitude: bigint | null
    longitude: bigint | null
    timeZone: bigint | null
    coordinateSystemId: string | null
    coordinateSystemDefinition: string | null
  }

  export type SiteInformationCountAggregateOutputType = {
    id: number
    documentId: number
    placeName: number
    elevation: number
    latitude: number
    longitude: number
    timeZone: number
    coordinateSystemId: number
    coordinateSystemDefinition: number
    _all: number
  }


  export type SiteInformationAvgAggregateInputType = {
    id?: true
    elevation?: true
    latitude?: true
    longitude?: true
    timeZone?: true
  }

  export type SiteInformationSumAggregateInputType = {
    id?: true
    elevation?: true
    latitude?: true
    longitude?: true
    timeZone?: true
  }

  export type SiteInformationMinAggregateInputType = {
    id?: true
    documentId?: true
    placeName?: true
    elevation?: true
    latitude?: true
    longitude?: true
    timeZone?: true
    coordinateSystemId?: true
    coordinateSystemDefinition?: true
  }

  export type SiteInformationMaxAggregateInputType = {
    id?: true
    documentId?: true
    placeName?: true
    elevation?: true
    latitude?: true
    longitude?: true
    timeZone?: true
    coordinateSystemId?: true
    coordinateSystemDefinition?: true
  }

  export type SiteInformationCountAggregateInputType = {
    id?: true
    documentId?: true
    placeName?: true
    elevation?: true
    latitude?: true
    longitude?: true
    timeZone?: true
    coordinateSystemId?: true
    coordinateSystemDefinition?: true
    _all?: true
  }

  export type SiteInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteInformation to aggregate.
     */
    where?: SiteInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteInformations to fetch.
     */
    orderBy?: SiteInformationOrderByWithRelationInput | SiteInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteInformations
    **/
    _count?: true | SiteInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteInformationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteInformationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteInformationMaxAggregateInputType
  }

  export type GetSiteInformationAggregateType<T extends SiteInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteInformation[P]>
      : GetScalarType<T[P], AggregateSiteInformation[P]>
  }




  export type SiteInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteInformationWhereInput
    orderBy?: SiteInformationOrderByWithAggregationInput | SiteInformationOrderByWithAggregationInput[]
    by: SiteInformationScalarFieldEnum[] | SiteInformationScalarFieldEnum
    having?: SiteInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteInformationCountAggregateInputType | true
    _avg?: SiteInformationAvgAggregateInputType
    _sum?: SiteInformationSumAggregateInputType
    _min?: SiteInformationMinAggregateInputType
    _max?: SiteInformationMaxAggregateInputType
  }

  export type SiteInformationGroupByOutputType = {
    id: number
    documentId: string
    placeName: string
    elevation: bigint
    latitude: bigint
    longitude: bigint
    timeZone: bigint
    coordinateSystemId: string
    coordinateSystemDefinition: string
    _count: SiteInformationCountAggregateOutputType | null
    _avg: SiteInformationAvgAggregateOutputType | null
    _sum: SiteInformationSumAggregateOutputType | null
    _min: SiteInformationMinAggregateOutputType | null
    _max: SiteInformationMaxAggregateOutputType | null
  }

  type GetSiteInformationGroupByPayload<T extends SiteInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteInformationGroupByOutputType[P]>
            : GetScalarType<T[P], SiteInformationGroupByOutputType[P]>
        }
      >
    >


  export type SiteInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    placeName?: boolean
    elevation?: boolean
    latitude?: boolean
    longitude?: boolean
    timeZone?: boolean
    coordinateSystemId?: boolean
    coordinateSystemDefinition?: boolean
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteInformation"]>

  export type SiteInformationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    placeName?: boolean
    elevation?: boolean
    latitude?: boolean
    longitude?: boolean
    timeZone?: boolean
    coordinateSystemId?: boolean
    coordinateSystemDefinition?: boolean
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteInformation"]>

  export type SiteInformationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    placeName?: boolean
    elevation?: boolean
    latitude?: boolean
    longitude?: boolean
    timeZone?: boolean
    coordinateSystemId?: boolean
    coordinateSystemDefinition?: boolean
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteInformation"]>

  export type SiteInformationSelectScalar = {
    id?: boolean
    documentId?: boolean
    placeName?: boolean
    elevation?: boolean
    latitude?: boolean
    longitude?: boolean
    timeZone?: boolean
    coordinateSystemId?: boolean
    coordinateSystemDefinition?: boolean
  }

  export type SiteInformationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "placeName" | "elevation" | "latitude" | "longitude" | "timeZone" | "coordinateSystemId" | "coordinateSystemDefinition", ExtArgs["result"]["siteInformation"]>
  export type SiteInformationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }
  export type SiteInformationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }
  export type SiteInformationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }

  export type $SiteInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteInformation"
    objects: {
      document: Prisma.$WolfpackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentId: string
      placeName: string
      elevation: bigint
      latitude: bigint
      longitude: bigint
      timeZone: bigint
      coordinateSystemId: string
      coordinateSystemDefinition: string
    }, ExtArgs["result"]["siteInformation"]>
    composites: {}
  }

  type SiteInformationGetPayload<S extends boolean | null | undefined | SiteInformationDefaultArgs> = $Result.GetResult<Prisma.$SiteInformationPayload, S>

  type SiteInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteInformationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteInformationCountAggregateInputType | true
    }

  export interface SiteInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteInformation'], meta: { name: 'SiteInformation' } }
    /**
     * Find zero or one SiteInformation that matches the filter.
     * @param {SiteInformationFindUniqueArgs} args - Arguments to find a SiteInformation
     * @example
     * // Get one SiteInformation
     * const siteInformation = await prisma.siteInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteInformationFindUniqueArgs>(args: SelectSubset<T, SiteInformationFindUniqueArgs<ExtArgs>>): Prisma__SiteInformationClient<$Result.GetResult<Prisma.$SiteInformationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteInformation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteInformationFindUniqueOrThrowArgs} args - Arguments to find a SiteInformation
     * @example
     * // Get one SiteInformation
     * const siteInformation = await prisma.siteInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteInformationFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteInformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteInformationClient<$Result.GetResult<Prisma.$SiteInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteInformationFindFirstArgs} args - Arguments to find a SiteInformation
     * @example
     * // Get one SiteInformation
     * const siteInformation = await prisma.siteInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteInformationFindFirstArgs>(args?: SelectSubset<T, SiteInformationFindFirstArgs<ExtArgs>>): Prisma__SiteInformationClient<$Result.GetResult<Prisma.$SiteInformationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteInformationFindFirstOrThrowArgs} args - Arguments to find a SiteInformation
     * @example
     * // Get one SiteInformation
     * const siteInformation = await prisma.siteInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteInformationFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteInformationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteInformationClient<$Result.GetResult<Prisma.$SiteInformationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteInformations
     * const siteInformations = await prisma.siteInformation.findMany()
     * 
     * // Get first 10 SiteInformations
     * const siteInformations = await prisma.siteInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteInformationWithIdOnly = await prisma.siteInformation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteInformationFindManyArgs>(args?: SelectSubset<T, SiteInformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteInformation.
     * @param {SiteInformationCreateArgs} args - Arguments to create a SiteInformation.
     * @example
     * // Create one SiteInformation
     * const SiteInformation = await prisma.siteInformation.create({
     *   data: {
     *     // ... data to create a SiteInformation
     *   }
     * })
     * 
     */
    create<T extends SiteInformationCreateArgs>(args: SelectSubset<T, SiteInformationCreateArgs<ExtArgs>>): Prisma__SiteInformationClient<$Result.GetResult<Prisma.$SiteInformationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteInformations.
     * @param {SiteInformationCreateManyArgs} args - Arguments to create many SiteInformations.
     * @example
     * // Create many SiteInformations
     * const siteInformation = await prisma.siteInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteInformationCreateManyArgs>(args?: SelectSubset<T, SiteInformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteInformations and returns the data saved in the database.
     * @param {SiteInformationCreateManyAndReturnArgs} args - Arguments to create many SiteInformations.
     * @example
     * // Create many SiteInformations
     * const siteInformation = await prisma.siteInformation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteInformations and only return the `id`
     * const siteInformationWithIdOnly = await prisma.siteInformation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteInformationCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteInformationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteInformationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteInformation.
     * @param {SiteInformationDeleteArgs} args - Arguments to delete one SiteInformation.
     * @example
     * // Delete one SiteInformation
     * const SiteInformation = await prisma.siteInformation.delete({
     *   where: {
     *     // ... filter to delete one SiteInformation
     *   }
     * })
     * 
     */
    delete<T extends SiteInformationDeleteArgs>(args: SelectSubset<T, SiteInformationDeleteArgs<ExtArgs>>): Prisma__SiteInformationClient<$Result.GetResult<Prisma.$SiteInformationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteInformation.
     * @param {SiteInformationUpdateArgs} args - Arguments to update one SiteInformation.
     * @example
     * // Update one SiteInformation
     * const siteInformation = await prisma.siteInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteInformationUpdateArgs>(args: SelectSubset<T, SiteInformationUpdateArgs<ExtArgs>>): Prisma__SiteInformationClient<$Result.GetResult<Prisma.$SiteInformationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteInformations.
     * @param {SiteInformationDeleteManyArgs} args - Arguments to filter SiteInformations to delete.
     * @example
     * // Delete a few SiteInformations
     * const { count } = await prisma.siteInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteInformationDeleteManyArgs>(args?: SelectSubset<T, SiteInformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteInformations
     * const siteInformation = await prisma.siteInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteInformationUpdateManyArgs>(args: SelectSubset<T, SiteInformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteInformations and returns the data updated in the database.
     * @param {SiteInformationUpdateManyAndReturnArgs} args - Arguments to update many SiteInformations.
     * @example
     * // Update many SiteInformations
     * const siteInformation = await prisma.siteInformation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteInformations and only return the `id`
     * const siteInformationWithIdOnly = await prisma.siteInformation.updateManyAndReturn({
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
    updateManyAndReturn<T extends SiteInformationUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteInformationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteInformationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteInformation.
     * @param {SiteInformationUpsertArgs} args - Arguments to update or create a SiteInformation.
     * @example
     * // Update or create a SiteInformation
     * const siteInformation = await prisma.siteInformation.upsert({
     *   create: {
     *     // ... data to create a SiteInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteInformation we want to update
     *   }
     * })
     */
    upsert<T extends SiteInformationUpsertArgs>(args: SelectSubset<T, SiteInformationUpsertArgs<ExtArgs>>): Prisma__SiteInformationClient<$Result.GetResult<Prisma.$SiteInformationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteInformationCountArgs} args - Arguments to filter SiteInformations to count.
     * @example
     * // Count the number of SiteInformations
     * const count = await prisma.siteInformation.count({
     *   where: {
     *     // ... the filter for the SiteInformations we want to count
     *   }
     * })
    **/
    count<T extends SiteInformationCountArgs>(
      args?: Subset<T, SiteInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteInformationAggregateArgs>(args: Subset<T, SiteInformationAggregateArgs>): Prisma.PrismaPromise<GetSiteInformationAggregateType<T>>

    /**
     * Group by SiteInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteInformationGroupByArgs} args - Group by arguments.
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
      T extends SiteInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteInformationGroupByArgs['orderBy'] }
        : { orderBy?: SiteInformationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteInformation model
   */
  readonly fields: SiteInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends WolfpackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WolfpackDefaultArgs<ExtArgs>>): Prisma__WolfpackClient<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SiteInformation model
   */ 
  interface SiteInformationFieldRefs {
    readonly id: FieldRef<"SiteInformation", 'Int'>
    readonly documentId: FieldRef<"SiteInformation", 'String'>
    readonly placeName: FieldRef<"SiteInformation", 'String'>
    readonly elevation: FieldRef<"SiteInformation", 'BigInt'>
    readonly latitude: FieldRef<"SiteInformation", 'BigInt'>
    readonly longitude: FieldRef<"SiteInformation", 'BigInt'>
    readonly timeZone: FieldRef<"SiteInformation", 'BigInt'>
    readonly coordinateSystemId: FieldRef<"SiteInformation", 'String'>
    readonly coordinateSystemDefinition: FieldRef<"SiteInformation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SiteInformation findUnique
   */
  export type SiteInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteInformation
     */
    select?: SiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteInformation
     */
    omit?: SiteInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInformationInclude<ExtArgs> | null
    /**
     * Filter, which SiteInformation to fetch.
     */
    where: SiteInformationWhereUniqueInput
  }

  /**
   * SiteInformation findUniqueOrThrow
   */
  export type SiteInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteInformation
     */
    select?: SiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteInformation
     */
    omit?: SiteInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInformationInclude<ExtArgs> | null
    /**
     * Filter, which SiteInformation to fetch.
     */
    where: SiteInformationWhereUniqueInput
  }

  /**
   * SiteInformation findFirst
   */
  export type SiteInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteInformation
     */
    select?: SiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteInformation
     */
    omit?: SiteInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInformationInclude<ExtArgs> | null
    /**
     * Filter, which SiteInformation to fetch.
     */
    where?: SiteInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteInformations to fetch.
     */
    orderBy?: SiteInformationOrderByWithRelationInput | SiteInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteInformations.
     */
    cursor?: SiteInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteInformations.
     */
    distinct?: SiteInformationScalarFieldEnum | SiteInformationScalarFieldEnum[]
  }

  /**
   * SiteInformation findFirstOrThrow
   */
  export type SiteInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteInformation
     */
    select?: SiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteInformation
     */
    omit?: SiteInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInformationInclude<ExtArgs> | null
    /**
     * Filter, which SiteInformation to fetch.
     */
    where?: SiteInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteInformations to fetch.
     */
    orderBy?: SiteInformationOrderByWithRelationInput | SiteInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteInformations.
     */
    cursor?: SiteInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteInformations.
     */
    distinct?: SiteInformationScalarFieldEnum | SiteInformationScalarFieldEnum[]
  }

  /**
   * SiteInformation findMany
   */
  export type SiteInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteInformation
     */
    select?: SiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteInformation
     */
    omit?: SiteInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInformationInclude<ExtArgs> | null
    /**
     * Filter, which SiteInformations to fetch.
     */
    where?: SiteInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteInformations to fetch.
     */
    orderBy?: SiteInformationOrderByWithRelationInput | SiteInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteInformations.
     */
    cursor?: SiteInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteInformations.
     */
    skip?: number
    distinct?: SiteInformationScalarFieldEnum | SiteInformationScalarFieldEnum[]
  }

  /**
   * SiteInformation create
   */
  export type SiteInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteInformation
     */
    select?: SiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteInformation
     */
    omit?: SiteInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInformationInclude<ExtArgs> | null
    /**
     * The data needed to create a SiteInformation.
     */
    data: XOR<SiteInformationCreateInput, SiteInformationUncheckedCreateInput>
  }

  /**
   * SiteInformation createMany
   */
  export type SiteInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteInformations.
     */
    data: SiteInformationCreateManyInput | SiteInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteInformation createManyAndReturn
   */
  export type SiteInformationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteInformation
     */
    select?: SiteInformationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteInformation
     */
    omit?: SiteInformationOmit<ExtArgs> | null
    /**
     * The data used to create many SiteInformations.
     */
    data: SiteInformationCreateManyInput | SiteInformationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInformationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SiteInformation update
   */
  export type SiteInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteInformation
     */
    select?: SiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteInformation
     */
    omit?: SiteInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInformationInclude<ExtArgs> | null
    /**
     * The data needed to update a SiteInformation.
     */
    data: XOR<SiteInformationUpdateInput, SiteInformationUncheckedUpdateInput>
    /**
     * Choose, which SiteInformation to update.
     */
    where: SiteInformationWhereUniqueInput
  }

  /**
   * SiteInformation updateMany
   */
  export type SiteInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteInformations.
     */
    data: XOR<SiteInformationUpdateManyMutationInput, SiteInformationUncheckedUpdateManyInput>
    /**
     * Filter which SiteInformations to update
     */
    where?: SiteInformationWhereInput
    /**
     * Limit how many SiteInformations to update.
     */
    limit?: number
  }

  /**
   * SiteInformation updateManyAndReturn
   */
  export type SiteInformationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteInformation
     */
    select?: SiteInformationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteInformation
     */
    omit?: SiteInformationOmit<ExtArgs> | null
    /**
     * The data used to update SiteInformations.
     */
    data: XOR<SiteInformationUpdateManyMutationInput, SiteInformationUncheckedUpdateManyInput>
    /**
     * Filter which SiteInformations to update
     */
    where?: SiteInformationWhereInput
    /**
     * Limit how many SiteInformations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInformationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SiteInformation upsert
   */
  export type SiteInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteInformation
     */
    select?: SiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteInformation
     */
    omit?: SiteInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInformationInclude<ExtArgs> | null
    /**
     * The filter to search for the SiteInformation to update in case it exists.
     */
    where: SiteInformationWhereUniqueInput
    /**
     * In case the SiteInformation found by the `where` argument doesn't exist, create a new SiteInformation with this data.
     */
    create: XOR<SiteInformationCreateInput, SiteInformationUncheckedCreateInput>
    /**
     * In case the SiteInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteInformationUpdateInput, SiteInformationUncheckedUpdateInput>
  }

  /**
   * SiteInformation delete
   */
  export type SiteInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteInformation
     */
    select?: SiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteInformation
     */
    omit?: SiteInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInformationInclude<ExtArgs> | null
    /**
     * Filter which SiteInformation to delete.
     */
    where: SiteInformationWhereUniqueInput
  }

  /**
   * SiteInformation deleteMany
   */
  export type SiteInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteInformations to delete
     */
    where?: SiteInformationWhereInput
    /**
     * Limit how many SiteInformations to delete.
     */
    limit?: number
  }

  /**
   * SiteInformation without action
   */
  export type SiteInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteInformation
     */
    select?: SiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteInformation
     */
    omit?: SiteInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInformationInclude<ExtArgs> | null
  }


  /**
   * Model UnitsInformation
   */

  export type AggregateUnitsInformation = {
    _count: UnitsInformationCountAggregateOutputType | null
    _avg: UnitsInformationAvgAggregateOutputType | null
    _sum: UnitsInformationSumAggregateOutputType | null
    _min: UnitsInformationMinAggregateOutputType | null
    _max: UnitsInformationMaxAggregateOutputType | null
  }

  export type UnitsInformationAvgAggregateOutputType = {
    id: number | null
  }

  export type UnitsInformationSumAggregateOutputType = {
    id: number | null
  }

  export type UnitsInformationMinAggregateOutputType = {
    id: number | null
    documentId: string | null
    lengthUnits: string | null
    areaUnits: string | null
    angle: string | null
    currency: string | null
    number: string | null
    rotationAngle: string | null
    sheetLength: string | null
    slope: string | null
    speed: string | null
    time: string | null
    volume: string | null
  }

  export type UnitsInformationMaxAggregateOutputType = {
    id: number | null
    documentId: string | null
    lengthUnits: string | null
    areaUnits: string | null
    angle: string | null
    currency: string | null
    number: string | null
    rotationAngle: string | null
    sheetLength: string | null
    slope: string | null
    speed: string | null
    time: string | null
    volume: string | null
  }

  export type UnitsInformationCountAggregateOutputType = {
    id: number
    documentId: number
    lengthUnits: number
    areaUnits: number
    angle: number
    currency: number
    number: number
    rotationAngle: number
    sheetLength: number
    slope: number
    speed: number
    time: number
    volume: number
    _all: number
  }


  export type UnitsInformationAvgAggregateInputType = {
    id?: true
  }

  export type UnitsInformationSumAggregateInputType = {
    id?: true
  }

  export type UnitsInformationMinAggregateInputType = {
    id?: true
    documentId?: true
    lengthUnits?: true
    areaUnits?: true
    angle?: true
    currency?: true
    number?: true
    rotationAngle?: true
    sheetLength?: true
    slope?: true
    speed?: true
    time?: true
    volume?: true
  }

  export type UnitsInformationMaxAggregateInputType = {
    id?: true
    documentId?: true
    lengthUnits?: true
    areaUnits?: true
    angle?: true
    currency?: true
    number?: true
    rotationAngle?: true
    sheetLength?: true
    slope?: true
    speed?: true
    time?: true
    volume?: true
  }

  export type UnitsInformationCountAggregateInputType = {
    id?: true
    documentId?: true
    lengthUnits?: true
    areaUnits?: true
    angle?: true
    currency?: true
    number?: true
    rotationAngle?: true
    sheetLength?: true
    slope?: true
    speed?: true
    time?: true
    volume?: true
    _all?: true
  }

  export type UnitsInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitsInformation to aggregate.
     */
    where?: UnitsInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitsInformations to fetch.
     */
    orderBy?: UnitsInformationOrderByWithRelationInput | UnitsInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitsInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitsInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitsInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnitsInformations
    **/
    _count?: true | UnitsInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitsInformationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitsInformationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitsInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitsInformationMaxAggregateInputType
  }

  export type GetUnitsInformationAggregateType<T extends UnitsInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateUnitsInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnitsInformation[P]>
      : GetScalarType<T[P], AggregateUnitsInformation[P]>
  }




  export type UnitsInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitsInformationWhereInput
    orderBy?: UnitsInformationOrderByWithAggregationInput | UnitsInformationOrderByWithAggregationInput[]
    by: UnitsInformationScalarFieldEnum[] | UnitsInformationScalarFieldEnum
    having?: UnitsInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitsInformationCountAggregateInputType | true
    _avg?: UnitsInformationAvgAggregateInputType
    _sum?: UnitsInformationSumAggregateInputType
    _min?: UnitsInformationMinAggregateInputType
    _max?: UnitsInformationMaxAggregateInputType
  }

  export type UnitsInformationGroupByOutputType = {
    id: number
    documentId: string
    lengthUnits: string
    areaUnits: string
    angle: string
    currency: string
    number: string
    rotationAngle: string
    sheetLength: string
    slope: string
    speed: string
    time: string
    volume: string
    _count: UnitsInformationCountAggregateOutputType | null
    _avg: UnitsInformationAvgAggregateOutputType | null
    _sum: UnitsInformationSumAggregateOutputType | null
    _min: UnitsInformationMinAggregateOutputType | null
    _max: UnitsInformationMaxAggregateOutputType | null
  }

  type GetUnitsInformationGroupByPayload<T extends UnitsInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitsInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitsInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitsInformationGroupByOutputType[P]>
            : GetScalarType<T[P], UnitsInformationGroupByOutputType[P]>
        }
      >
    >


  export type UnitsInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    lengthUnits?: boolean
    areaUnits?: boolean
    angle?: boolean
    currency?: boolean
    number?: boolean
    rotationAngle?: boolean
    sheetLength?: boolean
    slope?: boolean
    speed?: boolean
    time?: boolean
    volume?: boolean
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitsInformation"]>

  export type UnitsInformationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    lengthUnits?: boolean
    areaUnits?: boolean
    angle?: boolean
    currency?: boolean
    number?: boolean
    rotationAngle?: boolean
    sheetLength?: boolean
    slope?: boolean
    speed?: boolean
    time?: boolean
    volume?: boolean
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitsInformation"]>

  export type UnitsInformationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    lengthUnits?: boolean
    areaUnits?: boolean
    angle?: boolean
    currency?: boolean
    number?: boolean
    rotationAngle?: boolean
    sheetLength?: boolean
    slope?: boolean
    speed?: boolean
    time?: boolean
    volume?: boolean
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitsInformation"]>

  export type UnitsInformationSelectScalar = {
    id?: boolean
    documentId?: boolean
    lengthUnits?: boolean
    areaUnits?: boolean
    angle?: boolean
    currency?: boolean
    number?: boolean
    rotationAngle?: boolean
    sheetLength?: boolean
    slope?: boolean
    speed?: boolean
    time?: boolean
    volume?: boolean
  }

  export type UnitsInformationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "lengthUnits" | "areaUnits" | "angle" | "currency" | "number" | "rotationAngle" | "sheetLength" | "slope" | "speed" | "time" | "volume", ExtArgs["result"]["unitsInformation"]>
  export type UnitsInformationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }
  export type UnitsInformationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }
  export type UnitsInformationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | WolfpackDefaultArgs<ExtArgs>
  }

  export type $UnitsInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnitsInformation"
    objects: {
      document: Prisma.$WolfpackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentId: string
      lengthUnits: string
      areaUnits: string
      angle: string
      currency: string
      number: string
      rotationAngle: string
      sheetLength: string
      slope: string
      speed: string
      time: string
      volume: string
    }, ExtArgs["result"]["unitsInformation"]>
    composites: {}
  }

  type UnitsInformationGetPayload<S extends boolean | null | undefined | UnitsInformationDefaultArgs> = $Result.GetResult<Prisma.$UnitsInformationPayload, S>

  type UnitsInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitsInformationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitsInformationCountAggregateInputType | true
    }

  export interface UnitsInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnitsInformation'], meta: { name: 'UnitsInformation' } }
    /**
     * Find zero or one UnitsInformation that matches the filter.
     * @param {UnitsInformationFindUniqueArgs} args - Arguments to find a UnitsInformation
     * @example
     * // Get one UnitsInformation
     * const unitsInformation = await prisma.unitsInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitsInformationFindUniqueArgs>(args: SelectSubset<T, UnitsInformationFindUniqueArgs<ExtArgs>>): Prisma__UnitsInformationClient<$Result.GetResult<Prisma.$UnitsInformationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnitsInformation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitsInformationFindUniqueOrThrowArgs} args - Arguments to find a UnitsInformation
     * @example
     * // Get one UnitsInformation
     * const unitsInformation = await prisma.unitsInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitsInformationFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitsInformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitsInformationClient<$Result.GetResult<Prisma.$UnitsInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitsInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitsInformationFindFirstArgs} args - Arguments to find a UnitsInformation
     * @example
     * // Get one UnitsInformation
     * const unitsInformation = await prisma.unitsInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitsInformationFindFirstArgs>(args?: SelectSubset<T, UnitsInformationFindFirstArgs<ExtArgs>>): Prisma__UnitsInformationClient<$Result.GetResult<Prisma.$UnitsInformationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitsInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitsInformationFindFirstOrThrowArgs} args - Arguments to find a UnitsInformation
     * @example
     * // Get one UnitsInformation
     * const unitsInformation = await prisma.unitsInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitsInformationFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitsInformationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitsInformationClient<$Result.GetResult<Prisma.$UnitsInformationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnitsInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitsInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnitsInformations
     * const unitsInformations = await prisma.unitsInformation.findMany()
     * 
     * // Get first 10 UnitsInformations
     * const unitsInformations = await prisma.unitsInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitsInformationWithIdOnly = await prisma.unitsInformation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitsInformationFindManyArgs>(args?: SelectSubset<T, UnitsInformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitsInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnitsInformation.
     * @param {UnitsInformationCreateArgs} args - Arguments to create a UnitsInformation.
     * @example
     * // Create one UnitsInformation
     * const UnitsInformation = await prisma.unitsInformation.create({
     *   data: {
     *     // ... data to create a UnitsInformation
     *   }
     * })
     * 
     */
    create<T extends UnitsInformationCreateArgs>(args: SelectSubset<T, UnitsInformationCreateArgs<ExtArgs>>): Prisma__UnitsInformationClient<$Result.GetResult<Prisma.$UnitsInformationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnitsInformations.
     * @param {UnitsInformationCreateManyArgs} args - Arguments to create many UnitsInformations.
     * @example
     * // Create many UnitsInformations
     * const unitsInformation = await prisma.unitsInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitsInformationCreateManyArgs>(args?: SelectSubset<T, UnitsInformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnitsInformations and returns the data saved in the database.
     * @param {UnitsInformationCreateManyAndReturnArgs} args - Arguments to create many UnitsInformations.
     * @example
     * // Create many UnitsInformations
     * const unitsInformation = await prisma.unitsInformation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnitsInformations and only return the `id`
     * const unitsInformationWithIdOnly = await prisma.unitsInformation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitsInformationCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitsInformationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitsInformationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnitsInformation.
     * @param {UnitsInformationDeleteArgs} args - Arguments to delete one UnitsInformation.
     * @example
     * // Delete one UnitsInformation
     * const UnitsInformation = await prisma.unitsInformation.delete({
     *   where: {
     *     // ... filter to delete one UnitsInformation
     *   }
     * })
     * 
     */
    delete<T extends UnitsInformationDeleteArgs>(args: SelectSubset<T, UnitsInformationDeleteArgs<ExtArgs>>): Prisma__UnitsInformationClient<$Result.GetResult<Prisma.$UnitsInformationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnitsInformation.
     * @param {UnitsInformationUpdateArgs} args - Arguments to update one UnitsInformation.
     * @example
     * // Update one UnitsInformation
     * const unitsInformation = await prisma.unitsInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitsInformationUpdateArgs>(args: SelectSubset<T, UnitsInformationUpdateArgs<ExtArgs>>): Prisma__UnitsInformationClient<$Result.GetResult<Prisma.$UnitsInformationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnitsInformations.
     * @param {UnitsInformationDeleteManyArgs} args - Arguments to filter UnitsInformations to delete.
     * @example
     * // Delete a few UnitsInformations
     * const { count } = await prisma.unitsInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitsInformationDeleteManyArgs>(args?: SelectSubset<T, UnitsInformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitsInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitsInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnitsInformations
     * const unitsInformation = await prisma.unitsInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitsInformationUpdateManyArgs>(args: SelectSubset<T, UnitsInformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitsInformations and returns the data updated in the database.
     * @param {UnitsInformationUpdateManyAndReturnArgs} args - Arguments to update many UnitsInformations.
     * @example
     * // Update many UnitsInformations
     * const unitsInformation = await prisma.unitsInformation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnitsInformations and only return the `id`
     * const unitsInformationWithIdOnly = await prisma.unitsInformation.updateManyAndReturn({
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
    updateManyAndReturn<T extends UnitsInformationUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitsInformationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitsInformationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnitsInformation.
     * @param {UnitsInformationUpsertArgs} args - Arguments to update or create a UnitsInformation.
     * @example
     * // Update or create a UnitsInformation
     * const unitsInformation = await prisma.unitsInformation.upsert({
     *   create: {
     *     // ... data to create a UnitsInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnitsInformation we want to update
     *   }
     * })
     */
    upsert<T extends UnitsInformationUpsertArgs>(args: SelectSubset<T, UnitsInformationUpsertArgs<ExtArgs>>): Prisma__UnitsInformationClient<$Result.GetResult<Prisma.$UnitsInformationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnitsInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitsInformationCountArgs} args - Arguments to filter UnitsInformations to count.
     * @example
     * // Count the number of UnitsInformations
     * const count = await prisma.unitsInformation.count({
     *   where: {
     *     // ... the filter for the UnitsInformations we want to count
     *   }
     * })
    **/
    count<T extends UnitsInformationCountArgs>(
      args?: Subset<T, UnitsInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitsInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnitsInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitsInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitsInformationAggregateArgs>(args: Subset<T, UnitsInformationAggregateArgs>): Prisma.PrismaPromise<GetUnitsInformationAggregateType<T>>

    /**
     * Group by UnitsInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitsInformationGroupByArgs} args - Group by arguments.
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
      T extends UnitsInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitsInformationGroupByArgs['orderBy'] }
        : { orderBy?: UnitsInformationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitsInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitsInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnitsInformation model
   */
  readonly fields: UnitsInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnitsInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitsInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends WolfpackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WolfpackDefaultArgs<ExtArgs>>): Prisma__WolfpackClient<$Result.GetResult<Prisma.$WolfpackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UnitsInformation model
   */ 
  interface UnitsInformationFieldRefs {
    readonly id: FieldRef<"UnitsInformation", 'Int'>
    readonly documentId: FieldRef<"UnitsInformation", 'String'>
    readonly lengthUnits: FieldRef<"UnitsInformation", 'String'>
    readonly areaUnits: FieldRef<"UnitsInformation", 'String'>
    readonly angle: FieldRef<"UnitsInformation", 'String'>
    readonly currency: FieldRef<"UnitsInformation", 'String'>
    readonly number: FieldRef<"UnitsInformation", 'String'>
    readonly rotationAngle: FieldRef<"UnitsInformation", 'String'>
    readonly sheetLength: FieldRef<"UnitsInformation", 'String'>
    readonly slope: FieldRef<"UnitsInformation", 'String'>
    readonly speed: FieldRef<"UnitsInformation", 'String'>
    readonly time: FieldRef<"UnitsInformation", 'String'>
    readonly volume: FieldRef<"UnitsInformation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UnitsInformation findUnique
   */
  export type UnitsInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitsInformation
     */
    select?: UnitsInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitsInformation
     */
    omit?: UnitsInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitsInformationInclude<ExtArgs> | null
    /**
     * Filter, which UnitsInformation to fetch.
     */
    where: UnitsInformationWhereUniqueInput
  }

  /**
   * UnitsInformation findUniqueOrThrow
   */
  export type UnitsInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitsInformation
     */
    select?: UnitsInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitsInformation
     */
    omit?: UnitsInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitsInformationInclude<ExtArgs> | null
    /**
     * Filter, which UnitsInformation to fetch.
     */
    where: UnitsInformationWhereUniqueInput
  }

  /**
   * UnitsInformation findFirst
   */
  export type UnitsInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitsInformation
     */
    select?: UnitsInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitsInformation
     */
    omit?: UnitsInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitsInformationInclude<ExtArgs> | null
    /**
     * Filter, which UnitsInformation to fetch.
     */
    where?: UnitsInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitsInformations to fetch.
     */
    orderBy?: UnitsInformationOrderByWithRelationInput | UnitsInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitsInformations.
     */
    cursor?: UnitsInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitsInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitsInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitsInformations.
     */
    distinct?: UnitsInformationScalarFieldEnum | UnitsInformationScalarFieldEnum[]
  }

  /**
   * UnitsInformation findFirstOrThrow
   */
  export type UnitsInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitsInformation
     */
    select?: UnitsInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitsInformation
     */
    omit?: UnitsInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitsInformationInclude<ExtArgs> | null
    /**
     * Filter, which UnitsInformation to fetch.
     */
    where?: UnitsInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitsInformations to fetch.
     */
    orderBy?: UnitsInformationOrderByWithRelationInput | UnitsInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitsInformations.
     */
    cursor?: UnitsInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitsInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitsInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitsInformations.
     */
    distinct?: UnitsInformationScalarFieldEnum | UnitsInformationScalarFieldEnum[]
  }

  /**
   * UnitsInformation findMany
   */
  export type UnitsInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitsInformation
     */
    select?: UnitsInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitsInformation
     */
    omit?: UnitsInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitsInformationInclude<ExtArgs> | null
    /**
     * Filter, which UnitsInformations to fetch.
     */
    where?: UnitsInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitsInformations to fetch.
     */
    orderBy?: UnitsInformationOrderByWithRelationInput | UnitsInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnitsInformations.
     */
    cursor?: UnitsInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitsInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitsInformations.
     */
    skip?: number
    distinct?: UnitsInformationScalarFieldEnum | UnitsInformationScalarFieldEnum[]
  }

  /**
   * UnitsInformation create
   */
  export type UnitsInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitsInformation
     */
    select?: UnitsInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitsInformation
     */
    omit?: UnitsInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitsInformationInclude<ExtArgs> | null
    /**
     * The data needed to create a UnitsInformation.
     */
    data: XOR<UnitsInformationCreateInput, UnitsInformationUncheckedCreateInput>
  }

  /**
   * UnitsInformation createMany
   */
  export type UnitsInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnitsInformations.
     */
    data: UnitsInformationCreateManyInput | UnitsInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnitsInformation createManyAndReturn
   */
  export type UnitsInformationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitsInformation
     */
    select?: UnitsInformationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnitsInformation
     */
    omit?: UnitsInformationOmit<ExtArgs> | null
    /**
     * The data used to create many UnitsInformations.
     */
    data: UnitsInformationCreateManyInput | UnitsInformationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitsInformationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnitsInformation update
   */
  export type UnitsInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitsInformation
     */
    select?: UnitsInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitsInformation
     */
    omit?: UnitsInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitsInformationInclude<ExtArgs> | null
    /**
     * The data needed to update a UnitsInformation.
     */
    data: XOR<UnitsInformationUpdateInput, UnitsInformationUncheckedUpdateInput>
    /**
     * Choose, which UnitsInformation to update.
     */
    where: UnitsInformationWhereUniqueInput
  }

  /**
   * UnitsInformation updateMany
   */
  export type UnitsInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnitsInformations.
     */
    data: XOR<UnitsInformationUpdateManyMutationInput, UnitsInformationUncheckedUpdateManyInput>
    /**
     * Filter which UnitsInformations to update
     */
    where?: UnitsInformationWhereInput
    /**
     * Limit how many UnitsInformations to update.
     */
    limit?: number
  }

  /**
   * UnitsInformation updateManyAndReturn
   */
  export type UnitsInformationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitsInformation
     */
    select?: UnitsInformationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnitsInformation
     */
    omit?: UnitsInformationOmit<ExtArgs> | null
    /**
     * The data used to update UnitsInformations.
     */
    data: XOR<UnitsInformationUpdateManyMutationInput, UnitsInformationUncheckedUpdateManyInput>
    /**
     * Filter which UnitsInformations to update
     */
    where?: UnitsInformationWhereInput
    /**
     * Limit how many UnitsInformations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitsInformationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnitsInformation upsert
   */
  export type UnitsInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitsInformation
     */
    select?: UnitsInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitsInformation
     */
    omit?: UnitsInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitsInformationInclude<ExtArgs> | null
    /**
     * The filter to search for the UnitsInformation to update in case it exists.
     */
    where: UnitsInformationWhereUniqueInput
    /**
     * In case the UnitsInformation found by the `where` argument doesn't exist, create a new UnitsInformation with this data.
     */
    create: XOR<UnitsInformationCreateInput, UnitsInformationUncheckedCreateInput>
    /**
     * In case the UnitsInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitsInformationUpdateInput, UnitsInformationUncheckedUpdateInput>
  }

  /**
   * UnitsInformation delete
   */
  export type UnitsInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitsInformation
     */
    select?: UnitsInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitsInformation
     */
    omit?: UnitsInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitsInformationInclude<ExtArgs> | null
    /**
     * Filter which UnitsInformation to delete.
     */
    where: UnitsInformationWhereUniqueInput
  }

  /**
   * UnitsInformation deleteMany
   */
  export type UnitsInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitsInformations to delete
     */
    where?: UnitsInformationWhereInput
    /**
     * Limit how many UnitsInformations to delete.
     */
    limit?: number
  }

  /**
   * UnitsInformation without action
   */
  export type UnitsInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitsInformation
     */
    select?: UnitsInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitsInformation
     */
    omit?: UnitsInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitsInformationInclude<ExtArgs> | null
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
    documentSessionId: 'documentSessionId',
    documentCreationId: 'documentCreationId',
    changedElements: 'changedElements',
    fileOrigin: 'fileOrigin',
    wasCompleted: 'wasCompleted',
    timeTaken: 'timeTaken',
    createdAt: 'createdAt',
    guid: 'guid',
    resultCount: 'resultCount',
    testName: 'testName',
    results: 'results'
  };

  export type WolfpackScalarFieldEnum = (typeof WolfpackScalarFieldEnum)[keyof typeof WolfpackScalarFieldEnum]


  export const ProjectInformationScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    projectName: 'projectName',
    client: 'client',
    address: 'address',
    author: 'author',
    buildingName: 'buildingName',
    issueDate: 'issueDate',
    location: 'location',
    projectNumber: 'projectNumber',
    organizationDescription: 'organizationDescription',
    organizationName: 'organizationName',
    status: 'status'
  };

  export type ProjectInformationScalarFieldEnum = (typeof ProjectInformationScalarFieldEnum)[keyof typeof ProjectInformationScalarFieldEnum]


  export const ElementInformationScalarFieldEnum: {
    id: 'id',
    uniqueElementId: 'uniqueElementId',
    idValue: 'idValue',
    elementVersionId: 'elementVersionId',
    familyName: 'familyName',
    builtInCategory: 'builtInCategory',
    name: 'name'
  };

  export type ElementInformationScalarFieldEnum = (typeof ElementInformationScalarFieldEnum)[keyof typeof ElementInformationScalarFieldEnum]


  export const ParametersScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    parameterGuid: 'parameterGuid',
    documentOwner: 'documentOwner',
    storageType: 'storageType',
    name: 'name',
    value: 'value',
    isReadOnly: 'isReadOnly',
    typeId: 'typeId',
    dataType: 'dataType',
    groupTypeId: 'groupTypeId',
    hasValue: 'hasValue',
    isShared: 'isShared',
    isUserModifiable: 'isUserModifiable',
    sharedParameterGuid: 'sharedParameterGuid'
  };

  export type ParametersScalarFieldEnum = (typeof ParametersScalarFieldEnum)[keyof typeof ParametersScalarFieldEnum]


  export const DocumentInformationScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    name: 'name',
    path: 'path',
    uuid: 'uuid',
    saveCount: 'saveCount'
  };

  export type DocumentInformationScalarFieldEnum = (typeof DocumentInformationScalarFieldEnum)[keyof typeof DocumentInformationScalarFieldEnum]


  export const DocumentWarningScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    createdAt: 'createdAt',
    severity: 'severity',
    message: 'message',
    failingElementId: 'failingElementId'
  };

  export type DocumentWarningScalarFieldEnum = (typeof DocumentWarningScalarFieldEnum)[keyof typeof DocumentWarningScalarFieldEnum]


  export const SiteInformationScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    placeName: 'placeName',
    elevation: 'elevation',
    latitude: 'latitude',
    longitude: 'longitude',
    timeZone: 'timeZone',
    coordinateSystemId: 'coordinateSystemId',
    coordinateSystemDefinition: 'coordinateSystemDefinition'
  };

  export type SiteInformationScalarFieldEnum = (typeof SiteInformationScalarFieldEnum)[keyof typeof SiteInformationScalarFieldEnum]


  export const UnitsInformationScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    lengthUnits: 'lengthUnits',
    areaUnits: 'areaUnits',
    angle: 'angle',
    currency: 'currency',
    number: 'number',
    rotationAngle: 'rotationAngle',
    sheetLength: 'sheetLength',
    slope: 'slope',
    speed: 'speed',
    time: 'time',
    volume: 'volume'
  };

  export type UnitsInformationScalarFieldEnum = (typeof UnitsInformationScalarFieldEnum)[keyof typeof UnitsInformationScalarFieldEnum]


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
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


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
   * Reference to a field of type 'StorageType'
   */
  export type EnumStorageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StorageType'>
    


  /**
   * Reference to a field of type 'StorageType[]'
   */
  export type ListEnumStorageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StorageType[]'>
    
  /**
   * Deep Input Types
   */


  export type WolfpackWhereInput = {
    AND?: WolfpackWhereInput | WolfpackWhereInput[]
    OR?: WolfpackWhereInput[]
    NOT?: WolfpackWhereInput | WolfpackWhereInput[]
    id?: IntFilter<"Wolfpack"> | number
    documentName?: StringFilter<"Wolfpack"> | string
    documentSessionId?: StringFilter<"Wolfpack"> | string
    documentCreationId?: StringFilter<"Wolfpack"> | string
    changedElements?: BigIntNullableListFilter<"Wolfpack">
    fileOrigin?: StringFilter<"Wolfpack"> | string
    wasCompleted?: BoolFilter<"Wolfpack"> | boolean
    timeTaken?: FloatFilter<"Wolfpack"> | number
    createdAt?: DateTimeFilter<"Wolfpack"> | Date | string
    guid?: StringFilter<"Wolfpack"> | string
    resultCount?: IntFilter<"Wolfpack"> | number
    testName?: StringFilter<"Wolfpack"> | string
    results?: JsonNullableFilter<"Wolfpack">
    projectInformation?: XOR<ProjectInformationNullableScalarRelationFilter, ProjectInformationWhereInput> | null
    documentInformation?: XOR<DocumentInformationNullableScalarRelationFilter, DocumentInformationWhereInput> | null
    siteInformation?: XOR<SiteInformationNullableScalarRelationFilter, SiteInformationWhereInput> | null
    unitsInformation?: XOR<UnitsInformationNullableScalarRelationFilter, UnitsInformationWhereInput> | null
    warnings?: DocumentWarningListRelationFilter
    elementInfo?: ElementInformationListRelationFilter
  }

  export type WolfpackOrderByWithRelationInput = {
    id?: SortOrder
    documentName?: SortOrder
    documentSessionId?: SortOrder
    documentCreationId?: SortOrder
    changedElements?: SortOrder
    fileOrigin?: SortOrder
    wasCompleted?: SortOrder
    timeTaken?: SortOrder
    createdAt?: SortOrder
    guid?: SortOrder
    resultCount?: SortOrder
    testName?: SortOrder
    results?: SortOrderInput | SortOrder
    projectInformation?: ProjectInformationOrderByWithRelationInput
    documentInformation?: DocumentInformationOrderByWithRelationInput
    siteInformation?: SiteInformationOrderByWithRelationInput
    unitsInformation?: UnitsInformationOrderByWithRelationInput
    warnings?: DocumentWarningOrderByRelationAggregateInput
    elementInfo?: ElementInformationOrderByRelationAggregateInput
  }

  export type WolfpackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    AND?: WolfpackWhereInput | WolfpackWhereInput[]
    OR?: WolfpackWhereInput[]
    NOT?: WolfpackWhereInput | WolfpackWhereInput[]
    documentName?: StringFilter<"Wolfpack"> | string
    documentSessionId?: StringFilter<"Wolfpack"> | string
    documentCreationId?: StringFilter<"Wolfpack"> | string
    changedElements?: BigIntNullableListFilter<"Wolfpack">
    fileOrigin?: StringFilter<"Wolfpack"> | string
    wasCompleted?: BoolFilter<"Wolfpack"> | boolean
    timeTaken?: FloatFilter<"Wolfpack"> | number
    createdAt?: DateTimeFilter<"Wolfpack"> | Date | string
    resultCount?: IntFilter<"Wolfpack"> | number
    testName?: StringFilter<"Wolfpack"> | string
    results?: JsonNullableFilter<"Wolfpack">
    projectInformation?: XOR<ProjectInformationNullableScalarRelationFilter, ProjectInformationWhereInput> | null
    documentInformation?: XOR<DocumentInformationNullableScalarRelationFilter, DocumentInformationWhereInput> | null
    siteInformation?: XOR<SiteInformationNullableScalarRelationFilter, SiteInformationWhereInput> | null
    unitsInformation?: XOR<UnitsInformationNullableScalarRelationFilter, UnitsInformationWhereInput> | null
    warnings?: DocumentWarningListRelationFilter
    elementInfo?: ElementInformationListRelationFilter
  }, "id" | "guid">

  export type WolfpackOrderByWithAggregationInput = {
    id?: SortOrder
    documentName?: SortOrder
    documentSessionId?: SortOrder
    documentCreationId?: SortOrder
    changedElements?: SortOrder
    fileOrigin?: SortOrder
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
    documentSessionId?: StringWithAggregatesFilter<"Wolfpack"> | string
    documentCreationId?: StringWithAggregatesFilter<"Wolfpack"> | string
    changedElements?: BigIntNullableListFilter<"Wolfpack">
    fileOrigin?: StringWithAggregatesFilter<"Wolfpack"> | string
    wasCompleted?: BoolWithAggregatesFilter<"Wolfpack"> | boolean
    timeTaken?: FloatWithAggregatesFilter<"Wolfpack"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Wolfpack"> | Date | string
    guid?: StringWithAggregatesFilter<"Wolfpack"> | string
    resultCount?: IntWithAggregatesFilter<"Wolfpack"> | number
    testName?: StringWithAggregatesFilter<"Wolfpack"> | string
    results?: JsonNullableWithAggregatesFilter<"Wolfpack">
  }

  export type ProjectInformationWhereInput = {
    AND?: ProjectInformationWhereInput | ProjectInformationWhereInput[]
    OR?: ProjectInformationWhereInput[]
    NOT?: ProjectInformationWhereInput | ProjectInformationWhereInput[]
    id?: IntFilter<"ProjectInformation"> | number
    projectId?: StringFilter<"ProjectInformation"> | string
    projectName?: StringFilter<"ProjectInformation"> | string
    client?: StringFilter<"ProjectInformation"> | string
    address?: StringFilter<"ProjectInformation"> | string
    author?: StringFilter<"ProjectInformation"> | string
    buildingName?: StringFilter<"ProjectInformation"> | string
    issueDate?: StringFilter<"ProjectInformation"> | string
    location?: StringFilter<"ProjectInformation"> | string
    projectNumber?: StringFilter<"ProjectInformation"> | string
    organizationDescription?: StringFilter<"ProjectInformation"> | string
    organizationName?: StringFilter<"ProjectInformation"> | string
    status?: StringFilter<"ProjectInformation"> | string
    document?: XOR<WolfpackScalarRelationFilter, WolfpackWhereInput>
  }

  export type ProjectInformationOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    projectName?: SortOrder
    client?: SortOrder
    address?: SortOrder
    author?: SortOrder
    buildingName?: SortOrder
    issueDate?: SortOrder
    location?: SortOrder
    projectNumber?: SortOrder
    organizationDescription?: SortOrder
    organizationName?: SortOrder
    status?: SortOrder
    document?: WolfpackOrderByWithRelationInput
  }

  export type ProjectInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId?: string
    AND?: ProjectInformationWhereInput | ProjectInformationWhereInput[]
    OR?: ProjectInformationWhereInput[]
    NOT?: ProjectInformationWhereInput | ProjectInformationWhereInput[]
    projectName?: StringFilter<"ProjectInformation"> | string
    client?: StringFilter<"ProjectInformation"> | string
    address?: StringFilter<"ProjectInformation"> | string
    author?: StringFilter<"ProjectInformation"> | string
    buildingName?: StringFilter<"ProjectInformation"> | string
    issueDate?: StringFilter<"ProjectInformation"> | string
    location?: StringFilter<"ProjectInformation"> | string
    projectNumber?: StringFilter<"ProjectInformation"> | string
    organizationDescription?: StringFilter<"ProjectInformation"> | string
    organizationName?: StringFilter<"ProjectInformation"> | string
    status?: StringFilter<"ProjectInformation"> | string
    document?: XOR<WolfpackScalarRelationFilter, WolfpackWhereInput>
  }, "id" | "projectId">

  export type ProjectInformationOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    projectName?: SortOrder
    client?: SortOrder
    address?: SortOrder
    author?: SortOrder
    buildingName?: SortOrder
    issueDate?: SortOrder
    location?: SortOrder
    projectNumber?: SortOrder
    organizationDescription?: SortOrder
    organizationName?: SortOrder
    status?: SortOrder
    _count?: ProjectInformationCountOrderByAggregateInput
    _avg?: ProjectInformationAvgOrderByAggregateInput
    _max?: ProjectInformationMaxOrderByAggregateInput
    _min?: ProjectInformationMinOrderByAggregateInput
    _sum?: ProjectInformationSumOrderByAggregateInput
  }

  export type ProjectInformationScalarWhereWithAggregatesInput = {
    AND?: ProjectInformationScalarWhereWithAggregatesInput | ProjectInformationScalarWhereWithAggregatesInput[]
    OR?: ProjectInformationScalarWhereWithAggregatesInput[]
    NOT?: ProjectInformationScalarWhereWithAggregatesInput | ProjectInformationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectInformation"> | number
    projectId?: StringWithAggregatesFilter<"ProjectInformation"> | string
    projectName?: StringWithAggregatesFilter<"ProjectInformation"> | string
    client?: StringWithAggregatesFilter<"ProjectInformation"> | string
    address?: StringWithAggregatesFilter<"ProjectInformation"> | string
    author?: StringWithAggregatesFilter<"ProjectInformation"> | string
    buildingName?: StringWithAggregatesFilter<"ProjectInformation"> | string
    issueDate?: StringWithAggregatesFilter<"ProjectInformation"> | string
    location?: StringWithAggregatesFilter<"ProjectInformation"> | string
    projectNumber?: StringWithAggregatesFilter<"ProjectInformation"> | string
    organizationDescription?: StringWithAggregatesFilter<"ProjectInformation"> | string
    organizationName?: StringWithAggregatesFilter<"ProjectInformation"> | string
    status?: StringWithAggregatesFilter<"ProjectInformation"> | string
  }

  export type ElementInformationWhereInput = {
    AND?: ElementInformationWhereInput | ElementInformationWhereInput[]
    OR?: ElementInformationWhereInput[]
    NOT?: ElementInformationWhereInput | ElementInformationWhereInput[]
    id?: IntFilter<"ElementInformation"> | number
    uniqueElementId?: StringFilter<"ElementInformation"> | string
    idValue?: BigIntFilter<"ElementInformation"> | bigint | number
    elementVersionId?: StringFilter<"ElementInformation"> | string
    familyName?: StringFilter<"ElementInformation"> | string
    builtInCategory?: StringFilter<"ElementInformation"> | string
    name?: StringFilter<"ElementInformation"> | string
    wolfpackId?: XOR<WolfpackScalarRelationFilter, WolfpackWhereInput>
    Parameters?: ParametersListRelationFilter
  }

  export type ElementInformationOrderByWithRelationInput = {
    id?: SortOrder
    uniqueElementId?: SortOrder
    idValue?: SortOrder
    elementVersionId?: SortOrder
    familyName?: SortOrder
    builtInCategory?: SortOrder
    name?: SortOrder
    wolfpackId?: WolfpackOrderByWithRelationInput
    Parameters?: ParametersOrderByRelationAggregateInput
  }

  export type ElementInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uniqueElementId?: string
    AND?: ElementInformationWhereInput | ElementInformationWhereInput[]
    OR?: ElementInformationWhereInput[]
    NOT?: ElementInformationWhereInput | ElementInformationWhereInput[]
    idValue?: BigIntFilter<"ElementInformation"> | bigint | number
    elementVersionId?: StringFilter<"ElementInformation"> | string
    familyName?: StringFilter<"ElementInformation"> | string
    builtInCategory?: StringFilter<"ElementInformation"> | string
    name?: StringFilter<"ElementInformation"> | string
    wolfpackId?: XOR<WolfpackScalarRelationFilter, WolfpackWhereInput>
    Parameters?: ParametersListRelationFilter
  }, "id" | "uniqueElementId">

  export type ElementInformationOrderByWithAggregationInput = {
    id?: SortOrder
    uniqueElementId?: SortOrder
    idValue?: SortOrder
    elementVersionId?: SortOrder
    familyName?: SortOrder
    builtInCategory?: SortOrder
    name?: SortOrder
    _count?: ElementInformationCountOrderByAggregateInput
    _avg?: ElementInformationAvgOrderByAggregateInput
    _max?: ElementInformationMaxOrderByAggregateInput
    _min?: ElementInformationMinOrderByAggregateInput
    _sum?: ElementInformationSumOrderByAggregateInput
  }

  export type ElementInformationScalarWhereWithAggregatesInput = {
    AND?: ElementInformationScalarWhereWithAggregatesInput | ElementInformationScalarWhereWithAggregatesInput[]
    OR?: ElementInformationScalarWhereWithAggregatesInput[]
    NOT?: ElementInformationScalarWhereWithAggregatesInput | ElementInformationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ElementInformation"> | number
    uniqueElementId?: StringWithAggregatesFilter<"ElementInformation"> | string
    idValue?: BigIntWithAggregatesFilter<"ElementInformation"> | bigint | number
    elementVersionId?: StringWithAggregatesFilter<"ElementInformation"> | string
    familyName?: StringWithAggregatesFilter<"ElementInformation"> | string
    builtInCategory?: StringWithAggregatesFilter<"ElementInformation"> | string
    name?: StringWithAggregatesFilter<"ElementInformation"> | string
  }

  export type ParametersWhereInput = {
    AND?: ParametersWhereInput | ParametersWhereInput[]
    OR?: ParametersWhereInput[]
    NOT?: ParametersWhereInput | ParametersWhereInput[]
    id?: IntFilter<"Parameters"> | number
    createdAt?: DateTimeFilter<"Parameters"> | Date | string
    parameterGuid?: StringFilter<"Parameters"> | string
    documentOwner?: StringFilter<"Parameters"> | string
    storageType?: EnumStorageTypeFilter<"Parameters"> | $Enums.StorageType
    name?: StringFilter<"Parameters"> | string
    value?: StringFilter<"Parameters"> | string
    isReadOnly?: BoolFilter<"Parameters"> | boolean
    typeId?: StringFilter<"Parameters"> | string
    dataType?: StringFilter<"Parameters"> | string
    groupTypeId?: StringFilter<"Parameters"> | string
    hasValue?: BoolFilter<"Parameters"> | boolean
    isShared?: BoolFilter<"Parameters"> | boolean
    isUserModifiable?: BoolFilter<"Parameters"> | boolean
    sharedParameterGuid?: StringFilter<"Parameters"> | string
    parentElementInfo?: XOR<ElementInformationScalarRelationFilter, ElementInformationWhereInput>
  }

  export type ParametersOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    parameterGuid?: SortOrder
    documentOwner?: SortOrder
    storageType?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isReadOnly?: SortOrder
    typeId?: SortOrder
    dataType?: SortOrder
    groupTypeId?: SortOrder
    hasValue?: SortOrder
    isShared?: SortOrder
    isUserModifiable?: SortOrder
    sharedParameterGuid?: SortOrder
    parentElementInfo?: ElementInformationOrderByWithRelationInput
  }

  export type ParametersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    parameterGuid?: string
    AND?: ParametersWhereInput | ParametersWhereInput[]
    OR?: ParametersWhereInput[]
    NOT?: ParametersWhereInput | ParametersWhereInput[]
    createdAt?: DateTimeFilter<"Parameters"> | Date | string
    documentOwner?: StringFilter<"Parameters"> | string
    storageType?: EnumStorageTypeFilter<"Parameters"> | $Enums.StorageType
    name?: StringFilter<"Parameters"> | string
    value?: StringFilter<"Parameters"> | string
    isReadOnly?: BoolFilter<"Parameters"> | boolean
    typeId?: StringFilter<"Parameters"> | string
    dataType?: StringFilter<"Parameters"> | string
    groupTypeId?: StringFilter<"Parameters"> | string
    hasValue?: BoolFilter<"Parameters"> | boolean
    isShared?: BoolFilter<"Parameters"> | boolean
    isUserModifiable?: BoolFilter<"Parameters"> | boolean
    sharedParameterGuid?: StringFilter<"Parameters"> | string
    parentElementInfo?: XOR<ElementInformationScalarRelationFilter, ElementInformationWhereInput>
  }, "id" | "parameterGuid">

  export type ParametersOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    parameterGuid?: SortOrder
    documentOwner?: SortOrder
    storageType?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isReadOnly?: SortOrder
    typeId?: SortOrder
    dataType?: SortOrder
    groupTypeId?: SortOrder
    hasValue?: SortOrder
    isShared?: SortOrder
    isUserModifiable?: SortOrder
    sharedParameterGuid?: SortOrder
    _count?: ParametersCountOrderByAggregateInput
    _avg?: ParametersAvgOrderByAggregateInput
    _max?: ParametersMaxOrderByAggregateInput
    _min?: ParametersMinOrderByAggregateInput
    _sum?: ParametersSumOrderByAggregateInput
  }

  export type ParametersScalarWhereWithAggregatesInput = {
    AND?: ParametersScalarWhereWithAggregatesInput | ParametersScalarWhereWithAggregatesInput[]
    OR?: ParametersScalarWhereWithAggregatesInput[]
    NOT?: ParametersScalarWhereWithAggregatesInput | ParametersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Parameters"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Parameters"> | Date | string
    parameterGuid?: StringWithAggregatesFilter<"Parameters"> | string
    documentOwner?: StringWithAggregatesFilter<"Parameters"> | string
    storageType?: EnumStorageTypeWithAggregatesFilter<"Parameters"> | $Enums.StorageType
    name?: StringWithAggregatesFilter<"Parameters"> | string
    value?: StringWithAggregatesFilter<"Parameters"> | string
    isReadOnly?: BoolWithAggregatesFilter<"Parameters"> | boolean
    typeId?: StringWithAggregatesFilter<"Parameters"> | string
    dataType?: StringWithAggregatesFilter<"Parameters"> | string
    groupTypeId?: StringWithAggregatesFilter<"Parameters"> | string
    hasValue?: BoolWithAggregatesFilter<"Parameters"> | boolean
    isShared?: BoolWithAggregatesFilter<"Parameters"> | boolean
    isUserModifiable?: BoolWithAggregatesFilter<"Parameters"> | boolean
    sharedParameterGuid?: StringWithAggregatesFilter<"Parameters"> | string
  }

  export type DocumentInformationWhereInput = {
    AND?: DocumentInformationWhereInput | DocumentInformationWhereInput[]
    OR?: DocumentInformationWhereInput[]
    NOT?: DocumentInformationWhereInput | DocumentInformationWhereInput[]
    id?: IntFilter<"DocumentInformation"> | number
    documentId?: StringFilter<"DocumentInformation"> | string
    name?: StringFilter<"DocumentInformation"> | string
    path?: StringFilter<"DocumentInformation"> | string
    uuid?: StringFilter<"DocumentInformation"> | string
    saveCount?: IntFilter<"DocumentInformation"> | number
    document?: XOR<WolfpackScalarRelationFilter, WolfpackWhereInput>
  }

  export type DocumentInformationOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    uuid?: SortOrder
    saveCount?: SortOrder
    document?: WolfpackOrderByWithRelationInput
  }

  export type DocumentInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentId?: string
    AND?: DocumentInformationWhereInput | DocumentInformationWhereInput[]
    OR?: DocumentInformationWhereInput[]
    NOT?: DocumentInformationWhereInput | DocumentInformationWhereInput[]
    name?: StringFilter<"DocumentInformation"> | string
    path?: StringFilter<"DocumentInformation"> | string
    uuid?: StringFilter<"DocumentInformation"> | string
    saveCount?: IntFilter<"DocumentInformation"> | number
    document?: XOR<WolfpackScalarRelationFilter, WolfpackWhereInput>
  }, "id" | "documentId">

  export type DocumentInformationOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    uuid?: SortOrder
    saveCount?: SortOrder
    _count?: DocumentInformationCountOrderByAggregateInput
    _avg?: DocumentInformationAvgOrderByAggregateInput
    _max?: DocumentInformationMaxOrderByAggregateInput
    _min?: DocumentInformationMinOrderByAggregateInput
    _sum?: DocumentInformationSumOrderByAggregateInput
  }

  export type DocumentInformationScalarWhereWithAggregatesInput = {
    AND?: DocumentInformationScalarWhereWithAggregatesInput | DocumentInformationScalarWhereWithAggregatesInput[]
    OR?: DocumentInformationScalarWhereWithAggregatesInput[]
    NOT?: DocumentInformationScalarWhereWithAggregatesInput | DocumentInformationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DocumentInformation"> | number
    documentId?: StringWithAggregatesFilter<"DocumentInformation"> | string
    name?: StringWithAggregatesFilter<"DocumentInformation"> | string
    path?: StringWithAggregatesFilter<"DocumentInformation"> | string
    uuid?: StringWithAggregatesFilter<"DocumentInformation"> | string
    saveCount?: IntWithAggregatesFilter<"DocumentInformation"> | number
  }

  export type DocumentWarningWhereInput = {
    AND?: DocumentWarningWhereInput | DocumentWarningWhereInput[]
    OR?: DocumentWarningWhereInput[]
    NOT?: DocumentWarningWhereInput | DocumentWarningWhereInput[]
    id?: IntFilter<"DocumentWarning"> | number
    documentId?: StringFilter<"DocumentWarning"> | string
    createdAt?: DateTimeFilter<"DocumentWarning"> | Date | string
    severity?: StringFilter<"DocumentWarning"> | string
    message?: StringFilter<"DocumentWarning"> | string
    failingElementId?: BigIntNullableListFilter<"DocumentWarning">
    document?: XOR<WolfpackScalarRelationFilter, WolfpackWhereInput>
  }

  export type DocumentWarningOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    failingElementId?: SortOrder
    document?: WolfpackOrderByWithRelationInput
  }

  export type DocumentWarningWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentId?: string
    AND?: DocumentWarningWhereInput | DocumentWarningWhereInput[]
    OR?: DocumentWarningWhereInput[]
    NOT?: DocumentWarningWhereInput | DocumentWarningWhereInput[]
    createdAt?: DateTimeFilter<"DocumentWarning"> | Date | string
    severity?: StringFilter<"DocumentWarning"> | string
    message?: StringFilter<"DocumentWarning"> | string
    failingElementId?: BigIntNullableListFilter<"DocumentWarning">
    document?: XOR<WolfpackScalarRelationFilter, WolfpackWhereInput>
  }, "id" | "documentId">

  export type DocumentWarningOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    failingElementId?: SortOrder
    _count?: DocumentWarningCountOrderByAggregateInput
    _avg?: DocumentWarningAvgOrderByAggregateInput
    _max?: DocumentWarningMaxOrderByAggregateInput
    _min?: DocumentWarningMinOrderByAggregateInput
    _sum?: DocumentWarningSumOrderByAggregateInput
  }

  export type DocumentWarningScalarWhereWithAggregatesInput = {
    AND?: DocumentWarningScalarWhereWithAggregatesInput | DocumentWarningScalarWhereWithAggregatesInput[]
    OR?: DocumentWarningScalarWhereWithAggregatesInput[]
    NOT?: DocumentWarningScalarWhereWithAggregatesInput | DocumentWarningScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DocumentWarning"> | number
    documentId?: StringWithAggregatesFilter<"DocumentWarning"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DocumentWarning"> | Date | string
    severity?: StringWithAggregatesFilter<"DocumentWarning"> | string
    message?: StringWithAggregatesFilter<"DocumentWarning"> | string
    failingElementId?: BigIntNullableListFilter<"DocumentWarning">
  }

  export type SiteInformationWhereInput = {
    AND?: SiteInformationWhereInput | SiteInformationWhereInput[]
    OR?: SiteInformationWhereInput[]
    NOT?: SiteInformationWhereInput | SiteInformationWhereInput[]
    id?: IntFilter<"SiteInformation"> | number
    documentId?: StringFilter<"SiteInformation"> | string
    placeName?: StringFilter<"SiteInformation"> | string
    elevation?: BigIntFilter<"SiteInformation"> | bigint | number
    latitude?: BigIntFilter<"SiteInformation"> | bigint | number
    longitude?: BigIntFilter<"SiteInformation"> | bigint | number
    timeZone?: BigIntFilter<"SiteInformation"> | bigint | number
    coordinateSystemId?: StringFilter<"SiteInformation"> | string
    coordinateSystemDefinition?: StringFilter<"SiteInformation"> | string
    document?: XOR<WolfpackScalarRelationFilter, WolfpackWhereInput>
  }

  export type SiteInformationOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    placeName?: SortOrder
    elevation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timeZone?: SortOrder
    coordinateSystemId?: SortOrder
    coordinateSystemDefinition?: SortOrder
    document?: WolfpackOrderByWithRelationInput
  }

  export type SiteInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentId?: string
    AND?: SiteInformationWhereInput | SiteInformationWhereInput[]
    OR?: SiteInformationWhereInput[]
    NOT?: SiteInformationWhereInput | SiteInformationWhereInput[]
    placeName?: StringFilter<"SiteInformation"> | string
    elevation?: BigIntFilter<"SiteInformation"> | bigint | number
    latitude?: BigIntFilter<"SiteInformation"> | bigint | number
    longitude?: BigIntFilter<"SiteInformation"> | bigint | number
    timeZone?: BigIntFilter<"SiteInformation"> | bigint | number
    coordinateSystemId?: StringFilter<"SiteInformation"> | string
    coordinateSystemDefinition?: StringFilter<"SiteInformation"> | string
    document?: XOR<WolfpackScalarRelationFilter, WolfpackWhereInput>
  }, "id" | "documentId">

  export type SiteInformationOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    placeName?: SortOrder
    elevation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timeZone?: SortOrder
    coordinateSystemId?: SortOrder
    coordinateSystemDefinition?: SortOrder
    _count?: SiteInformationCountOrderByAggregateInput
    _avg?: SiteInformationAvgOrderByAggregateInput
    _max?: SiteInformationMaxOrderByAggregateInput
    _min?: SiteInformationMinOrderByAggregateInput
    _sum?: SiteInformationSumOrderByAggregateInput
  }

  export type SiteInformationScalarWhereWithAggregatesInput = {
    AND?: SiteInformationScalarWhereWithAggregatesInput | SiteInformationScalarWhereWithAggregatesInput[]
    OR?: SiteInformationScalarWhereWithAggregatesInput[]
    NOT?: SiteInformationScalarWhereWithAggregatesInput | SiteInformationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SiteInformation"> | number
    documentId?: StringWithAggregatesFilter<"SiteInformation"> | string
    placeName?: StringWithAggregatesFilter<"SiteInformation"> | string
    elevation?: BigIntWithAggregatesFilter<"SiteInformation"> | bigint | number
    latitude?: BigIntWithAggregatesFilter<"SiteInformation"> | bigint | number
    longitude?: BigIntWithAggregatesFilter<"SiteInformation"> | bigint | number
    timeZone?: BigIntWithAggregatesFilter<"SiteInformation"> | bigint | number
    coordinateSystemId?: StringWithAggregatesFilter<"SiteInformation"> | string
    coordinateSystemDefinition?: StringWithAggregatesFilter<"SiteInformation"> | string
  }

  export type UnitsInformationWhereInput = {
    AND?: UnitsInformationWhereInput | UnitsInformationWhereInput[]
    OR?: UnitsInformationWhereInput[]
    NOT?: UnitsInformationWhereInput | UnitsInformationWhereInput[]
    id?: IntFilter<"UnitsInformation"> | number
    documentId?: StringFilter<"UnitsInformation"> | string
    lengthUnits?: StringFilter<"UnitsInformation"> | string
    areaUnits?: StringFilter<"UnitsInformation"> | string
    angle?: StringFilter<"UnitsInformation"> | string
    currency?: StringFilter<"UnitsInformation"> | string
    number?: StringFilter<"UnitsInformation"> | string
    rotationAngle?: StringFilter<"UnitsInformation"> | string
    sheetLength?: StringFilter<"UnitsInformation"> | string
    slope?: StringFilter<"UnitsInformation"> | string
    speed?: StringFilter<"UnitsInformation"> | string
    time?: StringFilter<"UnitsInformation"> | string
    volume?: StringFilter<"UnitsInformation"> | string
    document?: XOR<WolfpackScalarRelationFilter, WolfpackWhereInput>
  }

  export type UnitsInformationOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    lengthUnits?: SortOrder
    areaUnits?: SortOrder
    angle?: SortOrder
    currency?: SortOrder
    number?: SortOrder
    rotationAngle?: SortOrder
    sheetLength?: SortOrder
    slope?: SortOrder
    speed?: SortOrder
    time?: SortOrder
    volume?: SortOrder
    document?: WolfpackOrderByWithRelationInput
  }

  export type UnitsInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentId?: string
    AND?: UnitsInformationWhereInput | UnitsInformationWhereInput[]
    OR?: UnitsInformationWhereInput[]
    NOT?: UnitsInformationWhereInput | UnitsInformationWhereInput[]
    lengthUnits?: StringFilter<"UnitsInformation"> | string
    areaUnits?: StringFilter<"UnitsInformation"> | string
    angle?: StringFilter<"UnitsInformation"> | string
    currency?: StringFilter<"UnitsInformation"> | string
    number?: StringFilter<"UnitsInformation"> | string
    rotationAngle?: StringFilter<"UnitsInformation"> | string
    sheetLength?: StringFilter<"UnitsInformation"> | string
    slope?: StringFilter<"UnitsInformation"> | string
    speed?: StringFilter<"UnitsInformation"> | string
    time?: StringFilter<"UnitsInformation"> | string
    volume?: StringFilter<"UnitsInformation"> | string
    document?: XOR<WolfpackScalarRelationFilter, WolfpackWhereInput>
  }, "id" | "documentId">

  export type UnitsInformationOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    lengthUnits?: SortOrder
    areaUnits?: SortOrder
    angle?: SortOrder
    currency?: SortOrder
    number?: SortOrder
    rotationAngle?: SortOrder
    sheetLength?: SortOrder
    slope?: SortOrder
    speed?: SortOrder
    time?: SortOrder
    volume?: SortOrder
    _count?: UnitsInformationCountOrderByAggregateInput
    _avg?: UnitsInformationAvgOrderByAggregateInput
    _max?: UnitsInformationMaxOrderByAggregateInput
    _min?: UnitsInformationMinOrderByAggregateInput
    _sum?: UnitsInformationSumOrderByAggregateInput
  }

  export type UnitsInformationScalarWhereWithAggregatesInput = {
    AND?: UnitsInformationScalarWhereWithAggregatesInput | UnitsInformationScalarWhereWithAggregatesInput[]
    OR?: UnitsInformationScalarWhereWithAggregatesInput[]
    NOT?: UnitsInformationScalarWhereWithAggregatesInput | UnitsInformationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UnitsInformation"> | number
    documentId?: StringWithAggregatesFilter<"UnitsInformation"> | string
    lengthUnits?: StringWithAggregatesFilter<"UnitsInformation"> | string
    areaUnits?: StringWithAggregatesFilter<"UnitsInformation"> | string
    angle?: StringWithAggregatesFilter<"UnitsInformation"> | string
    currency?: StringWithAggregatesFilter<"UnitsInformation"> | string
    number?: StringWithAggregatesFilter<"UnitsInformation"> | string
    rotationAngle?: StringWithAggregatesFilter<"UnitsInformation"> | string
    sheetLength?: StringWithAggregatesFilter<"UnitsInformation"> | string
    slope?: StringWithAggregatesFilter<"UnitsInformation"> | string
    speed?: StringWithAggregatesFilter<"UnitsInformation"> | string
    time?: StringWithAggregatesFilter<"UnitsInformation"> | string
    volume?: StringWithAggregatesFilter<"UnitsInformation"> | string
  }

  export type WolfpackCreateInput = {
    documentName?: string
    documentSessionId?: string
    documentCreationId?: string
    changedElements?: WolfpackCreatechangedElementsInput | bigint[] | number[]
    fileOrigin: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationCreateNestedOneWithoutDocumentInput
    documentInformation?: DocumentInformationCreateNestedOneWithoutDocumentInput
    siteInformation?: SiteInformationCreateNestedOneWithoutDocumentInput
    unitsInformation?: UnitsInformationCreateNestedOneWithoutDocumentInput
    warnings?: DocumentWarningCreateNestedManyWithoutDocumentInput
    elementInfo?: ElementInformationCreateNestedManyWithoutWolfpackIdInput
  }

  export type WolfpackUncheckedCreateInput = {
    id?: number
    documentName?: string
    documentSessionId?: string
    documentCreationId?: string
    changedElements?: WolfpackCreatechangedElementsInput | bigint[] | number[]
    fileOrigin: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUncheckedCreateNestedOneWithoutDocumentInput
    documentInformation?: DocumentInformationUncheckedCreateNestedOneWithoutDocumentInput
    siteInformation?: SiteInformationUncheckedCreateNestedOneWithoutDocumentInput
    unitsInformation?: UnitsInformationUncheckedCreateNestedOneWithoutDocumentInput
    warnings?: DocumentWarningUncheckedCreateNestedManyWithoutDocumentInput
    elementInfo?: ElementInformationUncheckedCreateNestedManyWithoutWolfpackIdInput
  }

  export type WolfpackUpdateInput = {
    documentName?: StringFieldUpdateOperationsInput | string
    documentSessionId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: StringFieldUpdateOperationsInput | string
    changedElements?: WolfpackUpdatechangedElementsInput | bigint[] | number[]
    fileOrigin?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUpdateOneWithoutDocumentNestedInput
    documentInformation?: DocumentInformationUpdateOneWithoutDocumentNestedInput
    siteInformation?: SiteInformationUpdateOneWithoutDocumentNestedInput
    unitsInformation?: UnitsInformationUpdateOneWithoutDocumentNestedInput
    warnings?: DocumentWarningUpdateManyWithoutDocumentNestedInput
    elementInfo?: ElementInformationUpdateManyWithoutWolfpackIdNestedInput
  }

  export type WolfpackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentName?: StringFieldUpdateOperationsInput | string
    documentSessionId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: StringFieldUpdateOperationsInput | string
    changedElements?: WolfpackUpdatechangedElementsInput | bigint[] | number[]
    fileOrigin?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUncheckedUpdateOneWithoutDocumentNestedInput
    documentInformation?: DocumentInformationUncheckedUpdateOneWithoutDocumentNestedInput
    siteInformation?: SiteInformationUncheckedUpdateOneWithoutDocumentNestedInput
    unitsInformation?: UnitsInformationUncheckedUpdateOneWithoutDocumentNestedInput
    warnings?: DocumentWarningUncheckedUpdateManyWithoutDocumentNestedInput
    elementInfo?: ElementInformationUncheckedUpdateManyWithoutWolfpackIdNestedInput
  }

  export type WolfpackCreateManyInput = {
    id?: number
    documentName?: string
    documentSessionId?: string
    documentCreationId?: string
    changedElements?: WolfpackCreatechangedElementsInput | bigint[] | number[]
    fileOrigin: string
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
    documentSessionId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: StringFieldUpdateOperationsInput | string
    changedElements?: WolfpackUpdatechangedElementsInput | bigint[] | number[]
    fileOrigin?: StringFieldUpdateOperationsInput | string
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
    documentSessionId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: StringFieldUpdateOperationsInput | string
    changedElements?: WolfpackUpdatechangedElementsInput | bigint[] | number[]
    fileOrigin?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProjectInformationCreateInput = {
    projectName?: string
    client?: string
    address?: string
    author?: string
    buildingName?: string
    issueDate?: string
    location?: string
    projectNumber?: string
    organizationDescription?: string
    organizationName?: string
    status?: string
    document: WolfpackCreateNestedOneWithoutProjectInformationInput
  }

  export type ProjectInformationUncheckedCreateInput = {
    id?: number
    projectId: string
    projectName?: string
    client?: string
    address?: string
    author?: string
    buildingName?: string
    issueDate?: string
    location?: string
    projectNumber?: string
    organizationDescription?: string
    organizationName?: string
    status?: string
  }

  export type ProjectInformationUpdateInput = {
    projectName?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    buildingName?: StringFieldUpdateOperationsInput | string
    issueDate?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    projectNumber?: StringFieldUpdateOperationsInput | string
    organizationDescription?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    document?: WolfpackUpdateOneRequiredWithoutProjectInformationNestedInput
  }

  export type ProjectInformationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    buildingName?: StringFieldUpdateOperationsInput | string
    issueDate?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    projectNumber?: StringFieldUpdateOperationsInput | string
    organizationDescription?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectInformationCreateManyInput = {
    id?: number
    projectId: string
    projectName?: string
    client?: string
    address?: string
    author?: string
    buildingName?: string
    issueDate?: string
    location?: string
    projectNumber?: string
    organizationDescription?: string
    organizationName?: string
    status?: string
  }

  export type ProjectInformationUpdateManyMutationInput = {
    projectName?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    buildingName?: StringFieldUpdateOperationsInput | string
    issueDate?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    projectNumber?: StringFieldUpdateOperationsInput | string
    organizationDescription?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectInformationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    buildingName?: StringFieldUpdateOperationsInput | string
    issueDate?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    projectNumber?: StringFieldUpdateOperationsInput | string
    organizationDescription?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ElementInformationCreateInput = {
    idValue: bigint | number
    elementVersionId?: string
    familyName?: string
    builtInCategory?: string
    name?: string
    wolfpackId: WolfpackCreateNestedOneWithoutElementInfoInput
    Parameters?: ParametersCreateNestedManyWithoutParentElementInfoInput
  }

  export type ElementInformationUncheckedCreateInput = {
    id?: number
    uniqueElementId: string
    idValue: bigint | number
    elementVersionId?: string
    familyName?: string
    builtInCategory?: string
    name?: string
    Parameters?: ParametersUncheckedCreateNestedManyWithoutParentElementInfoInput
  }

  export type ElementInformationUpdateInput = {
    idValue?: BigIntFieldUpdateOperationsInput | bigint | number
    elementVersionId?: StringFieldUpdateOperationsInput | string
    familyName?: StringFieldUpdateOperationsInput | string
    builtInCategory?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    wolfpackId?: WolfpackUpdateOneRequiredWithoutElementInfoNestedInput
    Parameters?: ParametersUpdateManyWithoutParentElementInfoNestedInput
  }

  export type ElementInformationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueElementId?: StringFieldUpdateOperationsInput | string
    idValue?: BigIntFieldUpdateOperationsInput | bigint | number
    elementVersionId?: StringFieldUpdateOperationsInput | string
    familyName?: StringFieldUpdateOperationsInput | string
    builtInCategory?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Parameters?: ParametersUncheckedUpdateManyWithoutParentElementInfoNestedInput
  }

  export type ElementInformationCreateManyInput = {
    id?: number
    uniqueElementId: string
    idValue: bigint | number
    elementVersionId?: string
    familyName?: string
    builtInCategory?: string
    name?: string
  }

  export type ElementInformationUpdateManyMutationInput = {
    idValue?: BigIntFieldUpdateOperationsInput | bigint | number
    elementVersionId?: StringFieldUpdateOperationsInput | string
    familyName?: StringFieldUpdateOperationsInput | string
    builtInCategory?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ElementInformationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueElementId?: StringFieldUpdateOperationsInput | string
    idValue?: BigIntFieldUpdateOperationsInput | bigint | number
    elementVersionId?: StringFieldUpdateOperationsInput | string
    familyName?: StringFieldUpdateOperationsInput | string
    builtInCategory?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ParametersCreateInput = {
    createdAt?: Date | string
    documentOwner?: string
    storageType?: $Enums.StorageType
    name?: string
    value?: string
    isReadOnly?: boolean
    typeId?: string
    dataType?: string
    groupTypeId?: string
    hasValue?: boolean
    isShared?: boolean
    isUserModifiable?: boolean
    sharedParameterGuid?: string
    parentElementInfo: ElementInformationCreateNestedOneWithoutParametersInput
  }

  export type ParametersUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    parameterGuid: string
    documentOwner?: string
    storageType?: $Enums.StorageType
    name?: string
    value?: string
    isReadOnly?: boolean
    typeId?: string
    dataType?: string
    groupTypeId?: string
    hasValue?: boolean
    isShared?: boolean
    isUserModifiable?: boolean
    sharedParameterGuid?: string
  }

  export type ParametersUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentOwner?: StringFieldUpdateOperationsInput | string
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    typeId?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    groupTypeId?: StringFieldUpdateOperationsInput | string
    hasValue?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    isUserModifiable?: BoolFieldUpdateOperationsInput | boolean
    sharedParameterGuid?: StringFieldUpdateOperationsInput | string
    parentElementInfo?: ElementInformationUpdateOneRequiredWithoutParametersNestedInput
  }

  export type ParametersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parameterGuid?: StringFieldUpdateOperationsInput | string
    documentOwner?: StringFieldUpdateOperationsInput | string
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    typeId?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    groupTypeId?: StringFieldUpdateOperationsInput | string
    hasValue?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    isUserModifiable?: BoolFieldUpdateOperationsInput | boolean
    sharedParameterGuid?: StringFieldUpdateOperationsInput | string
  }

  export type ParametersCreateManyInput = {
    id?: number
    createdAt?: Date | string
    parameterGuid: string
    documentOwner?: string
    storageType?: $Enums.StorageType
    name?: string
    value?: string
    isReadOnly?: boolean
    typeId?: string
    dataType?: string
    groupTypeId?: string
    hasValue?: boolean
    isShared?: boolean
    isUserModifiable?: boolean
    sharedParameterGuid?: string
  }

  export type ParametersUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentOwner?: StringFieldUpdateOperationsInput | string
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    typeId?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    groupTypeId?: StringFieldUpdateOperationsInput | string
    hasValue?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    isUserModifiable?: BoolFieldUpdateOperationsInput | boolean
    sharedParameterGuid?: StringFieldUpdateOperationsInput | string
  }

  export type ParametersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parameterGuid?: StringFieldUpdateOperationsInput | string
    documentOwner?: StringFieldUpdateOperationsInput | string
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    typeId?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    groupTypeId?: StringFieldUpdateOperationsInput | string
    hasValue?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    isUserModifiable?: BoolFieldUpdateOperationsInput | boolean
    sharedParameterGuid?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentInformationCreateInput = {
    name?: string
    path?: string
    uuid?: string
    saveCount?: number
    document: WolfpackCreateNestedOneWithoutDocumentInformationInput
  }

  export type DocumentInformationUncheckedCreateInput = {
    id?: number
    documentId: string
    name?: string
    path?: string
    uuid?: string
    saveCount?: number
  }

  export type DocumentInformationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    saveCount?: IntFieldUpdateOperationsInput | number
    document?: WolfpackUpdateOneRequiredWithoutDocumentInformationNestedInput
  }

  export type DocumentInformationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    saveCount?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentInformationCreateManyInput = {
    id?: number
    documentId: string
    name?: string
    path?: string
    uuid?: string
    saveCount?: number
  }

  export type DocumentInformationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    saveCount?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentInformationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    saveCount?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentWarningCreateInput = {
    createdAt: Date | string
    severity: string
    message: string
    failingElementId?: DocumentWarningCreatefailingElementIdInput | bigint[] | number[]
    document: WolfpackCreateNestedOneWithoutWarningsInput
  }

  export type DocumentWarningUncheckedCreateInput = {
    id?: number
    documentId: string
    createdAt: Date | string
    severity: string
    message: string
    failingElementId?: DocumentWarningCreatefailingElementIdInput | bigint[] | number[]
  }

  export type DocumentWarningUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    failingElementId?: DocumentWarningUpdatefailingElementIdInput | bigint[] | number[]
    document?: WolfpackUpdateOneRequiredWithoutWarningsNestedInput
  }

  export type DocumentWarningUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    failingElementId?: DocumentWarningUpdatefailingElementIdInput | bigint[] | number[]
  }

  export type DocumentWarningCreateManyInput = {
    id?: number
    documentId: string
    createdAt: Date | string
    severity: string
    message: string
    failingElementId?: DocumentWarningCreatefailingElementIdInput | bigint[] | number[]
  }

  export type DocumentWarningUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    failingElementId?: DocumentWarningUpdatefailingElementIdInput | bigint[] | number[]
  }

  export type DocumentWarningUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    failingElementId?: DocumentWarningUpdatefailingElementIdInput | bigint[] | number[]
  }

  export type SiteInformationCreateInput = {
    placeName?: string
    elevation?: bigint | number
    latitude?: bigint | number
    longitude?: bigint | number
    timeZone?: bigint | number
    coordinateSystemId?: string
    coordinateSystemDefinition?: string
    document: WolfpackCreateNestedOneWithoutSiteInformationInput
  }

  export type SiteInformationUncheckedCreateInput = {
    id?: number
    documentId: string
    placeName?: string
    elevation?: bigint | number
    latitude?: bigint | number
    longitude?: bigint | number
    timeZone?: bigint | number
    coordinateSystemId?: string
    coordinateSystemDefinition?: string
  }

  export type SiteInformationUpdateInput = {
    placeName?: StringFieldUpdateOperationsInput | string
    elevation?: BigIntFieldUpdateOperationsInput | bigint | number
    latitude?: BigIntFieldUpdateOperationsInput | bigint | number
    longitude?: BigIntFieldUpdateOperationsInput | bigint | number
    timeZone?: BigIntFieldUpdateOperationsInput | bigint | number
    coordinateSystemId?: StringFieldUpdateOperationsInput | string
    coordinateSystemDefinition?: StringFieldUpdateOperationsInput | string
    document?: WolfpackUpdateOneRequiredWithoutSiteInformationNestedInput
  }

  export type SiteInformationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    elevation?: BigIntFieldUpdateOperationsInput | bigint | number
    latitude?: BigIntFieldUpdateOperationsInput | bigint | number
    longitude?: BigIntFieldUpdateOperationsInput | bigint | number
    timeZone?: BigIntFieldUpdateOperationsInput | bigint | number
    coordinateSystemId?: StringFieldUpdateOperationsInput | string
    coordinateSystemDefinition?: StringFieldUpdateOperationsInput | string
  }

  export type SiteInformationCreateManyInput = {
    id?: number
    documentId: string
    placeName?: string
    elevation?: bigint | number
    latitude?: bigint | number
    longitude?: bigint | number
    timeZone?: bigint | number
    coordinateSystemId?: string
    coordinateSystemDefinition?: string
  }

  export type SiteInformationUpdateManyMutationInput = {
    placeName?: StringFieldUpdateOperationsInput | string
    elevation?: BigIntFieldUpdateOperationsInput | bigint | number
    latitude?: BigIntFieldUpdateOperationsInput | bigint | number
    longitude?: BigIntFieldUpdateOperationsInput | bigint | number
    timeZone?: BigIntFieldUpdateOperationsInput | bigint | number
    coordinateSystemId?: StringFieldUpdateOperationsInput | string
    coordinateSystemDefinition?: StringFieldUpdateOperationsInput | string
  }

  export type SiteInformationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    elevation?: BigIntFieldUpdateOperationsInput | bigint | number
    latitude?: BigIntFieldUpdateOperationsInput | bigint | number
    longitude?: BigIntFieldUpdateOperationsInput | bigint | number
    timeZone?: BigIntFieldUpdateOperationsInput | bigint | number
    coordinateSystemId?: StringFieldUpdateOperationsInput | string
    coordinateSystemDefinition?: StringFieldUpdateOperationsInput | string
  }

  export type UnitsInformationCreateInput = {
    lengthUnits?: string
    areaUnits?: string
    angle?: string
    currency?: string
    number?: string
    rotationAngle?: string
    sheetLength?: string
    slope?: string
    speed?: string
    time?: string
    volume?: string
    document: WolfpackCreateNestedOneWithoutUnitsInformationInput
  }

  export type UnitsInformationUncheckedCreateInput = {
    id?: number
    documentId: string
    lengthUnits?: string
    areaUnits?: string
    angle?: string
    currency?: string
    number?: string
    rotationAngle?: string
    sheetLength?: string
    slope?: string
    speed?: string
    time?: string
    volume?: string
  }

  export type UnitsInformationUpdateInput = {
    lengthUnits?: StringFieldUpdateOperationsInput | string
    areaUnits?: StringFieldUpdateOperationsInput | string
    angle?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    rotationAngle?: StringFieldUpdateOperationsInput | string
    sheetLength?: StringFieldUpdateOperationsInput | string
    slope?: StringFieldUpdateOperationsInput | string
    speed?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    document?: WolfpackUpdateOneRequiredWithoutUnitsInformationNestedInput
  }

  export type UnitsInformationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    lengthUnits?: StringFieldUpdateOperationsInput | string
    areaUnits?: StringFieldUpdateOperationsInput | string
    angle?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    rotationAngle?: StringFieldUpdateOperationsInput | string
    sheetLength?: StringFieldUpdateOperationsInput | string
    slope?: StringFieldUpdateOperationsInput | string
    speed?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
  }

  export type UnitsInformationCreateManyInput = {
    id?: number
    documentId: string
    lengthUnits?: string
    areaUnits?: string
    angle?: string
    currency?: string
    number?: string
    rotationAngle?: string
    sheetLength?: string
    slope?: string
    speed?: string
    time?: string
    volume?: string
  }

  export type UnitsInformationUpdateManyMutationInput = {
    lengthUnits?: StringFieldUpdateOperationsInput | string
    areaUnits?: StringFieldUpdateOperationsInput | string
    angle?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    rotationAngle?: StringFieldUpdateOperationsInput | string
    sheetLength?: StringFieldUpdateOperationsInput | string
    slope?: StringFieldUpdateOperationsInput | string
    speed?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
  }

  export type UnitsInformationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    lengthUnits?: StringFieldUpdateOperationsInput | string
    areaUnits?: StringFieldUpdateOperationsInput | string
    angle?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    rotationAngle?: StringFieldUpdateOperationsInput | string
    sheetLength?: StringFieldUpdateOperationsInput | string
    slope?: StringFieldUpdateOperationsInput | string
    speed?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
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

  export type BigIntNullableListFilter<$PrismaModel = never> = {
    equals?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    has?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    hasEvery?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    hasSome?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type ProjectInformationNullableScalarRelationFilter = {
    is?: ProjectInformationWhereInput | null
    isNot?: ProjectInformationWhereInput | null
  }

  export type DocumentInformationNullableScalarRelationFilter = {
    is?: DocumentInformationWhereInput | null
    isNot?: DocumentInformationWhereInput | null
  }

  export type SiteInformationNullableScalarRelationFilter = {
    is?: SiteInformationWhereInput | null
    isNot?: SiteInformationWhereInput | null
  }

  export type UnitsInformationNullableScalarRelationFilter = {
    is?: UnitsInformationWhereInput | null
    isNot?: UnitsInformationWhereInput | null
  }

  export type DocumentWarningListRelationFilter = {
    every?: DocumentWarningWhereInput
    some?: DocumentWarningWhereInput
    none?: DocumentWarningWhereInput
  }

  export type ElementInformationListRelationFilter = {
    every?: ElementInformationWhereInput
    some?: ElementInformationWhereInput
    none?: ElementInformationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocumentWarningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ElementInformationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WolfpackCountOrderByAggregateInput = {
    id?: SortOrder
    documentName?: SortOrder
    documentSessionId?: SortOrder
    documentCreationId?: SortOrder
    changedElements?: SortOrder
    fileOrigin?: SortOrder
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
    changedElements?: SortOrder
    timeTaken?: SortOrder
    resultCount?: SortOrder
  }

  export type WolfpackMaxOrderByAggregateInput = {
    id?: SortOrder
    documentName?: SortOrder
    documentSessionId?: SortOrder
    documentCreationId?: SortOrder
    fileOrigin?: SortOrder
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
    documentSessionId?: SortOrder
    documentCreationId?: SortOrder
    fileOrigin?: SortOrder
    wasCompleted?: SortOrder
    timeTaken?: SortOrder
    createdAt?: SortOrder
    guid?: SortOrder
    resultCount?: SortOrder
    testName?: SortOrder
  }

  export type WolfpackSumOrderByAggregateInput = {
    id?: SortOrder
    changedElements?: SortOrder
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

  export type WolfpackScalarRelationFilter = {
    is?: WolfpackWhereInput
    isNot?: WolfpackWhereInput
  }

  export type ProjectInformationCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    projectName?: SortOrder
    client?: SortOrder
    address?: SortOrder
    author?: SortOrder
    buildingName?: SortOrder
    issueDate?: SortOrder
    location?: SortOrder
    projectNumber?: SortOrder
    organizationDescription?: SortOrder
    organizationName?: SortOrder
    status?: SortOrder
  }

  export type ProjectInformationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    projectName?: SortOrder
    client?: SortOrder
    address?: SortOrder
    author?: SortOrder
    buildingName?: SortOrder
    issueDate?: SortOrder
    location?: SortOrder
    projectNumber?: SortOrder
    organizationDescription?: SortOrder
    organizationName?: SortOrder
    status?: SortOrder
  }

  export type ProjectInformationMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    projectName?: SortOrder
    client?: SortOrder
    address?: SortOrder
    author?: SortOrder
    buildingName?: SortOrder
    issueDate?: SortOrder
    location?: SortOrder
    projectNumber?: SortOrder
    organizationDescription?: SortOrder
    organizationName?: SortOrder
    status?: SortOrder
  }

  export type ProjectInformationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type ParametersListRelationFilter = {
    every?: ParametersWhereInput
    some?: ParametersWhereInput
    none?: ParametersWhereInput
  }

  export type ParametersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ElementInformationCountOrderByAggregateInput = {
    id?: SortOrder
    uniqueElementId?: SortOrder
    idValue?: SortOrder
    elementVersionId?: SortOrder
    familyName?: SortOrder
    builtInCategory?: SortOrder
    name?: SortOrder
  }

  export type ElementInformationAvgOrderByAggregateInput = {
    id?: SortOrder
    idValue?: SortOrder
  }

  export type ElementInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    uniqueElementId?: SortOrder
    idValue?: SortOrder
    elementVersionId?: SortOrder
    familyName?: SortOrder
    builtInCategory?: SortOrder
    name?: SortOrder
  }

  export type ElementInformationMinOrderByAggregateInput = {
    id?: SortOrder
    uniqueElementId?: SortOrder
    idValue?: SortOrder
    elementVersionId?: SortOrder
    familyName?: SortOrder
    builtInCategory?: SortOrder
    name?: SortOrder
  }

  export type ElementInformationSumOrderByAggregateInput = {
    id?: SortOrder
    idValue?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumStorageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageType | EnumStorageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StorageType[] | ListEnumStorageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StorageType[] | ListEnumStorageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStorageTypeFilter<$PrismaModel> | $Enums.StorageType
  }

  export type ElementInformationScalarRelationFilter = {
    is?: ElementInformationWhereInput
    isNot?: ElementInformationWhereInput
  }

  export type ParametersCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    parameterGuid?: SortOrder
    documentOwner?: SortOrder
    storageType?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isReadOnly?: SortOrder
    typeId?: SortOrder
    dataType?: SortOrder
    groupTypeId?: SortOrder
    hasValue?: SortOrder
    isShared?: SortOrder
    isUserModifiable?: SortOrder
    sharedParameterGuid?: SortOrder
  }

  export type ParametersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ParametersMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    parameterGuid?: SortOrder
    documentOwner?: SortOrder
    storageType?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isReadOnly?: SortOrder
    typeId?: SortOrder
    dataType?: SortOrder
    groupTypeId?: SortOrder
    hasValue?: SortOrder
    isShared?: SortOrder
    isUserModifiable?: SortOrder
    sharedParameterGuid?: SortOrder
  }

  export type ParametersMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    parameterGuid?: SortOrder
    documentOwner?: SortOrder
    storageType?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isReadOnly?: SortOrder
    typeId?: SortOrder
    dataType?: SortOrder
    groupTypeId?: SortOrder
    hasValue?: SortOrder
    isShared?: SortOrder
    isUserModifiable?: SortOrder
    sharedParameterGuid?: SortOrder
  }

  export type ParametersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStorageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageType | EnumStorageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StorageType[] | ListEnumStorageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StorageType[] | ListEnumStorageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStorageTypeWithAggregatesFilter<$PrismaModel> | $Enums.StorageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStorageTypeFilter<$PrismaModel>
    _max?: NestedEnumStorageTypeFilter<$PrismaModel>
  }

  export type DocumentInformationCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    uuid?: SortOrder
    saveCount?: SortOrder
  }

  export type DocumentInformationAvgOrderByAggregateInput = {
    id?: SortOrder
    saveCount?: SortOrder
  }

  export type DocumentInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    uuid?: SortOrder
    saveCount?: SortOrder
  }

  export type DocumentInformationMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    uuid?: SortOrder
    saveCount?: SortOrder
  }

  export type DocumentInformationSumOrderByAggregateInput = {
    id?: SortOrder
    saveCount?: SortOrder
  }

  export type DocumentWarningCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    failingElementId?: SortOrder
  }

  export type DocumentWarningAvgOrderByAggregateInput = {
    id?: SortOrder
    failingElementId?: SortOrder
  }

  export type DocumentWarningMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
    severity?: SortOrder
    message?: SortOrder
  }

  export type DocumentWarningMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
    severity?: SortOrder
    message?: SortOrder
  }

  export type DocumentWarningSumOrderByAggregateInput = {
    id?: SortOrder
    failingElementId?: SortOrder
  }

  export type SiteInformationCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    placeName?: SortOrder
    elevation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timeZone?: SortOrder
    coordinateSystemId?: SortOrder
    coordinateSystemDefinition?: SortOrder
  }

  export type SiteInformationAvgOrderByAggregateInput = {
    id?: SortOrder
    elevation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timeZone?: SortOrder
  }

  export type SiteInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    placeName?: SortOrder
    elevation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timeZone?: SortOrder
    coordinateSystemId?: SortOrder
    coordinateSystemDefinition?: SortOrder
  }

  export type SiteInformationMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    placeName?: SortOrder
    elevation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timeZone?: SortOrder
    coordinateSystemId?: SortOrder
    coordinateSystemDefinition?: SortOrder
  }

  export type SiteInformationSumOrderByAggregateInput = {
    id?: SortOrder
    elevation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timeZone?: SortOrder
  }

  export type UnitsInformationCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    lengthUnits?: SortOrder
    areaUnits?: SortOrder
    angle?: SortOrder
    currency?: SortOrder
    number?: SortOrder
    rotationAngle?: SortOrder
    sheetLength?: SortOrder
    slope?: SortOrder
    speed?: SortOrder
    time?: SortOrder
    volume?: SortOrder
  }

  export type UnitsInformationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UnitsInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    lengthUnits?: SortOrder
    areaUnits?: SortOrder
    angle?: SortOrder
    currency?: SortOrder
    number?: SortOrder
    rotationAngle?: SortOrder
    sheetLength?: SortOrder
    slope?: SortOrder
    speed?: SortOrder
    time?: SortOrder
    volume?: SortOrder
  }

  export type UnitsInformationMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    lengthUnits?: SortOrder
    areaUnits?: SortOrder
    angle?: SortOrder
    currency?: SortOrder
    number?: SortOrder
    rotationAngle?: SortOrder
    sheetLength?: SortOrder
    slope?: SortOrder
    speed?: SortOrder
    time?: SortOrder
    volume?: SortOrder
  }

  export type UnitsInformationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WolfpackCreatechangedElementsInput = {
    set: bigint[] | number[]
  }

  export type ProjectInformationCreateNestedOneWithoutDocumentInput = {
    create?: XOR<ProjectInformationCreateWithoutDocumentInput, ProjectInformationUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: ProjectInformationCreateOrConnectWithoutDocumentInput
    connect?: ProjectInformationWhereUniqueInput
  }

  export type DocumentInformationCreateNestedOneWithoutDocumentInput = {
    create?: XOR<DocumentInformationCreateWithoutDocumentInput, DocumentInformationUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: DocumentInformationCreateOrConnectWithoutDocumentInput
    connect?: DocumentInformationWhereUniqueInput
  }

  export type SiteInformationCreateNestedOneWithoutDocumentInput = {
    create?: XOR<SiteInformationCreateWithoutDocumentInput, SiteInformationUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: SiteInformationCreateOrConnectWithoutDocumentInput
    connect?: SiteInformationWhereUniqueInput
  }

  export type UnitsInformationCreateNestedOneWithoutDocumentInput = {
    create?: XOR<UnitsInformationCreateWithoutDocumentInput, UnitsInformationUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: UnitsInformationCreateOrConnectWithoutDocumentInput
    connect?: UnitsInformationWhereUniqueInput
  }

  export type DocumentWarningCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentWarningCreateWithoutDocumentInput, DocumentWarningUncheckedCreateWithoutDocumentInput> | DocumentWarningCreateWithoutDocumentInput[] | DocumentWarningUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentWarningCreateOrConnectWithoutDocumentInput | DocumentWarningCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentWarningCreateManyDocumentInputEnvelope
    connect?: DocumentWarningWhereUniqueInput | DocumentWarningWhereUniqueInput[]
  }

  export type ElementInformationCreateNestedManyWithoutWolfpackIdInput = {
    create?: XOR<ElementInformationCreateWithoutWolfpackIdInput, ElementInformationUncheckedCreateWithoutWolfpackIdInput> | ElementInformationCreateWithoutWolfpackIdInput[] | ElementInformationUncheckedCreateWithoutWolfpackIdInput[]
    connectOrCreate?: ElementInformationCreateOrConnectWithoutWolfpackIdInput | ElementInformationCreateOrConnectWithoutWolfpackIdInput[]
    createMany?: ElementInformationCreateManyWolfpackIdInputEnvelope
    connect?: ElementInformationWhereUniqueInput | ElementInformationWhereUniqueInput[]
  }

  export type ProjectInformationUncheckedCreateNestedOneWithoutDocumentInput = {
    create?: XOR<ProjectInformationCreateWithoutDocumentInput, ProjectInformationUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: ProjectInformationCreateOrConnectWithoutDocumentInput
    connect?: ProjectInformationWhereUniqueInput
  }

  export type DocumentInformationUncheckedCreateNestedOneWithoutDocumentInput = {
    create?: XOR<DocumentInformationCreateWithoutDocumentInput, DocumentInformationUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: DocumentInformationCreateOrConnectWithoutDocumentInput
    connect?: DocumentInformationWhereUniqueInput
  }

  export type SiteInformationUncheckedCreateNestedOneWithoutDocumentInput = {
    create?: XOR<SiteInformationCreateWithoutDocumentInput, SiteInformationUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: SiteInformationCreateOrConnectWithoutDocumentInput
    connect?: SiteInformationWhereUniqueInput
  }

  export type UnitsInformationUncheckedCreateNestedOneWithoutDocumentInput = {
    create?: XOR<UnitsInformationCreateWithoutDocumentInput, UnitsInformationUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: UnitsInformationCreateOrConnectWithoutDocumentInput
    connect?: UnitsInformationWhereUniqueInput
  }

  export type DocumentWarningUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentWarningCreateWithoutDocumentInput, DocumentWarningUncheckedCreateWithoutDocumentInput> | DocumentWarningCreateWithoutDocumentInput[] | DocumentWarningUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentWarningCreateOrConnectWithoutDocumentInput | DocumentWarningCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentWarningCreateManyDocumentInputEnvelope
    connect?: DocumentWarningWhereUniqueInput | DocumentWarningWhereUniqueInput[]
  }

  export type ElementInformationUncheckedCreateNestedManyWithoutWolfpackIdInput = {
    create?: XOR<ElementInformationCreateWithoutWolfpackIdInput, ElementInformationUncheckedCreateWithoutWolfpackIdInput> | ElementInformationCreateWithoutWolfpackIdInput[] | ElementInformationUncheckedCreateWithoutWolfpackIdInput[]
    connectOrCreate?: ElementInformationCreateOrConnectWithoutWolfpackIdInput | ElementInformationCreateOrConnectWithoutWolfpackIdInput[]
    createMany?: ElementInformationCreateManyWolfpackIdInputEnvelope
    connect?: ElementInformationWhereUniqueInput | ElementInformationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type WolfpackUpdatechangedElementsInput = {
    set?: bigint[] | number[]
    push?: bigint | number | bigint[] | number[]
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

  export type ProjectInformationUpdateOneWithoutDocumentNestedInput = {
    create?: XOR<ProjectInformationCreateWithoutDocumentInput, ProjectInformationUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: ProjectInformationCreateOrConnectWithoutDocumentInput
    upsert?: ProjectInformationUpsertWithoutDocumentInput
    disconnect?: ProjectInformationWhereInput | boolean
    delete?: ProjectInformationWhereInput | boolean
    connect?: ProjectInformationWhereUniqueInput
    update?: XOR<XOR<ProjectInformationUpdateToOneWithWhereWithoutDocumentInput, ProjectInformationUpdateWithoutDocumentInput>, ProjectInformationUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentInformationUpdateOneWithoutDocumentNestedInput = {
    create?: XOR<DocumentInformationCreateWithoutDocumentInput, DocumentInformationUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: DocumentInformationCreateOrConnectWithoutDocumentInput
    upsert?: DocumentInformationUpsertWithoutDocumentInput
    disconnect?: DocumentInformationWhereInput | boolean
    delete?: DocumentInformationWhereInput | boolean
    connect?: DocumentInformationWhereUniqueInput
    update?: XOR<XOR<DocumentInformationUpdateToOneWithWhereWithoutDocumentInput, DocumentInformationUpdateWithoutDocumentInput>, DocumentInformationUncheckedUpdateWithoutDocumentInput>
  }

  export type SiteInformationUpdateOneWithoutDocumentNestedInput = {
    create?: XOR<SiteInformationCreateWithoutDocumentInput, SiteInformationUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: SiteInformationCreateOrConnectWithoutDocumentInput
    upsert?: SiteInformationUpsertWithoutDocumentInput
    disconnect?: SiteInformationWhereInput | boolean
    delete?: SiteInformationWhereInput | boolean
    connect?: SiteInformationWhereUniqueInput
    update?: XOR<XOR<SiteInformationUpdateToOneWithWhereWithoutDocumentInput, SiteInformationUpdateWithoutDocumentInput>, SiteInformationUncheckedUpdateWithoutDocumentInput>
  }

  export type UnitsInformationUpdateOneWithoutDocumentNestedInput = {
    create?: XOR<UnitsInformationCreateWithoutDocumentInput, UnitsInformationUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: UnitsInformationCreateOrConnectWithoutDocumentInput
    upsert?: UnitsInformationUpsertWithoutDocumentInput
    disconnect?: UnitsInformationWhereInput | boolean
    delete?: UnitsInformationWhereInput | boolean
    connect?: UnitsInformationWhereUniqueInput
    update?: XOR<XOR<UnitsInformationUpdateToOneWithWhereWithoutDocumentInput, UnitsInformationUpdateWithoutDocumentInput>, UnitsInformationUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentWarningUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentWarningCreateWithoutDocumentInput, DocumentWarningUncheckedCreateWithoutDocumentInput> | DocumentWarningCreateWithoutDocumentInput[] | DocumentWarningUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentWarningCreateOrConnectWithoutDocumentInput | DocumentWarningCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentWarningUpsertWithWhereUniqueWithoutDocumentInput | DocumentWarningUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentWarningCreateManyDocumentInputEnvelope
    set?: DocumentWarningWhereUniqueInput | DocumentWarningWhereUniqueInput[]
    disconnect?: DocumentWarningWhereUniqueInput | DocumentWarningWhereUniqueInput[]
    delete?: DocumentWarningWhereUniqueInput | DocumentWarningWhereUniqueInput[]
    connect?: DocumentWarningWhereUniqueInput | DocumentWarningWhereUniqueInput[]
    update?: DocumentWarningUpdateWithWhereUniqueWithoutDocumentInput | DocumentWarningUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentWarningUpdateManyWithWhereWithoutDocumentInput | DocumentWarningUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentWarningScalarWhereInput | DocumentWarningScalarWhereInput[]
  }

  export type ElementInformationUpdateManyWithoutWolfpackIdNestedInput = {
    create?: XOR<ElementInformationCreateWithoutWolfpackIdInput, ElementInformationUncheckedCreateWithoutWolfpackIdInput> | ElementInformationCreateWithoutWolfpackIdInput[] | ElementInformationUncheckedCreateWithoutWolfpackIdInput[]
    connectOrCreate?: ElementInformationCreateOrConnectWithoutWolfpackIdInput | ElementInformationCreateOrConnectWithoutWolfpackIdInput[]
    upsert?: ElementInformationUpsertWithWhereUniqueWithoutWolfpackIdInput | ElementInformationUpsertWithWhereUniqueWithoutWolfpackIdInput[]
    createMany?: ElementInformationCreateManyWolfpackIdInputEnvelope
    set?: ElementInformationWhereUniqueInput | ElementInformationWhereUniqueInput[]
    disconnect?: ElementInformationWhereUniqueInput | ElementInformationWhereUniqueInput[]
    delete?: ElementInformationWhereUniqueInput | ElementInformationWhereUniqueInput[]
    connect?: ElementInformationWhereUniqueInput | ElementInformationWhereUniqueInput[]
    update?: ElementInformationUpdateWithWhereUniqueWithoutWolfpackIdInput | ElementInformationUpdateWithWhereUniqueWithoutWolfpackIdInput[]
    updateMany?: ElementInformationUpdateManyWithWhereWithoutWolfpackIdInput | ElementInformationUpdateManyWithWhereWithoutWolfpackIdInput[]
    deleteMany?: ElementInformationScalarWhereInput | ElementInformationScalarWhereInput[]
  }

  export type ProjectInformationUncheckedUpdateOneWithoutDocumentNestedInput = {
    create?: XOR<ProjectInformationCreateWithoutDocumentInput, ProjectInformationUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: ProjectInformationCreateOrConnectWithoutDocumentInput
    upsert?: ProjectInformationUpsertWithoutDocumentInput
    disconnect?: ProjectInformationWhereInput | boolean
    delete?: ProjectInformationWhereInput | boolean
    connect?: ProjectInformationWhereUniqueInput
    update?: XOR<XOR<ProjectInformationUpdateToOneWithWhereWithoutDocumentInput, ProjectInformationUpdateWithoutDocumentInput>, ProjectInformationUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentInformationUncheckedUpdateOneWithoutDocumentNestedInput = {
    create?: XOR<DocumentInformationCreateWithoutDocumentInput, DocumentInformationUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: DocumentInformationCreateOrConnectWithoutDocumentInput
    upsert?: DocumentInformationUpsertWithoutDocumentInput
    disconnect?: DocumentInformationWhereInput | boolean
    delete?: DocumentInformationWhereInput | boolean
    connect?: DocumentInformationWhereUniqueInput
    update?: XOR<XOR<DocumentInformationUpdateToOneWithWhereWithoutDocumentInput, DocumentInformationUpdateWithoutDocumentInput>, DocumentInformationUncheckedUpdateWithoutDocumentInput>
  }

  export type SiteInformationUncheckedUpdateOneWithoutDocumentNestedInput = {
    create?: XOR<SiteInformationCreateWithoutDocumentInput, SiteInformationUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: SiteInformationCreateOrConnectWithoutDocumentInput
    upsert?: SiteInformationUpsertWithoutDocumentInput
    disconnect?: SiteInformationWhereInput | boolean
    delete?: SiteInformationWhereInput | boolean
    connect?: SiteInformationWhereUniqueInput
    update?: XOR<XOR<SiteInformationUpdateToOneWithWhereWithoutDocumentInput, SiteInformationUpdateWithoutDocumentInput>, SiteInformationUncheckedUpdateWithoutDocumentInput>
  }

  export type UnitsInformationUncheckedUpdateOneWithoutDocumentNestedInput = {
    create?: XOR<UnitsInformationCreateWithoutDocumentInput, UnitsInformationUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: UnitsInformationCreateOrConnectWithoutDocumentInput
    upsert?: UnitsInformationUpsertWithoutDocumentInput
    disconnect?: UnitsInformationWhereInput | boolean
    delete?: UnitsInformationWhereInput | boolean
    connect?: UnitsInformationWhereUniqueInput
    update?: XOR<XOR<UnitsInformationUpdateToOneWithWhereWithoutDocumentInput, UnitsInformationUpdateWithoutDocumentInput>, UnitsInformationUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentWarningUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentWarningCreateWithoutDocumentInput, DocumentWarningUncheckedCreateWithoutDocumentInput> | DocumentWarningCreateWithoutDocumentInput[] | DocumentWarningUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentWarningCreateOrConnectWithoutDocumentInput | DocumentWarningCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentWarningUpsertWithWhereUniqueWithoutDocumentInput | DocumentWarningUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentWarningCreateManyDocumentInputEnvelope
    set?: DocumentWarningWhereUniqueInput | DocumentWarningWhereUniqueInput[]
    disconnect?: DocumentWarningWhereUniqueInput | DocumentWarningWhereUniqueInput[]
    delete?: DocumentWarningWhereUniqueInput | DocumentWarningWhereUniqueInput[]
    connect?: DocumentWarningWhereUniqueInput | DocumentWarningWhereUniqueInput[]
    update?: DocumentWarningUpdateWithWhereUniqueWithoutDocumentInput | DocumentWarningUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentWarningUpdateManyWithWhereWithoutDocumentInput | DocumentWarningUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentWarningScalarWhereInput | DocumentWarningScalarWhereInput[]
  }

  export type ElementInformationUncheckedUpdateManyWithoutWolfpackIdNestedInput = {
    create?: XOR<ElementInformationCreateWithoutWolfpackIdInput, ElementInformationUncheckedCreateWithoutWolfpackIdInput> | ElementInformationCreateWithoutWolfpackIdInput[] | ElementInformationUncheckedCreateWithoutWolfpackIdInput[]
    connectOrCreate?: ElementInformationCreateOrConnectWithoutWolfpackIdInput | ElementInformationCreateOrConnectWithoutWolfpackIdInput[]
    upsert?: ElementInformationUpsertWithWhereUniqueWithoutWolfpackIdInput | ElementInformationUpsertWithWhereUniqueWithoutWolfpackIdInput[]
    createMany?: ElementInformationCreateManyWolfpackIdInputEnvelope
    set?: ElementInformationWhereUniqueInput | ElementInformationWhereUniqueInput[]
    disconnect?: ElementInformationWhereUniqueInput | ElementInformationWhereUniqueInput[]
    delete?: ElementInformationWhereUniqueInput | ElementInformationWhereUniqueInput[]
    connect?: ElementInformationWhereUniqueInput | ElementInformationWhereUniqueInput[]
    update?: ElementInformationUpdateWithWhereUniqueWithoutWolfpackIdInput | ElementInformationUpdateWithWhereUniqueWithoutWolfpackIdInput[]
    updateMany?: ElementInformationUpdateManyWithWhereWithoutWolfpackIdInput | ElementInformationUpdateManyWithWhereWithoutWolfpackIdInput[]
    deleteMany?: ElementInformationScalarWhereInput | ElementInformationScalarWhereInput[]
  }

  export type WolfpackCreateNestedOneWithoutProjectInformationInput = {
    create?: XOR<WolfpackCreateWithoutProjectInformationInput, WolfpackUncheckedCreateWithoutProjectInformationInput>
    connectOrCreate?: WolfpackCreateOrConnectWithoutProjectInformationInput
    connect?: WolfpackWhereUniqueInput
  }

  export type WolfpackUpdateOneRequiredWithoutProjectInformationNestedInput = {
    create?: XOR<WolfpackCreateWithoutProjectInformationInput, WolfpackUncheckedCreateWithoutProjectInformationInput>
    connectOrCreate?: WolfpackCreateOrConnectWithoutProjectInformationInput
    upsert?: WolfpackUpsertWithoutProjectInformationInput
    connect?: WolfpackWhereUniqueInput
    update?: XOR<XOR<WolfpackUpdateToOneWithWhereWithoutProjectInformationInput, WolfpackUpdateWithoutProjectInformationInput>, WolfpackUncheckedUpdateWithoutProjectInformationInput>
  }

  export type WolfpackCreateNestedOneWithoutElementInfoInput = {
    create?: XOR<WolfpackCreateWithoutElementInfoInput, WolfpackUncheckedCreateWithoutElementInfoInput>
    connectOrCreate?: WolfpackCreateOrConnectWithoutElementInfoInput
    connect?: WolfpackWhereUniqueInput
  }

  export type ParametersCreateNestedManyWithoutParentElementInfoInput = {
    create?: XOR<ParametersCreateWithoutParentElementInfoInput, ParametersUncheckedCreateWithoutParentElementInfoInput> | ParametersCreateWithoutParentElementInfoInput[] | ParametersUncheckedCreateWithoutParentElementInfoInput[]
    connectOrCreate?: ParametersCreateOrConnectWithoutParentElementInfoInput | ParametersCreateOrConnectWithoutParentElementInfoInput[]
    createMany?: ParametersCreateManyParentElementInfoInputEnvelope
    connect?: ParametersWhereUniqueInput | ParametersWhereUniqueInput[]
  }

  export type ParametersUncheckedCreateNestedManyWithoutParentElementInfoInput = {
    create?: XOR<ParametersCreateWithoutParentElementInfoInput, ParametersUncheckedCreateWithoutParentElementInfoInput> | ParametersCreateWithoutParentElementInfoInput[] | ParametersUncheckedCreateWithoutParentElementInfoInput[]
    connectOrCreate?: ParametersCreateOrConnectWithoutParentElementInfoInput | ParametersCreateOrConnectWithoutParentElementInfoInput[]
    createMany?: ParametersCreateManyParentElementInfoInputEnvelope
    connect?: ParametersWhereUniqueInput | ParametersWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type WolfpackUpdateOneRequiredWithoutElementInfoNestedInput = {
    create?: XOR<WolfpackCreateWithoutElementInfoInput, WolfpackUncheckedCreateWithoutElementInfoInput>
    connectOrCreate?: WolfpackCreateOrConnectWithoutElementInfoInput
    upsert?: WolfpackUpsertWithoutElementInfoInput
    connect?: WolfpackWhereUniqueInput
    update?: XOR<XOR<WolfpackUpdateToOneWithWhereWithoutElementInfoInput, WolfpackUpdateWithoutElementInfoInput>, WolfpackUncheckedUpdateWithoutElementInfoInput>
  }

  export type ParametersUpdateManyWithoutParentElementInfoNestedInput = {
    create?: XOR<ParametersCreateWithoutParentElementInfoInput, ParametersUncheckedCreateWithoutParentElementInfoInput> | ParametersCreateWithoutParentElementInfoInput[] | ParametersUncheckedCreateWithoutParentElementInfoInput[]
    connectOrCreate?: ParametersCreateOrConnectWithoutParentElementInfoInput | ParametersCreateOrConnectWithoutParentElementInfoInput[]
    upsert?: ParametersUpsertWithWhereUniqueWithoutParentElementInfoInput | ParametersUpsertWithWhereUniqueWithoutParentElementInfoInput[]
    createMany?: ParametersCreateManyParentElementInfoInputEnvelope
    set?: ParametersWhereUniqueInput | ParametersWhereUniqueInput[]
    disconnect?: ParametersWhereUniqueInput | ParametersWhereUniqueInput[]
    delete?: ParametersWhereUniqueInput | ParametersWhereUniqueInput[]
    connect?: ParametersWhereUniqueInput | ParametersWhereUniqueInput[]
    update?: ParametersUpdateWithWhereUniqueWithoutParentElementInfoInput | ParametersUpdateWithWhereUniqueWithoutParentElementInfoInput[]
    updateMany?: ParametersUpdateManyWithWhereWithoutParentElementInfoInput | ParametersUpdateManyWithWhereWithoutParentElementInfoInput[]
    deleteMany?: ParametersScalarWhereInput | ParametersScalarWhereInput[]
  }

  export type ParametersUncheckedUpdateManyWithoutParentElementInfoNestedInput = {
    create?: XOR<ParametersCreateWithoutParentElementInfoInput, ParametersUncheckedCreateWithoutParentElementInfoInput> | ParametersCreateWithoutParentElementInfoInput[] | ParametersUncheckedCreateWithoutParentElementInfoInput[]
    connectOrCreate?: ParametersCreateOrConnectWithoutParentElementInfoInput | ParametersCreateOrConnectWithoutParentElementInfoInput[]
    upsert?: ParametersUpsertWithWhereUniqueWithoutParentElementInfoInput | ParametersUpsertWithWhereUniqueWithoutParentElementInfoInput[]
    createMany?: ParametersCreateManyParentElementInfoInputEnvelope
    set?: ParametersWhereUniqueInput | ParametersWhereUniqueInput[]
    disconnect?: ParametersWhereUniqueInput | ParametersWhereUniqueInput[]
    delete?: ParametersWhereUniqueInput | ParametersWhereUniqueInput[]
    connect?: ParametersWhereUniqueInput | ParametersWhereUniqueInput[]
    update?: ParametersUpdateWithWhereUniqueWithoutParentElementInfoInput | ParametersUpdateWithWhereUniqueWithoutParentElementInfoInput[]
    updateMany?: ParametersUpdateManyWithWhereWithoutParentElementInfoInput | ParametersUpdateManyWithWhereWithoutParentElementInfoInput[]
    deleteMany?: ParametersScalarWhereInput | ParametersScalarWhereInput[]
  }

  export type ElementInformationCreateNestedOneWithoutParametersInput = {
    create?: XOR<ElementInformationCreateWithoutParametersInput, ElementInformationUncheckedCreateWithoutParametersInput>
    connectOrCreate?: ElementInformationCreateOrConnectWithoutParametersInput
    connect?: ElementInformationWhereUniqueInput
  }

  export type EnumStorageTypeFieldUpdateOperationsInput = {
    set?: $Enums.StorageType
  }

  export type ElementInformationUpdateOneRequiredWithoutParametersNestedInput = {
    create?: XOR<ElementInformationCreateWithoutParametersInput, ElementInformationUncheckedCreateWithoutParametersInput>
    connectOrCreate?: ElementInformationCreateOrConnectWithoutParametersInput
    upsert?: ElementInformationUpsertWithoutParametersInput
    connect?: ElementInformationWhereUniqueInput
    update?: XOR<XOR<ElementInformationUpdateToOneWithWhereWithoutParametersInput, ElementInformationUpdateWithoutParametersInput>, ElementInformationUncheckedUpdateWithoutParametersInput>
  }

  export type WolfpackCreateNestedOneWithoutDocumentInformationInput = {
    create?: XOR<WolfpackCreateWithoutDocumentInformationInput, WolfpackUncheckedCreateWithoutDocumentInformationInput>
    connectOrCreate?: WolfpackCreateOrConnectWithoutDocumentInformationInput
    connect?: WolfpackWhereUniqueInput
  }

  export type WolfpackUpdateOneRequiredWithoutDocumentInformationNestedInput = {
    create?: XOR<WolfpackCreateWithoutDocumentInformationInput, WolfpackUncheckedCreateWithoutDocumentInformationInput>
    connectOrCreate?: WolfpackCreateOrConnectWithoutDocumentInformationInput
    upsert?: WolfpackUpsertWithoutDocumentInformationInput
    connect?: WolfpackWhereUniqueInput
    update?: XOR<XOR<WolfpackUpdateToOneWithWhereWithoutDocumentInformationInput, WolfpackUpdateWithoutDocumentInformationInput>, WolfpackUncheckedUpdateWithoutDocumentInformationInput>
  }

  export type DocumentWarningCreatefailingElementIdInput = {
    set: bigint[] | number[]
  }

  export type WolfpackCreateNestedOneWithoutWarningsInput = {
    create?: XOR<WolfpackCreateWithoutWarningsInput, WolfpackUncheckedCreateWithoutWarningsInput>
    connectOrCreate?: WolfpackCreateOrConnectWithoutWarningsInput
    connect?: WolfpackWhereUniqueInput
  }

  export type DocumentWarningUpdatefailingElementIdInput = {
    set?: bigint[] | number[]
    push?: bigint | number | bigint[] | number[]
  }

  export type WolfpackUpdateOneRequiredWithoutWarningsNestedInput = {
    create?: XOR<WolfpackCreateWithoutWarningsInput, WolfpackUncheckedCreateWithoutWarningsInput>
    connectOrCreate?: WolfpackCreateOrConnectWithoutWarningsInput
    upsert?: WolfpackUpsertWithoutWarningsInput
    connect?: WolfpackWhereUniqueInput
    update?: XOR<XOR<WolfpackUpdateToOneWithWhereWithoutWarningsInput, WolfpackUpdateWithoutWarningsInput>, WolfpackUncheckedUpdateWithoutWarningsInput>
  }

  export type WolfpackCreateNestedOneWithoutSiteInformationInput = {
    create?: XOR<WolfpackCreateWithoutSiteInformationInput, WolfpackUncheckedCreateWithoutSiteInformationInput>
    connectOrCreate?: WolfpackCreateOrConnectWithoutSiteInformationInput
    connect?: WolfpackWhereUniqueInput
  }

  export type WolfpackUpdateOneRequiredWithoutSiteInformationNestedInput = {
    create?: XOR<WolfpackCreateWithoutSiteInformationInput, WolfpackUncheckedCreateWithoutSiteInformationInput>
    connectOrCreate?: WolfpackCreateOrConnectWithoutSiteInformationInput
    upsert?: WolfpackUpsertWithoutSiteInformationInput
    connect?: WolfpackWhereUniqueInput
    update?: XOR<XOR<WolfpackUpdateToOneWithWhereWithoutSiteInformationInput, WolfpackUpdateWithoutSiteInformationInput>, WolfpackUncheckedUpdateWithoutSiteInformationInput>
  }

  export type WolfpackCreateNestedOneWithoutUnitsInformationInput = {
    create?: XOR<WolfpackCreateWithoutUnitsInformationInput, WolfpackUncheckedCreateWithoutUnitsInformationInput>
    connectOrCreate?: WolfpackCreateOrConnectWithoutUnitsInformationInput
    connect?: WolfpackWhereUniqueInput
  }

  export type WolfpackUpdateOneRequiredWithoutUnitsInformationNestedInput = {
    create?: XOR<WolfpackCreateWithoutUnitsInformationInput, WolfpackUncheckedCreateWithoutUnitsInformationInput>
    connectOrCreate?: WolfpackCreateOrConnectWithoutUnitsInformationInput
    upsert?: WolfpackUpsertWithoutUnitsInformationInput
    connect?: WolfpackWhereUniqueInput
    update?: XOR<XOR<WolfpackUpdateToOneWithWhereWithoutUnitsInformationInput, WolfpackUpdateWithoutUnitsInformationInput>, WolfpackUncheckedUpdateWithoutUnitsInformationInput>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumStorageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageType | EnumStorageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StorageType[] | ListEnumStorageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StorageType[] | ListEnumStorageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStorageTypeFilter<$PrismaModel> | $Enums.StorageType
  }

  export type NestedEnumStorageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageType | EnumStorageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StorageType[] | ListEnumStorageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StorageType[] | ListEnumStorageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStorageTypeWithAggregatesFilter<$PrismaModel> | $Enums.StorageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStorageTypeFilter<$PrismaModel>
    _max?: NestedEnumStorageTypeFilter<$PrismaModel>
  }

  export type ProjectInformationCreateWithoutDocumentInput = {
    projectName?: string
    client?: string
    address?: string
    author?: string
    buildingName?: string
    issueDate?: string
    location?: string
    projectNumber?: string
    organizationDescription?: string
    organizationName?: string
    status?: string
  }

  export type ProjectInformationUncheckedCreateWithoutDocumentInput = {
    id?: number
    projectName?: string
    client?: string
    address?: string
    author?: string
    buildingName?: string
    issueDate?: string
    location?: string
    projectNumber?: string
    organizationDescription?: string
    organizationName?: string
    status?: string
  }

  export type ProjectInformationCreateOrConnectWithoutDocumentInput = {
    where: ProjectInformationWhereUniqueInput
    create: XOR<ProjectInformationCreateWithoutDocumentInput, ProjectInformationUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentInformationCreateWithoutDocumentInput = {
    name?: string
    path?: string
    uuid?: string
    saveCount?: number
  }

  export type DocumentInformationUncheckedCreateWithoutDocumentInput = {
    id?: number
    name?: string
    path?: string
    uuid?: string
    saveCount?: number
  }

  export type DocumentInformationCreateOrConnectWithoutDocumentInput = {
    where: DocumentInformationWhereUniqueInput
    create: XOR<DocumentInformationCreateWithoutDocumentInput, DocumentInformationUncheckedCreateWithoutDocumentInput>
  }

  export type SiteInformationCreateWithoutDocumentInput = {
    placeName?: string
    elevation?: bigint | number
    latitude?: bigint | number
    longitude?: bigint | number
    timeZone?: bigint | number
    coordinateSystemId?: string
    coordinateSystemDefinition?: string
  }

  export type SiteInformationUncheckedCreateWithoutDocumentInput = {
    id?: number
    placeName?: string
    elevation?: bigint | number
    latitude?: bigint | number
    longitude?: bigint | number
    timeZone?: bigint | number
    coordinateSystemId?: string
    coordinateSystemDefinition?: string
  }

  export type SiteInformationCreateOrConnectWithoutDocumentInput = {
    where: SiteInformationWhereUniqueInput
    create: XOR<SiteInformationCreateWithoutDocumentInput, SiteInformationUncheckedCreateWithoutDocumentInput>
  }

  export type UnitsInformationCreateWithoutDocumentInput = {
    lengthUnits?: string
    areaUnits?: string
    angle?: string
    currency?: string
    number?: string
    rotationAngle?: string
    sheetLength?: string
    slope?: string
    speed?: string
    time?: string
    volume?: string
  }

  export type UnitsInformationUncheckedCreateWithoutDocumentInput = {
    id?: number
    lengthUnits?: string
    areaUnits?: string
    angle?: string
    currency?: string
    number?: string
    rotationAngle?: string
    sheetLength?: string
    slope?: string
    speed?: string
    time?: string
    volume?: string
  }

  export type UnitsInformationCreateOrConnectWithoutDocumentInput = {
    where: UnitsInformationWhereUniqueInput
    create: XOR<UnitsInformationCreateWithoutDocumentInput, UnitsInformationUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentWarningCreateWithoutDocumentInput = {
    createdAt: Date | string
    severity: string
    message: string
    failingElementId?: DocumentWarningCreatefailingElementIdInput | bigint[] | number[]
  }

  export type DocumentWarningUncheckedCreateWithoutDocumentInput = {
    id?: number
    createdAt: Date | string
    severity: string
    message: string
    failingElementId?: DocumentWarningCreatefailingElementIdInput | bigint[] | number[]
  }

  export type DocumentWarningCreateOrConnectWithoutDocumentInput = {
    where: DocumentWarningWhereUniqueInput
    create: XOR<DocumentWarningCreateWithoutDocumentInput, DocumentWarningUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentWarningCreateManyDocumentInputEnvelope = {
    data: DocumentWarningCreateManyDocumentInput | DocumentWarningCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type ElementInformationCreateWithoutWolfpackIdInput = {
    idValue: bigint | number
    elementVersionId?: string
    familyName?: string
    builtInCategory?: string
    name?: string
    Parameters?: ParametersCreateNestedManyWithoutParentElementInfoInput
  }

  export type ElementInformationUncheckedCreateWithoutWolfpackIdInput = {
    id?: number
    idValue: bigint | number
    elementVersionId?: string
    familyName?: string
    builtInCategory?: string
    name?: string
    Parameters?: ParametersUncheckedCreateNestedManyWithoutParentElementInfoInput
  }

  export type ElementInformationCreateOrConnectWithoutWolfpackIdInput = {
    where: ElementInformationWhereUniqueInput
    create: XOR<ElementInformationCreateWithoutWolfpackIdInput, ElementInformationUncheckedCreateWithoutWolfpackIdInput>
  }

  export type ElementInformationCreateManyWolfpackIdInputEnvelope = {
    data: ElementInformationCreateManyWolfpackIdInput | ElementInformationCreateManyWolfpackIdInput[]
    skipDuplicates?: boolean
  }

  export type ProjectInformationUpsertWithoutDocumentInput = {
    update: XOR<ProjectInformationUpdateWithoutDocumentInput, ProjectInformationUncheckedUpdateWithoutDocumentInput>
    create: XOR<ProjectInformationCreateWithoutDocumentInput, ProjectInformationUncheckedCreateWithoutDocumentInput>
    where?: ProjectInformationWhereInput
  }

  export type ProjectInformationUpdateToOneWithWhereWithoutDocumentInput = {
    where?: ProjectInformationWhereInput
    data: XOR<ProjectInformationUpdateWithoutDocumentInput, ProjectInformationUncheckedUpdateWithoutDocumentInput>
  }

  export type ProjectInformationUpdateWithoutDocumentInput = {
    projectName?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    buildingName?: StringFieldUpdateOperationsInput | string
    issueDate?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    projectNumber?: StringFieldUpdateOperationsInput | string
    organizationDescription?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectInformationUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectName?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    buildingName?: StringFieldUpdateOperationsInput | string
    issueDate?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    projectNumber?: StringFieldUpdateOperationsInput | string
    organizationDescription?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentInformationUpsertWithoutDocumentInput = {
    update: XOR<DocumentInformationUpdateWithoutDocumentInput, DocumentInformationUncheckedUpdateWithoutDocumentInput>
    create: XOR<DocumentInformationCreateWithoutDocumentInput, DocumentInformationUncheckedCreateWithoutDocumentInput>
    where?: DocumentInformationWhereInput
  }

  export type DocumentInformationUpdateToOneWithWhereWithoutDocumentInput = {
    where?: DocumentInformationWhereInput
    data: XOR<DocumentInformationUpdateWithoutDocumentInput, DocumentInformationUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentInformationUpdateWithoutDocumentInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    saveCount?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentInformationUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    saveCount?: IntFieldUpdateOperationsInput | number
  }

  export type SiteInformationUpsertWithoutDocumentInput = {
    update: XOR<SiteInformationUpdateWithoutDocumentInput, SiteInformationUncheckedUpdateWithoutDocumentInput>
    create: XOR<SiteInformationCreateWithoutDocumentInput, SiteInformationUncheckedCreateWithoutDocumentInput>
    where?: SiteInformationWhereInput
  }

  export type SiteInformationUpdateToOneWithWhereWithoutDocumentInput = {
    where?: SiteInformationWhereInput
    data: XOR<SiteInformationUpdateWithoutDocumentInput, SiteInformationUncheckedUpdateWithoutDocumentInput>
  }

  export type SiteInformationUpdateWithoutDocumentInput = {
    placeName?: StringFieldUpdateOperationsInput | string
    elevation?: BigIntFieldUpdateOperationsInput | bigint | number
    latitude?: BigIntFieldUpdateOperationsInput | bigint | number
    longitude?: BigIntFieldUpdateOperationsInput | bigint | number
    timeZone?: BigIntFieldUpdateOperationsInput | bigint | number
    coordinateSystemId?: StringFieldUpdateOperationsInput | string
    coordinateSystemDefinition?: StringFieldUpdateOperationsInput | string
  }

  export type SiteInformationUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    placeName?: StringFieldUpdateOperationsInput | string
    elevation?: BigIntFieldUpdateOperationsInput | bigint | number
    latitude?: BigIntFieldUpdateOperationsInput | bigint | number
    longitude?: BigIntFieldUpdateOperationsInput | bigint | number
    timeZone?: BigIntFieldUpdateOperationsInput | bigint | number
    coordinateSystemId?: StringFieldUpdateOperationsInput | string
    coordinateSystemDefinition?: StringFieldUpdateOperationsInput | string
  }

  export type UnitsInformationUpsertWithoutDocumentInput = {
    update: XOR<UnitsInformationUpdateWithoutDocumentInput, UnitsInformationUncheckedUpdateWithoutDocumentInput>
    create: XOR<UnitsInformationCreateWithoutDocumentInput, UnitsInformationUncheckedCreateWithoutDocumentInput>
    where?: UnitsInformationWhereInput
  }

  export type UnitsInformationUpdateToOneWithWhereWithoutDocumentInput = {
    where?: UnitsInformationWhereInput
    data: XOR<UnitsInformationUpdateWithoutDocumentInput, UnitsInformationUncheckedUpdateWithoutDocumentInput>
  }

  export type UnitsInformationUpdateWithoutDocumentInput = {
    lengthUnits?: StringFieldUpdateOperationsInput | string
    areaUnits?: StringFieldUpdateOperationsInput | string
    angle?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    rotationAngle?: StringFieldUpdateOperationsInput | string
    sheetLength?: StringFieldUpdateOperationsInput | string
    slope?: StringFieldUpdateOperationsInput | string
    speed?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
  }

  export type UnitsInformationUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    lengthUnits?: StringFieldUpdateOperationsInput | string
    areaUnits?: StringFieldUpdateOperationsInput | string
    angle?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    rotationAngle?: StringFieldUpdateOperationsInput | string
    sheetLength?: StringFieldUpdateOperationsInput | string
    slope?: StringFieldUpdateOperationsInput | string
    speed?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentWarningUpsertWithWhereUniqueWithoutDocumentInput = {
    where: DocumentWarningWhereUniqueInput
    update: XOR<DocumentWarningUpdateWithoutDocumentInput, DocumentWarningUncheckedUpdateWithoutDocumentInput>
    create: XOR<DocumentWarningCreateWithoutDocumentInput, DocumentWarningUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentWarningUpdateWithWhereUniqueWithoutDocumentInput = {
    where: DocumentWarningWhereUniqueInput
    data: XOR<DocumentWarningUpdateWithoutDocumentInput, DocumentWarningUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentWarningUpdateManyWithWhereWithoutDocumentInput = {
    where: DocumentWarningScalarWhereInput
    data: XOR<DocumentWarningUpdateManyMutationInput, DocumentWarningUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DocumentWarningScalarWhereInput = {
    AND?: DocumentWarningScalarWhereInput | DocumentWarningScalarWhereInput[]
    OR?: DocumentWarningScalarWhereInput[]
    NOT?: DocumentWarningScalarWhereInput | DocumentWarningScalarWhereInput[]
    id?: IntFilter<"DocumentWarning"> | number
    documentId?: StringFilter<"DocumentWarning"> | string
    createdAt?: DateTimeFilter<"DocumentWarning"> | Date | string
    severity?: StringFilter<"DocumentWarning"> | string
    message?: StringFilter<"DocumentWarning"> | string
    failingElementId?: BigIntNullableListFilter<"DocumentWarning">
  }

  export type ElementInformationUpsertWithWhereUniqueWithoutWolfpackIdInput = {
    where: ElementInformationWhereUniqueInput
    update: XOR<ElementInformationUpdateWithoutWolfpackIdInput, ElementInformationUncheckedUpdateWithoutWolfpackIdInput>
    create: XOR<ElementInformationCreateWithoutWolfpackIdInput, ElementInformationUncheckedCreateWithoutWolfpackIdInput>
  }

  export type ElementInformationUpdateWithWhereUniqueWithoutWolfpackIdInput = {
    where: ElementInformationWhereUniqueInput
    data: XOR<ElementInformationUpdateWithoutWolfpackIdInput, ElementInformationUncheckedUpdateWithoutWolfpackIdInput>
  }

  export type ElementInformationUpdateManyWithWhereWithoutWolfpackIdInput = {
    where: ElementInformationScalarWhereInput
    data: XOR<ElementInformationUpdateManyMutationInput, ElementInformationUncheckedUpdateManyWithoutWolfpackIdInput>
  }

  export type ElementInformationScalarWhereInput = {
    AND?: ElementInformationScalarWhereInput | ElementInformationScalarWhereInput[]
    OR?: ElementInformationScalarWhereInput[]
    NOT?: ElementInformationScalarWhereInput | ElementInformationScalarWhereInput[]
    id?: IntFilter<"ElementInformation"> | number
    uniqueElementId?: StringFilter<"ElementInformation"> | string
    idValue?: BigIntFilter<"ElementInformation"> | bigint | number
    elementVersionId?: StringFilter<"ElementInformation"> | string
    familyName?: StringFilter<"ElementInformation"> | string
    builtInCategory?: StringFilter<"ElementInformation"> | string
    name?: StringFilter<"ElementInformation"> | string
  }

  export type WolfpackCreateWithoutProjectInformationInput = {
    documentName?: string
    documentSessionId?: string
    documentCreationId?: string
    changedElements?: WolfpackCreatechangedElementsInput | bigint[] | number[]
    fileOrigin: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
    documentInformation?: DocumentInformationCreateNestedOneWithoutDocumentInput
    siteInformation?: SiteInformationCreateNestedOneWithoutDocumentInput
    unitsInformation?: UnitsInformationCreateNestedOneWithoutDocumentInput
    warnings?: DocumentWarningCreateNestedManyWithoutDocumentInput
    elementInfo?: ElementInformationCreateNestedManyWithoutWolfpackIdInput
  }

  export type WolfpackUncheckedCreateWithoutProjectInformationInput = {
    id?: number
    documentName?: string
    documentSessionId?: string
    documentCreationId?: string
    changedElements?: WolfpackCreatechangedElementsInput | bigint[] | number[]
    fileOrigin: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
    documentInformation?: DocumentInformationUncheckedCreateNestedOneWithoutDocumentInput
    siteInformation?: SiteInformationUncheckedCreateNestedOneWithoutDocumentInput
    unitsInformation?: UnitsInformationUncheckedCreateNestedOneWithoutDocumentInput
    warnings?: DocumentWarningUncheckedCreateNestedManyWithoutDocumentInput
    elementInfo?: ElementInformationUncheckedCreateNestedManyWithoutWolfpackIdInput
  }

  export type WolfpackCreateOrConnectWithoutProjectInformationInput = {
    where: WolfpackWhereUniqueInput
    create: XOR<WolfpackCreateWithoutProjectInformationInput, WolfpackUncheckedCreateWithoutProjectInformationInput>
  }

  export type WolfpackUpsertWithoutProjectInformationInput = {
    update: XOR<WolfpackUpdateWithoutProjectInformationInput, WolfpackUncheckedUpdateWithoutProjectInformationInput>
    create: XOR<WolfpackCreateWithoutProjectInformationInput, WolfpackUncheckedCreateWithoutProjectInformationInput>
    where?: WolfpackWhereInput
  }

  export type WolfpackUpdateToOneWithWhereWithoutProjectInformationInput = {
    where?: WolfpackWhereInput
    data: XOR<WolfpackUpdateWithoutProjectInformationInput, WolfpackUncheckedUpdateWithoutProjectInformationInput>
  }

  export type WolfpackUpdateWithoutProjectInformationInput = {
    documentName?: StringFieldUpdateOperationsInput | string
    documentSessionId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: StringFieldUpdateOperationsInput | string
    changedElements?: WolfpackUpdatechangedElementsInput | bigint[] | number[]
    fileOrigin?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    documentInformation?: DocumentInformationUpdateOneWithoutDocumentNestedInput
    siteInformation?: SiteInformationUpdateOneWithoutDocumentNestedInput
    unitsInformation?: UnitsInformationUpdateOneWithoutDocumentNestedInput
    warnings?: DocumentWarningUpdateManyWithoutDocumentNestedInput
    elementInfo?: ElementInformationUpdateManyWithoutWolfpackIdNestedInput
  }

  export type WolfpackUncheckedUpdateWithoutProjectInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentName?: StringFieldUpdateOperationsInput | string
    documentSessionId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: StringFieldUpdateOperationsInput | string
    changedElements?: WolfpackUpdatechangedElementsInput | bigint[] | number[]
    fileOrigin?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    documentInformation?: DocumentInformationUncheckedUpdateOneWithoutDocumentNestedInput
    siteInformation?: SiteInformationUncheckedUpdateOneWithoutDocumentNestedInput
    unitsInformation?: UnitsInformationUncheckedUpdateOneWithoutDocumentNestedInput
    warnings?: DocumentWarningUncheckedUpdateManyWithoutDocumentNestedInput
    elementInfo?: ElementInformationUncheckedUpdateManyWithoutWolfpackIdNestedInput
  }

  export type WolfpackCreateWithoutElementInfoInput = {
    documentName?: string
    documentSessionId?: string
    documentCreationId?: string
    changedElements?: WolfpackCreatechangedElementsInput | bigint[] | number[]
    fileOrigin: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationCreateNestedOneWithoutDocumentInput
    documentInformation?: DocumentInformationCreateNestedOneWithoutDocumentInput
    siteInformation?: SiteInformationCreateNestedOneWithoutDocumentInput
    unitsInformation?: UnitsInformationCreateNestedOneWithoutDocumentInput
    warnings?: DocumentWarningCreateNestedManyWithoutDocumentInput
  }

  export type WolfpackUncheckedCreateWithoutElementInfoInput = {
    id?: number
    documentName?: string
    documentSessionId?: string
    documentCreationId?: string
    changedElements?: WolfpackCreatechangedElementsInput | bigint[] | number[]
    fileOrigin: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUncheckedCreateNestedOneWithoutDocumentInput
    documentInformation?: DocumentInformationUncheckedCreateNestedOneWithoutDocumentInput
    siteInformation?: SiteInformationUncheckedCreateNestedOneWithoutDocumentInput
    unitsInformation?: UnitsInformationUncheckedCreateNestedOneWithoutDocumentInput
    warnings?: DocumentWarningUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type WolfpackCreateOrConnectWithoutElementInfoInput = {
    where: WolfpackWhereUniqueInput
    create: XOR<WolfpackCreateWithoutElementInfoInput, WolfpackUncheckedCreateWithoutElementInfoInput>
  }

  export type ParametersCreateWithoutParentElementInfoInput = {
    createdAt?: Date | string
    documentOwner?: string
    storageType?: $Enums.StorageType
    name?: string
    value?: string
    isReadOnly?: boolean
    typeId?: string
    dataType?: string
    groupTypeId?: string
    hasValue?: boolean
    isShared?: boolean
    isUserModifiable?: boolean
    sharedParameterGuid?: string
  }

  export type ParametersUncheckedCreateWithoutParentElementInfoInput = {
    id?: number
    createdAt?: Date | string
    documentOwner?: string
    storageType?: $Enums.StorageType
    name?: string
    value?: string
    isReadOnly?: boolean
    typeId?: string
    dataType?: string
    groupTypeId?: string
    hasValue?: boolean
    isShared?: boolean
    isUserModifiable?: boolean
    sharedParameterGuid?: string
  }

  export type ParametersCreateOrConnectWithoutParentElementInfoInput = {
    where: ParametersWhereUniqueInput
    create: XOR<ParametersCreateWithoutParentElementInfoInput, ParametersUncheckedCreateWithoutParentElementInfoInput>
  }

  export type ParametersCreateManyParentElementInfoInputEnvelope = {
    data: ParametersCreateManyParentElementInfoInput | ParametersCreateManyParentElementInfoInput[]
    skipDuplicates?: boolean
  }

  export type WolfpackUpsertWithoutElementInfoInput = {
    update: XOR<WolfpackUpdateWithoutElementInfoInput, WolfpackUncheckedUpdateWithoutElementInfoInput>
    create: XOR<WolfpackCreateWithoutElementInfoInput, WolfpackUncheckedCreateWithoutElementInfoInput>
    where?: WolfpackWhereInput
  }

  export type WolfpackUpdateToOneWithWhereWithoutElementInfoInput = {
    where?: WolfpackWhereInput
    data: XOR<WolfpackUpdateWithoutElementInfoInput, WolfpackUncheckedUpdateWithoutElementInfoInput>
  }

  export type WolfpackUpdateWithoutElementInfoInput = {
    documentName?: StringFieldUpdateOperationsInput | string
    documentSessionId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: StringFieldUpdateOperationsInput | string
    changedElements?: WolfpackUpdatechangedElementsInput | bigint[] | number[]
    fileOrigin?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUpdateOneWithoutDocumentNestedInput
    documentInformation?: DocumentInformationUpdateOneWithoutDocumentNestedInput
    siteInformation?: SiteInformationUpdateOneWithoutDocumentNestedInput
    unitsInformation?: UnitsInformationUpdateOneWithoutDocumentNestedInput
    warnings?: DocumentWarningUpdateManyWithoutDocumentNestedInput
  }

  export type WolfpackUncheckedUpdateWithoutElementInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentName?: StringFieldUpdateOperationsInput | string
    documentSessionId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: StringFieldUpdateOperationsInput | string
    changedElements?: WolfpackUpdatechangedElementsInput | bigint[] | number[]
    fileOrigin?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUncheckedUpdateOneWithoutDocumentNestedInput
    documentInformation?: DocumentInformationUncheckedUpdateOneWithoutDocumentNestedInput
    siteInformation?: SiteInformationUncheckedUpdateOneWithoutDocumentNestedInput
    unitsInformation?: UnitsInformationUncheckedUpdateOneWithoutDocumentNestedInput
    warnings?: DocumentWarningUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type ParametersUpsertWithWhereUniqueWithoutParentElementInfoInput = {
    where: ParametersWhereUniqueInput
    update: XOR<ParametersUpdateWithoutParentElementInfoInput, ParametersUncheckedUpdateWithoutParentElementInfoInput>
    create: XOR<ParametersCreateWithoutParentElementInfoInput, ParametersUncheckedCreateWithoutParentElementInfoInput>
  }

  export type ParametersUpdateWithWhereUniqueWithoutParentElementInfoInput = {
    where: ParametersWhereUniqueInput
    data: XOR<ParametersUpdateWithoutParentElementInfoInput, ParametersUncheckedUpdateWithoutParentElementInfoInput>
  }

  export type ParametersUpdateManyWithWhereWithoutParentElementInfoInput = {
    where: ParametersScalarWhereInput
    data: XOR<ParametersUpdateManyMutationInput, ParametersUncheckedUpdateManyWithoutParentElementInfoInput>
  }

  export type ParametersScalarWhereInput = {
    AND?: ParametersScalarWhereInput | ParametersScalarWhereInput[]
    OR?: ParametersScalarWhereInput[]
    NOT?: ParametersScalarWhereInput | ParametersScalarWhereInput[]
    id?: IntFilter<"Parameters"> | number
    createdAt?: DateTimeFilter<"Parameters"> | Date | string
    parameterGuid?: StringFilter<"Parameters"> | string
    documentOwner?: StringFilter<"Parameters"> | string
    storageType?: EnumStorageTypeFilter<"Parameters"> | $Enums.StorageType
    name?: StringFilter<"Parameters"> | string
    value?: StringFilter<"Parameters"> | string
    isReadOnly?: BoolFilter<"Parameters"> | boolean
    typeId?: StringFilter<"Parameters"> | string
    dataType?: StringFilter<"Parameters"> | string
    groupTypeId?: StringFilter<"Parameters"> | string
    hasValue?: BoolFilter<"Parameters"> | boolean
    isShared?: BoolFilter<"Parameters"> | boolean
    isUserModifiable?: BoolFilter<"Parameters"> | boolean
    sharedParameterGuid?: StringFilter<"Parameters"> | string
  }

  export type ElementInformationCreateWithoutParametersInput = {
    idValue: bigint | number
    elementVersionId?: string
    familyName?: string
    builtInCategory?: string
    name?: string
    wolfpackId: WolfpackCreateNestedOneWithoutElementInfoInput
  }

  export type ElementInformationUncheckedCreateWithoutParametersInput = {
    id?: number
    uniqueElementId: string
    idValue: bigint | number
    elementVersionId?: string
    familyName?: string
    builtInCategory?: string
    name?: string
  }

  export type ElementInformationCreateOrConnectWithoutParametersInput = {
    where: ElementInformationWhereUniqueInput
    create: XOR<ElementInformationCreateWithoutParametersInput, ElementInformationUncheckedCreateWithoutParametersInput>
  }

  export type ElementInformationUpsertWithoutParametersInput = {
    update: XOR<ElementInformationUpdateWithoutParametersInput, ElementInformationUncheckedUpdateWithoutParametersInput>
    create: XOR<ElementInformationCreateWithoutParametersInput, ElementInformationUncheckedCreateWithoutParametersInput>
    where?: ElementInformationWhereInput
  }

  export type ElementInformationUpdateToOneWithWhereWithoutParametersInput = {
    where?: ElementInformationWhereInput
    data: XOR<ElementInformationUpdateWithoutParametersInput, ElementInformationUncheckedUpdateWithoutParametersInput>
  }

  export type ElementInformationUpdateWithoutParametersInput = {
    idValue?: BigIntFieldUpdateOperationsInput | bigint | number
    elementVersionId?: StringFieldUpdateOperationsInput | string
    familyName?: StringFieldUpdateOperationsInput | string
    builtInCategory?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    wolfpackId?: WolfpackUpdateOneRequiredWithoutElementInfoNestedInput
  }

  export type ElementInformationUncheckedUpdateWithoutParametersInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueElementId?: StringFieldUpdateOperationsInput | string
    idValue?: BigIntFieldUpdateOperationsInput | bigint | number
    elementVersionId?: StringFieldUpdateOperationsInput | string
    familyName?: StringFieldUpdateOperationsInput | string
    builtInCategory?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WolfpackCreateWithoutDocumentInformationInput = {
    documentName?: string
    documentSessionId?: string
    documentCreationId?: string
    changedElements?: WolfpackCreatechangedElementsInput | bigint[] | number[]
    fileOrigin: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationCreateNestedOneWithoutDocumentInput
    siteInformation?: SiteInformationCreateNestedOneWithoutDocumentInput
    unitsInformation?: UnitsInformationCreateNestedOneWithoutDocumentInput
    warnings?: DocumentWarningCreateNestedManyWithoutDocumentInput
    elementInfo?: ElementInformationCreateNestedManyWithoutWolfpackIdInput
  }

  export type WolfpackUncheckedCreateWithoutDocumentInformationInput = {
    id?: number
    documentName?: string
    documentSessionId?: string
    documentCreationId?: string
    changedElements?: WolfpackCreatechangedElementsInput | bigint[] | number[]
    fileOrigin: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUncheckedCreateNestedOneWithoutDocumentInput
    siteInformation?: SiteInformationUncheckedCreateNestedOneWithoutDocumentInput
    unitsInformation?: UnitsInformationUncheckedCreateNestedOneWithoutDocumentInput
    warnings?: DocumentWarningUncheckedCreateNestedManyWithoutDocumentInput
    elementInfo?: ElementInformationUncheckedCreateNestedManyWithoutWolfpackIdInput
  }

  export type WolfpackCreateOrConnectWithoutDocumentInformationInput = {
    where: WolfpackWhereUniqueInput
    create: XOR<WolfpackCreateWithoutDocumentInformationInput, WolfpackUncheckedCreateWithoutDocumentInformationInput>
  }

  export type WolfpackUpsertWithoutDocumentInformationInput = {
    update: XOR<WolfpackUpdateWithoutDocumentInformationInput, WolfpackUncheckedUpdateWithoutDocumentInformationInput>
    create: XOR<WolfpackCreateWithoutDocumentInformationInput, WolfpackUncheckedCreateWithoutDocumentInformationInput>
    where?: WolfpackWhereInput
  }

  export type WolfpackUpdateToOneWithWhereWithoutDocumentInformationInput = {
    where?: WolfpackWhereInput
    data: XOR<WolfpackUpdateWithoutDocumentInformationInput, WolfpackUncheckedUpdateWithoutDocumentInformationInput>
  }

  export type WolfpackUpdateWithoutDocumentInformationInput = {
    documentName?: StringFieldUpdateOperationsInput | string
    documentSessionId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: StringFieldUpdateOperationsInput | string
    changedElements?: WolfpackUpdatechangedElementsInput | bigint[] | number[]
    fileOrigin?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUpdateOneWithoutDocumentNestedInput
    siteInformation?: SiteInformationUpdateOneWithoutDocumentNestedInput
    unitsInformation?: UnitsInformationUpdateOneWithoutDocumentNestedInput
    warnings?: DocumentWarningUpdateManyWithoutDocumentNestedInput
    elementInfo?: ElementInformationUpdateManyWithoutWolfpackIdNestedInput
  }

  export type WolfpackUncheckedUpdateWithoutDocumentInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentName?: StringFieldUpdateOperationsInput | string
    documentSessionId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: StringFieldUpdateOperationsInput | string
    changedElements?: WolfpackUpdatechangedElementsInput | bigint[] | number[]
    fileOrigin?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUncheckedUpdateOneWithoutDocumentNestedInput
    siteInformation?: SiteInformationUncheckedUpdateOneWithoutDocumentNestedInput
    unitsInformation?: UnitsInformationUncheckedUpdateOneWithoutDocumentNestedInput
    warnings?: DocumentWarningUncheckedUpdateManyWithoutDocumentNestedInput
    elementInfo?: ElementInformationUncheckedUpdateManyWithoutWolfpackIdNestedInput
  }

  export type WolfpackCreateWithoutWarningsInput = {
    documentName?: string
    documentSessionId?: string
    documentCreationId?: string
    changedElements?: WolfpackCreatechangedElementsInput | bigint[] | number[]
    fileOrigin: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationCreateNestedOneWithoutDocumentInput
    documentInformation?: DocumentInformationCreateNestedOneWithoutDocumentInput
    siteInformation?: SiteInformationCreateNestedOneWithoutDocumentInput
    unitsInformation?: UnitsInformationCreateNestedOneWithoutDocumentInput
    elementInfo?: ElementInformationCreateNestedManyWithoutWolfpackIdInput
  }

  export type WolfpackUncheckedCreateWithoutWarningsInput = {
    id?: number
    documentName?: string
    documentSessionId?: string
    documentCreationId?: string
    changedElements?: WolfpackCreatechangedElementsInput | bigint[] | number[]
    fileOrigin: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUncheckedCreateNestedOneWithoutDocumentInput
    documentInformation?: DocumentInformationUncheckedCreateNestedOneWithoutDocumentInput
    siteInformation?: SiteInformationUncheckedCreateNestedOneWithoutDocumentInput
    unitsInformation?: UnitsInformationUncheckedCreateNestedOneWithoutDocumentInput
    elementInfo?: ElementInformationUncheckedCreateNestedManyWithoutWolfpackIdInput
  }

  export type WolfpackCreateOrConnectWithoutWarningsInput = {
    where: WolfpackWhereUniqueInput
    create: XOR<WolfpackCreateWithoutWarningsInput, WolfpackUncheckedCreateWithoutWarningsInput>
  }

  export type WolfpackUpsertWithoutWarningsInput = {
    update: XOR<WolfpackUpdateWithoutWarningsInput, WolfpackUncheckedUpdateWithoutWarningsInput>
    create: XOR<WolfpackCreateWithoutWarningsInput, WolfpackUncheckedCreateWithoutWarningsInput>
    where?: WolfpackWhereInput
  }

  export type WolfpackUpdateToOneWithWhereWithoutWarningsInput = {
    where?: WolfpackWhereInput
    data: XOR<WolfpackUpdateWithoutWarningsInput, WolfpackUncheckedUpdateWithoutWarningsInput>
  }

  export type WolfpackUpdateWithoutWarningsInput = {
    documentName?: StringFieldUpdateOperationsInput | string
    documentSessionId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: StringFieldUpdateOperationsInput | string
    changedElements?: WolfpackUpdatechangedElementsInput | bigint[] | number[]
    fileOrigin?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUpdateOneWithoutDocumentNestedInput
    documentInformation?: DocumentInformationUpdateOneWithoutDocumentNestedInput
    siteInformation?: SiteInformationUpdateOneWithoutDocumentNestedInput
    unitsInformation?: UnitsInformationUpdateOneWithoutDocumentNestedInput
    elementInfo?: ElementInformationUpdateManyWithoutWolfpackIdNestedInput
  }

  export type WolfpackUncheckedUpdateWithoutWarningsInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentName?: StringFieldUpdateOperationsInput | string
    documentSessionId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: StringFieldUpdateOperationsInput | string
    changedElements?: WolfpackUpdatechangedElementsInput | bigint[] | number[]
    fileOrigin?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUncheckedUpdateOneWithoutDocumentNestedInput
    documentInformation?: DocumentInformationUncheckedUpdateOneWithoutDocumentNestedInput
    siteInformation?: SiteInformationUncheckedUpdateOneWithoutDocumentNestedInput
    unitsInformation?: UnitsInformationUncheckedUpdateOneWithoutDocumentNestedInput
    elementInfo?: ElementInformationUncheckedUpdateManyWithoutWolfpackIdNestedInput
  }

  export type WolfpackCreateWithoutSiteInformationInput = {
    documentName?: string
    documentSessionId?: string
    documentCreationId?: string
    changedElements?: WolfpackCreatechangedElementsInput | bigint[] | number[]
    fileOrigin: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationCreateNestedOneWithoutDocumentInput
    documentInformation?: DocumentInformationCreateNestedOneWithoutDocumentInput
    unitsInformation?: UnitsInformationCreateNestedOneWithoutDocumentInput
    warnings?: DocumentWarningCreateNestedManyWithoutDocumentInput
    elementInfo?: ElementInformationCreateNestedManyWithoutWolfpackIdInput
  }

  export type WolfpackUncheckedCreateWithoutSiteInformationInput = {
    id?: number
    documentName?: string
    documentSessionId?: string
    documentCreationId?: string
    changedElements?: WolfpackCreatechangedElementsInput | bigint[] | number[]
    fileOrigin: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUncheckedCreateNestedOneWithoutDocumentInput
    documentInformation?: DocumentInformationUncheckedCreateNestedOneWithoutDocumentInput
    unitsInformation?: UnitsInformationUncheckedCreateNestedOneWithoutDocumentInput
    warnings?: DocumentWarningUncheckedCreateNestedManyWithoutDocumentInput
    elementInfo?: ElementInformationUncheckedCreateNestedManyWithoutWolfpackIdInput
  }

  export type WolfpackCreateOrConnectWithoutSiteInformationInput = {
    where: WolfpackWhereUniqueInput
    create: XOR<WolfpackCreateWithoutSiteInformationInput, WolfpackUncheckedCreateWithoutSiteInformationInput>
  }

  export type WolfpackUpsertWithoutSiteInformationInput = {
    update: XOR<WolfpackUpdateWithoutSiteInformationInput, WolfpackUncheckedUpdateWithoutSiteInformationInput>
    create: XOR<WolfpackCreateWithoutSiteInformationInput, WolfpackUncheckedCreateWithoutSiteInformationInput>
    where?: WolfpackWhereInput
  }

  export type WolfpackUpdateToOneWithWhereWithoutSiteInformationInput = {
    where?: WolfpackWhereInput
    data: XOR<WolfpackUpdateWithoutSiteInformationInput, WolfpackUncheckedUpdateWithoutSiteInformationInput>
  }

  export type WolfpackUpdateWithoutSiteInformationInput = {
    documentName?: StringFieldUpdateOperationsInput | string
    documentSessionId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: StringFieldUpdateOperationsInput | string
    changedElements?: WolfpackUpdatechangedElementsInput | bigint[] | number[]
    fileOrigin?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUpdateOneWithoutDocumentNestedInput
    documentInformation?: DocumentInformationUpdateOneWithoutDocumentNestedInput
    unitsInformation?: UnitsInformationUpdateOneWithoutDocumentNestedInput
    warnings?: DocumentWarningUpdateManyWithoutDocumentNestedInput
    elementInfo?: ElementInformationUpdateManyWithoutWolfpackIdNestedInput
  }

  export type WolfpackUncheckedUpdateWithoutSiteInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentName?: StringFieldUpdateOperationsInput | string
    documentSessionId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: StringFieldUpdateOperationsInput | string
    changedElements?: WolfpackUpdatechangedElementsInput | bigint[] | number[]
    fileOrigin?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUncheckedUpdateOneWithoutDocumentNestedInput
    documentInformation?: DocumentInformationUncheckedUpdateOneWithoutDocumentNestedInput
    unitsInformation?: UnitsInformationUncheckedUpdateOneWithoutDocumentNestedInput
    warnings?: DocumentWarningUncheckedUpdateManyWithoutDocumentNestedInput
    elementInfo?: ElementInformationUncheckedUpdateManyWithoutWolfpackIdNestedInput
  }

  export type WolfpackCreateWithoutUnitsInformationInput = {
    documentName?: string
    documentSessionId?: string
    documentCreationId?: string
    changedElements?: WolfpackCreatechangedElementsInput | bigint[] | number[]
    fileOrigin: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationCreateNestedOneWithoutDocumentInput
    documentInformation?: DocumentInformationCreateNestedOneWithoutDocumentInput
    siteInformation?: SiteInformationCreateNestedOneWithoutDocumentInput
    warnings?: DocumentWarningCreateNestedManyWithoutDocumentInput
    elementInfo?: ElementInformationCreateNestedManyWithoutWolfpackIdInput
  }

  export type WolfpackUncheckedCreateWithoutUnitsInformationInput = {
    id?: number
    documentName?: string
    documentSessionId?: string
    documentCreationId?: string
    changedElements?: WolfpackCreatechangedElementsInput | bigint[] | number[]
    fileOrigin: string
    wasCompleted?: boolean
    timeTaken?: number
    createdAt?: Date | string
    guid: string
    resultCount?: number
    testName: string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUncheckedCreateNestedOneWithoutDocumentInput
    documentInformation?: DocumentInformationUncheckedCreateNestedOneWithoutDocumentInput
    siteInformation?: SiteInformationUncheckedCreateNestedOneWithoutDocumentInput
    warnings?: DocumentWarningUncheckedCreateNestedManyWithoutDocumentInput
    elementInfo?: ElementInformationUncheckedCreateNestedManyWithoutWolfpackIdInput
  }

  export type WolfpackCreateOrConnectWithoutUnitsInformationInput = {
    where: WolfpackWhereUniqueInput
    create: XOR<WolfpackCreateWithoutUnitsInformationInput, WolfpackUncheckedCreateWithoutUnitsInformationInput>
  }

  export type WolfpackUpsertWithoutUnitsInformationInput = {
    update: XOR<WolfpackUpdateWithoutUnitsInformationInput, WolfpackUncheckedUpdateWithoutUnitsInformationInput>
    create: XOR<WolfpackCreateWithoutUnitsInformationInput, WolfpackUncheckedCreateWithoutUnitsInformationInput>
    where?: WolfpackWhereInput
  }

  export type WolfpackUpdateToOneWithWhereWithoutUnitsInformationInput = {
    where?: WolfpackWhereInput
    data: XOR<WolfpackUpdateWithoutUnitsInformationInput, WolfpackUncheckedUpdateWithoutUnitsInformationInput>
  }

  export type WolfpackUpdateWithoutUnitsInformationInput = {
    documentName?: StringFieldUpdateOperationsInput | string
    documentSessionId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: StringFieldUpdateOperationsInput | string
    changedElements?: WolfpackUpdatechangedElementsInput | bigint[] | number[]
    fileOrigin?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUpdateOneWithoutDocumentNestedInput
    documentInformation?: DocumentInformationUpdateOneWithoutDocumentNestedInput
    siteInformation?: SiteInformationUpdateOneWithoutDocumentNestedInput
    warnings?: DocumentWarningUpdateManyWithoutDocumentNestedInput
    elementInfo?: ElementInformationUpdateManyWithoutWolfpackIdNestedInput
  }

  export type WolfpackUncheckedUpdateWithoutUnitsInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentName?: StringFieldUpdateOperationsInput | string
    documentSessionId?: StringFieldUpdateOperationsInput | string
    documentCreationId?: StringFieldUpdateOperationsInput | string
    changedElements?: WolfpackUpdatechangedElementsInput | bigint[] | number[]
    fileOrigin?: StringFieldUpdateOperationsInput | string
    wasCompleted?: BoolFieldUpdateOperationsInput | boolean
    timeTaken?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guid?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    projectInformation?: ProjectInformationUncheckedUpdateOneWithoutDocumentNestedInput
    documentInformation?: DocumentInformationUncheckedUpdateOneWithoutDocumentNestedInput
    siteInformation?: SiteInformationUncheckedUpdateOneWithoutDocumentNestedInput
    warnings?: DocumentWarningUncheckedUpdateManyWithoutDocumentNestedInput
    elementInfo?: ElementInformationUncheckedUpdateManyWithoutWolfpackIdNestedInput
  }

  export type DocumentWarningCreateManyDocumentInput = {
    id?: number
    createdAt: Date | string
    severity: string
    message: string
    failingElementId?: DocumentWarningCreatefailingElementIdInput | bigint[] | number[]
  }

  export type ElementInformationCreateManyWolfpackIdInput = {
    id?: number
    idValue: bigint | number
    elementVersionId?: string
    familyName?: string
    builtInCategory?: string
    name?: string
  }

  export type DocumentWarningUpdateWithoutDocumentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    failingElementId?: DocumentWarningUpdatefailingElementIdInput | bigint[] | number[]
  }

  export type DocumentWarningUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    failingElementId?: DocumentWarningUpdatefailingElementIdInput | bigint[] | number[]
  }

  export type DocumentWarningUncheckedUpdateManyWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    failingElementId?: DocumentWarningUpdatefailingElementIdInput | bigint[] | number[]
  }

  export type ElementInformationUpdateWithoutWolfpackIdInput = {
    idValue?: BigIntFieldUpdateOperationsInput | bigint | number
    elementVersionId?: StringFieldUpdateOperationsInput | string
    familyName?: StringFieldUpdateOperationsInput | string
    builtInCategory?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Parameters?: ParametersUpdateManyWithoutParentElementInfoNestedInput
  }

  export type ElementInformationUncheckedUpdateWithoutWolfpackIdInput = {
    id?: IntFieldUpdateOperationsInput | number
    idValue?: BigIntFieldUpdateOperationsInput | bigint | number
    elementVersionId?: StringFieldUpdateOperationsInput | string
    familyName?: StringFieldUpdateOperationsInput | string
    builtInCategory?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Parameters?: ParametersUncheckedUpdateManyWithoutParentElementInfoNestedInput
  }

  export type ElementInformationUncheckedUpdateManyWithoutWolfpackIdInput = {
    id?: IntFieldUpdateOperationsInput | number
    idValue?: BigIntFieldUpdateOperationsInput | bigint | number
    elementVersionId?: StringFieldUpdateOperationsInput | string
    familyName?: StringFieldUpdateOperationsInput | string
    builtInCategory?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ParametersCreateManyParentElementInfoInput = {
    id?: number
    createdAt?: Date | string
    documentOwner?: string
    storageType?: $Enums.StorageType
    name?: string
    value?: string
    isReadOnly?: boolean
    typeId?: string
    dataType?: string
    groupTypeId?: string
    hasValue?: boolean
    isShared?: boolean
    isUserModifiable?: boolean
    sharedParameterGuid?: string
  }

  export type ParametersUpdateWithoutParentElementInfoInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentOwner?: StringFieldUpdateOperationsInput | string
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    typeId?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    groupTypeId?: StringFieldUpdateOperationsInput | string
    hasValue?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    isUserModifiable?: BoolFieldUpdateOperationsInput | boolean
    sharedParameterGuid?: StringFieldUpdateOperationsInput | string
  }

  export type ParametersUncheckedUpdateWithoutParentElementInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentOwner?: StringFieldUpdateOperationsInput | string
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    typeId?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    groupTypeId?: StringFieldUpdateOperationsInput | string
    hasValue?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    isUserModifiable?: BoolFieldUpdateOperationsInput | boolean
    sharedParameterGuid?: StringFieldUpdateOperationsInput | string
  }

  export type ParametersUncheckedUpdateManyWithoutParentElementInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentOwner?: StringFieldUpdateOperationsInput | string
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    typeId?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    groupTypeId?: StringFieldUpdateOperationsInput | string
    hasValue?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    isUserModifiable?: BoolFieldUpdateOperationsInput | boolean
    sharedParameterGuid?: StringFieldUpdateOperationsInput | string
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