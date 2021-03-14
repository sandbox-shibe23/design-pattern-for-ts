import { printBanner } from "./PrintBanner";

/**
 * Adapterパターン
 * Printインターフェースに適合(Adapt)させるため、
 * BannerのメソッドをPrintBannerでラップして利用している
 */

// Client
function main (): void{
  printBanner.printStrong('Hello')
  printBanner.printWeak('Hello')
}

main()
