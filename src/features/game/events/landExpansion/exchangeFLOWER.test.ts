import Decimal from "decimal.js-light";
import { INITIAL_FARM } from "features/game/lib/constants";
import { exchangeFlower } from "./exchangeFLOWER";

describe("exchangeFlower", () => {
  const createdAt = Date.now();
  it("should throw if insufficient love charms", () => {
    expect(() =>
      exchangeFlower({
        state: { ...INITIAL_FARM, inventory: { "Love Charm": new Decimal(0) } },
        action: { type: "exchange.flower", amount: 50 },
        createdAt,
      }),
    ).toThrow("Insufficient Love Charms");
  });

  it("should throw if daily limit is reached", () => {
    const today = new Date(createdAt).toISOString().split("T")[0];
    expect(() =>
      exchangeFlower({
        state: {
          ...INITIAL_FARM,
          inventory: { "Love Charm": new Decimal(500) },
          flower: {
            history: {
              [today]: { loveCharmsSpent: 9501 },
            },
          },
        },
        action: { type: "exchange.flower", amount: 500 },
        createdAt,
      }),
    ).toThrow("Daily limit reached");
  });

  it("should exchange FLOWER", () => {
    const state = exchangeFlower({
      state: { ...INITIAL_FARM, inventory: { "Love Charm": new Decimal(500) } },
      action: { type: "exchange.flower", amount: 500 },
      createdAt,
    });
    expect(state.balance).toEqual(new Decimal(10));
  });
});
