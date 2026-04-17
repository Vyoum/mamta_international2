type SupabaseResult<T> = { data: T; error: { message: string } | null }

const NOT_CONFIGURED_MESSAGE =
  "Supabase is not configured yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment."

function createQueryBuilder(): any {
  let resultPromise: Promise<any> = Promise.resolve({ data: null, error: null })

  const builder: any = {
    select() {
      return builder
    },
    eq() {
      return builder
    },
    neq() {
      return builder
    },
    order() {
      return builder
    },
    limit() {
      return builder
    },
    single() {
      resultPromise = Promise.resolve({ data: null, error: null })
      return builder
    },
    insert() {
      resultPromise = Promise.resolve({
        data: null,
        error: { message: NOT_CONFIGURED_MESSAGE },
      })
      return builder
    },
    delete() {
      resultPromise = Promise.resolve({
        data: null,
        error: { message: NOT_CONFIGURED_MESSAGE },
      })
      return builder
    },
    then(onFulfilled: any, onRejected: any) {
      return resultPromise.then(onFulfilled, onRejected)
    },
    catch(onRejected: any) {
      return resultPromise.catch(onRejected)
    },
    finally(onFinally: any) {
      return resultPromise.finally(onFinally)
    },
  }

  return builder
}

export function createNullSupabaseClient() {
  return {
    auth: {
      async getUser(): Promise<SupabaseResult<{ user: null }>> {
        return { data: { user: null }, error: null }
      },
      async signInWithPassword(): Promise<SupabaseResult<null>> {
        return { data: null, error: { message: NOT_CONFIGURED_MESSAGE } }
      },
      async signInWithOAuth(): Promise<SupabaseResult<null>> {
        return { data: null, error: { message: NOT_CONFIGURED_MESSAGE } }
      },
      async signUp(): Promise<SupabaseResult<null>> {
        return { data: null, error: { message: NOT_CONFIGURED_MESSAGE } }
      },
      async exchangeCodeForSession(): Promise<SupabaseResult<null>> {
        return { data: null, error: { message: NOT_CONFIGURED_MESSAGE } }
      },
      async signOut(): Promise<SupabaseResult<null>> {
        return { data: null, error: null }
      },
    },
    from() {
      return createQueryBuilder()
    },
  } as any
}

