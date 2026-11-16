/**
 * The 100 campaign.
 *
 * EV_CHARGERS_LEFT is the only copy of the charger count.
 * Change it here when a charger is allocated. The offer line, the
 * "chargers left" counter and the small print all read this number.
 * It starts at 11.
 */
export const EV_CHARGERS_LEFT = 11;

/** Cards in the letterbox run. The hero and the card-number field both use this. */
export const CARD_COUNT = 100;

export const OFFER_ENDS = "11 December 2026";

export const FREE_MODULE = "9 kWh";

/** Earthed Energy dataset. Render the pixel from src/app/the100/layout.tsx only. */
export const META_PIXEL_ID = "2416604039096469";

export const CAMPAIGN = "the100";

function wholeChargers(left: number) {
  if (!Number.isFinite(left)) return 0;
  return Math.max(0, Math.trunc(left));
}

export function chargerHeading(left: number) {
  return wholeChargers(left) === 0 ? "Home EV chargers" : "A home EV charger, free";
}

export function chargerDetail(left: number) {
  const count = wholeChargers(left);
  if (count === 0) return "The chargers set aside for The 100 have been allocated.";
  if (count === 1) {
    return "For the next home that books and goes ahead. The model is still to be confirmed.";
  }
  return `For the first ${count} homes that book and go ahead. The model is still to be confirmed.`;
}

export function chargerCounter(left: number) {
  const count = wholeChargers(left);
  if (count === 1) return "1 home EV charger left";
  return `${count} home EV chargers left`;
}

export function chargerTerms(left: number) {
  const count = wholeChargers(left);
  if (count === 0) return "The home EV chargers for The 100 have been allocated.";
  if (count === 1) return "The next confirmed order receives the home EV charger.";
  return `The first ${count} confirmed orders receive the home EV charger.`;
}

/** Empty string when the field is blank. "invalid" when it is not a card from 1 to CARD_COUNT. */
export function parseCardNumber(raw: string): "" | "invalid" | string {
  const trimmed = raw.trim().replace(/^#/, "");
  if (!trimmed) return "";
  if (!/^\d{1,3}$/.test(trimmed)) return "invalid";
  const value = Number(trimmed);
  if (!Number.isInteger(value) || value < 1 || value > CARD_COUNT) return "invalid";
  return String(value);
}
