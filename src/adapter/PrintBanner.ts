// Adapter
import type { Print } from './Print'
import { banner } from "./Banner";

export const printBanner: Print = {
  printWeak(value: string): void {
    banner.showWithParen(value)
  },

  printStrong(value: string): void {
    banner.showWithAster(value)
  }
}
