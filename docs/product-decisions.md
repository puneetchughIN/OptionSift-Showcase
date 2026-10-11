# Product decisions

## Start with a bounded research job

The goal was to make three existing frameworks usable and inspectable across a
small configured universe. A private single-user beta kept the work focused on
the research workflow. Streaming data, automatic refresh, broker orders and
multi-user hosting would each require a different acceptance boundary.

## Correct inherited behavior deliberately

Legacy parity is valuable only when it preserves behavior worth keeping. The
project first captured baseline calculations, then recorded and tested accepted
corrections separately. Framework applicability, required unknown inputs and
earnings context received explicit treatment. Changes to numerical behavior
needed a recorded reason; a visual redesign was not permission to change rules.

## A label should open into evidence

A compact screener helps find an instrument. The drawer helps understand it.
Status, measured values, thresholds, reasons, requiredness and dates travel
together. Technical source and rule details remain available without dominating
the initial screen. Missing information remains visible rather than being filled
with a favorable assumption.

## History is a research record

Each scan has its own identity and observation window. More than one run can
belong to one market date. Selecting history must retain the requested/displayed
distinction even while another request is loading or has failed. Counts compare
stored framework results; they do not measure returns.

## Refresh means an explicit request

Reading saved research and fetching fresh evidence are different actions.
Only a user-requested Refresh starts a bounded scan. Progress, cooldown, one active
scan and idempotency handle repeated intent and ambiguous responses. Failed
retrieval does not make an older price appear freshly observed.

## One app and one database

React/TypeScript handles presentation; FastAPI coordinates typed reads and scans;
pure Python modules calculate indicators and framework rules; Postgres stores
immutable evidence. This is enough for the accepted local beta. Extra services
were not needed to solve its current research job.

## The showcase should demonstrate the working product

Connected and explicitly synthetic adapters use the same workspace and drawer.
The demonstration is selected deliberately and labelled visibly. It is never
a fallback that masks an API failure. The case study publishes reviewed synthetic
assets, independent examples and product explanations through a separate tree.

