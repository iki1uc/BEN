export async function BEN_PREFETCH() {

    const tmpBEN = await fetch("BEN.tmp").then(r => r.text());
    const tmpNE  = await fetch("NE.tmp").then(r => r.text());
    const tmpDA  = await fetch("DA.tmp").then(r => r.text());

    const room3 = await fetch("BENNC3.room").then(r => r.text());
    const room6 = await fetch("BENNC6D.room").then(r => r.text());
    const room9 = await fetch("BENNC9.room").then(r => r.text());

    return {
        axiome: BEN_AXIOM,
        alt: { tmpBEN, tmpNE, tmpDA },
        room: { room3, room6, room9 },
        state: "BEN-PREFETCH-READY"
    };
}
