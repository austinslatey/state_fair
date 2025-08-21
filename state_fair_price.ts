import {
  run,
  Cart,
  CartLine,
  FunctionResult,
} from "@shopify/shopify-function";

run((input: Cart): FunctionResult => {
  const lines = input.lines.map((line: CartLine) => {
    // Look for your metafield (namespace "custom", key "state_fair_price")
    const stateFairPrice = line.merchandise?.product?.metafield?.value;

    if (input.buyerIdentity?.customer?.id && stateFairPrice) {
      return {
        ...line,
        price: {
          amount: stateFairPrice,
          currencyCode: input.cost.totalAmount.currencyCode,
        },
      };
    }

    return line;
  });

  return { lines };
});
