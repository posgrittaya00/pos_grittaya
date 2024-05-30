import { defineStore } from 'pinia'

interface State {
    username: string
}

export const useIndexStore = defineStore('index', {
  state: (): State => ({
    username: '',
  }),
})