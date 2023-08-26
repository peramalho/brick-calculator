"use client";
import Image from "next/image";
import { ContentWrapper } from "./components/PageWrapper/ContentWrapper";
import { useReducer } from "react";

type Tijolos = "tijolo10" | "tijolo11" | "tijolo15";

type State = {
  tijolo10: number;
  tijolo11: number;
  tijolo15: number;
};

type Action =
  | {
      type: "change";
      name: Tijolos;
      value: string;
    }
  | {
      type: "calculate-10";
    }
  | {
      type: "calculate-11";
    }
  | {
      type: "calculate-15";
    };

enum MaxQuantities {
  tijolo10 = 6000,
  tijolo11 = 5000,
  tijolo15 = 4000,
}

const maxQuantitiesMap: Record<Tijolos, number> = {
  tijolo10: MaxQuantities.tijolo10,
  tijolo11: MaxQuantities.tijolo11,
  tijolo15: MaxQuantities.tijolo15,
};

function reducer(state: State, action: Action) {
  if (action.type === "change") {
    let value =
      parseInt(action.value) > maxQuantitiesMap[action.name]
        ? maxQuantitiesMap[action.name]
        : parseInt(action.value);

    return { ...state, [action.name]: value };
  }
  if (action.type === "calculate-10") {
    return state;
  }
  if (action.type === "calculate-11") {
    return state;
  }
  if (action.type === "calculate-15") {
    return state;
  }
  throw Error("Unknown action.");
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, {
    tijolo10: 0,
    tijolo11: 0,
    tijolo15: 0,
  });

  return (
    <div className="flex min-h-screen flex-col p-4">
      <ContentWrapper>
        <header className="flex flex-col gap-6 items-center mt-10">
          <Image
            className=""
            src="/logo.jpeg"
            alt="Logo"
            width={160}
            height={160}
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
                Tijolo 10 (até {MaxQuantities.tijolo10} tijolos)
              </label>
              <input
                id="tijolo10"
                value={state.tijolo10}
                onChange={(e) =>
                  dispatch({
                    type: "change",
                    name: "tijolo10",
                    value: e.target.value,
                  })
                }
                onFocus={(e) => e.target.select()}
                type="number"
                min={0}
                max={6000}
                className="border p-3 rounded-lg w-full sm:w-auto"
              />
              <button
                onClick={() => dispatch({ type: "calculate-10" })}
                className="bg-blue-400 text-white px-6 py-3 rounded-lg sm:w-auto w-full hover:opacity-80 active:opacity-60"
              >
                Calcular
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label
                htmlFor="tijolo11"
                className="w-52 sm:self-center self-start"
              >
                Tijolo 11 (até {MaxQuantities.tijolo11} tijolos)
              </label>
              <input
                id="tijolo11"
                value={state.tijolo11}
                onChange={(e) =>
                  dispatch({
                    type: "change",
                    name: "tijolo11",
                    value: e.target.value,
                  })
                }
                onFocus={(e) => e.target.select()}
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
                Tijolo 15 (até {MaxQuantities.tijolo15} tijolos)
              </label>
              <input
                id="tijolo15"
                value={state.tijolo15}
                onChange={(e) =>
                  dispatch({
                    type: "change",
                    name: "tijolo15",
                    value: e.target.value,
                  })
                }
                onFocus={(e) => e.target.select()}
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
