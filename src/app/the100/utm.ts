const UTM_KEY = /^utm_[a-z0-9_]{1,40}$/i;
const MAX_UTM_FIELDS = 8;
const MAX_UTM_LENGTH = 200;

export type UtmField = { name: string; value: string };

export function utmFields(params: Record<string, string | string[] | undefined>): UtmField[] {
  const fields: UtmField[] = [];
  const seen = new Set<string>();

  for (const [key, raw] of Object.entries(params)) {
    if (fields.length >= MAX_UTM_FIELDS) break;
    const name = key.trim();
    if (!UTM_KEY.test(name)) continue;
    const id = name.toLowerCase();
    if (seen.has(id)) continue;
    const first = Array.isArray(raw) ? raw[0] : raw;
    if (!first) continue;
    const value = first.replace(/[\r\n\t]+/g, " ").trim().slice(0, MAX_UTM_LENGTH);
    if (!value) continue;
    seen.add(id);
    fields.push({ name, value });
  }

  return fields;
}
