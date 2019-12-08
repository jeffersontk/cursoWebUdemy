//middleware pattern(chain of responsibility)

const pessoa1 = (ctx, netx) => {
  ctx.valor1 = "mid1";
  netx();
};

const pessoa2 = (ctx, netx) => {
  ctx.valor2 = "mid2";
  netx();
};
const pessoa3 = ctx => (ctx.valor3 = "mid3");

const exec = (ctx, ...middlewares) => {
  const execPasso = indice => {
    middlewares &&
      indice < middlewares.length &&
      middlewares[indice](ctx, () => execPasso(indice + 1));
  };
  execPasso(0);
};

const ctx = {};
exec(ctx, pessoa1, pessoa2, pessoa3);
console.log(ctx);
