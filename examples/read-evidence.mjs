// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Puneet Chugh
// Provider-free, credential-free display of illustrative stored labels.
// This is not a scoring engine and makes no market or contract claims.
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const evidence = JSON.parse(readFileSync(new URL('./evidence.json', import.meta.url), 'utf8'));
assert.equal(evidence.label, 'Synthetic demonstration data');
assert.equal(evidence.currency, 'USD');
assert.equal(evidence.observations.length, 5);
console.log(evidence.label, '— market session', evidence.market_date);
for (const row of evidence.observations) {
  assert(['CANDIDATE', 'WATCH', 'WAIT', 'UNAVAILABLE', 'EXCLUDED'].includes(row.stored_status));
  if (row.checks.some(check => check.required && ['unknown', 'unavailable'].includes(check.status))) {
    assert.notEqual(row.stored_status, 'CANDIDATE');
  }
  console.log(row.ticker, row.framework.toUpperCase(), row.stored_status, `$${row.close.toFixed(2)} USD`, '(synthetic)');
}
