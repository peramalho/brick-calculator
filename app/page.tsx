import Image from "next/image";
import { ContentWrapper } from "./components/PageWrapper/ContentWrapper";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-4">
      <ContentWrapper>
        <header className="flex flex-col gap-6 items-center mt-10">
          <Image
            className=""
            src="/logo.jpeg"
            alt="Logo"
            width={120}
            height={120}
            priority
          />
          <h1 className="text-xl">Calculadora de Tijolos</h1>
        </header>
        <main className="mt-6 flex flex-col items-center gap-6">
          <h2>Quantos tijolos cabem em um caminhão?</h2>
          <button className="bg-red-400 text-white px-12 py-3 rounded-lg sm:w-auto w-full hover:opacity-80 active:opacity-60">
            Resetar
          </button>
          <div className="flex flex-col gap-8 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label
                htmlFor="tijolo10"
                className="w-52 sm:self-center self-start"
              >
                Tijolo 10 (até 6000 tijolos)
              </label>
              <input
                id="tijolo10"
                type="number"
                min={0}
                max={6000}
                className="border p-3 rounded-lg w-full sm:w-auto"
              />
              <button className="bg-blue-400 text-white px-6 py-3 rounded-lg sm:w-auto w-full hover:opacity-80 active:opacity-60">
                Calcular
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label
                htmlFor="tijolo11"
                className="w-52 sm:self-center self-start"
              >
                Tijolo 11 (até 5000 tijolos)
              </label>
              <input
                id="tijolo11"
                type="number"
                min={0}
                max={5000}
                className="border p-3 rounded-lg w-full sm:w-auto"
              />
              <button className="bg-blue-400 text-white px-6 py-3 rounded-lg sm:w-auto w-full hover:opacity-80 active:opacity-60">
                Calcular
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center w-full">
              <label
                htmlFor="tijolo15"
                className="w-52 sm:self-center self-start"
              >
                Tijolo 15 (até 4000 tijolos)
              </label>
              <input
                id="tijolo15"
                type="number"
                min={0}
                max={4000}
                className="border p-3 rounded-lg w-full sm:w-auto"
              />
              <button className="bg-blue-400 text-white px-6 py-3 rounded-lg sm:w-auto w-full hover:opacity-80 active:opacity-60">
                Calcular
              </button>
            </div>
          </div>
        </main>
      </ContentWrapper>
    </div>
  );
}
