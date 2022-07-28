export const allowNumbersOnly = (numbers, maxLength) => {
    if (numbers !== undefined && numbers !== null) {
      const filteredNum = numbers.replace(/\D/g, "");
      if (typeof maxLength === "number") {
        if (filteredNum.toString().length <= maxLength) {
          return filteredNum;
        }
        return filteredNum.toString().substring(0, maxLength - 1);
      }
      return filteredNum;
    }
    return null;
  };
  