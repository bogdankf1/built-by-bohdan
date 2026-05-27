import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../lib/slug.ts";

test("slugify lowercases", () => {
  assert.equal(slugify("Race"), "race");
});

test("slugify replaces single spaces with hyphens", () => {
  assert.equal(slugify("Race Grid"), "race-grid");
});

test("slugify collapses runs of whitespace into a single hyphen", () => {
  assert.equal(slugify("AI   Paddock"), "ai-paddock");
  assert.equal(slugify("Wealth\tVault"), "wealth-vault");
});

test("slugify is stable for the current apps catalog names", () => {
  const cases = [
    ["Race Grid", "race-grid"],
    ["Port Pulse", "port-pulse"],
    ["Bolsa", "bolsa"],
    ["AI Paddock", "ai-paddock"],
    ["Dash Dot", "dash-dot"],
    ["Wealth Vault", "wealth-vault"],
    ["Meal Craft", "meal-craft"],
    ["ML Playground", "ml-playground"],
  ];
  for (const [input, expected] of cases) {
    assert.equal(slugify(input), expected, `slugify(${JSON.stringify(input)})`);
  }
});
