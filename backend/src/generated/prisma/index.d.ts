
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Workspace
 * 
 */
export type Workspace = $Result.DefaultSelection<Prisma.$WorkspacePayload>
/**
 * Model WorkspaceMember
 * 
 */
export type WorkspaceMember = $Result.DefaultSelection<Prisma.$WorkspaceMemberPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model InventoryMovement
 * 
 */
export type InventoryMovement = $Result.DefaultSelection<Prisma.$InventoryMovementPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GlobalUserRole: {
  ADMIN: 'ADMIN',
  NORMAL: 'NORMAL'
};

export type GlobalUserRole = (typeof GlobalUserRole)[keyof typeof GlobalUserRole]


export const GlobalUserStatus: {
  ACTIVE: 'ACTIVE',
  DELETED: 'DELETED',
  PADDING: 'PADDING',
  SUSPENDED: 'SUSPENDED'
};

export type GlobalUserStatus = (typeof GlobalUserStatus)[keyof typeof GlobalUserStatus]


export const ProductStatus: {
  ACTIVE: 'ACTIVE',
  DELETED: 'DELETED',
  PADDING: 'PADDING',
  SUSPENDED: 'SUSPENDED'
};

export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus]


export const WorkspaceStatus: {
  ACTIVE: 'ACTIVE',
  DELETED: 'DELETED',
  PADDING: 'PADDING',
  SUSPENDED: 'SUSPENDED'
};

export type WorkspaceStatus = (typeof WorkspaceStatus)[keyof typeof WorkspaceStatus]


export const UserWorkspaceRole: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  OPARATOR: 'OPARATOR',
  VIEWER: 'VIEWER'
};

export type UserWorkspaceRole = (typeof UserWorkspaceRole)[keyof typeof UserWorkspaceRole]


export const InventoryMovementType: {
  IN: 'IN',
  OUT: 'OUT',
  ADJUST: 'ADJUST',
  DELETE: 'DELETE',
  RESTORE: 'RESTORE'
};

export type InventoryMovementType = (typeof InventoryMovementType)[keyof typeof InventoryMovementType]


export const InventoryMovementReason: {
  VENDA: 'VENDA',
  COMPRA: 'COMPRA',
  PERDA: 'PERDA',
  DEVOLUCAO: 'DEVOLUCAO',
  AJUSTE: 'AJUSTE',
  OUTRO: 'OUTRO'
};

export type InventoryMovementReason = (typeof InventoryMovementReason)[keyof typeof InventoryMovementReason]


export const PlanStatus: {
  ACTIVE: 'ACTIVE',
  DELETED: 'DELETED',
  SUSPENDED: 'SUSPENDED'
};

export type PlanStatus = (typeof PlanStatus)[keyof typeof PlanStatus]

}

export type GlobalUserRole = $Enums.GlobalUserRole

export const GlobalUserRole: typeof $Enums.GlobalUserRole

export type GlobalUserStatus = $Enums.GlobalUserStatus

export const GlobalUserStatus: typeof $Enums.GlobalUserStatus

export type ProductStatus = $Enums.ProductStatus

export const ProductStatus: typeof $Enums.ProductStatus

export type WorkspaceStatus = $Enums.WorkspaceStatus

export const WorkspaceStatus: typeof $Enums.WorkspaceStatus

export type UserWorkspaceRole = $Enums.UserWorkspaceRole

export const UserWorkspaceRole: typeof $Enums.UserWorkspaceRole

export type InventoryMovementType = $Enums.InventoryMovementType

export const InventoryMovementType: typeof $Enums.InventoryMovementType

export type InventoryMovementReason = $Enums.InventoryMovementReason

export const InventoryMovementReason: typeof $Enums.InventoryMovementReason

export type PlanStatus = $Enums.PlanStatus

export const PlanStatus: typeof $Enums.PlanStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspaceMember`: Exposes CRUD operations for the **WorkspaceMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkspaceMembers
    * const workspaceMembers = await prisma.workspaceMember.findMany()
    * ```
    */
  get workspaceMember(): Prisma.WorkspaceMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryMovement`: Exposes CRUD operations for the **InventoryMovement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryMovements
    * const inventoryMovements = await prisma.inventoryMovement.findMany()
    * ```
    */
  get inventoryMovement(): Prisma.InventoryMovementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Workspace: 'Workspace',
    WorkspaceMember: 'WorkspaceMember',
    Product: 'Product',
    InventoryMovement: 'InventoryMovement',
    Plan: 'Plan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "workspace" | "workspaceMember" | "product" | "inventoryMovement" | "plan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Workspace: {
        payload: Prisma.$WorkspacePayload<ExtArgs>
        fields: Prisma.WorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findFirst: {
            args: Prisma.WorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findMany: {
            args: Prisma.WorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          create: {
            args: Prisma.WorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          createMany: {
            args: Prisma.WorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          delete: {
            args: Prisma.WorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          update: {
            args: Prisma.WorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          aggregate: {
            args: Prisma.WorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace>
          }
          groupBy: {
            args: Prisma.WorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceCountAggregateOutputType> | number
          }
        }
      }
      WorkspaceMember: {
        payload: Prisma.$WorkspaceMemberPayload<ExtArgs>
        fields: Prisma.WorkspaceMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          findFirst: {
            args: Prisma.WorkspaceMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          findMany: {
            args: Prisma.WorkspaceMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>[]
          }
          create: {
            args: Prisma.WorkspaceMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          createMany: {
            args: Prisma.WorkspaceMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>[]
          }
          delete: {
            args: Prisma.WorkspaceMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          update: {
            args: Prisma.WorkspaceMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          aggregate: {
            args: Prisma.WorkspaceMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspaceMember>
          }
          groupBy: {
            args: Prisma.WorkspaceMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceMemberCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceMemberCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      InventoryMovement: {
        payload: Prisma.$InventoryMovementPayload<ExtArgs>
        fields: Prisma.InventoryMovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryMovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryMovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          findFirst: {
            args: Prisma.InventoryMovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryMovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          findMany: {
            args: Prisma.InventoryMovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>[]
          }
          create: {
            args: Prisma.InventoryMovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          createMany: {
            args: Prisma.InventoryMovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryMovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>[]
          }
          delete: {
            args: Prisma.InventoryMovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          update: {
            args: Prisma.InventoryMovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          deleteMany: {
            args: Prisma.InventoryMovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryMovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryMovementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>[]
          }
          upsert: {
            args: Prisma.InventoryMovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          aggregate: {
            args: Prisma.InventoryMovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryMovement>
          }
          groupBy: {
            args: Prisma.InventoryMovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryMovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryMovementCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryMovementCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    workspace?: WorkspaceOmit
    workspaceMember?: WorkspaceMemberOmit
    product?: ProductOmit
    inventoryMovement?: InventoryMovementOmit
    plan?: PlanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    workspaces: number
    memberOf: number
    productsRegisted: number
    inventoryMoviments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | UserCountOutputTypeCountWorkspacesArgs
    memberOf?: boolean | UserCountOutputTypeCountMemberOfArgs
    productsRegisted?: boolean | UserCountOutputTypeCountProductsRegistedArgs
    inventoryMoviments?: boolean | UserCountOutputTypeCountInventoryMovimentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMemberOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductsRegistedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInventoryMovimentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryMovementWhereInput
  }


  /**
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    products: number
    member: number
    inventoryMoviments: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | WorkspaceCountOutputTypeCountProductsArgs
    member?: boolean | WorkspaceCountOutputTypeCountMemberArgs
    inventoryMoviments?: boolean | WorkspaceCountOutputTypeCountInventoryMovimentsArgs
  }

  // Custom InputTypes
  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceMemberWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountInventoryMovimentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryMovementWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    inventoryMovements: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryMovements?: boolean | ProductCountOutputTypeCountInventoryMovementsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInventoryMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryMovementWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    workspaces: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | PlanCountOutputTypeCountWorkspacesArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    email: string | null
    password: string | null
    role: $Enums.GlobalUserRole | null
    status: $Enums.GlobalUserStatus | null
    birthdate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    email: string | null
    password: string | null
    role: $Enums.GlobalUserRole | null
    status: $Enums.GlobalUserStatus | null
    birthdate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    email: number
    password: number
    role: number
    status: number
    birthdate: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    password?: true
    role?: true
    status?: true
    birthdate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    password?: true
    role?: true
    status?: true
    birthdate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    password?: true
    role?: true
    status?: true
    birthdate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    slug: string
    email: string
    password: string
    role: $Enums.GlobalUserRole
    status: $Enums.GlobalUserStatus
    birthdate: Date
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    birthdate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    memberOf?: boolean | User$memberOfArgs<ExtArgs>
    productsRegisted?: boolean | User$productsRegistedArgs<ExtArgs>
    inventoryMoviments?: boolean | User$inventoryMovimentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    birthdate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    birthdate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    birthdate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "email" | "password" | "role" | "status" | "birthdate" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    memberOf?: boolean | User$memberOfArgs<ExtArgs>
    productsRegisted?: boolean | User$productsRegistedArgs<ExtArgs>
    inventoryMoviments?: boolean | User$inventoryMovimentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workspaces: Prisma.$WorkspacePayload<ExtArgs>[]
      memberOf: Prisma.$WorkspaceMemberPayload<ExtArgs>[]
      productsRegisted: Prisma.$ProductPayload<ExtArgs>[]
      inventoryMoviments: Prisma.$InventoryMovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      email: string
      password: string
      role: $Enums.GlobalUserRole
      status: $Enums.GlobalUserStatus
      birthdate: Date
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspaces<T extends User$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, User$workspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberOf<T extends User$memberOfArgs<ExtArgs> = {}>(args?: Subset<T, User$memberOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productsRegisted<T extends User$productsRegistedArgs<ExtArgs> = {}>(args?: Subset<T, User$productsRegistedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryMoviments<T extends User$inventoryMovimentsArgs<ExtArgs> = {}>(args?: Subset<T, User$inventoryMovimentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly slug: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'GlobalUserRole'>
    readonly status: FieldRef<"User", 'GlobalUserStatus'>
    readonly birthdate: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.workspaces
   */
  export type User$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    cursor?: WorkspaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * User.memberOf
   */
  export type User$memberOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    where?: WorkspaceMemberWhereInput
    orderBy?: WorkspaceMemberOrderByWithRelationInput | WorkspaceMemberOrderByWithRelationInput[]
    cursor?: WorkspaceMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceMemberScalarFieldEnum | WorkspaceMemberScalarFieldEnum[]
  }

  /**
   * User.productsRegisted
   */
  export type User$productsRegistedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User.inventoryMoviments
   */
  export type User$inventoryMovimentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    where?: InventoryMovementWhereInput
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    cursor?: InventoryMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Workspace
   */

  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _avg: WorkspaceAvgAggregateOutputType | null
    _sum: WorkspaceSumAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceAvgAggregateOutputType = {
    planId: number | null
  }

  export type WorkspaceSumAggregateOutputType = {
    planId: number | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    planId: number | null
    ownerId: string | null
    statsus: $Enums.WorkspaceStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    planId: number | null
    ownerId: string | null
    statsus: $Enums.WorkspaceStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    planId: number
    ownerId: number
    statsus: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type WorkspaceAvgAggregateInputType = {
    planId?: true
  }

  export type WorkspaceSumAggregateInputType = {
    planId?: true
  }

  export type WorkspaceMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    planId?: true
    ownerId?: true
    statsus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    planId?: true
    ownerId?: true
    statsus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    planId?: true
    ownerId?: true
    statsus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspace to aggregate.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkspaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkspaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithAggregationInput | WorkspaceOrderByWithAggregationInput[]
    by: WorkspaceScalarFieldEnum[] | WorkspaceScalarFieldEnum
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _avg?: WorkspaceAvgAggregateInputType
    _sum?: WorkspaceSumAggregateInputType
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }

  export type WorkspaceGroupByOutputType = {
    id: string
    name: string
    slug: string
    planId: number
    ownerId: string
    statsus: $Enums.WorkspaceStatus
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: WorkspaceCountAggregateOutputType | null
    _avg: WorkspaceAvgAggregateOutputType | null
    _sum: WorkspaceSumAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    planId?: boolean
    ownerId?: boolean
    statsus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    products?: boolean | Workspace$productsArgs<ExtArgs>
    member?: boolean | Workspace$memberArgs<ExtArgs>
    inventoryMoviments?: boolean | Workspace$inventoryMovimentsArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    planId?: boolean
    ownerId?: boolean
    statsus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    planId?: boolean
    ownerId?: boolean
    statsus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    planId?: boolean
    ownerId?: boolean
    statsus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type WorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "planId" | "ownerId" | "statsus" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["workspace"]>
  export type WorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    products?: boolean | Workspace$productsArgs<ExtArgs>
    member?: boolean | Workspace$memberArgs<ExtArgs>
    inventoryMoviments?: boolean | Workspace$inventoryMovimentsArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $WorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workspace"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
      member: Prisma.$WorkspaceMemberPayload<ExtArgs>[]
      inventoryMoviments: Prisma.$InventoryMovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      planId: number
      ownerId: string
      statsus: $Enums.WorkspaceStatus
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["workspace"]>
    composites: {}
  }

  type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceDefaultArgs> = $Result.GetResult<Prisma.$WorkspacePayload, S>

  type WorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface WorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workspace'], meta: { name: 'Workspace' } }
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceFindUniqueArgs>(args: SelectSubset<T, WorkspaceFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceFindFirstArgs>(args?: SelectSubset<T, WorkspaceFindFirstArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceFindManyArgs>(args?: SelectSubset<T, WorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
     */
    create<T extends WorkspaceCreateArgs>(args: SelectSubset<T, WorkspaceCreateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaces.
     * @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceCreateManyArgs>(args?: SelectSubset<T, WorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {WorkspaceCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceDeleteArgs>(args: SelectSubset<T, WorkspaceDeleteArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUpdateArgs>(args: SelectSubset<T, WorkspaceUpdateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceDeleteManyArgs>(args?: SelectSubset<T, WorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUpdateManyArgs>(args: SelectSubset<T, WorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces and returns the data updated in the database.
     * @param {WorkspaceUpdateManyAndReturnArgs} args - Arguments to update many Workspaces.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkspaceUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUpsertArgs>(args: SelectSubset<T, WorkspaceUpsertArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
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
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workspace model
   */
  readonly fields: WorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends Workspace$productsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    member<T extends Workspace$memberArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$memberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryMoviments<T extends Workspace$inventoryMovimentsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$inventoryMovimentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workspace model
   */
  interface WorkspaceFieldRefs {
    readonly id: FieldRef<"Workspace", 'String'>
    readonly name: FieldRef<"Workspace", 'String'>
    readonly slug: FieldRef<"Workspace", 'String'>
    readonly planId: FieldRef<"Workspace", 'Int'>
    readonly ownerId: FieldRef<"Workspace", 'String'>
    readonly statsus: FieldRef<"Workspace", 'WorkspaceStatus'>
    readonly createdAt: FieldRef<"Workspace", 'DateTime'>
    readonly updatedAt: FieldRef<"Workspace", 'DateTime'>
    readonly deletedAt: FieldRef<"Workspace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workspace findUnique
   */
  export type WorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findFirst
   */
  export type WorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspaces to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Workspace.
     */
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }

  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workspace createManyAndReturn
   */
  export type WorkspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Workspace.
     */
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
  }

  /**
   * Workspace updateManyAndReturn
   */
  export type WorkspaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     */
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     */
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }

  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter which Workspace to delete.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspaces to delete
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to delete.
     */
    limit?: number
  }

  /**
   * Workspace.products
   */
  export type Workspace$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Workspace.member
   */
  export type Workspace$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    where?: WorkspaceMemberWhereInput
    orderBy?: WorkspaceMemberOrderByWithRelationInput | WorkspaceMemberOrderByWithRelationInput[]
    cursor?: WorkspaceMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceMemberScalarFieldEnum | WorkspaceMemberScalarFieldEnum[]
  }

  /**
   * Workspace.inventoryMoviments
   */
  export type Workspace$inventoryMovimentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    where?: InventoryMovementWhereInput
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    cursor?: InventoryMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * Workspace without action
   */
  export type WorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
  }


  /**
   * Model WorkspaceMember
   */

  export type AggregateWorkspaceMember = {
    _count: WorkspaceMemberCountAggregateOutputType | null
    _avg: WorkspaceMemberAvgAggregateOutputType | null
    _sum: WorkspaceMemberSumAggregateOutputType | null
    _min: WorkspaceMemberMinAggregateOutputType | null
    _max: WorkspaceMemberMaxAggregateOutputType | null
  }

  export type WorkspaceMemberAvgAggregateOutputType = {
    id: number | null
  }

  export type WorkspaceMemberSumAggregateOutputType = {
    id: number | null
  }

  export type WorkspaceMemberMinAggregateOutputType = {
    id: number | null
    userId: string | null
    workspaceId: string | null
    role: $Enums.UserWorkspaceRole | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    expiresAt: Date | null
  }

  export type WorkspaceMemberMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    workspaceId: string | null
    role: $Enums.UserWorkspaceRole | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    expiresAt: Date | null
  }

  export type WorkspaceMemberCountAggregateOutputType = {
    id: number
    userId: number
    workspaceId: number
    role: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    expiresAt: number
    _all: number
  }


  export type WorkspaceMemberAvgAggregateInputType = {
    id?: true
  }

  export type WorkspaceMemberSumAggregateInputType = {
    id?: true
  }

  export type WorkspaceMemberMinAggregateInputType = {
    id?: true
    userId?: true
    workspaceId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    expiresAt?: true
  }

  export type WorkspaceMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    workspaceId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    expiresAt?: true
  }

  export type WorkspaceMemberCountAggregateInputType = {
    id?: true
    userId?: true
    workspaceId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    expiresAt?: true
    _all?: true
  }

  export type WorkspaceMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkspaceMember to aggregate.
     */
    where?: WorkspaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceMembers to fetch.
     */
    orderBy?: WorkspaceMemberOrderByWithRelationInput | WorkspaceMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkspaceMembers
    **/
    _count?: true | WorkspaceMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkspaceMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkspaceMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMemberMaxAggregateInputType
  }

  export type GetWorkspaceMemberAggregateType<T extends WorkspaceMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaceMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaceMember[P]>
      : GetScalarType<T[P], AggregateWorkspaceMember[P]>
  }




  export type WorkspaceMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceMemberWhereInput
    orderBy?: WorkspaceMemberOrderByWithAggregationInput | WorkspaceMemberOrderByWithAggregationInput[]
    by: WorkspaceMemberScalarFieldEnum[] | WorkspaceMemberScalarFieldEnum
    having?: WorkspaceMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceMemberCountAggregateInputType | true
    _avg?: WorkspaceMemberAvgAggregateInputType
    _sum?: WorkspaceMemberSumAggregateInputType
    _min?: WorkspaceMemberMinAggregateInputType
    _max?: WorkspaceMemberMaxAggregateInputType
  }

  export type WorkspaceMemberGroupByOutputType = {
    id: number
    userId: string
    workspaceId: string
    role: $Enums.UserWorkspaceRole
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    expiresAt: Date | null
    _count: WorkspaceMemberCountAggregateOutputType | null
    _avg: WorkspaceMemberAvgAggregateOutputType | null
    _sum: WorkspaceMemberSumAggregateOutputType | null
    _min: WorkspaceMemberMinAggregateOutputType | null
    _max: WorkspaceMemberMaxAggregateOutputType | null
  }

  type GetWorkspaceMemberGroupByPayload<T extends WorkspaceMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceMemberGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceMemberGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workspaceId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    expiresAt?: boolean
    member?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceMember"]>

  export type WorkspaceMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workspaceId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    expiresAt?: boolean
    member?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceMember"]>

  export type WorkspaceMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workspaceId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    expiresAt?: boolean
    member?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceMember"]>

  export type WorkspaceMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    workspaceId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    expiresAt?: boolean
  }

  export type WorkspaceMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "workspaceId" | "role" | "createdAt" | "updatedAt" | "deletedAt" | "expiresAt", ExtArgs["result"]["workspaceMember"]>
  export type WorkspaceMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type WorkspaceMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type WorkspaceMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $WorkspaceMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkspaceMember"
    objects: {
      member: Prisma.$UserPayload<ExtArgs>
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      workspaceId: string
      role: $Enums.UserWorkspaceRole
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
      expiresAt: Date | null
    }, ExtArgs["result"]["workspaceMember"]>
    composites: {}
  }

  type WorkspaceMemberGetPayload<S extends boolean | null | undefined | WorkspaceMemberDefaultArgs> = $Result.GetResult<Prisma.$WorkspaceMemberPayload, S>

  type WorkspaceMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceMemberCountAggregateInputType | true
    }

  export interface WorkspaceMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkspaceMember'], meta: { name: 'WorkspaceMember' } }
    /**
     * Find zero or one WorkspaceMember that matches the filter.
     * @param {WorkspaceMemberFindUniqueArgs} args - Arguments to find a WorkspaceMember
     * @example
     * // Get one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceMemberFindUniqueArgs>(args: SelectSubset<T, WorkspaceMemberFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkspaceMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceMemberFindUniqueOrThrowArgs} args - Arguments to find a WorkspaceMember
     * @example
     * // Get one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkspaceMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberFindFirstArgs} args - Arguments to find a WorkspaceMember
     * @example
     * // Get one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceMemberFindFirstArgs>(args?: SelectSubset<T, WorkspaceMemberFindFirstArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkspaceMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberFindFirstOrThrowArgs} args - Arguments to find a WorkspaceMember
     * @example
     * // Get one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkspaceMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkspaceMembers
     * const workspaceMembers = await prisma.workspaceMember.findMany()
     * 
     * // Get first 10 WorkspaceMembers
     * const workspaceMembers = await prisma.workspaceMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceMemberWithIdOnly = await prisma.workspaceMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceMemberFindManyArgs>(args?: SelectSubset<T, WorkspaceMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkspaceMember.
     * @param {WorkspaceMemberCreateArgs} args - Arguments to create a WorkspaceMember.
     * @example
     * // Create one WorkspaceMember
     * const WorkspaceMember = await prisma.workspaceMember.create({
     *   data: {
     *     // ... data to create a WorkspaceMember
     *   }
     * })
     * 
     */
    create<T extends WorkspaceMemberCreateArgs>(args: SelectSubset<T, WorkspaceMemberCreateArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkspaceMembers.
     * @param {WorkspaceMemberCreateManyArgs} args - Arguments to create many WorkspaceMembers.
     * @example
     * // Create many WorkspaceMembers
     * const workspaceMember = await prisma.workspaceMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceMemberCreateManyArgs>(args?: SelectSubset<T, WorkspaceMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkspaceMembers and returns the data saved in the database.
     * @param {WorkspaceMemberCreateManyAndReturnArgs} args - Arguments to create many WorkspaceMembers.
     * @example
     * // Create many WorkspaceMembers
     * const workspaceMember = await prisma.workspaceMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkspaceMembers and only return the `id`
     * const workspaceMemberWithIdOnly = await prisma.workspaceMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkspaceMember.
     * @param {WorkspaceMemberDeleteArgs} args - Arguments to delete one WorkspaceMember.
     * @example
     * // Delete one WorkspaceMember
     * const WorkspaceMember = await prisma.workspaceMember.delete({
     *   where: {
     *     // ... filter to delete one WorkspaceMember
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceMemberDeleteArgs>(args: SelectSubset<T, WorkspaceMemberDeleteArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkspaceMember.
     * @param {WorkspaceMemberUpdateArgs} args - Arguments to update one WorkspaceMember.
     * @example
     * // Update one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceMemberUpdateArgs>(args: SelectSubset<T, WorkspaceMemberUpdateArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkspaceMembers.
     * @param {WorkspaceMemberDeleteManyArgs} args - Arguments to filter WorkspaceMembers to delete.
     * @example
     * // Delete a few WorkspaceMembers
     * const { count } = await prisma.workspaceMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceMemberDeleteManyArgs>(args?: SelectSubset<T, WorkspaceMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkspaceMembers
     * const workspaceMember = await prisma.workspaceMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceMemberUpdateManyArgs>(args: SelectSubset<T, WorkspaceMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceMembers and returns the data updated in the database.
     * @param {WorkspaceMemberUpdateManyAndReturnArgs} args - Arguments to update many WorkspaceMembers.
     * @example
     * // Update many WorkspaceMembers
     * const workspaceMember = await prisma.workspaceMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkspaceMembers and only return the `id`
     * const workspaceMemberWithIdOnly = await prisma.workspaceMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkspaceMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkspaceMember.
     * @param {WorkspaceMemberUpsertArgs} args - Arguments to update or create a WorkspaceMember.
     * @example
     * // Update or create a WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.upsert({
     *   create: {
     *     // ... data to create a WorkspaceMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkspaceMember we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceMemberUpsertArgs>(args: SelectSubset<T, WorkspaceMemberUpsertArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkspaceMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberCountArgs} args - Arguments to filter WorkspaceMembers to count.
     * @example
     * // Count the number of WorkspaceMembers
     * const count = await prisma.workspaceMember.count({
     *   where: {
     *     // ... the filter for the WorkspaceMembers we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceMemberCountArgs>(
      args?: Subset<T, WorkspaceMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkspaceMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceMemberAggregateArgs>(args: Subset<T, WorkspaceMemberAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceMemberAggregateType<T>>

    /**
     * Group by WorkspaceMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberGroupByArgs} args - Group by arguments.
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
      T extends WorkspaceMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceMemberGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkspaceMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkspaceMember model
   */
  readonly fields: WorkspaceMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkspaceMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkspaceMember model
   */
  interface WorkspaceMemberFieldRefs {
    readonly id: FieldRef<"WorkspaceMember", 'Int'>
    readonly userId: FieldRef<"WorkspaceMember", 'String'>
    readonly workspaceId: FieldRef<"WorkspaceMember", 'String'>
    readonly role: FieldRef<"WorkspaceMember", 'UserWorkspaceRole'>
    readonly createdAt: FieldRef<"WorkspaceMember", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkspaceMember", 'DateTime'>
    readonly deletedAt: FieldRef<"WorkspaceMember", 'DateTime'>
    readonly expiresAt: FieldRef<"WorkspaceMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkspaceMember findUnique
   */
  export type WorkspaceMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceMember to fetch.
     */
    where: WorkspaceMemberWhereUniqueInput
  }

  /**
   * WorkspaceMember findUniqueOrThrow
   */
  export type WorkspaceMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceMember to fetch.
     */
    where: WorkspaceMemberWhereUniqueInput
  }

  /**
   * WorkspaceMember findFirst
   */
  export type WorkspaceMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceMember to fetch.
     */
    where?: WorkspaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceMembers to fetch.
     */
    orderBy?: WorkspaceMemberOrderByWithRelationInput | WorkspaceMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceMembers.
     */
    cursor?: WorkspaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceMembers.
     */
    distinct?: WorkspaceMemberScalarFieldEnum | WorkspaceMemberScalarFieldEnum[]
  }

  /**
   * WorkspaceMember findFirstOrThrow
   */
  export type WorkspaceMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceMember to fetch.
     */
    where?: WorkspaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceMembers to fetch.
     */
    orderBy?: WorkspaceMemberOrderByWithRelationInput | WorkspaceMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceMembers.
     */
    cursor?: WorkspaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceMembers.
     */
    distinct?: WorkspaceMemberScalarFieldEnum | WorkspaceMemberScalarFieldEnum[]
  }

  /**
   * WorkspaceMember findMany
   */
  export type WorkspaceMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceMembers to fetch.
     */
    where?: WorkspaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceMembers to fetch.
     */
    orderBy?: WorkspaceMemberOrderByWithRelationInput | WorkspaceMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkspaceMembers.
     */
    cursor?: WorkspaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceMembers.
     */
    distinct?: WorkspaceMemberScalarFieldEnum | WorkspaceMemberScalarFieldEnum[]
  }

  /**
   * WorkspaceMember create
   */
  export type WorkspaceMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkspaceMember.
     */
    data: XOR<WorkspaceMemberCreateInput, WorkspaceMemberUncheckedCreateInput>
  }

  /**
   * WorkspaceMember createMany
   */
  export type WorkspaceMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkspaceMembers.
     */
    data: WorkspaceMemberCreateManyInput | WorkspaceMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkspaceMember createManyAndReturn
   */
  export type WorkspaceMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * The data used to create many WorkspaceMembers.
     */
    data: WorkspaceMemberCreateManyInput | WorkspaceMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkspaceMember update
   */
  export type WorkspaceMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkspaceMember.
     */
    data: XOR<WorkspaceMemberUpdateInput, WorkspaceMemberUncheckedUpdateInput>
    /**
     * Choose, which WorkspaceMember to update.
     */
    where: WorkspaceMemberWhereUniqueInput
  }

  /**
   * WorkspaceMember updateMany
   */
  export type WorkspaceMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkspaceMembers.
     */
    data: XOR<WorkspaceMemberUpdateManyMutationInput, WorkspaceMemberUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceMembers to update
     */
    where?: WorkspaceMemberWhereInput
    /**
     * Limit how many WorkspaceMembers to update.
     */
    limit?: number
  }

  /**
   * WorkspaceMember updateManyAndReturn
   */
  export type WorkspaceMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * The data used to update WorkspaceMembers.
     */
    data: XOR<WorkspaceMemberUpdateManyMutationInput, WorkspaceMemberUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceMembers to update
     */
    where?: WorkspaceMemberWhereInput
    /**
     * Limit how many WorkspaceMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkspaceMember upsert
   */
  export type WorkspaceMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkspaceMember to update in case it exists.
     */
    where: WorkspaceMemberWhereUniqueInput
    /**
     * In case the WorkspaceMember found by the `where` argument doesn't exist, create a new WorkspaceMember with this data.
     */
    create: XOR<WorkspaceMemberCreateInput, WorkspaceMemberUncheckedCreateInput>
    /**
     * In case the WorkspaceMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceMemberUpdateInput, WorkspaceMemberUncheckedUpdateInput>
  }

  /**
   * WorkspaceMember delete
   */
  export type WorkspaceMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * Filter which WorkspaceMember to delete.
     */
    where: WorkspaceMemberWhereUniqueInput
  }

  /**
   * WorkspaceMember deleteMany
   */
  export type WorkspaceMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkspaceMembers to delete
     */
    where?: WorkspaceMemberWhereInput
    /**
     * Limit how many WorkspaceMembers to delete.
     */
    limit?: number
  }

  /**
   * WorkspaceMember without action
   */
  export type WorkspaceMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    Purchasedprice: Decimal | null
    price: Decimal | null
    quantity: number | null
    minQuantity: number | null
  }

  export type ProductSumAggregateOutputType = {
    Purchasedprice: Decimal | null
    price: Decimal | null
    quantity: number | null
    minQuantity: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    barcode: string | null
    name: string | null
    Purchasedprice: Decimal | null
    price: Decimal | null
    quantity: number | null
    minQuantity: number | null
    slug: string | null
    cadasterId: string | null
    workspaceId: string | null
    status: $Enums.ProductStatus | null
    unit: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    barcode: string | null
    name: string | null
    Purchasedprice: Decimal | null
    price: Decimal | null
    quantity: number | null
    minQuantity: number | null
    slug: string | null
    cadasterId: string | null
    workspaceId: string | null
    status: $Enums.ProductStatus | null
    unit: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    barcode: number
    name: number
    Purchasedprice: number
    price: number
    quantity: number
    minQuantity: number
    slug: number
    cadasterId: number
    workspaceId: number
    status: number
    unit: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    Purchasedprice?: true
    price?: true
    quantity?: true
    minQuantity?: true
  }

  export type ProductSumAggregateInputType = {
    Purchasedprice?: true
    price?: true
    quantity?: true
    minQuantity?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    barcode?: true
    name?: true
    Purchasedprice?: true
    price?: true
    quantity?: true
    minQuantity?: true
    slug?: true
    cadasterId?: true
    workspaceId?: true
    status?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    barcode?: true
    name?: true
    Purchasedprice?: true
    price?: true
    quantity?: true
    minQuantity?: true
    slug?: true
    cadasterId?: true
    workspaceId?: true
    status?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    barcode?: true
    name?: true
    Purchasedprice?: true
    price?: true
    quantity?: true
    minQuantity?: true
    slug?: true
    cadasterId?: true
    workspaceId?: true
    status?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    barcode: string
    name: string
    Purchasedprice: Decimal
    price: Decimal
    quantity: number
    minQuantity: number
    slug: string
    cadasterId: string
    workspaceId: string
    status: $Enums.ProductStatus
    unit: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barcode?: boolean
    name?: boolean
    Purchasedprice?: boolean
    price?: boolean
    quantity?: boolean
    minQuantity?: boolean
    slug?: boolean
    cadasterId?: boolean
    workspaceId?: boolean
    status?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    inventoryMovements?: boolean | Product$inventoryMovementsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barcode?: boolean
    name?: boolean
    Purchasedprice?: boolean
    price?: boolean
    quantity?: boolean
    minQuantity?: boolean
    slug?: boolean
    cadasterId?: boolean
    workspaceId?: boolean
    status?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barcode?: boolean
    name?: boolean
    Purchasedprice?: boolean
    price?: boolean
    quantity?: boolean
    minQuantity?: boolean
    slug?: boolean
    cadasterId?: boolean
    workspaceId?: boolean
    status?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    barcode?: boolean
    name?: boolean
    Purchasedprice?: boolean
    price?: boolean
    quantity?: boolean
    minQuantity?: boolean
    slug?: boolean
    cadasterId?: boolean
    workspaceId?: boolean
    status?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "barcode" | "name" | "Purchasedprice" | "price" | "quantity" | "minQuantity" | "slug" | "cadasterId" | "workspaceId" | "status" | "unit" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    inventoryMovements?: boolean | Product$inventoryMovementsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      inventoryMovements: Prisma.$InventoryMovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      barcode: string
      name: string
      Purchasedprice: Prisma.Decimal
      price: Prisma.Decimal
      quantity: number
      minQuantity: number
      slug: string
      cadasterId: string
      workspaceId: string
      status: $Enums.ProductStatus
      unit: string
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventoryMovements<T extends Product$inventoryMovementsArgs<ExtArgs> = {}>(args?: Subset<T, Product$inventoryMovementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly barcode: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly Purchasedprice: FieldRef<"Product", 'Decimal'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly quantity: FieldRef<"Product", 'Int'>
    readonly minQuantity: FieldRef<"Product", 'Int'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly cadasterId: FieldRef<"Product", 'String'>
    readonly workspaceId: FieldRef<"Product", 'String'>
    readonly status: FieldRef<"Product", 'ProductStatus'>
    readonly unit: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly deletedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.inventoryMovements
   */
  export type Product$inventoryMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    where?: InventoryMovementWhereInput
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    cursor?: InventoryMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model InventoryMovement
   */

  export type AggregateInventoryMovement = {
    _count: InventoryMovementCountAggregateOutputType | null
    _min: InventoryMovementMinAggregateOutputType | null
    _max: InventoryMovementMaxAggregateOutputType | null
  }

  export type InventoryMovementMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    userId: string | null
    productId: string | null
    type: $Enums.InventoryMovementType | null
    reason: $Enums.InventoryMovementReason | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type InventoryMovementMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    userId: string | null
    productId: string | null
    type: $Enums.InventoryMovementType | null
    reason: $Enums.InventoryMovementReason | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type InventoryMovementCountAggregateOutputType = {
    id: number
    workspaceId: number
    userId: number
    productId: number
    type: number
    reason: number
    note: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type InventoryMovementMinAggregateInputType = {
    id?: true
    workspaceId?: true
    userId?: true
    productId?: true
    type?: true
    reason?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type InventoryMovementMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    userId?: true
    productId?: true
    type?: true
    reason?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type InventoryMovementCountAggregateInputType = {
    id?: true
    workspaceId?: true
    userId?: true
    productId?: true
    type?: true
    reason?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type InventoryMovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryMovement to aggregate.
     */
    where?: InventoryMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryMovements to fetch.
     */
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryMovements
    **/
    _count?: true | InventoryMovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMovementMaxAggregateInputType
  }

  export type GetInventoryMovementAggregateType<T extends InventoryMovementAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryMovement[P]>
      : GetScalarType<T[P], AggregateInventoryMovement[P]>
  }




  export type InventoryMovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryMovementWhereInput
    orderBy?: InventoryMovementOrderByWithAggregationInput | InventoryMovementOrderByWithAggregationInput[]
    by: InventoryMovementScalarFieldEnum[] | InventoryMovementScalarFieldEnum
    having?: InventoryMovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryMovementCountAggregateInputType | true
    _min?: InventoryMovementMinAggregateInputType
    _max?: InventoryMovementMaxAggregateInputType
  }

  export type InventoryMovementGroupByOutputType = {
    id: string
    workspaceId: string
    userId: string
    productId: string
    type: $Enums.InventoryMovementType
    reason: $Enums.InventoryMovementReason | null
    note: string | null
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: InventoryMovementCountAggregateOutputType | null
    _min: InventoryMovementMinAggregateOutputType | null
    _max: InventoryMovementMaxAggregateOutputType | null
  }

  type GetInventoryMovementGroupByPayload<T extends InventoryMovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryMovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryMovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryMovementGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryMovementGroupByOutputType[P]>
        }
      >
    >


  export type InventoryMovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    userId?: boolean
    productId?: boolean
    type?: boolean
    reason?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryMovement"]>

  export type InventoryMovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    userId?: boolean
    productId?: boolean
    type?: boolean
    reason?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryMovement"]>

  export type InventoryMovementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    userId?: boolean
    productId?: boolean
    type?: boolean
    reason?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryMovement"]>

  export type InventoryMovementSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    userId?: boolean
    productId?: boolean
    type?: boolean
    reason?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type InventoryMovementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "userId" | "productId" | "type" | "reason" | "note" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["inventoryMovement"]>
  export type InventoryMovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type InventoryMovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type InventoryMovementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $InventoryMovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryMovement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      userId: string
      productId: string
      type: $Enums.InventoryMovementType
      reason: $Enums.InventoryMovementReason | null
      note: string | null
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["inventoryMovement"]>
    composites: {}
  }

  type InventoryMovementGetPayload<S extends boolean | null | undefined | InventoryMovementDefaultArgs> = $Result.GetResult<Prisma.$InventoryMovementPayload, S>

  type InventoryMovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryMovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryMovementCountAggregateInputType | true
    }

  export interface InventoryMovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryMovement'], meta: { name: 'InventoryMovement' } }
    /**
     * Find zero or one InventoryMovement that matches the filter.
     * @param {InventoryMovementFindUniqueArgs} args - Arguments to find a InventoryMovement
     * @example
     * // Get one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryMovementFindUniqueArgs>(args: SelectSubset<T, InventoryMovementFindUniqueArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryMovement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryMovementFindUniqueOrThrowArgs} args - Arguments to find a InventoryMovement
     * @example
     * // Get one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryMovementFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementFindFirstArgs} args - Arguments to find a InventoryMovement
     * @example
     * // Get one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryMovementFindFirstArgs>(args?: SelectSubset<T, InventoryMovementFindFirstArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementFindFirstOrThrowArgs} args - Arguments to find a InventoryMovement
     * @example
     * // Get one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryMovementFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryMovements
     * const inventoryMovements = await prisma.inventoryMovement.findMany()
     * 
     * // Get first 10 InventoryMovements
     * const inventoryMovements = await prisma.inventoryMovement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryMovementWithIdOnly = await prisma.inventoryMovement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryMovementFindManyArgs>(args?: SelectSubset<T, InventoryMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryMovement.
     * @param {InventoryMovementCreateArgs} args - Arguments to create a InventoryMovement.
     * @example
     * // Create one InventoryMovement
     * const InventoryMovement = await prisma.inventoryMovement.create({
     *   data: {
     *     // ... data to create a InventoryMovement
     *   }
     * })
     * 
     */
    create<T extends InventoryMovementCreateArgs>(args: SelectSubset<T, InventoryMovementCreateArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryMovements.
     * @param {InventoryMovementCreateManyArgs} args - Arguments to create many InventoryMovements.
     * @example
     * // Create many InventoryMovements
     * const inventoryMovement = await prisma.inventoryMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryMovementCreateManyArgs>(args?: SelectSubset<T, InventoryMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryMovements and returns the data saved in the database.
     * @param {InventoryMovementCreateManyAndReturnArgs} args - Arguments to create many InventoryMovements.
     * @example
     * // Create many InventoryMovements
     * const inventoryMovement = await prisma.inventoryMovement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryMovements and only return the `id`
     * const inventoryMovementWithIdOnly = await prisma.inventoryMovement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryMovementCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryMovement.
     * @param {InventoryMovementDeleteArgs} args - Arguments to delete one InventoryMovement.
     * @example
     * // Delete one InventoryMovement
     * const InventoryMovement = await prisma.inventoryMovement.delete({
     *   where: {
     *     // ... filter to delete one InventoryMovement
     *   }
     * })
     * 
     */
    delete<T extends InventoryMovementDeleteArgs>(args: SelectSubset<T, InventoryMovementDeleteArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryMovement.
     * @param {InventoryMovementUpdateArgs} args - Arguments to update one InventoryMovement.
     * @example
     * // Update one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryMovementUpdateArgs>(args: SelectSubset<T, InventoryMovementUpdateArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryMovements.
     * @param {InventoryMovementDeleteManyArgs} args - Arguments to filter InventoryMovements to delete.
     * @example
     * // Delete a few InventoryMovements
     * const { count } = await prisma.inventoryMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryMovementDeleteManyArgs>(args?: SelectSubset<T, InventoryMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryMovements
     * const inventoryMovement = await prisma.inventoryMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryMovementUpdateManyArgs>(args: SelectSubset<T, InventoryMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryMovements and returns the data updated in the database.
     * @param {InventoryMovementUpdateManyAndReturnArgs} args - Arguments to update many InventoryMovements.
     * @example
     * // Update many InventoryMovements
     * const inventoryMovement = await prisma.inventoryMovement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryMovements and only return the `id`
     * const inventoryMovementWithIdOnly = await prisma.inventoryMovement.updateManyAndReturn({
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
    updateManyAndReturn<T extends InventoryMovementUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryMovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryMovement.
     * @param {InventoryMovementUpsertArgs} args - Arguments to update or create a InventoryMovement.
     * @example
     * // Update or create a InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.upsert({
     *   create: {
     *     // ... data to create a InventoryMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryMovement we want to update
     *   }
     * })
     */
    upsert<T extends InventoryMovementUpsertArgs>(args: SelectSubset<T, InventoryMovementUpsertArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementCountArgs} args - Arguments to filter InventoryMovements to count.
     * @example
     * // Count the number of InventoryMovements
     * const count = await prisma.inventoryMovement.count({
     *   where: {
     *     // ... the filter for the InventoryMovements we want to count
     *   }
     * })
    **/
    count<T extends InventoryMovementCountArgs>(
      args?: Subset<T, InventoryMovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryMovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryMovementAggregateArgs>(args: Subset<T, InventoryMovementAggregateArgs>): Prisma.PrismaPromise<GetInventoryMovementAggregateType<T>>

    /**
     * Group by InventoryMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementGroupByArgs} args - Group by arguments.
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
      T extends InventoryMovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryMovementGroupByArgs['orderBy'] }
        : { orderBy?: InventoryMovementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryMovement model
   */
  readonly fields: InventoryMovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryMovement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryMovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InventoryMovement model
   */
  interface InventoryMovementFieldRefs {
    readonly id: FieldRef<"InventoryMovement", 'String'>
    readonly workspaceId: FieldRef<"InventoryMovement", 'String'>
    readonly userId: FieldRef<"InventoryMovement", 'String'>
    readonly productId: FieldRef<"InventoryMovement", 'String'>
    readonly type: FieldRef<"InventoryMovement", 'InventoryMovementType'>
    readonly reason: FieldRef<"InventoryMovement", 'InventoryMovementReason'>
    readonly note: FieldRef<"InventoryMovement", 'String'>
    readonly createdAt: FieldRef<"InventoryMovement", 'DateTime'>
    readonly updatedAt: FieldRef<"InventoryMovement", 'DateTime'>
    readonly deletedAt: FieldRef<"InventoryMovement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryMovement findUnique
   */
  export type InventoryMovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter, which InventoryMovement to fetch.
     */
    where: InventoryMovementWhereUniqueInput
  }

  /**
   * InventoryMovement findUniqueOrThrow
   */
  export type InventoryMovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter, which InventoryMovement to fetch.
     */
    where: InventoryMovementWhereUniqueInput
  }

  /**
   * InventoryMovement findFirst
   */
  export type InventoryMovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter, which InventoryMovement to fetch.
     */
    where?: InventoryMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryMovements to fetch.
     */
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryMovements.
     */
    cursor?: InventoryMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryMovements.
     */
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * InventoryMovement findFirstOrThrow
   */
  export type InventoryMovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter, which InventoryMovement to fetch.
     */
    where?: InventoryMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryMovements to fetch.
     */
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryMovements.
     */
    cursor?: InventoryMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryMovements.
     */
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * InventoryMovement findMany
   */
  export type InventoryMovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter, which InventoryMovements to fetch.
     */
    where?: InventoryMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryMovements to fetch.
     */
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryMovements.
     */
    cursor?: InventoryMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryMovements.
     */
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * InventoryMovement create
   */
  export type InventoryMovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryMovement.
     */
    data: XOR<InventoryMovementCreateInput, InventoryMovementUncheckedCreateInput>
  }

  /**
   * InventoryMovement createMany
   */
  export type InventoryMovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryMovements.
     */
    data: InventoryMovementCreateManyInput | InventoryMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryMovement createManyAndReturn
   */
  export type InventoryMovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryMovements.
     */
    data: InventoryMovementCreateManyInput | InventoryMovementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryMovement update
   */
  export type InventoryMovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryMovement.
     */
    data: XOR<InventoryMovementUpdateInput, InventoryMovementUncheckedUpdateInput>
    /**
     * Choose, which InventoryMovement to update.
     */
    where: InventoryMovementWhereUniqueInput
  }

  /**
   * InventoryMovement updateMany
   */
  export type InventoryMovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryMovements.
     */
    data: XOR<InventoryMovementUpdateManyMutationInput, InventoryMovementUncheckedUpdateManyInput>
    /**
     * Filter which InventoryMovements to update
     */
    where?: InventoryMovementWhereInput
    /**
     * Limit how many InventoryMovements to update.
     */
    limit?: number
  }

  /**
   * InventoryMovement updateManyAndReturn
   */
  export type InventoryMovementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * The data used to update InventoryMovements.
     */
    data: XOR<InventoryMovementUpdateManyMutationInput, InventoryMovementUncheckedUpdateManyInput>
    /**
     * Filter which InventoryMovements to update
     */
    where?: InventoryMovementWhereInput
    /**
     * Limit how many InventoryMovements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryMovement upsert
   */
  export type InventoryMovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryMovement to update in case it exists.
     */
    where: InventoryMovementWhereUniqueInput
    /**
     * In case the InventoryMovement found by the `where` argument doesn't exist, create a new InventoryMovement with this data.
     */
    create: XOR<InventoryMovementCreateInput, InventoryMovementUncheckedCreateInput>
    /**
     * In case the InventoryMovement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryMovementUpdateInput, InventoryMovementUncheckedUpdateInput>
  }

  /**
   * InventoryMovement delete
   */
  export type InventoryMovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter which InventoryMovement to delete.
     */
    where: InventoryMovementWhereUniqueInput
  }

  /**
   * InventoryMovement deleteMany
   */
  export type InventoryMovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryMovements to delete
     */
    where?: InventoryMovementWhereInput
    /**
     * Limit how many InventoryMovements to delete.
     */
    limit?: number
  }

  /**
   * InventoryMovement without action
   */
  export type InventoryMovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    id: number | null
  }

  export type PlanSumAggregateOutputType = {
    id: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    color: string | null
    maxProducts: string | null
    maxMembers: string | null
    status: $Enums.PlanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    color: string | null
    maxProducts: string | null
    maxMembers: string | null
    status: $Enums.PlanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    name: number
    description: number
    color: number
    maxProducts: number
    maxMembers: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    id?: true
  }

  export type PlanSumAggregateInputType = {
    id?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    maxProducts?: true
    maxMembers?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    maxProducts?: true
    maxMembers?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    maxProducts?: true
    maxMembers?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: number
    name: string
    description: string
    color: string
    maxProducts: string
    maxMembers: string
    status: $Enums.PlanStatus
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    maxProducts?: boolean
    maxMembers?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    workspaces?: boolean | Plan$workspacesArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    maxProducts?: boolean
    maxMembers?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    maxProducts?: boolean
    maxMembers?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    maxProducts?: boolean
    maxMembers?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "color" | "maxProducts" | "maxMembers" | "status" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | Plan$workspacesArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      workspaces: Prisma.$WorkspacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      color: string
      maxProducts: string
      maxMembers: string
      status: $Enums.PlanStatus
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
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
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspaces<T extends Plan$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, Plan$workspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'Int'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly description: FieldRef<"Plan", 'String'>
    readonly color: FieldRef<"Plan", 'String'>
    readonly maxProducts: FieldRef<"Plan", 'String'>
    readonly maxMembers: FieldRef<"Plan", 'String'>
    readonly status: FieldRef<"Plan", 'PlanStatus'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
    readonly updatedAt: FieldRef<"Plan", 'DateTime'>
    readonly deletedAt: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan updateManyAndReturn
   */
  export type PlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plan.workspaces
   */
  export type Plan$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    cursor?: WorkspaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    birthdate: 'birthdate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    planId: 'planId',
    ownerId: 'ownerId',
    statsus: 'statsus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const WorkspaceMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    workspaceId: 'workspaceId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    expiresAt: 'expiresAt'
  };

  export type WorkspaceMemberScalarFieldEnum = (typeof WorkspaceMemberScalarFieldEnum)[keyof typeof WorkspaceMemberScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    barcode: 'barcode',
    name: 'name',
    Purchasedprice: 'Purchasedprice',
    price: 'price',
    quantity: 'quantity',
    minQuantity: 'minQuantity',
    slug: 'slug',
    cadasterId: 'cadasterId',
    workspaceId: 'workspaceId',
    status: 'status',
    unit: 'unit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const InventoryMovementScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    userId: 'userId',
    productId: 'productId',
    type: 'type',
    reason: 'reason',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type InventoryMovementScalarFieldEnum = (typeof InventoryMovementScalarFieldEnum)[keyof typeof InventoryMovementScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    color: 'color',
    maxProducts: 'maxProducts',
    maxMembers: 'maxMembers',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'GlobalUserRole'
   */
  export type EnumGlobalUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GlobalUserRole'>
    


  /**
   * Reference to a field of type 'GlobalUserRole[]'
   */
  export type ListEnumGlobalUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GlobalUserRole[]'>
    


  /**
   * Reference to a field of type 'GlobalUserStatus'
   */
  export type EnumGlobalUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GlobalUserStatus'>
    


  /**
   * Reference to a field of type 'GlobalUserStatus[]'
   */
  export type ListEnumGlobalUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GlobalUserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'WorkspaceStatus'
   */
  export type EnumWorkspaceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkspaceStatus'>
    


  /**
   * Reference to a field of type 'WorkspaceStatus[]'
   */
  export type ListEnumWorkspaceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkspaceStatus[]'>
    


  /**
   * Reference to a field of type 'UserWorkspaceRole'
   */
  export type EnumUserWorkspaceRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserWorkspaceRole'>
    


  /**
   * Reference to a field of type 'UserWorkspaceRole[]'
   */
  export type ListEnumUserWorkspaceRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserWorkspaceRole[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ProductStatus'
   */
  export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus'>
    


  /**
   * Reference to a field of type 'ProductStatus[]'
   */
  export type ListEnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus[]'>
    


  /**
   * Reference to a field of type 'InventoryMovementType'
   */
  export type EnumInventoryMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryMovementType'>
    


  /**
   * Reference to a field of type 'InventoryMovementType[]'
   */
  export type ListEnumInventoryMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryMovementType[]'>
    


  /**
   * Reference to a field of type 'InventoryMovementReason'
   */
  export type EnumInventoryMovementReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryMovementReason'>
    


  /**
   * Reference to a field of type 'InventoryMovementReason[]'
   */
  export type ListEnumInventoryMovementReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryMovementReason[]'>
    


  /**
   * Reference to a field of type 'PlanStatus'
   */
  export type EnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus'>
    


  /**
   * Reference to a field of type 'PlanStatus[]'
   */
  export type ListEnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    slug?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumGlobalUserRoleFilter<"User"> | $Enums.GlobalUserRole
    status?: EnumGlobalUserStatusFilter<"User"> | $Enums.GlobalUserStatus
    birthdate?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    workspaces?: WorkspaceListRelationFilter
    memberOf?: WorkspaceMemberListRelationFilter
    productsRegisted?: ProductListRelationFilter
    inventoryMoviments?: InventoryMovementListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    birthdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    workspaces?: WorkspaceOrderByRelationAggregateInput
    memberOf?: WorkspaceMemberOrderByRelationAggregateInput
    productsRegisted?: ProductOrderByRelationAggregateInput
    inventoryMoviments?: InventoryMovementOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumGlobalUserRoleFilter<"User"> | $Enums.GlobalUserRole
    status?: EnumGlobalUserStatusFilter<"User"> | $Enums.GlobalUserStatus
    birthdate?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    workspaces?: WorkspaceListRelationFilter
    memberOf?: WorkspaceMemberListRelationFilter
    productsRegisted?: ProductListRelationFilter
    inventoryMoviments?: InventoryMovementListRelationFilter
  }, "id" | "slug" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    birthdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    slug?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumGlobalUserRoleWithAggregatesFilter<"User"> | $Enums.GlobalUserRole
    status?: EnumGlobalUserStatusWithAggregatesFilter<"User"> | $Enums.GlobalUserStatus
    birthdate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type WorkspaceWhereInput = {
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    slug?: StringFilter<"Workspace"> | string
    planId?: IntFilter<"Workspace"> | number
    ownerId?: StringFilter<"Workspace"> | string
    statsus?: EnumWorkspaceStatusFilter<"Workspace"> | $Enums.WorkspaceStatus
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    products?: ProductListRelationFilter
    member?: WorkspaceMemberListRelationFilter
    inventoryMoviments?: InventoryMovementListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    planId?: SortOrder
    ownerId?: SortOrder
    statsus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
    member?: WorkspaceMemberOrderByRelationAggregateInput
    inventoryMoviments?: InventoryMovementOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    name?: StringFilter<"Workspace"> | string
    planId?: IntFilter<"Workspace"> | number
    ownerId?: StringFilter<"Workspace"> | string
    statsus?: EnumWorkspaceStatusFilter<"Workspace"> | $Enums.WorkspaceStatus
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    products?: ProductListRelationFilter
    member?: WorkspaceMemberListRelationFilter
    inventoryMoviments?: InventoryMovementListRelationFilter
  }, "id" | "slug">

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    planId?: SortOrder
    ownerId?: SortOrder
    statsus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _avg?: WorkspaceAvgOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
    _sum?: WorkspaceSumOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    OR?: WorkspaceScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workspace"> | string
    name?: StringWithAggregatesFilter<"Workspace"> | string
    slug?: StringWithAggregatesFilter<"Workspace"> | string
    planId?: IntWithAggregatesFilter<"Workspace"> | number
    ownerId?: StringWithAggregatesFilter<"Workspace"> | string
    statsus?: EnumWorkspaceStatusWithAggregatesFilter<"Workspace"> | $Enums.WorkspaceStatus
    createdAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Workspace"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Workspace"> | Date | string | null
  }

  export type WorkspaceMemberWhereInput = {
    AND?: WorkspaceMemberWhereInput | WorkspaceMemberWhereInput[]
    OR?: WorkspaceMemberWhereInput[]
    NOT?: WorkspaceMemberWhereInput | WorkspaceMemberWhereInput[]
    id?: IntFilter<"WorkspaceMember"> | number
    userId?: StringFilter<"WorkspaceMember"> | string
    workspaceId?: StringFilter<"WorkspaceMember"> | string
    role?: EnumUserWorkspaceRoleFilter<"WorkspaceMember"> | $Enums.UserWorkspaceRole
    createdAt?: DateTimeFilter<"WorkspaceMember"> | Date | string
    updatedAt?: DateTimeNullableFilter<"WorkspaceMember"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"WorkspaceMember"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"WorkspaceMember"> | Date | string | null
    member?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type WorkspaceMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    member?: UserOrderByWithRelationInput
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type WorkspaceMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkspaceMemberWhereInput | WorkspaceMemberWhereInput[]
    OR?: WorkspaceMemberWhereInput[]
    NOT?: WorkspaceMemberWhereInput | WorkspaceMemberWhereInput[]
    userId?: StringFilter<"WorkspaceMember"> | string
    workspaceId?: StringFilter<"WorkspaceMember"> | string
    role?: EnumUserWorkspaceRoleFilter<"WorkspaceMember"> | $Enums.UserWorkspaceRole
    createdAt?: DateTimeFilter<"WorkspaceMember"> | Date | string
    updatedAt?: DateTimeNullableFilter<"WorkspaceMember"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"WorkspaceMember"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"WorkspaceMember"> | Date | string | null
    member?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "id">

  export type WorkspaceMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: WorkspaceMemberCountOrderByAggregateInput
    _avg?: WorkspaceMemberAvgOrderByAggregateInput
    _max?: WorkspaceMemberMaxOrderByAggregateInput
    _min?: WorkspaceMemberMinOrderByAggregateInput
    _sum?: WorkspaceMemberSumOrderByAggregateInput
  }

  export type WorkspaceMemberScalarWhereWithAggregatesInput = {
    AND?: WorkspaceMemberScalarWhereWithAggregatesInput | WorkspaceMemberScalarWhereWithAggregatesInput[]
    OR?: WorkspaceMemberScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceMemberScalarWhereWithAggregatesInput | WorkspaceMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkspaceMember"> | number
    userId?: StringWithAggregatesFilter<"WorkspaceMember"> | string
    workspaceId?: StringWithAggregatesFilter<"WorkspaceMember"> | string
    role?: EnumUserWorkspaceRoleWithAggregatesFilter<"WorkspaceMember"> | $Enums.UserWorkspaceRole
    createdAt?: DateTimeWithAggregatesFilter<"WorkspaceMember"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"WorkspaceMember"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"WorkspaceMember"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"WorkspaceMember"> | Date | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    barcode?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    Purchasedprice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"Product"> | number
    minQuantity?: IntFilter<"Product"> | number
    slug?: StringFilter<"Product"> | string
    cadasterId?: StringFilter<"Product"> | string
    workspaceId?: StringFilter<"Product"> | string
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    unit?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    inventoryMovements?: InventoryMovementListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    barcode?: SortOrder
    name?: SortOrder
    Purchasedprice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    minQuantity?: SortOrder
    slug?: SortOrder
    cadasterId?: SortOrder
    workspaceId?: SortOrder
    status?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    inventoryMovements?: InventoryMovementOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    barcode?: string
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    Purchasedprice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"Product"> | number
    minQuantity?: IntFilter<"Product"> | number
    cadasterId?: StringFilter<"Product"> | string
    workspaceId?: StringFilter<"Product"> | string
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    unit?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    inventoryMovements?: InventoryMovementListRelationFilter
  }, "id" | "barcode" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    barcode?: SortOrder
    name?: SortOrder
    Purchasedprice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    minQuantity?: SortOrder
    slug?: SortOrder
    cadasterId?: SortOrder
    workspaceId?: SortOrder
    status?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    barcode?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    Purchasedprice?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    quantity?: IntWithAggregatesFilter<"Product"> | number
    minQuantity?: IntWithAggregatesFilter<"Product"> | number
    slug?: StringWithAggregatesFilter<"Product"> | string
    cadasterId?: StringWithAggregatesFilter<"Product"> | string
    workspaceId?: StringWithAggregatesFilter<"Product"> | string
    status?: EnumProductStatusWithAggregatesFilter<"Product"> | $Enums.ProductStatus
    unit?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
  }

  export type InventoryMovementWhereInput = {
    AND?: InventoryMovementWhereInput | InventoryMovementWhereInput[]
    OR?: InventoryMovementWhereInput[]
    NOT?: InventoryMovementWhereInput | InventoryMovementWhereInput[]
    id?: StringFilter<"InventoryMovement"> | string
    workspaceId?: StringFilter<"InventoryMovement"> | string
    userId?: StringFilter<"InventoryMovement"> | string
    productId?: StringFilter<"InventoryMovement"> | string
    type?: EnumInventoryMovementTypeFilter<"InventoryMovement"> | $Enums.InventoryMovementType
    reason?: EnumInventoryMovementReasonNullableFilter<"InventoryMovement"> | $Enums.InventoryMovementReason | null
    note?: StringNullableFilter<"InventoryMovement"> | string | null
    createdAt?: DateTimeFilter<"InventoryMovement"> | Date | string
    updatedAt?: DateTimeNullableFilter<"InventoryMovement"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"InventoryMovement"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type InventoryMovementOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    workspace?: WorkspaceOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type InventoryMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryMovementWhereInput | InventoryMovementWhereInput[]
    OR?: InventoryMovementWhereInput[]
    NOT?: InventoryMovementWhereInput | InventoryMovementWhereInput[]
    workspaceId?: StringFilter<"InventoryMovement"> | string
    userId?: StringFilter<"InventoryMovement"> | string
    productId?: StringFilter<"InventoryMovement"> | string
    type?: EnumInventoryMovementTypeFilter<"InventoryMovement"> | $Enums.InventoryMovementType
    reason?: EnumInventoryMovementReasonNullableFilter<"InventoryMovement"> | $Enums.InventoryMovementReason | null
    note?: StringNullableFilter<"InventoryMovement"> | string | null
    createdAt?: DateTimeFilter<"InventoryMovement"> | Date | string
    updatedAt?: DateTimeNullableFilter<"InventoryMovement"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"InventoryMovement"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type InventoryMovementOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: InventoryMovementCountOrderByAggregateInput
    _max?: InventoryMovementMaxOrderByAggregateInput
    _min?: InventoryMovementMinOrderByAggregateInput
  }

  export type InventoryMovementScalarWhereWithAggregatesInput = {
    AND?: InventoryMovementScalarWhereWithAggregatesInput | InventoryMovementScalarWhereWithAggregatesInput[]
    OR?: InventoryMovementScalarWhereWithAggregatesInput[]
    NOT?: InventoryMovementScalarWhereWithAggregatesInput | InventoryMovementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryMovement"> | string
    workspaceId?: StringWithAggregatesFilter<"InventoryMovement"> | string
    userId?: StringWithAggregatesFilter<"InventoryMovement"> | string
    productId?: StringWithAggregatesFilter<"InventoryMovement"> | string
    type?: EnumInventoryMovementTypeWithAggregatesFilter<"InventoryMovement"> | $Enums.InventoryMovementType
    reason?: EnumInventoryMovementReasonNullableWithAggregatesFilter<"InventoryMovement"> | $Enums.InventoryMovementReason | null
    note?: StringNullableWithAggregatesFilter<"InventoryMovement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InventoryMovement"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"InventoryMovement"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"InventoryMovement"> | Date | string | null
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: IntFilter<"Plan"> | number
    name?: StringFilter<"Plan"> | string
    description?: StringFilter<"Plan"> | string
    color?: StringFilter<"Plan"> | string
    maxProducts?: StringFilter<"Plan"> | string
    maxMembers?: StringFilter<"Plan"> | string
    status?: EnumPlanStatusFilter<"Plan"> | $Enums.PlanStatus
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Plan"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Plan"> | Date | string | null
    workspaces?: WorkspaceListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    maxProducts?: SortOrder
    maxMembers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    workspaces?: WorkspaceOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    description?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    color?: StringFilter<"Plan"> | string
    maxProducts?: StringFilter<"Plan"> | string
    maxMembers?: StringFilter<"Plan"> | string
    status?: EnumPlanStatusFilter<"Plan"> | $Enums.PlanStatus
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Plan"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Plan"> | Date | string | null
    workspaces?: WorkspaceListRelationFilter
  }, "id" | "name" | "description">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    maxProducts?: SortOrder
    maxMembers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plan"> | number
    name?: StringWithAggregatesFilter<"Plan"> | string
    description?: StringWithAggregatesFilter<"Plan"> | string
    color?: StringWithAggregatesFilter<"Plan"> | string
    maxProducts?: StringWithAggregatesFilter<"Plan"> | string
    maxMembers?: StringWithAggregatesFilter<"Plan"> | string
    status?: EnumPlanStatusWithAggregatesFilter<"Plan"> | $Enums.PlanStatus
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Plan"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Plan"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    slug: string
    email: string
    password: string
    role?: $Enums.GlobalUserRole
    status?: $Enums.GlobalUserStatus
    birthdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    workspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    memberOf?: WorkspaceMemberCreateNestedManyWithoutMemberInput
    productsRegisted?: ProductCreateNestedManyWithoutUserInput
    inventoryMoviments?: InventoryMovementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    email: string
    password: string
    role?: $Enums.GlobalUserRole
    status?: $Enums.GlobalUserStatus
    birthdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    workspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    memberOf?: WorkspaceMemberUncheckedCreateNestedManyWithoutMemberInput
    productsRegisted?: ProductUncheckedCreateNestedManyWithoutUserInput
    inventoryMoviments?: InventoryMovementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalUserRoleFieldUpdateOperationsInput | $Enums.GlobalUserRole
    status?: EnumGlobalUserStatusFieldUpdateOperationsInput | $Enums.GlobalUserStatus
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    memberOf?: WorkspaceMemberUpdateManyWithoutMemberNestedInput
    productsRegisted?: ProductUpdateManyWithoutUserNestedInput
    inventoryMoviments?: InventoryMovementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalUserRoleFieldUpdateOperationsInput | $Enums.GlobalUserRole
    status?: EnumGlobalUserStatusFieldUpdateOperationsInput | $Enums.GlobalUserStatus
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    memberOf?: WorkspaceMemberUncheckedUpdateManyWithoutMemberNestedInput
    productsRegisted?: ProductUncheckedUpdateManyWithoutUserNestedInput
    inventoryMoviments?: InventoryMovementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    slug: string
    email: string
    password: string
    role?: $Enums.GlobalUserRole
    status?: $Enums.GlobalUserStatus
    birthdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalUserRoleFieldUpdateOperationsInput | $Enums.GlobalUserRole
    status?: EnumGlobalUserStatusFieldUpdateOperationsInput | $Enums.GlobalUserStatus
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalUserRoleFieldUpdateOperationsInput | $Enums.GlobalUserRole
    status?: EnumGlobalUserStatusFieldUpdateOperationsInput | $Enums.GlobalUserStatus
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceCreateInput = {
    id?: string
    name: string
    slug: string
    statsus?: $Enums.WorkspaceStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    owner: UserCreateNestedOneWithoutWorkspacesInput
    plan: PlanCreateNestedOneWithoutWorkspacesInput
    products?: ProductCreateNestedManyWithoutWorkspaceInput
    member?: WorkspaceMemberCreateNestedManyWithoutWorkspaceInput
    inventoryMoviments?: InventoryMovementCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    planId: number
    ownerId: string
    statsus?: $Enums.WorkspaceStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    products?: ProductUncheckedCreateNestedManyWithoutWorkspaceInput
    member?: WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput
    inventoryMoviments?: InventoryMovementUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    statsus?: EnumWorkspaceStatusFieldUpdateOperationsInput | $Enums.WorkspaceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    plan?: PlanUpdateOneRequiredWithoutWorkspacesNestedInput
    products?: ProductUpdateManyWithoutWorkspaceNestedInput
    member?: WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput
    inventoryMoviments?: InventoryMovementUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    statsus?: EnumWorkspaceStatusFieldUpdateOperationsInput | $Enums.WorkspaceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductUncheckedUpdateManyWithoutWorkspaceNestedInput
    member?: WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput
    inventoryMoviments?: InventoryMovementUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: string
    name: string
    slug: string
    planId: number
    ownerId: string
    statsus?: $Enums.WorkspaceStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type WorkspaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    statsus?: EnumWorkspaceStatusFieldUpdateOperationsInput | $Enums.WorkspaceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    statsus?: EnumWorkspaceStatusFieldUpdateOperationsInput | $Enums.WorkspaceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceMemberCreateInput = {
    role?: $Enums.UserWorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
    member: UserCreateNestedOneWithoutMemberOfInput
    workspace: WorkspaceCreateNestedOneWithoutMemberInput
  }

  export type WorkspaceMemberUncheckedCreateInput = {
    id?: number
    userId: string
    workspaceId: string
    role?: $Enums.UserWorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
  }

  export type WorkspaceMemberUpdateInput = {
    role?: EnumUserWorkspaceRoleFieldUpdateOperationsInput | $Enums.UserWorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: UserUpdateOneRequiredWithoutMemberOfNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutMemberNestedInput
  }

  export type WorkspaceMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserWorkspaceRoleFieldUpdateOperationsInput | $Enums.UserWorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceMemberCreateManyInput = {
    id?: number
    userId: string
    workspaceId: string
    role?: $Enums.UserWorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
  }

  export type WorkspaceMemberUpdateManyMutationInput = {
    role?: EnumUserWorkspaceRoleFieldUpdateOperationsInput | $Enums.UserWorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserWorkspaceRoleFieldUpdateOperationsInput | $Enums.UserWorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateInput = {
    id?: string
    barcode: string
    name: string
    Purchasedprice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    minQuantity: number
    slug: string
    status?: $Enums.ProductStatus
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    workspace: WorkspaceCreateNestedOneWithoutProductsInput
    user: UserCreateNestedOneWithoutProductsRegistedInput
    inventoryMovements?: InventoryMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    barcode: string
    name: string
    Purchasedprice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    minQuantity: number
    slug: string
    cadasterId: string
    workspaceId: string
    status?: $Enums.ProductStatus
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    inventoryMovements?: InventoryMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Purchasedprice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutProductsNestedInput
    user?: UserUpdateOneRequiredWithoutProductsRegistedNestedInput
    inventoryMovements?: InventoryMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Purchasedprice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    cadasterId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventoryMovements?: InventoryMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    barcode: string
    name: string
    Purchasedprice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    minQuantity: number
    slug: string
    cadasterId: string
    workspaceId: string
    status?: $Enums.ProductStatus
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Purchasedprice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Purchasedprice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    cadasterId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryMovementCreateInput = {
    id?: string
    type: $Enums.InventoryMovementType
    reason?: $Enums.InventoryMovementReason | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutInventoryMovimentsInput
    workspace: WorkspaceCreateNestedOneWithoutInventoryMovimentsInput
    product: ProductCreateNestedOneWithoutInventoryMovementsInput
  }

  export type InventoryMovementUncheckedCreateInput = {
    id?: string
    workspaceId: string
    userId: string
    productId: string
    type: $Enums.InventoryMovementType
    reason?: $Enums.InventoryMovementReason | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type InventoryMovementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryMovementTypeFieldUpdateOperationsInput | $Enums.InventoryMovementType
    reason?: NullableEnumInventoryMovementReasonFieldUpdateOperationsInput | $Enums.InventoryMovementReason | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutInventoryMovimentsNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutInventoryMovimentsNestedInput
    product?: ProductUpdateOneRequiredWithoutInventoryMovementsNestedInput
  }

  export type InventoryMovementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryMovementTypeFieldUpdateOperationsInput | $Enums.InventoryMovementType
    reason?: NullableEnumInventoryMovementReasonFieldUpdateOperationsInput | $Enums.InventoryMovementReason | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryMovementCreateManyInput = {
    id?: string
    workspaceId: string
    userId: string
    productId: string
    type: $Enums.InventoryMovementType
    reason?: $Enums.InventoryMovementReason | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type InventoryMovementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryMovementTypeFieldUpdateOperationsInput | $Enums.InventoryMovementType
    reason?: NullableEnumInventoryMovementReasonFieldUpdateOperationsInput | $Enums.InventoryMovementReason | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryMovementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryMovementTypeFieldUpdateOperationsInput | $Enums.InventoryMovementType
    reason?: NullableEnumInventoryMovementReasonFieldUpdateOperationsInput | $Enums.InventoryMovementReason | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlanCreateInput = {
    name: string
    description: string
    color: string
    maxProducts: string
    maxMembers: string
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    workspaces?: WorkspaceCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    color: string
    maxProducts: string
    maxMembers: string
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    workspaces?: WorkspaceUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    maxProducts?: StringFieldUpdateOperationsInput | string
    maxMembers?: StringFieldUpdateOperationsInput | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    maxProducts?: StringFieldUpdateOperationsInput | string
    maxMembers?: StringFieldUpdateOperationsInput | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: number
    name: string
    description: string
    color: string
    maxProducts: string
    maxMembers: string
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type PlanUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    maxProducts?: StringFieldUpdateOperationsInput | string
    maxMembers?: StringFieldUpdateOperationsInput | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    maxProducts?: StringFieldUpdateOperationsInput | string
    maxMembers?: StringFieldUpdateOperationsInput | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumGlobalUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalUserRole | EnumGlobalUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GlobalUserRole[] | ListEnumGlobalUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GlobalUserRole[] | ListEnumGlobalUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGlobalUserRoleFilter<$PrismaModel> | $Enums.GlobalUserRole
  }

  export type EnumGlobalUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalUserStatus | EnumGlobalUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GlobalUserStatus[] | ListEnumGlobalUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GlobalUserStatus[] | ListEnumGlobalUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGlobalUserStatusFilter<$PrismaModel> | $Enums.GlobalUserStatus
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type WorkspaceListRelationFilter = {
    every?: WorkspaceWhereInput
    some?: WorkspaceWhereInput
    none?: WorkspaceWhereInput
  }

  export type WorkspaceMemberListRelationFilter = {
    every?: WorkspaceMemberWhereInput
    some?: WorkspaceMemberWhereInput
    none?: WorkspaceMemberWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type InventoryMovementListRelationFilter = {
    every?: InventoryMovementWhereInput
    some?: InventoryMovementWhereInput
    none?: InventoryMovementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkspaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryMovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    birthdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    birthdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    birthdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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

  export type EnumGlobalUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalUserRole | EnumGlobalUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GlobalUserRole[] | ListEnumGlobalUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GlobalUserRole[] | ListEnumGlobalUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGlobalUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.GlobalUserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGlobalUserRoleFilter<$PrismaModel>
    _max?: NestedEnumGlobalUserRoleFilter<$PrismaModel>
  }

  export type EnumGlobalUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalUserStatus | EnumGlobalUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GlobalUserStatus[] | ListEnumGlobalUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GlobalUserStatus[] | ListEnumGlobalUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGlobalUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.GlobalUserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGlobalUserStatusFilter<$PrismaModel>
    _max?: NestedEnumGlobalUserStatusFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type EnumWorkspaceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkspaceStatus | EnumWorkspaceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkspaceStatus[] | ListEnumWorkspaceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkspaceStatus[] | ListEnumWorkspaceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkspaceStatusFilter<$PrismaModel> | $Enums.WorkspaceStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    planId?: SortOrder
    ownerId?: SortOrder
    statsus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type WorkspaceAvgOrderByAggregateInput = {
    planId?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    planId?: SortOrder
    ownerId?: SortOrder
    statsus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    planId?: SortOrder
    ownerId?: SortOrder
    statsus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type WorkspaceSumOrderByAggregateInput = {
    planId?: SortOrder
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

  export type EnumWorkspaceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkspaceStatus | EnumWorkspaceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkspaceStatus[] | ListEnumWorkspaceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkspaceStatus[] | ListEnumWorkspaceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkspaceStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkspaceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkspaceStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkspaceStatusFilter<$PrismaModel>
  }

  export type EnumUserWorkspaceRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserWorkspaceRole | EnumUserWorkspaceRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserWorkspaceRole[] | ListEnumUserWorkspaceRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserWorkspaceRole[] | ListEnumUserWorkspaceRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserWorkspaceRoleFilter<$PrismaModel> | $Enums.UserWorkspaceRole
  }

  export type WorkspaceScalarRelationFilter = {
    is?: WorkspaceWhereInput
    isNot?: WorkspaceWhereInput
  }

  export type WorkspaceMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type WorkspaceMemberAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkspaceMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type WorkspaceMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type WorkspaceMemberSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumUserWorkspaceRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserWorkspaceRole | EnumUserWorkspaceRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserWorkspaceRole[] | ListEnumUserWorkspaceRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserWorkspaceRole[] | ListEnumUserWorkspaceRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserWorkspaceRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserWorkspaceRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserWorkspaceRoleFilter<$PrismaModel>
    _max?: NestedEnumUserWorkspaceRoleFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    barcode?: SortOrder
    name?: SortOrder
    Purchasedprice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    minQuantity?: SortOrder
    slug?: SortOrder
    cadasterId?: SortOrder
    workspaceId?: SortOrder
    status?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    Purchasedprice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    minQuantity?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    barcode?: SortOrder
    name?: SortOrder
    Purchasedprice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    minQuantity?: SortOrder
    slug?: SortOrder
    cadasterId?: SortOrder
    workspaceId?: SortOrder
    status?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    barcode?: SortOrder
    name?: SortOrder
    Purchasedprice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    minQuantity?: SortOrder
    slug?: SortOrder
    cadasterId?: SortOrder
    workspaceId?: SortOrder
    status?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    Purchasedprice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    minQuantity?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type EnumInventoryMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryMovementType | EnumInventoryMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryMovementType[] | ListEnumInventoryMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryMovementType[] | ListEnumInventoryMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryMovementTypeFilter<$PrismaModel> | $Enums.InventoryMovementType
  }

  export type EnumInventoryMovementReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryMovementReason | EnumInventoryMovementReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.InventoryMovementReason[] | ListEnumInventoryMovementReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InventoryMovementReason[] | ListEnumInventoryMovementReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInventoryMovementReasonNullableFilter<$PrismaModel> | $Enums.InventoryMovementReason | null
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

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type InventoryMovementCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type InventoryMovementMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type InventoryMovementMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumInventoryMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryMovementType | EnumInventoryMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryMovementType[] | ListEnumInventoryMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryMovementType[] | ListEnumInventoryMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.InventoryMovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumInventoryMovementTypeFilter<$PrismaModel>
  }

  export type EnumInventoryMovementReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryMovementReason | EnumInventoryMovementReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.InventoryMovementReason[] | ListEnumInventoryMovementReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InventoryMovementReason[] | ListEnumInventoryMovementReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInventoryMovementReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.InventoryMovementReason | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumInventoryMovementReasonNullableFilter<$PrismaModel>
    _max?: NestedEnumInventoryMovementReasonNullableFilter<$PrismaModel>
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

  export type EnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    maxProducts?: SortOrder
    maxMembers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    maxProducts?: SortOrder
    maxMembers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    maxProducts?: SortOrder
    maxMembers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type WorkspaceCreateNestedManyWithoutOwnerInput = {
    create?: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput> | WorkspaceCreateWithoutOwnerInput[] | WorkspaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutOwnerInput | WorkspaceCreateOrConnectWithoutOwnerInput[]
    createMany?: WorkspaceCreateManyOwnerInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type WorkspaceMemberCreateNestedManyWithoutMemberInput = {
    create?: XOR<WorkspaceMemberCreateWithoutMemberInput, WorkspaceMemberUncheckedCreateWithoutMemberInput> | WorkspaceMemberCreateWithoutMemberInput[] | WorkspaceMemberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutMemberInput | WorkspaceMemberCreateOrConnectWithoutMemberInput[]
    createMany?: WorkspaceMemberCreateManyMemberInputEnvelope
    connect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type InventoryMovementCreateNestedManyWithoutUserInput = {
    create?: XOR<InventoryMovementCreateWithoutUserInput, InventoryMovementUncheckedCreateWithoutUserInput> | InventoryMovementCreateWithoutUserInput[] | InventoryMovementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutUserInput | InventoryMovementCreateOrConnectWithoutUserInput[]
    createMany?: InventoryMovementCreateManyUserInputEnvelope
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
  }

  export type WorkspaceUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput> | WorkspaceCreateWithoutOwnerInput[] | WorkspaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutOwnerInput | WorkspaceCreateOrConnectWithoutOwnerInput[]
    createMany?: WorkspaceCreateManyOwnerInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type WorkspaceMemberUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<WorkspaceMemberCreateWithoutMemberInput, WorkspaceMemberUncheckedCreateWithoutMemberInput> | WorkspaceMemberCreateWithoutMemberInput[] | WorkspaceMemberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutMemberInput | WorkspaceMemberCreateOrConnectWithoutMemberInput[]
    createMany?: WorkspaceMemberCreateManyMemberInputEnvelope
    connect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type InventoryMovementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InventoryMovementCreateWithoutUserInput, InventoryMovementUncheckedCreateWithoutUserInput> | InventoryMovementCreateWithoutUserInput[] | InventoryMovementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutUserInput | InventoryMovementCreateOrConnectWithoutUserInput[]
    createMany?: InventoryMovementCreateManyUserInputEnvelope
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumGlobalUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.GlobalUserRole
  }

  export type EnumGlobalUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.GlobalUserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type WorkspaceUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput> | WorkspaceCreateWithoutOwnerInput[] | WorkspaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutOwnerInput | WorkspaceCreateOrConnectWithoutOwnerInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutOwnerInput | WorkspaceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: WorkspaceCreateManyOwnerInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutOwnerInput | WorkspaceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutOwnerInput | WorkspaceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type WorkspaceMemberUpdateManyWithoutMemberNestedInput = {
    create?: XOR<WorkspaceMemberCreateWithoutMemberInput, WorkspaceMemberUncheckedCreateWithoutMemberInput> | WorkspaceMemberCreateWithoutMemberInput[] | WorkspaceMemberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutMemberInput | WorkspaceMemberCreateOrConnectWithoutMemberInput[]
    upsert?: WorkspaceMemberUpsertWithWhereUniqueWithoutMemberInput | WorkspaceMemberUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: WorkspaceMemberCreateManyMemberInputEnvelope
    set?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    disconnect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    delete?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    connect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    update?: WorkspaceMemberUpdateWithWhereUniqueWithoutMemberInput | WorkspaceMemberUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: WorkspaceMemberUpdateManyWithWhereWithoutMemberInput | WorkspaceMemberUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: WorkspaceMemberScalarWhereInput | WorkspaceMemberScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type InventoryMovementUpdateManyWithoutUserNestedInput = {
    create?: XOR<InventoryMovementCreateWithoutUserInput, InventoryMovementUncheckedCreateWithoutUserInput> | InventoryMovementCreateWithoutUserInput[] | InventoryMovementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutUserInput | InventoryMovementCreateOrConnectWithoutUserInput[]
    upsert?: InventoryMovementUpsertWithWhereUniqueWithoutUserInput | InventoryMovementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InventoryMovementCreateManyUserInputEnvelope
    set?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    disconnect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    delete?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    update?: InventoryMovementUpdateWithWhereUniqueWithoutUserInput | InventoryMovementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InventoryMovementUpdateManyWithWhereWithoutUserInput | InventoryMovementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
  }

  export type WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput> | WorkspaceCreateWithoutOwnerInput[] | WorkspaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutOwnerInput | WorkspaceCreateOrConnectWithoutOwnerInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutOwnerInput | WorkspaceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: WorkspaceCreateManyOwnerInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutOwnerInput | WorkspaceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutOwnerInput | WorkspaceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type WorkspaceMemberUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<WorkspaceMemberCreateWithoutMemberInput, WorkspaceMemberUncheckedCreateWithoutMemberInput> | WorkspaceMemberCreateWithoutMemberInput[] | WorkspaceMemberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutMemberInput | WorkspaceMemberCreateOrConnectWithoutMemberInput[]
    upsert?: WorkspaceMemberUpsertWithWhereUniqueWithoutMemberInput | WorkspaceMemberUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: WorkspaceMemberCreateManyMemberInputEnvelope
    set?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    disconnect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    delete?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    connect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    update?: WorkspaceMemberUpdateWithWhereUniqueWithoutMemberInput | WorkspaceMemberUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: WorkspaceMemberUpdateManyWithWhereWithoutMemberInput | WorkspaceMemberUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: WorkspaceMemberScalarWhereInput | WorkspaceMemberScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type InventoryMovementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InventoryMovementCreateWithoutUserInput, InventoryMovementUncheckedCreateWithoutUserInput> | InventoryMovementCreateWithoutUserInput[] | InventoryMovementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutUserInput | InventoryMovementCreateOrConnectWithoutUserInput[]
    upsert?: InventoryMovementUpsertWithWhereUniqueWithoutUserInput | InventoryMovementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InventoryMovementCreateManyUserInputEnvelope
    set?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    disconnect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    delete?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    update?: InventoryMovementUpdateWithWhereUniqueWithoutUserInput | InventoryMovementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InventoryMovementUpdateManyWithWhereWithoutUserInput | InventoryMovementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<PlanCreateWithoutWorkspacesInput, PlanUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: PlanCreateOrConnectWithoutWorkspacesInput
    connect?: PlanWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ProductCreateWithoutWorkspaceInput, ProductUncheckedCreateWithoutWorkspaceInput> | ProductCreateWithoutWorkspaceInput[] | ProductUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutWorkspaceInput | ProductCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ProductCreateManyWorkspaceInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type WorkspaceMemberCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<WorkspaceMemberCreateWithoutWorkspaceInput, WorkspaceMemberUncheckedCreateWithoutWorkspaceInput> | WorkspaceMemberCreateWithoutWorkspaceInput[] | WorkspaceMemberUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutWorkspaceInput | WorkspaceMemberCreateOrConnectWithoutWorkspaceInput[]
    createMany?: WorkspaceMemberCreateManyWorkspaceInputEnvelope
    connect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
  }

  export type InventoryMovementCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<InventoryMovementCreateWithoutWorkspaceInput, InventoryMovementUncheckedCreateWithoutWorkspaceInput> | InventoryMovementCreateWithoutWorkspaceInput[] | InventoryMovementUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutWorkspaceInput | InventoryMovementCreateOrConnectWithoutWorkspaceInput[]
    createMany?: InventoryMovementCreateManyWorkspaceInputEnvelope
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ProductCreateWithoutWorkspaceInput, ProductUncheckedCreateWithoutWorkspaceInput> | ProductCreateWithoutWorkspaceInput[] | ProductUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutWorkspaceInput | ProductCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ProductCreateManyWorkspaceInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<WorkspaceMemberCreateWithoutWorkspaceInput, WorkspaceMemberUncheckedCreateWithoutWorkspaceInput> | WorkspaceMemberCreateWithoutWorkspaceInput[] | WorkspaceMemberUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutWorkspaceInput | WorkspaceMemberCreateOrConnectWithoutWorkspaceInput[]
    createMany?: WorkspaceMemberCreateManyWorkspaceInputEnvelope
    connect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
  }

  export type InventoryMovementUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<InventoryMovementCreateWithoutWorkspaceInput, InventoryMovementUncheckedCreateWithoutWorkspaceInput> | InventoryMovementCreateWithoutWorkspaceInput[] | InventoryMovementUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutWorkspaceInput | InventoryMovementCreateOrConnectWithoutWorkspaceInput[]
    createMany?: InventoryMovementCreateManyWorkspaceInputEnvelope
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
  }

  export type EnumWorkspaceStatusFieldUpdateOperationsInput = {
    set?: $Enums.WorkspaceStatus
  }

  export type UserUpdateOneRequiredWithoutWorkspacesNestedInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    upsert?: UserUpsertWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkspacesInput, UserUpdateWithoutWorkspacesInput>, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type PlanUpdateOneRequiredWithoutWorkspacesNestedInput = {
    create?: XOR<PlanCreateWithoutWorkspacesInput, PlanUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: PlanCreateOrConnectWithoutWorkspacesInput
    upsert?: PlanUpsertWithoutWorkspacesInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutWorkspacesInput, PlanUpdateWithoutWorkspacesInput>, PlanUncheckedUpdateWithoutWorkspacesInput>
  }

  export type ProductUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ProductCreateWithoutWorkspaceInput, ProductUncheckedCreateWithoutWorkspaceInput> | ProductCreateWithoutWorkspaceInput[] | ProductUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutWorkspaceInput | ProductCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutWorkspaceInput | ProductUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ProductCreateManyWorkspaceInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutWorkspaceInput | ProductUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutWorkspaceInput | ProductUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<WorkspaceMemberCreateWithoutWorkspaceInput, WorkspaceMemberUncheckedCreateWithoutWorkspaceInput> | WorkspaceMemberCreateWithoutWorkspaceInput[] | WorkspaceMemberUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutWorkspaceInput | WorkspaceMemberCreateOrConnectWithoutWorkspaceInput[]
    upsert?: WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput | WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: WorkspaceMemberCreateManyWorkspaceInputEnvelope
    set?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    disconnect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    delete?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    connect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    update?: WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput | WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput | WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: WorkspaceMemberScalarWhereInput | WorkspaceMemberScalarWhereInput[]
  }

  export type InventoryMovementUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<InventoryMovementCreateWithoutWorkspaceInput, InventoryMovementUncheckedCreateWithoutWorkspaceInput> | InventoryMovementCreateWithoutWorkspaceInput[] | InventoryMovementUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutWorkspaceInput | InventoryMovementCreateOrConnectWithoutWorkspaceInput[]
    upsert?: InventoryMovementUpsertWithWhereUniqueWithoutWorkspaceInput | InventoryMovementUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: InventoryMovementCreateManyWorkspaceInputEnvelope
    set?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    disconnect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    delete?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    update?: InventoryMovementUpdateWithWhereUniqueWithoutWorkspaceInput | InventoryMovementUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: InventoryMovementUpdateManyWithWhereWithoutWorkspaceInput | InventoryMovementUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ProductCreateWithoutWorkspaceInput, ProductUncheckedCreateWithoutWorkspaceInput> | ProductCreateWithoutWorkspaceInput[] | ProductUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutWorkspaceInput | ProductCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutWorkspaceInput | ProductUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ProductCreateManyWorkspaceInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutWorkspaceInput | ProductUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutWorkspaceInput | ProductUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<WorkspaceMemberCreateWithoutWorkspaceInput, WorkspaceMemberUncheckedCreateWithoutWorkspaceInput> | WorkspaceMemberCreateWithoutWorkspaceInput[] | WorkspaceMemberUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutWorkspaceInput | WorkspaceMemberCreateOrConnectWithoutWorkspaceInput[]
    upsert?: WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput | WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: WorkspaceMemberCreateManyWorkspaceInputEnvelope
    set?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    disconnect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    delete?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    connect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    update?: WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput | WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput | WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: WorkspaceMemberScalarWhereInput | WorkspaceMemberScalarWhereInput[]
  }

  export type InventoryMovementUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<InventoryMovementCreateWithoutWorkspaceInput, InventoryMovementUncheckedCreateWithoutWorkspaceInput> | InventoryMovementCreateWithoutWorkspaceInput[] | InventoryMovementUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutWorkspaceInput | InventoryMovementCreateOrConnectWithoutWorkspaceInput[]
    upsert?: InventoryMovementUpsertWithWhereUniqueWithoutWorkspaceInput | InventoryMovementUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: InventoryMovementCreateManyWorkspaceInputEnvelope
    set?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    disconnect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    delete?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    update?: InventoryMovementUpdateWithWhereUniqueWithoutWorkspaceInput | InventoryMovementUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: InventoryMovementUpdateManyWithWhereWithoutWorkspaceInput | InventoryMovementUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMemberOfInput = {
    create?: XOR<UserCreateWithoutMemberOfInput, UserUncheckedCreateWithoutMemberOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemberOfInput
    connect?: UserWhereUniqueInput
  }

  export type WorkspaceCreateNestedOneWithoutMemberInput = {
    create?: XOR<WorkspaceCreateWithoutMemberInput, WorkspaceUncheckedCreateWithoutMemberInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutMemberInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type EnumUserWorkspaceRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserWorkspaceRole
  }

  export type UserUpdateOneRequiredWithoutMemberOfNestedInput = {
    create?: XOR<UserCreateWithoutMemberOfInput, UserUncheckedCreateWithoutMemberOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemberOfInput
    upsert?: UserUpsertWithoutMemberOfInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMemberOfInput, UserUpdateWithoutMemberOfInput>, UserUncheckedUpdateWithoutMemberOfInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutMemberNestedInput = {
    create?: XOR<WorkspaceCreateWithoutMemberInput, WorkspaceUncheckedCreateWithoutMemberInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutMemberInput
    upsert?: WorkspaceUpsertWithoutMemberInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutMemberInput, WorkspaceUpdateWithoutMemberInput>, WorkspaceUncheckedUpdateWithoutMemberInput>
  }

  export type WorkspaceCreateNestedOneWithoutProductsInput = {
    create?: XOR<WorkspaceCreateWithoutProductsInput, WorkspaceUncheckedCreateWithoutProductsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutProductsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProductsRegistedInput = {
    create?: XOR<UserCreateWithoutProductsRegistedInput, UserUncheckedCreateWithoutProductsRegistedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsRegistedInput
    connect?: UserWhereUniqueInput
  }

  export type InventoryMovementCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput> | InventoryMovementCreateWithoutProductInput[] | InventoryMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutProductInput | InventoryMovementCreateOrConnectWithoutProductInput[]
    createMany?: InventoryMovementCreateManyProductInputEnvelope
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
  }

  export type InventoryMovementUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput> | InventoryMovementCreateWithoutProductInput[] | InventoryMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutProductInput | InventoryMovementCreateOrConnectWithoutProductInput[]
    createMany?: InventoryMovementCreateManyProductInputEnvelope
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus
  }

  export type WorkspaceUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutProductsInput, WorkspaceUncheckedCreateWithoutProductsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutProductsInput
    upsert?: WorkspaceUpsertWithoutProductsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutProductsInput, WorkspaceUpdateWithoutProductsInput>, WorkspaceUncheckedUpdateWithoutProductsInput>
  }

  export type UserUpdateOneRequiredWithoutProductsRegistedNestedInput = {
    create?: XOR<UserCreateWithoutProductsRegistedInput, UserUncheckedCreateWithoutProductsRegistedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsRegistedInput
    upsert?: UserUpsertWithoutProductsRegistedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductsRegistedInput, UserUpdateWithoutProductsRegistedInput>, UserUncheckedUpdateWithoutProductsRegistedInput>
  }

  export type InventoryMovementUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput> | InventoryMovementCreateWithoutProductInput[] | InventoryMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutProductInput | InventoryMovementCreateOrConnectWithoutProductInput[]
    upsert?: InventoryMovementUpsertWithWhereUniqueWithoutProductInput | InventoryMovementUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryMovementCreateManyProductInputEnvelope
    set?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    disconnect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    delete?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    update?: InventoryMovementUpdateWithWhereUniqueWithoutProductInput | InventoryMovementUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryMovementUpdateManyWithWhereWithoutProductInput | InventoryMovementUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
  }

  export type InventoryMovementUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput> | InventoryMovementCreateWithoutProductInput[] | InventoryMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutProductInput | InventoryMovementCreateOrConnectWithoutProductInput[]
    upsert?: InventoryMovementUpsertWithWhereUniqueWithoutProductInput | InventoryMovementUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryMovementCreateManyProductInputEnvelope
    set?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    disconnect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    delete?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    update?: InventoryMovementUpdateWithWhereUniqueWithoutProductInput | InventoryMovementUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryMovementUpdateManyWithWhereWithoutProductInput | InventoryMovementUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInventoryMovimentsInput = {
    create?: XOR<UserCreateWithoutInventoryMovimentsInput, UserUncheckedCreateWithoutInventoryMovimentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryMovimentsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkspaceCreateNestedOneWithoutInventoryMovimentsInput = {
    create?: XOR<WorkspaceCreateWithoutInventoryMovimentsInput, WorkspaceUncheckedCreateWithoutInventoryMovimentsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutInventoryMovimentsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutInventoryMovementsInput = {
    create?: XOR<ProductCreateWithoutInventoryMovementsInput, ProductUncheckedCreateWithoutInventoryMovementsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryMovementsInput
    connect?: ProductWhereUniqueInput
  }

  export type EnumInventoryMovementTypeFieldUpdateOperationsInput = {
    set?: $Enums.InventoryMovementType
  }

  export type NullableEnumInventoryMovementReasonFieldUpdateOperationsInput = {
    set?: $Enums.InventoryMovementReason | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutInventoryMovimentsNestedInput = {
    create?: XOR<UserCreateWithoutInventoryMovimentsInput, UserUncheckedCreateWithoutInventoryMovimentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryMovimentsInput
    upsert?: UserUpsertWithoutInventoryMovimentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInventoryMovimentsInput, UserUpdateWithoutInventoryMovimentsInput>, UserUncheckedUpdateWithoutInventoryMovimentsInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutInventoryMovimentsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutInventoryMovimentsInput, WorkspaceUncheckedCreateWithoutInventoryMovimentsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutInventoryMovimentsInput
    upsert?: WorkspaceUpsertWithoutInventoryMovimentsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutInventoryMovimentsInput, WorkspaceUpdateWithoutInventoryMovimentsInput>, WorkspaceUncheckedUpdateWithoutInventoryMovimentsInput>
  }

  export type ProductUpdateOneRequiredWithoutInventoryMovementsNestedInput = {
    create?: XOR<ProductCreateWithoutInventoryMovementsInput, ProductUncheckedCreateWithoutInventoryMovementsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryMovementsInput
    upsert?: ProductUpsertWithoutInventoryMovementsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInventoryMovementsInput, ProductUpdateWithoutInventoryMovementsInput>, ProductUncheckedUpdateWithoutInventoryMovementsInput>
  }

  export type WorkspaceCreateNestedManyWithoutPlanInput = {
    create?: XOR<WorkspaceCreateWithoutPlanInput, WorkspaceUncheckedCreateWithoutPlanInput> | WorkspaceCreateWithoutPlanInput[] | WorkspaceUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutPlanInput | WorkspaceCreateOrConnectWithoutPlanInput[]
    createMany?: WorkspaceCreateManyPlanInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type WorkspaceUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<WorkspaceCreateWithoutPlanInput, WorkspaceUncheckedCreateWithoutPlanInput> | WorkspaceCreateWithoutPlanInput[] | WorkspaceUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutPlanInput | WorkspaceCreateOrConnectWithoutPlanInput[]
    createMany?: WorkspaceCreateManyPlanInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type EnumPlanStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlanStatus
  }

  export type WorkspaceUpdateManyWithoutPlanNestedInput = {
    create?: XOR<WorkspaceCreateWithoutPlanInput, WorkspaceUncheckedCreateWithoutPlanInput> | WorkspaceCreateWithoutPlanInput[] | WorkspaceUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutPlanInput | WorkspaceCreateOrConnectWithoutPlanInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutPlanInput | WorkspaceUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: WorkspaceCreateManyPlanInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutPlanInput | WorkspaceUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutPlanInput | WorkspaceUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type WorkspaceUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<WorkspaceCreateWithoutPlanInput, WorkspaceUncheckedCreateWithoutPlanInput> | WorkspaceCreateWithoutPlanInput[] | WorkspaceUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutPlanInput | WorkspaceCreateOrConnectWithoutPlanInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutPlanInput | WorkspaceUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: WorkspaceCreateManyPlanInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutPlanInput | WorkspaceUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutPlanInput | WorkspaceUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
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

  export type NestedEnumGlobalUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalUserRole | EnumGlobalUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GlobalUserRole[] | ListEnumGlobalUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GlobalUserRole[] | ListEnumGlobalUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGlobalUserRoleFilter<$PrismaModel> | $Enums.GlobalUserRole
  }

  export type NestedEnumGlobalUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalUserStatus | EnumGlobalUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GlobalUserStatus[] | ListEnumGlobalUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GlobalUserStatus[] | ListEnumGlobalUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGlobalUserStatusFilter<$PrismaModel> | $Enums.GlobalUserStatus
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumGlobalUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalUserRole | EnumGlobalUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GlobalUserRole[] | ListEnumGlobalUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GlobalUserRole[] | ListEnumGlobalUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGlobalUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.GlobalUserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGlobalUserRoleFilter<$PrismaModel>
    _max?: NestedEnumGlobalUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumGlobalUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalUserStatus | EnumGlobalUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GlobalUserStatus[] | ListEnumGlobalUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GlobalUserStatus[] | ListEnumGlobalUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGlobalUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.GlobalUserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGlobalUserStatusFilter<$PrismaModel>
    _max?: NestedEnumGlobalUserStatusFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumWorkspaceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkspaceStatus | EnumWorkspaceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkspaceStatus[] | ListEnumWorkspaceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkspaceStatus[] | ListEnumWorkspaceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkspaceStatusFilter<$PrismaModel> | $Enums.WorkspaceStatus
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

  export type NestedEnumWorkspaceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkspaceStatus | EnumWorkspaceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkspaceStatus[] | ListEnumWorkspaceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkspaceStatus[] | ListEnumWorkspaceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkspaceStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkspaceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkspaceStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkspaceStatusFilter<$PrismaModel>
  }

  export type NestedEnumUserWorkspaceRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserWorkspaceRole | EnumUserWorkspaceRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserWorkspaceRole[] | ListEnumUserWorkspaceRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserWorkspaceRole[] | ListEnumUserWorkspaceRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserWorkspaceRoleFilter<$PrismaModel> | $Enums.UserWorkspaceRole
  }

  export type NestedEnumUserWorkspaceRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserWorkspaceRole | EnumUserWorkspaceRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserWorkspaceRole[] | ListEnumUserWorkspaceRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserWorkspaceRole[] | ListEnumUserWorkspaceRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserWorkspaceRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserWorkspaceRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserWorkspaceRoleFilter<$PrismaModel>
    _max?: NestedEnumUserWorkspaceRoleFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type NestedEnumInventoryMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryMovementType | EnumInventoryMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryMovementType[] | ListEnumInventoryMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryMovementType[] | ListEnumInventoryMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryMovementTypeFilter<$PrismaModel> | $Enums.InventoryMovementType
  }

  export type NestedEnumInventoryMovementReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryMovementReason | EnumInventoryMovementReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.InventoryMovementReason[] | ListEnumInventoryMovementReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InventoryMovementReason[] | ListEnumInventoryMovementReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInventoryMovementReasonNullableFilter<$PrismaModel> | $Enums.InventoryMovementReason | null
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

  export type NestedEnumInventoryMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryMovementType | EnumInventoryMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryMovementType[] | ListEnumInventoryMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryMovementType[] | ListEnumInventoryMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.InventoryMovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumInventoryMovementTypeFilter<$PrismaModel>
  }

  export type NestedEnumInventoryMovementReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryMovementReason | EnumInventoryMovementReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.InventoryMovementReason[] | ListEnumInventoryMovementReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InventoryMovementReason[] | ListEnumInventoryMovementReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInventoryMovementReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.InventoryMovementReason | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumInventoryMovementReasonNullableFilter<$PrismaModel>
    _max?: NestedEnumInventoryMovementReasonNullableFilter<$PrismaModel>
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

  export type NestedEnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type WorkspaceCreateWithoutOwnerInput = {
    id?: string
    name: string
    slug: string
    statsus?: $Enums.WorkspaceStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    plan: PlanCreateNestedOneWithoutWorkspacesInput
    products?: ProductCreateNestedManyWithoutWorkspaceInput
    member?: WorkspaceMemberCreateNestedManyWithoutWorkspaceInput
    inventoryMoviments?: InventoryMovementCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    slug: string
    planId: number
    statsus?: $Enums.WorkspaceStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    products?: ProductUncheckedCreateNestedManyWithoutWorkspaceInput
    member?: WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput
    inventoryMoviments?: InventoryMovementUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutOwnerInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput>
  }

  export type WorkspaceCreateManyOwnerInputEnvelope = {
    data: WorkspaceCreateManyOwnerInput | WorkspaceCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceMemberCreateWithoutMemberInput = {
    role?: $Enums.UserWorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
    workspace: WorkspaceCreateNestedOneWithoutMemberInput
  }

  export type WorkspaceMemberUncheckedCreateWithoutMemberInput = {
    id?: number
    workspaceId: string
    role?: $Enums.UserWorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
  }

  export type WorkspaceMemberCreateOrConnectWithoutMemberInput = {
    where: WorkspaceMemberWhereUniqueInput
    create: XOR<WorkspaceMemberCreateWithoutMemberInput, WorkspaceMemberUncheckedCreateWithoutMemberInput>
  }

  export type WorkspaceMemberCreateManyMemberInputEnvelope = {
    data: WorkspaceMemberCreateManyMemberInput | WorkspaceMemberCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutUserInput = {
    id?: string
    barcode: string
    name: string
    Purchasedprice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    minQuantity: number
    slug: string
    status?: $Enums.ProductStatus
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    workspace: WorkspaceCreateNestedOneWithoutProductsInput
    inventoryMovements?: InventoryMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserInput = {
    id?: string
    barcode: string
    name: string
    Purchasedprice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    minQuantity: number
    slug: string
    workspaceId: string
    status?: $Enums.ProductStatus
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    inventoryMovements?: InventoryMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductCreateManyUserInputEnvelope = {
    data: ProductCreateManyUserInput | ProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InventoryMovementCreateWithoutUserInput = {
    id?: string
    type: $Enums.InventoryMovementType
    reason?: $Enums.InventoryMovementReason | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    workspace: WorkspaceCreateNestedOneWithoutInventoryMovimentsInput
    product: ProductCreateNestedOneWithoutInventoryMovementsInput
  }

  export type InventoryMovementUncheckedCreateWithoutUserInput = {
    id?: string
    workspaceId: string
    productId: string
    type: $Enums.InventoryMovementType
    reason?: $Enums.InventoryMovementReason | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type InventoryMovementCreateOrConnectWithoutUserInput = {
    where: InventoryMovementWhereUniqueInput
    create: XOR<InventoryMovementCreateWithoutUserInput, InventoryMovementUncheckedCreateWithoutUserInput>
  }

  export type InventoryMovementCreateManyUserInputEnvelope = {
    data: InventoryMovementCreateManyUserInput | InventoryMovementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithWhereUniqueWithoutOwnerInput = {
    where: WorkspaceWhereUniqueInput
    update: XOR<WorkspaceUpdateWithoutOwnerInput, WorkspaceUncheckedUpdateWithoutOwnerInput>
    create: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput>
  }

  export type WorkspaceUpdateWithWhereUniqueWithoutOwnerInput = {
    where: WorkspaceWhereUniqueInput
    data: XOR<WorkspaceUpdateWithoutOwnerInput, WorkspaceUncheckedUpdateWithoutOwnerInput>
  }

  export type WorkspaceUpdateManyWithWhereWithoutOwnerInput = {
    where: WorkspaceScalarWhereInput
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyWithoutOwnerInput>
  }

  export type WorkspaceScalarWhereInput = {
    AND?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    OR?: WorkspaceScalarWhereInput[]
    NOT?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    slug?: StringFilter<"Workspace"> | string
    planId?: IntFilter<"Workspace"> | number
    ownerId?: StringFilter<"Workspace"> | string
    statsus?: EnumWorkspaceStatusFilter<"Workspace"> | $Enums.WorkspaceStatus
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
  }

  export type WorkspaceMemberUpsertWithWhereUniqueWithoutMemberInput = {
    where: WorkspaceMemberWhereUniqueInput
    update: XOR<WorkspaceMemberUpdateWithoutMemberInput, WorkspaceMemberUncheckedUpdateWithoutMemberInput>
    create: XOR<WorkspaceMemberCreateWithoutMemberInput, WorkspaceMemberUncheckedCreateWithoutMemberInput>
  }

  export type WorkspaceMemberUpdateWithWhereUniqueWithoutMemberInput = {
    where: WorkspaceMemberWhereUniqueInput
    data: XOR<WorkspaceMemberUpdateWithoutMemberInput, WorkspaceMemberUncheckedUpdateWithoutMemberInput>
  }

  export type WorkspaceMemberUpdateManyWithWhereWithoutMemberInput = {
    where: WorkspaceMemberScalarWhereInput
    data: XOR<WorkspaceMemberUpdateManyMutationInput, WorkspaceMemberUncheckedUpdateManyWithoutMemberInput>
  }

  export type WorkspaceMemberScalarWhereInput = {
    AND?: WorkspaceMemberScalarWhereInput | WorkspaceMemberScalarWhereInput[]
    OR?: WorkspaceMemberScalarWhereInput[]
    NOT?: WorkspaceMemberScalarWhereInput | WorkspaceMemberScalarWhereInput[]
    id?: IntFilter<"WorkspaceMember"> | number
    userId?: StringFilter<"WorkspaceMember"> | string
    workspaceId?: StringFilter<"WorkspaceMember"> | string
    role?: EnumUserWorkspaceRoleFilter<"WorkspaceMember"> | $Enums.UserWorkspaceRole
    createdAt?: DateTimeFilter<"WorkspaceMember"> | Date | string
    updatedAt?: DateTimeNullableFilter<"WorkspaceMember"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"WorkspaceMember"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"WorkspaceMember"> | Date | string | null
  }

  export type ProductUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    barcode?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    Purchasedprice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"Product"> | number
    minQuantity?: IntFilter<"Product"> | number
    slug?: StringFilter<"Product"> | string
    cadasterId?: StringFilter<"Product"> | string
    workspaceId?: StringFilter<"Product"> | string
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    unit?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
  }

  export type InventoryMovementUpsertWithWhereUniqueWithoutUserInput = {
    where: InventoryMovementWhereUniqueInput
    update: XOR<InventoryMovementUpdateWithoutUserInput, InventoryMovementUncheckedUpdateWithoutUserInput>
    create: XOR<InventoryMovementCreateWithoutUserInput, InventoryMovementUncheckedCreateWithoutUserInput>
  }

  export type InventoryMovementUpdateWithWhereUniqueWithoutUserInput = {
    where: InventoryMovementWhereUniqueInput
    data: XOR<InventoryMovementUpdateWithoutUserInput, InventoryMovementUncheckedUpdateWithoutUserInput>
  }

  export type InventoryMovementUpdateManyWithWhereWithoutUserInput = {
    where: InventoryMovementScalarWhereInput
    data: XOR<InventoryMovementUpdateManyMutationInput, InventoryMovementUncheckedUpdateManyWithoutUserInput>
  }

  export type InventoryMovementScalarWhereInput = {
    AND?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
    OR?: InventoryMovementScalarWhereInput[]
    NOT?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
    id?: StringFilter<"InventoryMovement"> | string
    workspaceId?: StringFilter<"InventoryMovement"> | string
    userId?: StringFilter<"InventoryMovement"> | string
    productId?: StringFilter<"InventoryMovement"> | string
    type?: EnumInventoryMovementTypeFilter<"InventoryMovement"> | $Enums.InventoryMovementType
    reason?: EnumInventoryMovementReasonNullableFilter<"InventoryMovement"> | $Enums.InventoryMovementReason | null
    note?: StringNullableFilter<"InventoryMovement"> | string | null
    createdAt?: DateTimeFilter<"InventoryMovement"> | Date | string
    updatedAt?: DateTimeNullableFilter<"InventoryMovement"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"InventoryMovement"> | Date | string | null
  }

  export type UserCreateWithoutWorkspacesInput = {
    id?: string
    name: string
    slug: string
    email: string
    password: string
    role?: $Enums.GlobalUserRole
    status?: $Enums.GlobalUserStatus
    birthdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    memberOf?: WorkspaceMemberCreateNestedManyWithoutMemberInput
    productsRegisted?: ProductCreateNestedManyWithoutUserInput
    inventoryMoviments?: InventoryMovementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    name: string
    slug: string
    email: string
    password: string
    role?: $Enums.GlobalUserRole
    status?: $Enums.GlobalUserStatus
    birthdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    memberOf?: WorkspaceMemberUncheckedCreateNestedManyWithoutMemberInput
    productsRegisted?: ProductUncheckedCreateNestedManyWithoutUserInput
    inventoryMoviments?: InventoryMovementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkspacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
  }

  export type PlanCreateWithoutWorkspacesInput = {
    name: string
    description: string
    color: string
    maxProducts: string
    maxMembers: string
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type PlanUncheckedCreateWithoutWorkspacesInput = {
    id?: number
    name: string
    description: string
    color: string
    maxProducts: string
    maxMembers: string
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type PlanCreateOrConnectWithoutWorkspacesInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutWorkspacesInput, PlanUncheckedCreateWithoutWorkspacesInput>
  }

  export type ProductCreateWithoutWorkspaceInput = {
    id?: string
    barcode: string
    name: string
    Purchasedprice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    minQuantity: number
    slug: string
    status?: $Enums.ProductStatus
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutProductsRegistedInput
    inventoryMovements?: InventoryMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    barcode: string
    name: string
    Purchasedprice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    minQuantity: number
    slug: string
    cadasterId: string
    status?: $Enums.ProductStatus
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    inventoryMovements?: InventoryMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutWorkspaceInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutWorkspaceInput, ProductUncheckedCreateWithoutWorkspaceInput>
  }

  export type ProductCreateManyWorkspaceInputEnvelope = {
    data: ProductCreateManyWorkspaceInput | ProductCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceMemberCreateWithoutWorkspaceInput = {
    role?: $Enums.UserWorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
    member: UserCreateNestedOneWithoutMemberOfInput
  }

  export type WorkspaceMemberUncheckedCreateWithoutWorkspaceInput = {
    id?: number
    userId: string
    role?: $Enums.UserWorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
  }

  export type WorkspaceMemberCreateOrConnectWithoutWorkspaceInput = {
    where: WorkspaceMemberWhereUniqueInput
    create: XOR<WorkspaceMemberCreateWithoutWorkspaceInput, WorkspaceMemberUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceMemberCreateManyWorkspaceInputEnvelope = {
    data: WorkspaceMemberCreateManyWorkspaceInput | WorkspaceMemberCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type InventoryMovementCreateWithoutWorkspaceInput = {
    id?: string
    type: $Enums.InventoryMovementType
    reason?: $Enums.InventoryMovementReason | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutInventoryMovimentsInput
    product: ProductCreateNestedOneWithoutInventoryMovementsInput
  }

  export type InventoryMovementUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    userId: string
    productId: string
    type: $Enums.InventoryMovementType
    reason?: $Enums.InventoryMovementReason | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type InventoryMovementCreateOrConnectWithoutWorkspaceInput = {
    where: InventoryMovementWhereUniqueInput
    create: XOR<InventoryMovementCreateWithoutWorkspaceInput, InventoryMovementUncheckedCreateWithoutWorkspaceInput>
  }

  export type InventoryMovementCreateManyWorkspaceInputEnvelope = {
    data: InventoryMovementCreateManyWorkspaceInput | InventoryMovementCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkspacesInput = {
    update: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkspacesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type UserUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalUserRoleFieldUpdateOperationsInput | $Enums.GlobalUserRole
    status?: EnumGlobalUserStatusFieldUpdateOperationsInput | $Enums.GlobalUserStatus
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memberOf?: WorkspaceMemberUpdateManyWithoutMemberNestedInput
    productsRegisted?: ProductUpdateManyWithoutUserNestedInput
    inventoryMoviments?: InventoryMovementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalUserRoleFieldUpdateOperationsInput | $Enums.GlobalUserRole
    status?: EnumGlobalUserStatusFieldUpdateOperationsInput | $Enums.GlobalUserStatus
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memberOf?: WorkspaceMemberUncheckedUpdateManyWithoutMemberNestedInput
    productsRegisted?: ProductUncheckedUpdateManyWithoutUserNestedInput
    inventoryMoviments?: InventoryMovementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlanUpsertWithoutWorkspacesInput = {
    update: XOR<PlanUpdateWithoutWorkspacesInput, PlanUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<PlanCreateWithoutWorkspacesInput, PlanUncheckedCreateWithoutWorkspacesInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutWorkspacesInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutWorkspacesInput, PlanUncheckedUpdateWithoutWorkspacesInput>
  }

  export type PlanUpdateWithoutWorkspacesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    maxProducts?: StringFieldUpdateOperationsInput | string
    maxMembers?: StringFieldUpdateOperationsInput | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlanUncheckedUpdateWithoutWorkspacesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    maxProducts?: StringFieldUpdateOperationsInput | string
    maxMembers?: StringFieldUpdateOperationsInput | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutWorkspaceInput, ProductUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<ProductCreateWithoutWorkspaceInput, ProductUncheckedCreateWithoutWorkspaceInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutWorkspaceInput, ProductUncheckedUpdateWithoutWorkspaceInput>
  }

  export type ProductUpdateManyWithWhereWithoutWorkspaceInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceMemberWhereUniqueInput
    update: XOR<WorkspaceMemberUpdateWithoutWorkspaceInput, WorkspaceMemberUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<WorkspaceMemberCreateWithoutWorkspaceInput, WorkspaceMemberUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceMemberWhereUniqueInput
    data: XOR<WorkspaceMemberUpdateWithoutWorkspaceInput, WorkspaceMemberUncheckedUpdateWithoutWorkspaceInput>
  }

  export type WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput = {
    where: WorkspaceMemberScalarWhereInput
    data: XOR<WorkspaceMemberUpdateManyMutationInput, WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type InventoryMovementUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: InventoryMovementWhereUniqueInput
    update: XOR<InventoryMovementUpdateWithoutWorkspaceInput, InventoryMovementUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<InventoryMovementCreateWithoutWorkspaceInput, InventoryMovementUncheckedCreateWithoutWorkspaceInput>
  }

  export type InventoryMovementUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: InventoryMovementWhereUniqueInput
    data: XOR<InventoryMovementUpdateWithoutWorkspaceInput, InventoryMovementUncheckedUpdateWithoutWorkspaceInput>
  }

  export type InventoryMovementUpdateManyWithWhereWithoutWorkspaceInput = {
    where: InventoryMovementScalarWhereInput
    data: XOR<InventoryMovementUpdateManyMutationInput, InventoryMovementUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type UserCreateWithoutMemberOfInput = {
    id?: string
    name: string
    slug: string
    email: string
    password: string
    role?: $Enums.GlobalUserRole
    status?: $Enums.GlobalUserStatus
    birthdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    workspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    productsRegisted?: ProductCreateNestedManyWithoutUserInput
    inventoryMoviments?: InventoryMovementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMemberOfInput = {
    id?: string
    name: string
    slug: string
    email: string
    password: string
    role?: $Enums.GlobalUserRole
    status?: $Enums.GlobalUserStatus
    birthdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    workspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    productsRegisted?: ProductUncheckedCreateNestedManyWithoutUserInput
    inventoryMoviments?: InventoryMovementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMemberOfInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMemberOfInput, UserUncheckedCreateWithoutMemberOfInput>
  }

  export type WorkspaceCreateWithoutMemberInput = {
    id?: string
    name: string
    slug: string
    statsus?: $Enums.WorkspaceStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    owner: UserCreateNestedOneWithoutWorkspacesInput
    plan: PlanCreateNestedOneWithoutWorkspacesInput
    products?: ProductCreateNestedManyWithoutWorkspaceInput
    inventoryMoviments?: InventoryMovementCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutMemberInput = {
    id?: string
    name: string
    slug: string
    planId: number
    ownerId: string
    statsus?: $Enums.WorkspaceStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    products?: ProductUncheckedCreateNestedManyWithoutWorkspaceInput
    inventoryMoviments?: InventoryMovementUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutMemberInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutMemberInput, WorkspaceUncheckedCreateWithoutMemberInput>
  }

  export type UserUpsertWithoutMemberOfInput = {
    update: XOR<UserUpdateWithoutMemberOfInput, UserUncheckedUpdateWithoutMemberOfInput>
    create: XOR<UserCreateWithoutMemberOfInput, UserUncheckedCreateWithoutMemberOfInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMemberOfInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMemberOfInput, UserUncheckedUpdateWithoutMemberOfInput>
  }

  export type UserUpdateWithoutMemberOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalUserRoleFieldUpdateOperationsInput | $Enums.GlobalUserRole
    status?: EnumGlobalUserStatusFieldUpdateOperationsInput | $Enums.GlobalUserStatus
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    productsRegisted?: ProductUpdateManyWithoutUserNestedInput
    inventoryMoviments?: InventoryMovementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMemberOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalUserRoleFieldUpdateOperationsInput | $Enums.GlobalUserRole
    status?: EnumGlobalUserStatusFieldUpdateOperationsInput | $Enums.GlobalUserStatus
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    productsRegisted?: ProductUncheckedUpdateManyWithoutUserNestedInput
    inventoryMoviments?: InventoryMovementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkspaceUpsertWithoutMemberInput = {
    update: XOR<WorkspaceUpdateWithoutMemberInput, WorkspaceUncheckedUpdateWithoutMemberInput>
    create: XOR<WorkspaceCreateWithoutMemberInput, WorkspaceUncheckedCreateWithoutMemberInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutMemberInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutMemberInput, WorkspaceUncheckedUpdateWithoutMemberInput>
  }

  export type WorkspaceUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    statsus?: EnumWorkspaceStatusFieldUpdateOperationsInput | $Enums.WorkspaceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    plan?: PlanUpdateOneRequiredWithoutWorkspacesNestedInput
    products?: ProductUpdateManyWithoutWorkspaceNestedInput
    inventoryMoviments?: InventoryMovementUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    statsus?: EnumWorkspaceStatusFieldUpdateOperationsInput | $Enums.WorkspaceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductUncheckedUpdateManyWithoutWorkspaceNestedInput
    inventoryMoviments?: InventoryMovementUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    statsus?: $Enums.WorkspaceStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    owner: UserCreateNestedOneWithoutWorkspacesInput
    plan: PlanCreateNestedOneWithoutWorkspacesInput
    member?: WorkspaceMemberCreateNestedManyWithoutWorkspaceInput
    inventoryMoviments?: InventoryMovementCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    planId: number
    ownerId: string
    statsus?: $Enums.WorkspaceStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    member?: WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput
    inventoryMoviments?: InventoryMovementUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutProductsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutProductsInput, WorkspaceUncheckedCreateWithoutProductsInput>
  }

  export type UserCreateWithoutProductsRegistedInput = {
    id?: string
    name: string
    slug: string
    email: string
    password: string
    role?: $Enums.GlobalUserRole
    status?: $Enums.GlobalUserStatus
    birthdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    workspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    memberOf?: WorkspaceMemberCreateNestedManyWithoutMemberInput
    inventoryMoviments?: InventoryMovementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProductsRegistedInput = {
    id?: string
    name: string
    slug: string
    email: string
    password: string
    role?: $Enums.GlobalUserRole
    status?: $Enums.GlobalUserStatus
    birthdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    workspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    memberOf?: WorkspaceMemberUncheckedCreateNestedManyWithoutMemberInput
    inventoryMoviments?: InventoryMovementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProductsRegistedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductsRegistedInput, UserUncheckedCreateWithoutProductsRegistedInput>
  }

  export type InventoryMovementCreateWithoutProductInput = {
    id?: string
    type: $Enums.InventoryMovementType
    reason?: $Enums.InventoryMovementReason | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutInventoryMovimentsInput
    workspace: WorkspaceCreateNestedOneWithoutInventoryMovimentsInput
  }

  export type InventoryMovementUncheckedCreateWithoutProductInput = {
    id?: string
    workspaceId: string
    userId: string
    type: $Enums.InventoryMovementType
    reason?: $Enums.InventoryMovementReason | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type InventoryMovementCreateOrConnectWithoutProductInput = {
    where: InventoryMovementWhereUniqueInput
    create: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput>
  }

  export type InventoryMovementCreateManyProductInputEnvelope = {
    data: InventoryMovementCreateManyProductInput | InventoryMovementCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithoutProductsInput = {
    update: XOR<WorkspaceUpdateWithoutProductsInput, WorkspaceUncheckedUpdateWithoutProductsInput>
    create: XOR<WorkspaceCreateWithoutProductsInput, WorkspaceUncheckedCreateWithoutProductsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutProductsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutProductsInput, WorkspaceUncheckedUpdateWithoutProductsInput>
  }

  export type WorkspaceUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    statsus?: EnumWorkspaceStatusFieldUpdateOperationsInput | $Enums.WorkspaceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    plan?: PlanUpdateOneRequiredWithoutWorkspacesNestedInput
    member?: WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput
    inventoryMoviments?: InventoryMovementUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    statsus?: EnumWorkspaceStatusFieldUpdateOperationsInput | $Enums.WorkspaceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput
    inventoryMoviments?: InventoryMovementUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type UserUpsertWithoutProductsRegistedInput = {
    update: XOR<UserUpdateWithoutProductsRegistedInput, UserUncheckedUpdateWithoutProductsRegistedInput>
    create: XOR<UserCreateWithoutProductsRegistedInput, UserUncheckedCreateWithoutProductsRegistedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductsRegistedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductsRegistedInput, UserUncheckedUpdateWithoutProductsRegistedInput>
  }

  export type UserUpdateWithoutProductsRegistedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalUserRoleFieldUpdateOperationsInput | $Enums.GlobalUserRole
    status?: EnumGlobalUserStatusFieldUpdateOperationsInput | $Enums.GlobalUserStatus
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    memberOf?: WorkspaceMemberUpdateManyWithoutMemberNestedInput
    inventoryMoviments?: InventoryMovementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProductsRegistedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalUserRoleFieldUpdateOperationsInput | $Enums.GlobalUserRole
    status?: EnumGlobalUserStatusFieldUpdateOperationsInput | $Enums.GlobalUserStatus
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    memberOf?: WorkspaceMemberUncheckedUpdateManyWithoutMemberNestedInput
    inventoryMoviments?: InventoryMovementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InventoryMovementUpsertWithWhereUniqueWithoutProductInput = {
    where: InventoryMovementWhereUniqueInput
    update: XOR<InventoryMovementUpdateWithoutProductInput, InventoryMovementUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput>
  }

  export type InventoryMovementUpdateWithWhereUniqueWithoutProductInput = {
    where: InventoryMovementWhereUniqueInput
    data: XOR<InventoryMovementUpdateWithoutProductInput, InventoryMovementUncheckedUpdateWithoutProductInput>
  }

  export type InventoryMovementUpdateManyWithWhereWithoutProductInput = {
    where: InventoryMovementScalarWhereInput
    data: XOR<InventoryMovementUpdateManyMutationInput, InventoryMovementUncheckedUpdateManyWithoutProductInput>
  }

  export type UserCreateWithoutInventoryMovimentsInput = {
    id?: string
    name: string
    slug: string
    email: string
    password: string
    role?: $Enums.GlobalUserRole
    status?: $Enums.GlobalUserStatus
    birthdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    workspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    memberOf?: WorkspaceMemberCreateNestedManyWithoutMemberInput
    productsRegisted?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInventoryMovimentsInput = {
    id?: string
    name: string
    slug: string
    email: string
    password: string
    role?: $Enums.GlobalUserRole
    status?: $Enums.GlobalUserStatus
    birthdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    workspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    memberOf?: WorkspaceMemberUncheckedCreateNestedManyWithoutMemberInput
    productsRegisted?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInventoryMovimentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInventoryMovimentsInput, UserUncheckedCreateWithoutInventoryMovimentsInput>
  }

  export type WorkspaceCreateWithoutInventoryMovimentsInput = {
    id?: string
    name: string
    slug: string
    statsus?: $Enums.WorkspaceStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    owner: UserCreateNestedOneWithoutWorkspacesInput
    plan: PlanCreateNestedOneWithoutWorkspacesInput
    products?: ProductCreateNestedManyWithoutWorkspaceInput
    member?: WorkspaceMemberCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutInventoryMovimentsInput = {
    id?: string
    name: string
    slug: string
    planId: number
    ownerId: string
    statsus?: $Enums.WorkspaceStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    products?: ProductUncheckedCreateNestedManyWithoutWorkspaceInput
    member?: WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutInventoryMovimentsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutInventoryMovimentsInput, WorkspaceUncheckedCreateWithoutInventoryMovimentsInput>
  }

  export type ProductCreateWithoutInventoryMovementsInput = {
    id?: string
    barcode: string
    name: string
    Purchasedprice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    minQuantity: number
    slug: string
    status?: $Enums.ProductStatus
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    workspace: WorkspaceCreateNestedOneWithoutProductsInput
    user: UserCreateNestedOneWithoutProductsRegistedInput
  }

  export type ProductUncheckedCreateWithoutInventoryMovementsInput = {
    id?: string
    barcode: string
    name: string
    Purchasedprice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    minQuantity: number
    slug: string
    cadasterId: string
    workspaceId: string
    status?: $Enums.ProductStatus
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ProductCreateOrConnectWithoutInventoryMovementsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInventoryMovementsInput, ProductUncheckedCreateWithoutInventoryMovementsInput>
  }

  export type UserUpsertWithoutInventoryMovimentsInput = {
    update: XOR<UserUpdateWithoutInventoryMovimentsInput, UserUncheckedUpdateWithoutInventoryMovimentsInput>
    create: XOR<UserCreateWithoutInventoryMovimentsInput, UserUncheckedCreateWithoutInventoryMovimentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInventoryMovimentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInventoryMovimentsInput, UserUncheckedUpdateWithoutInventoryMovimentsInput>
  }

  export type UserUpdateWithoutInventoryMovimentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalUserRoleFieldUpdateOperationsInput | $Enums.GlobalUserRole
    status?: EnumGlobalUserStatusFieldUpdateOperationsInput | $Enums.GlobalUserStatus
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    memberOf?: WorkspaceMemberUpdateManyWithoutMemberNestedInput
    productsRegisted?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInventoryMovimentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalUserRoleFieldUpdateOperationsInput | $Enums.GlobalUserRole
    status?: EnumGlobalUserStatusFieldUpdateOperationsInput | $Enums.GlobalUserStatus
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    memberOf?: WorkspaceMemberUncheckedUpdateManyWithoutMemberNestedInput
    productsRegisted?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkspaceUpsertWithoutInventoryMovimentsInput = {
    update: XOR<WorkspaceUpdateWithoutInventoryMovimentsInput, WorkspaceUncheckedUpdateWithoutInventoryMovimentsInput>
    create: XOR<WorkspaceCreateWithoutInventoryMovimentsInput, WorkspaceUncheckedCreateWithoutInventoryMovimentsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutInventoryMovimentsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutInventoryMovimentsInput, WorkspaceUncheckedUpdateWithoutInventoryMovimentsInput>
  }

  export type WorkspaceUpdateWithoutInventoryMovimentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    statsus?: EnumWorkspaceStatusFieldUpdateOperationsInput | $Enums.WorkspaceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    plan?: PlanUpdateOneRequiredWithoutWorkspacesNestedInput
    products?: ProductUpdateManyWithoutWorkspaceNestedInput
    member?: WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutInventoryMovimentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    statsus?: EnumWorkspaceStatusFieldUpdateOperationsInput | $Enums.WorkspaceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductUncheckedUpdateManyWithoutWorkspaceNestedInput
    member?: WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type ProductUpsertWithoutInventoryMovementsInput = {
    update: XOR<ProductUpdateWithoutInventoryMovementsInput, ProductUncheckedUpdateWithoutInventoryMovementsInput>
    create: XOR<ProductCreateWithoutInventoryMovementsInput, ProductUncheckedCreateWithoutInventoryMovementsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInventoryMovementsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInventoryMovementsInput, ProductUncheckedUpdateWithoutInventoryMovementsInput>
  }

  export type ProductUpdateWithoutInventoryMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Purchasedprice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutProductsNestedInput
    user?: UserUpdateOneRequiredWithoutProductsRegistedNestedInput
  }

  export type ProductUncheckedUpdateWithoutInventoryMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Purchasedprice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    cadasterId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceCreateWithoutPlanInput = {
    id?: string
    name: string
    slug: string
    statsus?: $Enums.WorkspaceStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    owner: UserCreateNestedOneWithoutWorkspacesInput
    products?: ProductCreateNestedManyWithoutWorkspaceInput
    member?: WorkspaceMemberCreateNestedManyWithoutWorkspaceInput
    inventoryMoviments?: InventoryMovementCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutPlanInput = {
    id?: string
    name: string
    slug: string
    ownerId: string
    statsus?: $Enums.WorkspaceStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    products?: ProductUncheckedCreateNestedManyWithoutWorkspaceInput
    member?: WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput
    inventoryMoviments?: InventoryMovementUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutPlanInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutPlanInput, WorkspaceUncheckedCreateWithoutPlanInput>
  }

  export type WorkspaceCreateManyPlanInputEnvelope = {
    data: WorkspaceCreateManyPlanInput | WorkspaceCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithWhereUniqueWithoutPlanInput = {
    where: WorkspaceWhereUniqueInput
    update: XOR<WorkspaceUpdateWithoutPlanInput, WorkspaceUncheckedUpdateWithoutPlanInput>
    create: XOR<WorkspaceCreateWithoutPlanInput, WorkspaceUncheckedCreateWithoutPlanInput>
  }

  export type WorkspaceUpdateWithWhereUniqueWithoutPlanInput = {
    where: WorkspaceWhereUniqueInput
    data: XOR<WorkspaceUpdateWithoutPlanInput, WorkspaceUncheckedUpdateWithoutPlanInput>
  }

  export type WorkspaceUpdateManyWithWhereWithoutPlanInput = {
    where: WorkspaceScalarWhereInput
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyWithoutPlanInput>
  }

  export type WorkspaceCreateManyOwnerInput = {
    id?: string
    name: string
    slug: string
    planId: number
    statsus?: $Enums.WorkspaceStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type WorkspaceMemberCreateManyMemberInput = {
    id?: number
    workspaceId: string
    role?: $Enums.UserWorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
  }

  export type ProductCreateManyUserInput = {
    id?: string
    barcode: string
    name: string
    Purchasedprice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    minQuantity: number
    slug: string
    workspaceId: string
    status?: $Enums.ProductStatus
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type InventoryMovementCreateManyUserInput = {
    id?: string
    workspaceId: string
    productId: string
    type: $Enums.InventoryMovementType
    reason?: $Enums.InventoryMovementReason | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type WorkspaceUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    statsus?: EnumWorkspaceStatusFieldUpdateOperationsInput | $Enums.WorkspaceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: PlanUpdateOneRequiredWithoutWorkspacesNestedInput
    products?: ProductUpdateManyWithoutWorkspaceNestedInput
    member?: WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput
    inventoryMoviments?: InventoryMovementUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    statsus?: EnumWorkspaceStatusFieldUpdateOperationsInput | $Enums.WorkspaceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductUncheckedUpdateManyWithoutWorkspaceNestedInput
    member?: WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput
    inventoryMoviments?: InventoryMovementUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    statsus?: EnumWorkspaceStatusFieldUpdateOperationsInput | $Enums.WorkspaceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceMemberUpdateWithoutMemberInput = {
    role?: EnumUserWorkspaceRoleFieldUpdateOperationsInput | $Enums.UserWorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutMemberNestedInput
  }

  export type WorkspaceMemberUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserWorkspaceRoleFieldUpdateOperationsInput | $Enums.UserWorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceMemberUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserWorkspaceRoleFieldUpdateOperationsInput | $Enums.UserWorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Purchasedprice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutProductsNestedInput
    inventoryMovements?: InventoryMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Purchasedprice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventoryMovements?: InventoryMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Purchasedprice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryMovementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryMovementTypeFieldUpdateOperationsInput | $Enums.InventoryMovementType
    reason?: NullableEnumInventoryMovementReasonFieldUpdateOperationsInput | $Enums.InventoryMovementReason | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutInventoryMovimentsNestedInput
    product?: ProductUpdateOneRequiredWithoutInventoryMovementsNestedInput
  }

  export type InventoryMovementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryMovementTypeFieldUpdateOperationsInput | $Enums.InventoryMovementType
    reason?: NullableEnumInventoryMovementReasonFieldUpdateOperationsInput | $Enums.InventoryMovementReason | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryMovementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryMovementTypeFieldUpdateOperationsInput | $Enums.InventoryMovementType
    reason?: NullableEnumInventoryMovementReasonFieldUpdateOperationsInput | $Enums.InventoryMovementReason | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateManyWorkspaceInput = {
    id?: string
    barcode: string
    name: string
    Purchasedprice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    minQuantity: number
    slug: string
    cadasterId: string
    status?: $Enums.ProductStatus
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type WorkspaceMemberCreateManyWorkspaceInput = {
    id?: number
    userId: string
    role?: $Enums.UserWorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
  }

  export type InventoryMovementCreateManyWorkspaceInput = {
    id?: string
    userId: string
    productId: string
    type: $Enums.InventoryMovementType
    reason?: $Enums.InventoryMovementReason | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ProductUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Purchasedprice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProductsRegistedNestedInput
    inventoryMovements?: InventoryMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Purchasedprice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    cadasterId?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventoryMovements?: InventoryMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Purchasedprice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    cadasterId?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceMemberUpdateWithoutWorkspaceInput = {
    role?: EnumUserWorkspaceRoleFieldUpdateOperationsInput | $Enums.UserWorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: UserUpdateOneRequiredWithoutMemberOfNestedInput
  }

  export type WorkspaceMemberUncheckedUpdateWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserWorkspaceRoleFieldUpdateOperationsInput | $Enums.UserWorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserWorkspaceRoleFieldUpdateOperationsInput | $Enums.UserWorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryMovementUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryMovementTypeFieldUpdateOperationsInput | $Enums.InventoryMovementType
    reason?: NullableEnumInventoryMovementReasonFieldUpdateOperationsInput | $Enums.InventoryMovementReason | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutInventoryMovimentsNestedInput
    product?: ProductUpdateOneRequiredWithoutInventoryMovementsNestedInput
  }

  export type InventoryMovementUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryMovementTypeFieldUpdateOperationsInput | $Enums.InventoryMovementType
    reason?: NullableEnumInventoryMovementReasonFieldUpdateOperationsInput | $Enums.InventoryMovementReason | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryMovementUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryMovementTypeFieldUpdateOperationsInput | $Enums.InventoryMovementType
    reason?: NullableEnumInventoryMovementReasonFieldUpdateOperationsInput | $Enums.InventoryMovementReason | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryMovementCreateManyProductInput = {
    id?: string
    workspaceId: string
    userId: string
    type: $Enums.InventoryMovementType
    reason?: $Enums.InventoryMovementReason | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type InventoryMovementUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryMovementTypeFieldUpdateOperationsInput | $Enums.InventoryMovementType
    reason?: NullableEnumInventoryMovementReasonFieldUpdateOperationsInput | $Enums.InventoryMovementReason | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutInventoryMovimentsNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutInventoryMovimentsNestedInput
  }

  export type InventoryMovementUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryMovementTypeFieldUpdateOperationsInput | $Enums.InventoryMovementType
    reason?: NullableEnumInventoryMovementReasonFieldUpdateOperationsInput | $Enums.InventoryMovementReason | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryMovementUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryMovementTypeFieldUpdateOperationsInput | $Enums.InventoryMovementType
    reason?: NullableEnumInventoryMovementReasonFieldUpdateOperationsInput | $Enums.InventoryMovementReason | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceCreateManyPlanInput = {
    id?: string
    name: string
    slug: string
    ownerId: string
    statsus?: $Enums.WorkspaceStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type WorkspaceUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    statsus?: EnumWorkspaceStatusFieldUpdateOperationsInput | $Enums.WorkspaceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    products?: ProductUpdateManyWithoutWorkspaceNestedInput
    member?: WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput
    inventoryMoviments?: InventoryMovementUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    statsus?: EnumWorkspaceStatusFieldUpdateOperationsInput | $Enums.WorkspaceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductUncheckedUpdateManyWithoutWorkspaceNestedInput
    member?: WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput
    inventoryMoviments?: InventoryMovementUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    statsus?: EnumWorkspaceStatusFieldUpdateOperationsInput | $Enums.WorkspaceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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