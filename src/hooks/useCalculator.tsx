import { basicOperators, numbers } from "@/constants/CalculatorConstants";
import { useState, useEffect, useCallback } from "react";

function useCalculator() {
  const [screenValue, setscreenValue] = useState("0");
  const [ecuationValue, setecuationValue] = useState("0");
  const [lastValidEcuation, setlastValidEcuation] = useState(0);
  const [resolveEcuation, setresolveEcuation] = useState(false);
  const [advanceCalculatorMode, setadvanceCalculatorMode] = useState(false);

  const maxLength = 40;

  const handleAddNumber = useCallback(
    (operator: string) => {
      setscreenValue((prev) => {
        if (prev.length >= maxLength) {
          return prev;
        }
        // Verifica si el último carácter es un operador o un número diferente de 0.
        const lastChar = prev[prev.length - 1];
        const isLastCharOperator =
          Object.values(basicOperators).includes(lastChar);

        // Si el valor de screenValue está vacío, añade el nuevo número.
        if (prev === "0") {
          return operator; // Agrega el primer número directamente.
        }

        // Extraer el último número de la cadena 'prev'
        const lastNumberMatch = prev.match(/(\d+)(?!.*\d)/);
        const lastNumber = lastNumberMatch ? lastNumberMatch[0] : "";

        if (
          isLastCharOperator ||
          (lastNumber !== "0" && lastNumber.length > 0)
        ) {
          if (resolveEcuation) {
            return operator;
          }
          return prev + operator;
        }

        return prev;
      });
    },
    [resolveEcuation]
  );

  const handleAddOperator = useCallback(
    (operator: string) => {
      setscreenValue((prev) => {
        if (prev.length >= maxLength) {
          return prev;
        }
        // Verifica si el último carácter es un operador
        const lastChar = prev[prev.length - 1];
        const isLastCharOperator =
          Object.values(basicOperators).includes(lastChar);

        // Si el último carácter no es un operador, añade el nuevo operador.
        if (!isLastCharOperator && prev.length != 0 && prev != "0") {
          if (resolveEcuation) {
            return eval(prev) + operator;
          }
          return prev + operator;
        }
        return prev;
      });
    },
    [resolveEcuation]
  );

  const handleAddDecimal = () => {
    setscreenValue((prev) => {
      if (prev.length >= 40) {
        return prev;
      }
      // Verifica si el último carácter es un operador
      const lastChar = prev[prev.length - 1];
      const isLastCharOperator =
        Object.values(basicOperators).includes(lastChar);

      // Si el último carácter es un operador, no se permite añadir un punto decimal
      if (isLastCharOperator || prev === "0") {
        return prev;
      }

      // Verifica si ya hay un punto decimal en el último número
      const lastNumberMatch = prev.match(/(\d*\.?\d*)$/);
      const lastNumber = lastNumberMatch ? lastNumberMatch[0] : "";

      // Si el último número ya tiene un punto decimal, no se permite añadir otro
      if (lastNumber.includes(".")) {
        return prev;
      }

      // Añade un punto decimal al final de la expresión
      return prev + ".";
    });
  };

  const handleResetScreenValue = () => {
    setresolveEcuation(false);
    setscreenValue("0");
  };

  const handleDeleteLastChar = () => {
    setscreenValue((prev) => {
      if (prev.length > 1) {
        return prev.slice(0, -1);
      } else {
        return "0";
      }
    });
  };

  const handleResolveEcuation = () => {
    setresolveEcuation(true);
  };

  const handleActiveAdvancedCalculator = () => {
    setadvanceCalculatorMode(!advanceCalculatorMode);
  };

  useEffect(() => {
    try {
      // Evalúa la expresión en screenValue y actualiza ecuationValue.
      const result = eval(screenValue);
      setecuationValue(result);
      setlastValidEcuation(result);
    } catch (error) {
      // Maneja errores de evaluación
      setecuationValue(lastValidEcuation.toString());
    }
  }, [screenValue, lastValidEcuation]);

  useEffect(() => {
    setresolveEcuation(false);
  }, [screenValue]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key;

      if (Object.values(numbers).includes(parseInt(key))) {
        handleAddNumber(key);
      }

      if (Object.values(basicOperators).includes(key)) {
        handleAddOperator(key);
      }

      if (key === "Backspace") {
        handleDeleteLastChar();
      }

      if (key === "Escape") {
        handleResetScreenValue();
      }

      if (key === "Enter") {
        handleResolveEcuation();
      }

      if (key === ".") {
        handleAddDecimal();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [
    screenValue,
    lastValidEcuation,
    resolveEcuation,
    handleAddNumber,
    handleAddOperator,
  ]);

  return {
    screenValue,
    ecuationValue,
    resolveEcuation,
    advanceCalculatorMode,
    handleAddDecimal,
    handleAddNumber,
    handleAddOperator,
    handleDeleteLastChar,
    handleResetScreenValue,
    handleResolveEcuation,
    handleActiveAdvancedCalculator,
  };
}

export default useCalculator;
