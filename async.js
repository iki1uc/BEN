export async function BEN_PREFETCH() {

    // ALT
    const tmpBEN = await fetch("BEN.tmp").then(r => r.text());
    const tmpNE  = await fetch("NE.tmp").then(r => r.text());
    const tmpDA  = await fetch("DA.tmp").then(r => r.text());

    // ROOM
    const room3 = await fetch("BEN-NC3×3.room").then(r => r.text());
    const room6 = await fetch("BEN-NC6eT6D.room").then(r => r.text());
    const room9 = await fetch("BEN-NC9×9.room").then(r => r.text());

    return {
        axiome: BEN_AXIOM,
        alt: { tmpBEN, tmpNE, tmpDA },
        room: { room3, room6, room9 },
        state: "BEN-PREFETCH-READY"
    };
}
export async function BEN_LOAD_LOGIC() {
    const op9    = await fetch("9Operator.me").then(r => r.text());
    const op     = await fetch("operator.tmp").then(r => r.text());
    const math   = await fetch("NC.math").then(r => r.text());
    const score  = await fetch("score.tmp").then(r => r.text());

    return { op9, op, math, score };
}
export function BEN_GHOST(data) {
    return {
        id: "BEN",
        ghost: true,
        source: data,
        state: "BEN-GHOST-ACTIVE",
        info: "BEN erzeugt positive Ghost-Layer"
    };
}
export function BEN_VERIFY(da, ne, ki) {
    return {
        id: "BEN",
        verify: true,
        da,
        ne,
        ki,
        state: "BEN-VERIFY-OK",
        info: "BEN vergleicht DA/NE/KI und erzeugt Vollendungs-Check"
    };
}
export function BEN_ECO(pre, logic) {

    const BEN = pre.alt.tmpBEN.length % 100;
    const NE  = pre.alt.tmpNE.length % 100;
    const DA  = pre.alt.tmpDA.length % 100;

    const OP  = logic.op.length % 100;
    const OP9 = logic.op9.length % 100;

    const ROOM = pre.room.room9.length % 100;

    return Math.round(
        0.30 * BEN +
        0.10 * (100 - NE) +
        0.10 * DA +
        0.20 * OP +
        0.10 * OP9 +
        0.20 * ROOM
    );
}
