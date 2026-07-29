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
