# Website copy sources

Reviewed on 2026-09-11 against the RSI综述 project's active LaTeX manuscript.
`git pull --ff-only` confirmed that `main` was current with `overleaf/main` at
`d5ba7f456c15bc4ed41730cd6134655f16a82e87`. The paper repository was read without
editing its manuscript or publishing a new version.

The public [arXiv record](https://arxiv.org/abs/2609.11873) confirms the title and
v1 submission date (2026-09-10). The bundled
[`2609.11873v1.pdf`](../public/research/2609.11873v1.pdf) contains the matching
definitions and results below. Page numbers refer to this 75-page PDF.

## Claim-to-source map

| Website copy | Active manuscript source | Public PDF |
| --- | --- | --- |
| Exact title: *The Last AI Built by Humans: Toward Genuine Recursive Self-Improvement* | `main.tex`, active `\title` | p. 1 |
| Persistent self-change that also affects future improvement | `main.tex`, abstract; `src/foundations.tex:125–127` | pp. 1, 10 |
| Improvement loop, autonomy criterion, recursion versus performance | `src/intro.tex:212–220` | §§1.7, pp. 6–7 |
| HCI methodology, 393 observations, ten domains; 52.6 / 39.9 / 85.8 values | `src/foundations.tex:46–74` | §2.1, pp. 7–9 |
| Post-2026 curves are illustrative | `src/foundations.tex:76–83` | §2.1, p. 9 |
| B0 is the non-RSI reference, without persistent system changes | `src/L0.tex:24–27` | §3.1, p. 12 |
| L1–L5 describe improvement responsibility | `src/intro.tex:148–156`; `src/cross_level.tex:4–9` | §§1.4, 3.7, pp. 5, 35–36 |
| Science, embodied intelligence, software engineering, healthcare | `src/intro.tex:161–176`; active `src/app_S1.tex` | §4, pp. 36–44 |
| Five fixed model–harness pairings; 30 tasks / 547 rubrics; 18.65–39.67 percentage-point gains; scope-creep regressions | `src/theseus.tex:19,45–51,69` | §5.1, Table 9b, pp. 44–45 |
| Theseus's full co-evolution cycle remains to be established | `src/future.tex:64` | §6, p. 50 |
| Bounded meta-improvement; sustained gains under comparable resources remain open | `src/L5.tex:119`; `src/cross_level.tex:9` | §§3.6–3.7, pp. 35–36 |

## Evidence boundaries

- HCI is normalized benchmark headroom closure relative to an entry-year
  frontier. It is not raw accuracy, an RSI intervention effect, or proof that RSI
  caused historical model gains. Do not report the illustrative future extension
  as a measured result or forecast.
- The Theseus productivity study and clean-versus-noise pilot are separate.
  The pilot uses eight configurations and 1,280 rubrics; do not combine those
  denominators with the productivity study's five pairings and 547 rubrics.
  The productivity comparison fixes model and harness; it does not establish
  equal total compute or multi-generation improvement.
- Autonomy levels classify control over improvement decisions. B0 is outside
  RSI, and a higher level is not a capability ranking or an efficiency guarantee.
- Distinguish structural recursion (a revised mechanism is retained and reused)
  from effective recursion (better successors under comparable budgets and
  independent evaluation). Keep preliminary and company-reported results qualified.
- The five perspectives in `CommunityComments.tsx` were supplied by the user.
  Echo, Kernel, Orbit, Relay, and Atlas are the requested pseudonyms; these are
  editorial viewpoints, not verbatim paper quotations or experimentally established
  conclusions. Do not attach real identities or affiliations to them.

## Updating research copy

Follow the active inputs in `main.tex`, excluding commented passages, `\iffalse`
blocks, and unused draft files. Check titles and numbers against the public paper,
retain experimental scope and limitations, and update this map when claims change.
Keep research content in `src/data/research.ts`; the homepage and detail page share
the report title and summary.

## Env-Rethink paper copy (added 2026-09-24)

The second report (`env-rethink-2026`) is backed by the local preprint
[`env-rethink-paper.pdf`](../public/research/env-rethink-paper.pdf)
("Breaking the Environment Wall: Evolving LLM Agent Environments for Recursive
Self-Improvement", 25 pages, no arXiv ID yet — the arXiv button is omitted until
the paper is submitted). Page numbers below refer to this PDF.

| Website copy | Paper source |
| --- | --- |
| Exact title | Title block, p. 1 |
| 83.9% → 57.6%, 26.3 pp drop; nine configurations, 30 tasks, 1,280 rubric checks | §2.3 / abstract, pp. 1, 4 |
| Collection Map + Event Log organization | §4, C2, pp. 6–7 |
| 27B file-verification model, teacher trajectories, selected files + evidence report | §5, C3, pp. 8–9; abstract "(27B post-trained model)" |
| Event-driven evolution, updated reference outcomes and checks | §6, C4, p. 10 |
| Mean 59.4% (Qwen3.8-27B) → 72.7% (Env-Rethink); +13.3 pp over Qwen3.8-27B; 3.4–17.8 pp gains across nine models | §7.3.2, p. 13 |
| 32 of 55 retained Terminal-Bench 2.1 tasks harder in ≥3 of 4 models, ten categories | §7.4, p. 14 |

Evidence boundaries for Env-Rethink copy:

- The 72.7% figure is the mean rubric pass rate over nine downstream models on the
  30-task Environment-Hard set (1,280 checks each); it is not a per-model guarantee.
  Per-model gains over Qwen3.8-27B preparation range from 3.4 to 17.8 points.
- The Clean/Noise motivating comparison (83.9% → 57.6%) is a separate study from
  the Env-Rethink downstream comparison (57.6% full → 59.4% Qwen → 72.7%
  Env-Rethink); do not mix their conditions. Note 57.6% appears in both as the
  Noise mean and the full-environment mean.
- Terminal-Bench 2.1 evolution results cover 55 of 59 seeds after exclusions,
  four models, nominal three trials per arm, and native binary task-success
  scoring; 21 tasks decreased in all four models.
- The abstract's "over 15.1% rubric pass rate improvement across nine models"
  refers to the minimum per-model gain over the full-environment condition
  (8.4–18.5 pp range is over full environments; 3.4–17.8 pp over Qwen3.8-27B).
  Website copy uses the 59.4% → 72.7% mean comparison to avoid ambiguity.
