𝑂9×9 ⊂ 𝑊∞
𝑊∞ = 𝐼12 ⊗ 𝐼12
...
NanoMesser = 𝑇6𝐷,6𝐸(𝑊128)
AtomMesser = Eigenorbit(𝐸∞)
REV0.877 = NanoMesser + AtomMesser
REV1.0 = Norm(REV0.877)
export async function BEN_LOAD_LOGIC() {
    const op9    = await fetch("9Operator.me").then(r => r.text());
    const op     = await fetch("operator.tmp").then(r => r.text());
    const math   = await fetch("NC.math").then(r => r.text());
    const score  = await fetch("score.tmp").then(r => r.text());

    return { op9, op, math, score };
}
