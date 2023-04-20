module.exports = scenario;

function scenario(log, cb) {
  var value = 97;
  log.info({ value: value }, "scenario");

  function start() {
    process.nextTick(thing);
  }

  function foo() {
    value *= 13;
    log.info({ value: value }, "foo");
    cb(value);
  }

  start();

  function racer() {
    value &= 255;
    // setTimeout(foo, 0);
    log.info({ value: value }, "racer");
    process.nextTick(foo);
  }

  // value = 213;
  log.error();
  log.info({ value: value }, "scenario");

  function thing() {
    value += 131;
    log.info({ value: value }, "thing");
    process.nextTick(racer);
  }
}
