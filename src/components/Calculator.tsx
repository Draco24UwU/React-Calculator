import { basicOperators, numbers } from "@/constants/CalculatorConstants";
import Button from "@/components/UI/Button";
import useCalculator from "@/hooks/useCalculator";

function Calculator() {
  const {
    ecuationValue,
    resolveEcuation,
    screenValue,
    advanceCalculatorMode,
    handleAddDecimal,
    handleAddNumber,
    handleAddOperator,
    handleDeleteLastChar,
    handleResetScreenValue,
    handleResolveEcuation,
    handleActiveAdvancedCalculator,
  } = useCalculator();

  return (
    <div
      id="Calculator-Container"
      className="border-4 bg-darkmode border-white/70 dark:border-white/70 rounded-3xl lg:w-[600px] md:w-[500px] w-full h-auto p-4"
    >
      <div id="Calculator-Screen">
        <div className="py-4 bg-darkmode h-[30vh] flex flex-col justify-end">
          <textarea
            value={screenValue}
            readOnly
            className={`text-end bg-transparent pr-4 w-full k0999whitespace-nowrap transition-all duration-200 border-none outline-none ${
              resolveEcuation
                ? "md:text-5xl text-3xl text-white/60"
                : "md:text-7xl text-5xl text-white"
            }`}
          />

          <input
            value={ecuationValue}
            type="text"
            className={`text-end bg-transparent pr-4 w-full overflow-x-auto whitespace-nowrap ease-in-out duration-200 border-none outline-none ${
              resolveEcuation
                ? "md:text-7xl text-5xl text-white"
                : "md:text-5xl text-3xl text-white/60"
            }`}
            readOnly
          />
        </div>

        <div
          id="Calculator-Panel"
          className={`w-full gap-x-2 gap-y-4 grid items-center ${
            advanceCalculatorMode
              ? "grid-cols-5 grid-rows-7"
              : "grid-cols-4 grid-rows-5"
          }`}
        >
          <Button
            text="AC"
            className="Calculator-Button-Generic"
            onClick={handleResetScreenValue}
          />
          <Button
            text="Del"
            className="Calculator-Button-Generic"
            onClick={handleDeleteLastChar}
          />
          {Object.values(basicOperators)
            .reverse()
            .map((valor) => (
              <Button
                key={valor}
                className="Calculator-Button-BasicOperator"
                onClick={() => {
                  handleAddOperator(valor);
                }}
                text={valor}
              />
            ))}

          <div
            id="Sub-grid"
            className="grid gap-x-2 gap-y-4 grid-rows-4 grid-cols-3 col-span-3 row-start-2 row-end-6 col-start-1 col-end-4"
          >
            {Object.values(numbers).map((valor) => {
              return (
                <>
                  {valor == 0 && (
                    <Button
                      text="Rev"
                      className="Calculator-Button-Especial"
                      onClick={handleActiveAdvancedCalculator}
                    />
                  )}
                  <Button
                    key={valor}
                    className="Calculator-Button-Generic"
                    onClick={() => {
                      handleAddNumber(valor.toString());
                    }}
                    text={valor.toString()}
                  />
                </>
              );
            })}
            <Button
              onClick={handleAddDecimal}
              text="."
              className="Calculator-Button-Generic"
            />
          </div>

          <Button
            text="="
            className="Calculator-Button-Especial row-span-2"
            onClick={handleResolveEcuation}
          />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
