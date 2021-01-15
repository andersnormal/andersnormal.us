import React from 'react'
import { useMachine } from '@xstate/react'
import { Machine, State, assign, Interpreter } from 'xstate'

export type GlobalContextState = State<GlobalContext, GlobalEvent, GlobalSchema>
export type GlobalContextDispatch = Interpreter<
  GlobalContext,
  GlobalSchema,
  GlobalEvent
>['send']

export const GlobalStateContext = React.createContext<GlobalContextState>(
  {} as any
)

export const GlobalDispatchContext = React.createContext<GlobalContextDispatch>(
  {} as any
)

interface GlobalSchema {
  states: {
    loggedIn: {}
    loggedOut: {}
  }
}

type GlobalEvent = { type: 'LOGIN' } | { type: 'LOGOUT' }

interface GlobalContext {
  userData: { username: string } | null
}

const globalMachine = Machine<GlobalContext, GlobalSchema, GlobalEvent>(
  {
    id: 'global',
    initial: 'loggedOut',
    context: {
      userData: null
    },
    states: {
      loggedIn: {
        on: {
          LOGOUT: {
            target: 'loggedOut',
            actions: 'clearUserData'
          }
        }
      },
      loggedOut: {
        on: {
          LOGIN: {
            target: 'loggedIn',
            actions: 'setUserData'
          }
        }
      }
    }
  },
  {
    actions: {
      clearUserData: assign({
        userData: (_ctx, _evt) => null
      }),
      setUserData: assign({
        userData: (_ctx, evt) => ({ username: 'test' })
      })
    }
  }
)

type GlobalContextProviderProps = { children?: React.ReactNode }

export const GlobalContextProvider = ({
  children
}: GlobalContextProviderProps): JSX.Element => {
  const [current, send] = useMachine(globalMachine)

  return (
    <GlobalStateContext.Provider value={current}>
      <GlobalDispatchContext.Provider value={send}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}
